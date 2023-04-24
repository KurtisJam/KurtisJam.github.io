import { utils } from "../../utils.js";

export const SmallHouse = {
  id: "SmallHouse",
  lowerSrc: "./assets/maps/newmaps/room4_lower.png",
  upperSrc: "./assets/maps/newmaps/room4_upper.png",
  configObjects: {
    hero: {
      type: "Person",
      isPlayerControlled: true,
      src: "./assets/characters/people/hero.png",
      x: utils.withGrid(5),
      y: utils.withGrid(8),
    },
    npc1: {
      type: "Person",
      x: utils.withGrid(8),
      y: utils.withGrid(6),
      src: "./assets/characters/people/kid2.png",
      behaviorLoop: [{ type: "stand", direction: "up", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "Blahh, these are disgusting!",
              faceHero: "npc1",
            },
          ],
        },
      ],
    },
    npc2: {
      type: "Person",
      x: utils.withGrid(7),
      y: utils.withGrid(6),
      src: "./assets/characters/people/barmaid.png",
      behaviorLoop: [{ type: "stand", direction: "up", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "Where is she hiding, she never eats her vegetables.",
              faceHero: "npc2",
            },
          ],
        },
      ],
    },
    npc3: {
      type: "Person",
      x: utils.withGrid(8),
      y: utils.withGrid(3),
      src: "./assets/characters/people/kid.png",
      behaviorLoop: [{ type: "stand", direction: "right", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "Shhhhh!! I'm hiding hehe",
              faceHero: "npc3",
            },
          ],
        },
      ],
    },
  },
  walls: {
    [utils.asGridCoord(3, 1)]: true,
    [utils.asGridCoord(9, 2)]: true,
    [utils.asGridCoord(4, 1)]: true,
    [utils.asGridCoord(5, 1)]: true,
    [utils.asGridCoord(7, 1)]: true,
    [utils.asGridCoord(8, 1)]: true,
    [utils.asGridCoord(1, 2)]: true,
    [utils.asGridCoord(2, 2)]: true,
    [utils.asGridCoord(6, 2)]: true,
    [utils.asGridCoord(9, 3)]: true,
    [utils.asGridCoord(1, 3)]: true,
    [utils.asGridCoord(9, 4)]: true,
    [utils.asGridCoord(1, 4)]: true,
    [utils.asGridCoord(7, 4)]: true,
    [utils.asGridCoord(8, 4)]: true,
    [utils.asGridCoord(1, 5)]: true,
    [utils.asGridCoord(2, 5)]: true,
    [utils.asGridCoord(7, 5)]: true,
    [utils.asGridCoord(8, 5)]: true,
    [utils.asGridCoord(1, 6)]: true,
    [utils.asGridCoord(2, 6)]: true,
    [utils.asGridCoord(9, 7)]: true,
    [utils.asGridCoord(0, 7)]: true,
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
    /* SmallHouse - NPC interactions */
    /* SmallHouse - NPC interactions end */
    /* SmallHouse - Room map changing */
    [utils.asGridCoord(5, 9)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideRight",
            x: utils.withGrid(18),
            y: utils.withGrid(17),
            direction: "down",
          },
        ],
      },
    ],
    [utils.asGridCoord(4, 9)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideRight",
            x: utils.withGrid(18),
            y: utils.withGrid(17),
            direction: "down",
          },
        ],
      },
    ],
    /* SmallHouse - Room map changing end */
  },
};
