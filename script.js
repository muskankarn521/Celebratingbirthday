// Balloon pop and page 2
function popBalloon() {
  const balloon = document.querySelector('.balloon');
  balloon.classList.add('pop');

  setTimeout(() => {
    document.querySelector('.page1').style.display = 'none';
    document.querySelector('.page2').classList.remove('hidden');
    startConfetti();
    smoothTyping("Raunak Thakur", "name", 150, showLoveButton);
  }, 300); // match pop animation
}

// Typing effect
function smoothTyping(text, elementId, speed, callback) {
  const element = document.getElementById(elementId);
  let i = 0;
  function type() {
    if(i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      if(callback) callback();
    }
  }
  type();
}

// Show button after typing
function showLoveButton() {
  document.getElementById('loveBtn').classList.remove('hidden');
}

// Show page 3
function showPage3() {
  document.querySelector('.page2').style.display = 'none';
  document.querySelector('.page3').classList.remove('hidden');
}

// Confetti setup
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function random(min, max) { return Math.random() * (max - min) + min; }

class Confetto {
  constructor() {
    this.x = random(0, canvas.width);
    this.y = random(-canvas.height, 0);
    this.size = random(20, 40);
    this.speedY = random(0.5, 1.5);
    this.speedX = random(-0.5, 0.5);
    this.opacity = random(0.2,0.5);
  }
  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    if(this.y > canvas.height) this.y = random(-20, -50);
    if(this.x > canvas.width) this.x = 0;
    if(this.x < 0) this.x = canvas.width;
  }
  draw() {
    ctx.globalAlpha = this.opacity;
    ctx.font = this.size + "px Arial";
    ctx.fillText("🐼", this.x, this.y);
    ctx.globalAlpha = 1;
  }
}

function startConfetti() {
  confetti = [];
  for(let i=0;i<50;i++) confetti.push(new Confetto());
  animate();
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  confetti.forEach(c => { c.update(); c.draw(); });
  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


