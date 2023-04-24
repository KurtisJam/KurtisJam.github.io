import { utils } from "../../utils.js";

export const MediumHouse = {
  id: "MediumHouse",
  lowerSrc: "./assets/maps/newmaps/room5_lower.png",
  upperSrc: "./assets/maps/newmaps/room5_upper.png",
  configObjects: {
    hero: {
      type: "Person",
      isPlayerControlled: true,
      src: "./assets/characters/people/hero.png",
      x: utils.withGrid(4),
      y: utils.withGrid(9),
    },
    npc1: {
      type: "Person",
      x: utils.withGrid(4),
      y: utils.withGrid(6),
      src: "./assets/characters/people/bartender.png",
      behaviorLoop: [{ type: "stand", direction: "up", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "Ohh! You startled me, nothing to see here, just admiring this plant.",
              faceHero: "npc1",
            },
          ],
        },
      ],
    },
    npc2: {
      type: "Person",
      x: utils.withGrid(6),
      y: utils.withGrid(5),
      src: "./assets/characters/people/barmaid.png",
      behaviorLoop: [{ type: "stand", direction: "right", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "He never tells me anything.",
              faceHero: "npc2",
            },
          ],
        },
      ],
    },
    npc3: {
      type: "Person",
      x: utils.withGrid(8),
      y: utils.withGrid(2),
      src: "./assets/characters/people/kid.png",
      behaviorLoop: [{ type: "stand", direction: "up", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "My dad loves this painting for some reason.",
              faceHero: "npc3",
            },
          ],
        },
      ],
    },
  },
  walls: {
    [utils.asGridCoord(7, 1)]: true,
    [utils.asGridCoord(8, 1)]: true,
    [utils.asGridCoord(9, 1)]: true,
    [utils.asGridCoord(10, 1)]: true,
    [utils.asGridCoord(11, 1)]: true,
    [utils.asGridCoord(12, 2)]: true,
    [utils.asGridCoord(5, 1)]: true,
    [utils.asGridCoord(6, 1)]: true,
    [utils.asGridCoord(12, 3)]: true,
    [utils.asGridCoord(4, 3)]: true,
    [utils.asGridCoord(12, 4)]: true,
    [utils.asGridCoord(5, 4)]: true,
    [utils.asGridCoord(8, 4)]: true,
    [utils.asGridCoord(12, 5)]: true,
    [utils.asGridCoord(2, 5)]: true,
    [utils.asGridCoord(3, 5)]: true,
    [utils.asGridCoord(4, 5)]: true,
    [utils.asGridCoord(5, 5)]: true,
    [utils.asGridCoord(8, 5)]: true,
    [utils.asGridCoord(12, 6)]: true,
    [utils.asGridCoord(1, 6)]: true,
    [utils.asGridCoord(12, 7)]: true,
    [utils.asGridCoord(0, 7)]: true,
    [utils.asGridCoord(12, 8)]: true,
    [utils.asGridCoord(0, 8)]: true,
    [utils.asGridCoord(11, 8)]: true,
    [utils.asGridCoord(0, 9)]: true,
    [utils.asGridCoord(11, 9)]: true,
    [utils.asGridCoord(1, 10)]: true,
    [utils.asGridCoord(2, 10)]: true,
    [utils.asGridCoord(5, 10)]: true,
    [utils.asGridCoord(6, 10)]: true,
    [utils.asGridCoord(7, 10)]: true,
    [utils.asGridCoord(8, 10)]: true,
    [utils.asGridCoord(9, 10)]: true,
    [utils.asGridCoord(10, 10)]: true,
  },
  cutsceneSpaces: {
    /* MediumHouse - NPC interactions */
    /* MediumHouse - NPC interactions end */
    /* MediumHouse - Room map changing */
    [utils.asGridCoord(3, 10)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideRight",
            x: utils.withGrid(17),
            y: utils.withGrid(23),
            direction: "down",
          },
        ],
      },
    ],
    [utils.asGridCoord(4, 10)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideRight",
            x: utils.withGrid(17),
            y: utils.withGrid(23),
            direction: "down",
          },
        ],
      },
    ],
    /* MediumHouse - Room map changing end */
  },
};
