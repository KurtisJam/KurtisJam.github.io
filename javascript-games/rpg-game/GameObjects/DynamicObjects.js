import { GameEvent } from "../GameEvent.js";
import { GameObject } from "./GameObject.js";

export class DynamicObjects extends GameObject {
  constructor(config) {
    super(config);
    this.isMounted = false;
    this.direction = config.direction || "down";

    this.behaviorLoop = config.behaviorLoop || [];
    this.behaviorLoopIndex = 0;

    this.talking = config.talking || [];
    this.retryTimeout = null;
  }

  mount(map) {
    super.mount(map);
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
