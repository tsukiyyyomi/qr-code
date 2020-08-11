let qrcode = new QRCode(document.getElementById("qrcode"));
function generateQR(evnt){
    evnt.preventDefault();
    let data = document.querySelector('input').value;            
    qrcode.makeCode(data);
    let dwnld = document.querySelector('#download');
    dwnld.style.display = 'block';    
    dwnld.style.opacity = 1;
}

function downloadQR(evnt){
evnt.preventDefault();
var link = document.createElement('a');
link.href = document.querySelector('img').src;
link.download = 'qrcode.png';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}

document.querySelector('button').addEventListener('click', generateQR, false)
document.querySelector('#download').addEventListener('click', downloadQR, false)
