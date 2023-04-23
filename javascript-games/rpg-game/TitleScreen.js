import { KeyboardMenu } from "./KeyboardMenu.js";

export class TitleScreen {
  constructor({ progress }) {
    this.progress = progress;
  }

  getOptions(resolve) {
    const saveFile = this.progress.getSaveFile();
    return [
      {
        label: "New Game",
        description: "Start a new game",
        handler: () => {
          this.close();
          resolve();
        },
      },
      saveFile
        ? {
            label: "Continue Game",
            description: "Resume the game",
            handler: () => {
              this.close();
              resolve(saveFile);
            },
          }
        : null,
    ].filter((v) => v);
  }

  close() {
    this.keyboardMenu.end();
    this.element.remove();
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("TitleScreen");
    this.element.innerHTML = `
        <img class="TitleScreen_logo" src="./assets/logo.png" alt="Rpg Game" />`;
  }

  async init(container) {
    return new Promise((resolve) => {
      this.createElement();
      container.appendChild(this.element);
      this.keyboardMenu = new KeyboardMenu();
      this.keyboardMenu.init(this.element);
      this.keyboardMenu.setOptions(this.getOptions(resolve));
    });
  }
}
