import { utils } from "./../../utils.js";

export const OutsideBottom = {
  id: "OutsideBottom",
  hugMapCorners: true,
  lowerSrc: "./assets/maps/newmaps/bottom-left-area_lower.png",
  upperSrc: "./assets/maps/newmaps/bottom-left-area_upper.png",
  configObjects: {
    hero: {
      type: "Person",
      isPlayerControlled: true,
      src: "./assets/characters/people/hero.png",
      x: utils.withGrid(7),
      y: utils.withGrid(1),
    },
    cow1: {
      type: "Cow",
      x: utils.withGrid(14),
      y: utils.withGrid(7),
      behaviorLoop: [
        { type: "stand", direction: "right", time: 8000 },
        { type: "stand", direction: "left", time: 6000 },
      ],
    },
    fire1: {
      type: "Fire",
      x: utils.withGrid(10),
      y: utils.withGrid(9) - 8,
    },
    chest1: {
      type: "Chest",
      x: utils.withGrid(8),
      y: utils.withGrid(20),
      storyFlag: "CHEST1_OUTSIDEBOTTOM",
      direction: "left",
      item: "item_dustBath",
    },
    npcA: {
      type: "Person",
      x: utils.withGrid(6),
      y: utils.withGrid(1),
      src: "./assets/characters/people/mum.png",
    },
    npc5: {
      type: "Person",
      x: utils.withGrid(22),
      y: utils.withGrid(6),
      src: "./assets/characters/people/barmaid.png",
      behaviorLoop: [
        { type: "stand", direction: "left", time: 10000 },
        { type: "stand", direction: "up", time: 5000 },
      ],
      talking: [
        {
          required: ["TALKED_TO_npc5_OUTSIDE"],
          events: [
            {
              type: "textMessage",
              text: "Hey. We just spoke.",
              faceHero: "npc5",
            },
          ],
        },
        {
          events: [
            { type: "addStoryFlag", flag: "TALKED_TO_npc5_OUTSIDE" },
            {
              type: "textMessage",
              text: "Hey! ",
              faceHero: "npc5",
            },
          ],
        },
      ],
    },
    npc6: {
      type: "Person",
      x: utils.withGrid(18),
      y: utils.withGrid(6),
      src: "./assets/characters/people/kid2.png",
      behaviorLoop: [
        { type: "walk", direction: "right" },
        { type: "walk", direction: "right" },
        { type: "stand", direction: "right", time: 1000 },
        { type: "stand", direction: "left", time: 600 },
        { type: "walk", direction: "down" },
        { type: "walk", direction: "down" },
        { type: "walk", direction: "left" },
        { type: "walk", direction: "left" },
        { type: "walk", direction: "up" },
        { type: "walk", direction: "up" },
      ],
      talking: [
        {
          required: ["TALKED_TO_npc6_OUTSIDE"],
          events: [
            {
              type: "textMessage",
              text: "Hey. We just spoke.",
              faceHero: "npc6",
            },
          ],
        },
        {
          events: [
            { type: "addStoryFlag", flag: "TALKED_TO_npc6_OUTSIDE" },
            {
              type: "textMessage",
              text: "Hey! ",
              faceHero: "npc6",
            },
          ],
        },
      ],
    },
    npc7: {
      type: "Person",
      x: utils.withGrid(18),
      y: utils.withGrid(8),
      src: "./assets/characters/people/kid.png",
      behaviorLoop: [
        { type: "walk", direction: "up" },
        { type: "walk", direction: "up" },
        { type: "walk", direction: "right" },
        { type: "walk", direction: "right" },
        { type: "stand", direction: "right", time: 300 },
        { type: "walk", direction: "down" },
        { type: "walk", direction: "down" },
        { type: "walk", direction: "left" },
        { type: "walk", direction: "left" },
      ],
      talking: [
        {
          required: ["TALKED_TO_npc7_OUTSIDE"],
          events: [
            {
              type: "textMessage",
              text: "Hey. We just spoke.",
              faceHero: "npc7",
            },
          ],
        },
        {
          events: [
            { type: "addStoryFlag", flag: "TALKED_TO_npc7_OUTSIDE" },
            {
              type: "textMessage",
              text: "Hey! ",
              faceHero: "npc7",
            },
          ],
        },
      ],
    },
  },
  walls: {
    [utils.asGridCoord(3, 0)]: true,
    [utils.asGridCoord(4, 0)]: true,
    [utils.asGridCoord(5, 0)]: true,
    [utils.asGridCoord(6, 0)]: true,
    [utils.asGridCoord(9, 0)]: true,
    [utils.asGridCoord(1, 1)]: true,
    [utils.asGridCoord(2, 1)]: true,
    [utils.asGridCoord(9, 1)]: true,
    [utils.asGridCoord(10, 1)]: true,
    [utils.asGridCoord(11, 1)]: true,
    [utils.asGridCoord(12, 1)]: true,
    [utils.asGridCoord(13, 1)]: true,
    [utils.asGridCoord(15, 1)]: true,
    [utils.asGridCoord(16, 1)]: true,
    [utils.asGridCoord(17, 1)]: true,
    [utils.asGridCoord(18, 1)]: true,
    [utils.asGridCoord(19, 1)]: true,
    [utils.asGridCoord(20, 1)]: true,
    [utils.asGridCoord(21, 1)]: true,
    [utils.asGridCoord(22, 1)]: true,
    [utils.asGridCoord(23, 1)]: true,
    [utils.asGridCoord(0, 2)]: true,
    [utils.asGridCoord(14, 2)]: true,
    [utils.asGridCoord(24, 2)]: true,
    [utils.asGridCoord(25, 2)]: true,
    [utils.asGridCoord(26, 2)]: true,
    [utils.asGridCoord(27, 2)]: true,
    [utils.asGridCoord(0, 3)]: true,
    [utils.asGridCoord(4, 3)]: true,
    [utils.asGridCoord(0, 4)]: true,
    [utils.asGridCoord(0, 5)]: true,
    [utils.asGridCoord(3, 5)]: true,
    [utils.asGridCoord(26, 5)]: true,
    [utils.asGridCoord(27, 5)]: true,
    [utils.asGridCoord(28, 6)]: true,
    [utils.asGridCoord(0, 6)]: true,
    [utils.asGridCoord(3, 6)]: true,
    [utils.asGridCoord(6, 6)]: true,
    [utils.asGridCoord(7, 6)]: true,
    [utils.asGridCoord(24, 6)]: true,
    [utils.asGridCoord(25, 6)]: true,
    [utils.asGridCoord(0, 7)]: true,
    [utils.asGridCoord(3, 7)]: true,
    [utils.asGridCoord(6, 7)]: true,
    [utils.asGridCoord(24, 7)]: true,
    [utils.asGridCoord(0, 8)]: true,
    [utils.asGridCoord(3, 8)]: true,
    [utils.asGridCoord(6, 8)]: true,
    [utils.asGridCoord(10, 8)]: true,
    [utils.asGridCoord(24, 8)]: true,
    [utils.asGridCoord(1, 9)]: true,
    [utils.asGridCoord(2, 9)]: true,
    [utils.asGridCoord(3, 9)]: true,
    [utils.asGridCoord(6, 9)]: true,
    [utils.asGridCoord(7, 9)]: true,
    [utils.asGridCoord(8, 9)]: true,
    [utils.asGridCoord(12, 9)]: true,
    [utils.asGridCoord(13, 9)]: true,
    [utils.asGridCoord(14, 9)]: true,
    [utils.asGridCoord(15, 9)]: true,
    [utils.asGridCoord(16, 9)]: true,
    [utils.asGridCoord(17, 9)]: true,
    [utils.asGridCoord(18, 9)]: true,
    [utils.asGridCoord(19, 9)]: true,
    [utils.asGridCoord(20, 9)]: true,
    [utils.asGridCoord(21, 9)]: true,
    [utils.asGridCoord(22, 9)]: true,
    [utils.asGridCoord(23, 9)]: true,
    [utils.asGridCoord(3, 10)]: true,
    [utils.asGridCoord(6, 10)]: true,
    [utils.asGridCoord(3, 11)]: true,
    [utils.asGridCoord(6, 11)]: true,
    [utils.asGridCoord(3, 12)]: true,
    [utils.asGridCoord(6, 12)]: true,
    [utils.asGridCoord(3, 13)]: true,
    [utils.asGridCoord(6, 13)]: true,
    [utils.asGridCoord(3, 14)]: true,
    [utils.asGridCoord(6, 14)]: true,
    [utils.asGridCoord(3, 15)]: true,
    [utils.asGridCoord(6, 15)]: true,
    [utils.asGridCoord(3, 16)]: true,
    [utils.asGridCoord(6, 16)]: true,
    [utils.asGridCoord(2, 17)]: true,
    [utils.asGridCoord(3, 17)]: true,
    [utils.asGridCoord(6, 17)]: true,
    [utils.asGridCoord(7, 17)]: true,
    [utils.asGridCoord(1, 18)]: true,
    [utils.asGridCoord(3, 18)]: true,
    [utils.asGridCoord(8, 18)]: true,
    [utils.asGridCoord(1, 19)]: true,
    [utils.asGridCoord(3, 19)]: true,
    [utils.asGridCoord(6, 19)]: true,
    [utils.asGridCoord(7, 19)]: true,
    [utils.asGridCoord(8, 19)]: true,
    [utils.asGridCoord(1, 20)]: true,
    [utils.asGridCoord(3, 20)]: true,
    [utils.asGridCoord(9, 20)]: true,
    [utils.asGridCoord(0, 21)]: true,
    [utils.asGridCoord(6, 21)]: true,
    [utils.asGridCoord(7, 21)]: true,
    [utils.asGridCoord(8, 21)]: true,
    [utils.asGridCoord(1, 22)]: true,
    [utils.asGridCoord(4, 22)]: true,
    [utils.asGridCoord(6, 22)]: true,
    [utils.asGridCoord(2, 23)]: true,
    [utils.asGridCoord(3, 23)]: true,
    [utils.asGridCoord(5, 23)]: true,
  },
  cutsceneSpaces: {
    /* LowerLeft - NPC interactions */
    /* LowerLeft - NPC interactions end */

    /* LowerLeft - Room map changing */
    [utils.asGridCoord(2, 19)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OldManHouse",
            x: utils.withGrid(4),
            y: utils.withGrid(8),
            direction: "up",
          },
        ],
      },
    ],
    /* LowerLeft - Room map changing end */

    /* LowerLeft - Map changing */
    [utils.asGridCoord(7, 0)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideLeft",
            x: utils.withGrid(19),
            y: utils.withGrid(26),
            direction: "up",
          },
        ],
      },
    ],
    [utils.asGridCoord(8, 0)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideLeft",
            x: utils.withGrid(20),
            y: utils.withGrid(26),
            direction: "up",
          },
        ],
      },
    ],
    [utils.asGridCoord(28, 3)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideRight",
            x: utils.withGrid(1),
            y: utils.withGrid(36),
            direction: "right",
          },
        ],
      },
    ],
    [utils.asGridCoord(28, 4)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideRight",
            x: utils.withGrid(1),
            y: utils.withGrid(37),
            direction: "right",
          },
        ],
      },
    ],
    /* LowerLeft - Map changing end */
  },
};
