import { utils } from "./../../utils.js";

export const SocialClubRoom = {
  id: "SocialClubRoom",
  lowerSrc: "./assets/maps/newmaps/room3_lower.png",
  upperSrc: "./assets/maps/newmaps/room3_upper.png",
  configObjects: {
    hero: {
      type: "Person",
      isPlayerControlled: true,
      src: "./assets/characters/people/hero.png",
      x: utils.withGrid(4),
      y: utils.withGrid(10),
    },
  },
  walls: {
    [utils.asGridCoord(2, 1)]: true,
    [utils.asGridCoord(3, 1)]: true,
    [utils.asGridCoord(4, 1)]: true,
    [utils.asGridCoord(5, 1)]: true,
    [utils.asGridCoord(6, 1)]: true,
    [utils.asGridCoord(7, 1)]: true,
    [utils.asGridCoord(8, 1)]: true,
    [utils.asGridCoord(9, 1)]: true,
    [utils.asGridCoord(10, 1)]: true,
    [utils.asGridCoord(11, 1)]: true,
    [utils.asGridCoord(12, 1)]: true,
    [utils.asGridCoord(1, 2)]: true,
    [utils.asGridCoord(13, 3)]: true,
    [utils.asGridCoord(1, 3)]: true,
    [utils.asGridCoord(13, 4)]: true,
    [utils.asGridCoord(1, 4)]: true,
    [utils.asGridCoord(4, 4)]: true,
    [utils.asGridCoord(5, 4)]: true,
    [utils.asGridCoord(6, 4)]: true,
    [utils.asGridCoord(7, 4)]: true,
    [utils.asGridCoord(8, 4)]: true,
    [utils.asGridCoord(9, 4)]: true,
    [utils.asGridCoord(10, 4)]: true,
    [utils.asGridCoord(13, 5)]: true,
    [utils.asGridCoord(1, 5)]: true,
    [utils.asGridCoord(4, 5)]: true,
    [utils.asGridCoord(5, 5)]: true,
    [utils.asGridCoord(6, 5)]: true,
    [utils.asGridCoord(7, 5)]: true,
    [utils.asGridCoord(8, 5)]: true,
    [utils.asGridCoord(9, 5)]: true,
    [utils.asGridCoord(10, 5)]: true,
    [utils.asGridCoord(13, 6)]: true,
    [utils.asGridCoord(1, 6)]: true,
    [utils.asGridCoord(13, 7)]: true,
    [utils.asGridCoord(1, 7)]: true,
    [utils.asGridCoord(13, 8)]: true,
    [utils.asGridCoord(1, 8)]: true,
    [utils.asGridCoord(13, 9)]: true,
    [utils.asGridCoord(1, 9)]: true,
    [utils.asGridCoord(13, 10)]: true,
    [utils.asGridCoord(1, 10)]: true,
    [utils.asGridCoord(11, 10)]: true,
    [utils.asGridCoord(12, 10)]: true,
    [utils.asGridCoord(1, 11)]: true,
    [utils.asGridCoord(12, 11)]: true,
    [utils.asGridCoord(2, 12)]: true,
    [utils.asGridCoord(3, 12)]: true,
    [utils.asGridCoord(6, 12)]: true,
    [utils.asGridCoord(7, 12)]: true,
    [utils.asGridCoord(8, 12)]: true,
    [utils.asGridCoord(9, 12)]: true,
    [utils.asGridCoord(10, 12)]: true,
    [utils.asGridCoord(11, 12)]: true,
  },
  cutsceneSpaces: {
    /* SocialClubRoom - NPC interactions */
    /* SocialClubRoom - NPC interactions end */

    /* SocialClubRoom - Room map changing */
    [utils.asGridCoord(4, 12)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideRight",
            x: utils.withGrid(6),
            y: utils.withGrid(17),
            direction: "down",
          },
        ],
      },
    ],
    [utils.asGridCoord(5, 12)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideRight",
            x: utils.withGrid(6),
            y: utils.withGrid(17),
            direction: "down",
          },
        ],
      },
    ],
    /* SocialClubRoom - Room map changing end */
  },
};
