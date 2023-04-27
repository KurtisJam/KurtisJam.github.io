import { utils } from "../utils.js";

export class PlayerState {
  constructor() {
    this.animals = {};
    this.lineup = [];
    this.items = [];
    this.storyFlags = {};
  }

  healAnimals() {
    Object.keys(this.animals).forEach((key) => {
      this.animals[key].hp = this.animals[key].maxHp;
    });
  }

  addItem(itemId) {
    const newInstanceId = `i_${Date.now()}`;
    this.items.push({
      actionId: itemId,
      instanceId: newInstanceId,
    });
  }

  addAnimal(animalId, hp = null) {
    const newId = `p_${Date.now()}`; // Math.floor(Math.random() * 9999)
    this.animals[newId] = {
      animalId,
      hp: hp || 50,
      maxHp: hp || 50,
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
