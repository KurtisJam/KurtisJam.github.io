class Enemy {
  constructor() {
    this.frameX = 0;
    this.frameY = 0;
    this.fps = 20;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.maxFrame = 5;
    this.markedForDeletion = false;
  }

  update(deltaTime) {
    this.x -= this.speedX + this.game.speed;
    this.y += this.speedY;
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    } else this.frameTimer += deltaTime;

    if (this.x + this.width < 0) this.markedForDeletion = true;
  }

  draw(context) {
    if (this.game.debug) {
      context.strokeRect(this.x, this.y, this.width, this.height);
    }
    context.drawImage(
      this.image,
      this.frameX * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

export class FlyingEnemy extends Enemy {
  constructor(game) {
    super();
    this.game = game;
    this.spriteWidth = 261;
    this.spriteHeight = 209;
    this.width = this.spriteWidth / 4;
    this.height = this.spriteHeight / 4;
    this.image = document.getElementById("enemy_fly");

    this.x = this.game.width;
    this.y = Math.random() * this.game.height * 0.6;

    this.speedX = Math.random() + 1;
    this.speedY = 0;
    this.maxFrame = 5;

    this.angle = 0;
    this.curve = Math.random() * 2;
  }

  update(deltaTime) {
    super.update(deltaTime);
    this.y += Math.sin(this.angle) * this.curve;
    this.angle += 0.03;
  }
}

export class GroundEnemy extends Enemy {
  constructor(game) {
    super();
    this.game = game;
    this.spriteWidth = 229;
    this.spriteHeight = 171;
    this.width = this.spriteWidth / 4;
    this.height = this.spriteHeight / 4;
    this.x = this.game.width;
    this.y = this.game.height - this.height - 80;
    this.image = document.getElementById("enemy_ground");

    this.speedX = 2;
    this.speedY = 0;
    this.maxFrame = 5;
  }
}

export class ClimbingEnemy extends Enemy {
  constructor(game) {
    super();
    this.game = game;
    this.spriteWidth = 310;
    this.spriteHeight = 175;
    this.width = this.spriteWidth / 4;
    this.height = this.spriteHeight / 4;
    this.x = this.game.width;
    this.y = Math.random() * this.game.height * 0.6;
    this.image = document.getElementById("enemy_climb");

    this.speedX = 0;
    this.maxFrame = 5;
    this.speedY = Math.random() * 2 - 1;
    this.maxLength = Math.random() * (this.game.height - this.height);
  }
  update(deltaTime) {
    super.update(deltaTime);
    if (this.y > this.game.height - this.height - this.game.groundMargin)
      this.speedY *= -1;
    if (this.y < -this.height) this.markedForDeletion = true;
  }
  draw(context) {
    super.draw(context);
    context.beginPath();
    context.moveTo(this.x + this.width / 2, 0);
    context.lineTo(this.x + this.width / 2, this.y + 20);
    context.stroke();
  }
}
