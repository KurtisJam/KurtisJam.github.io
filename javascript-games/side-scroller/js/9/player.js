import {
  Sitting,
  Running,
  Jumping,
  Falling,
  Rolling,
  Diving,
  Hit,
} from "./state.js";
import { CollisionAnimation } from "./collisionAnimation.js";

class Player {
  constructor(game) {
    this.game = game;
    this.gameHeight = this.game.height;
    this.gameWidth = this.game.width;

    this.image = document.getElementById("player");
    this.width = 100;
    this.height = 91.3;

    this.x = 0;
    this.y = this.gameHeight - this.height - this.game.groundMargin;

    this.speed = 0;
    this.vy = 0;
    this.weight = 0.5;

    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 6;
    this.fps = 30;
    this.frameTimer = 0;
    this.frameInterval = 1000 / this.fps;
    this.maxSpeed = 10;

    this.states = [
      new Sitting(this.game),
      new Running(this.game),
      new Jumping(this.game),
      new Falling(this.game),
      new Rolling(this.game),
      new Diving(this.game),
      new Hit(this.game),
    ];
  }

  draw(context) {
    if (this.game.debug) {
      context.strokeRect(this.x, this.y, this.width, this.height);
    }

    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update(keys, deltaTime) {
    this.checkCollisions();
    this.currentState.handleInput(keys);

    if (keys.includes("ArrowRight") && this.currentState !== this.states[6])
      this.speed = this.maxSpeed;
    else if (keys.includes("ArrowLeft") && this.currentState !== this.states[6])
      this.speed = -this.maxSpeed;
    else this.speed = 0;

    this.x += this.speed;
    if (this.x <= 0) this.x = 0;
    else if (this.x >= this.gameWidth - this.width)
      this.x = this.gameWidth - this.width;

    this.y += this.vy;
    if (!this.onGround()) this.vy += this.weight;
    else this.vy = 0;

    if (this.y > this.gameHeight - this.height - this.game.groundMargin)
      this.y = this.gameHeight - this.height - this.game.groundMargin;

    if (this.frameTimer > this.frameInterval) {
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;

      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }
  }

  onGround() {
    return this.y >= this.gameHeight - this.height - this.game.groundMargin;
  }

  setState(state, speed) {
    this.currentState = this.states[state];
    this.game.speed = this.game.maxSpeed * speed;
    this.currentState.enter();
  }

  checkCollisions() {
    this.game.enemies.forEach((enemy) => {
      if (
        enemy.x < this.x + this.width &&
        enemy.x + enemy.width > this.x &&
        enemy.y < this.y + this.height &&
        enemy.y + enemy.height > this.y
      ) {
        enemy.markedForDeletion = true;
        this.game.collisions.push(
          new CollisionAnimation(
            this.game,
            enemy.x + enemy.width * 0.5,
            enemy.y + enemy.height * 0.5
          )
        );

        if (
          this.currentState === this.states[4] ||
          this.currentState === this.states[5]
        ) {
          this.game.score += 1;
        } else {
          this.setState(6, 0);
        }
      }
    });
  }
}

export default Player;
