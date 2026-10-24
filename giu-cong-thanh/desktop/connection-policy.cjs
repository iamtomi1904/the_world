const loopback=new Set(['localhost','127.0.0.1','[::1]']);
function normalizeServer(value){
  if(typeof value!=='string'||value.length>2048)throw Error('Địa chỉ máy chủ không hợp lệ.');
  let url;try{url=new URL(value.trim());}catch{throw Error('Nhập đầy đủ địa chỉ, ví dụ http://localhost:3000.');}
  if(url.username||url.password||url.search||url.hash||url.pathname!=='/'||!['http:','https:'].includes(url.protocol))throw Error('Chỉ nhập địa chỉ máy chủ, không kèm tài khoản hoặc đường dẫn.');
  if(url.protocol==='http:'&&!loopback.has(url.hostname))throw Error('Máy chủ online phải dùng HTTPS. HTTP chỉ dùng trên máy local.');
  return url.origin;
}
module.exports={normalizeServer};
