<script>

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const nameInput = document.getElementById('nameText');
const btnOne = document.getElementById('downloadBtn');

const image = new Image();
image.src = "https://images.clickfunnels.com/e9/1e0db51bc847f0a8c57dd957aaf9dc/Certificado-Demo-Expansion.jpg";
image.onload = function() {
  drawImage();
}

function drawImage(){
 ctx.drawImage(image,0,0,canvas.width, canvas.height);
  ctx.font = '30px Dancing Script, cursive';
  ctx.fillStyle = "#000000";
  ctx.fillText(nameInput.value,65,185);
}

nameInput.addEventListener('input',
function(){
  drawImage()
});

btnOne.addEventListener('click',function(){
  btnOne.href = canvas.toDataURL('image/jpg');
  btnOne.download = 'Certificado de -' + nameInput.value;
});

</script>
