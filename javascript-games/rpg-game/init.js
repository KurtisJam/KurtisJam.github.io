import { Game } from "./game.js";
import { PlayerState } from "./state/PlayerState.js";
import { Maps } from "./content/maps.js";

window.playerState = new PlayerState();
window.GameMaps = new Maps().maps;

const game = new Game({
  element: document.querySelector(".game-container"),
});
game.init();
