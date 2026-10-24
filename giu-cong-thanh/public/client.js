const button=document.getElementById('download'),status=document.getElementById('release');
try{const response=await fetch('/api/client-release',{cache:'no-store'}),data=await response.json();if(!response.ok)throw Error(data.error||'Chưa có bản tải.');
  button.href=data.download;button.textContent='Tải client Windows · v'+data.version;button.classList.remove('disabled');button.removeAttribute('aria-disabled');
  status.textContent=(data.bytes/1024/1024).toFixed(1)+' MB · ZIP · Windows x64';document.getElementById('checksum').textContent='SHA-256: '+data.sha256;
}catch(error){button.textContent='Bản client chưa sẵn sàng';status.textContent=error.message;}
