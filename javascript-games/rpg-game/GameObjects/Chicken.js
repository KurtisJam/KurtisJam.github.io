import { Person } from "./Person.js";

export class Chicken extends Person {
  constructor(config) {
    super(config);
    this.sprite.spriteWidth = 16;
    this.sprite.spriteHeight = 16;
    this.sprite.animationFrameLimit = 8;
    this.sprite.animations = {
      "idle-down": [
        [0, 2],
        [1, 2],
        [2, 2],
        [3, 2],
      ],
      "idle-left": [
        [0, 1],
        [1, 1],
        [2, 1],
        [3, 1],
      ],
      "idle-right": [
        [0, 5],
        [1, 5],
        [2, 5],
        [3, 5],
      ],
      "walk-right": [
        [0, 4],
        [1, 4],
        [2, 4],
        [3, 4],
      ],
      "walk-left": [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ],
    };
  }
}
