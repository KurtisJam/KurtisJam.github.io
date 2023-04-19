import { KeyboardMenu } from "./KeyboardMenu.js";

export class CraftingMenu {
  constructor({ pizzas, onComplete }) {
    this.pizzas = pizzas;
    this.onComplete = onComplete;
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.classList.add("CraftingMenu");
    this.element.classList.add("overlayMenu");

    this.element.innerHTML = `
    <h2>Create a Pizza</h2>`;
  }

  getOptions() {
    return this.pizzas.map((id) => {
      const base = window.Pizzas[id];
      return {
        label: base.name,
        description: base.description,
        handler: () => {
          window.playerState.addPizza(id);
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
