export interface Character {id:string;name:string;race:string;level:number;experience:string;profession:string|null}
export interface State {character:Character;map:string;position:{x:number;y:number};revision:string;devTools:boolean;controlToken:string;needsCharacter?:boolean;ack?:number}
type HTTPError=Error&{status?:number};
const $=<T extends HTMLElement>(id:string)=>document.getElementById(id) as T;
async function request(path:string,body?:Record<string,unknown>):Promise<State>{
  const r=await fetch('/api/mmorpg/'+path,{credentials:'same-origin',cache:'no-store',signal:AbortSignal.timeout(5000),...(body?{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}:{})});
  const data=await r.json();if(!r.ok)throw Object.assign(Error(data.error||'Không kết nối được máy chủ'),{status:r.status});return data;
}
export async function connectCharacter(){
  let state=await request('bootstrap');
  if(state.needsCharacter){await new Promise<void>(resolve=>{
    const dialog=$<HTMLDialogElement>('character-dialog'),form=$<HTMLFormElement>('character-form');
    dialog.addEventListener('cancel',e=>e.preventDefault());dialog.showModal();
    form.onsubmit=async e=>{e.preventDefault();const b=form.querySelector('button')!;b.disabled=true;
      try{await request('character',{race:$<HTMLSelectElement>('character-race').value});dialog.close();resolve();}
      catch(error){$('character-error').textContent=(error as Error).message;}finally{b.disabled=false;}};
  });}
  state=await request('control',{});let sequence=0,busy=false,lastSent=0,closed=false,pendingAction=false;
  let idle:Promise<void>=Promise.resolve();const token=state.controlToken;
  async function send(action:string,fields:Record<string,unknown>={}):Promise<State|null>{
    if(closed)return null;
    if(busy){
      if(action==='input'||pendingAction)return null;
      // One deliberate interaction may wait for movement; repeated clicks do not pile up.
      pendingAction=true;try{await idle;return await send(action,fields);}finally{pendingAction=false;}
    }
    busy=true;let release!:()=>void;idle=new Promise<void>(resolve=>{release=resolve;});
    lastSent=performance.now();
    try{const next=await request(action,{...fields,controlToken:token,sequence:++sequence});return next;}
    catch(error){if([401,409].includes((error as HTTPError).status||0))closed=true;throw error;}
    finally{busy=false;release();}
  }
  return{state,get blocked(){return closed;},send,canSend(moving:boolean){return!busy&&!pendingAction&&!closed&&performance.now()-lastSent>=(moving?100:1000);}};
}
