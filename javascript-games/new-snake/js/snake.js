export class Snake {
  constructor(game) {
    this.game = game;
    this.snake = [
      { x: this.game.width / 2, y: this.game.height / 2 },
      {
        x: this.game.width / 2 - this.game.cellSize,
        y: this.game.height / 2,
      },
      {
        x: this.game.width / 2 - this.game.cellSize * 2,
        y: this.game.height / 2,
      },
    ];

    this.updateTimer = 0;

    this.directionY = 0;
    this.directionX = 0;
  }

  update(deltaTime) {
    if (this.directionX === 0 && this.directionY === 0) {
      return;
    }

    if (this.updateTimer > this.game.snakeUpdateInterval) {
      this.updateTimer = 0;
      this.updateSnakePosition();
      this.checkForCollision();
    } else {
      this.updateTimer += deltaTime;
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.game.snakeColor;
    ctx.strokeStyle = "black";
    this.snake.forEach((snakePart) => {
      ctx.fillRect(
        snakePart.x,
        snakePart.y,
        this.game.cellSize,
        this.game.cellSize
      );
      ctx.strokeRect(
        snakePart.x,
        snakePart.y,
        this.game.cellSize,
        this.game.cellSize
      );
    });
  }

  checkForCollision() {
    for (var i = 3; i < this.snake.length; i++) {
      if (
        this.snake[i].x == this.snake[0].x &&
        this.snake[i].y == this.snake[0].y
      ) {
        this.game.setGameOver();
      }
    }
  }

  checkForFoodCollision(newX, newY) {
    return this.game.foods.findIndex((f) => {
      return newX == f.x && newY == f.y;
    });
  }

  updateSnakePosition() {
    let newX = this.snake[0].x + this.directionX;
    let newY = this.snake[0].y + this.directionY;
    if (newX > this.game.width - this.game.cellSize) newX = 0;

    if (newX < 0) newX = this.game.width - this.game.cellSize;

    if (newY > this.game.height - this.game.cellSize)
      newY = this.game.marginTop;

    if (newY < this.game.marginTop)
      newY = this.game.height - this.game.cellSize;

    this.snake.unshift({ x: newX, y: newY });

    const collisionOfFoodIndex = this.checkForFoodCollision(newX, newY);

    if (collisionOfFoodIndex > -1) {
      this.game.foods.splice(collisionOfFoodIndex, 1);
      this.game.foodCollisionOccured();
      return;
    }

    this.snake.pop();
  }
}
