/* ---------------- PAGE 1 ---------------- */
const balloon = document.getElementById('balloon');
if(balloon){
  balloon.addEventListener('click', () => {
    balloon.classList.add('pop');
    setTimeout(() => {
      window.location.href = 'index1.html';
    }, 500);
  });
}

/* ---------------- PAGE 2 ---------------- */
const nameElement = document.getElementById('name');
const openLink = document.getElementById('openLink');
if(nameElement){
  const nameText = "RAUNAK THAKUR"; // Replace with actual name
  let i = 0;

  function typeName(){
    if(i < nameText.length){
      nameElement.textContent += nameText.charAt(i);
      i++;
      setTimeout(typeName, 150);
    } else {
      setTimeout(() => {
        openLink.style.opacity = 1;
      }, 2000);
    }
  }

  typeName();
}

if(openLink){
  openLink.addEventListener('click', () => {
    alert("You can link to the next page here."); 
    // Replace with: window.location.href = 'index2.html';
  });
}


/* ---------------- PAGE 3: Emoji Confetti ---------------- */
const confettiCanvas = document.getElementById('confetti');
if(confettiCanvas){
  const ctx = confettiCanvas.getContext('2d');
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const emojiList = ["🎂","❤️","😊"]; // cake, heart, face emojis
  const confettiCount = 50;
  const confetti = [];

  for(let i=0; i<confettiCount; i++){
    confetti.push({
      x: Math.random()*confettiCanvas.width,
      y: Math.random()*confettiCanvas.height,
      size: Math.random()*20+20,
      emoji: emojiList[Math.floor(Math.random()*emojiList.length)],
      speed: Math.random()*1 + 0.5,
      angle: Math.random()*Math.PI*2
    });
  }

  function drawConfetti(){
    ctx.clearRect(0,0,confettiCanvas.width, confettiCanvas.height);
    confetti.forEach(c => {
      ctx.globalAlpha = 0.5; // semi-transparent
      ctx.font = c.size + "px Arial";
      ctx.fillText(c.emoji, c.x, c.y);
      c.y += c.speed;
      c.x += Math.sin(c.angle)*0.5;
      if(c.y > confettiCanvas.height) c.y = -20;
      if(c.x > confettiCanvas.width) c.x = 0;
    });
    requestAnimationFrame(drawConfetti);
  }

  drawConfetti();
}

