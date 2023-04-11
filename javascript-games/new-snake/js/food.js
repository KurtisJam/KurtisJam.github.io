import { getRndInteger } from "./utils.js";

export class Food {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.initialise();
  }

  initialise() {
    this.x = getRndInteger(
      this.game.marginTop,
      this.game.width,
      this.game.cellSize
    );
    this.y = getRndInteger(
      this.game.marginTop,
      this.game.height,
      this.game.cellSize
    );

    if (
      this.game.snake.snake.some((s) => s.x === this.x && s.y === this.y) ||
      this.game.foods.some((f) => f.x === this.x && f.y === this.y)
    ) {
      this.initialise();
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.game.foodColor;
    ctx.strokeStyle = "black";
    ctx.fillRect(this.x, this.y, this.game.cellSize, this.game.cellSize);
    ctx.strokeRect(this.x, this.y, this.game.cellSize, this.game.cellSize);
  }
}
