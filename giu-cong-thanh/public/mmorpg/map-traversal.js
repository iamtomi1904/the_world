export function applyMovement(model, step) {
    const length = Math.hypot(step.dx, step.dy), speed = model.config.movement.speed * model.terrainSpeed();
    if (length) {
        const dx = step.dx / Math.max(1, length), dy = step.dy / Math.max(1, length), grade = (surfaceHeight(model.scene, model.player.x + dx * 8, model.player.y + dy * 8) - surfaceHeight(model.scene, model.player.x, model.player.y)) / 8;
        const slopeFactor = 1 / Math.sqrt(1 + grade * grade);
        model.move(dx * speed * step.dt * slopeFactor, dy * speed * step.dt * slopeFactor);
    }
}
export function segmentDistance(x, y, a, b) {
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const t = Math.max(0, Math.min(1, ((x - a[0]) * dx + (y - a[1]) * dy) / (dx * dx + dy * dy || 1)));
    return Math.hypot(x - a[0] - t * dx, y - a[1] - t * dy);
}
export function onPath(x, y, p) {
    return p.points.slice(1).some((b, i) => segmentDistance(x, y, p.points[i], b) <= p.width / 2);
}
const rect = (x, y, r) => x >= r[0] && y >= r[1] && x <= r[0] + r[2] && y <= r[1] + r[3];
export function terrainAt(s, x, y) {
    const g = s.navigation || s.grid;
    if (!g)
        return 0;
    const cx = Math.floor(x / g.cell), cy = Math.floor(y / g.cell);
    return cx < 0 || cy < 0 || cx >= g.width || cy >= g.height ? 0 : g.data[cy * g.width + cx];
}
const faceIndices = new WeakMap();
const faceHeights = new WeakMap();
function inPolygon(x, y, points) { let inside = false; for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    const a = points[i], b = points[j];
    if ((a[1] > y) !== (b[1] > y) && x < (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]) + a[0])
        inside = !inside;
} return inside; }
/** Height is derived from authoritative map surfaces; saved XY already uses projected ground coordinates. */
export function surfaceHeight(s, x, y) {
    const geo = s.geology, unit = geo?.surface?.heightPerLevel;
    if (!geo || !unit)
        return 0;
    let index = faceIndices.get(s);
    if (!index) {
        index = new Map();
        for (const f of geo.faces) {
            const [a, b, c, d] = f.bounds;
            for (let yy = Math.floor(b / 128); yy <= Math.floor(d / 128); yy++)
                for (let xx = Math.floor(a / 128); xx <= Math.floor(c / 128); xx++) {
                    const k = xx + ',' + yy, list = index.get(k) || [];
                    list.push(f);
                    index.set(k, list);
                }
        }
        faceIndices.set(s, index);
    }
    const raw = (px, py) => { let level = 0; for (const r of geo.regions)
        if (inPolygon(px, py, r.polygon)) {
            if (r.level > 0)
                level = Math.max(level, r.level);
            else if (level === 0)
                level = r.level;
        } return level; };
    const nearby = index.get(Math.floor(x / 128) + ',' + Math.floor(y / 128)) || [];
    if (!nearby.length && s.elevation) {
        const g = s.elevation, c = g.cell * s.scale;
        return (g.data[Math.floor(y / c) * g.width + Math.floor(x / c)] || 0) * unit;
    }
    for (const f of nearby)
        if (inPolygon(x, y, f.quad)) {
            const top = [(f.top[0][0] + f.top[1][0]) / 2, (f.top[0][1] + f.top[1][1]) / 2], base = [(f.base[0][0] + f.base[1][0]) / 2, (f.base[0][1] + f.base[1][1]) / 2], dx = top[0] - base[0], dy = top[1] - base[1], t = Math.max(0, Math.min(1, ((x - base[0]) * dx + (y - base[1]) * dy) / (dx * dx + dy * dy || 1)));
            let heights = faceHeights.get(f);
            if (!heights) {
                heights = [raw(base[0] - dx * .15, base[1] - dy * .15), raw(top[0] + dx * .15, top[1] + dy * .15)];
                faceHeights.set(f, heights);
            }
            const [low, high] = heights;
            return (low + (high - low) * t) * unit;
        }
    return raw(x, y) * unit;
}
export class MapTraversal {
    config;
    id = 'world';
    player = { x: 0, y: 0 };
    returnPoint = null;
    blocked = 0;
    collisionIndex = new Map();
    constructor(config) {
        this.config = config;
        // Static spatial buckets avoid scanning every tree for every movement substep.
        for (const [id, s] of Object.entries(config.scenes)) {
            const buckets = new Map();
            for (const o of s.objects || []) {
                if (!o.collider && !o.radius)
                    continue;
                const r = o.collider || [o.x - o.radius, o.y - o.radius, o.radius * 2, o.radius * 2];
                for (let y = Math.floor(r[1] / 50); y <= Math.floor((r[1] + r[3]) / 50); y++)
                    for (let x = Math.floor(r[0] / 50); x <= Math.floor((r[0] + r[2]) / 50); x++) {
                        const key = x + ',' + y, list = buckets.get(key) || [];
                        list.push(o);
                        buckets.set(key, list);
                    }
            }
            this.collisionIndex.set(id, buckets);
        }
        if (!this.place('world', config.scenes.world.spawn))
            throw Error('Invalid spawn');
    }
    get scene() { return this.config.scenes[this.id]; }
    canStand(x, y, id = this.id) {
        const s = this.config.scenes[id];
        if (!s || !Number.isFinite(x) || !Number.isFinite(y))
            return false;
        const r = this.config.movement.radius / s.scale, bx = x / s.scale, by = y / s.scale;
        if (bx - r < 0 || by - r < 0 || bx + r >= s.size[0] || by + r >= s.size[1])
            return false;
        if (s.grid) {
            // Check every tile overlapped by the circular foot collider, including diagonals.
            const g = s.navigation || s.grid;
            for (let ty = Math.floor((by - r) / g.cell); ty <= Math.floor((by + r) / g.cell); ty++)
                for (let tx = Math.floor((bx - r) / g.cell); tx <= Math.floor((bx + r) / g.cell); tx++) {
                    const nx = Math.max(tx * g.cell, Math.min(bx, (tx + 1) * g.cell));
                    const ny = Math.max(ty * g.cell, Math.min(by, (ty + 1) * g.cell));
                    if (Math.hypot(bx - nx, by - ny) < r && [0, 3, 6, 7].includes(terrainAt(s, tx * g.cell + .01, ty * g.cell + .01)))
                        return false;
                }
            const nearby = new Set();
            for (let yy = Math.floor((by - r) / 50); yy <= Math.floor((by + r) / 50); yy++)
                for (let xx = Math.floor((bx - r) / 50); xx <= Math.floor((bx + r) / 50); xx++)
                    for (const o of this.collisionIndex.get(id)?.get(xx + ',' + yy) || [])
                        nearby.add(o);
            for (const o of nearby) {
                if (o.radius && Math.hypot(bx - o.x, by - o.y) < r + o.radius)
                    return false;
                if (o.collider) {
                    const a = o.collider;
                    const nx = Math.max(a[0], Math.min(bx, a[0] + a[2])), ny = Math.max(a[1], Math.min(by, a[1] + a[3]));
                    if (Math.hypot(bx - nx, by - ny) < r || rect(bx, by, a))
                        return false;
                }
            }
            return true;
        }
        return [[0, 0], [r, 0], [-r, 0], [0, r], [0, -r]].every(([dx, dy]) => !s.blockedRects.some(v => rect(bx + dx, by + dy, v)) &&
            (s.paths.some(p => onPath(bx + dx, by + dy, p)) || s.floorRects.some(v => rect(bx + dx, by + dy, v))));
    }
    place(id, point) {
        const s = this.config.scenes[id];
        if (!s)
            return false;
        const x = point[0] * s.scale, y = point[1] * s.scale;
        if (!this.canStand(x, y, id))
            return false;
        this.id = id;
        this.player = { x, y };
        return true;
    }
    move(dx, dy) {
        if (!Number.isFinite(dx) || !Number.isFinite(dy))
            return;
        const n = Math.max(1, Math.ceil(Math.hypot(dx, dy) / this.config.movement.substep));
        for (let i = 0; i < n; i++) {
            if (dx) {
                if (this.canTraverse(this.player.x, this.player.y, this.player.x + dx / n, this.player.y))
                    this.player.x += dx / n;
                else
                    this.blocked++;
            }
            if (dy) {
                if (this.canTraverse(this.player.x, this.player.y, this.player.x, this.player.y + dy / n))
                    this.player.y += dy / n;
                else
                    this.blocked++;
            }
        }
    }
    canTraverse(x, y, tx, ty) { return this.canStand(tx, ty) && Math.abs(surfaceHeight(this.scene, tx, ty) - surfaceHeight(this.scene, x, y)) <= (this.scene.geology?.surface?.maxStepHeight ?? Infinity); }
    terrainSpeed() {
        const s = this.scene;
        if (s.grid)
            return terrainAt(s, this.player.x / s.scale, this.player.y / s.scale) === 5 ? .8 : 1;
        return s.shallow && onPath(this.player.x / s.scale, this.player.y / s.scale, s.shallow) ? s.shallow.speed ?? 1 : 1;
    }
    nearest() {
        return this.scene.portals.map(p => ({ ...p, d: Math.hypot(this.player.x - p.at[0] * this.scene.scale, this.player.y - p.at[1] * this.scene.scale) }))
            .filter(p => p.d <= this.config.movement.interactionRange).sort((a, b) => a.d - b.d)[0];
    }
    interact() {
        const p = this.nearest();
        if (!p)
            return false;
        if (p.target === 'world') {
            if (!this.returnPoint)
                return false;
            const point = [...this.returnPoint];
            if (!this.place('world', point))
                return false;
            this.returnPoint = null;
            return true;
        }
        const back = [this.player.x / this.scene.scale, this.player.y / this.scene.scale];
        if (!this.place(p.target, this.config.scenes[p.target].spawn))
            return false;
        this.returnPoint = back;
        return true;
    }
    home() { this.returnPoint = null; return this.place('world', this.config.scenes.world.spawn); }
}
