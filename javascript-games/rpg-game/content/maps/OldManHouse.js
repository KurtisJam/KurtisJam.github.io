import { utils } from "./../../utils.js";

export const OldManHouse = {
  id: "OldManHouse",
  lowerSrc: "./assets/maps/newmaps/room2_lower.png",
  upperSrc: "./assets/maps/newmaps/room2_upper.png",
  configObjects: {
    hero: {
      type: "Person",
      isPlayerControlled: true,
      src: "./assets/characters/people/hero.png",
      x: utils.withGrid(4),
      y: utils.withGrid(8),
    },
    oldMan: {
      type: "Person",
      src: "./assets/characters/people/farmer.png",
      x: utils.withGrid(1),
      y: utils.withGrid(3),
      behaviorLoop: [
        { type: "stand", direction: "up", time: 2000 },
        { type: "stand", direction: "down", time: 300 },
        { type: "walk", direction: "down" },
        { type: "walk", direction: "down" },
        { type: "stand", direction: "down", time: 300 },
        { type: "stand", direction: "right", time: 300 },
        { type: "walk", direction: "right" },
        { type: "walk", direction: "right" },
        { type: "walk", direction: "right" },
        { type: "walk", direction: "right" },
        { type: "stand", direction: "right", time: 400 },
        { type: "stand", direction: "up", time: 400 },
        { type: "walk", direction: "up" },
        { type: "stand", direction: "up", time: 2500 },
        { type: "walk", direction: "down" },
        { type: "stand", direction: "down", time: 2000 },
        { type: "walk", direction: "left" },
        { type: "walk", direction: "left" },
        { type: "walk", direction: "left" },
        { type: "walk", direction: "left" },
        { type: "walk", direction: "up" },
        { type: "walk", direction: "up" },
      ],
      talking: [
        {
          required: ["SEEN_INTRO"],
          events: [{ type: "textMessage", text: "You are quite capable.", faceHero: "mum" }],
        },
      ],
    },
  },
  walls: {
    [utils.asGridCoord(1, 2)]: true,
    [utils.asGridCoord(0, 3)]: true,
    [utils.asGridCoord(2, 3)]: true,
    [utils.asGridCoord(5, 3)]: true,
    [utils.asGridCoord(0, 4)]: true,
    [utils.asGridCoord(2, 4)]: true,
    [utils.asGridCoord(3, 4)]: true,
    [utils.asGridCoord(4, 4)]: true,
    [utils.asGridCoord(6, 4)]: true,
    [utils.asGridCoord(0, 5)]: true,
    [utils.asGridCoord(7, 5)]: true,
    [utils.asGridCoord(0, 6)]: true,
    [utils.asGridCoord(8, 6)]: true,
    [utils.asGridCoord(1, 7)]: true,
    [utils.asGridCoord(9, 7)]: true,
    [utils.asGridCoord(9, 8)]: true,
    [utils.asGridCoord(0, 8)]: true,
    [utils.asGridCoord(9, 9)]: true,
    [utils.asGridCoord(1, 9)]: true,
    [utils.asGridCoord(2, 9)]: true,
    [utils.asGridCoord(3, 9)]: true,
    [utils.asGridCoord(6, 9)]: true,
    [utils.asGridCoord(7, 9)]: true,
    [utils.asGridCoord(8, 9)]: true,
  },
  cutsceneSpaces: {
    /* OldManHouse - NPC interactions */
    /* OldManHouse - NPC interactions end */

    /* OldManHouse - Room map changing */
    [utils.asGridCoord(4, 9)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideBottom",
            x: utils.withGrid(2),
            y: utils.withGrid(20),
            direction: "down",
          },
        ],
      },
    ],
    [utils.asGridCoord(5, 9)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideBottom",
            x: utils.withGrid(2),
            y: utils.withGrid(20),
            direction: "down",
          },
        ],
      },
    ],
    /* OldManHouse - Room map changing end */
  },
};
