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
    src: "./assets/characters/animals/static/cow2.png",
    icon: "./assets/icons/stone.png",
    actions: ["boulderRoll", "regeneration"],
    attack: 20,
    defense: 20,
  },

  RockClaw: {
    name: "RockClaw",
    description: "RockClaw is a bear made of stone. Its sharp claws are as hard as rock and used in attacks.",
    type: AnimalTypes.stone,
    src: "./assets/characters/animals/static/bear.png",
    icon: "./assets/icons/stone.png",
    actions: ["boulderRoll", "blizzard", "regeneration"],
    attack: 20,
    defense: 20,
  },

  // Fly
  Wingcluck: {
    name: "Wingcluck",
    description: "Wingcluck the Fly Chicken: Chicken with feathered wings for flight.",
    type: AnimalTypes.fly,
    src: "./assets/characters/animals/static/white_chicken.png",
    icon: "./assets/icons/fly.png",
    actions: ["wingSlap"],
    attack: 24,
    defense: 16,
  },
  Aeroonyx: {
    name: "Aeroonyx",
    description: "Aeroonyx is a fly-type pigeon with dark, iridescent feathers.",
    type: AnimalTypes.fly,
    src: "./assets/characters/animals/static/pigeon.png",
    icon: "./assets/icons/fly.png",
    actions: ["wingSlap"],
    attack: 24,
    defense: 16,
  },

  // Fire
  Pyrogoat: {
    name: "Pyrogoat",
    description: "Pyrogoat the Fire Goat: Goat with the ability to produce and control flames.",
    type: AnimalTypes.fire,
    src: "./assets/characters/animals/static/goat2.png",
    icon: "./assets/icons/fire.png",
    actions: ["flameBurst"],
    attack: 24,
    defense: 16,
  },
  Sparksqueak: {
    name: "Sparksqueak",
    description: "Sparksqueak is a fire-type mouse with a bright, fiery coat.",
    type: AnimalTypes.fire,
    src: "./assets/characters/animals/static/mouse.png",
    icon: "./assets/icons/fire.png",
    actions: ["flameBurst", "scratch"],
    attack: 26,
    defense: 14,
  },

  // Water
  Waterhog: {
    name: "Waterhog",
    description: "Waterhog the Water Pig: Pig with the ability to hold its breath and swim.",
    type: AnimalTypes.water,
    src: "./assets/characters/animals/static/pig.png",
    icon: "./assets/icons/water.png",
    actions: ["bubbleBeam", "blizzard"],
    attack: 16,
    defense: 24,
  },
  Aquaminotaur: {
    name: "Aquaminotaur",
    description:
      "Aquaminotaur is a water-type minotaur. It has sleek, shimmering scales and is adapted to life in water.",
    type: AnimalTypes.water,
    src: "./assets/characters/animals/static/minotaur.png",
    icon: "./assets/icons/water.png",
    actions: ["bubbleBeam", "blizzard"],
    attack: 16,
    defense: 24,
  },

  // Shadow
  Darksteed: {
    name: "Darksteed",
    description: "Darksteed the Shadow Horse: Horse with the ability to create and control shadows.",
    type: AnimalTypes.shadow,
    src: "./assets/characters/animals/static/white_chicken.png",
    icon: "./assets/icons/veggie.png",
    actions: ["shadowBolt"],
    attack: 22,
    defense: 18,
  },
  Shadowfang: {
    name: "Shadowfang",
    description: "Its eyes burn red and its fangs are razor-sharp, capable of tearing through anything.",
    type: AnimalTypes.shadow,
    src: "./assets/characters/animals/static/wolf.png",
    icon: "./assets/icons/veggie.png",
    actions: ["shadowBolt", "scratch"],
    attack: 22,
    defense: 18,
  },

  // Nature
  Grassmoo: {
    name: "Grassmoo",
    description: "A salty warrior who fears nothing",
    type: AnimalTypes.nature,
    src: "./assets/characters/animals/static/cow.png",
    icon: "./assets/icons/nature.png",
    actions: ["blizzard", "revitalize", "regeneration", "scratch"],
    attack: 18,
    defense: 22,
  },
  Grasserpent: {
    name: "Grasserpent",
    description:
      "Grasserpent is a grass-type snake with a sleek and sinuous body. Its skin is a vibrant shade of green and is covered in grassy textures.",
    type: AnimalTypes.nature,
    src: "./assets/characters/animals/static/snake.png",
    icon: "./assets/icons/nature.png",
    actions: ["blizzard", "revitalize", "regeneration", "shadowBolt"],
    attack: 18,
    defense: 22,
  },
};
