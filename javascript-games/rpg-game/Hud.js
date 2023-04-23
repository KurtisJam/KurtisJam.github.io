import { Combatant } from "./Battle/Combatant.js";

export class Hud {
  constructor() {
    this.scoreboards = [];
  }

  update() {
    this.scoreboards.forEach((scoreBoard) => {
      scoreBoard.update(window.playerState.animals[scoreBoard.id]);
    });
  }

  createElement() {
    if (this.element) {
      this.element.remove();
      this.scoreboards = [];
    }

    this.element = document.createElement("div");
    this.element.classList.add("Hud");

    const { playerState } = window;
    playerState.lineup.forEach((key) => {
      const animal = playerState.animals[key];
      const scoreBoard = new Combatant(
        {
          id: key,
          ...window.Animals[animal.animalId],
          ...animal,
        },
        null
      );

      scoreBoard.createElement();
      this.scoreboards.push(scoreBoard);
      this.element.appendChild(scoreBoard.hudElement);
    });

    this.update();
  }

  init(container) {
    this.createElement();
    container.appendChild(this.element);

    document.addEventListener("PlayerStateUpdated", () => {
      this.update();
    });

    document.addEventListener("LineupChanged", () => {
      this.createElement();
      container.appendChild(this.element);
    });
  }
}
