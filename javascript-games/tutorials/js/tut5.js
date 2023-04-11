
window.onload = function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    const collisionCanvas = document.getElementById('collision');
    const collisionCtx = collisionCanvas.getContext('2d');
    let canvasPosition = canvas.getBoundingClientRect();

    const CANVAS_WIDTH = canvas.width = collisionCanvas.width = window.innerWidth;
    const CANVAS_HEIGHT = canvas.height = collisionCanvas.height = window.innerHeight;

    let score = 0;
    let gameOver = false;
    ctx.font = '50px Impact';

    let lastTime = 0;
    let timeToNextRaven = 0;
    let ravenInterval = 500;
    let ravens = [];

    class Raven {
        constructor() {
            this.image = new Image();
            this.image.src = '../assets/raven.png';
            this.sizeModifier = Math.random() * 0.6 + 0.4;

            this.spriteWidth = 271;
            this.spriteHeight = 194;
            this.width = this.spriteWidth * this.sizeModifier;
            this.height = this.spriteHeight * this.sizeModifier;

            this.x = CANVAS_WIDTH;
            this.y = Math.random() * (CANVAS_HEIGHT - this.height);
            this.directionX = Math.random() * 5 + 3;
            this.directionY = Math.random() * 5 - 2.5;

            this.markedForDeletion = false;

            this.frame = 0;
            this.maxFrame = 4;
            this.timeSinceFlap = 0;
            this.flapInterval = 200 - this.directionX * 20;
            this.randomColours = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
            this.colour = `rgb(${this.randomColours[0]},${this.randomColours[1]},${this.randomColours[2]})`;

            this.hasTrail = Math.random() > 0.5;
        }

        update(deltaTime) {
            if (this.y < 0 || this.y > CANVAS_HEIGHT - this.height) {
                this.directionY = this.directionY * -1;
            }

            this.x -= this.directionX;
            this.y += this.directionY;
            if (this.x < 0 - this.width) this.markedForDeletion = true;

            this.timeSinceFlap += deltaTime;

            if (this.timeSinceFlap > this.flapInterval) {
                this.timeSinceFlap = 0;
                if (this.frame > this.maxFrame) this.frame = 0;
                else this.frame++;

                if (this.hasTrail)
                    for (let i = 0; i < 5; i++) {
                        particles.push(new Particle(this.x, this.y, this.width, this.colour))
                    }
            }

            if (this.x < 0 - this.width) gameOver = true;
        }

        draw() {
            collisionCtx.fillStyle = this.colour;
            collisionCtx.fillRect(this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.spriteWidth * this.frame, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }
    }

    let explosions = [];
    class Explosion {
        constructor(x, y, size) {
            this.image = new Image();
            this.image.src = '../assets/boom.png';
            this.spriteWidth = 200;
            this.spriteHeight = 179;
            this.x = x;
            this.y = y;
            this.size = size;
            this.angle = Math.random() * 6.2;
            this.frame = 0;

            this.sound = new Audio();
            this.sound.src = '../assets/boom.wav';

            this.timeSinceLastFrame = 0;
            this.frameInterval = 200;

            this.markedForDeletion = false;
        }

        update(deltaTime) {
            if (this.frame == 0) this.sound.play();

            this.timeSinceLastFrame += deltaTime;
            if (this.timeSinceLastFrame > this.frameInterval) {
                this.timeSinceLastFrame = 0;
                this.frame++;
                if (this.frame > 5) this.markedForDeletion = true;
            }
        }

        draw() {
            ctx.drawImage(
                this.image,
                this.spriteWidth * this.frame,
                0,
                this.spriteWidth,
                this.spriteHeight,
                this.x,
                this.y,
                this.size,
                this.size
            );
        }
    }

    let particles = [];
    class Particle {
        constructor(x, y, size, colour) {
            this.size = size;
            this.x = x + this.size / 2;
            this.y = y + this.size / 3;
            this.radius = Math.random() * this.size / 10;
            this.maxRadius = Math.random() * 20 + 35;
            this.speedX = Math.random() * 1 + 0.5;
            this.colour = colour;

            this.markedForDeletion = false;
        }

        update() {
            this.x += this.speedX;
            this.radius += 0.5;

            if (this.radius > this.maxRadius - 2) this.markedForDeletion = true;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = 1 - this.radius / this.maxRadius;
            ctx.beginPath();
            ctx.fillStyle = this.colour;
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    function drawScore() {
        ctx.fillStyle = 'black';
        ctx.fillText('Score: ' + score, 50, 75)
    }

    function drawGameOver() {
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center'
        ctx.fillText('Game over, your score is ' + score, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 5)
    }

    window.addEventListener('click', function (e) {
        const detectPixelColour = collisionCtx.getImageData(e.x - canvasPosition.x, e.y - canvasPosition.y, 1, 1);
        const pc = detectPixelColour.data;
        ravens.forEach(r => {
            if (r.randomColours[0] === pc[0] && r.randomColours[1] === pc[1] && r.randomColours[2] === pc[2]) {
                explosions.push(new Explosion(r.x - canvasPosition.left, r.y - canvasPosition.top, r.width));

                r.markedForDeletion = true;
                score++;
            }
        })
    });

    function animate(timestamp) {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        collisionCtx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        let deltaTime = timestamp - lastTime;
        lastTime = timestamp;

        timeToNextRaven += deltaTime;
        if (timeToNextRaven > ravenInterval) {
            timeToNextRaven = 0;
            ravens.push(new Raven())
            ravens.sort(function (a, b) {
                return a.width - b.width;
            })
        }

        drawScore();
        [...particles, ...ravens, ...explosions].forEach(obj => obj.update(deltaTime));
        [...particles, ...ravens, ...explosions].forEach(obj => obj.draw());

        ravens = ravens.filter(r => !r.markedForDeletion);
        explosions = explosions.filter(r => !r.markedForDeletion);
        particles = particles.filter(r => !r.markedForDeletion);

        if (!gameOver)
            requestAnimationFrame(animate);
        else drawGameOver();
    }

    animate(0);
}