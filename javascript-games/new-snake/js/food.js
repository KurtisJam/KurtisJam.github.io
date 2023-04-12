import { getRndInteger } from "./utils.js";

export class Food {
  constructor(game, startingX, startingY) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.initialise();
    this.currentX = startingX !== undefined ? startingX : this.x;
    this.currentY = startingY !== undefined ? startingY : this.y;

    this.stepX = (this.x - this.currentX) / 80;
    this.stepY = (this.y - this.currentY) / 80;
  }

  isMoving() {
    return this.currentX !== this.x || this.currentY !== this.y;
  }

  initialise() {
    this.x = getRndInteger(0, this.game.width, this.game.cellSize);
    this.y = getRndInteger(
      this.game.marginTop,
      this.game.height,
      this.game.cellSize
    );

    if (
      this.game.snake.snake.some((s) => s.x === this.x && s.y === this.y) ||
      this.game.foods.some((f) => f.x === this.x && f.y === this.y)
    ) {
      console.log("food in same spot!");
      this.initialise();
    }
  }

  update(deltaTime) {
    if (this.isMoving()) {
      if (this.currentX !== this.x) {
        this.currentX += this.stepX;
      }
      if (this.currentY !== this.y) {
        this.currentY += this.stepY;
      }
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.game.foodColor;
    ctx.strokeStyle = "black";
    ctx.fillRect(
      this.currentX,
      this.currentY,
      this.game.cellSize,
      this.game.cellSize
    );
    ctx.strokeRect(
      this.currentX,
      this.currentY,
      this.game.cellSize,
      this.game.cellSize
    );
  }
}
