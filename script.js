const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

class Confetto {
    constructor() {
        this.x = random(0, canvas.width);
        this.y = random(-canvas.height, 0);
        this.size = random(5, 10);
        this.color = Math.random() > 0.5 ? '#FF1493' : '#FFD700'; // pink or gold
        this.speedY = random(2, 5);
        this.speedX = random(-1, 1);
        this.rotation = random(0, 2 * Math.PI);
        this.rotationSpeed = random(-0.05, 0.05);
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        if (this.y > canvas.height) this.y = random(-20, -5);
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
        ctx.restore();
    }
}

// Initialize confetti
for(let i=0;i<150;i++){
    confetti.push(new Confetto());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
        c.update();
        c.draw();
    });
    requestAnimationFrame(animate);
}

animate();

// Resize canvas on window change
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
