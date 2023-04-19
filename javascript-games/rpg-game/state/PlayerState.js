import { utils } from "../utils.js";

export class PlayerState {
  constructor() {
    this.pizzas = {
      p1: {
        pizzaId: "s001",
        hp: 50,
        maxHp: 50,
        xp: 0,
        maxXp: 100,
        level: 1,
        status: null,
      },
    };
    this.lineup = ["p1"];
    this.items = [
      { actionId: "item_recoverStatus", instanceId: "item1" },
      { actionId: "item_recoverStatus", instanceId: "item2" },
    ];
    this.storyFlags = {};
  }

  addPizza(pizzaId) {
    const newId = `p_${Date.now()}`; // Math.floor(Math.random() * 9999)
    this.pizzas[newId] = {
      pizzaId,
      hp: 50,
      maxHp: 50,
      xp: 0,
      maxXp: 100,
      level: 1,
      status: null,
    };

    if (this.lineup.length < 3) {
      this.lineup.push(newId);
      utils.emitEvent("LineupChanged");
    }
  }

  swapLineup(oldId, incomingId) {
    const oldIndex = this.lineup.indexOf(oldId);
    this.lineup[oldIndex] = incomingId;
    utils.emitEvent("LineupChanged");
  }

  moveToFront(frontId) {
    this.lineup = this.lineup.filter((id) => id !== frontId);
    this.lineup.unshift(frontId);
    utils.emitEvent("LineupChanged");
  }
}
