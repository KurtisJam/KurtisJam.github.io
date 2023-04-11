function startGame(level) {
  document.getElementById("SplashScreen").style.display = "none";
  document.getElementById("SnakeGame").style.display = "block";
  const snake = new SnakeGame("canvas", level);
}

const width = 600;
const height = 400;
const segmentLength = 20;
const board_border = "black";
const board_background = "white";
const snake_col = "lightblue";
const snake_border = "darkblue";

let canvas;
let context;
let scoreElement;

class SnakeGame {
  constructor(canvasId, level) {
    canvas = document.getElementById(canvasId);
    scoreElement = document.getElementById("score");
    context = canvas.getContext("2d");

    this.snakeLength = 3;
    this.snake = [
      { x: width / 2, y: height / 2 },
      { x: width / 2 - segmentLength, y: height / 2 },
      { x: width / 2 - segmentLength * 2, y: height / 2 },
      { x: width / 2 - segmentLength * 3, y: height / 2 },
      { x: width / 2 - segmentLength * 4, y: height / 2 },
    ];
    this.food = {
      x: this.getRndInteger(0, width, segmentLength),
      y: this.getRndInteger(0, height, segmentLength),
    };
    this.directionY = 0;
    this.directionX = segmentLength;
    this.canChangeDirection = true;
    this.score = 0;
    this.stopGame = false;
    this.gameOver = false;
    this.obstacles = [];
    this.level = level;

    if (this.level == 2) {
      this.obstacles.push({ x: 20, y: 20, width: width - 40, height: 20 });
      this.obstacles.push({ x: 20, y: 20, width: 20, height: height - 40 });
      this.obstacles.push({
        x: 20,
        y: height - 40,
        width: width - 40,
        height: 20,
      });
    } else if (this.level == 3) {
      this.obstacles.push({ x: 10, y: 20, width: 100, height: 20 });
      this.obstacles.push({ x: 200, y: 100, width: 100, height: 20 });
      this.obstacles.push({ x: 40, y: 260, width: 100, height: 20 });
    }

    this.init();
  }

  init() {
    this.listenForKeyboardEvents();
    this.gameLoop();
  }

  handleGameStop() {
    context.font = "30px Arial";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.fillText("Game Over!!", width / 2, height / 2);

    const snakeHeight = height / 2 + 20;
    this.snake = [
      { x: width / 2, y: snakeHeight },
      { x: width / 2 - segmentLength, y: snakeHeight },
      { x: width / 2 - segmentLength * 2, y: snakeHeight },
      { x: width / 2 - segmentLength * 3, y: snakeHeight },
      { x: width / 2 - segmentLength * 4, y: snakeHeight },
    ];
    this.score = 0;
  }

  moveObstacle() {
    if (this.level == 1) return;

    for (var i = 0; i < this.obstacles.length; i++) {
      if (this.level == 3) {
        const newX =
          this.obstacles[i].x > width
            ? -this.obstacles[i].width
            : this.obstacles[i].x + 10;
        this.obstacles[i].x = newX;
      }

      this.drawObstacle(
        this.obstacles[i].x,
        this.obstacles[i].y,
        this.obstacles[i].width,
        this.obstacles[i].height
      ); // redraw obstacle in its new position
    }
  }

  gameLoop() {
    if (this.stopGame) {
      return;
    }

    if (this.gameOver) {
      this.handleGameStop();
      return;
    }
    setTimeout(() => {
      this.canChangeDirection = true;
      this.clearCanvas();
      this.moveSnake();
      this.moveObstacle();
      this.drawSnake();
      this.drawFood();
      this.gameLoop();
    }, 100 - Math.min(this.snakeLength, 50));
  }

  drawObstacle(x, y, width, height) {
    context.fillStyle = "gray"; // set obstacle color
    context.fillRect(x, y, width, height); // draw obstacle on canvas
  }

  listenForKeyboardEvents() {
    addEventListener("keydown", (event) => {
      const keyPressed = event.key;

      if (keyPressed == " " || keyPressed == "Spacebar") {
        if (this.gameOver) {
          this.gameOver = false;
          scoreElement.innerHTML = this.score;

          this.gameLoop();
          return;
        }
        this.stopGame = !this.stopGame;
        if (!this.stopGame) {
          this.gameLoop();
        }
      }

      if (!this.canChangeDirection || this.stopGame) return;

      if (keyPressed == "ArrowUp" && this.directionY != segmentLength) {
        this.directionY = -segmentLength;
        this.directionX = 0;
        this.canChangeDirection = false;
      }

      if (keyPressed == "ArrowLeft" && this.directionX != segmentLength) {
        this.directionY = 0;
        this.directionX = -segmentLength;
        this.canChangeDirection = false;
      }

      if (keyPressed == "ArrowDown" && this.directionY != -segmentLength) {
        this.directionY = segmentLength;
        this.directionX = 0;
        this.canChangeDirection = false;
      }

      if (keyPressed == "ArrowRight" && this.directionX != -segmentLength) {
        this.directionY = 0;
        this.directionX = segmentLength;
        this.canChangeDirection = false;
      }
    });
  }

  moveSnake() {
    let newX = this.snake[0].x + this.directionX;
    let newY = this.snake[0].y + this.directionY;
    if (newX > width - segmentLength) newX = 0;

    if (newX < 0) newX = width - segmentLength;

    if (newY > height - segmentLength) newY = 0;

    if (newY < 0) newY = height - segmentLength;

    this.snake.unshift({ x: newX, y: newY });

    if (newX == this.food.x && newY == this.food.y) {
      this.food.x = this.getRndInteger(0, width, segmentLength);
      this.food.y = this.getRndInteger(0, height, segmentLength);
      this.score++;
      this.snakeLength = this.snake.length;
      scoreElement.innerHTML = this.score;
      return;
    }

    this.snake.pop();

    this.snakeLength = this.snake.length;
    this.checkForCollision(newX, newY);
  }

  checkForCollision(newX, newY) {
    for (var i = 1; i < this.snakeLength; i++) {
      if (this.snake[i].x == newX && this.snake[i].y == newY) {
        console.log("collision");
        this.gameOver = true;
      }
    }

    // Check collisions with obstacles
  }

  drawSnake() {
    // Draw each part
    this.snake.forEach(this.drawSnakePart);
  }

  drawSnakePart(snakePart) {
    // Set the colour of the snake part
    context.fillStyle = snake_col;
    // Set the border colour of the snake part
    context.strokestyle = snake_border;
    // Draw a "filled" rectangle to represent the snake part at the coordinates
    // the part is located
    context.fillRect(snakePart.x, snakePart.y, segmentLength, segmentLength);
    // Draw a border around the snake part
    context.strokeRect(snakePart.x, snakePart.y, segmentLength, segmentLength);
  }

  drawFood() {
    context.fillStyle = "lightgreen";
    // Set the border colour of the snake part
    context.strokestyle = snake_border;

    context.fillRect(this.food.x, this.food.y, segmentLength, segmentLength);
    // Draw a border around the snake part
    context.strokeRect(this.food.x, this.food.y, segmentLength, segmentLength);
  }

  getRndInteger(min, max, step) {
    const range = (max - min) / step;
    return Math.floor(Math.random() * range) * step + min;
  }

  clearCanvas() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
}
