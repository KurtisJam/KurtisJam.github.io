import { GameObject } from "./GameObject.js";

export class Chest extends GameObject {
  constructor(config) {
    super(config);

    this.sprite.spriteWidth = 32;
    this.sprite.spriteHeight = 32;
    this.sprite.currentAnimation = "closed-chest-down";
    this.sprite.animations = {
      "closed-chest-down": [[0, 0]],
      "opening-chest-down": [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
      ],
      "opened-chest-down": [[4, 0]],
    };
  }
}
