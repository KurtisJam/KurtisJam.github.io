import { utils } from "../../utils.js";

export const Arena = {
  id: "Arena",
  lowerSrc: "./assets/maps/newmaps/room7_lower.png",
  upperSrc: "./assets/maps/newmaps/room7_upper.png",
  configObjects: {
    hero: {
      type: "Person",
      isPlayerControlled: true,
      src: "./assets/characters/people/hero.png",
      x: utils.withGrid(9),
      y: utils.withGrid(12),
    },

    npc1: {
      type: "Person",
      x: utils.withGrid(12),
      y: utils.withGrid(8),
      src: "./assets/characters/people/blacksmith.png",
      behaviorLoop: [{ type: "stand", direction: "left", time: 1000 }],
    },
    npc2: {
      type: "Person",
      x: utils.withGrid(13),
      y: utils.withGrid(10),
      src: "./assets/characters/people/blacksmith2.png",
      behaviorLoop: [{ type: "stand", direction: "left", time: 1000 }],
    },
    npc3: {
      type: "Person",
      x: utils.withGrid(6),
      y: utils.withGrid(10),
      src: "./assets/characters/people/blacksmith.png",
      behaviorLoop: [{ type: "stand", direction: "right", time: 1000 }],
    },
    npc4: {
      type: "Person",
      x: utils.withGrid(7),
      y: utils.withGrid(8),
      src: "./assets/characters/people/blacksmith2.png",
      behaviorLoop: [{ type: "stand", direction: "right", time: 1000 }],
    },
    npc5: {
      type: "Person",
      x: utils.withGrid(10),
      y: utils.withGrid(7),
      src: "./assets/characters/people/bartender2.png",
      behaviorLoop: [{ type: "stand", direction: "down", time: 1000 }],
    },
    npc6: {
      type: "Person",
      x: utils.withGrid(9),
      y: utils.withGrid(6),
      src: "./assets/characters/people/farmer.png",
      behaviorLoop: [{ type: "stand", direction: "down", time: 1000 }],
    },
    npc7: {
      type: "Person",
      x: utils.withGrid(12),
      y: utils.withGrid(12),
      src: "./assets/characters/people/merchant1.png",
      behaviorLoop: [{ type: "stand", direction: "up", time: 1000 }],
    },
    npc8: {
      type: "Person",
      x: utils.withGrid(7),
      y: utils.withGrid(12),
      src: "./assets/characters/people/merchant2.png",
      behaviorLoop: [{ type: "stand", direction: "up", time: 1000 }],
    },
  },
  walls: {
    [utils.asGridCoord(19, 3)]: true,
    [utils.asGridCoord(1, 2)]: true,
    [utils.asGridCoord(2, 2)]: true,
    [utils.asGridCoord(3, 2)]: true,
    [utils.asGridCoord(4, 2)]: true,
    [utils.asGridCoord(5, 2)]: true,
    [utils.asGridCoord(6, 2)]: true,
    [utils.asGridCoord(7, 2)]: true,
    [utils.asGridCoord(8, 2)]: true,
    [utils.asGridCoord(9, 2)]: true,
    [utils.asGridCoord(10, 2)]: true,
    [utils.asGridCoord(11, 2)]: true,
    [utils.asGridCoord(12, 2)]: true,
    [utils.asGridCoord(13, 2)]: true,
    [utils.asGridCoord(14, 2)]: true,
    [utils.asGridCoord(15, 2)]: true,
    [utils.asGridCoord(16, 2)]: true,
    [utils.asGridCoord(17, 2)]: true,
    [utils.asGridCoord(18, 2)]: true,
    [utils.asGridCoord(0, 3)]: true,
    [utils.asGridCoord(19, 4)]: true,
    [utils.asGridCoord(0, 4)]: true,
    [utils.asGridCoord(19, 5)]: true,
    [utils.asGridCoord(0, 5)]: true,
    [utils.asGridCoord(19, 6)]: true,
    [utils.asGridCoord(0, 6)]: true,
    [utils.asGridCoord(19, 7)]: true,
    [utils.asGridCoord(0, 7)]: true,
    [utils.asGridCoord(19, 8)]: true,
    [utils.asGridCoord(0, 8)]: true,
    [utils.asGridCoord(19, 9)]: true,
    [utils.asGridCoord(0, 9)]: true,
    [utils.asGridCoord(19, 10)]: true,
    [utils.asGridCoord(0, 10)]: true,
    [utils.asGridCoord(19, 11)]: true,
    [utils.asGridCoord(0, 11)]: true,
    [utils.asGridCoord(19, 12)]: true,
    [utils.asGridCoord(0, 12)]: true,
    [utils.asGridCoord(19, 13)]: true,
    [utils.asGridCoord(1, 13)]: true,
    [utils.asGridCoord(2, 13)]: true,
    [utils.asGridCoord(3, 13)]: true,
    [utils.asGridCoord(4, 13)]: true,
    [utils.asGridCoord(5, 13)]: true,
    [utils.asGridCoord(6, 13)]: true,
    [utils.asGridCoord(7, 13)]: true,
    [utils.asGridCoord(12, 13)]: true,
    [utils.asGridCoord(13, 13)]: true,
    [utils.asGridCoord(14, 13)]: true,
    [utils.asGridCoord(15, 13)]: true,
    [utils.asGridCoord(16, 13)]: true,
    [utils.asGridCoord(17, 13)]: true,
    [utils.asGridCoord(18, 13)]: true,
  },
  cutsceneSpaces: {
    /* Arena - NPC interactions */
    /* Arena - NPC interactions end */
    /* Arena - Room map changing */
    [utils.asGridCoord(8, 13)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideRight",
            x: utils.withGrid(13),
            y: utils.withGrid(6),
            direction: "down",
          },
        ],
      },
    ],
    [utils.asGridCoord(9, 13)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideRight",
            x: utils.withGrid(13),
            y: utils.withGrid(6),
            direction: "down",
          },
        ],
      },
    ],
    [utils.asGridCoord(10, 13)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideRight",
            x: utils.withGrid(13),
            y: utils.withGrid(6),
            direction: "down",
          },
        ],
      },
    ],
    [utils.asGridCoord(11, 13)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideRight",
            x: utils.withGrid(13),
            y: utils.withGrid(6),
            direction: "down",
          },
        ],
      },
    ],
    /* Arena - Room map changing end */
  },
};
