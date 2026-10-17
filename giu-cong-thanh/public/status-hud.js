import {GEMS} from './gems.js';
import {BIOMES} from './world-biomes.js';
import {UPGRADES,upgradeRank} from './progression.js';
let panel,signature='';
const pct=n=>Math.round(n*100)+'%';
const fields={armor:'Giáp',haste:'Tốc đánh',speed:'Tốc chạy',lifesteal:'Hút máu',powerMultiplier:'Công',leaderRegen:'Hồi HP/giây',shield:'Khiên',stealth:'Ẩn thân',reduction:'Giảm sát thương',healPerSecond:'Hồi HP/giây',power:'Công',bleedChance:'Tỷ lệ chảy máu',bleed:'Chảy máu',woundedBonus:'Công lên mục tiêu bị thương'};
function describe(b){return Object.entries(fields).filter(([k])=>b[k]).map(([k,label])=>label+' '+(k==='armor'?b[k]:['shield','stealth'].includes(k)?'đang bật':pct(b[k]))).join(' · ');}
export function updateStatusHUD(m,p){
 if(!panel){panel=document.createElement('aside');panel.id='status-effects-hud';panel.setAttribute('aria-label','Buff và debuff nhân vật');document.querySelector('.battlefield').append(panel);const style=document.createElement('style');style.textContent=`#status-effects-hud{position:absolute;left:12px;top:62px;z-index:12;max-width:245px;max-height:44%;overflow:auto;pointer-events:auto;color:#e7dfba;font:11px system-ui;background:#122019a8;border:1px solid #9b98634d;border-radius:5px;padding:6px;box-shadow:0 2px 8px #0003}#status-effects-hud header{font-size:10px;letter-spacing:1px;color:#c1b477;margin-bottom:5px}#status-effects-hud .status-list{display:flex;flex-wrap:wrap;gap:4px}#status-effects-hud .status-chip{padding:3px 5px;border:1px solid #81ab8370;background:#243a2adb;border-radius:3px;cursor:help}#status-effects-hud .status-chip.bad{border-color:#ce836c;background:#482b2ada}#status-effects-hud small{color:#d1c9a0;margin-left:3px}#status-effects-hud .status-summary{margin-top:5px;color:#b1baa2;font-size:10px;line-height:1.5}@media(max-width:700px){#status-effects-hud{left:5px;top:78px;max-width:165px;max-height:28%;font-size:10px}}`;document.head.append(style);}
 panel.hidden=!['prepare','battle','clear'].includes(m.phase);if(panel.hidden)return;
 const entries=[];const add=(name,time,detail='',bad=false)=>entries.push({name,time:time>0?Math.ceil(time)+'s':'',detail,bad});
 for(const b of p.buffs||[])if(b.time>0)add(b.name||(b.stealth?'Ẩn thân':b.holyQ?'Thánh Trảm':b.aura==='rally'?'Hiệu Triệu':b.shield?'Khiên bảo hộ':b.haste?'Cường hóa tốc đánh':b.armor?'Cường hóa giáp':'Cường hóa'),b.time,describe(b));
 if(p.shield>0)add('Khiên '+Math.ceil(p.shield),0,'Lượng sát thương còn có thể hấp thụ');
 if(p.holyMounted)add('Thiên mã',0,'Hao mana mỗi giây; R hồi khi kết thúc');
 if(p.fallenMounted)add('Diệt Vong',0,'Hao mana mỗi giây; R hồi khi kết thúc');
 if(p.vanguardTime>0)add('Cự Nhân',p.vanguardTime,'Cường hóa nội tại và Q/E');
 if(p.holyAura)add('Aura ánh sáng',p.holyAuraTime,describe(p.holyAura));
 if(p.fallenAura)add('Aura hắc ám',p.fallenAuraTime,describe(p.fallenAura));
 if(p.windGuard>0)add('Thanh Phong Hộ Thể',p.windGuard,'Giảm sát thương và tăng tốc chạy');
 if(p.windFieldBuff)add('Phong Bạo Kiếm Vực',0,'Công +20% · Tốc đánh +15% · Tốc chạy +35%');
 if(p.windBladeStacks>0)add('Phong Tuyệt ×'+p.windBladeStacks,p.windStackTime,'Mỗi stack: tốc chạy +2,5%, tốc đánh +4%');
 if(p.windStacks>0)add('Ngọc Gió ×'+p.windStacks,p.windTime,'Tốc đánh +'+pct(p.windStacks*.04));
 if(p.windPermanent>0)add('Gió tích lũy +'+pct(p.windPermanent),0,'Tốc đánh từ hạ gục; qua ải giữ lại 30%');
 if(p.thunderStacks>0)add('Sấm ×'+p.thunderStacks,p.thunderTime,'Tăng số mục tiêu lan');
 if(p.guard)add('Đỡ đòn',0,'Giảm sát thương và tốc độ di chuyển');
 for(const [key,name]of [['bossSlow','Làm chậm'],['bossBurn','Bỏng'],['poisonTime','Trúng độc'],['stun','Choáng'],['gemStun','Đóng băng / choáng']])if(p[key]>0)add(name,p[key],key==='bossSlow'?'Tác nhân: '+(p.slowType||'quái vật'):'Hiệu ứng bất lợi',true);
 const env=p.environment;if(env?.type){const b=BIOMES[env.type];if(b)add(b.name,0,[env.speed!==1?'Tốc chạy ×'+env.speed:'',env.attackSpeed!==1?'Tốc đánh ×'+env.attackSpeed:'',env.armor!==1?'Giáp ×'+env.armor:'',env.burn?'Mất '+pct(env.burn)+' HP mỗi giây':''].filter(Boolean).join(' · '),env.speed<1||env.attackSpeed<1||env.armor<1||env.burn>0);}
 const gem=p.gemEquipped?GEMS.find(g=>g.id===p.gem):null;if(gem)add(gem.name,0,gem.text);
 const summary=Object.entries(UPGRADES).filter(([id])=>upgradeRank(p,id)>0).map(([id,u])=>u.name+' ×'+upgradeRank(p,id));
 if(p.upPower)summary.push('Công +'+p.upPower*6);if(p.upHP)summary.push('Máu +'+p.upHP*40);if(p.mastery)summary.push('Tinh thông '+p.mastery+'/3');
 const relic=p.forestStats||{};if(Object.values(relic).some(v=>v>0))summary.push('Di vật rừng: '+Object.entries(relic).filter(([,v])=>v>0).map(([k,v])=>({power:'Công',armor:'Giáp',haste:'Tốc đánh',healthRegen:'Hồi HP',manaRegen:'Hồi NL'}[k]||k)+' +'+(k==='haste'?pct(v):Number(v.toFixed(2)))).join(', '));
 const next=JSON.stringify([entries,summary]);if(next===signature)return;signature=next;panel.replaceChildren();const header=document.createElement('header');header.textContent='BUFF / DEBUFF · '+entries.length;panel.append(header);const list=document.createElement('div');list.className='status-list';panel.append(list);if(!entries.length)list.textContent='Chưa có hiệu ứng';for(const e of entries){const chip=document.createElement('span');chip.className='status-chip'+(e.bad?' bad':'');chip.tabIndex=0;chip.title=e.detail||e.name;chip.textContent=e.name;if(e.time){const time=document.createElement('small');time.textContent=e.time;chip.append(time);}list.append(chip);}if(summary.length){const line=document.createElement('div');line.className='status-summary';line.textContent=summary.join(' · ');panel.append(line);}
}
