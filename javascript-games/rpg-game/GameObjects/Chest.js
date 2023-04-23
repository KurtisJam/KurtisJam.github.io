import { GameObject } from "./GameObject.js";

export class Chest extends GameObject {
  constructor(config) {
    super(config);

    this.itemId = config.item || "item_hayBale";
    this.item = window.Actions[this.itemId];
    this.direction = config.direction || "down";
    this.sprite.spriteWidth = 32;
    this.sprite.spriteHeight = 32;
    this.sprite.animations = {
      "closed-chest-down": [[0, 0]],
      "closed-chest-left": [[0, 2]],
      "closed-chest-right": [[4, 1]],
      "opening-chest-down": [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
      ],
      "opening-chest-left": [
        [0, 2],
        [1, 2],
        [2, 2],
        [3, 2],
        [4, 2],
      ],
      "opening-chest-right": [
        [4, 1],
        [3, 1],
        [2, 1],
        [1, 1],
        [0, 1],
      ],
      "opened-chest-down": [[4, 0]],
      "opened-chest-left": [[4, 2]],
      "opened-chest-right": [[0, 1]],
    };

    this.storyFlag = config.storyFlag;
    this.sprite.currentAnimation = playerState.storyFlags[this.storyFlag]
      ? `opened-chest-${this.direction}`
      : `closed-chest-${this.direction}`;

    this.talking = [
      {
        required: [this.storyFlag],
        events: [{ type: "textMessage", text: "You have already used this." }],
      },
      {
        events: [
          { type: "textMessage", text: "Opening the chest..." },
          { type: "addItem", itemId: this.itemId },
          { type: "addStoryFlag", flag: this.storyFlag },
          { who: "hero", type: "stand", time: 1000 },
          { type: "textMessage", text: `You received a ${this.item.name}!` },
        ],
      },
    ];
  }

  update() {
    if (this.sprite.currentAnimation === `opening-chest-${this.direction}` && this.sprite.currentAnimationFrame >= 4) {
      this.sprite.currentAnimationFrame = 0;
      this.sprite.currentAnimation = `opened-chest-${this.direction}`;
    } else if (this.sprite.currentAnimation === `closed-chest-${this.direction}`) {
      this.sprite.currentAnimation = playerState.storyFlags[this.storyFlag]
        ? `opening-chest-${this.direction}`
        : `closed-chest-${this.direction}`;
    }
  }
}
