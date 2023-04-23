import { utils } from "./../../utils.js";

const cutscene = (moveLeft) => [
  {
    events: [
      { who: "hero", type: "stand", direction: "up", time: 50 },
      { type: "textMessage", text: "Sam!", faceHero: "npc1" },
      { who: "npc1", type: "walk", direction: "down" },
      { who: "npc1", type: "walk", direction: "down" },
      { who: "npc1", type: "walk", direction: "down" },
      moveLeft
        ? { who: "npc1", type: "walk", direction: "left" }
        : { who: "npc1", type: "stand", direction: "down", time: 50 },
      { type: "textMessage", text: "I heard about your father, we have to talk.", faceHero: "npc1" },
      { who: "npc1", type: "walk", direction: "up" },
      { who: "npc1", type: "walk", direction: "up" },
      { who: "npc1", type: "walk", direction: "up" },
      { who: "hero", type: "walk", direction: "up" },
      { who: "hero", type: "walk", direction: "up" },
      { who: "hero", type: "walk", direction: "up" },
      moveLeft
        ? { who: "npc1", type: "walk", direction: "right" }
        : { who: "npc1", type: "stand", direction: "left", time: 50 },
      { who: "npc1", type: "stand", direction: "left", time: 50 },
      moveLeft
        ? { who: "hero", type: "stand", direction: "up", time: 50 }
        : { who: "hero", type: "walk", direction: "left" },
      { who: "hero", type: "walk", direction: "up" },
      { who: "hero", type: "stand", direction: "right", time: 50 },
      { type: "textMessage", text: "3 days ago your father was kidnapped by the secret society.", faceHero: "npc1" },
      {
        type: "textMessage",
        text: "Your father is an expert in farm animal genetics, they know this and are forcing him to create super farm animals.",
      },
      {
        type: "textMessage",
        text: "They tried to make me join them afew weeks ago, but I didn't like the sounds of their plans.",
      },
      { type: "textMessage", text: "They think what they are doing is righteous and fair." },
      { type: "textMessage", text: "They are going to use the animals to take over the entire town." },
      { type: "textMessage", text: "In order to get your father back you must defeat the leaders." },
      { type: "textMessage", text: "They are strong, it is best if you train up as much as you can." },
      { type: "textMessage", text: "Take this..." },
      { who: "npc1", type: "walk", direction: "down" },
      { who: "npc1", type: "walk", direction: "down" },
      { who: "npc1", type: "walk", direction: "down" },
      { who: "npc1", type: "walk", direction: "down" },
      { who: "npc1", type: "walk", direction: "down" },
      { who: "hero", type: "walk", direction: "down" },
      { who: "hero", type: "walk", direction: "down" },
      { who: "hero", type: "walk", direction: "down" },
      { who: "hero", type: "walk", direction: "down" },
      { who: "hero", type: "walk", direction: "down" },
      { who: "hero", type: "stand", direction: "right", time: 400 },
      { type: "textMessage", text: "Goodluck", faceHero: "npc1" },
      { who: "npc1", type: "stand", direction: "down", time: 50 },
    ],
  },
];

const exitMansion = [
  {
    events: [
      {
        type: "changeMap",
        map: "OutsideLeft",
        x: utils.withGrid(33),
        y: utils.withGrid(15),
        direction: "down",
      },
    ],
  },
];

export const Mansion = {
  id: "Mansion",
  lowerSrc: "./assets/maps/newmaps/room1_lower.png",
  upperSrc: "./assets/maps/newmaps/room1_upper.png",
  configObjects: {
    hero: {
      type: "Person",
      isPlayerControlled: true,
      src: "./assets/characters/people/hero.png",
      x: utils.withGrid(10),
      y: utils.withGrid(16),
    },
    npc1: {
      type: "Person",
      x: utils.withGrid(13),
      y: utils.withGrid(6),
      src: "./assets/characters/people/alchemist.png",
      behaviorLoop: [],
      talking: [
        {
          required: ["TALKED_TO_npc1_OUTSIDE"],
          events: [
            {
              type: "textMessage",
              text: "All the best. I've told you all I can.",
              faceHero: "npc1",
            },
          ],
        },
        {
          events: [
            { type: "addStoryFlag", flag: "TALKED_TO_npc1_OUTSIDE" },
            { type: "textMessage", text: "In order to get your father back you must defeat the leaders." },
            { type: "textMessage", text: "They are strong, it is best if you train up as much as you can." },
          ],
        },
      ],
    },
  },
  walls: {
    [utils.asGridCoord(8, 4)]: true,
    [utils.asGridCoord(9, 4)]: true,
    [utils.asGridCoord(10, 4)]: true,
    [utils.asGridCoord(11, 4)]: true,
    [utils.asGridCoord(12, 4)]: true,
    [utils.asGridCoord(13, 4)]: true,
    [utils.asGridCoord(14, 4)]: true,
    [utils.asGridCoord(15, 4)]: true,
    [utils.asGridCoord(16, 4)]: true,
    [utils.asGridCoord(17, 4)]: true,
    [utils.asGridCoord(7, 5)]: true,
    [utils.asGridCoord(18, 5)]: true,
    [utils.asGridCoord(7, 6)]: true,
    [utils.asGridCoord(18, 6)]: true,
    [utils.asGridCoord(7, 7)]: true,
    [utils.asGridCoord(18, 7)]: true,
    [utils.asGridCoord(7, 8)]: true,
    [utils.asGridCoord(18, 8)]: true,
    [utils.asGridCoord(3, 9)]: true,
    [utils.asGridCoord(4, 9)]: true,
    [utils.asGridCoord(5, 9)]: true,
    [utils.asGridCoord(6, 9)]: true,
    [utils.asGridCoord(7, 9)]: true,
    [utils.asGridCoord(8, 9)]: true,
    [utils.asGridCoord(9, 9)]: true,
    [utils.asGridCoord(10, 9)]: true,
    [utils.asGridCoord(11, 9)]: true,
    [utils.asGridCoord(14, 9)]: true,
    [utils.asGridCoord(15, 9)]: true,
    [utils.asGridCoord(16, 9)]: true,
    [utils.asGridCoord(17, 9)]: true,
    [utils.asGridCoord(2, 10)]: true,
    [utils.asGridCoord(16, 10)]: true,
    [utils.asGridCoord(17, 10)]: true,
    [utils.asGridCoord(1, 11)]: true,
    [utils.asGridCoord(18, 11)]: true,
    [utils.asGridCoord(1, 12)]: true,
    [utils.asGridCoord(4, 12)]: true,
    [utils.asGridCoord(5, 12)]: true,
    [utils.asGridCoord(6, 12)]: true,
    [utils.asGridCoord(18, 12)]: true,
    [utils.asGridCoord(1, 13)]: true,
    [utils.asGridCoord(4, 13)]: true,
    [utils.asGridCoord(5, 13)]: true,
    [utils.asGridCoord(6, 13)]: true,
    [utils.asGridCoord(18, 13)]: true,
    [utils.asGridCoord(1, 14)]: true,
    [utils.asGridCoord(4, 14)]: true,
    [utils.asGridCoord(5, 14)]: true,
    [utils.asGridCoord(6, 14)]: true,
    [utils.asGridCoord(18, 14)]: true,
    [utils.asGridCoord(2, 15)]: true,
    [utils.asGridCoord(18, 15)]: true,
    [utils.asGridCoord(2, 16)]: true,
    [utils.asGridCoord(17, 16)]: true,
    [utils.asGridCoord(3, 17)]: true,
    [utils.asGridCoord(4, 17)]: true,
    [utils.asGridCoord(5, 17)]: true,
    [utils.asGridCoord(6, 17)]: true,
    [utils.asGridCoord(7, 17)]: true,
    [utils.asGridCoord(8, 17)]: true,
    [utils.asGridCoord(9, 17)]: true,
    [utils.asGridCoord(12, 17)]: true,
    [utils.asGridCoord(13, 17)]: true,
    [utils.asGridCoord(14, 17)]: true,
    [utils.asGridCoord(15, 17)]: true,
    [utils.asGridCoord(16, 17)]: true,
  },
  cutsceneSpaces: {
    /* Mansion - NPC interactions */
    [utils.asGridCoord(13, 10)]: cutscene(false),
    [utils.asGridCoord(12, 10)]: cutscene(true),
    /* Mansion - NPC interactions end */

    /* Mansion - Room map changing */
    [utils.asGridCoord(10, 17)]: exitMansion,
    [utils.asGridCoord(11, 17)]: exitMansion,
    /* Mansion - Room map changing end  */
  },
};
