
window.onload = function () {
    /** @type {HTMLCanvasElement} */
    const canvas1 = document.getElementById('canvas1');
    const ctx1 = canvas1.getContext('2d');
    const canvas2 = document.getElementById('canvas2');
    const ctx2 = canvas2.getContext('2d');
    const canvas3 = document.getElementById('canvas3');
    const ctx3 = canvas3.getContext('2d');
    const canvas4 = document.getElementById('canvas4');
    const ctx4 = canvas4.getContext('2d');

    const CANVAS_WIDTH = canvas1.width = canvas2.width = canvas3.width = canvas4.width = 500;
    const CANVAS_HEIGHT = canvas1.height = canvas2.height = canvas3.height = canvas4.height = 1000;
    const numberOfEnemies = 20;
    const enemiesArray = [];

    let gameFrame = 0;

    class Enemy {
        constructor(image, spriteWidth, spriteHeight, movement, speed, ctx) {
            this.image = image;
            this.movement = movement;
            this.speed = speed;;
            this.spriteWidth = spriteWidth;
            this.spriteHeight = spriteHeight;
            this.width = this.spriteWidth / 3;
            this.height = this.spriteHeight / 3;
            this.x = Math.random() * (CANVAS_WIDTH - this.width);
            this.y = Math.random() * (CANVAS_HEIGHT - this.height);
            this.frame = 0;
            this.flapSpeed = Math.floor(Math.random() * 4 + 1);
            this.angle = Math.random() * 2;
            this.angleSpeed = Math.random() * 0.2;
            this.curve = Math.random() * 5;

            this.newX = Math.random() * (CANVAS_WIDTH - this.width);
            this.newY = Math.random() * (CANVAS_HEIGHT - this.height);
            this.interval = Math.floor(Math.random() * 200 + 50);
            this.ctx = ctx;
        }

        update() {
            if (this.movement == 0) {
                this.x += Math.random() * 5 - 2.5;
                this.y += Math.random() * 5 - 2.5;
            }
            if (this.movement == 1) {
                this.x -= this.speed;
                this.y += this.curve * Math.sin(this.angle);
                this.angle += this.angleSpeed;

                if (this.x + this.width < 0) this.x = CANVAS_WIDTH;
            }
            if (this.movement == 2) {
                this.x = (this.curve * 40 + 20) * Math.sin(this.angle * Math.PI / 90) + (CANVAS_WIDTH / 2 - this.width / 2);
                this.y = (this.curve * 40 + 20) * Math.cos(this.angle * Math.PI / 180) + (CANVAS_HEIGHT / 2 - this.height / 2);
                this.angle += this.angleSpeed * 5;
            }

            if (this.movement == 3) {

                if (gameFrame % this.interval === 0) {
                    this.newX = Math.random() * (CANVAS_WIDTH - this.width);
                    this.newY = Math.random() * (CANVAS_HEIGHT - this.height);

                }
                let dx = this.x - this.newX;
                let dy = this.y - this.newY;
                this.x -= dx / 40;
                this.y -= dy / 40;
            }

            if (gameFrame % this.flapSpeed == 0) {
                this.frame > 4 ? this.frame = 0 : this.frame++;
            }
        }

        draw() {
            this.ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
        }
    }

    const enemy1Image = new Image();
    enemy1Image.src = '../assets/enemies/enemy1.png';
    const enemy2Image = new Image();
    enemy2Image.src = '../assets/enemies/enemy2.png';
    const enemy3Image = new Image();
    enemy3Image.src = '../assets/enemies/enemy3.png';
    const enemy4Image = new Image();
    enemy4Image.src = '../assets/enemies/enemy4.png';
    for (let i = 0; i < numberOfEnemies; i++) {
        enemiesArray.push(new Enemy(enemy1Image, 293, 155, 0, Math.random() * 4 - 2, ctx1));
        enemiesArray.push(new Enemy(enemy2Image, 266, 188, 1, Math.random() * 4 + 1, ctx2));
        enemiesArray.push(new Enemy(enemy3Image, 218, 177, 2, Math.random() * 4 + 1, ctx3));
        enemiesArray.push(new Enemy(enemy4Image, 213, 213, 3, Math.random() * 4 + 1, ctx4));
    }

    function animate() {
        ctx1.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx2.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx3.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx4.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        enemiesArray.forEach(enemy => {
            enemy.update();
            enemy.draw();
        });

        gameFrame++;
        requestAnimationFrame(animate);
    }

    animate();

}