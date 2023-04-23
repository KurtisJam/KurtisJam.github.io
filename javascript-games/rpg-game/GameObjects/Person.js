import { utils } from "../utils.js";
import { DynamicObjects } from "./DynamicObjects.js";

export class Person extends DynamicObjects {
  constructor(config) {
    super(config);
    this.movementProgressRemaining = 0;
    this.isStanding = false;
    this.intentPosition = null; // [x,y]

    this.isPlayerControlled = config.isPlayerControlled || false;

    this.speedMs = 100;
    this.oneTileMove = 16;

    this.movePerMs = this.oneTileMove / this.speedMs;

    this.directionUpdate = {
      up: ["y", -this.movePerMs],
      down: ["y", this.movePerMs],
      left: ["x", -this.movePerMs],
      right: ["x", this.movePerMs],
    };
    this.standBehaviorTimeout;
  }

  update(state) {
    const deltaTime = state.deltaTime;
    if (this.movementProgressRemaining > 0) {
      this.updatePosition(deltaTime);
    } else {
      // More cases for starting to walk will come here

      // Case: we're keyboard ready and have arrow pressed
      if (!state.map.isCutscenePlaying && this.isPlayerControlled && state.arrow) {
        this.startBehaviour(state, {
          type: "walk",
          direction: state.arrow,
        });
      }
      this.updateSprite(state);
    }
  }

  updatePosition(deltaTime) {
    const [property, change] = this.directionUpdate[this.direction];

    let movement = change * deltaTime;
    if (this.movementProgressRemaining < Math.abs(movement)) {
      movement = movement < 0 ? -this.movementProgressRemaining : this.movementProgressRemaining;
    }

    this[property] += movement;
    this.movementProgressRemaining -= Math.abs(movement);

    if (this.movementProgressRemaining <= 0) {
      this[property] = Math.round(this[property]);
      // We finished walking
      this.intentPosition = null;
      utils.emitEvent("PersonWalkingComplete", {
        whoId: this.id,
      });
    }
  }

  updateSprite() {
    if (this.movementProgressRemaining > 0) {
      this.sprite.setAnimation("walk-" + this.direction);
      return;
    }
    this.sprite.setAnimation("idle-" + this.direction);
  }

  startBehaviour(state, behaviour) {
    if (!this.isMounted) {
      return;
    }

    this.direction = behaviour.direction || this.direction;

    if (behaviour.type === "walk") {
      if (state.map.isSpaceTaken(this.x, this.y, this.direction)) {
        behaviour.retry &&
          setTimeout(() => {
            this.startBehaviour(state, behaviour);
          }, 10);
        return;
      }

      this.movementProgressRemaining = this.oneTileMove;

      const intentPosition = utils.nextPosition(this.x, this.y, this.direction);
      this.intentPosition = [intentPosition.x, intentPosition.y];

      this.updateSprite(state);
    }

    if (behaviour.type === "stand") {
      this.isStanding = true;

      if (this.standBehaviorTimeout) {
        clearTimeout(this.standBehaviorTimeout);
      }

      this.standBehaviorTimeout = setTimeout(() => {
        utils.emitEvent("PersonStandingComplete", {
          whoId: this.id,
        });

        this.isStanding = false;
      }, behaviour.time);
    }
  }
}
