import { utils } from "./../../utils.js";

export const OutsideRight = {
  id: "OutsideRight",
  hugMapCorners: true,
  lowerSrc: "./assets/maps/newmaps/right-area_lower.png",
  upperSrc: "./assets/maps/newmaps/right-area_upper.png",
  configObjects: {
    hero: {
      type: "Person",
      isPlayerControlled: true,
      src: "./assets/characters/people/hero.png",
      x: utils.withGrid(1),
      y: utils.withGrid(9),
    },
    fire1: {
      type: "Fire",
      x: utils.withGrid(8),
      y: utils.withGrid(5) + 8,
    },
    chest1: {
      type: "Chest",
      x: utils.withGrid(9),
      y: utils.withGrid(30),
      storyFlag: "CHEST1_OUTSIDERIGHTRIGHT",
      item: "item_hayBale",
    },
    chest2: {
      type: "Chest",
      x: utils.withGrid(26),
      y: utils.withGrid(4),
      storyFlag: "CHEST2_OUTSIDERIGHTRIGHT",
      item: "item_hayBale",
    },
    cow1: {
      type: "Cow",
      x: utils.withGrid(18),
      y: utils.withGrid(8),
      behaviorLoop: [
        { type: "walk", direction: "right" },
        { type: "walk", direction: "right" },
        { type: "stand", direction: "right", time: 4000 },
        { type: "stand", direction: "left", time: 3000 },
        { type: "walk", direction: "left" },
        { type: "walk", direction: "left" },
        { type: "stand", direction: "left", time: 3000 },
        { type: "stand", direction: "right", time: 4000 },
      ],
      talking: [
        {
          events: [
            {
              type: "textMessage",
              text: "Moooo!",
            },
            { type: "healAnimals" },
            {
              type: "textMessage",
              text: "Wow talking with the animals has re-invigorated your own.",
            },
          ],
        },
      ],
    },
    npc1: {
      type: "Person",
      x: utils.withGrid(24),
      y: utils.withGrid(22),
      src: "./assets/characters/people/alchemist2.png",
      behaviorLoop: [
        { type: "stand", direction: "left", time: 3000 },
        { type: "stand", direction: "down", time: 3000 },
      ],
      talking: [
        {
          required: ["TALKED_TO_npc1_OUTSIDERIGHT"],
          events: [
            {
              type: "textMessage",
              text: "Wow...",
              faceHero: "npc1",
            },
          ],
        },
        {
          events: [
            { type: "addStoryFlag", flag: "TALKED_TO_npc1_OUTSIDERIGHT" },
            {
              type: "textMessage",
              text: "Hey! You seem strong, lets battle.",
              faceHero: "npc1",
            },
            { type: "battle", enemyId: "Jessica" },
            { type: "addStoryFlag", flag: "DEFEATED_npc1_OUTSIDERIGHT" },
          ],
        },
      ],
    },
    npc2: {
      type: "Person",
      x: utils.withGrid(20),
      y: utils.withGrid(9),
      src: "./assets/characters/people/kid.png",
      behaviorLoop: [
        { type: "walk", direction: "right" },
        { type: "walk", direction: "right" },
        { type: "walk", direction: "down" },
        { type: "stand", direction: "down", time: 200 },
        { type: "stand", direction: "right", time: 300 },
        { type: "stand", direction: "down", time: 700 },
        { type: "walk", direction: "left" },
        { type: "walk", direction: "left" },
        { type: "stand", direction: "down", time: 500 },
        { type: "stand", direction: "right", time: 200 },
        { type: "stand", direction: "down", time: 700 },
        { type: "walk", direction: "down" },
        { type: "stand", direction: "left", time: 600 },
        { type: "stand", direction: "down", time: 200 },
        { type: "stand", direction: "right", time: 200 },
        { type: "walk", direction: "up" },
        { type: "walk", direction: "left" },
        { type: "stand", direction: "down", time: 700 },
        { type: "walk", direction: "up" },
        { type: "stand", direction: "up", time: 900 },
        { type: "stand", direction: "left", time: 200 },
        { type: "stand", direction: "right", time: 400 },
        { type: "walk", direction: "right" },
      ],
      talking: [
        {
          required: ["DEFEATED_npc2_OUTSIDERIGHT"],
          events: [
            {
              type: "textMessage",
              text: "No time to talk, I need to train!",
              faceHero: "npc2",
            },
          ],
        },
        {
          events: [
            {
              type: "textMessage",
              text: "Hey! hey! hey! Guess what, my dad is part of this secret group!",
              faceHero: "npc2",
            },
            {
              type: "textMessage",
              text: "He gave me this animal to fight people with. Bring it on!",
              faceHero: "npc2",
            },
            { type: "battle", enemyId: "Bret" },
            { type: "addStoryFlag", flag: "DEFEATED_npc2_OUTSIDERIGHT" },
            {
              type: "textMessage",
              text: "Wow, you are so strong! I'm telling my dad I need another one!",
            },
          ],
        },
      ],
    },
    npc3: {
      type: "Person",
      x: utils.withGrid(8),
      y: utils.withGrid(2),
      src: "./assets/characters/people/blacksmith2.png",
      behaviorLoop: [{ type: "stand", direction: "down", time: 1000 }],
      talking: [
        {
          required: ["TALKED_TO_npc3_OUTSIDERIGHT"],
          events: [
            {
              type: "textMessage",
              text: "I hope they let me join, I wonder how they are creating these new farm animals.",
              faceHero: "npc3",
            },
            {
              type: "textMessage",
              text: "The meeting is in the blue house just down the road abit.",
            },
          ],
        },
        {
          events: [
            { type: "addStoryFlag", flag: "TALKED_TO_npc3_OUTSIDERIGHT" },
            {
              type: "textMessage",
              text: "Are you part of this new group? The work they are doing seems groundbreaking.",
              faceHero: "npc3",
            },
            {
              type: "textMessage",
              text: "They say they can help feed the world's population and improve the quality of life for millions.",
            },
            {
              type: "textMessage",
              text: "I'm thinking of joining, they are having a meeting today in one of the leaders houses.",
            },
            {
              type: "textMessage",
              text: "It's the blue house just down the road abit.",
            },
          ],
        },
      ],
    },
    npc4: {
      type: "Person",
      x: utils.withGrid(19),
      y: utils.withGrid(7),
      src: "./assets/characters/people/kid2.png",
      behaviorLoop: [{ type: "stand", direction: "down", time: 1000 }],
      talking: [
        {
          required: ["TALKED_TO_npc4_OUTSIDERIGHT"],
          events: [
            {
              type: "textMessage",
              text: "They are so fluffy.",
              faceHero: "npc4",
            },
          ],
        },
        {
          events: [
            { type: "addStoryFlag", flag: "TALKED_TO_npc4_OUTSIDERIGHT" },
            {
              type: "textMessage",
              text: "I love cows.",
              faceHero: "npc4",
            },
          ],
        },
      ],
    },
    npc5: {
      type: "Person",
      x: utils.withGrid(11),
      y: utils.withGrid(22),
      src: "./assets/characters/people/merchant1.png",
      behaviorLoop: [{ type: "stand", direction: "right", time: 1000 }],
      talking: [
        {
          required: ["DEFEATED_npc5_OUTSIDERIGHT"],
          events: [
            {
              type: "textMessage",
              text: "We plan to use his work for the greater good!",
              faceHero: "npc5",
            },
          ],
        },
        {
          events: [
            {
              type: "textMessage",
              text: "Hello...",
              faceHero: "npc5",
            },
            {
              type: "textMessage",
              text: "I'm looking for signatures to sign my petition. We are wanting to expand the town!",
            },
            {
              type: "textMessage",
              text: "pppssstt... There are some big advances coming, this secret group I'm in is doing some amazing stuff!",
            },
            {
              type: "textMessage",
              text: "Me: Do you know where my father is!",
            },
            {
              type: "textMessage",
              text: "Oh no it's you! Forget what I said!",
            },
            { type: "battle", enemyId: "John" },
            { type: "addStoryFlag", flag: "DEFEATED_npc5_OUTSIDERIGHT" },
            {
              type: "textMessage",
              text: "I'm sorry about your father, we need his expertise in genetics.",
            },
          ],
        },
      ],
    },
    npc6: {
      type: "Person",
      x: utils.withGrid(20),
      y: utils.withGrid(29),
      src: "./assets/characters/people/kid4.png",
      behaviorLoop: [
        { type: "stand", direction: "right", time: 1000 },
        { type: "stand", direction: "down", time: 2000 },
        { type: "walk", direction: "left" },
        { type: "stand", direction: "down", time: 2000 },
        { type: "stand", direction: "up", time: 1000 },
        { type: "walk", direction: "right" },
      ],
      talking: [
        {
          required: ["TALKED_TO_npc6_OUTSIDERIGHT"],
          events: [
            {
              type: "textMessage",
              text: "That group is having a meeting in the blue house up the road.",
              faceHero: "npc6",
            },
          ],
        },
        {
          events: [
            {
              type: "textMessage",
              text: "That group is having a meeting in the blue house up the road.",
              faceHero: "npc6",
            },
            {
              type: "textMessage",
              text: "But wait, let me show you my clucker.",
              faceHero: "npc6",
            },
            { type: "battle", enemyId: "Becky" },
            { type: "addStoryFlag", flag: "DEFEATED_npc6_OUTSIDERIGHT" },
          ],
        },
      ],
    },
    npc7: {
      type: "Person",
      x: utils.withGrid(22),
      y: utils.withGrid(29),
      src: "./assets/characters/people/kid3.png",
      behaviorLoop: [{ type: "stand", direction: "left", time: 1000 }],
      talking: [
        {
          required: ["DEFEATED_npc7_OUTSIDERIGHT"],
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
            {
              type: "textMessage",
              text: "Let me show you my piggy.",
              faceHero: "npc7",
            },
            { type: "battle", enemyId: "Elly" },
            { type: "addStoryFlag", flag: "DEFEATED_npc7_OUTSIDERIGHT" },
          ],
        },
      ],
    },
    npc8: {
      type: "Person",
      x: utils.withGrid(22),
      y: utils.withGrid(36),
      src: "./assets/characters/people/kid.png",
      behaviorLoop: [{ type: "stand", direction: "left", time: 1000 }],
      talking: [
        {
          required: ["TALKED_TO_npc8_OUTSIDERIGHT_2"],
          events: [
            {
              type: "textMessage",
              text: "Can you find my Mum (crying...)",
              faceHero: "npc8",
            },
          ],
        },
        {
          required: ["TALKED_TO_npc8_OUTSIDERIGHT"],
          events: [
            { type: "addStoryFlag", flag: "TALKED_TO_npc8_OUTSIDERIGHT_2" },
            {
              type: "textMessage",
              text: "Ouch!! A crab bit me.",
              faceHero: "npc8",
            },
          ],
        },
        {
          events: [
            { type: "addStoryFlag", flag: "TALKED_TO_npc8_OUTSIDERIGHT" },
            {
              type: "textMessage",
              text: "I love playing in the sand.",
              faceHero: "npc8",
            },
          ],
        },
      ],
    },
    npc9: {
      type: "Person",
      x: utils.withGrid(14),
      y: utils.withGrid(7),
      src: "./assets/characters/people/merchant2.png",
      behaviorLoop: [],
      talking: [
        {
          required: ["TALKED_TO_npc9_OUTSIDERIGHT"],
          events: [
            {
              type: "textMessage",
              text: "Hey. We just spoke.",
              faceHero: "npc9",
            },
          ],
        },
        {
          events: [
            { type: "addStoryFlag", flag: "TALKED_TO_npc9_OUTSIDERIGHT" },
            {
              type: "textMessage",
              text: "Hey! This should be an exciting tournament. Can't wait to give out the prize.",
              faceHero: "npc9",
            },
          ],
        },
      ],
    },
    npc10: {
      type: "Person",
      x: utils.withGrid(20),
      y: utils.withGrid(4),
      src: "./assets/characters/people/merchant2.png",
      behaviorLoop: [],
      talking: [
        {
          required: ["DEFEATED_npc10_OUTSIDERIGHT"],
          events: [
            {
              type: "textMessage",
              text: "Let's battle again!!",
              faceHero: "npc10",
            },
            { type: "battle", enemyId: "Mick2" },
            { type: "addStoryFlag", flag: "DEFEATED_npc1_OUTSIDERIGHT" },
          ],
        },
        {
          events: [
            {
              type: "textMessage",
              text: "Fred and I always like to fight!",
              faceHero: "npc10",
            },
            {
              type: "textMessage",
              text: "Let's battle!",
            },
            { type: "battle", enemyId: "Mick1" },
            { type: "addStoryFlag", flag: "DEFEATED_npc10_OUTSIDERIGHT" },
          ],
        },
      ],
    },
    npc11: {
      type: "Person",
      x: utils.withGrid(21),
      y: utils.withGrid(4),
      src: "./assets/characters/people/merchant1.png",
      behaviorLoop: [],
      talking: [
        {
          required: ["DEFEATED_npc11_OUTSIDERIGHT"],
          events: [
            {
              type: "textMessage",
              text: "It's so fun battling you, again!",
              faceHero: "npc11",
            },
            { type: "battle", enemyId: "Fred2" },
            { type: "addStoryFlag", flag: "DEFEATED_npc1_OUTSIDERIGHT" },
          ],
        },
        {
          events: [
            {
              type: "textMessage",
              text: "Mick and I always like to fight!",
              faceHero: "npc11",
            },
            { type: "battle", enemyId: "Fred1" },
            { type: "addStoryFlag", flag: "DEFEATED_npc11_OUTSIDERIGHT" },
          ],
        },
      ],
    },
  },
  walls: {
    [utils.asGridCoord(8, 1)]: true,
    [utils.asGridCoord(26, 25)]: true,
    [utils.asGridCoord(26, 32)]: true,
    [utils.asGridCoord(7, 2)]: true,
    [utils.asGridCoord(9, 2)]: true,
    [utils.asGridCoord(5, 3)]: true,
    [utils.asGridCoord(6, 3)]: true,
    [utils.asGridCoord(7, 3)]: true,
    [utils.asGridCoord(9, 3)]: true,
    [utils.asGridCoord(13, 3)]: true,
    [utils.asGridCoord(17, 3)]: true,
    [utils.asGridCoord(18, 3)]: true,
    [utils.asGridCoord(19, 3)]: true,
    [utils.asGridCoord(20, 3)]: true,
    [utils.asGridCoord(21, 3)]: true,
    [utils.asGridCoord(22, 3)]: true,
    [utils.asGridCoord(23, 3)]: true,
    [utils.asGridCoord(24, 3)]: true,
    [utils.asGridCoord(25, 3)]: true,
    [utils.asGridCoord(2, 4)]: true,
    [utils.asGridCoord(3, 4)]: true,
    [utils.asGridCoord(4, 4)]: true,
    [utils.asGridCoord(10, 4)]: true,
    [utils.asGridCoord(12, 4)]: true,
    [utils.asGridCoord(14, 4)]: true,
    [utils.asGridCoord(16, 4)]: true,
    [utils.asGridCoord(26, 5)]: true,
    [utils.asGridCoord(1, 5)]: true,
    [utils.asGridCoord(10, 5)]: true,
    [utils.asGridCoord(12, 5)]: true,
    [utils.asGridCoord(14, 5)]: true,
    [utils.asGridCoord(16, 5)]: true,
    [utils.asGridCoord(26, 6)]: true,
    [utils.asGridCoord(1, 6)]: true,
    [utils.asGridCoord(10, 6)]: true,
    [utils.asGridCoord(11, 6)]: true,
    [utils.asGridCoord(12, 6)]: true,
    [utils.asGridCoord(14, 6)]: true,
    [utils.asGridCoord(15, 6)]: true,
    [utils.asGridCoord(16, 6)]: true,
    [utils.asGridCoord(24, 6)]: true,
    [utils.asGridCoord(25, 6)]: true,
    [utils.asGridCoord(1, 7)]: true,
    [utils.asGridCoord(23, 7)]: true,
    [utils.asGridCoord(0, 8)]: true,
    [utils.asGridCoord(1, 8)]: true,
    [utils.asGridCoord(23, 8)]: true,
    [utils.asGridCoord(23, 9)]: true,
    [utils.asGridCoord(23, 10)]: true,
    [utils.asGridCoord(0, 11)]: true,
    [utils.asGridCoord(1, 11)]: true,
    [utils.asGridCoord(2, 11)]: true,
    [utils.asGridCoord(3, 11)]: true,
    [utils.asGridCoord(4, 11)]: true,
    [utils.asGridCoord(23, 11)]: true,
    [utils.asGridCoord(4, 12)]: true,
    [utils.asGridCoord(23, 12)]: true,
    [utils.asGridCoord(4, 13)]: true,
    [utils.asGridCoord(20, 13)]: true,
    [utils.asGridCoord(21, 13)]: true,
    [utils.asGridCoord(22, 13)]: true,
    [utils.asGridCoord(4, 14)]: true,
    [utils.asGridCoord(10, 14)]: true,
    [utils.asGridCoord(11, 14)]: true,
    [utils.asGridCoord(20, 14)]: true,
    [utils.asGridCoord(4, 15)]: true,
    [utils.asGridCoord(5, 15)]: true,
    [utils.asGridCoord(6, 15)]: true,
    [utils.asGridCoord(7, 15)]: true,
    [utils.asGridCoord(8, 15)]: true,
    [utils.asGridCoord(9, 15)]: true,
    [utils.asGridCoord(11, 15)]: true,
    [utils.asGridCoord(17, 15)]: true,
    [utils.asGridCoord(18, 15)]: true,
    [utils.asGridCoord(19, 15)]: true,
    [utils.asGridCoord(20, 15)]: true,
    [utils.asGridCoord(4, 16)]: true,
    [utils.asGridCoord(5, 16)]: true,
    [utils.asGridCoord(7, 16)]: true,
    [utils.asGridCoord(8, 16)]: true,
    [utils.asGridCoord(9, 16)]: true,
    [utils.asGridCoord(10, 16)]: true,
    [utils.asGridCoord(11, 16)]: true,
    [utils.asGridCoord(17, 16)]: true,
    [utils.asGridCoord(19, 16)]: true,
    [utils.asGridCoord(20, 16)]: true,
    [utils.asGridCoord(21, 16)]: true,
    [utils.asGridCoord(4, 17)]: true,
    [utils.asGridCoord(21, 17)]: true,
    [utils.asGridCoord(22, 17)]: true,
    [utils.asGridCoord(4, 18)]: true,
    [utils.asGridCoord(23, 18)]: true,
    [utils.asGridCoord(3, 19)]: true,
    [utils.asGridCoord(15, 19)]: true,
    [utils.asGridCoord(16, 19)]: true,
    [utils.asGridCoord(17, 19)]: true,
    [utils.asGridCoord(18, 19)]: true,
    [utils.asGridCoord(19, 19)]: true,
    [utils.asGridCoord(20, 19)]: true,
    [utils.asGridCoord(23, 19)]: true,
    [utils.asGridCoord(2, 20)]: true,
    [utils.asGridCoord(15, 20)]: true,
    [utils.asGridCoord(17, 20)]: true,
    [utils.asGridCoord(20, 20)]: true,
    [utils.asGridCoord(23, 20)]: true,
    [utils.asGridCoord(1, 21)]: true,
    [utils.asGridCoord(5, 21)]: true,
    [utils.asGridCoord(6, 21)]: true,
    [utils.asGridCoord(7, 21)]: true,
    [utils.asGridCoord(8, 21)]: true,
    [utils.asGridCoord(9, 21)]: true,
    [utils.asGridCoord(15, 21)]: true,
    [utils.asGridCoord(16, 21)]: true,
    [utils.asGridCoord(18, 21)]: true,
    [utils.asGridCoord(20, 21)]: true,
    [utils.asGridCoord(23, 21)]: true,
    [utils.asGridCoord(24, 21)]: true,
    [utils.asGridCoord(1, 22)]: true,
    [utils.asGridCoord(5, 22)]: true,
    [utils.asGridCoord(6, 22)]: true,
    [utils.asGridCoord(8, 22)]: true,
    [utils.asGridCoord(9, 22)]: true,
    [utils.asGridCoord(15, 22)]: true,
    [utils.asGridCoord(16, 22)]: true,
    [utils.asGridCoord(18, 22)]: true,
    [utils.asGridCoord(20, 22)]: true,
    [utils.asGridCoord(25, 22)]: true,
    [utils.asGridCoord(1, 23)]: true,
    [utils.asGridCoord(15, 23)]: true,
    [utils.asGridCoord(16, 23)]: true,
    [utils.asGridCoord(18, 23)]: true,
    [utils.asGridCoord(20, 23)]: true,
    [utils.asGridCoord(25, 23)]: true,
    [utils.asGridCoord(2, 24)]: true,
    [utils.asGridCoord(4, 24)]: true,
    [utils.asGridCoord(15, 24)]: true,
    [utils.asGridCoord(16, 24)]: true,
    [utils.asGridCoord(19, 24)]: true,
    [utils.asGridCoord(20, 24)]: true,
    [utils.asGridCoord(21, 24)]: true,
    [utils.asGridCoord(24, 24)]: true,
    [utils.asGridCoord(25, 24)]: true,
    [utils.asGridCoord(3, 25)]: true,
    [utils.asGridCoord(5, 25)]: true,
    [utils.asGridCoord(6, 25)]: true,
    [utils.asGridCoord(7, 25)]: true,
    [utils.asGridCoord(8, 25)]: true,
    [utils.asGridCoord(9, 25)]: true,
    [utils.asGridCoord(10, 25)]: true,
    [utils.asGridCoord(11, 25)]: true,
    [utils.asGridCoord(26, 26)]: true,
    [utils.asGridCoord(2, 26)]: true,
    [utils.asGridCoord(26, 27)]: true,
    [utils.asGridCoord(1, 27)]: true,
    [utils.asGridCoord(26, 28)]: true,
    [utils.asGridCoord(2, 28)]: true,
    [utils.asGridCoord(26, 29)]: true,
    [utils.asGridCoord(3, 29)]: true,
    [utils.asGridCoord(4, 29)]: true,
    [utils.asGridCoord(5, 29)]: true,
    [utils.asGridCoord(6, 29)]: true,
    [utils.asGridCoord(7, 29)]: true,
    [utils.asGridCoord(8, 29)]: true,
    [utils.asGridCoord(9, 29)]: true,
    [utils.asGridCoord(10, 29)]: true,
    [utils.asGridCoord(26, 30)]: true,
    [utils.asGridCoord(4, 30)]: true,
    [utils.asGridCoord(6, 30)]: true,
    [utils.asGridCoord(8, 30)]: true,
    [utils.asGridCoord(10, 30)]: true,
    [utils.asGridCoord(24, 30)]: true,
    [utils.asGridCoord(25, 30)]: true,
    [utils.asGridCoord(3, 31)]: true,
    [utils.asGridCoord(4, 31)]: true,
    [utils.asGridCoord(7, 31)]: true,
    [utils.asGridCoord(10, 31)]: true,
    [utils.asGridCoord(25, 31)]: true,
    [utils.asGridCoord(2, 32)]: true,
    [utils.asGridCoord(10, 32)]: true,
    [utils.asGridCoord(26, 33)]: true,
    [utils.asGridCoord(2, 33)]: true,
    [utils.asGridCoord(3, 33)]: true,
    [utils.asGridCoord(4, 33)]: true,
    [utils.asGridCoord(7, 33)]: true,
    [utils.asGridCoord(8, 33)]: true,
    [utils.asGridCoord(9, 33)]: true,
    [utils.asGridCoord(10, 33)]: true,
    [utils.asGridCoord(18, 33)]: true,
    [utils.asGridCoord(26, 34)]: true,
    [utils.asGridCoord(1, 34)]: true,
    [utils.asGridCoord(18, 34)]: true,
    [utils.asGridCoord(26, 35)]: true,
    [utils.asGridCoord(0, 35)]: true,
    [utils.asGridCoord(1, 35)]: true,
    [utils.asGridCoord(18, 35)]: true,
    [utils.asGridCoord(26, 36)]: true,
    [utils.asGridCoord(18, 36)]: true,
    [utils.asGridCoord(26, 37)]: true,
    [utils.asGridCoord(18, 37)]: true,
    [utils.asGridCoord(26, 38)]: true,
    [utils.asGridCoord(0, 38)]: true,
    [utils.asGridCoord(18, 38)]: true,
    [utils.asGridCoord(26, 39)]: true,
    [utils.asGridCoord(1, 39)]: true,
    [utils.asGridCoord(2, 39)]: true,
    [utils.asGridCoord(18, 39)]: true,
    [utils.asGridCoord(26, 40)]: true,
    [utils.asGridCoord(2, 40)]: true,
    [utils.asGridCoord(18, 40)]: true,
    [utils.asGridCoord(26, 41)]: true,
    [utils.asGridCoord(3, 41)]: true,
    [utils.asGridCoord(4, 41)]: true,
    [utils.asGridCoord(5, 41)]: true,
    [utils.asGridCoord(6, 41)]: true,
    [utils.asGridCoord(7, 41)]: true,
    [utils.asGridCoord(8, 41)]: true,
    [utils.asGridCoord(9, 41)]: true,
    [utils.asGridCoord(10, 41)]: true,
    [utils.asGridCoord(11, 41)]: true,
    [utils.asGridCoord(12, 41)]: true,
    [utils.asGridCoord(13, 41)]: true,
    [utils.asGridCoord(14, 41)]: true,
    [utils.asGridCoord(15, 41)]: true,
    [utils.asGridCoord(16, 41)]: true,
    [utils.asGridCoord(17, 41)]: true,
    [utils.asGridCoord(19, 41)]: true,
    [utils.asGridCoord(20, 41)]: true,
    [utils.asGridCoord(21, 41)]: true,
    [utils.asGridCoord(22, 41)]: true,
    [utils.asGridCoord(23, 41)]: true,
    [utils.asGridCoord(24, 41)]: true,
    [utils.asGridCoord(25, 41)]: true,
  },
  cutsceneSpaces: {
    /* OutsideRight - NPC interactions */
    [utils.asGridCoord(13, 7)]: [
      {
        required: ["SEEN_SOCIALROOM_SCENE"],
        exclude: "INVITATION_ACCEPTED",
        events: [
          { type: "addStoryFlag", flag: "INVITATION_ACCEPTED" },
          { who: "hero", type: "stand", direction: "right", time: 200 },
          { type: "textMessage", text: "Welcome to the tournment of Hay!", faceHero: "npc9" },
          {
            type: "textMessage",
            text: "This is the annual event, a special prize has been announced this year by an anonymous group.",
          },
          { type: "textMessage", text: "Let me see if you are part of the event. What is your name?" },
          { type: "textMessage", text: "Me: Sam." },
          { type: "textMessage", text: "Let me see here..." },
          { who: "npc9", type: "stand", direction: "down", time: 1000 },
          {
            type: "textMessage",
            text: "Hmmm... I don't see you on the list here",
            faceHero: "npc9",
          },
          {
            type: "textMessage",
            text: "Sam: Wait I have an invitation right here...",
          },
          {
            type: "textMessage",
            text: "* You hand him the invitation and he looks over it carefully *",
          },
          {
            type: "textMessage",
            text: "Oh wow, you are taking part of the event, go ahead.",
          },
          { who: "hero", type: "walk", direction: "up" },
        ],
      },
      {
        exclude: "INVITATION_ACCEPTED",
        events: [
          { who: "hero", type: "stand", direction: "right", time: 200 },
          { type: "textMessage", text: "Welcome to the tournment of Hay!", faceHero: "npc9" },
          {
            type: "textMessage",
            text: "This is the annual event, a special prize has been announced this year by an anonymous group.",
          },
          { type: "textMessage", text: "Let me see if you are part of the event. What is your name?" },
          { type: "textMessage", text: "Me: Sam." },
          { type: "textMessage", text: "Let me see here..." },
          { who: "npc9", type: "stand", direction: "down", time: 1000 },
          {
            type: "textMessage",
            text: "Hmmm... I don't see you on the list here",
            faceHero: "npc9",
          },
          {
            type: "textMessage",
            text: "You will have to talk with the townsfolk around town. Someone should be able to invite you if you are strong enough.",
          },
          { who: "hero", type: "walk", direction: "down" },
          { who: "npc9", type: "stand", direction: "down", time: 200 },
        ],
      },
    ],
    /* OutsideRight - NPC interactions end */

    /* OutsideRight - Room map changing */
    [utils.asGridCoord(13, 5)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "Arena",
            x: utils.withGrid(9),
            y: utils.withGrid(12),
            direction: "up",
          },
        ],
      },
    ],
    [utils.asGridCoord(5, 30)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "BigHouse",
            x: utils.withGrid(9),
            y: utils.withGrid(12),
            direction: "up",
          },
        ],
      },
    ],
    [utils.asGridCoord(18, 16)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "SmallHouse",
            x: utils.withGrid(4),
            y: utils.withGrid(8),
            direction: "up",
          },
        ],
      },
    ],
    [utils.asGridCoord(17, 22)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "MediumHouse",
            x: utils.withGrid(3),
            y: utils.withGrid(9),
            direction: "up",
          },
        ],
      },
    ],
    [utils.asGridCoord(6, 16)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "SocialClubRoom",
            x: utils.withGrid(4),
            y: utils.withGrid(11),
            direction: "up",
          },
        ],
      },
    ],
    [utils.asGridCoord(7, 22)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "SmallShop",
            x: utils.withGrid(5),
            y: utils.withGrid(7),
            direction: "up",
          },
        ],
      },
    ],
    /* OutsideRight - Room map changing end  */

    /* OutsideRight - Map changing  */
    [utils.asGridCoord(0, 9)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideLeft",
            x: utils.withGrid(44),
            y: utils.withGrid(8),
            direction: "left",
          },
        ],
      },
    ],
    [utils.asGridCoord(0, 10)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideLeft",
            x: utils.withGrid(44),
            y: utils.withGrid(9),
            direction: "left",
          },
        ],
      },
    ],
    [utils.asGridCoord(0, 37)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideBottom",
            x: utils.withGrid(27),
            y: utils.withGrid(4),
            direction: "left",
          },
        ],
      },
    ],
    [utils.asGridCoord(0, 36)]: [
      {
        events: [
          {
            type: "changeMap",
            map: "OutsideBottom",
            x: utils.withGrid(27),
            y: utils.withGrid(3),
            direction: "left",
          },
        ],
      },
    ],
    /* OutsideRight - Map changing end  */
  },
};
