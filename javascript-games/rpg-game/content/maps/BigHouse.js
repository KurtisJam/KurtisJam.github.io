import { utils } from "../../utils.js";

export const BigHouse = {
  id: "BigHouse",
  lowerSrc: "./assets/maps/newmaps/room6_lower.png",
  upperSrc: "./assets/maps/newmaps/room6_upper.png",
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
      x: utils.withGrid(4),
      y: utils.withGrid(6),
      src: "./assets/characters/people/bartender.png",
      behaviorLoop: [{ type: "stand", direction: "up", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "I can't believe this!",
              faceHero: "npc1",
            },
          ],
        },
      ],
    },
    npc2: {
      type: "Person",
      x: utils.withGrid(8),
      y: utils.withGrid(4),
      src: "./assets/characters/people/barmaid.png",
      behaviorLoop: [{ type: "stand", direction: "down", time: 1000 }],
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
      x: utils.withGrid(10),
      y: utils.withGrid(4),
      src: "./assets/characters/people/barmaid.png",
      behaviorLoop: [{ type: "stand", direction: "down", time: 1000 }],
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
    npc4: {
      type: "Person",
      x: utils.withGrid(1),
      y: utils.withGrid(12),
      src: "./assets/characters/people/kid.png",
      behaviorLoop: [{ type: "stand", direction: "right", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "I hurt my tummy",
              faceHero: "npc4",
            },
          ],
        },
      ],
    },
    npc5: {
      type: "Person",
      x: utils.withGrid(1),
      y: utils.withGrid(11),
      src: "./assets/characters/people/farmer.png",
      behaviorLoop: [{ type: "stand", direction: "right", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "Waiting...",
              faceHero: "npc5",
            },
          ],
        },
      ],
    },
    npc6: {
      type: "Person",
      x: utils.withGrid(17),
      y: utils.withGrid(10),
      src: "./assets/characters/people/kid2.png",
      behaviorLoop: [{ type: "stand", direction: "left", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "Waiting...",
              faceHero: "npc6",
            },
          ],
        },
      ],
    },
    npc7: {
      type: "Person",
      x: utils.withGrid(17),
      y: utils.withGrid(9),
      src: "./assets/characters/people/blacksmith.png",
      behaviorLoop: [{ type: "stand", direction: "left", time: 1000 }],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "Waiting...",
              faceHero: "npc7",
            },
          ],
        },
      ],
    },
  },
  walls: {
    [utils.asGridCoord(1, 2)]: true,
    [utils.asGridCoord(2, 2)]: true,
    [utils.asGridCoord(3, 2)]: true,
    [utils.asGridCoord(4, 2)]: true,
    [utils.asGridCoord(5, 2)]: true,
    [utils.asGridCoord(6, 2)]: true,
    [utils.asGridCoord(13, 2)]: true,
    [utils.asGridCoord(14, 2)]: true,
    [utils.asGridCoord(15, 2)]: true,
    [utils.asGridCoord(16, 2)]: true,
    [utils.asGridCoord(0, 3)]: true,
    [utils.asGridCoord(2, 3)]: true,
    [utils.asGridCoord(7, 3)]: true,
    [utils.asGridCoord(12, 3)]: true,
    [utils.asGridCoord(17, 3)]: true,
    [utils.asGridCoord(0, 4)]: true,
    [utils.asGridCoord(7, 4)]: true,
    [utils.asGridCoord(12, 4)]: true,
    [utils.asGridCoord(18, 4)]: true,
    [utils.asGridCoord(1, 5)]: true,
    [utils.asGridCoord(7, 5)]: true,
    [utils.asGridCoord(8, 5)]: true,
    [utils.asGridCoord(9, 5)]: true,
    [utils.asGridCoord(10, 5)]: true,
    [utils.asGridCoord(11, 5)]: true,
    [utils.asGridCoord(12, 5)]: true,
    [utils.asGridCoord(18, 5)]: true,
    [utils.asGridCoord(1, 6)]: true,
    [utils.asGridCoord(7, 6)]: true,
    [utils.asGridCoord(18, 6)]: true,
    [utils.asGridCoord(0, 7)]: true,
    [utils.asGridCoord(7, 7)]: true,
    [utils.asGridCoord(18, 7)]: true,
    [utils.asGridCoord(1, 8)]: true,
    [utils.asGridCoord(2, 8)]: true,
    [utils.asGridCoord(5, 8)]: true,
    [utils.asGridCoord(6, 8)]: true,
    [utils.asGridCoord(7, 8)]: true,
    [utils.asGridCoord(8, 8)]: true,
    [utils.asGridCoord(11, 8)]: true,
    [utils.asGridCoord(12, 8)]: true,
    [utils.asGridCoord(13, 8)]: true,
    [utils.asGridCoord(14, 8)]: true,
    [utils.asGridCoord(15, 8)]: true,
    [utils.asGridCoord(16, 8)]: true,
    [utils.asGridCoord(17, 8)]: true,
    [utils.asGridCoord(0, 9)]: true,
    [utils.asGridCoord(18, 9)]: true,
    [utils.asGridCoord(0, 10)]: true,
    [utils.asGridCoord(18, 10)]: true,
    [utils.asGridCoord(0, 11)]: true,
    [utils.asGridCoord(18, 11)]: true,
    [utils.asGridCoord(0, 12)]: true,
    [utils.asGridCoord(18, 12)]: true,
    [utils.asGridCoord(1, 13)]: true,
    [utils.asGridCoord(2, 13)]: true,
    [utils.asGridCoord(3, 13)]: true,
    [utils.asGridCoord(4, 13)]: true,
    [utils.asGridCoord(5, 13)]: true,
    [utils.asGridCoord(6, 13)]: true,
    [utils.asGridCoord(7, 13)]: true,
    [utils.asGridCoord(8, 13)]: true,
    [utils.asGridCoord(11, 13)]: true,
    [utils.asGridCoord(12, 13)]: true,
    [utils.asGridCoord(13, 13)]: true,
    [utils.asGridCoord(14, 13)]: true,
    [utils.asGridCoord(15, 13)]: true,
    [utils.asGridCoord(16, 13)]: true,
    [utils.asGridCoord(17, 13)]: true,
  },
  cutsceneSpaces: {
    /* BigHouse - NPC interactions */
    /* BigHouse - NPC interactions end */
    /* BigHouse - Room map changing */
    [utils.asGridCoord(9, 13)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideRight",
            x: utils.withGrid(5),
            y: utils.withGrid(31),
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
            x: utils.withGrid(5),
            y: utils.withGrid(31),
            direction: "down",
          },
        ],
      },
    ],
    /* BigHouse - Room map changing end */
  },
};
