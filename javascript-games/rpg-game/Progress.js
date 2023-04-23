export class Progress {
  constructor() {
    this.mapId = "Mansion";
    this.startingHeroX = 0;
    this.startingHeroY = 0;
    this.startingHeroDirection = "down";
    this.saveFileKey = "rpgGame_SaveFile1";
  }

  save() {
    window.localStorage.setItem(
      this.saveFileKey,
      JSON.stringify({
        mapId: this.mapId,
        startingHeroX: this.startingHeroX,
        startingHeroY: this.startingHeroY,
        startingHeroDirection: this.startingHeroDirection,
        playerState: {
          animals: window.playerState.animals,
          lineup: window.playerState.lineup,
          items: window.playerState.items,
          storyFlags: window.playerState.storyFlags,
        },
      })
    );
  }

  getSaveFile() {
    if (!window.localStorage) {
      return null;
    }

    const saveFile = window.localStorage.getItem(this.saveFileKey);
    return saveFile ? JSON.parse(saveFile) : null;
  }

  load() {
    const file = this.getSaveFile();

    if (file) {
      this.mapId = file.mapId;
      this.startingHeroX = file.startingHeroX;
      this.startingHeroY = file.startingHeroY;
      this.startingHeroDirection = file.startingHeroDirection;
      window.playerState.animals = file.playerState.animals;
      window.playerState.lineup = file.playerState.lineup;
      window.playerState.items = file.playerState.items;
      window.playerState.storyFlags = file.playerState.storyFlags;
    }
  }
}
