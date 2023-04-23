import { KeyboardMenu } from "./KeyboardMenu.js";

export class CraftingMenu {
  constructor({ animals, onComplete }) {
    this.animals = animals;
    this.onComplete = onComplete;
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("CraftingMenu");
    this.element.classList.add("overlayMenu");

    this.element.innerHTML = `
    <h2>Select an Animal</h2>`;
  }

  getOptions() {
    return this.animals.map((id) => {
      const base = window.Animals[id];
      return {
        label: base.name,
        description: base.description,
        handler: () => {
          window.playerState.addAnimal(id);
          this.close();
        },
      };
    });
  }

  close() {
    this.keyboardMenu.end();
    this.element.remove();
    this.onComplete();
  }

  init(container) {
    this.createElement();
    this.keyboardMenu = new KeyboardMenu({
      descriptionContainer: container,
    });
    this.keyboardMenu.init(this.element);
    this.keyboardMenu.setOptions(this.getOptions());

    container.appendChild(this.element);
  }
}
