import { GameObject } from "./GameObject.js";
import { Sprite } from "./Sprite.js";

export class PizzaStone extends GameObject {
  constructor(config) {
    super(config);

    this.sprite = new Sprite({
      gameObject: this,
      src: "./assets/characters/pizza-stone.png",
      animations: {
        "used-down": [[0, 0]],
        "unused-down": [[1, 0]],
      },
      currentAnimation: "used-down",
    });
    this.storyFlag = config.storyFlag;
    this.pizzas = config.pizzas;

    this.talking = [
      {
        required: [this.storyFlag],
        events: [{ type: "textMessage", text: "You already used this pizza stone." }],
      },
      {
        events: [
          { type: "textMessage", text: "Approaching the legendary pizza stone." },
          { type: "craftingMenu", pizzas: this.pizzas },
          { type: "addStoryFlag", flag: this.storyFlag },
        ],
      },
    ];
  }

  update() {
    this.sprite.currentAnimation = window.playerState.storyFlags[this.storyFlag] ? "used-down" : "unused-down";
  }
}
