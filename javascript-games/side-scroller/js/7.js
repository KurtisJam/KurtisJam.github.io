window.onload = function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  let canvasPosition = canvas.getBoundingClientRect();

  const CANVAS_WIDTH = (canvas.width = 1200);
  const CANVAS_HEIGHT = (canvas.height = 720);

  let enemies = [];
  let score = 0;
  let gameOver = false;

  class InputHandler {
    constructor() {
      this.keys = [];

      window.addEventListener("keydown", (e) => {
        if (
          (e.key === "ArrowDown" ||
            e.key === "ArrowUp" ||
            e.key === "ArrowLeft" ||
            e.key === "ArrowRight") &&
          this.keys.indexOf(e.key) === -1
        ) {
          this.keys.push(e.key);
        } else if (e.key === "Enter" && gameOver) {
          restartGame();
          animate(0);
        }
      });

      window.addEventListener("keyup", (e) => {
        if (
          e.key === "ArrowDown" ||
          e.key === "ArrowUp" ||
          e.key === "ArrowLeft" ||
          e.key === "ArrowRight"
        ) {
          this.keys.splice(this.keys.indexOf(e.key), 1);
        }
      });
    }
  }

  class Player {
    constructor(gameWidth, gameHeight) {
      this.gameWidth = gameWidth;
      this.gameHeight = gameHeight;
      this.width = 200;
      this.height = 200;
      this.x = 0;
      this.y = this.gameHeight - this.height;
      this.image = document.getElementById("playerImage");
      this.frameX = 0;
      this.frameY = 0;
      this.speed = 0;
      this.vy = 0;
      this.weight = 1;

      this.maxFrame = 8;
      this.fps = 20;
      this.frameTimer = 0;

      this.frameInterval = 1000 / this.fps;
    }

    restart() {
      this.x = 100;
      this.y = this.gameHeight - this.height;
      this.maxFrame = 8;
      this.frameY = 0;
    }

    draw(context) {
      context.drawImage(
        this.image,
        this.frameX * this.width,
        this.frameY * this.height,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }

    update(input, deltaTime, enemies) {
      enemies.forEach((enemy) => {
        const dx = enemy.x + enemy.width / 2 - (this.x + this.width / 2);
        const dy = enemy.y + enemy.height - (this.y + this.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < enemy.width / 2 + this.width / 2) {
          gameOver = true;
        }
      });

      if (this.frameTimer > this.frameInterval) {
        if (this.frameX >= this.maxFrame) this.frameX = 0;
        else this.frameX++;
        this.frameTimer = 0;
      } else {
        this.frameTimer += deltaTime;
      }

      if (input.keys.indexOf("ArrowRight") > -1) {
        this.speed = 5;
      } else if (input.keys.indexOf("ArrowLeft") > -1) {
        this.speed = -5;
      } else if (input.keys.indexOf("ArrowUp") > -1 && this.isOnGround()) {
        this.vy -= 30;
      } else if (input.keys.indexOf("ArrowLeft") > -1) {
      } else {
        this.speed = 0;
      }

      this.x += this.speed;
      if (this.x < 0) this.x = 0;
      else if (this.x > this.gameWidth - this.width)
        this.x = this.gameWidth - this.width;

      this.y += this.vy;
      if (!this.isOnGround()) {
        this.vy += this.weight;
        this.frameY = 1;
        this.maxFrame = 5;
      } else {
        this.vy = 0;
        this.frameY = 0;
        this.maxFrame = 8;
      }
      if (this.y > this.gameHeight - this.height)
        this.y = this.gameHeight - this.height;
    }

    isOnGround() {
      return this.y >= this.gameHeight - this.height;
    }
  }

  class Background {
    constructor(gameWidth, gameHeight) {
      this.gameWidth = gameWidth;
      this.gameHeight = gameHeight;
      this.image = document.getElementById("background");
      this.x = 0;
      this.y = 0;
      this.width = 2400;
      this.height = 720;
      this.speed = 7;
    }

    draw(context) {
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
      context.drawImage(
        this.image,
        this.x + this.width - this.speed,
        this.y,
        this.width,
        this.height
      );
    }

    update() {
      this.x -= this.speed;
      if (this.x < 0 - this.width) {
        this.x = 0;
      }
    }
  }

  class Enemy {
    constructor(gameWidth, gameHeight) {
      this.gameHeight = gameHeight;
      this.gameWidth = gameWidth;
      this.spriteWidth = 229;
      this.spriteHeight = 171;
      this.width = this.spriteWidth * 0.72;
      this.height = this.spriteHeight * 0.72;
      this.image = document.getElementById("enemy");
      this.x = this.gameWidth;
      this.y = this.gameHeight - this.height;
      this.frameX = 0;
      this.speed = 1;

      this.maxFrame = 5;
      this.fps = 20;
      this.frameTimer = 0;

      this.frameInterval = 1000 / this.fps;
      this.markedForDeletion = false;
    }

    draw(context) {
      context.drawImage(
        this.image,
        this.frameX * this.spriteWidth,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }

    update(deltaTime) {
      this.x -= this.speed * deltaTime;
      if (this.x < 0 - this.width) this.markedForDeletion = true;

      if (this.frameTimer > this.frameInterval) {
        if (this.frameX < this.maxFrame) {
          this.frameX++;
          this.frameTimer = 0;
        } else this.frameX = 0;
      } else {
        this.frameTimer += deltaTime;
      }

      if (this.x < 0 - this.width) {
        this.markedForDeletion = true;
        score++;
      }
    }
  }

  let enemyTimer = 0;
  let enemyInterval = 1000;
  let randomEnemyInterval = Math.floor(Math.random() * 1000) + 500;
  function handleEnemies(deltaTime) {
    if (enemyTimer > enemyInterval + randomEnemyInterval) {
      enemies.push(new Enemy(CANVAS_WIDTH, CANVAS_HEIGHT));
      enemyTimer = 0;
      randomEnemyInterval = Math.floor(Math.random() * 1000) + 500;
    } else {
      enemyTimer += deltaTime;
    }

    enemies.forEach((enemy) => {
      enemy.draw(ctx);
      enemy.update(deltaTime);
    });

    enemies = enemies.filter((enemy) => !enemy.markedForDeletion);
  }

  function displayStatusText(context) {
    context.textAlign = "left";
    context.fillStyle = "black";
    context.font = "40px Helvetica";
    context.fillText("Score: " + score, 20, 50);

    if (gameOver) {
      context.textAlign = "center";
      context.fillStyle = "red";
      context.fillText("Game Over", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    }
  }

  function restartGame() {
    player.restart();
    score = 0;
    gameOver = false;
    enemies = [];
  }

  const input = new InputHandler();
  const player = new Player(CANVAS_WIDTH, CANVAS_HEIGHT);
  const background = new Background(CANVAS_WIDTH, CANVAS_HEIGHT);

  let lastTime = 0;
  function animate(timeStamp) {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    background.draw(ctx);
    background.update();
    player.draw(ctx);
    player.update(input, deltaTime, enemies);
    handleEnemies(deltaTime);
    displayStatusText(ctx);

    if (!gameOver) requestAnimationFrame(animate);
  }

  animate(0);
};
