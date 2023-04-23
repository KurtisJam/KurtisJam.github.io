import { utils } from "./../utils.js";
import { OutsideLeft } from "./maps/OutsideLeft.js";
import { Home } from "./maps/Home.js";
import { OutsideBottom } from "./maps/OutsideBottom.js";
import { OutsideRight } from "./maps/OutsideRight.js";
import { Mansion } from "./maps/Mansion.js";

export class Maps {
  constructor() {
    this.maps = {
      OutsideLeft,
      Home,
      OutsideBottom,
      OutsideRight,

      Mansion,
      OldManHouse: {
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
      },
      SocialClubRoom: {
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
      },
      SmallHouse: {
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
      },
      MediumHouse: {
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
      },
      BigHouse: {
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
      },
      Arena: {
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
      },

      SmallShop: {
        id: "SmallShop",
        lowerSrc: "./assets/maps/newmaps/shop1_lower.png",
        upperSrc: "./assets/maps/newmaps/shop1_upper.png",
        configObjects: {
          hero: {
            type: "Person",
            isPlayerControlled: true,
            src: "./assets/characters/people/hero.png",
            x: utils.withGrid(5),
            y: utils.withGrid(7),
          },
        },
        walls: {
          [utils.asGridCoord(2, 4)]: true,
          [utils.asGridCoord(3, 4)]: true,
          [utils.asGridCoord(4, 4)]: true,
          [utils.asGridCoord(5, 4)]: true,
          [utils.asGridCoord(6, 4)]: true,
          [utils.asGridCoord(7, 4)]: true,
          [utils.asGridCoord(8, 4)]: true,
          [utils.asGridCoord(1, 5)]: true,
          [utils.asGridCoord(9, 5)]: true,
          [utils.asGridCoord(9, 6)]: true,
          [utils.asGridCoord(1, 6)]: true,
          [utils.asGridCoord(9, 7)]: true,
          [utils.asGridCoord(1, 7)]: true,
          [utils.asGridCoord(9, 8)]: true,
          [utils.asGridCoord(2, 8)]: true,
          [utils.asGridCoord(3, 8)]: true,
          [utils.asGridCoord(4, 8)]: true,
          [utils.asGridCoord(6, 8)]: true,
          [utils.asGridCoord(7, 8)]: true,
          [utils.asGridCoord(8, 8)]: true,
        },
        cutsceneSpaces: {
          /* SmallShop - NPC interactions */
          /* SmallShop - NPC interactions end */
          /* SmallShop - Room map changing */
          [utils.asGridCoord(5, 8)]: [
            {
              events: [
                {
                  type: "changeMap",
                  map: "OutsideRight",
                  x: utils.withGrid(7),
                  y: utils.withGrid(23),
                  direction: "down",
                },
              ],
            },
          ],
          /* SmallShop - Room map changing end */
        },
      },
      LocalShop: {
        id: "LocalShop",
        lowerSrc: "./assets/maps/newmaps/shop2_lower.png",
        upperSrc: "./assets/maps/newmaps/shop2_upper.png",
        configObjects: {
          hero: {
            type: "Person",
            isPlayerControlled: true,
            src: "./assets/characters/people/hero.png",
            x: utils.withGrid(3),
            y: utils.withGrid(9),
          },
        },
        walls: {
          [utils.asGridCoord(2, 5)]: true,
          [utils.asGridCoord(3, 5)]: true,
          [utils.asGridCoord(4, 5)]: true,
          [utils.asGridCoord(5, 5)]: true,
          [utils.asGridCoord(6, 5)]: true,
          [utils.asGridCoord(7, 5)]: true,
          [utils.asGridCoord(8, 5)]: true,
          [utils.asGridCoord(9, 5)]: true,
          [utils.asGridCoord(10, 5)]: true,
          [utils.asGridCoord(11, 5)]: true,
          [utils.asGridCoord(12, 5)]: true,
          [utils.asGridCoord(13, 5)]: true,
          [utils.asGridCoord(14, 6)]: true,
          [utils.asGridCoord(14, 7)]: true,
          [utils.asGridCoord(13, 8)]: true,
          [utils.asGridCoord(13, 10)]: true,
          [utils.asGridCoord(1, 6)]: true,
          [utils.asGridCoord(1, 7)]: true,
          [utils.asGridCoord(1, 8)]: true,
          [utils.asGridCoord(1, 9)]: true,
          [utils.asGridCoord(1, 10)]: true,
          [utils.asGridCoord(13, 9)]: true,
          [utils.asGridCoord(2, 11)]: true,
          [utils.asGridCoord(3, 11)]: true,
          [utils.asGridCoord(6, 11)]: true,
          [utils.asGridCoord(7, 11)]: true,
          [utils.asGridCoord(8, 11)]: true,
          [utils.asGridCoord(9, 11)]: true,
          [utils.asGridCoord(10, 11)]: true,
          [utils.asGridCoord(11, 11)]: true,
          [utils.asGridCoord(12, 11)]: true,
        },
        cutsceneSpaces: {
          [utils.asGridCoord(4, 11)]: [
            {
              events: [
                {
                  type: "changeMap",
                  map: "OutsideLeft",
                  x: utils.withGrid(20),
                  y: utils.withGrid(3),
                  direction: "down",
                },
              ],
            },
          ],
          [utils.asGridCoord(5, 11)]: [
            {
              events: [
                {
                  type: "changeMap",
                  map: "OutsideLeft",
                  x: utils.withGrid(20),
                  y: utils.withGrid(3),
                  direction: "down",
                },
              ],
            },
          ],
        },
      },
    };
  }
}
