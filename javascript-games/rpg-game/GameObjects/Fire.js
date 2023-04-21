import { GameObject } from "./GameObject.js";

export class Fire extends GameObject {
  constructor(config) {
    super(config);

    this.sprite.spriteWidth = 16;
    this.sprite.spriteHeight = 16;
    this.sprite.currentAnimation = "fire";
    this.sprite.animations = {
      fire: [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ],
    };
  }
}
