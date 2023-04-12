import { getRndInteger } from "./utils.js";
import { Food } from "./food.js";

export const powerUps = {
  foodOverload: 0,
  slowDown: 1,
  gigantic: 2,
};

class PowerUp {
  constructor(game) {
    this.game = game;
    this.x = 0;
    this.y = 0;
    this.initialise();
  }

  handleCollision() {
    this.game.powerUps = this.game.powerUps.filter((p) => p.type !== this.type);
    console.log("collision");
    this.game.pauseSnake = true;
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

  update() {}

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.strokeStyle = "black";
    ctx.fillRect(this.x, this.y, this.game.cellSize, this.game.cellSize);
    ctx.strokeRect(this.x, this.y, this.game.cellSize, this.game.cellSize);
  }
}

export class FoodOverload extends PowerUp {
  constructor(game) {
    super(game);
    this.game = game;
    this.color = "red";
    this.type = powerUps.foodOverload;
  }

  update() {}

  handleCollision() {
    super.handleCollision();

    for (var i = 0; i < this.game.foodOverloadAmount; i++) {
      this.game.foods.push(
        new Food(
          this.game,
          this.game.snake.snake[0].x,
          this.game.snake.snake[0].y
        )
      );
    }
  }
}

export class SlowDown extends PowerUp {
  constructor(game) {
    super(game);
    this.color = "white";
    this.type = powerUps.slowDown;
  }

  handleCollision() {
    super.handleCollision();
    this.game.snakeFps = Math.max(this.game.snakeFps - 10, 7);
    this.game.snakeUpdateInterval = 1000 / this.game.snakeFps;
  }
}

export class Gigantic extends PowerUp {
  constructor(game) {
    super(game);
    this.color = "purple";
    this.type = powerUps.gigantic;
  }

  handleCollision() {
    super.handleCollision();
    this.game.snakeSize = this.game.cellSize * this.game.giganticMultiplier;
    this.game.giganticTimer = this.game.giganticTimeLimit;
  }
}
