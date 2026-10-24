export type Point = [number, number];
export type Rect = [number, number, number, number];
export interface Path {
    points: Point[];
    width: number;
    speed?: number;
}
export interface Portal {
    id: string;
    name: string;
    at: Point;
    target: string;
}
export interface MapObject {
    id: string;
    kind: string;
    x: number;
    y: number;
    width: number;
    collider?: Rect;
    radius?: number;
    flip?: boolean;
    variant?: number;
    label?: string;
    asset?: string;
    axis?: string;
}
export interface TileGrid {
    width: number;
    height: number;
    cell: number;
    data: number[];
}
export interface TerrainFace {
    id: string;
    region: string;
    level: number;
    material: string;
    quad: Point[];
    top: Point[];
    base: Point[];
    bounds: number[];
    ramp: boolean;
    u0?: number;
    u1?: number;
}
export interface HydroArea {
    id: string;
    deep: boolean;
    water: Point[];
    bed: Point[];
    bank: Point[];
    center: Point[];
    bounds: number[];
}
export interface Geology {
    version: number;
    surface?: {
        heightPerLevel: number;
        maxStepHeight: number;
    };
    regions: {
        name: string;
        level: number;
        polygon: Point[];
    }[];
    faces: TerrainFace[];
    hydrology: HydroArea[];
    roads: Path[];
    decks: {
        id: string;
        rect: Rect;
    }[];
    falls: {
        at: Point;
        face: Point[];
        width: number;
        depth: number;
    }[];
}
export interface SceneData {
    theme?: 'seal' | 'roots' | 'limestone';
    name: string;
    size: Point;
    scale: number;
    spawn: Point;
    image?: string;
    paths: Path[];
    floorRects: Rect[];
    blockedRects: Rect[];
    portals: Portal[];
    shallow?: Path;
    foreground?: Point[];
    grid?: TileGrid;
    objects?: MapObject[];
    elevation?: TileGrid;
    navigation?: TileGrid;
    geology?: Geology;
}
export interface MovementStep {
    id: number;
    dx: number;
    dy: number;
    dt: number;
}
export declare function applyMovement(model: MapTraversal, step: MovementStep): void;
export interface MapConfig {
    version: number;
    movement: {
        speed: number;
        radius: number;
        interactionRange: number;
        substep: number;
    };
    scenes: Record<string, SceneData>;
    landmarks: {
        name: string;
        at: Point;
    }[];
}
export declare function segmentDistance(x: number, y: number, a: Point, b: Point): number;
export declare function onPath(x: number, y: number, p: Path): boolean;
export declare function terrainAt(s: SceneData, x: number, y: number): number;
/** Height is derived from authoritative map surfaces; saved XY already uses projected ground coordinates. */
export declare function surfaceHeight(s: SceneData, x: number, y: number): number;
export declare class MapTraversal {
    config: MapConfig;
    id: string;
    player: {
        x: number;
        y: number;
    };
    returnPoint: Point | null;
    blocked: number;
    private collisionIndex;
    constructor(config: MapConfig);
    get scene(): SceneData;
    canStand(x: number, y: number, id?: string): boolean;
    place(id: string, point: Point): boolean;
    move(dx: number, dy: number): void;
    canTraverse(x: number, y: number, tx: number, ty: number): boolean;
    terrainSpeed(): number;
    nearest(): {
        id: string;
        name: string;
        at: Point;
        target: string;
        d: number;
    };
    interact(): boolean;
    home(): boolean;
}
