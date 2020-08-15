const canvas = document.getElementById('canvas1');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.globalCompositeOperation = 'destination-over';
hue = Math.random() * 360;
let number = 0;
let scale = Math.floor(Math.random() * 15) + 5;
let pattern = Math.floor(Math.random() * 1) + 100;

function drawFlower() {
  let angle = number * pattern;
  let radius = scale * Math.sqrt(number);
  let positionX = radius * Math.sin(angle) + canvas.width / 2;
  let positionY = radius * Math.cos(angle) + canvas.height / 2;
  ctx.fillStyle = `hsl(${hue},100%,50%)`;
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(positionX, positionY, 10, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  number++;
  hue += 0.5;
}

function animate() {
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawFlower();
  if (number > 500) return;
  requestAnimationFrame(animate);
}
animate();
