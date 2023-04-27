window.Actions = {
  // Damaging attacks
  boulderRoll: {
    name: "Boulder Roll",
    description: "Rolls into a ball and charges at the opponent, dealing heavy damage.",
    type: "stone",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!" },
      { type: "animation", animation: "spin" },
      { type: "stateChange", damage: 40, damageType: "stone" },
      { type: "textMessage", text: "It's {EFFECTIVENESS} effective." },
    ],
  },
  scratch: {
    name: "Scratch",
    description: "Pounce at the enemy and scratch.",
    type: "shadow",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!" },
      { type: "animation", animation: "spin" },
      { type: "stateChange", damage: 45, damageType: "shadow" },
      { type: "textMessage", text: "It's {EFFECTIVENESS} effective." },
    ],
  },
  wingSlap: {
    name: "Wing Slap",
    description: "Slaps the opponent with its wings, dealing moderate damage.",
    type: "fly",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!" },
      { type: "animation", animation: "spin" },
      { type: "stateChange", damage: 40, damageType: "fly" },
      { type: "textMessage", text: "It's {EFFECTIVENESS} effective." },
    ],
  },
  flameBurst: {
    name: "Flame Burst",
    description: "Creates a burst of flames that damages the opponent and has a chance to cause a burn.",
    type: "fire",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!" },
      { type: "animation", animation: "glob", color: "red" },
      { type: "stateChange", damage: 40, damageType: "fire" },
      { type: "textMessage", text: "It's {EFFECTIVENESS} effective." },
    ],
  },
  bubbleBeam: {
    name: "Bubble Beam",
    description: "Fires a beam of bubbles, dealing moderate damage and possibly lowering their speed.",
    type: "water",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!" },
      { type: "animation", animation: "glob", color: "blue" },
      { type: "stateChange", damage: 40, damageType: "water" },
      { type: "textMessage", text: "It's {EFFECTIVENESS} effective." },
    ],
  },
  shadowBolt: {
    name: "Shadow Bolt",
    description: "A bolt of dark energy, dealing heavy damage and possibly causing them to flinch.",
    type: "shadow",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!" },
      { type: "animation", animation: "glob", color: "purple" },
      { type: "stateChange", damage: 40, damageType: "shadow" },
      { type: "textMessage", text: "It's {EFFECTIVENESS} effective." },
    ],
  },
  blizzard: {
    name: "Blizzard",
    description: "A fierce snowstorm dealing moderate damage and lowering the opponents accuracy.",
    type: "water",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!" },
      { type: "animation", animation: "glob", color: "blue" },
      { type: "stateChange", damage: 40, damageType: "water" },
      { type: "textMessage", text: "It's {EFFECTIVENESS} effective." },
    ],
  },

  // Friendly
  harden: {
    name: "Harden",
    targetType: "friendly",
    description: " The animal hardens its body, increasing its defense.",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!" },
      { type: "stateChange", status: { type: "harden", expiresIn: 3 } },
      { type: "textMessage", text: "{CASTER} defense increases!" },
    ],
  },
  revitalize: {
    name: "Revitalize",
    targetType: "friendly",
    description: "The animal imbues itself with revitalizing energy, instantly restoring a large amount of health.",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION}!" },
      { type: "stateChange", recover: 40 },
      { type: "textMessage", text: "{CASTER} recovers HP!" },
    ],
  },
  regeneration: {
    name: "Regeneration",
    targetType: "friendly",
    description: "The animal gradually restores its own health over time.",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION} on itself!" },
      { type: "stateChange", status: { type: "regen", expiresIn: 3 } },
      { type: "textMessage", text: "{CASTER} will regenerate over time!" },
    ],
  },

  // Items
  item_hayBale: {
    name: "Hay Bale",
    description: "Restores a large amount of health to the farm animal.",
    targetType: "friendly",
    success: [
      { type: "textMessage", text: "{CASTER} eats a {ACTION}!" },
      { type: "stateChange", recover: 70 },
      { type: "textMessage", text: "{CASTER} recovers HP!" },
    ],
  },
  item_flySpray: {
    name: "Fly Spray",
    description: "Remove all current effects on your farm animal.",
    targetType: "friendly",
    success: [
      { type: "textMessage", text: "{CASTER} uses some {ACTION}." },
      { type: "stateChange", status: null },
      { type: "textMessage", text: "{CASTER} removed all effects!" },
    ],
  },
  item_dustBath: {
    name: "Dust Bath",
    description: "Cover the enemy in dust, causing them to be clumsy.",
    success: [
      { type: "textMessage", text: "{CASTER} uses {ACTION} on {TARGET}." },
      { type: "stateChange", status: { type: "clumsy", expiresIn: 3 } },
      { type: "textMessage", text: "{TARGET} is stumbling around." },
    ],
  },
};
