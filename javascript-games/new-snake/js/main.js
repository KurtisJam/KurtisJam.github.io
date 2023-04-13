import { Snake } from "./snake.js";
import { Food } from "./food.js";
import InputHandler from "./input.js";
import { UI } from "./UI.js";
import {
  FoodOverload,
  SweepOverMap,
  SlowDown,
  Gigantic,
  SpeedUp,
} from "./powerup.js";

window.onload = function () {
  const canvas = document.getElementById("snake-canvas");
  const context = canvas.getContext("2d");
  canvas.width = 600;
  canvas.height = 440;

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.marginTop = 40;
      this.cellSize = 20;
      this.snakeSize = this.cellSize;
      this.gameOver = false;
      this.score = 0;

      this.powerUpInterval = 5000;
      this.powerUpTimer = 0;
      this.foodOverloadAmount = 5;
      this.giganticMultiplier = 5;
      this.timer = 0;

      this.fontColour = "white";
      this.foodColor = "lightgreen";
      this.snakeColor = "lightblue";
      this.snakeFps = 7;
      this.snakeUpdateInterval = 1000 / this.snakeFps;
      this.pauseSnake = false;

      this.snake = new Snake(this);
      this.foods = [];
      this.powerUps = [];
      this.input = new InputHandler(this);
      this.ui = new UI(this);

      this.foods.push(new Food(this));
    }

    resetSnake() {
      this.snake.setStartingSnake();
      this.snakeFps = 7;
      this.snakeUpdateInterval = 1000 / this.snakeFps;
    }

    resetGame() {
      this.resetSnake();
      this.foods = [new Food(this)];
      this.powerUps = [];
      this.powerUpTimer = 0;
      this.score = 0;

      this.gameOver = false;
    }

    update(deltaTime) {
      if (this.timer > 0 && !this.pauseSnake) {
        this.timer -= deltaTime;
        if (this.timer < 0) this.timer = 0;
      }

      // Add power ups every few seconds
      this.addPowerUps(deltaTime);

      if (!this.pauseSnake) this.snake.update(deltaTime);
      this.foods.forEach((food) => food.update(deltaTime));
    }

    addPowerUps(deltaTime) {
      if (this.powerUps.length <= 1) this.powerUpTimer += deltaTime;
      if (this.powerUpTimer >= this.powerUpInterval) {
        this.powerUpTimer = 0;
        const hasPowerUpWithTimer = this.timer > 0;
        const powerUp = hasPowerUpWithTimer
          ? new FoodOverload(this)
          : Math.random() > 0.66
          ? new SlowDown(this)
          : Math.random() > 0.5
          ? new SpeedUp(this)
          : new FoodOverload(this);
        this.powerUps.push(powerUp);
      }
    }

    draw(ctx) {
      this.snake.draw(ctx);
      this.foods.forEach((food) => food.draw(ctx));
      this.powerUps.forEach((food) => food.draw(ctx));
      this.ui.draw(ctx);
    }

    setGameOver() {
      this.gameOver = true;
    }

    updateSnakeSpeed(fps) {
      this.snakeFps = fps;
      this.snakeUpdateInterval = 1000 / this.snakeFps;
    }

    foodCollisionOccurred() {
      this.score++;
      this.updateSnakeSpeed((this.snakeFps += 0.25));

      if (this.foods.length < 1) {
        this.foods.push(new Food(this));
      }
    }
  }

  const game = new Game(canvas.width, canvas.height);

  let lastTime = 0;
  function animate(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    context.clearRect(0, 0, canvas.width, canvas.height);
    game.update(deltaTime);
    game.draw(context);
    if (!game.gameOver) requestAnimationFrame(animate);
    else game.ui.drawGameOver(context);
  }

  animate(0);
};
