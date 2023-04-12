export default class InputHandler {
  constructor(game) {
    this.game = game;

    // Change snake direction
    window.addEventListener("keydown", (e) => {
      const keyPressed = e.key;

      if (keyPressed == "ArrowUp" && this.game.snake.directionY <= 0) {
        this.game.snake.directionY = -this.game.cellSize;
        this.game.snake.directionX = 0;
      } else if (keyPressed == "ArrowLeft" && this.game.snake.directionX <= 0) {
        this.game.snake.directionY = 0;
        this.game.snake.directionX = -this.game.cellSize;
      } else if (keyPressed == "ArrowDown" && this.game.snake.directionY >= 0) {
        this.game.snake.directionY = this.game.cellSize;
        this.game.snake.directionX = 0;
      } else if (
        keyPressed == "ArrowRight" &&
        this.game.snake.directionX >= 0
      ) {
        this.game.snake.directionY = 0;
        this.game.snake.directionX = this.game.cellSize;
      }
    });
  }
}
