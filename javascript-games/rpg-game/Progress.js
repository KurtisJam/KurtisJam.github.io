export class Progress {
  constructor() {
    this.mapId = "Outside";
    this.startingHeroX = 0;
    this.startingHeroY = 0;
    this.startingHeroDirection = "down";
    this.saveFileKey = "PizzaLegends_SaveFile1";
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
          pizzas: window.playerState.pizzas,
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
      window.playerState.pizzas = file.playerState.pizzas;
      window.playerState.lineup = file.playerState.lineup;
      window.playerState.items = file.playerState.items;
      window.playerState.storyFlags = file.playerState.storyFlags;
    }
  }
}
