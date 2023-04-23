import { Person } from "./Person.js";

export class Chicken extends Person {
  constructor(config) {
    super(config);
    this.sprite.spriteWidth = 16;
    this.sprite.spriteHeight = 16;
    this.sprite.animationFrameLimit = 12;
    this.sprite.animations = {
      "idle-down": [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      "idle-left": [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      "idle-right": [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      "walk-right": [
        [0, 2],
        [1, 2],
      ],
      "walk-left": [
        [0, 3],
        [1, 3],
      ],
    };
  }
}
