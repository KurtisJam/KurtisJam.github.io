import { Snake } from "./snake.js";
import { Food } from "./food.js";
import InputHandler from "./input.js";
import { UI } from "./UI.js";

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
      this.gameOver = false;
      this.score = 0;

      this.fontColour = "white";
      this.foodColor = "lightgreen";
      this.snakeColor = "lightblue";
      this.snakeFps = 7;
      this.snakeUpdateInterval = 1000 / this.snakeFps;

      this.snake = new Snake(this);
      this.foods = [];
      this.input = new InputHandler(this);
      this.ui = new UI(this);

      this.foods.push(new Food(this));
    }

    update(deltaTime) {
      this.snake.update(deltaTime);
    }

    draw(ctx) {
      this.snake.draw(ctx);
      this.foods.forEach((food) => food.draw(ctx));
      this.ui.draw(ctx);
    }

    setGameOver() {
      console.log("game over");
      this.gameOver = true;
    }

    foodCollisionOccured() {
      this.score++;
      this.foods.push(new Food(this));
      this.snakeFps++;
      this.snakeUpdateInterval = 1000 / this.snakeFps;
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
