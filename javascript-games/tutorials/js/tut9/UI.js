export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 30;
    this.fontFamily = "Helvetica";
  }

  draw(context) {
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.game.fontColour;
    //score
    context.fillText("Score: " + this.game.score, 20, 50);

    context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
    context.fillText("Time: " + (this.game.time * 0.001).toFixed(1), 20, 80);
  }

  drawGameOver(context) {
    if (this.game.gameOver) {
      console.log("game over");
      context.textAlign = "center";
      context.font = this.fontSize * 2 + "px " + this.fontFamily;
      context.fillText(
        "Game Over",
        this.game.width * 0.5,
        this.game.height * 0.5
      );
    }
  }
}
