import { Sprite } from "./Sprite.js";
import { GameEvent } from "../GameEvent.js";

export class GameObject {
  constructor(config) {
    this.id = null;
    this.x = config.x || 0;
    this.y = config.y || 0;

    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || "./assets/characters/people/hero.png",
      spriteWidth: config.spriteWidth,
      spriteHeight: config.spriteHeight,
    });
  }

  mount(map) {}

  update() {}

  async doBehaviorEvent(map) {}
}
