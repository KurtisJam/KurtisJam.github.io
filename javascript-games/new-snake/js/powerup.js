import { getRndInteger } from "./utils.js";
import { Food } from "./food.js";

const PowerUpTypes = Object.freeze({
  FOOD_OVERLOAD: 0,
  SLOW_DOWN: 1,
  SWEEP_MAP: 2,
  GIGANTIC: 3,
});

class PowerUp {
  constructor(game, type, color) {
    this.game = game;
    this.type = type;
    this.color = color;
    this.x = 0;
    this.y = 0;
    this.initialize();
  }

  handleCollision() {
    this.game.powerUps = this.game.powerUps.filter((p) => p.type !== this.type);
  }

  initialize() {
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
      this.initialize();
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.strokeStyle = "black";
    ctx.fillRect(this.x, this.y, this.game.cellSize, this.game.cellSize);
    ctx.strokeRect(this.x, this.y, this.game.cellSize, this.game.cellSize);
  }
}

export class FoodOverload extends PowerUp {
  constructor(game) {
    super(game, PowerUpTypes.FOOD_OVERLOAD, "red");
  }

  handleCollision() {
    super.handleCollision();

    // Add some food
    for (var i = 0; i < this.game.foodOverloadAmount; i++) {
      this.game.foods.push(
        new Food(
          this.game,
          this.game.snake.snake[0].x,
          this.game.snake.snake[0].y
        )
      );
    }
    this.game.pauseSnake = true;
    setTimeout(() => {
      this.game.pauseSnake = false;
    }, 500);
  }
}

export class SlowDown extends PowerUp {
  constructor(game) {
    super(game, PowerUpTypes.SLOW_DOWN, "white");
  }

  handleCollision() {
    super.handleCollision();

    // Slow down the snake
    const oldFps = this.game.snakeFps;

    this.game.updateSnakeSpeed(Math.max(this.game.snakeFps - 10, 7));

    this.game.timer = 5 * 1000;

    setTimeout(() => {
      this.game.snakeIsInvincible = false;
      this.game.updateSnakeSpeed(oldFps);
    }, 5 * 1000);
  }
}

export class SweepOverMap extends PowerUp {
  constructor(game) {
    super(game, PowerUpTypes.SWEEP_MAP, "purple");
  }

  handleCollision() {
    super.handleCollision();
  }
}

export class Gigantic extends PowerUp {
  constructor(game) {
    super(game, PowerUpTypes.GIGANTIC, "orange");
  }

  handleCollision() {
    super.handleCollision();

    // Make the snake bigger
    this.game.snakeSize = this.game.cellSize * this.game.giganticMultiplier;
    this.game.timer = 10 * 1000;

    setTimeout(() => {
      this.game.snakeSize = this.game.cellSize;
    }, this.game.timer);
  }
}

export class SpeedUp extends PowerUp {
  constructor(game) {
    super(game, PowerUpTypes.SPEED_UP, "green");
  }

  handleCollision() {
    super.handleCollision();

    const oldFps = this.game.snakeFps;
    this.game.updateSnakeSpeed(Math.min(this.game.snakeFps + 10, 50));

    this.game.timer = 5 * 1000;

    setTimeout(() => {
      this.game.snakeIsInvincible = false;
      this.game.updateSnakeSpeed(oldFps);
    }, this.game.timer);
  }
}

export class Invincibility extends PowerUp {
  constructor(game) {
    super(game, PowerUpTypes.INVINCIBILITY, "gold");
  }

  handleCollision() {
    super.handleCollision();

    // Make the snake invincible for 10 seconds
    this.game.snakeIsInvincible = true;
    this.game.timer = 10 * 1000;

    setTimeout(() => {
      this.game.snakeIsInvincible = false;
    }, this.game.timer);
  }
}
