window.onload = function () {
  const TILE_SIZE = 100;
  const GRID_SIZE = 4;
  const GRID_PADDING = 10;
  const BG_COLOR = "#b5a295";
  const EMPTY_TILE_COLOR = "#c4b8a4";
  const FONT_COLOR = "#766b63";
  const FONT_SIZE = 32;

  class Tile {
    constructor(x, y, value) {
      this.x = x;
      this.y = y;
      this.value = value;
    }

    draw(ctx) {
      const tileColor = this.getTileColor();
      const fontColor = this.getFontColor();
      ctx.fillStyle = tileColor;
      ctx.fillRect(this.x, this.y, TILE_SIZE, TILE_SIZE);
      if (this.value) {
        ctx.fillStyle = fontColor;
        ctx.font = `${FONT_SIZE}px sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const centerX = this.x + TILE_SIZE / 2;
        const centerY = this.y + TILE_SIZE / 2;
        ctx.fillText(this.value, centerX, centerY);
      }
    }

    getTileColor() {
      const colorMap = {
        2: "#eee4da",
        4: "#ede0c8",
        8: "#f2b179",
        16: "#f59563",
        32: "#f67c5f",
        64: "#f65e3b",
        128: "#edcf72",
        256: "#edcc61",
        512: "#9c0",
        1024: "#33b5e5",
        2048: "#09c",
      };
      return colorMap[this.value] || "#fff";
    }

    getFontColor() {
      return this.value < 8 ? FONT_COLOR : "#fff";
    }
  }
  class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.score = 0;
      this.grid = [];
      this.isGameOver = false;
      this.init();
      this.listen();
    }

    init() {
      this.grid = [];
      for (let i = 0; i < GRID_SIZE; i++) {
        this.grid[i] = [];
        for (let j = 0; j < GRID_SIZE; j++) {
          this.grid[i][j] = null;
        }
      }
      this.addRandomTile();
      this.addRandomTile();
      this.draw();
    }

    listen() {
      document.addEventListener("keydown", this.handleKeyDown.bind(this));
    }

    addRandomTile() {
      const emptyTiles = [];
      for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
          if (!this.grid[i][j]) {
            emptyTiles.push({ i, j });
          }
        }
      }
      if (emptyTiles.length) {
        const { i, j } =
          emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
        this.grid[i][j] = new Tile(
          j * (TILE_SIZE + GRID_PADDING),
          i * (TILE_SIZE + GRID_PADDING),
          Math.random() < 0.5 ? 2 : 4
        );
      }
    }

    draw() {
      this.ctx.fillStyle = BG_COLOR;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
          const tile = this.grid[i][j];
          if (tile) {
            tile.draw(this.ctx);
          } else {
            const x = j * (TILE_SIZE + GRID_PADDING);
            const y = i * (TILE_SIZE + GRID_PADDING);
            this.ctx.fillStyle = EMPTY_TILE_COLOR;
            this.ctx.fillRect(x, y, TILE_SIZE, TILE_SIZE);
          }
        }
      }

      this.ctx.fillStyle = FONT_COLOR;
      this.ctx.font = `${FONT_SIZE}px sans-serif`;
      this.ctx.textAlign = "left";
      this.ctx.textBaseline = "bottom";
      this.ctx.fillText(
        `Score: ${this.score}`,
        GRID_PADDING,
        this.canvas.height - GRID_PADDING
      );
    }

    // Bugs to figure out
    handleKeyDown(event) {
      switch (event.code) {
        case "ArrowUp":
          for (let j = 1; j < GRID_SIZE; j++) {
            for (let i = 0; i < GRID_SIZE; i++) {
              const tile = this.grid[j][i];
              if (tile) {
                let k = j - 1;
                while (k >= 0 && !this.grid[k][i]) {
                  this.grid[k][i] = tile;
                  this.grid[k + 1][i] = null;
                  tile.y = k * (TILE_SIZE + GRID_PADDING);
                  k--;
                }
                if (k >= 0 && this.grid[k][i].value === tile.value) {
                  this.score += tile.value * 2;
                  this.grid[k][i].value *= 2;
                  this.grid[j][i] = null;
                }
              }
            }
          }
          this.addRandomTile();
          this.draw();
          break;
        case "ArrowDown":
          for (let j = GRID_SIZE - 2; j >= 0; j--) {
            for (let i = 0; i < GRID_SIZE; i++) {
              const tile = this.grid[j][i];
              if (tile) {
                let k = j + 1;
                while (k < GRID_SIZE && !this.grid[k][i]) {
                  this.grid[k][i] = tile;
                  this.grid[k - 1][i] = null;
                  tile.y = k * (TILE_SIZE + GRID_PADDING);
                  k++;
                }
                if (k < GRID_SIZE && this.grid[k][i].value === tile.value) {
                  this.score += tile.value * 2;
                  this.grid[k][i].value *= 2;
                  this.grid[j][i] = null;
                }
              }
            }
          }
          console.log("here");
          this.addRandomTile();
          this.draw();
          break;
        case "ArrowLeft":
          for (let i = 0; i < GRID_SIZE; i++) {
            for (let j = 1; j < GRID_SIZE; j++) {
              const tile = this.grid[i][j];
              if (tile) {
                let k = j - 1;
                while (k >= 0 && !this.grid[i][k]) {
                  this.grid[i][k] = tile;
                  this.grid[i][k + 1] = null;
                  tile.x = k * (TILE_SIZE + GRID_PADDING);
                  k--;
                }
                if (k >= 0 && this.grid[i][k].value === tile.value) {
                  this.score += tile.value * 2;
                  this.grid[i][k].value *= 2;
                  this.grid[i][j] = null;
                }
              }
            }
          }
          this.addRandomTile();
          this.draw();
          break;
        case "ArrowRight":
          for (let i = 0; i < GRID_SIZE; i++) {
            for (let j = GRID_SIZE - 2; j >= 0; j--) {
              const tile = this.grid[i][j];
              if (tile) {
                let k = j + 1;
                while (k < GRID_SIZE && !this.grid[i][k]) {
                  this.grid[i][k] = tile;
                  this.grid[i][k - 1] = null;
                  tile.x = k * (TILE_SIZE + GRID_PADDING);
                  k++;
                }
                if (k < GRID_SIZE && this.grid[i][k].value === tile.value) {
                  this.score += tile.value * 2;
                  this.grid[i][k].value *= 2;
                  this.grid[i][j] = null;
                }
              }
            }
          }
          console.log("here");
          this.addRandomTile();
          this.draw();
          break;
      }
    }
  }

  const canvas = document.getElementById("canvas");
  const game = new Game(canvas);
  game.draw();
};
