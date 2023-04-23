window.AnimalTypes = {
  stone: "stone", // Strong against fly, weak against water
  fly: "fly", // strong against shadow, weak against stone
  fire: "fire", // Strong against nature, weak against water
  water: "water", // strong against fire, weak against shadow
  shadow: "shadow", // strong against stone, weak against nature
  nature: "nature", // strong against water, weak against fire
};

window.Animals = {
  // Stone
  Rocky: {
    name: "Rocky",
    description: "Rocky the Stone Cow: Heavy and durable cow made of rock.",
    type: AnimalTypes.stone,
    src: "./assets/characters/animals/static/white_chicken.png",
    icon: "./assets/icons/stone.png",
    actions: ["boulderRoll", "harden", "regeneration"],
  },

  // Fly
  Wingcluck: {
    name: "Wingcluck",
    description: "Wingcluck the Fly Chicken: Chicken with feathered wings for flight.",
    type: AnimalTypes.fly,
    src: "./assets/characters/animals/static/white_chicken.png",
    icon: "./assets/icons/fly.png",
    actions: ["wingSlap"],
  },

  // Fire
  Pyrogoat: {
    name: "Pyrogoat",
    description: "Pyrogoat the Fire Goat: Goat with the ability to produce and control flames.",
    type: AnimalTypes.fire,
    src: "./assets/characters/animals/static/white_chicken.png",
    icon: "./assets/icons/fire.png",
    actions: ["flameBurst"],
  },

  // Water
  Waterhog: {
    name: "Waterhog",
    description: "Waterhog the Water Pig: Pig with the ability to hold its breath and swim.",
    type: AnimalTypes.water,
    src: "./assets/characters/animals/static/white_chicken.png",
    icon: "./assets/icons/fungi.png",
    actions: ["bubbleBeam", "blizzard"],
  },

  // Shadow
  Darksteed: {
    name: "Darksteed",
    description: "Darksteed the Shadow Horse: Horse with the ability to create and control shadows.",
    type: AnimalTypes.shadow,
    src: "./assets/characters/animals/static/white_chicken.png",
    icon: "./assets/icons/veggie.png",
    actions: ["shadowBolt"],
  },

  // Nature
  Grassmoo: {
    name: "Grassmoo",
    animal: "cow",
    description: "A salty warrior who fears nothing",
    type: AnimalTypes.nature,
    src: "./assets/characters/animals/static/white_chicken.png",
    icon: "./assets/icons/spicy.png",
    actions: ["blizzard", "revitalize", "regeneration", "harden"],
  },
};
