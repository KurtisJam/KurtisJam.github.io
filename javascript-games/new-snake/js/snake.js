export class Snake {
  constructor(game) {
    this.game = game;
    this.snake = [];

    this.updateTimer = 0;

    this.directionY = 0;
    this.directionX = 0;

    this.setStartingSnake();
  }

  setStartingSnake() {
    this.snake = [
      { x: this.game.width / 2, y: this.game.height / 2 },
      {
        x: this.game.width / 2 - this.game.snakeSize,
        y: this.game.height / 2,
      },
      {
        x: this.game.width / 2 - this.game.snakeSize * 2,
        y: this.game.height / 2,
      },
    ];
    this.directionY = 0;
    this.directionX = 0;
    this.updateTimer = 0;
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
        this.game.snakeSize,
        this.game.snakeSize
      );
      ctx.strokeRect(
        snakePart.x,
        snakePart.y,
        this.game.snakeSize,
        this.game.snakeSize
      );
    });
  }

  collisionResult(pointCheck, newX, newY, fx, fy) {
    return pointCheck
      ? newX == fx && newY == fy
      : fx >= newX &&
          fx <= newX + this.game.snakeSize &&
          fy >= newY &&
          fy <= newY + this.game.snakeSize;
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
    const isPointCheck = this.game.snakeSize === this.game.cellSize;
    return this.game.foods.findIndex((f) => {
      return this.collisionResult(isPointCheck, newX, newY, f.x, f.y);
    });
  }

  checkForPowerUpCollision(newX, newY) {
    const isPointCheck = this.game.snakeSize === this.game.cellSize;
    return this.game.powerUps.find((p) => {
      return this.collisionResult(isPointCheck, newX, newY, p.x, p.y);
    });
  }

  updateSnakePosition() {
    let newX = this.snake[0].x + this.directionX;
    let newY = this.snake[0].y + this.directionY;
    if (newX > this.game.width - this.game.snakeSize) newX = 0;

    if (newX < 0) newX = this.game.width - this.game.snakeSize;

    if (newY > this.game.height - this.game.snakeSize)
      newY = this.game.marginTop;

    if (newY < this.game.marginTop)
      newY = this.game.height - this.game.snakeSize;

    this.snake.unshift({ x: newX, y: newY });

    const collisionOfFoodIndex = this.checkForFoodCollision(newX, newY);
    const powerUpCollision = this.checkForPowerUpCollision(newX, newY);

    if (!!powerUpCollision) {
      powerUpCollision.handleCollision();
    }

    if (collisionOfFoodIndex > -1) {
      this.game.foods.splice(collisionOfFoodIndex, 1);
      this.game.foodCollisionOccurred();
      return;
    }

    this.snake.pop();
  }
}
