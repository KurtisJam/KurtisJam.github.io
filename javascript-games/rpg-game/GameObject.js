import { Sprite } from "./Sprite.js";
import { GameEvent } from "./GameEvent.js";

export class GameObject {
  constructor(config) {
    this.id = null;
    this.isMounted = false;
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || "down";

    this.sprite = new Sprite({
      gameObject: this,
      src: config.src || "./assets/characters/people/hero.png",
      useShadow: config.useShadow,
      spriteWidth: config.spriteWidth,
      spriteHeight: config.spriteHeight,
    });

    this.behaviorLoop = config.behaviorLoop || [];
    this.behaviorLoopIndex = 0;

    this.talking = config.talking || [];
    this.retryTimeout = null;
  }

  mount(map) {
    this.isMounted = true;

    // If we have a behaviour, kick off after a short delay
    setTimeout(() => {
      this.doBehaviorEvent(map);
    }, 10);
  }

  update() {}

  async doBehaviorEvent(map) {
    if (this.behaviorLoop.length === 0) return;

    if (map.isCutscenePlaying) {
      if (this.retryTimeout) {
        clearTimeout(this.retryTimeout);
      }
      this.retryTimeout = setTimeout(() => {
        this.doBehaviorEvent(map);
      }, 1000);
      return;
    }

    let eventConfig = this.behaviorLoop[this.behaviorLoopIndex];
    eventConfig.who = this.id;

    const eventHandler = new GameEvent({
      map,
      event: eventConfig,
    });
    await eventHandler.init();

    // Setup for next event
    this.behaviorLoopIndex += 1;
    if (this.behaviorLoopIndex >= this.behaviorLoop.length) {
      this.behaviorLoopIndex = 0;
    }

    // Do it again
    this.doBehaviorEvent(map);
  }
}
