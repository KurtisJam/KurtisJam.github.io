import { utils } from "./utils.js";

export class Sprite {
  constructor(config) {
    // set up the image
    this.image = new Image();
    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    this.spriteWidth = config.spriteWidth || 32;
    this.spriteHeight = config.spriteHeight || 32;

    // Shadow
    this.shadow = new Image();
    this.useShadow = config.useShadow || false;
    if (this.useShadow) {
      this.shadow.src = "./assets/characters/shadow.png";
    }
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    };

    // Configure animations and state
    this.animations = config.animations || {
      "idle-down": [[0, 0]],
      "idle-right": [[0, 1]],
      "idle-up": [[0, 2]],
      "idle-left": [[0, 3]],
      "walk-down": [
        [1, 0],
        [0, 0],
        [3, 0],
        [0, 0],
      ],
      "walk-right": [
        [1, 1],
        [0, 1],
        [3, 1],
        [0, 1],
      ],
      "walk-up": [
        [1, 2],
        [0, 2],
        [3, 2],
        [0, 2],
      ],
      "walk-left": [
        [1, 3],
        [0, 3],
        [3, 3],
        [0, 3],
      ],
    };
    this.currentAnimation = config.currentAnimation || "idle-down";
    this.currentAnimationFrame = 0;

    this.animationFrameLimit = config.animationFrameLimit || 6;
    this.animationFrameProgress = this.animationFrameLimit;

    // Reference the game object
    this.gameObject = config.gameObject;

    this.fps = config.fps || 100;
    this.frameTimer = 0;

    this.frameInterval = 1000 / this.fps;
  }

  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  setAnimation(key) {
    if (this.currentAnimation !== key) {
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }

  updateAnimationProgress(deltaTime) {
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;

      if (this.animationFrameProgress > 0) {
        this.animationFrameProgress--;
        return;
      }

      this.animationFrameProgress = this.animationFrameLimit;

      this.currentAnimationFrame++;

      if (this.frame == undefined) {
        this.currentAnimationFrame = 0;
      }
    } else {
      this.frameTimer += deltaTime;
    }
  }

  draw(ctx, cameraPerson, deltaTime, isPlayerControlled, hugMapCorners, mapWidth, mapHeight) {
    if (this.frameTimer > this.frameInterval && this.gameObject.isPlayerControlled) {
      // TODO:
    }

    let x = this.gameObject.x - 8 + utils.withGrid(10.5) - cameraPerson.x;
    let y = this.gameObject.y - 16 + utils.withGrid(6) - cameraPerson.y;

    /** Code to hug map to edges when player is on edge of map */
    if (hugMapCorners) {
      if (!isPlayerControlled && cameraPerson.y > mapHeight - utils.withGrid(6)) {
        y = y + (cameraPerson.y - (mapHeight - utils.withGrid(6)));
      }

      // Left side
      if (this.gameObject.x < utils.withGrid(10.5)) {
        x = this.gameObject.x - 8;
      }

      // Right side
      if (this.gameObject.x > mapWidth - utils.withGrid(10.5) - 16) {
        // Almost correct!
        x = this.gameObject.x - 12 - (mapWidth - utils.withGrid(22));
      }

      // Top side
      if (this.gameObject.y < utils.withGrid(6)) {
        // Almost correct!
        y = this.gameObject.y - 16;
      }

      // Bottom side
      if (this.gameObject.y > mapHeight - utils.withGrid(6)) {
        // Almost correct!
        y = this.gameObject.y - 16 - (mapHeight - utils.withGrid(12));
      }
    }
    /** END Code to hug map to edges when player is on edge of map */

    this.isShadowLoaded && this.useShadow && ctx.drawImage(this.shadow, x, y);

    const [frameX, frameY] = this.frame;
    this.isLoaded &&
      ctx.drawImage(
        this.image,
        frameX * this.spriteWidth,
        frameY * this.spriteHeight,
        this.spriteWidth,
        this.spriteHeight,
        x,
        y,
        this.spriteWidth,
        this.spriteHeight
      );

    this.updateAnimationProgress(deltaTime);
  }
}
