// GUN DEFINITIONS
const combineStats = function(arr) {
  try {
    // Build a blank array of the appropiate length
    let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    arr.forEach(function(component) {
      for (let i = 0; i < data.length; i++) {
        data[i] = data[i] * component[i];
      }
    });
  
    return {
      reload: data[0],
      recoil: data[1],
      shudder: data[2],
      size: data[3],
      health: data[4],
      damage: data[5],
      pen: data[6],
      speed: data[7],
      maxSpeed: data[8],
      range: data[9],
      density: data[10],
      spray: data[11],
      resist: data[12],
    };
  } catch (err) {
    console.log(err);
    console.log(JSON.stringify(arr));
  }
};
const skillSet = (() => {
  let config = require("../config.json");
  let skcnv = {
    rld: 0,
    pen: 1,
    str: 2,
    dam: 3,
    spd: 4,

    shi: 5,
    atk: 6,
    hlt: 7,
    rgn: 8,
    mob: 9,
  };
  return (args) => {
    let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let s in args) {
      if (!args.hasOwnProperty(s)) continue;
      skills[skcnv[s]] = Math.round(config.MAX_SKILL * args[s]);
    }
    return skills;
  };
})();

const g = {
  // Gun info here
  trap: [36, 1, 0.25, 0.6, 1, 0.75, 1, 5, 1, 1, 1, 15, 3],
  swarm: [18, 0.25, 0.05, 0.4, 0.95, 0.5, 1, 4, 1, 1, 1, 5, 1],
  drone: [50, 0.25, 0.1, 0.6, 1, 1, 1, 2, 1, 1, 1, 0.1, 1],
  factory: [60, 1, 0.1, 0.7, 1, 0.75, 1, 3, 1, 1, 1, 0.1, 1],
  basic: [18, 1.4, 0.1, 1, 1, 0.75, 1, 4.5, 1, 1, 1, 15, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  blank: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  spam: [1.1, 1, 1, 1.05, 1, 1.1, 1, 0.9, 0.7, 1, 1, 1, 1.05],
  minion: [1, 1, 2, 1, 0.4, 0.4, 1.2, 1, 1, 0.75, 1, 2, 1],
  single: [1.05, 1, 1, 1, 1, 1, 1, 1.05, 1, 1, 1, 1, 1],
  sniper: [1.35, 1, 0.25, 1, 1, 0.8, 1.1, 1.5, 1.5, 1, 1.5, 0.2, 1.15],
  rifle: [0.8, 0.8, 1.5, 1, 0.8, 0.8, 0.9, 1, 1, 1, 1, 2, 1],
  assass: [1.65, 1, 0.25, 1, 1.15, 1, 1.1, 1.18, 1.18, 1, 3, 1, 1.3],
  hunter: [1.5, 0.7, 1, 0.95, 1, 0.9, 1, 1.1, 0.8, 1, 1.2, 1, 1.15],
  hunter2: [1, 1, 1, 0.9, 2, 0.5, 1.5, 1, 1, 1, 1.2, 1, 1.1],
  preda: [1.4, 1, 1, 0.8, 1.5, 0.9, 1.2, 0.9, 0.9, 1, 1, 1, 1],
  snake: [0.4, 1, 4, 0.65, 1.5, 0.9, 1.2, 0.2, 0.35, 1, 3, 7, 0.5],
  sidewind: [1.5, 1.05, 1, 1, 1.5, 0.5, 0.94, 0.15, 0.5, 1, 1, 1, 1],
  snakeskin: [0.6, 0.85, 2, 1, 0.5, 0.5, 1, 0.86, 0.2, 0.4, 1, 7, 1],
  mach: [0.5, 0.8, 1.7, 1, 0.7, 0.7, 1, 1, 0.8, 1, 1, 2.5, 1],
  blaster: [1, 1.2, 1.25, 1.1, 1.5, 1, 0.6, 0.8, 0.33, 0.6, 0.5, 1.5, 0.8],
  chain: [1.25, 1.33, 0.8, 1, 0.8, 1, 1.1, 1.25, 1.25, 1.1, 1.25, 0.5, 1.1],
  mini: [1.25, 0.6, 1, 0.8, 0.55, 0.45, 1.25, 1.33, 1, 1, 1.25, 0.5, 1.1],
  stream: [1.1, 0.6, 1, 1, 1, 0.65, 1, 1.24, 1, 1, 1, 1, 1],
  shotgun: [8, 0.4, 1, 1.5, 0.86, 0.35, 0.76, 1.78, 0.6, 1.2, 1.2, 1.2, 1],
  flank: [1, 1.2, 1, 1, 1.02, 0.81, 0.9, 1, 0.85, 1, 1.2, 1, 1],
  hurricane: [1, 1, 1, 1, 0.4, 0.5, 1.1, 1.5, 1.15, 1, 1, 1, 1],
  tri: [1, 0.9, 1, 1, 0.9, 1, 1, 0.8, 0.8, 0.6, 1, 1, 1],
  trifront: [1, 0.2, 1, 1, 1, 1, 1, 1.3, 1.1, 1.5, 1, 1, 1],
  thruster: [1, 1.5, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  auto: /*pure*/ [
    1.8, 0.75, 0.5, 0.8, 0.9, 0.6, 1.2, 1.1, 1, 0.8, 1.3, 1, 1.25,
  ],
  five: [1.15, 1, 1, 1, 1, 1, 1, 1.05, 1.05, 1.1, 2, 1, 1],
  autosnipe: [1, 1, 1, 1.4, 2, 1, 1, 1, 1, 1, 1, 1, 1],  thruster: [1, 1.5, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  thrusterstat: [1, 1.5, 2, 1, 0.7, 0.5, 0.7, 1.4, 1, 1.2, 1.3, 0.4, 0.8],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  pound: [2, 1.6, 1, 1, 1, 2, 1, 0.85, 0.8, 1, 1.5, 1, 1.15],
    halfsize: [1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 5, 1, 1],
  destroy: [2.2, 1.8, 0.5, 1, 2, 2, 1.2, 0.65, 0.5, 1, 2, 1, 3],
  anni: [0.85, 1.25, 1, 1, 1, 1.2, 1, 1, 1, 1, 1, 1, 1],
  hive: [1.5, 0.8, 1, 0.83, 0.66, 0.27, 0.93, 0.92, 0.6, 1, 1, 1, 1],
  arty: [1.2, 0.7, 1, 0.9, 1, 1, 1, 1.15, 1.1, 1, 1.5, 1, 1],
  mortar: [1.2, 1, 1, 1, 1.1, 1, 1, 0.8, 0.8, 1, 1, 1, 1],
  spreadmain: [
    0.78125,
    0.25,
    0.5,
    1,
    0.5,
    1,
    1,
    1.5 / 0.78,
    0.9 / 0.78,
    1,
    1,
    1,
    1,
  ],
  spread: [1.5, 1, 0.25, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 0.25, 1],
  skim: [1.33, 0.8, 0.8, 0.9, 1.35, 0.75, 1.665, 0.3, 0.3, 1, 1, 1, 1.1],
  twin: [1, 0.5, 0.9, 1, 0.9, 0.7, 1, 1, 1, 1, 1, 1.2, 1],
  bent: [1.1, 1, 0.8, 1, 0.9, 1, 0.8, 1, 1, 1, 0.8, 0.5, 1],
  bentline: [1.14, 0.8, 0.95, 1, 0.85, 0.54, 0.78, 1.22, 1, 1, 0.8, 0.74, 1],
  triple: [1.2, 0.667, 0.9, 1, 0.75, 0.55, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
  quint: [1.5, 0.667, 0.9, 1, 1, 1, 0.9, 1, 1, 1, 1.1, 0.9, 0.95],
  dual: [2, 1, 0.8, 1, 1.5, 1, 1, 1.3, 1.1, 1, 1, 1, 1.25],
  double: [1, 1, 1, 1, 1, 0.9, 1, 1, 1, 1, 1, 1, 1],
  hewn: [1.25, 1.5, 1, 1, 0.9, 0.85, 1, 1, 0.9, 1, 1, 1, 1],
  puregunner: [
    1, 0.25, 1.5, 1.2, 1.35, 0.25, 1.25, 0.8, 0.65, 1, 1.5, 1.5, 1.2,
  ],
  machgun: [0.66, 0.8, 2, 1, 1, 0.75, 1, 1.2, 0.8, 1, 1, 2.5, 1],
  gunner: [1.25, 0.25, 1.5, 1.1, 1, 0.35, 1.35, 0.9, 0.8, 1, 1.5, 1.5, 1.2],
  power: [1, 1, 0.6, 1.2, 1, 1, 1.25, 2, 1.7, 1, 2, 0.5, 1.5],
  nail: [0.85, 2.5, 1, 0.8, 1, 0.7, 1, 1, 1, 1, 2, 1, 1],
  fast: [1, 1, 1, 1, 1, 1, 1, 1.2, 1, 1, 1, 1, 1],
  turret: [2, 1, 1, 1, 0.8, 0.6, 0.7, 1, 1, 1, 0.1, 1, 1],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  over2: [1.25, 1, 1, 0.85, 1.3, 1.8, 2, 1.8, 0.9, 1, 2, 1, 1],
  battle: [1, 1, 1, 1, 1.25, 1.15, 1, 1, 0.85, 1, 1, 1, 1.1],
  bees: [1.3, 1, 1, 1.4, 1, 1.5, 0.5, 2.35, 1.5, 1, 0.25, 1, 1],
  carrier: [1.75, 1, 1, 1, 1, 0.75, 1, 1.3, 1.2, 1.2, 1, 1, 1],
  hexatrap: [1.3, 1, 1.25, 1, 1, 1, 1, 0.8, 1, 0.5, 1, 1, 1],
  block: [1.1, 2, 0.1, 1.5, 2, 1, 1.25, 1.5, 2.5, 1.25, 1, 1, 1.25],
  construct: [1.3, 1, 1, 0.9, 1, 1, 1, 1, 1.1, 1, 1, 1, 1],
  boomerang: [0.8, 1, 1, 1, 0.5, 0.5, 1, 0.75, 0.75, 1.333, 1, 1, 1],
  over: [1.25, 1, 1, 0.85, 0.9, 0.9, 1, 1, 0.9, 1, 2, 1, 1],
  guardian: [100.0, 0.001, 1, 0.15, 0.3, 1.0, 5, 0.7, 0.9, 1, 2, 1, 1],
  meta: [1.333, 1, 1, 1, 1, 0.667, 1, 1, 1, 1, 1, 1, 1],
  weak: [2, 1, 1, 1, 0.6, 0.6, 0.8, 0.5, 0.7, 0.25, 0.3, 1, 1],
  master: [3, 1, 1, 0.7, 0.4, 0.7, 1, 1, 1, 0.1, 0.5, 1, 1],
  sunchip: [5, 1, 1, 1.4, 0.5, 0.4, 0.6, 1, 1, 1, 0.8, 1, 1],
  babyfactory: [1.5, 1, 1, 1, 1, 1, 1, 1, 1.35, 1, 1, 1, 1],
  lowpower: [1, 1, 2, 1, 0.5, 0.5, 0.7, 1, 1, 1, 1, 0.5, 0.7],
  halfrecoil: [1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morerecoil: [1, 1.15, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  muchmorerecoil: [1, 1.35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lotsmorrecoil: [1, 1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  tonsmorrecoil: [1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  doublereload: [0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morereload: [0.75, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  snailreload: [3.45, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  heal: [16, 1.4, 0.1, 1, 1.5, -0.3, 1, 4.5, 1, 1, 1, 15, 1],
  doctor: [3.9, 3, 1, 1, 1.5, -0.5, 1, 0.6, 1, 1, 1, 1, 1],
  halfreload: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lessreload: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  lowreload: [1.42, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  threequartersrof: [1.22, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  morespeed: [1, 1, 1, 1, 1, 1, 1, 1.3, 1.3, 1, 1, 1, 1],
  bitlessspeed: [1, 1, 1, 1, 1, 1, 1, 0.93, 0.93, 1, 1, 1, 1],
  slow: [1, 1, 1, 1, 1, 1, 1, 0.7, 0.7, 1, 1, 1, 1],
  halfspeed: [1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1],
  notdense: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.1, 1, 1],
  halfrange: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1],
  fake: [0.5, 0, 1, 0.4, 0.1, 0.6, 1, 0.6, 1, 0.03, 1, 1, 1],
  lance: [0.001, 0, 1, 0.01, 0.4, 0.9, 1, 0.81, 1, 0.03, 1, 1, 1],
  mothership: [0.75, 1, 1, 1, 1.2, 1.2, 1.2, 0.75, 0.6, 15, 1, 1, 1.25],
  /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
  op: [0.5, 1.3, 1, 1, 4, 4, 4, 3, 2, 1, 5, 2, 1],
  protectorswarm: [5, 0.000001, 1, 1, 100, 1, 1, 1, 1, 0.5, 5, 1, 10],
};

const dfltskl = 9;

// NAMES
const statnames = {
  smasher: 1,
  drone: 2,
  necro: 3,
  swarm: 4,
  trap: 5,
  generic: 6,
};
const gunCalcNames = {
  default: 0,
  bullet: 1,
  drone: 2,
  swarm: 3,
  fixedReload: 4,
  thruster: 5,
  sustained: 6,
  necro: 7,
  trap: 8,
};

// ENTITY DEFINITIONS
exports.genericEntity = {
  NAME: "",
  LABEL: "Unknown Entity",
  TYPE: "unknown",
  DAMAGE_CLASS: 0, // 0: def, 1: food, 2: tanks, 3: obstacles
  DANGER: 0,
  VALUE: 0,
  SHAPE: 0,
  COLOR: 16,
  INDEPENDENT: false,
  CONTROLLERS: ["doNothing"],
  HAS_NO_MASTER: false,
  MOTION_TYPE: "glide", // motor, swarm, chase
  FACING_TYPE: "toTarget", // turnWithSpeed, withMotion, looseWithMotion, toTarget, looseToTarget
  DRAW_HEALTH: false,
  DRAW_SELF: true,
  DAMAGE_EFFECTS: true,
  RATEFFECTS: true,
  MOTION_EFFECTS: true,
  INTANGIBLE: false,
  ACCEPTS_SCORE: true,
  GIVE_KILL_MESSAGE: false,
  CAN_GO_OUTSIDE_ROOM: false,
  HITS_OWN_TYPE: "normal", // hard, repel, never, hardWithBuffer
  DIE_AT_LOW_SPEED: false,
  DIE_AT_RANGE: false,
  CLEAR_ON_MASTER_UPGRADE: false,
  PERSISTS_AFTER_DEATH: false,
  VARIES_IN_SIZE: false,
  HEALTH_WITH_LEVEL: true,
  CAN_BE_ON_LEADERBOARD: true,
  HAS_NO_RECOIL: false,
  AUTO_UPGRADE: "none",
  BUFF_VS_FOOD: false,
  OBSTACLE: false,
  CRAVES_ATTENTION: false,
  NECRO: false,
  UPGRADES_TIER_1: [],
  UPGRADES_TIER_2: [],
  UPGRADES_TIER_3: [],
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: 0,
  SKILL_CAP: [
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
    dfltskl,
  ],
  GUNS: [],
  MAX_CHILDREN: 0,
  BODY: {
    ACCELERATION: 1,
    SPEED: 0,
    HEALTH: 1,
    RESIST: 1,
    SHIELD: 0,
    REGEN: 0,
    DAMAGE: 1,
    PENETRATION: 1,

    RANGE: 0,
    FOV: 1,
    DENSITY: 1,
    STEALTH: 1,
    PUSHABILITY: 1,
    HETERO: 2,
  },
  FOOD: {
    LEVEL: -1,
  },
};

// FOOD
exports.food = {
  TYPE: "food",
  DAMAGE_CLASS: 1,
  CONTROLLERS: ["moveInCircles"],
  HITS_OWN_TYPE: "repel",
  MOTION_TYPE: "drift",
  FACING_TYPE: "turnWithSpeed",
  VARIES_IN_SIZE: true,
  BODY: {
    STEALTH: 30,
    PUSHABILITY: 1,
  },
  DAMAGE_EFFECTS: false,
  RATEFFECTS: false,
  HEALTH_WITH_LEVEL: false,
};

const basePolygonDamage = 1;
const basePolygonHealth = 2;
exports.megapoly = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 12,
  },
  LABEL: "Circle",
  VALUE: 7500000,
  SHAPE: 0,
  SIZE: 90,
  COLOR: 7,
  BODY: {
    DAMAGE: 5 * basePolygonDamage,
    DENSITY: 100,
    HEALTH: 800 * basePolygonHealth,
    RESIST: Math.pow(1.25, 3),
    SHIELD: 400 * basePolygonHealth,
    REGEN: 0.7,
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.icosagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 11,
  },
  LABEL: "Icosagon",
  VALUE: 1000000,
  SHAPE: -20,
  SIZE: 83,
  COLOR: 0,
  BODY: {
    DAMAGE: 5 * basePolygonDamage,
    DENSITY: 100,
    HEALTH: 650 * basePolygonHealth,
    RESIST: Math.pow(1.25, 3),
    SHIELD: 270 * basePolygonHealth,
    REGEN: 0.7,
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.decagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 10,
  },
  LABEL: "Decagon",
  VALUE: 628800,
  SHAPE: -10,
  SIZE: 74,
  COLOR: 31,
  BODY: {
    DAMAGE: 5 * basePolygonDamage,
    DENSITY: 100,
    HEALTH: 600 * basePolygonHealth,
    RESIST: Math.pow(1.25, 3),
    SHIELD: 230 * basePolygonHealth,
    REGEN: 0.7,
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.nonagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 9,
  },
  LABEL: "Nonagon",
  VALUE: 475000,
  SHAPE: -9,
  SIZE: 69,
  COLOR: 10,
  BODY: {
    DAMAGE: 5 * basePolygonDamage,
    DENSITY: 100,
    HEALTH: 555 * basePolygonHealth,
    RESIST: Math.pow(1.25, 3),
    SHIELD: 150 * basePolygonHealth,
    REGEN: 0.7,
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.octagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 8,
  },
  LABEL: "Octagon",
  VALUE: 230000,
  SHAPE: -8,
  SIZE: 64,
  COLOR: 16,
  BODY: {
    DAMAGE: 5 * basePolygonDamage,
    DENSITY: 100,
    HEALTH: 500 * basePolygonHealth,
    RESIST: Math.pow(1.25, 3),
    SHIELD: 150 * basePolygonHealth,
    REGEN: 0.9,
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.heptagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 7,
  },
  LABEL: "Heptagon",
  VALUE: 120000,
  SHAPE: -7,
  SIZE: 58,
  COLOR: 2,
  BODY: {
    DAMAGE: 3 * basePolygonDamage,
    DENSITY: 100,
    HEALTH: 450 * basePolygonHealth,
    RESIST: Math.pow(1.25, 3),
    SHIELD: 100 * basePolygonHealth,
    REGEN: 0.6,
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.hexagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 6,
  },
  LABEL: "Hexagon",
  VALUE: 50000,
  SHAPE: -6,
  SIZE: 50,
  COLOR: 12,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 100,
    HEALTH: 375 * basePolygonHealth,
    RESIST: Math.pow(1.25, 3),
    SHIELD: 100 * basePolygonHealth,
    REGEN: 0.6,
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.hugePentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 5,
  },
  LABEL: "Alpha Pentagon",
  VALUE: 25000,
  SHAPE: -5,
  SIZE: 44,
  COLOR: 14,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 80,
    HEALTH: 300 * basePolygonHealth,
    RESIST: Math.pow(1.25, 3),
    SHIELD: 100 * basePolygonHealth,
    REGEN: 0.6,
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.bigPentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 4,
  },
  LABEL: "Beta Pentagon",
  VALUE: 2500,
  SHAPE: 5,
  SIZE: 30,
  COLOR: 14,
  BODY: {
    DAMAGE: 2 * basePolygonDamage,
    DENSITY: 30,
    HEALTH: 50 * basePolygonHealth,
    RESIST: Math.pow(1.25, 2),
    SHIELD: 20 * basePolygonHealth,
    REGEN: 0.2,
  },
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.pentagon = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 3,
  },
  LABEL: "Pentagon",
  VALUE: 400,
  SHAPE: 5,
  SIZE: 16,
  COLOR: 14,
  BODY: {
    DAMAGE: 1.5 * basePolygonDamage,
    DENSITY: 8,
    HEALTH: 10 * basePolygonHealth,
    RESIST: 1.25,
    PENETRATION: 1.1,
  },
  DRAW_HEALTH: true,
};
exports.triangle = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 2,
  },
  LABEL: "Triangle",
  VALUE: 120,
  SHAPE: 3,
  SIZE: 9,
  COLOR: 2,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 6,
    HEALTH: 3 * basePolygonHealth,
    RESIST: 1.15,
    PENETRATION: 1.5,
  },
  DRAW_HEALTH: true,
};
exports.square = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 1,
  },
  LABEL: "Square",
  VALUE: 30,
  SHAPE: 4,
  SIZE: 10,
  COLOR: 13,
  BODY: {
    DAMAGE: basePolygonDamage,
    DENSITY: 4,
    HEALTH: basePolygonHealth,
    PENETRATION: 2,
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false,
};
exports.egg = {
  PARENT: [exports.food],
  FOOD: {
    LEVEL: 0,
  },
  LABEL: "Egg",
  VALUE: 10,
  SHAPE: 0,
  SIZE: 5,
  COLOR: 6,
  INTANGIBLE: true,
  BODY: {
    DAMAGE: 0,
    DENSITY: 2,
    HEALTH: 0.0011,
    PUSHABILITY: 0,
  },
  DRAW_HEALTH: false,
};

exports.greenpentagon = {
  PARENT: [exports.food],
  LABEL: "Pentagon",
  VALUE: 30000000,
  SHAPE: 5,
  SIZE: 16,
  COLOR: 1,
  BODY: {
    DAMAGE: 3,
    DENSITY: 8,
    HEALTH: 200,
    RESIST: 1.25,
    PENETRATION: 1.1,
  },
  DRAW_HEALTH: true,
};
exports.greentriangle = {
  PARENT: [exports.food],
  LABEL: "Triangle",
  VALUE: 7000,
  SHAPE: 3,
  SIZE: 9,
  COLOR: 1,
  BODY: {
    DAMAGE: 1,
    DENSITY: 6,
    HEALTH: 60,
    RESIST: 1.15,
    PENETRATION: 1.5,
  },
  DRAW_HEALTH: true,
};
exports.greensquare = {
  PARENT: [exports.food],
  LABEL: "Square",
  VALUE: 2000,
  SHAPE: 4,
  SIZE: 10,
  COLOR: 1,
  BODY: {
    DAMAGE: 0.5,
    DENSITY: 4,
    HEALTH: 20,
    PENETRATION: 2,
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false,
};

exports.gem = {
  PARENT: [exports.food],
  LABEL: "Gem",
  FOOD: {
    LEVEL: 100,
  },
  VALUE: 2000000,
  SHAPE: 6,
  SIZE: 5,
  COLOR: 0,
  BODY: {
    DAMAGE: basePolygonDamage / 4,
    DENSITY: 4,
    HEALTH: 10,
    PENETRATION: 2,
    RESIST: 2,
    PUSHABILITY: 0.25,
  },
  DRAW_HEALTH: true,
  INTANGIBLE: false,
  GIVE_KILL_MESSAGE: true,
};
exports.obstacle = {
  TYPE: "wall",
  DAMAGE_CLASS: 1,
  LABEL: "Rock",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: -9,
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 1000,
    DAMAGE: 1,
    RESIST: 8390,
    STEALTH: 0,
  },
  VALUE: 0,
  SIZE: 60,
  COLOR: 16,
  VARIES_IN_SIZE: true,
  GIVE_KILL_MESSAGE: true,
  ACCEPTS_SCORE: false,
};
exports.wall = {
  PARENT: [exports.obstacle],
  LABEL: "Wall",
  FACING_TYPE: "",
  SIZE: 200,
  INTANGIBLE: false,
  VARIES_IN_SIZE: false,
  SHAPE: 4
};
exports.babyObstacle = {
  PARENT: [exports.obstacle],
  SIZE: 25,
  SHAPE: -7,
  LABEL: "Gravel",
};

// WEAPONS
const wepHealthFactor = 0.5;
const wepDamageFactor = 1.5;
exports.bullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: 4 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
};
exports.casing = {
  PARENT: [exports.bullet],
  LABEL: "Shell",
  TYPE: "swarm",
};
exports.growbullet = {
  PARENT: [exports.bullet],
  MOTION_TYPE: "grow",
};
exports.whirlbullet = {
  PARENT: [exports.bullet],
  CONTROLLERS: ["moveInCircles"],
  HITS_OWN_TYPE: "never",
  MOTION_TYPE: "drift",
  FACING_TYPE: "turnWithSpeed",
};
exports.flare = {
  PARENT: [exports.bullet],
  LABEL: "Flare",
  SHAPE: 4,
  MOTION_TYPE: "grow",
};
exports.megagrowbullet = {
  PARENT: [exports.bullet],
  MOTION_TYPE: "biggrow",
};
exports.fatgrowbullet = {
  PARENT: [exports.bullet],
  MOTION_TYPE: "infgrow",
};
exports.boomerangbullet = {
  LABEL: "Boomerang",
  PARENT: [exports.bullet],
  CONTROLLERS: ["boomerang"],
  MOTION_TYPE: "motor",
};
exports.healbullet = {
  LABEL: "Bullet",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,
  BODY: {
    PENETRATION: 1,
    SPEED: 3.75,
    RANGE: 90,
    DENSITY: 1.25,
    HEALTH: 0.33 * wepHealthFactor,
    DAMAGE: -20 * wepDamageFactor,
    PUSHABILITY: 0.3,
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
};

exports.swarm = {
  LABEL: "Swarm Drone",
  TYPE: "swarm",
  ACCEPTS_SCORE: false,
  SHAPE: 3,
  MOTION_TYPE: "swarm",
  FACING_TYPE: "smoothWithMotion",
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  CRAVES_ATTENTION: true,
  BODY: {
    ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 4.5,
    RESIST: 1.6,
    RANGE: 225,
    DENSITY: 12,
    PUSHABILITY: 0.5,
    FOV: 1.5,
  },
  DIE_AT_RANGE: true,
  BUFF_VS_FOOD: true,
};
exports.bee = {
  PARENT: [exports.swarm],
  PERSISTS_AFTER_DEATH: true,
  SHAPE: 4,
  LABEL: "Drone",
  HITS_OWN_TYPE: "hardWithBuffer",
};
exports.autoswarm = {
  PARENT: [exports.swarm],
  AI: { FARMER: true },
  INDEPENDENT: true,
};

exports.trap = {
  LABEL: "Thrown Trap",
  TYPE: "trap",
  ACCEPTS_SCORE: false,
  SHAPE: -3,
  MOTION_TYPE: "glide", // def
  FACING_TYPE: "turnWithSpeed",
  HITS_OWN_TYPE: "push",
  DIE_AT_RANGE: true,
  BODY: {
    HEALTH: 1 * wepHealthFactor,
    DAMAGE: 0.5 * wepDamageFactor,
    RANGE: 400,
    DENSITY: 2,
    RESIST: 2.5,
    SPEED: 0,
  },
};
exports.block = {
  LABEL: "Set Trap",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget"],
  BODY: {
    SPEED: 1,
    DENSITY: 5,
  },
};
exports.growtrap = {
  LABEL: "Growing Trap",
  PARENT: [exports.trap],
  SHAPE: -3,
  MOTION_TYPE: "lowgrow",
  CONTROLLERS: ["goToMasterTarget"],
  BODY: {
    SPEED: 1,
    DENSITY: 3,
  },
};
exports.boomerang = {
  LABEL: "Boomerang",
  PARENT: [exports.trap],
  CONTROLLERS: ["boomerang"],
  MOTION_TYPE: "motor",
  HITS_OWN_TYPE: "never",
  SHAPE: -5,
  BODY: {
    SPEED: 0.9,
    RANGE: 120,
  },
};
exports.bigboomerang = {
  LABEL: "Boomerang",
  PARENT: [exports.trap],
  CONTROLLERS: ["boomerang"],
  MOTION_TYPE: "motor",
  HITS_OWN_TYPE: "never",
  SHAPE: -6,
  BODY: {
    SPEED: 0.75,
    RANGE: 120,
    DAMAGE: 1.35,
  },
};
exports.fogtrap = {
  LABEL: "Trap",
  TYPE: "trap",
  ACCEPTS_SCORE: false,
  SHAPE: -3,
  MOTION_TYPE: "glide", // def
  FACING_TYPE: "turnWithSpeed",
  HITS_OWN_TYPE: "push",
  DIE_AT_RANGE: true,
  BODY: {
    HEALTH: 1 * wepHealthFactor,
    DAMAGE: 2 * wepDamageFactor,
    RANGE: 450,
    DENSITY: 2.5,
    RESIST: 2.5,
    SPEED: 0,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.lowpower,
          g.lowpower,
          g.fast,
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [14, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.lowpower,
          g.lowpower,
          g.fast,
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [14, 10, 1, 0, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.lowpower,
          g.lowpower,
          g.fast,
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.fogblock = {
  LABEL: "Block",
  TYPE: "trap",
  ACCEPTS_SCORE: false,
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget"],
  FACING_TYPE: "turnWithSpeed",
  HITS_OWN_TYPE: "push",
  DIE_AT_RANGE: true,
  BODY: {
    HEALTH: 0.9 * wepHealthFactor,
    DAMAGE: 1.8 * wepDamageFactor,
    RANGE: 400,
    DENSITY: 5,
    RESIST: 2.2,
    SPEED: 1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.lowpower,
          g.lowpower,
          g.fast,
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [14, 10, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.lowpower,
          g.lowpower,
          g.fast,
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [14, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.lowpower,
          g.lowpower,
          g.fast,
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [14, 10, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.lowpower,
          g.lowpower,
          g.fast,
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
      },
    },
  ],
};

exports.drone = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 3,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.8 * wepHealthFactor,
    DAMAGE: 1.1 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8,
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
};
exports.droneun = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 3,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "mapTargetToGoal",
    "hangOutNearMaster",
    "canRepel",
    "nearestDifferentMaster",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 3.5,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 4.25 * wepDamageFactor,
    SPEED: 2.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8,
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
};
exports.sunchip = {
  PARENT: [exports.drone],
  SHAPE: 4,
  NECRO: true,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5,
    DAMAGE: 0.5 * wepDamageFactor,
  },
  AI: {
    BLIND: true,
    FARMER: true,
  },
  DRAW_HEALTH: false,
};
exports.autosunchip = {
  PARENT: [exports.sunchip],
  AI: {
    BLIND: true,
    FARMER: true,
  },
  INDEPENDENT: true,
};
exports.suncrisp = {
  PARENT: [exports.sunchip],
  SHAPE: 3,
  AI: {
    BLIND: true,
    FARMER: true,
  },
  INDEPENDENT: true,
};
exports.invissunchip = {
  PARENT: [exports.sunchip],
  INVISIBLE: [0.08, 0.03],
};
exports.gunchip = {
  PARENT: [exports.drone],
  SHAPE: -2,
  NECRO: true,
  HITS_OWN_TYPE: "hard",
  BODY: {
    FOV: 0.5,
  },
  AI: {
    BLIND: true,
    FARMER: true,
  },
  DRAW_HEALTH: false,
};

exports.minimissile = {
  PARENT: [exports.bullet],
  LABEL: "Rocket",
  INDEPENDENT: true,
  BODY: {
    RANGE: 75,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.lessreload,
          g.lowpower,
          g.morerecoil,
          g.slow,
          g.slow,
          g.slow,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};
exports.trapmiss = {
  PARENT: [exports.bullet],
  LABEL: "Rocket",
  INDEPENDENT: true,
  BODY: {
    RANGE: 150,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.hexatrap,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.spam,
        ]),
        TYPE: [exports.trap, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true,
      },
    },
  ],
};
exports.missile = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 130, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 230, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};
exports.hypermissile = {
  PARENT: [exports.missile],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, -2, 150, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 210, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, -2, 90, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [14, 6, 1, 0, 2, 270, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
  ],
};
exports.rockmiss = {
  PARENT: [exports.missile],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 8, 1.3, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.morereload,
          g.lowpower,
          g.morerecoil,
          g.morespeed,
          g.mach,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};
exports.snake = {
  PARENT: [exports.bullet],
  LABEL: "Snake",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake,
          g.snakeskin,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
    {
      POSITION: [10, 12, 0.8, 8, 0, 180, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        NEGATIVE_RECOIL: true,
        STAT_CALCULATOR: gunCalcNames.thruster,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.snake,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
      },
    },
  ],
};
exports.hive = {
  PARENT: [exports.bullet],
  LABEL: "Hive",
  BODY: {
    RANGE: 105,
    FOV: 0.65,
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9.5, 0.6, 7, 0, 108, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 252, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 324, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 36, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.hivemiss = {
  PARENT: [exports.bullet],
  LABEL: "Missile",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 0.6, 0, -2, 90, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: [exports.bee, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [14, 6, 0.6, 0, 2, 270, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: [exports.bee, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.skim,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.muchmorerecoil,
          g.muchmorerecoil,
          g.morespeed,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};
exports.smallhive = {
  PARENT: [exports.bullet],
  LABEL: "Mini Hive",
  BODY: {
    RANGE: 75,
    FOV: 0.5,
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 120, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 240, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.megahive = {
  PARENT: [exports.bullet],
  LABEL: "Nest",
  BODY: {
    RANGE: 140,
    FOV: 0.5,
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
        TYPE: exports.bee,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.twist = {
  PARENT: [exports.bullet],
  LABEL: "Twist",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120,
  },
  FACING_TYPE: "fastautospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};
exports.qutwist = {
  PARENT: [exports.bullet],
  LABEL: "Twist",
  INDEPENDENT: true,
  BODY: {
    RANGE: 120,
  },
  FACING_TYPE: "fastautospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 90, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 180, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 270, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.doublereload,
          g.lowpower,
          g.muchmorerecoil,
          g.morespeed,
        ]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }],
        STAT_CALCULATOR: gunCalcNames.thruster,
      },
    },
  ],
};

// TANK CLASSES
const base = {
  ACCEL: 1.6,
  SPEED: 5.25,
  HEALTH: 20,
  DAMAGE: 3,
  RESIST: 1,
  PENETRATION: 1.05,
  SHIELD: 8,
  REGEN: 0.025,
  FOV: 1,
  DENSITY: 0.5,
};
exports.genericTank = {
  LABEL: "Unknown Class",
  TYPE: "tank",
  DAMAGE_CLASS: 2,
  DANGER: 5,
  MOTION_TYPE: "motor",
  FACING_TYPE: "toTarget",
  SIZE: 12,
  MAX_CHILDREN: 0,
  DAMAGE_EFFECTS: false,
  BODY: {
    // def
    ACCELERATION: base.ACCEL,
    SPEED: base.SPEED,
    HEALTH: base.HEALTH,
    DAMAGE: base.DAMAGE,
    PENETRATION: base.PENETRATION,
    SHIELD: base.SHIELD,
    REGEN: base.REGEN,
    FOV: base.FOV,
    DENSITY: base.DENSITY,
    PUSHABILITY: 0.9,
    HETERO: 3,
  },
  GUNS: [],
  TURRETS: [],
  GIVE_KILL_MESSAGE: true,
  DRAW_HEALTH: true,
};
let gun = {};

exports.autoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 0.8,
  },
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.machineAutoTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 11, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.mach,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autoSmasherTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 6, 1, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.fast,
          g.mach,
          g.pound,
          g.morereload,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
    {
      POSITION: [20, 6, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.morerecoil,
          g.turret,
          g.fast,
          g.mach,
          g.pound,
          g.morereload,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
  ],
};
exports.oldAutoSmasherTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  COLOR: 16,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 7, 1, 0, -5.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.lotsmorrecoil,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
    {
      POSITION: [20, 7, 1, 0, 5.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.lotsmorrecoil,
          g.morereload,
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: gunCalcNames.fixedReload,
      },
    },
  ],
};

exports.auto3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.auto5gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.heavy3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.heavy3gun2 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
    SPEED: 0.9,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 18, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.pound,
          g.auto,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.masterGun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 3,
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 16,
  MAX_CHILDREN: 3,
  AI: {
    NO_LEAD: true,
    SKYNET: true,
    FULL_VIEW: true,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8, 14, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.master]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.sniper3gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 5,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.auto,
          g.assass,
          g.autosnipe,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 9, -1.5, 8, 0, 0, 0],
    },
  ],
};
exports.bansheegun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.boomergun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1, 14, 0, 0, 0],
    },
    {
      POSITION: [6, 10, -1.5, 7, 0, 0, 0],
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.block,
          g.boomerang,
          g.lessreload,
        ]),
        TYPE: exports.boomerang,
      },
    },
  ],
};
exports.auto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 4, 1, 0, -3.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 4, 1, 0, 3.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.power,
          g.slow,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.bigauto4gun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 5, 1, 0, -4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 5, 1, 0, 4.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.auto,
          g.gunner,
          g.twin,
          g.twin,
          g.power,
          g.halfreload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.tritrapgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 16, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 16, 1.1, 20, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto]),
        TYPE: exports.block,
      },
    },
  ],
};
exports.smasherBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: 6,
  INDEPENDENT: true,
};
exports.spikeBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: -4,
  INDEPENDENT: true,
};
exports.spikeBody1 = {
  LABEL: "",
  CONTROLLERS: ["fastspin"],
  COLOR: 9,
  SHAPE: 3,
  INDEPENDENT: true,
};
exports.spikeBody2 = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 9,
  SHAPE: 3,
  INDEPENDENT: true,
};
exports.megasmashBody = {
  LABEL: "",
  CONTROLLERS: ["spin"],
  COLOR: 9,
  SHAPE: -6,
  INDEPENDENT: true,
};
exports.dominationBody = {
  LABEL: "",
  CONTROLLERS: ["dontTurn"],
  COLOR: 9,
  SHAPE: 8,
  INDEPENDENT: true,
};
exports.baseSwarmTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Protector",
  COLOR: 16,
  BODY: {
    FOV: 2,
  },
  CONTROLLERS: ["nearestDifferentMaster"],
  AI: {
    NO_LEAD: true,
    LIKES_SHAPES: true,
  },
  INDEPENDENT: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 4.5, 0.6, 7, 2, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [5, 4.5, 0.6, 7, -2, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [5, 4.5, 0.6, 7.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
        TYPE: [
          exports.swarm,
          { INDEPENDENT: true, AI: { LIKES_SHAPES: true } },
        ],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.baseGunTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Protector",
  BODY: {
    FOV: 5,
  },
  ACCEPTS_SCORE: false,
  CONTROLLERS: ["nearestDifferentMaster"],
  INDEPENDENT: true,
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 13, 1, 6, 0, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 13, -1.3, 6, 0, 0, 0],
    },
  ],
};
exports.baseProtector = {
  PARENT: [exports.genericTank],
  LABEL: "Base",
  SIZE: 64,
  DAMAGE_CLASS: 0,
  ACCEPTS_SCORE: false,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 1,
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 500,
    DAMAGE: 10,
    PENETRATION: 0.25,
    FOV: 1,
    PUSHABILITY: 0,
    HETERO: 0,
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody,
    },
    {
      POSITION: [12, 7, 0, 45, 100, 0],
      TYPE: exports.baseSwarmTurret,
    },
    {
      POSITION: [12, 7, 0, 135, 100, 0],
      TYPE: exports.baseSwarmTurret,
    },
    {
      POSITION: [12, 7, 0, 225, 100, 0],
      TYPE: exports.baseSwarmTurret,
    },
    {
      POSITION: [12, 7, 0, 315, 100, 0],
      TYPE: exports.baseSwarmTurret,
    },
  ],
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 45, 0],
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 135, 0],
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 225, 0],
    },
    {
      POSITION: [4.5, 11.5, -1.3, 6, 0, 315, 0],
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 45, 0],
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 135, 0],
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 225, 0],
    },
    {
      POSITION: [4.5, 8.5, -1.5, 7, 0, 315, 0],
    },
  ],
};

exports.minion = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.minion2 = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.lessreload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.lessreload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.minion3 = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [13, 11, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 11, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.minion4 = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.minion5 = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 130, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 230, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing",
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.minion9 = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.minion6 = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: true,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 9, 1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.lowpower,
          g.halfreload,
        ]),
        WAIT_TO_CYCLE: true,
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.minion7 = {
  PARENT: [exports.genericTank],
  LABEL: "Minion",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 5,
    SHIELD: 0,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 1,
    DENSITY: 0.4,
  },
  AI: {
    BLIND: true,
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster",
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
        TYPE: exports.hive,
      },
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0],
    },
  ],
};
exports.pillboxTurret = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  BODY: {
    FOV: 2,
  },
  HAS_NO_RECOIL: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minion,
          g.turret,
          g.power,
          g.auto,
          g.notdense,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.pillboxTurretme = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  BODY: {
    FOV: 2,
  },
  HAS_NO_RECOIL: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 18, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.minion,
          g.turret,
          g.power,
          g.auto,
          g.notdense,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.pillboxTurret2 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 16,
  BODY: {
    FOV: 1.5,
  },
  HAS_NO_RECOIL: true,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.minion,
          g.turret,
          g.power,
          g.auto,
          g.notdense,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.pillbox = {
  LABEL: "Pillbox",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
  INDEPENDENT: true,
  BODY: {
    SPEED: 1,
    DENSITY: 5,
  },
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret,
    },
  ],
};
exports.pillbox2 = {
  LABEL: "Pillbox",
  PARENT: [exports.trap],
  SHAPE: -4,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["goToMasterTarget", "nearestDifferentMaster"],
  INDEPENDENT: true,
  BODY: {
    SPEED: 1.2,
    DENSITY: 10,
  },
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 0, 0, 0, 360, 1],
      TYPE: exports.pillboxTurretme,
    },
  ],
};
exports.minipill = {
  LABEL: "Pillbox",
  PARENT: [exports.trap],
  SHAPE: -3,
  MOTION_TYPE: "motor",
  CONTROLLERS: ["nearestDifferentMaster"],
  INDEPENDENT: true,
  BODY: {
    SPEED: 1,
    DENSITY: 2.5,
  },
  DIE_AT_RANGE: true,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: exports.pillboxTurret2,
    },
  ],
};
exports.smolskimturret = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 2,
  },
  COLOR: 2,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  LABEL: "",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
          g.lessreload,
        ]),
        TYPE: exports.missile,
      },
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
    },
  ],
};
exports.skimturret = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 2,
  },
  COLOR: 11,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  LABEL: "",
  GUNS: [
    {
         /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -2, -20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
    },
  ],
};

function makeAuto(type, name = -1, options = {}) {
  let turret = { type: exports.autoTurret, size: 10, independent: true };
  if (options.type != null) {
    turret.type = options.type;
  }
  if (options.size != null) {
    turret.size = options.size;
  }
  if (options.independent != null) {
    turret.independent = options.independent;
  }

  let output = JSON.parse(JSON.stringify(type));
  let autogun = {
    /*********  SIZE               X       Y     ANGLE    ARC */
    POSITION: [turret.size, 0, 0, 180, 360, 1],
    TYPE: [
      turret.type,
      {
        CONTROLLERS: ["nearestDifferentMaster"],
        INDEPENDENT: turret.independent,
      },
    ],
  };
  if (type.GUNS != null) {
    output.GUNS = type.GUNS;
  }
  if (type.TURRETS == null) {
    output.TURRETS = [autogun];
  } else {
    output.TURRETS = [...type.TURRETS, autogun];
  }
  if (name == -1) {
    output.LABEL = "Auto-" + type.LABEL;
  } else {
    output.LABEL = name;
  }
  output.DANGER = type.DANGER + 1;
  return output;
}
function makeHybrid(type, name = -1) {
  let output = JSON.parse(JSON.stringify(type));
  let spawner = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [7, 12, 1.2, 8, 0, 180, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
      TYPE: [exports.drone, { INDEPENDENT: true }],
      AUTOFIRE: true,
      SYNCS_SKILLS: true,
      STAT_CALCULATOR: gunCalcNames.drone,
      WAIT_TO_CYCLE: false,
      MAX_CHILDREN: 3,
    },
  };
  if (type.TURRETS != null) {
    output.TURRETS = type.TURRETS;
  }
  if (type.GUNS == null) {
    output.GUNS = [spawner];
  } else {
    output.GUNS = [...type.GUNS, spawner];
  }
  if (name == -1) {
    output.LABEL = "Hybrid " + type.LABEL;
  } else {
    output.LABEL = name;
  }
  return output;
}
function makeFallenHybrid(type, name = -1) {
  let output = JSON.parse(JSON.stringify(type));
  let spawner = {
    /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [7, 12, 1.2, 8, 0, 180, 0],
    PROPERTIES: {
      SHOOT_SETTINGS: combineStats([g.drone, g.morereload, g.anni]),
      TYPE: [exports.drone, { INDEPENDENT: true }],
      AUTOFIRE: true,
      SYNCS_SKILLS: true,
      STAT_CALCULATOR: gunCalcNames.drone,
      WAIT_TO_CYCLE: false,
      MAX_CHILDREN: 20,
      DANGER: 70,
    },
  };
  if (type.TURRETS != null) {
    output.TURRETS = type.TURRETS;
  }
  if (type.GUNS == null) {
    output.GUNS = [spawner];
  } else {
    output.GUNS = [...type.GUNS, spawner];
  }
  if (name == -1) {
    output.LABEL = "Hybrid " + type.LABEL;
  } else {
    output.LABEL = name;
  }
  return output;
}
exports.basic = {
  PARENT: [exports.genericTank],
  LABEL: "Basic",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
};
exports.autobasic = makeAuto(exports.basic);
exports.autobasic.BODY = {
  SPEED: base.SPEED,
};
exports.tinybasic = {
  PARENT: [exports.genericTank],
  LABEL: "Microscopic Basic",
  SIZE: 1,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.tankstestbed = {
  PARENT: [exports.genericTank],
  LABEL: "Tanks",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 15, 0.6, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
};
exports.removedtestbed = {
  PARENT: [exports.genericTank],
  LABEL: "Removed Tanks",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 15, 0.6, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.fast]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
};
exports.morebasic = {
  PARENT: [exports.genericTank],
  LABEL: "Basic [Page 3]",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
};
exports.morebasic2 = {
  PARENT: [exports.genericTank],
  LABEL: "Basic [Page 2]",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
};
exports.testbed2 = {
  PARENT: [exports.genericTank],
  LABEL: "Tanks Page 2",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 15, 0.6, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
};
exports.testbed3 = {
  PARENT: [exports.genericTank],
  LABEL: "Tanks Page 3",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 15, 0.6, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
};
exports.testbed4 = {
  PARENT: [exports.genericTank],
  LABEL: "Tanks Page 4",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 15, 0.6, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
};
exports.testbed5 = {
  PARENT: [exports.genericTank],
  LABEL: "Tanks Page 5",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 15, 0.6, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
};
exports.testbed6 = {
  PARENT: [exports.genericTank],
  LABEL: "Tanks Page 6",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 15, 0.6, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
};
exports.testbed7 = {
  PARENT: [exports.genericTank],
  LABEL: "Tanks Page 7",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 15, 0.6, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
};
exports.healsymbol = {
  PARENT: [exports.genericTank],
  LABEL: "",
  COLOR: 12,
  SHAPE: -5,
};
exports.healer = {
  PARENT: [exports.genericTank],
  LABEL: "Healer",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.healsymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.heal]),
        TYPE: exports.healbullet,
        STAT_CALCULATOR: gunCalcNames.sustained
      },
    },
  ],
};
exports.quadtank = {
  PARENT: [exports.genericTank],
  LABEL: "Quad Tank",
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.ambulance = {
  PARENT: [exports.genericTank],
  LABEL: "Ambulance (TESTING TANK)",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.healsymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.heal]),
        TYPE: exports.healbullet,
        STAT_CALCULATOR: gunCalcNames.sustained
    },
    },
    {
    POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.healbullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.healbullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.healbullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.healbullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.healanni = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  LABEL: "Doctor (BROKEN)",
  DANGER: 7,
    TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.healsymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.heal, g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.healbullet,
      },
    },
  ],
};
exports.quadtank = {
  PARENT: [exports.genericTank],
  LABEL: "Quad Tank",
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.diebutton = {
  PARENT: [exports.genericTank],
  LABEL: "Reset",
  AUTOFIRE: true,
  BODY: {
    REGEN: base.REGEN * 0,
    HEALTH: base.HEALTH * 0,
  },
  DIE_AT_RANGE: true,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "fleeAtLowHealth",
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 0.5, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.subduer = {
  PARENT: [exports.genericTank],
  LABEL: "Subduer",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.lowpower,
          g.halfrecoil,
          g.lowreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 6.5, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfrecoil, g.lowreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.pinch = {
  PARENT: [exports.genericTank],
  LABEL: "Pincher",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.autopinch = makeAuto(exports.pinch, "Sallow");
exports.clanger = {
  PARENT: [exports.genericTank],
  LABEL: "Clanger",
  BODY: {
    HEALTH: base.HEALTH * 0.67,
    SHIELD: base.SHIELD * 0.284,
    DENSITY: base.DENSITY * 0.554,
  },
  DANGER: 4,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [15, 6, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [3, 6, 1.7, 13.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.lessreload]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 120, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 240, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, -90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.twinrang = {
  PARENT: [exports.genericTank],
  LABEL: "Twin-Blitzer",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 0.75, 0, -6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload, g.bitlessspeed]),
        TYPE: exports.boomerangbullet,
      },
    },
    {
      POSITION: [18, 8, 0.75, 0, 6, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload, g.bitlessspeed]),
        TYPE: exports.boomerangbullet,
      },
    },
  ],
};
exports.basicrang = {
  PARENT: [exports.genericTank],
  LABEL: "Being tested",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 0.75, 0, -6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload, g.bitlessspeed]),
        TYPE: exports.boomerangbullet,
      },
    },
  ],
};
exports.ranglet = {
  PARENT: [exports.genericTank],
  LABEL: "Ranglet",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 0.75, 0, -6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.bitlessspeed]),
        TYPE: exports.boomerangbullet,
      },
    },
    {
      POSITION: [18, 8, 0.75, 0, 6, 0, 0.33],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.bitlessspeed]),
        TYPE: exports.boomerangbullet,
      },
    },
    {
      POSITION: [22, 8, 0.85, 0, 0, 0, 0.66],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.bitlessspeed]),
        TYPE: exports.boomerangbullet,
      },
    },
  ],
};
exports.minishot = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Minishot",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 4, 1, 0, -4, -7, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.halfrecoil]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 4, 1, 0, 4, 7, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.halfrecoil]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfrecoil]),
        TYPE: exports.bullet,
        LABEL: "Heavy",
      },
    },
  ],
};
exports.autominishot = makeAuto(exports.minishot, "Crusher");
exports.harasser = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Harasser",
  BODY: {
    RELOAD: base.RELOAD * 0.11,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 2, 1, 0, 6, 10, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.halfrecoil,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 2, 1, 0, -6, -10, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.halfrecoil,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 4, 1, 0, -4, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.halfrecoil]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 4, 1, 0, 4, 7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.halfrecoil]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [19, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.halfrecoil,
          g.power,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
        LABEL: "Heavy",
      },
    },
  ],
};
exports.pelleter = {
  PARENT: [exports.genericTank],
  LABEL: "Pelleter",
  DANGER: 4,
  STAT_NAMES: statnames.bullet,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 18, 0.5, 0, 0, 0, 0],
    },
  ],
};
exports.pellguard = {
  PARENT: [exports.genericTank],
  LABEL: "Pellet Guard",
  DANGER: 5,
  STAT_NAMES: statnames.bullet,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 2, 1, 0, -2.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 2, 1, 0, 2.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 18, 0.5, 0, 0, 180, 0],
    },
  ],
};
exports.autopelleter = makeAuto(exports.pelleter, "Piler");
exports.autopelleter.BODY = {
  SPEED: base.SPEED,
};
exports.twinpelleter = {
  PARENT: [exports.genericTank],
  LABEL: "Double Pelleter",
  DANGER: 4,
  STAT_NAMES: statnames.bullet,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 18, 0.5, 0, 0, 0, 0],
    },
    {
      POSITION: [12, 18, 0.5, 0, 0, 180, 0],
    },
  ],
};
exports.tripelleter = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Pelleter",
  DANGER: 4,
  STAT_NAMES: statnames.bullet,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 18, 0.5, 0, 0, 0, 0],
    },
    {
      POSITION: [12, 18, 0.5, 0, 0, 120, 0],
    },
    {
      POSITION: [12, 18, 0.5, 0, 0, 240, 0],
    },
  ],
};
exports.borer = {
  PARENT: [exports.genericTank],
  LABEL: "Borer",
  DANGER: 4,
  BODY: {
    FOV: base.FOV * 1.07,
  },
  STAT_NAMES: statnames.bullet,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 18, 0.5, 0, 0, 0, 0],
    },
  ],
};
exports.binocular = {
  PARENT: [exports.genericTank],
  LABEL: "Binoculars",
  DANGER: 4,
  BODY: {
    FOV: base.FOV * 1.3,
  },
  STAT_NAMES: statnames.bullet,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 3.5, 0.8, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [26, 3.5, 0.8, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 18, 0.5, 0, 0, 0, 0],
    },
  ],
};
exports.autobor = makeAuto(exports.borer);
exports.sailor = {
  PARENT: [exports.genericTank],
  LABEL: "Sailor",
  DANGER: 5,
  STAT_NAMES: statnames.generic,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 2, 1, 0, 2.5, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 4, 0.7, 4, 0, 30, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.lowpower]),
        TYPE: exports.swarm,
      },
    },
    {
      POSITION: [19, 4, 0.7, -4, 0, 330, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.lowpower]),
        TYPE: exports.swarm,
      },
    },
    {
      POSITION: [12, 18, 0.5, 0, 0, 0, 0],
    },
  ],
};
exports.prism = {
  PARENT: [exports.genericTank],
  LABEL: "Prism",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 2, 1, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 2, 1, 0, 2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.doublereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [11, 4, 0.7, 4, 0, 30, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.lowpower]),
        TYPE: exports.swarm,
      },
    },
    {
      POSITION: [19, 4, 0.7, -4, 0, 330, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.halfreload, g.lowpower]),
        TYPE: exports.swarm,
      },
    },
    {
      POSITION: [12, 18, 0.5, 0, 0, 0, 0],
    },
  ],
};
exports.swashbuck = makeHybrid(exports.sailor, "Swashbuckler");
exports.merchant = makeAuto(exports.sailor, "Merchant");
exports.screwdriver = {
  PARENT: [exports.genericTank],
  LABEL: "Screwdriver",
  DANGER: 4,
  STAT_NAMES: statnames.bullet,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.morereload,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 18, 0.5, 0, 0, 0, 0],
    },
  ],
};
exports.flamethrower = {
  PARENT: [exports.genericTank],
  LABEL: "Flamethrower",
  DANGER: 8,
  STAT_NAMES: statnames.generic,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 4, 4.5, -3, -3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.doublereload,
          g.doublereload,
          g.fast,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 4, 4.5, -3, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.doublereload,
          g.doublereload,
          g.fast,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 4, 4.5, -3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.doublereload,
          g.doublereload,
          g.fast,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.laserbeam = {
  PARENT: [exports.genericTank],
  LABEL: "Sprinkler",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 5, 0.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 4, 0.5, -1, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 3, 0.5, -2, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.uzi = {
  PARENT: [exports.genericTank],
  LABEL: "Uzi",
  DANGER: 6,
  BODY: {
    FOV: 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.grower = {
  PARENT: [exports.genericTank],
  LABEL: "Grower",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.growbullet,
      },
    },
    {
      POSITION: [2, 12, 1, 16, 0, 0, 0],
    },
  ],
};
exports.napalm = {
  PARENT: [exports.genericTank],
  LABEL: "Napalm",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 12, 1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.anni, g.halfreload]),
        TYPE: exports.fatgrowbullet,
      },
    },
    {
      POSITION: [2, 18, 1, 16, 0, 0, 0],
    },
  ],
};
exports.growtrapper = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Grow-Trapper",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 10, 1, 10, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.lessreload]),
        TYPE: exports.growtrap,
      },
    },
  ],
};
exports.machgrow = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Grower",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1.3, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.growbullet,
      },
    },
    {
      POSITION: [2, 12, 1.3, 16, 0, 0, 0],
    },
  ],
};
exports.twingrower = {
  PARENT: [exports.genericTank],
  LABEL: "Twin Grower",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.growbullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.halfreload,
          g.lessreload,
        ]),
        TYPE: exports.growbullet,
      },
    },
    {
      POSITION: [2, 20, 1, 16, 0, 0, 0],
    },
  ],
};
exports.megagrow = {
  PARENT: [exports.genericTank],
  LABEL: "Mega Grower",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfreload]),
        TYPE: exports.megagrowbullet,
      },
    },
    {
      POSITION: [2, 14, 1, 17.5, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1, 14.5, 0, 0, 0],
    },
  ],
};
exports.launcher = {
  PARENT: [exports.genericTank],
  LABEL: "Launcher",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, -2, 0, 0, 0],
    },
    {
      POSITION: [18, 12, 1, -2, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.halfreload,
          g.slow,
          g.slow,
        ]),
        TYPE: exports.minimissile,
      },
    },
  ],
};
exports.megalaunch = {
  PARENT: [exports.genericTank],
  LABEL: "Bumper",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 15, 1, -2, 0, 0, 0],
    },
    {
      POSITION: [18, 17, 1, -2, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.halfreload,
          g.slow,
          g.slow,
        ]),
        TYPE: exports.minimissile,
      },
    },
  ],
};
exports.bentlaunch = {
  PARENT: [exports.genericTank],
  LABEL: "Bent Launcher",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, -2, 0, 35, 0],
    },
    {
      POSITION: [18, 12, 1, -2, 0, 35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.halfreload,
          g.slow,
          g.slow,
        ]),
        TYPE: exports.minimissile,
      },
    },
    {
      POSITION: [20, 10, 1, -2, 0, -35, 0],
    },
    {
      POSITION: [18, 12, 1, -2, 0, -35, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.halfreload,
          g.slow,
          g.slow,
        ]),
        TYPE: exports.minimissile,
      },
    },
  ],
};
exports.trapper = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Trapper",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.foghorn = {
  PARENT: [exports.genericTank],
  LABEL: "Foghorn",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.15,
  },
  DANGER: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [12.5, 14, 0.6, 0, 0, 180, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.lessreload]),
        TYPE: exports.fogtrap,
        STAT_CALCULATOR: gunCalcNames.trap,
        MAX_CHILDREN: 3,
      },
    },
  ],
};
exports.brass = {
  PARENT: [exports.genericTank],
  LABEL: "Brass",
  BODY: {
    DENSITY: base.DENSITY * 0.8,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.11,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 315, 0],
    },
    {
      POSITION: [12.5, 14, 0.6, 0, 0, 135, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.lessreload]),
        TYPE: exports.fogtrap,
        STAT_CALCULATOR: gunCalcNames.trap,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [15, 7, 1, 0, 0, 45, 0],
    },
    {
      POSITION: [12.5, 14, 0.6, 0, 0, 225, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.lessreload]),
        TYPE: exports.fogtrap,
        STAT_CALCULATOR: gunCalcNames.trap,
        MAX_CHILDREN: 3,
      },
    },
  ],
};
exports.airhorn = {
  PARENT: [exports.genericTank],
  LABEL: "Airhorn",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [12.5, 14, 0.6, 0, 0, 180, 0],
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.hexatrap,
          g.block,
          g.lessreload,
        ]),
        TYPE: exports.fogblock,
        STAT_CALCULATOR: gunCalcNames.trap,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.autotrapper = makeAuto(exports.trapper);
exports.autotrapper.BODY = {
  SPEED: base.SPEED * 0.8,
  FOV: base.FOV * 1,
};
exports.arsenal = {
  PARENT: [exports.genericTank],
  LABEL: "Arsenal",
  MAX_CHILDREN: 8,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [5, 7, 1.2, 7.5, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.lessreload]),
        TYPE: exports.minipill,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.thermo = {
  PARENT: [exports.genericTank],
  LABEL: "Thermostat",
  MAX_CHILDREN: 8,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [5, 12, 1.2, 7.5, 0, 0, 0],
    },
    {
      POSITION: [3, 12, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.lessreload]),
        TYPE: exports.minipill,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.trisenal = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Arsenal",
  MAX_CHILDREN: 7,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [5, 7, 1.2, 7.5, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.lessreload]),
        TYPE: exports.minipill,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [15, 7, 1, 0, 0, 120, 0],
    },
    {
      POSITION: [5, 7, 1.2, 7.5, 0, 120, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.lessreload]),
        TYPE: exports.minipill,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [15, 7, 1, 0, 0, 240, 0],
    },
    {
      POSITION: [5, 7, 1.2, 7.5, 0, 240, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.lessreload]),
        TYPE: exports.minipill,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.threetrap = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Trapper",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.8,
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [15, 7, 1, 0, 0, 120, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [15, 7, 1, 0, 0, 240, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.megatritrap = {
  PARENT: [exports.genericTank],
  LABEL: "Mega Tri-Trapper",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.8,
  },
  STAT_NAMES: statnames.trap,
  HAS_NO_RECOIL: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 12, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.lessreload]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [15, 12, 1, 0, 0, 120, 0],
    },
    {
      POSITION: [3, 12, 1.7, 15, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.lessreload]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [15, 12, 1, 0, 0, 240, 0],
    },
    {
      POSITION: [3, 12, 1.7, 15, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.lessreload]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.megatrapper = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Mega Trapper",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 16.5, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 16.5, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.automegatrapper = makeAuto(exports.megatrapper);
exports.gigatrapper = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Giga Trapper",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 23.5, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [5, 13.5, 1.8, -5, 0, 0, 0],
    },
    {
      POSITION: [3, 23.5, 1.8, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfreload, g.pound, g.power]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.omegatrapper = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Omega Trapper",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1,
    DAMAGE: base.DAMAGE * 6,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 18, 1.4, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 32, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfreload]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.machtrap = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Machine Trapper",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1.3, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 8.5, 1.9, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.spraytrap = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Paracosm",
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1.3, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 4.5, 1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [3, 8.5, 1.9, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mach]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.automachtrap = makeAuto(exports.machtrap);
exports.twintrap = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Twin Trapper",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 6.5, 1, -3.5, -6, 0, 0],
    },
    {
      POSITION: [15, 6.5, 1, -3.5, 6, 0, 0],
    },
    {
      POSITION: [3, 6.5, 1.7, 12.5, 6, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [3, 6.5, 1.7, 12.5, -6, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.hewntrap = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Hewn Trapper",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4.5, 1, 0, -5, 0, 0],
    },
    {
      POSITION: [15, 4.5, 1, 0, 5, 0, 0],
    },
    {
      POSITION: [15, 4.5, 1, 0, 5.5, 25, 0],
    },
    {
      POSITION: [15, 4.5, 1, 0, -5.5, -25, 0],
    },
    {
      POSITION: [3, 4.5, 1.7, 15, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [3, 4.5, 1.7, 15, -5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [3, 4.5, 1.7, 15, -5.5, -25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.lowpower]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [3, 4.5, 1.7, 15, 5.5, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.lowpower]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.traplet = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Traplet",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4.5, 1, 0, -5, 0, 0],
    },
    {
      POSITION: [15, 4.5, 1, 0, 5, 0, 0],
    },
    {
      POSITION: [3, 4.5, 1.7, 15, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [3, 4.5, 1.7, 15, -5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [17, 4.5, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 4.5, 1.7, 17, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.dualtwintrap = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Spider",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4.5, 1, 0, -5, 0, 0],
    },
    {
      POSITION: [15, 4.5, 1, 0, 5, 0, 0],
    },
    {
      POSITION: [3, 4.5, 1.7, 15, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [3, 4.5, 1.7, 15, -5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [15, 4.5, 1, 0, -5, 180, 0],
    },
    {
      POSITION: [15, 4.5, 1, 0, 5, 180, 0],
    },
    {
      POSITION: [3, 4.5, 1.7, 15, 5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [3, 4.5, 1.7, 15, -5, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.switcheroo = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo (Ba)",
  SHAPE: -6,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.switcherooma = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo (Ma)",
  SHAPE: -6,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.switcheroosn = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo (Sn)",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  SHAPE: -6,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.switcheroopo = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo (Po)",
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  SHAPE: -6,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.switcheroopr = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo (Pr)",
  BODY: {
    HEALTH: base.HEALTH * 0.4,
    SHIELD: base.SHIELD * 0.4,
    DENSITY: base.DENSITY * 0.3,
  },
  SHAPE: -6,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.switcheroodi = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo (Di)",
  SHAPE: -6,
  MAX_CHILDREN: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.switcherootr = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo (Tr)",
  BODY: {
    SPEED: base.SPEED * 0.8,
  },
  SHAPE: -6,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
      },
    },
  ],
};
exports.switcheroopl = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo (Pl)",
  SHAPE: -6,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.morereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.morereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 18, 0.5, 0, 0, 0, 0],
    },
  ],
};
exports.switcheroofl = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo (Fl)",
  SHAPE: -6,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.switcherootw = {
  PARENT: [exports.genericTank],
  LABEL: "Switcheroo (Tw)",
  SHAPE: -6,
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autotwintrap = makeAuto(exports.twintrap, "Waller");
exports.auto2 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-2",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto3gun,
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.auto3gun,
    },
  ],
};
exports.autoto2 = makeAuto(exports.auto2);
exports.heavy2 = {
  PARENT: [exports.genericTank],
  LABEL: "Mega-2",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 0, 190, 0],
      TYPE: exports.heavy3gun,
    },
    {
      POSITION: [14, 8, 0, 180, 190, 0],
      TYPE: exports.heavy3gun,
    },
  ],
};
exports.autoheavy = makeAuto(exports.heavy2);
exports.giga2 = {
  PARENT: [exports.genericTank],
  LABEL: "Giga-2",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 0, 190, 0],
      TYPE: exports.heavy3gun2,
    },
    {
      POSITION: [14, 8, 0, 180, 190, 0],
      TYPE: exports.heavy3gun2,
    },
  ],
};
exports.giga3 = {
  PARENT: [exports.genericTank],
  LABEL: "Giga-3",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 0, 190, 0],
      TYPE: exports.heavy3gun2,
    },
    {
      POSITION: [14, 8, 0, 120, 190, 0],
      TYPE: exports.heavy3gun2,
    },
    {
      POSITION: [14, 8, 0, 240, 190, 0],
      TYPE: exports.heavy3gun2,
    },
  ],
};
exports.machine2 = {
  PARENT: [exports.genericTank],
  LABEL: "Machine-2",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.machineAutoTurret,
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.machineAutoTurret,
    },
  ],
};
exports.automachine2 = makeAuto(exports.machine2);
exports.machine3 = {
  PARENT: [exports.genericTank],
  LABEL: "Machine-3",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.machineAutoTurret,
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.machineAutoTurret,
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.machineAutoTurret,
    },
  ],
};
exports.sniper2 = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper-2",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.25,
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.sniper3gun,
    },
  ],
};
exports.autosniper2 = makeAuto(exports.sniper2);
exports.twin2 = {
  PARENT: [exports.genericTank],
  LABEL: "Twin-2",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.auto4gun,
    },
  ],
};
exports.autotwin2 = makeAuto(exports.twin2);
exports.storm = {
  PARENT: [exports.genericTank],
  LABEL: "Storm",
  DANGER: 4,
  STAT_NAMES: statnames.bullet,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 36, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 72, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 108, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 144, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 216, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 252, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 288, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 4, 1, 0, 0, 324, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.hurricane = {
  PARENT: [exports.genericTank],
  LABEL: "Hurricane",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 3.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 30, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 60, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 90, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 150, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 180, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 210, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 300, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 3.5, 1, 0, 0, 330, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.hurricane,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.stalker = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Stalker",
  INVISIBLE: [0.08, 0.03],
  BODY: {
    ACCELERATION: base.ACCEL * 0.55,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.35,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, -2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.smallstalk = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  LABEL: "Huntress",
  INVISIBLE: [0.08, 0.03],
  BODY: {
    ACCELERATION: base.ACCEL * 0.55,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.35,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8.5, -2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autohuntress = makeAuto(exports.smallstalk);
exports.manager = {
  PARENT: [exports.genericTank],
  LABEL: "Manager",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  INVISIBLE: [0.06, 0.01],
  MAX_CHILDREN: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.turreteddrone = makeAuto(exports.drone);
exports.drivesymbol = {
  PARENT: [exports.genericTank],
  LABEL: "",
  SHAPE: 4,
};
exports.drive = {
  PARENT: [exports.genericTank],
  LABEL: "Overdrive",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  MAX_CHILDREN: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.captain = {
  PARENT: [exports.genericTank],
  LABEL: "Captain",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  MAX_CHILDREN: 3,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.turreteddrone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.autobullet = makeAuto(exports.bullet);
exports.basicdrive = {
  PARENT: [exports.genericTank],
  LABEL: "Driver",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.autobullet,
      },
    },
  ],
};
exports.flankdrive = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Driver",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.autobullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.autobullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.autobullet,
      },
    },
  ],
};
exports.hexadrive = {
  PARENT: [exports.genericTank],
  LABEL: "Hexa Driver",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.autobullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.autobullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.autobullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.autobullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.autobullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.autobullet,
      },
    },
  ],
};
exports.megadrive = {
  PARENT: [exports.genericTank],
  LABEL: "Mega-Driver",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.lessreload]),
        TYPE: exports.autobullet,
      },
    },
  ],
};
exports.gigadrive = {
  PARENT: [exports.genericTank],
  LABEL: "Giga-Driver",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 18, 1.3, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.lessreload,
        ]),
        TYPE: exports.autobullet,
      },
    },
  ],
};
exports.twodrive = {
  PARENT: [exports.genericTank],
  LABEL: "Usb",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.lessreload]),
        TYPE: exports.autobullet,
      },
    },
    {
      POSITION: [18, 14, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.lessreload]),
        TYPE: exports.autobullet,
      },
    },
  ],
};
exports.autominion = makeAuto(exports.minion);
exports.facility = {
  PARENT: [exports.genericTank],
  LABEL: "Facility",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  SHAPE: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 3,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.autominion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0],
    },
  ],
};
exports.closedaarena = {
  PARENT: [exports.genericTank],
  DANGER: 10,
  LABEL: "Arena Closer",
  BODY: {
    DAMAGE: 50,
    FOV: 1.2,
    HEALTH: 99999,
    REGEN: 64509,
    SPEED: 18,
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.fast]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
};
exports.servclean = {
  PARENT: [exports.genericTank],
  DANGER: 10,
  LABEL: "Server Cleaner",
  BODY: {
    DAMAGE: 5000,
    FOV: 2.2,
    HEALTH: 99999,
    REGEN: 64509,
    SPEED: base.speed * 12.5,
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.op, g.fast, g.spam]),
        TYPE: exports.megahive,
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.op, g.fast, g.spam]),
        TYPE: exports.megahive,
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.op, g.fast, g.spam]),
        TYPE: exports.megahive,
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op, g.op, g.fast, g.spam]),
        TYPE: exports.megahive,
      },
    },
  ],
};
exports.autocloser = makeAuto(exports.closedaarena);
exports.twinclose = {
  PARENT: [exports.genericTank],
  LABEL: "Twin Closer",
  BODY: {
    DAMAGE: 50,
    FOV: 1.2,
    HEALTH: 100000,
    REGEN: 99999,
    SPEED: base.speed * 15.7,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.pentaclose = {
  PARENT: [exports.genericTank],
  LABEL: "Penta Closer",
  DANGER: 7,
  BODY: {
    DAMAGE: 50,
    FOV: 1.2,
    HEALTH: 100000,
    REGEN: 99999,
    SPEED: base.speed * 15.7,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 10, 1, 0, -3, -30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.fast,
          g.op,
          g.op,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 10, 1, 0, 3, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.fast,
          g.op,
          g.op,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 10, 1, 0, -2, -15, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.fast,
          g.op,
          g.op,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 10, 1, 0, 2, 15, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.fast,
          g.op,
          g.op,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bent,
          g.fast,
          g.op,
          g.op,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.octoclose = {
  PARENT: [exports.genericTank],
  LABEL: "Octo Closer",
  DANGER: 7,
  BODY: {
    DAMAGE: 50,
    FOV: 1.2,
    HEALTH: 100000,
    REGEN: 99999,
    SPEED: base.speed * 15.7,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.fast,
          g.op,
          g.op,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 10, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.fast,
          g.op,
          g.op,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 10, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.fast,
          g.op,
          g.op,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 10, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.fast,
          g.op,
          g.op,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 10, 1, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.fast,
          g.op,
          g.op,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 10, 1, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.fast,
          g.op,
          g.op,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 10, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.fast,
          g.op,
          g.op,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 10, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.flank,
          g.spam,
          g.fast,
          g.op,
          g.op,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.chungus = {
  PARENT: [exports.genericTank],
  LABEL: "BIG CHUNGUS",
  SIZE: 45,
  BODY: {
    DAMAGE: 50,
    FOV: 1.2,
    HEALTH: 100000,
    REGEN: 99999,
    SPEED: base.speed * 15.7,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 5, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.op, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.tripleclose = {
  PARENT: [exports.genericTank],
  DANGER: 30,
  BODY: {
    DAMAGE: 50,
    FOV: 1.2,
    HEALTH: 100000,
    REGEN: 99999,
    SPEED: base.speed * 15.7,
  },
  LABEL: "Triple Closer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 13, 1, 0, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.op, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 13, 1, 0, -4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.op, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.op, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.machineclose = {
  PARENT: [exports.genericTank],
  BODY: {
    DAMAGE: 50,
    FOV: 1.2,
    HEALTH: 100000,
    REGEN: 99999,
    SPEED: base.speed * 15.7,
  },
  LABEL: "Machine Closer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 19, 1.8, 4, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.op, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.megaarena = {
  PARENT: [exports.genericTank],
  DANGER: 20,
  LABEL: "Ultimate Closer",
  BODY: {
    DAMAGE: 500,
    FOV: 2,
    HEALTH: 99999,
    REGEN: 64509,
    SPEED: base.speed * 30,
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 18, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.anni, g.op, g.fast]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
};
exports.killarena = {
  PARENT: [exports.genericTank],
  DANGER: 20,
  LABEL: "Arena Ender",
  BODY: {
    DAMAGE: 5000900000,
    FOV: 2,
    HEALTH: 99999999,
    REGEN: 6499509,
    SPEED: base.speed * 300,
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 30, 2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.anni, g.op, g.fast]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
};
exports.spraycloser = {
  PARENT: [exports.genericTank],
  LABEL: "Sprayer Closer",
  BODY: {
    DAMAGE: 5000,
    FOV: 2,
    HEALTH: 999999,
    REGEN: 64509,
    SPEED: base.speed * 300,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 14, 1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.fast,
          g.op,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 18, 3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.fast, g.op]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.spectate = {
  PARENT: [exports.genericTank],
  DANGER: 10,
  LABEL: "Ball",
  BODY: {
    DAMAGE: 1,
    FOV: 1.75,
    HEALTH: 99999,
    REGEN: 64509,
    SPEED: base.speed * 12.5,
    DENSITY: base.DENSITY * 6,
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 1, 1, -5, 0, 0, 9999999999],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.weak, g.fake]),
        TYPE: exports.bullet,
        LABEL: "", // def
        STAT_CALCULATOR: 0, // def
        WAIT_TO_CYCLE: false, // def
        AUTOFIRE: false, // def
        SYNCS_SKILLS: false, // def
        MAX_CHILDREN: 0, // def
        ALT_FIRE: false, // def
        NEGATIVE_RECOIL: false, // def
      },
    },
  ],
};
exports.spectator = {
  PARENT: [exports.genericTank],
  LABEL: "Spectator",
  BODY: {
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 1000,
    DAMAGE: 0.000001,
    SPEED: base.SPEED * 6,
    FOV: base.FOV * 3,
    RESIST: 100,
    STEALTH: 1,
  },
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0, 0, 1, 0, -2, 0, 92900],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.fake, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.testbed = {
  PARENT: [exports.genericTank],
  LABEL: "TESTBED",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2,
  },
  SHAPE: [
    [-1, -0.8],
    [-0.8, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8],
  ],
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }],
      },
    },
  ],
};
exports.developer = {
  PARENT: [exports.genericTank],
  LABEL: "DEVELOPER",
  RESET_UPGRADES: true,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  LEVEL: 75,
  BODY: {
    // def
    SHIELD: 100000,
    REGEN: 10000,
    HEALTH: 100000000,
    DAMAGE: 12273000,
    DENSITY: 20,
    FOV: 2,
  },
  SHAPE: [
    [-1, -0.8],
    [-0.8, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8],
  ],
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.hive],
      },
    },
  ],
};
exports.sentrytestbed = {
  PARENT: [exports.genericTank],
  LABEL: "Sentries",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2,
  },
  SHAPE: [
    [-1, -0.8],
    [-0.8, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8],
  ],
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }],
      },
    },
  ],
};
exports.bosstestbed = {
  PARENT: [exports.genericTank],
  LABEL: "Bosses",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2,
  },
  SHAPE: [
    [-1, -0.8],
    [-0.8, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8],
  ],
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }],
      },
    },
  ],
};
exports.bosstestbed2 = {
  PARENT: [exports.genericTank],
  LABEL: "Bosses Page 2",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2,
  },
  SHAPE: [
    [-1, -0.8],
    [-0.8, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8],
  ],
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }],
      },
    },
  ],
};
exports.bosstestbed3 = {
  PARENT: [exports.genericTank],
  LABEL: "Superior Bosses",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2,
  },
  SHAPE: [
    [-1, -0.8],
    [-0.8, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8],
  ],
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }],
      },
    },
  ],
};
exports.misctestbed = {
  PARENT: [exports.genericTank],
  LABEL: "Misc.",
  RESET_UPGRADES: true,
  SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  LEVEL: -1,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 2,
  },
  SHAPE: [
    [-1, -0.8],
    [-0.8, -1],
    [0.8, -1],
    [1, -0.8],
    [0.2, 0],
    [1, 0.8],
    [0.8, 1],
    [-0.8, 1],
    [-1, 0.8],
  ],
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }],
      },
    },
  ],
};
exports.single = {
  PARENT: [exports.genericTank],
  LABEL: "Single",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.whirler = {
  PARENT: [exports.genericTank],
  LABEL: "Spiral",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.whirlbullet,
      },
    },
    {
      POSITION: [5.5, 5, -1.8, 6.5, 0, 0, 0],
    },
  ],
};
exports.twingle = {
  PARENT: [exports.genericTank],
  LABEL: "Twingle",
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 6, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 6, 1, 0, -3.75, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.single]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [6.5, 8.5, -2, 5.5, 0, 0, 0],
    },
  ],
};

let smshskl = 11; //13;
exports.smash = {
  PARENT: [exports.genericTank],
  LABEL: "Smasher",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};
exports.smash2 = {
  PARENT: [exports.genericTank],
  LABEL: "Sickle",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
    {
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto3gun,
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.auto3gun,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};
exports.megasmash = {
  PARENT: [exports.genericTank],
  LABEL: "Mega-Smasher",
  DANGER: 7,
  BODY: {
    SPEED: base.speed * 1.05,
    FOV: base.FOV * 1.1,
    DENSITY: base.DENSITY * 4,
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: exports.megasmashBody,
    },
  ],
};
exports.gigasmash = {
  PARENT: [exports.genericTank],
  LABEL: "Giga-Smasher",
  DANGER: 7,
  BODY: {
    SPEED: base.speed * 1.05,
    FOV: base.FOV * 1.1,
    DENSITY: base.DENSITY * 9,
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [30, 0, 0, 0, 360, 0],
      TYPE: exports.megasmashBody,
    },
  ],
};
exports.terasmash = {
  PARENT: [exports.genericTank],
  LABEL: "Tera-Smasher",
  DANGER: 7,
  BODY: {
    SPEED: base.speed * 0.75,
    FOV: base.FOV * 1.4,
    DENSITY: base.DENSITY * 17,
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [38, 0, 0, 0, 360, 0],
      TYPE: exports.megasmashBody,
    },
    {
      POSITION: [34.5, 0, 0, 180, 360, 0],
      TYPE: exports.spikeBody1,
    },
  ],
};
exports.jumpsmash = {
  PARENT: [exports.genericTank],
  LABEL: "Jump Smasher",
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2,
    DAMAGE: base.DAMAGE * 0.4,
  },
  GUNS: [
    {
      POSITION: [0.2, 20.8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          [50, 10, 0.001, 1, 1, 1.45, 1, 4.5, 1, 3, 1, 0.00001, 1],
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};
exports.bonker = {
  PARENT: [exports.genericTank],
  LABEL: "OWO",
  DANGER: 6,
  SIZE: 9,
  BODY: {
    FOV: base.FOV * 0.85,
    DENSITY: base.DENSITY * 2,
    SPEED: base.SPEED * 1.05,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};
exports.bonkermini = {
  PARENT: [exports.genericTank],
  LABEL: "UwU",
  DANGER: 6,
  SIZE: 5,
  BODY: {
    FOV: base.FOV * 1.35,
    DENSITY: base.DENSITY * 2,
    SPEED: base.SPEED * 2.25,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};
exports.arenasmash = {
  PARENT: [exports.genericTank],
  LABEL: "Arena-Smasher",
  DANGER: 9,
  SIZE: 19,
  BODY: {
    SPEED: base.SPEED * 3,
    DAMAGE: base.DAMAGE * 60,
    HEALTH: 499,
    FOV: base.FOV * 2,
    DENSITY: base.DENSITY * 15,
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [24, 0, 0, 0, 360, 0],
      TYPE: exports.megasmashBody,
    },
  ],
};
exports.landmine = {
  PARENT: [exports.genericTank],
  LABEL: "Landmine",
  INVISIBLE: [0.05, 0.01],
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 1.1,
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2,
  },
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21.5, 0, 0, 0, 360, 0],
      TYPE: exports.smasherBody,
    },
    {
      POSITION: [21.5, 0, 0, 90, -360, 0],
      TYPE: exports.smasherBody,
    },
  ],
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
};
exports.spike = {
  PARENT: [exports.genericTank],
  LABEL: "Spike",
  DANGER: 7,
  BODY: {
    SPEED: base.speed * 0.9,
    DAMAGE: base.DAMAGE * 1.1,
    FOV: base.FOV * 1.05,
    DENSITY: base.DENSITY * 2,
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody,
    },
    {
      POSITION: [20.5, 0, 0, 120, 360, 0],
      TYPE: exports.spikeBody,
    },
    {
      POSITION: [20.5, 0, 0, 240, 360, 0],
      TYPE: exports.spikeBody,
    },
  ],
};
exports.weirdspike = {
  PARENT: [exports.genericTank],
  LABEL: "Shuriken",
  DANGER: 6,
  BODY: {
    SPEED: base.speed * 1.5,
    DAMAGE: base.DAMAGE * 0.5,
    FOV: base.FOV * 1.1,
    DENSITY: base.DENSITY * 1.5,
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [20.5, 0, 0, 0, 360, 0],
      TYPE: exports.spikeBody1,
    },
    {
      POSITION: [20.5, 0, 0, 180, 360, 0],
      TYPE: exports.spikeBody2,
    },
  ],
};
exports.autosmash = makeAuto(exports.smash, "Auto-Smasher", {
  type: exports.autoSmasherTurret,
  size: 11,
});
exports.autosmash.SKILL_CAP = [
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
  smshskl,
];

exports.twin = {
  PARENT: [exports.genericTank],
  LABEL: "Twin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.twinhybrid = makeHybrid(exports.twin, "Twinbrid");
exports.autotwin = makeAuto(exports.twin, "Charger");
exports.autotwin.BODY = {
  SPEED: base.SPEED,
};
exports.twinception = makeAuto(exports.twin, "Twin-Ception", {
  type: exports.twin,
  size: 11,
});
exports.rocket = {
  PARENT: [exports.genericTank],
  LABEL: "Rocket",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, -5, 2, 25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.lotsmorrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, -5, -2, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.lotsmorrecoil]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.firework = {
  PARENT: [exports.genericTank],
  LABEL: "Firework",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1.3, -4, 2.5, 25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.lotsmorrecoil,
          g.doublereload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1.3, -4, -2.5, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.lotsmorrecoil,
          g.doublereload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.carnation = {
  PARENT: [exports.genericTank],
  LABEL: "Carnation",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, -5, 2, 25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.lotsmorrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, -5, -2, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.lotsmorrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 6, 4, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        MAX_CHILDREN: 8,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 6, -4, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        MAX_CHILDREN: 8,
      },
    },
  ],
};

exports.hewntwin = {
  PARENT: [exports.genericTank],
  LABEL: "Hewn Twin",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 3.5, 25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.hewn,
          g.halfrecoil,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, -3.5, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.hewn, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.hewn, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.hewn,
          g.halfrecoil,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.gunner = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.splithybrid = makeHybrid(exports.gunner, "Split Hybrid");
exports.twingunner = {
  PARENT: [exports.genericTank],
  LABEL: "Double Gunner",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, 7.25, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1, 0, -7.25, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 180, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.battery = {
  PARENT: [exports.genericTank],
  LABEL: "Battery",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 2.5, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 2.5, 1, 0, -7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, 3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 1, 0, -3.75, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 4.75, 1, 2, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.vulcan = {
  PARENT: [exports.genericTank],
  LABEL: "Vulcan",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [28, 3, 1, 0, 7.25, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [28, 3, 1, 0, -7.25, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [28, 3, 1, 0, 3.75, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [28, 3, 1, 0, -3.75, 0, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [28, 3, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [28, 3, 1, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [28, 3, 1, 0, -7.25, 0, 0.9],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [28, 3, 1, 0, 3.75, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [28, 3, 1, 0, -3.75, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [28, 3, 1, 0, 0, 0, 0.7],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.fast,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [8, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [8, 12, 1, 0, 0, -6, 0],
    },
  ],
};
exports.pirate = {
  PARENT: [exports.genericTank],
  LABEL: "Pirate",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 3.5, 1.3, 0, 7.25, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 3.5, 1.3, 0, -7.25, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 3.5, 0.6, 0, 3.75, 10, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
      },
    },
    {
      POSITION: [16, 3.5, 0.6, 0, -3.75, -10, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
      },
    },
  ],
};
exports.machinegunner = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gunner",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 4.0, -3, 5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, -3, -5, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 0, 2.5, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 0, -2.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.rimfire = {
  PARENT: [exports.genericTank],
  LABEL: "Rimfire",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 5.5, 1, 0, 7.25, 10, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 5.5, 1, 0, -7.25, -10, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 5.5, 1, 0, 3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.gunner,
          g.power,
          g.lessreload,
          g.lessreload,
          g.bitlessspeed,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 5.5, 1, 0, -3.75, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.gunner,
          g.power,
          g.lessreload,
          g.lessreload,
          g.bitlessspeed,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autogunner = makeAuto(exports.gunner);
exports.applier = makeAuto(exports.machinegunner, "Applier");
exports.nailgun = {
  PARENT: [exports.genericTank],
  LABEL: "Nailgun",
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 2, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.nail,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5.5, 8, -1.8, 6.5, 0, 0, 0],
    },
  ],
};

exports.double = {
  PARENT: [exports.genericTank],
  LABEL: "Double Twin",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.tripletwin = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Twin",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 120, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 240, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autodouble = makeAuto(exports.double, "Auto-Double");
exports.split = {
  PARENT: [exports.genericTank],
  LABEL: "Hewn Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 5.5, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -5.5, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.hiker = {
  PARENT: [exports.genericTank],
  LABEL: "Hiker",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, 5.5, 25, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -5.5, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.double,
          g.hewn,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
  ],
};

exports.bent = {
  PARENT: [exports.genericTank],
  LABEL: "Triple Shot",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -2, -20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autobent = makeAuto(exports.bent, "Auto-Triple");
exports.autobent.BODY = {
  SPEED: base.SPEED,
};
exports.bentdouble = {
  PARENT: [exports.genericTank],
  LABEL: "Bent Double",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 8, 1, 0, -1, -25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 1, 25, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -1, 155, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 1, -155, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.bentliner = {
  PARENT: [exports.genericTank],
  LABEL: "Bentliner",
  DANGER: 6,
  BODY: {
    SPEED: base.SPEED * 0.666,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, -2, -20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bentline,
          g.lessreload,
          g.bitlessspeed,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 2, 20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bentline,
          g.lessreload,
          g.bitlessspeed,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bentline,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -2, -20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bentline,
          g.lessreload,
          g.bitlessspeed,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 20, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bentline,
          g.lessreload,
          g.bitlessspeed,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.bentline,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.penta = {
  PARENT: [exports.genericTank],
  LABEL: "Penta Shot",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.85,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 8, 1, 0, -3, -30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 3, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -2, -15, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 15, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.hepta = {
  PARENT: [exports.genericTank],
  LABEL: "Hepta Shot",
  DANGER: 7,
  BODY: {
    SPEED: base.SPEED * 0.75,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 8, 1, 0, -4, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 4, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 8, 1, 0, -3, -30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 3, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -2, -15, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 15, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.benthybrid = makeHybrid(exports.bent, "Bent Hybrid");

exports.triple = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
  },
  LABEL: "Triplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 10, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autotriple = makeAuto(exports.triple, "Barge");
exports.autotriple.BODY = {
  SPEED: base.SPEED,
};
exports.quivhybrid = makeHybrid(exports.triple, "Quivered Hybrid");
exports.pepper = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    FOV: base.FOV * 1.05,
  },
  LABEL: "Pepper",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 10, 1, 0, -5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -2, -200, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 200, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.quint = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    FOV: base.FOV * 1.1,
  },
  LABEL: "Quintuplet",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 10, 1, 0, -5, 0, 0.66],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 10, 1, 0, 5, 0, 0.66],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 10, 1, 0, -3, 0, 0.33],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 10, 1, 0, 3, 0, 0.33],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 10, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.dual = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  BODY: {
    ACCEL: base.ACCEL * 0.8,
    FOV: base.FOV * 1.1,
  },
  LABEL: "Dual",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 7, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Small",
      },
    },
    {
      POSITION: [18, 7, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
        TYPE: exports.bullet,
        LABEL: "Small",
      },
    },
    {
      POSITION: [16, 8.5, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 8.5, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.sniper = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.rifle = {
  PARENT: [exports.genericTank],
  LABEL: "Rifle",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.225,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10.5, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.trencher = makeAuto(exports.rifle, "Trencher");
exports.tally = makeHybrid(exports.rifle, "Shouter");
exports.crossbow = {
  PARENT: [exports.genericTank],
  LABEL: "Crossbow",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    DAMAGE: base.DAMAGE * 0.55,
    FOV: base.FOV * 1.225,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4, 1, 0, -0.8, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16.5, 4, 1, 0, -1.0, -30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [15, 4, 1, 0, 0.8, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16.5, 4, 1, 0, 1.0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [20, 3.5, 1, 0, -4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.halfreload,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 3.5, 1, 0, 4.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.halfreload,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.rifle,
          g.halfreload,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.tomahawk = {
  PARENT: [exports.genericTank],
  LABEL: "Tomahawk",
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    FOV: base.FOV * 1.145,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12.5, 1.15, 0, 0, 0, 0],
    },
    {
      POSITION: [24, 9, 1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.sniper, g.rifle]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.osama = {
  PARENT: [exports.genericTank],
  LABEL: "Osama",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    FOV: base.FOV * 1.525,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 11.5, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [26, 8, 1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.blunder = {
  PARENT: [exports.genericTank],
  LABEL: "Blunderbuss",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 4, 1, 0, -4.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.spread, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 4, 1, 0, -4.75, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.spread, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 4, 1, 0, -5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.spread, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 4, 1, 0, 4.5, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.spread, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 4, 1, 0, 4.75, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.spread, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [15, 4, 1, 0, 5, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.spread, g.halfrecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 9.5, 1, 0, 0, 0, 0],
    },
  ],
};
exports.musket = {
  PARENT: [exports.genericTank],
  LABEL: "Musket",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.225,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 20, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [18, 6.5, 1, 0, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 6.5, 1, 0, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autosniper = makeAuto(exports.sniper, "Attacker");
exports.autosniper.BODY = {
  FOV: base.FOV * 1.225,
};
exports.snipebrid = makeHybrid(exports.sniper, "Snipebrid");
exports.assassin = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Assassin",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.4,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
  ],
};
exports.autoassassin = makeAuto(exports.assassin);
exports.autoassassin.BODY = {
  FOV: base.FOV * 1.4,
};
exports.divvhybrid = makeHybrid(exports.assassin, "Harvester");
exports.flankass = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Flank Assassin",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
    {
      POSITION: [27, 8.5, 1, 0, 0, 120, 0.33],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 120, 0.33],
    },
    {
      POSITION: [27, 8.5, 1, 0, 0, 240, 0.66],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 240, 0.66],
    },
  ],
};
exports.buttbuttin = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Buttbuttin",
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.325,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
    {
      POSITION: [17.5, 2, 1, 0, -2.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17.5, 2, 1, 0, 2.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 180, 0],
    },
  ],
};
exports.ranger = {
  PARENT: [exports.genericTank],
  LABEL: "Ranger",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.5,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [32, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
  ],
};
exports.warden = {
  PARENT: [exports.genericTank],
  LABEL: "Warden",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.4,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [40, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
  ],
};

exports.hunter = {
  PARENT: [exports.genericTank],
  LABEL: "Hunter",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autohunter = makeAuto(exports.hunter);
exports.plower = {
  PARENT: [exports.genericTank],
  LABEL: "Plower",
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.85,
    SPEED: base.SPEED * 0.83,
    FOV: base.FOV * 1.05,
  },
  MAX_CHILDREN: 10,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1.3, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.over,
        ]),
        TYPE: exports.drone,
      },
    },
    {
      POSITION: [21, 12, 1.2, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.over]),
        TYPE: exports.drone,
      },
    },
  ],
};
exports.devas = {
  PARENT: [exports.genericTank],
  LABEL: "Devastator",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.72,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 13, 1, -2, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.slow,
          g.threequartersrof,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 17, 1, -2, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.slow,
          g.threequartersrof,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.preda = {
  PARENT: [exports.genericTank],
  LABEL: "Predator",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.85,
    FOV: base.FOV * 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.poach = makeHybrid(exports.hunter, "Poacher");
exports.sidewind = {
  PARENT: [exports.genericTank],
  LABEL: "Sidewinder",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 11, -0.5, 14, 0, 0, 0],
    },
    {
      POSITION: [21, 12, -1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.sidewind,
          g.bitlessspeed,
        ]),
        TYPE: exports.snake,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};

exports.director = {
  PARENT: [exports.genericTank],
  LABEL: "Apprentice",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 5,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.autodire = makeAuto(exports.director, "Chairman");
exports.autodire.BODY = {
  FOV: base.FOV * 1.1,
  ACCELERATION: base.ACCEL * 0.75,
};

exports.overclock = {
  PARENT: [exports.genericTank],
  LABEL: "Overclock",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.55,
    FOV: base.FOV * 1.0,
  },
  MAX_CHILDREN: 1,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [0, 25, 0.01, 0, -3, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.destroy,
          g.destroy,
          g.bitlessspeed,
        ]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      POSITION: [13, 19, 1.2, 3, 0, 0, 0],
    },
  ],
};
exports.master = {
  PARENT: [exports.genericTank],
  LABEL: "Master",
  STAT_NAMES: statnames.drone,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.15,
  },
  MAX_CHILDREN: 2,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */ POSITION: [16, 1, 0, 0, 0, 0],
      TYPE: exports.masterGun,
    },
    {
      POSITION: [16, 1, 0, 120, 0, 0],
      TYPE: [exports.masterGun, { INDEPENDENT: true }],
    },
    {
      POSITION: [16, 1, 0, 240, 0, 0],
      TYPE: [exports.masterGun, { INDEPENDENT: true }],
    },
  ],
};
exports.automaster = makeAuto(
  {
    PARENT: [exports.genericTank],
    LABEL: "",
    STAT_NAMES: statnames.drone,
    DANGER: 7,
    BODY: {
      ACCELERATION: base.ACCEL * 0.75,
      FOV: base.FOV * 1.15,
    },
    FACING_TYPE: "autospin",
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [16, 1, 0, 0, 0, 0],
        TYPE: exports.masterGun,
      },
      {
        POSITION: [16, 1, 0, 120, 0, 0],
        TYPE: [exports.masterGun, { INDEPENDENT: true }],
      },
      {
        POSITION: [16, 1, 0, 240, 0, 0],
        TYPE: [exports.masterGun, { INDEPENDENT: true }],
      },
    ],
  },
  "Hyperbole"
);

exports.overseer = {
  PARENT: [exports.genericTank],
  LABEL: "Overseer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.overlord = {
  PARENT: [exports.genericTank],
  LABEL: "Overlord",
  DANGER: 8,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1,
  },
  MAX_CHILDREN: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.overship = makeAuto(
  {
    PARENT: [exports.genericTank],
    LABEL: "Overship",
    DANGER: 8,
    STAT_NAMES: statnames.drone,
    BODY: {
      ACCELERATION: base.ACCEL * 0.55,
      SPEED: base.SPEED * 0.68,
      FOV: base.FOV * 1.0,
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [6, 12, 1.2, 8, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]),
          TYPE: exports.drone,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true,
          MAX_CHILDREN: 3,
        },
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]),
          TYPE: exports.drone,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true,
          MAX_CHILDREN: 3,
        },
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]),
          TYPE: exports.drone,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true,
          MAX_CHILDREN: 3,
        },
      },
      {
        POSITION: [6, 12, 1.2, 8, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.drone, g.over]),
          TYPE: exports.drone,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true,
          MAX_CHILDREN: 3,
        },
      },
      {
        POSITION: [18, 6, 1, -2, 4.5, 135, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
          TYPE: exports.bullet,
        },
      },
      {
        /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 6, 1, -2, -4.5, 135, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
          TYPE: exports.bullet,
        },
      },
      {
        POSITION: [18, 6, 1, -2, 4.5, 225, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
          TYPE: exports.bullet,
        },
      },
      {
        /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 6, 1, -2, -4.5, 225, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
          TYPE: exports.bullet,
        },
      },
    ],
  },
  "Overship"
);
exports.autolord = makeAuto(exports.overlord, "Autolord");
exports.overtrap = {
  PARENT: [exports.genericTank],
  LABEL: "Overtrapper",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.dominatorBody2 = {
        PARENT: [exports.genericTank],
        LABEL: '',
        CONTROLLERS: ['dontTurn'], 
        SHAPE: [[-0.5,-0.866],[-1,0],[-0.5,0.866],[0.5,0.866],[1,0],[0.5,-0.866]],
        BODY: {
            FOV: 3,
        },
        COLOR: 9,
    };
exports.sanctuary = {
        PARENT: [exports.genericTank],
        LABEL: 'Sanctuary',
        CAN_BE_ON_LEADERBOARD: false,
        FACING_TYPE:'autospin',
        ACCEPTS_SCORE: false,
        COLOR: 10,
        SIZE: 60,
  SKILL: skillSet({
    rld: 12,
    dam: 1.2,
    pen: 1.2,
    str: 0.7,
    spd: 1,
    atk: 0.7,
    hlt: 1,
    shi: 0.1,
    rgn: 0.7,
    mob: 0
  }),
        BODY: {
            FOV: 1,
            SPEED: base.SPEED * 0.5,
            HEALTH: 490,
            PUSHABILITY: 0,
        },
        GUNS: [],
        TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
               POSITION: [  24,     0,      0,      0,     360, 0],
               TYPE: [exports.dominatorBody2, { INDEPENDENT: true, COLOR: 9}]
              },
              {
        /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 0, 0, 0, 360, 1],
      TYPE: exports.healsymbol,
              },
              {
      POSITION: [9, 0, 0, 0, 360, 1],
      TYPE: exports.spike,
               },
        ],
  };
for (let i = 0; i < 7; i++) {
  exports.sanctuary.GUNS.push({
          POSITION: [  6.5,      4,      1,     5,     0,      (360 / 7) * i,      0,   ],
          }, {
          POSITION: [   1,     4,     1.5,    12,    0,       (360 / 7) * i,      0,   ], 
           PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone,g.pound]),
             TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
              AUTOFIRE:true,
          }, },
     );
};
exports.desanctuaroyed = {
  PARENT: [exports.genericTank],
  LABEL: 'Destroyed Sanctuary',
  CAN_BE_ON_LEADERBOARD: false,
  ACCEPTS_SCORE: false,
  COLOR: 3,
  SIZE: 30,
  BODY: {
    HEALTH: 1000,
    DAMAGE: base.DAMAGE * 2,
    REGEN: base.REGEN,
    SHIELD: base.SHIELD,
    PUSHABILITY: 0,
  },
  TURRETS: [{
    POSITION: [24, 0, 0, 0, 360, 0],
    TYPE: [exports.dominatorBody2, { INDEPENDENT: true, COLOR: 9 }],
    },
  ],
};
exports.overdestroy = {
  PARENT: [exports.genericTank],
  LABEL: "Overdestroyer",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.megaovertrap = {
  PARENT: [exports.genericTank],
  LABEL: "Ultra-OverTrapper",
  DANGER: 9,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 1.2,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.6, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 6,
      },
    },
    {
      POSITION: [6, 11, 1.6, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 6,
      },
    },
    {
      POSITION: [14, 16, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 16, 1.5, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
        TYPE: exports.block,
        STAT_CALCULATOR: gunCalcNames.block,
      },
    },
  ],
};
exports.banshee = {
  PARENT: [exports.genericTank],
  LABEL: "Banshee",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.1,
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */ POSITION: [10, 8, 0, 0, 80, 0],
      TYPE: exports.bansheegun,
    },
    {
      POSITION: [10, 8, 0, 120, 80, 0],
      TYPE: exports.bansheegun,
    },
    {
      POSITION: [10, 8, 0, 240, 80, 0],
      TYPE: exports.bansheegun,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.autoover = makeAuto(exports.overseer, "Auto Overseer");
exports.overgunner = {
  PARENT: [exports.genericTank],
  LABEL: "Overgunner",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 11, 1.2, 8, 0, 125, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [6, 11, 1.2, 8, 0, 235, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
        MAX_CHILDREN: 3,
      },
    },
    {
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.slow,
          g.flank,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
  ],
};

function makeSwarmSpawner(guntype) {
  return {
    PARENT: [exports.genericTank],
    LABEL: "",
    BODY: {
      FOV: 2,
    },
    CONTROLLERS: ["nearestDifferentMaster"],
    COLOR: 16,
    AI: {
      NO_LEAD: true,
      SKYNET: true,
      FULL_VIEW: true,
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [14, 15, 0.6, 14, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: guntype,
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm,
        },
      },
    ],
  };
}
exports.cruiserGun = makeSwarmSpawner(combineStats([g.swarm]));
exports.cruiser = {
  PARENT: [exports.genericTank],
  LABEL: "Cruiser",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.stingray = makeHybrid(exports.cruiser, "Stingray");
exports.sounder = {
  PARENT: [exports.genericTank],
  LABEL: "Sounder",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 1.45,
    FOV: base.FOV * 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [14, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.battleship = {
  PARENT: [exports.genericTank],
  LABEL: "Battleship",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
  ],
};
exports.lesscruiser = {
  PARENT: [exports.genericTank],
  LABEL: "Cruiser",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.viking = {
  PARENT: [exports.genericTank],
  LABEL: "Viking",
  DANGER: 6,
  FACING_TYPE: "locksFacing",
  STAT_NAMES: statnames.swarm,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.cancertank = makeAuto(
  {
    PARENT: [exports.genericTank],
    LABEL: "Hyperbuffed Viking",
    DANGER: 6,
    FACING_TYPE: "locksFacing",
    STAT_NAMES: statnames.swarm,
    BODY: {
      ACCELERATION: base.ACCEL * 0.75,
      FOV: base.FOV * 1.2,
    },
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm,
        },
      },
      {
        POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm,
        },
      },
      {
        POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
          TYPE: exports.swarm,
          STAT_CALCULATOR: gunCalcNames.swarm,
        },
      },
      {
        POSITION: [18, 18, 1, 0, 0, 180, 0],
      },
      {
        POSITION: [2, 18, 1.2, 18, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
          TYPE: exports.block,
        },
      },
    ],
  },
  "Hyperbuffed Viking"
);
exports.carrier = {
  PARENT: [exports.genericTank],
  LABEL: "Carrier",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 2, 40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -2, -40, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.autocruiser = makeAuto(exports.cruiser, "Auto Cruiser");
exports.fortress = {
  PARENT: [exports.genericTank],
  LABEL: "Fortress", //'Palisade',
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 120, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 240, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 60, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [14, 9, 1, 0, 0, 300, 0],
    },
    {
      POSITION: [4, 9, 1.5, 14, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.commander = {
  PARENT: [exports.genericTank],
  LABEL: "Commander",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.2,
  },
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
        MAX_CHILDREN: 8,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 120, 1 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
        MAX_CHILDREN: 8,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 240, 2 / 3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload]),
        TYPE: [exports.swarm, { CONTROLLERS: ["canRepel"] }],
        STAT_CALCULATOR: gunCalcNames.swarm,
        MAX_CHILDREN: 8,
      },
    },
    {
      POSITION: [8, 10, 1.5, 6.5, 0, 60, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.halfreload, g.meta]),
        TYPE: exports.drone,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [8, 10, 1.5, 6.5, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.halfreload, g.meta]),
        TYPE: exports.drone,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [8, 10, 1.5, 6.5, 0, 300, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.halfreload, g.meta]),
        TYPE: exports.drone,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
      },
    },
  ],
};

exports.underseer = {
  PARENT: [exports.genericTank],
  LABEL: "Underseer",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  SHAPE: 4,
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
exports.triseer = {
  PARENT: [exports.genericTank],
  LABEL: "Trimancer",
  DANGER: 6,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  FACING_TYPE: "autospin",
  SHAPE: 3,
  MAX_CHILDREN: 12,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.suncrisp,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.suncrisp,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.suncrisp,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
exports.autounderseer = makeAuto(exports.underseer, "Auto-Underseer");
exports.undertrap = {
  PARENT: [exports.genericTank],
  LABEL: "Undertrapper",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  SHAPE: 4,
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 7, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [3, 7, 1.7, 15, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
exports.undershot = {
  PARENT: [exports.genericTank],
  LABEL: "Undershotter",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  SHAPE: 4,
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 4, 1, 0, -4, -7, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.halfrecoil]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 4, 1, 0, 4, 7, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.halfrecoil]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.halfrecoil]),
        TYPE: exports.bullet,
        LABEL: "Heavy",
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
exports.underpell = {
  PARENT: [exports.genericTank],
  LABEL: "Undergunner",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  SHAPE: 4,
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.morereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.morereload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 18, 0.5, 0, 0, 0, 0],
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
exports.maleficitor = {
  PARENT: [exports.genericTank],
  LABEL: "Maleficitor",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.1,
  },
  SHAPE: -4,
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.invissunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
  ],
};
exports.necromancer = {
  PARENT: [exports.genericTank],
  LABEL: "Necromancer",
  DANGER: 7,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  SHAPE: 4,
  FACING_TYPE: "autospin",
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload,
        ]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.sunchip,
          g.weak,
          g.doublereload,
        ]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 4,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
  ],
};

exports.lilfact = {
  PARENT: [exports.genericTank],
  LABEL: "Spawner",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1,
  },
  SHAPE: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 3,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1, 8, 0, 0, 0],
    },
  ],
};
exports.autolilfact = makeAuto(exports.lilfact, "Creator");
exports.twinfact = {
  PARENT: [exports.genericTank],
  LABEL: "Twin Spawner",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1,
  },
  SHAPE: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1.4, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 1.3, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 3,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1.2, 8, 0, 0, 0],
    },
  ],
};
exports.machinefact = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Spawner",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1,
  },
  SHAPE: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 0.5, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 3,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion6,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1.5, 8, 0, 0, 0],
    },
  ],
};
exports.guntrapfact = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner Trapper Spawner",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1,
  },
  SHAPE: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 0.5, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 1.0, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 3,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion3,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1.4, 8, 0, 0, 0],
    },
  ],
};
exports.boostfact = {
  PARENT: [exports.genericTank],
  LABEL: "Booster Spawner",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1,
  },
  SHAPE: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 0.6, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 1.1, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 3,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion4,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 0.7, 8, 0, 0, 0],
    },
  ],
};
exports.bombfact = {
  PARENT: [exports.genericTank],
  LABEL: "Bomber Spawner",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1,
  },
  SHAPE: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 0.8, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 1.4, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 3,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion5,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1.2, 8, 0, 0, 0],
    },
  ],
};
exports.overfact = {
  PARENT: [exports.genericTank],
  LABEL: "I",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1,
  },
  SHAPE: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 0.8, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 1.4, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 6,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion9,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1.2, 8, 0, 0, 0],
    },
  ],
};
exports.swarfact = {
  PARENT: [exports.genericTank],
  LABEL: "Swarmer Spawner",
  DANGER: 6,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    ACCELERATION: base.ACCEL * 0.5,
    FOV: 1.1,
  },
  SHAPE: 4,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4.5, 10, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [1, 12, 1.2, 15, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 3,
        SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
        TYPE: exports.minion7,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [3.5, 12, 1.3, 8, 0, 0, 0],
    },
  ],
};
exports.factory = {
  PARENT: [exports.genericTank],
  LABEL: "Factory",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15
  },
  SHAPE: 4,
  MAX_CHILDREN: 10,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone]),
        TYPE: exports.minion,
        AUTOFIRE: true
      }
    }
  ]
};
exports.platinumcrasher = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15,
    HEALTH: 2000,
    SPEED: base.SPEED * 0.75
  },
  LABEL: "NOT WORKING TANK",
  DANGER: 7,
  SHAPE: 3,
  COLOR: 3,
  SIZE: 25,
  SKILL: skillSet({
    rld: 0.5,
    dam: 0.8,
    pen: 0.8,
    str: 0.5,
    spd: 1,
    atk: 0.5,
    hlt: 0,
    shi: 0,
    rgn: 0.7,
    mob: 0
  }),
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [1, 7, -0.5, 8.25, 0, 180, 0]
    },
    {
      POSITION: [8, 7.5, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.muchmorerecoil,
          g.morerecoil
        ]),
        TYPE: exports.bullet,
        STAT_CALCULATOR: combineStats([g.basic, g.mach]),
      }
    }
  ]
};
exports.creator = {
  PARENT: [exports.genericTank],
  LABEL: "Creator",
  DANGER: 7,
  STAT_NAMES: statnames.drone,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: 1.1,
  },
  SHAPE: 4,
  MAX_CHILDREN: 10,
  GUNS: [
    {
      /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [2, 15, 1, 15.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.minion,
        STAT_CALCULATOR: gunCalcNames.drone,
        AUTOFIRE: true,
        VARIES_IN_SIZE: true,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [4, 15, 1, 8, 0, 0, 0],
    },
  ],
};

exports.machine = {
  PARENT: [exports.genericTank],
  LABEL: "Machine Gun",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.machbrid = makeHybrid(exports.machine, "Machinebrid");
exports.automachine = makeAuto(exports.machine, "Flasher");
exports.automachine.BODY = {
  SPEED: base.SPEED,
};
exports.duomach = {
  PARENT: [exports.genericTank],
  LABEL: "Duo Machine",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.trimach = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Machine",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.pentmach = {
  PARENT: [exports.genericTank],
  LABEL: "Penta Machine",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 72, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 144, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 216, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 288, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.blaster = {
  PARENT: [exports.genericTank],
  LABEL: "Blaster",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 11, 2, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autoblaster = makeAuto(exports.blaster);
exports.triblaster = {
  PARENT: [exports.genericTank],
  LABEL: "Tri Blaster",
  BODY: {
    FOV: 0.875,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 11, 2, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 2, 6, 0, 120, 0.33],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 2, 6, 0, 240, 0.66],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.volcano = {
  PARENT: [exports.genericTank],
  LABEL: "Volcano",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 16, 2.5, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.blaster,
          g.pound,
          g.destroy,
          g.lessreload,
        ]),
        TYPE: exports.growbullet,
      },
    },
  ],
};
exports.pyro = {
  PARENT: [exports.genericTank],
  LABEL: "Pyromaniac",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 14.5, 2.2, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.blaster, g.pound]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.gatling = {
  PARENT: [exports.genericTank],
  LABEL: "Gatling Gun",
  BODY: {
    FOV: 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.squirter = {
  PARENT: [exports.genericTank],
  LABEL: "Chain Gun",
  BODY: {
    FOV: 1.4,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.chain, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.spray = {
  PARENT: [exports.genericTank],
  LABEL: "Sprayer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.sprayflame = {
  PARENT: [exports.genericTank],
  LABEL: "Flamethrower",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1.7, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
          g.lessreload,
        ]),
        TYPE: exports.flare,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.searcher = {
  PARENT: [exports.genericTank],
  LABEL: "Searcher",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [26, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [23, 8.5, 1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.morerecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
};

exports.mini = {
  PARENT: [exports.genericTank],
  LABEL: "Minigun",
  DANGER: 6,
  BODY: {
    FOV: 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autominigun = makeAuto(exports.mini, "Auto Minigun");
exports.bigmini = {
  PARENT: [exports.genericTank],
  LABEL: "Subverter",
  DANGER: 7,
  BODY: {
    FOV: 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 12, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 12, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.halfreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.floodmini = {
  PARENT: [exports.genericTank],
  LABEL: "Flooder",
  DANGER: 6,
  BODY: {
    FOV: 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 6, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.fast, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 6.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.fast, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.fast, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 7.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.fast, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.stream = {
  PARENT: [exports.genericTank],
  LABEL: "Streamliner",
  DANGER: 7,
  BODY: {
    FOV: 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.bigstream = {
  PARENT: [exports.genericTank],
  LABEL: "Mega-Streamliner",
  DANGER: 9,
  BODY: {
    FOV: 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [23, 12, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 12, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.stream]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.hybridmini = makeHybrid(exports.mini, "Crop Duster");
exports.barricade = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Barricade",
  STAT_NAMES: statnames.trap,
  BODY: {
    FOV: 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.3, 22, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.blocker = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Blocker",
  STAT_NAMES: statnames.trap,
  BODY: {
    FOV: 1.05,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.3, 22, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 19, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 16, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 13, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 10, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.minitrap = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Crop Duster",
  STAT_NAMES: statnames.trap,
  BODY: {
    FOV: 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 8, 1.3, 22, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 18, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [4, 8, 1.3, 14, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};

exports.pound = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Pounder",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.poundhybrid = makeHybrid(exports.pound, "Poundbrid");
exports.autopound = makeAuto(exports.pound, "Scratcher");
exports.autopound.BODY = {
  ACCELERATION: base.ACCEL * 0.8,
};
exports.boxer = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
  },
  LABEL: "Boxer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 12, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0.33],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.tackle = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    FOV: base.FOV * 0.875,
  },
  LABEL: "Tackler",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 12, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 0, 0.33],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.brawler = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.83,
  },
  LABEL: "Brawler",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 12, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, -2, -20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 20, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.facade = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.64,
  },
  LABEL: "Facade",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0.33],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 5.5, 180, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 180, 0.33],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 12, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [16, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.lessreload]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.obliter = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    FOV: base.FOV * 1.2,
  },
  LABEL: "Obliterator",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, 1, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.sniper,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 9, 1.3, 0, 0, 0, 0],
    },
  ],
};
exports.butcher = makeAuto(exports.obliter, "Butcher");
exports.eliminator = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    FOV: base.FOV * 1.2,
  },
  LABEL: "Eliminator",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 12, 1, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.sniper,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 9, 1.3, 0, 0, 0, 0],
    },
    {
      POSITION: [12, 12, 1, 14, 0, 120, 0.33],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.sniper,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 9, 1.3, 0, 0, 120, 0.33],
    },
    {
      POSITION: [12, 12, 1, 14, 0, 240, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.sniper,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 9, 1.3, 0, 0, 240, 0.667],
    },
  ],
};
exports.twobliter = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    FOV: base.FOV * 1.2,
  },
  LABEL: "Twin Obliterator",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10, 1, 5, 6.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.sniper,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 10, 1, 5, -6.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.sniper,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [6, 18, 1.3, 0, 0, 0, 0],
    },
  ],
};
exports.compound = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    FOV: base.FOV * 1.275,
  },
  LABEL: "Compounder",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 16, 1, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.sniper,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 12.5, 1.3, 0, 0, 0, 0],
    },
  ],
};
exports.flankpound = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Pounder",
  BODY: {
    ACCELERATION: base.ACCEL * 0.9,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 12, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 12, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.pentapound = {
  PARENT: [exports.genericTank],
  LABEL: "Penta Pounder",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 0.85,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 12, 1, 0, 0, 72, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 12, 1, 0, 0, 144, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 12, 1, 0, 0, 216, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 12, 1, 0, 0, 288, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.destroy = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  LABEL: "Destroyer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autodestroy = makeAuto(exports.destroy, "Masher");
exports.autodestroy.BODY = {
  ACCELERATION: base.ACCEL * 0.75,
  FOV: base.FOV * 0.9,
};
exports.blower = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Blower",
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [17.5, 2, 1, 0, -2.5, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17.5, 2, 1, 0, 2.5, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
          g.lowpower,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 180, 0],
    },
  ],
};
exports.anni = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  LABEL: "Annihilator",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.bash = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 0.8,
  },
  LABEL: "Basher",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 19.5, 1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.tonsmorrecoil,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.decent = {
  PARENT: [exports.genericTank],
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
  },
  LABEL: "Decentralizer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 20, 1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.destroy,
          g.anni,
          g.anni,
          g.lessreload,
        ]),
        TYPE: exports.growbullet,
      },
    },
  ],
};
exports.hiveshooter = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8,
  },
  LABEL: "Swarmer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
        TYPE: exports.hive,
      },
    },
    {
      POSITION: [15, 12, 1, 5, 0, 0, 0],
    },
  ],
};
exports.swarmcept = makeAuto(exports.hiveshooter, "Swarmer-Ception", {
  type: exports.hiveshooter,
  size: 11,
});
exports.swarmcept2 = makeAuto(exports.swarmcept, "Swarmer-Ception²", {
  type: exports.swarmcept,
  size: 7,
});
exports.supershooter = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8,
  },
  LABEL: "Mega Swarmer",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 16, -1.2, 2, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
        TYPE: exports.megahive,
      },
    },
    {
      POSITION: [21, 14, 1, 2, 0, 0, 0],
    },
  ],
};
exports.minihive = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8,
  },
  LABEL: "Beehive",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.hive]),
        TYPE: exports.smallhive,
      },
    },
    {
      POSITION: [13, 12, 1, 5, 0, 0, 0],
    },
  ],
};
exports.drivehive = makeAuto(exports.smallhive);
exports.hivedrive = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8,
  },
  LABEL: "HiveDrive",
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: exports.drivesymbol,
    },
  ],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.hive]),
        TYPE: exports.drivehive,
      },
    },
    {
      POSITION: [13, 12, 1, 5, 0, 0, 0],
    },
  ],
};
exports.autohive = makeAuto(exports.minihive);
exports.beesile = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8,
  },
  LABEL: "Bee-Ssile",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.hive]),
        TYPE: exports.hivemiss,
      },
    },
    {
      POSITION: [13, 12, 0.7, 7, 0, 0, 0],
    },
    {
      POSITION: [13, 12, 1, 5, 0, 0, 0],
    },
  ],
};
exports.doubleminihive = {
  PARENT: [exports.genericTank],
  DANGER: 4,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    SPEED: base.speed * 0.8,
  },
  LABEL: "Bee Nest",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 14, -1.2, 5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.hive]),
        TYPE: exports.smallhive,
      },
    },
    {
      POSITION: [13, 12, 1, 5, 0, 0, 0],
    },
    {
      POSITION: [12, 14, -1.2, 5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.hive]),
        TYPE: exports.smallhive,
      },
    },
    {
      POSITION: [13, 12, 1, 5, 0, 180, 0],
    },
  ],
};
exports.hivebrid = makeHybrid(exports.minihive, "Nectar");
exports.hybrid = makeHybrid(exports.destroy, "Hybrid");
exports.shotgun2 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Shotgun",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [15, 14, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [8, 14, -1.3, 4, 0, 0, 0],
    },
  ],
};
exports.shotgunbig = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Shell Gunner",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [4, 3, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 3, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [4, 4, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 12, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 4, 1, 11, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 3, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 3, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -2, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [15, 15, 1.2, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [8, 15, -1.1, 4, 0, 0, 0],
    },
  ],
};
exports.multishot = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Multishot",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [3, 2, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [3, 2, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [3, 3, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [1, 2, 1, 13, -1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 12, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [7, 12, -1.3, 4, 0, 0, 0],
    },
  ],
};
exports.trapshot = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Trapshot",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
  },
  GUNS: [
    /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
      POSITION: [3, 2, 1, 11, -3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [3, 2, 1, 11, 3, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [3, 3, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [3, 3, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.shotgun]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [3, 3, 1, 13, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [1, 2, 1, 13, 1, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.shotgun]),
        TYPE: exports.trap,
      },
    },
    {
      POSITION: [14, 11, 1, 6, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
        TYPE: exports.casing,
      },
    },
    {
      POSITION: [8, 11, -1.3, 4, 0, 0, 0],
    },
  ],
};
exports.automultish = makeAuto(exports.multishot);

exports.builder = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Builder",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 12, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block,
      },
    },
  ],
};
exports.shieldhybrid = makeHybrid(exports.builder, "Boulder");
exports.engineer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Engineer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 11, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [3, 14, 1, 15.5, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 6,
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.pillbox,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [4, 14, 1, 8, 0, 0, 0],
    },
  ],
};
exports.megagin = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Mega Engineer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.75,
    FOV: base.FOV * 0.95,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 10.5, 0, 0, 0],
    },
    {
      POSITION: [3, 19, 1, 15.5, 0, 0, 0],
    },
    {
      POSITION: [2, 19, 1.4, 18, 0, 0, 0],
      PROPERTIES: {
        MAX_CHILDREN: 8,
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.pillbox2,
        SYNCS_SKILLS: true,
      },
    },
    {
      POSITION: [8, 19, 1, 4, 0, 0, 0],
    },
  ],
};
exports.dualbuild = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Dual-Builder",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 5, 0, 0],
    },
    {
      POSITION: [2, 8, 1.1, 18, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfreload]),
        TYPE: exports.block,
      },
    },
    {
      POSITION: [18, 8, 1, 0, -5, 0, 0],
    },
    {
      POSITION: [2, 8, 1.1, 18, -5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.halfreload]),
        TYPE: exports.block,
      },
    },
  ],
};
exports.construct = {
  PARENT: [exports.genericTank],
  LABEL: "Constructor",
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 18, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 18, 1.2, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
        TYPE: exports.block,
      },
    },
  ],
};
exports.decali = {
  PARENT: [exports.genericTank],
  LABEL: "Decalibrator",
  STAT_NAMES: statnames.trap,
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.5,
    SPEED: base.SPEED * 0.7,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 20, 1.3, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 24, 1.45, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.trap,
          g.block,
          g.construct,
          g.destroy,
          g.slow,
          g.lessreload,
        ]),
        TYPE: exports.block,
      },
    },
  ],
};
exports.autobuilder = makeAuto(exports.builder, "Woodsman");
exports.conq = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Conqueror",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [21, 14, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block,
      },
    },
  ],
};
exports.plot = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Plotter",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 4.0, -3, 5, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, -3, -5, 180, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 0, 2.5, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 0, -2.5, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [14, 3, 4.0, 3, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.twin,
          g.puregunner,
          g.machgun,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [2, 14, 1.1, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block,
      },
    },
  ],
};
exports.bentboomer = {
  PARENT: [exports.genericTank],
  DANGER: 9,
  LABEL: "Bent Boomer",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 10, 1, 8, -2, -35, 0],
    },
    {
      POSITION: [7, 10, 1, 8, 2, 35, 0],
    },
    {
      POSITION: [2, 10, 1.3, 16, -2, -35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.twin]),
        TYPE: exports.boomerang,
      },
    },
    {
      POSITION: [2, 10, 1.3, 16, 2, 35, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.twin]),
        TYPE: exports.boomerang,
      },
    },
  ],
};
exports.boomer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Boomer",
  STAT_NAMES: statnames.trap,
  FACING_TYPE: "locksFacing",
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 10, 1, 14, 0, 0, 0],
    },
    {
      POSITION: [6, 10, -1.5, 7, 0, 0, 0],
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 10, 1.3, 18, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
        TYPE: exports.boomerang,
      },
    },
  ],
};
exports.autoboom = makeAuto(exports.boomer);
exports.boomercept = makeAuto(exports.boomer, "Boomer-Ception", {
  type: exports.boomer,
  size: 11,
});
exports.megaboomer = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Mega Boomer",
  STAT_NAMES: statnames.trap,
  FACING_TYPE: "locksFacing",
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12.5, 1, 12, 0, 0, 0],
    },
    {
      POSITION: [6, 11, -1.5, 5, 0, 0, 0],
    },
    {
      //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
      //    }, {
      POSITION: [2, 13, 1.3, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
        TYPE: exports.bigboomerang,
      },
    },
  ],
};
exports.quadtrapper = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Steampunk",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.15,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 6, 1, 0, 0, 45, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak, g.fast]),
        TYPE: exports.block,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 135, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 135, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak, g.fast]),
        TYPE: exports.block,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 225, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 225, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak, g.fast]),
        TYPE: exports.block,
      },
    },
    {
      POSITION: [14, 6, 1, 0, 0, 315, 0],
    },
    {
      POSITION: [2, 6, 1.1, 14, 0, 315, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak, g.fast]),
        TYPE: exports.block,
      },
    },
  ],
};

exports.artillery = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Artillery",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -6, -7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy",
      },
    },
  ],
};
exports.crosshybrid = makeHybrid(exports.artillery, "Crossed Hybrid");
exports.autoarti = makeAuto(exports.artillery);
exports.beekeep = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Beekeeper",
  MAX_CHILDREN: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 3, 1, 0, -6, -7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.bee,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [14, 3, 1, 0, 6, 7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: exports.bee,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy",
      },
    },
  ],
};
exports.mortar = {
  PARENT: [exports.genericTank],
  LABEL: "Mortar",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -8, -7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, 8, 7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, -6, -7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy",
      },
    },
  ],
};
exports.megamortar = {
  PARENT: [exports.genericTank],
  LABEL: "Mega Mortar",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 3, 1, 3, -8, -35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [9, 3, 1, 3, 8, 35, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, -8, -7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, 8, 7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, -6, -7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [19, 14, 1.1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy",
      },
    },
  ],
};
exports.ordnance = {
  PARENT: [exports.genericTank],
  DANGER: 6,
  LABEL: "Ordnance",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [17, 3, 1, 0, -6, -7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [12, 8, 1, 10, 0, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy",
      },
    },
  ],
};
(exports.light = {
  PARENT: [exports.genericTank],
  COLOR: 24,
  SHAPE: 4
}),
  (exports.light2 = {
    PARENT: [exports.genericTank],
    COLOR: 22,
    SHAPE: 4
  }),
  (exports.light3 = {
    PARENT: [exports.genericTank],
    COLOR: 23,
    SHAPE: 6
  }),
  (exports.light4 = {
    PARENT: [exports.genericTank],
    COLOR: 21,
    SHAPE: 6
  }),
  (exports.undercovercop = {
    PARENT: [exports.genericTank],
    LABEL: "Undercover Cop",
    NAME: "GOBIERNO ARGENTINO",
    TOOLTIP: "WOOP WOOP! That's the sound of da police!",
    HITS_OWN_TYPE: "normal",
    FACING_TYPE: "toTarget",
    AUTO_UPGRADE: "none",
    TYPE: "tank",
    MOTION_TYPE: "motor", //glide, chase, swarm
    DANGER: 10,
    DAMAGE_CLASS: 15,
    BUFF_VS_FOOD: true,
    ACCEPTS_SCORE: true,
    CAN_BE_ON_LEADERBOARD: true,
    SKILL: [16, 15, 15, 15, 15, 15, 15, 15, 15, 16],
    SKILL_CAP: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
    BODY: {
      ACCELERATION: 2.12,
      SPEED: 6.18,
      HEALTH: 600,
      RESIST: 1,
      SHIELD: 0.01,
      REGEN: 0.01,
      PENETRATION: 12.5,
      RANGE: 0.99,
      FOV: 1.35,
      DENSITY: 1,
      STEALTH: 5,
      PUSHABILITY: 0.8,
      HETERO: 0,
      DAMAGE: base.DAMAGE * 1.01,
    },
    AI: {
      NO_LEAD: false,
      LIKES_SHAPES: false,
      BLIND: false,
      FARMER: true
    },
    TURRETS: [
      {
        POSITION: [6.32, 0, -8.1, 0, 360, 1],
        TYPE: [exports.light3, { INDEPENDENT: true }]
      },
      {
        POSITION: [6.32, 0, 8.1, 0, 360, 1],
        TYPE: [exports.light4, { INDEPENDENT: true }]
      },
      {
        POSITION: [6.32, 0, -3.1, 0, 360, 1],
        TYPE: [exports.light, { INDEPENDENT: true }]
      },
      {
        POSITION: [6.32, 0, 3.1, 0, 360, 1],
        TYPE: [exports.light2, { INDEPENDENT: true }]
      }
    ],
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [18, 8, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.trifront,
            g.muchmorerecoil,
            g.morereload,
            g.morereload,
            g.sniper
          ]),
          TYPE: exports.bullet,
          LABEL: "Front",
          WAIT_TO_CYCLE: false,
          NEGATIVE_RECOIL: false,
          ALT_FIRE: false,
          MAX_CHILDREN: 0,
          SYNCS_SKILLS: true,
          AUTO_FIRE: false
        }
      },
      {
        POSITION: [13, 8, 1, 0, -1, 135, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.fast,
            g.spam,
            g.thrusterstat,
            g.morereload
          ]),
          TYPE: exports.bullet,
          STAT_CALCULATOR: gunCalcNames.thruster,
          WAIT_TO_CYCLE: false,
          NEGATIVE_RECOIL: false,
          ALT_FIRE: false,
          MAX_CHILDREN: 0,
          SYNCS_SKILLS: true,
          AUTO_FIRE: false
        }
      },
      {
        POSITION: [13, 8, 1, 0, 1, 225, 0.6],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.fast,
            g.spam,
            g.thrusterstat,
            g.morereload
          ]),
          TYPE: exports.bullet,
          STAT_CALCULATOR: gunCalcNames.thruster,
          WAIT_TO_CYCLE: false,
          NEGATIVE_RECOIL: false,
          ALT_FIRE: false,
          MAX_CHILDREN: 0,
          SYNCS_SKILLS: true,
          AUTO_FIRE: false
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 145, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.fast,
            g.spam,
            g.thrusterstat,
            g.morereload
          ]),
          TYPE: exports.bullet,
          STAT_CALCULATOR: gunCalcNames.thruster,
          WAIT_TO_CYCLE: false,
          NEGATIVE_RECOIL: false,
          ALT_FIRE: false,
          MAX_CHILDREN: 0,
          SYNCS_SKILLS: true,
          AUTO_FIRE: false
        }
      },
      {
        POSITION: [16, 8, 1, 0, 0, 215, 0.1],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([
            g.basic,
            g.flank,
            g.tri,
            g.fast,
            g.spam,
            g.thrusterstat,
            g.morereload
          ]),
          TYPE: exports.bullet,
          STAT_CALCULATOR: gunCalcNames.thruster,
          WAIT_TO_CYCLE: false,
          NEGATIVE_RECOIL: false,
          ALT_FIRE: false,
          MAX_CHILDREN: 0,
          SYNCS_SKILLS: true,
          AUTO_FIRE: false
        }
      }
    ]
  });
exports.outrage = {
  PARENT: [exports.genericTank],
  LABEL: "OutRage",
  VALUE: 2001010922022,
  SHAPE: 12,
  COLOR: 12,
  SIZE: 90,
  BODY: {
    HEALTH: 1760,
    SHIELD: base.SHIELD * 1,
    FOV: base.FOV * 1.2,
    DAMAGE: base.DAMAGE * 1.3,
    SPEED: base.SPEED * 0.45,
    DENSITY: base.DENSITY * 0.4,
      },
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  DANGER: 7,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 0.7,
    hlt: 0.5,
    shi: 0.9,
    rgn: 0.5,
    mob: 0.6,
  }),
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [5, 9, 0, 270, 180, 0],
      TYPE: [exports.megatrapper]
    },
    {
      POSITION: [5, 9, 0, 240, 180, 0],
      TYPE: [exports.megatrapper]
    },
    {
      POSITION: [5, 9, 0, 210, 180, 0],
      TYPE: [exports.megatrapper]
    },
    {
      POSITION: [5, 9, 0, 180, 180, 0],
      TYPE: [exports.megatrapper]
    },
    {
      POSITION: [5, 9, 0, 150, 180, 0],
      TYPE: [exports.megatrapper]
    },
    {
      POSITION: [5, 9, 0, 120, 180, 0],
      TYPE: [exports.megatrapper]
    },
    {
      POSITION: [5, 9, 0, 90, 180, 0],
      TYPE: [exports.megatrapper]
    },
    {
      POSITION: [5, 9, 0, 60, 180, 0],
      TYPE: [exports.megatrapper]
    },
    {
      POSITION: [5, 9, 0, 30, 180, 0],
      TYPE: [exports.megatrapper]
    },
    {
      POSITION: [5, 9, 0, 0, 180, 0],
      TYPE: [exports.megatrapper]
    },
    {
      POSITION: [17, 0, 0, 0, 360, 1],
      TYPE: [exports.weirdspike]
    },
    {
      POSITION: [10, 0, 0, 0, 360, 1],
      TYPE: [exports.overlord]
    },
    {
      POSITION: [7, 0, 0, 0, 0, 1],
      TYPE: [exports.boostfact]
    },
    {
      POSITION: [5, 9, 0, -90, 180, 0],
      TYPE: [exports.megatrapper]
    },
    {
      POSITION: [5, 9, 0, -60, 180, 0],
      TYPE: [exports.megatrapper]
    },
    {
      POSITION: [5, 9, 0, -30, 180, 0],
      TYPE: [exports.megatrapper]
    }
  ]
};
        exports.foremost = { 
            PARENT: [exports.genericTank],
            LABEL: 'Foremost Crasher',
            SIZE: 100,
            COLOR: 5,
            SHAPE: 3,
            VARIES_IN_SIZE: false,
            VALUE: 70055044545,
            BODY: {
                FOV: 2,
                SPEED: base.SPEED * 0.005,
                HEALTH: 1600,
                SHIELD: 0.1,
                REGEN: 0.0001,
                DAMAGE: 3,
                  },
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  DANGER: 7,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 0.7,
    hlt: 0.5,
    shi: 0.9,
    rgn: 0.5,
    mob: 0.6,
  }),
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  14,   12.5,     1,      0,      0,      0,      0,   ],
                    }, {
                POSITION: [   4,   12.5,    1.5,    14,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.halfreload, g.halfreload]),
                        TYPE: [exports.pillbox, { INDEPENDENT: true, BODY: {SPEED: 5,}, }],
                    }, }, {
                POSITION: [  14,   12.5,     1,      0,      0,     120,     0,   ],
                    }, {
                POSITION: [   4,   12.5,    1.5,    14,      0,     120,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.halfreload, g.halfreload]),
                        TYPE: [exports.pillbox, { INDEPENDENT: true, BODY: {SPEED: 5,}, }],
                    }, }, {
                POSITION: [  14,   12.5,     1,      0,      0,    -120,     0,   ],
                    }, {
                POSITION: [   4,   12.5,    1.5,    14,      0,    -120,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap, g.halfreload, g.halfreload]),
                        TYPE: [exports.pillbox, { INDEPENDENT: true, BODY: {SPEED: 5,}, }],
                    }, }, {                
                POSITION: [   8,    13,    -1.6,     3,      0,      60,     0,   ],
                    }, {                
                POSITION: [   8,    13,    -1.6,     3,      0,     300,     0,   ],
                    }, {                
                POSITION: [   8,    13,    -1.6,     3,      0,     180,     0,   ],
                    }
            ],
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  12,     0,      0,      0,     360, 1], 
                    TYPE: [exports.overfact],
                        }, {
                POSITION: [  14,     8,      0,     180,    120, 0], 
                    TYPE: [exports.spray, { COLOR: 5, }],
                        }, {
                POSITION: [  14,     8,      0,      60,    120, 0], 
                    TYPE: [exports.spray, { COLOR: 5, }],
                        }, {
                POSITION: [  14,     8,      0,     -60,    120, 0], 
                    TYPE: [exports.spray, { COLOR: 5, }],
                        },
            ],
        };
exports.skimmer = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15,
  },
  LABEL: "Skimmer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 14, -0.5, 9, 0, 0, 0],
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.missile,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.prome = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.05,
    SPEED: base.SPEED * 0.85,
  },
  LABEL: "Promenader",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 15.5, 1.35, 12.5, 0, 0, 0],
    },
    {
      POSITION: [10, 14, -0.5, 9, 0, 0, 0],
    },
    {
      POSITION: [17, 15, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.trapmiss,
        STAT_CALCULATOR: gunCalcNames.sustained,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.rocketeer = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.1,
  },
  LABEL: "Rocketeer",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 12, 1.25, 9, 0, 0, 0],
    },
    {
      POSITION: [17, 16, 0.85, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.rockmiss,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.ultraskimmer = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15,
  },
  LABEL: "Ultra Skimmer",
  DANGER: 8,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 16, -0.5, 9, 0, 0, 0],
    },
    {
      POSITION: [17, 17, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.hypermissile,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.twister = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.15,
  },
  LABEL: "Twister",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 15, -0.5, 9, 0, 0, 0],
    },
    {
      POSITION: [17, 18, 0.8, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.skim]),
        TYPE: exports.twist,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.dustbowl = {
  PARENT: [exports.genericTank],
  BODY: {
    FOV: base.FOV * 1.25,
  },
  LABEL: "Dust Bowl",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [11, 15.5, -0.5, 9, 0, 0, 0],
    },
    {
      POSITION: [18, 18.5, 0.8, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.skim,
          g.lessreload,
        ]),
        TYPE: exports.qutwist,
        STAT_CALCULATOR: gunCalcNames.sustained,
      },
    },
  ],
};
exports.spread = {
  PARENT: [exports.genericTank],
  LABEL: "Spreadshot",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 4, 1, 0, -0.8, -75, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [14.5, 4, 1, 0, -1.0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16, 4, 1, 0, -1.6, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [17.5, 4, 1, 0, -2.4, -30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [19, 4, 1, 0, -3.0, -15, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 4, 1, 0, 0.8, 75, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [14.5, 4, 1, 0, 1.0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16, 4, 1, 0, 1.6, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [17.5, 4, 1, 0, 2.4, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [19, 4, 1, 0, 3.0, 15, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 10, 1.3, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Pounder",
      },
    },
  ],
};
exports.spreadling = {
  PARENT: [exports.genericTank],
  LABEL: "Spreadling",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4, 1, 0, -0.8, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16.5, 4, 1, 0, -1.0, -30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [18, 4, 1, 0, -1.6, -15, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [15, 4, 1, 0, 0.8, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16.5, 4, 1, 0, 1.0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [18, 4, 1, 0, 1.6, 15, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 10, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.spread,
          g.halfrecoil,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
        LABEL: "Pounder",
      },
    },
  ],
};
exports.spreadflank = {
  PARENT: [exports.genericTank],
  LABEL: "Flank-Spread",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 4, 1, 0, -0.8, -45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16.5, 4, 1, 0, -1.0, -30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [18, 4, 1, 0, -1.6, -15, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [15, 4, 1, 0, 0.8, 45, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [16.5, 4, 1, 0, 1.0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [18, 4, 1, 0, 1.6, 15, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 4, 1, 0, 3, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 4, 1, 0, -3, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [14.5, 4.5, 1, 0, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread",
      },
    },
    {
      POSITION: [13, 10, 1, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.spread,
          g.halfrecoil,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
        LABEL: "Pounder",
      },
    },
  ],
};
exports.autospread = makeAuto(exports.spreadling);

exports.flank = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Guard",
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.autoflank = makeAuto(exports.flank, "Flitcher");
exports.autoflank.BODY = {
  SPEED: base.SPEED,
};
exports.flankbrid = makeHybrid(exports.flank, "Flankbrid");
exports.flanksniper = {
  PARENT: [exports.genericTank],
  LABEL: "Flank Sniper",
  BODY: {
    SPEED: base.SPEED * 1.1,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.sniper]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.sniper]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.sniper]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.pentsniper = {
  PARENT: [exports.genericTank],
  LABEL: "Penta Sniper",
  BODY: {
    SPEED: base.SPEED * 1.0,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.sniper]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 8, 1, 0, 0, 72, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.sniper]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 8, 1, 0, 0, 144, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.sniper]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 8, 1, 0, 0, 216, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.sniper]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [24, 8, 1, 0, 0, 288, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.sniper]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.hexa = {
  PARENT: [exports.genericTank],
  LABEL: "Hexa Tank",
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 60, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 300, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.octo = {
  PARENT: [exports.genericTank],
  LABEL: "Octo Tank",
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 45, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 135, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 225, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 315, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.heptatrap = (() => {
  let a = 360 / 7,
    d = 1 / 7;
  return {
    PARENT: [exports.genericTank],
    LABEL: "Septa-Trapper",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.8,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, a, 4 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, a, 4 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 2 * a, 1 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 2 * a, 1 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 3 * a, 5 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 3 * a, 5 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 4 * a, 2 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 4 * a, 2 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 5 * a, 6 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 5 * a, 6 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 6 * a, 3 * d],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 6 * a, 3 * d],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
  };
})();
exports.hexatrap = makeAuto(
  {
    PARENT: [exports.genericTank],
    LABEL: "Hexa-Trapper",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.8,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 7, 1, 0, 0, 0, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 60, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 60, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 120, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 120, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 180, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 180, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 240, 0],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 240, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 300, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 300, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
  },
  "Hexa-Trapper"
);
exports.portbase = makeAuto(
  {
    PARENT: [exports.genericTank],
    LABEL: "Portable Base",
    DANGER: 7,
    BODY: {
      SPEED: base.SPEED * 0.8,
    },
    STAT_NAMES: statnames.trap,
    HAS_NO_RECOIL: true,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [15, 8, 1, 0, 0, 0, 0],
      },
      {
        POSITION: [3, 8, 1.7, 15, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 45, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 45, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 8, 1, 0, 0, 90, 0],
      },
      {
        POSITION: [3, 8, 1.7, 15, 0, 90, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 135, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 135, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 8, 1, 0, 0, 180, 0],
      },
      {
        POSITION: [3, 8, 1.7, 15, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 225, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 225, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 8, 1, 0, 0, 270, 0],
      },
      {
        POSITION: [3, 8, 1.7, 15, 0, 270, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
      {
        POSITION: [15, 7, 1, 0, 0, 315, 0.5],
      },
      {
        POSITION: [3, 7, 1.7, 15, 0, 315, 0.5],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
          TYPE: exports.trap,
          STAT_CALCULATOR: gunCalcNames.trap,
        },
      },
    ],
  },
  "Portable Base"
);

exports.tri = {
  PARENT: [exports.genericTank],
  LABEL: "Tri-Angle",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.trihybrid = makeHybrid(exports.tri, "Airship");
exports.twintri = {
  PARENT: [exports.genericTank],
  LABEL: "Rotor",
  BODY: {
    HEALTH: base.HEALTH * 0.8,
    SHIELD: base.SHIELD * 0.8,
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [18, 8, 1, 0, -5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.tonsmorrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.booster = {
  PARENT: [exports.genericTank],
  LABEL: "Booster",
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.fnyoom = {
  PARENT: [exports.genericTank],
  LABEL: "Fucking nyoom",
  BODY: {
    HEALTH: base.HEALTH * 0.6,
    SHIELD: base.SHIELD * 0.6,
    DENSITY: base.DENSITY * 0.2,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.muchmorerecoil,
          g.muchmorerecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.muchmorerecoil,
          g.muchmorerecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.muchmorerecoil,
          g.muchmorerecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.muchmorerecoil,
          g.muchmorerecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.fighter = {
  PARENT: [exports.genericTank],
  LABEL: "Fighter",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.skater = {
  PARENT: [exports.genericTank],
  LABEL: "Skater",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [7, 8, -0.5, 9, 0, 90, 0],
    },
    {
      POSITION: [14, 9, 1, 0, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.missile,
        STAT_CALCULATOR: gunCalcNames.sustained,
        LABEL: "Side",
      },
    },
    {
      POSITION: [7, 8, -0.5, 9, 0, 270, 0],
    },
    {
      POSITION: [14, 9, 1, 0, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.arty,
          g.arty,
          g.skim,
        ]),
        TYPE: exports.missile,
        STAT_CALCULATOR: gunCalcNames.sustained,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.autofight = makeAuto(exports.fighter, "Whirler");
exports.dragon = {
  PARENT: [exports.genericTank],
  LABEL: "Dragon",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.warrior = {
  PARENT: [exports.genericTank],
  LABEL: "Warrior",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.trifront,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.trifront,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.manofwar = {
  PARENT: [exports.genericTank],
  LABEL: "Man O War",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 12, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.trifront,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
        LABEL: "Side",
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [16, 12, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.trifront,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
        LABEL: "Side",
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.brutalizer = {
  PARENT: [exports.genericTank],
  LABEL: "Surfer",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.autosurf = makeAuto(exports.brutalizer, "Jetski");
exports.ripple = {
  PARENT: [exports.genericTank],
  LABEL: "Ripple",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
    FOV: base.FOV * 0.8,
  },
  SIZE: 6,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.bomber = {
  PARENT: [exports.genericTank],
  LABEL: "Bomber",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 130, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 230, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing",
      },
    },
    {
      POSITION: [14, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.5, 14, 0, 180, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.nuker = {
  PARENT: [exports.genericTank],
  LABEL: "Nuker",
  BODY: {
    DENSITY: base.DENSITY * 0.6,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 18.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.anni,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
        LABEL: "Front",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 130, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing",
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 230, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
        TYPE: exports.bullet,
        LABEL: "Wing",
      },
    },
    {
      POSITION: [18, 12, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [2, 12, 1.1, 18, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
        TYPE: exports.block,
      },
    },
  ],
};
exports.spitfire = makeAuto(exports.bomber, "Spitfire");
exports.autotri = makeAuto(exports.tri);
exports.autotri.BODY = {
  SPEED: base.SPEED,
};
exports.falcon = {
  PARENT: [exports.genericTank],
  LABEL: "Falcon",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [27, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.assass,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
        LABEL: "Assassin",
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 8, 0, 0, 0],
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.eagle = {
  PARENT: [exports.genericTank],
  LABEL: "Eagle",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 11, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.lessreload]),
        TYPE: exports.bullet,
        LABEL: "Pounder",
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [5, 8.5, -1.6, 0, 0, 0, 0],
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.taser = {
  PARENT: [exports.genericTank],
  LABEL: "Taser",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    FOV: base.FOV * 1.1,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 10, 0.8, -3, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [20, 10, 0.8, -3, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [18, 10, 0.8, -3, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.bird = {
  PARENT: [exports.genericTank],
  LABEL: "Bird",
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.8,
    FOV: base.FOV * 1.2,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.lessreload]),
        TYPE: exports.bullet,
        LABEL: "Basic",
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.robin = {
  PARENT: [exports.genericTank],
  LABEL: "Robin",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.96,
    FOV: base.FOV * 1.037,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.sparrow = {
  PARENT: [exports.genericTank],
  LABEL: "Sparrow",
  DANGER: 7,
  BODY: {
    ACCELERATION: base.ACCEL * 0.625,
    FOV: base.FOV * 1.3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.lowpower,
          g.mach,
          g.lessreload,
        ]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.lessreload]),
        TYPE: exports.bullet,
        ALT_FIRE: true,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.auto3 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-3",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto3gun,
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.auto3gun,
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.auto3gun,
    },
  ],
};
exports.autoauto = makeAuto(exports.auto3, "Auto-Auto");
exports.skim3 = {
  PARENT: [exports.genericTank],
  LABEL: "Skimmer-3",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 8, 0, 0, 190, 0],
      TYPE: exports.smolskimturret,
    },
    {
      POSITION: [13, 8, 0, 120, 190, 0],
      TYPE: exports.smolskimturret,
    },
    {
      POSITION: [13, 8, 0, 240, 190, 0],
      TYPE: exports.smolskimturret,
    },
  ],
};
exports.auto5 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-5",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 72, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 144, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 216, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 288, 190, 0],
      TYPE: exports.auto5gun,
    },
  ],
};
exports.auto10 = {
  PARENT: [exports.genericTank],
  LABEL: "Auto-10",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 36, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 72, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 108, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 144, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 180, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 216, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 252, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 288, 190, 0],
      TYPE: exports.auto5gun,
    },
    {
      POSITION: [11, 8, 0, 324, 190, 0],
      TYPE: exports.auto5gun,
    },
  ],
};
exports.mixed3 = {
  PARENT: [exports.genericTank],
  LABEL: "Mixed-3",
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [11, 8, 0, 120, 190, 0],
      TYPE: exports.auto3gun,
    },
    {
      POSITION: [11, 8, 0, 240, 190, 0],
      TYPE: exports.machineAutoTurret,
    },
  ],
};
exports.heavy3 = {
  BODY: {
    SPEED: base.SPEED * 0.95,
  },
  PARENT: [exports.genericTank],
  LABEL: "Mega-3",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 0, 190, 0],
      TYPE: exports.heavy3gun,
    },
    {
      POSITION: [14, 8, 0, 120, 190, 0],
      TYPE: exports.heavy3gun,
    },
    {
      POSITION: [14, 8, 0, 240, 190, 0],
      TYPE: exports.heavy3gun,
    },
  ],
};
exports.tritrap = {
  LABEL: "Architect",
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  PARENT: [exports.genericTank],
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 8, 0, 0, 190, 0],
      TYPE: exports.tritrapgun,
    },
    {
      POSITION: [12, 8, 0, 120, 190, 0],
      TYPE: exports.tritrapgun,
    },
    {
      POSITION: [12, 8, 0, 240, 190, 0],
      TYPE: exports.tritrapgun,
    },
  ],
};
exports.ubertrap = {
  LABEL: "Structure",
  BODY: {
    SPEED: base.SPEED * 1.1,
  },
  PARENT: [exports.genericTank],
  DANGER: 6,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 8, 0, 0, 190, 0],
      TYPE: exports.tritrapgun,
    },
    {
      POSITION: [12, 8, 0, 72, 190, 0],
      TYPE: exports.tritrapgun,
    },
    {
      POSITION: [12, 8, 0, 144, 190, 0],
      TYPE: exports.tritrapgun,
    },
    {
      POSITION: [12, 8, 0, 216, 190, 0],
      TYPE: exports.tritrapgun,
    },
    {
      POSITION: [12, 8, 0, 288, 190, 0],
      TYPE: exports.tritrapgun,
    },
  ],
};
exports.sniper3 = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Sniper-3",
  BODY: {
    ACCELERATION: base.ACCEL * 0.6,
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.25,
  },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 8, 0, 0, 170, 0],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [13, 8, 0, 120, 170, 0],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [13, 8, 0, 240, 170, 0],
      TYPE: exports.sniper3gun,
    },
  ],
};
exports.sniper5 = {
  PARENT: [exports.genericTank],
  LABEL: "Sniper-5",
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [11, 8, 0, 72, 190, 0],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [11, 8, 0, 144, 190, 0],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [11, 8, 0, 216, 190, 0],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [11, 8, 0, 288, 190, 0],
      TYPE: exports.sniper3gun,
    },
  ],
};
exports.auto4 = {
  PARENT: [exports.genericTank],
  DANGER: 5,
  LABEL: "Auto-4",
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 6, 0, 45, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 135, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 225, 160, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [13, 6, 0, 315, 160, 0],
      TYPE: exports.auto4gun,
    },
  ],
};

exports.flanktrap = {
  PARENT: [exports.genericTank],
  LABEL: "Trap Guard",
  STAT_NAMES: statnames.generic,
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.autoflanktrap = makeAuto(exports.flanktrap, "Crumbler");
exports.armsman = {
  PARENT: [exports.genericTank],
  LABEL: "Armsman",
  STAT_NAMES: statnames.generic,
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.225,
  },
  DANGER: 6,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 10.5, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [24, 7, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.guntrap = {
  PARENT: [exports.genericTank],
  LABEL: "Gunner Trapper",
  DANGER: 7,
  STAT_NAMES: statnames.generic,
  BODY: {
    FOV: base.FOV * 1.25,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [19, 2, 1, 0, -2.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 2, 1, 0, 2.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.power,
          g.twin,
          g.tonsmorrecoil,
          g.lotsmorrecoil,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [12, 11, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [13, 11, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 11, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.peashoot = {
  PARENT: [exports.genericTank],
  LABEL: "Peashooter",
  STAT_NAMES: statnames.generic,
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.fast]),
        TYPE: exports.swarm,
        MAX_CHILDREN: 14,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.bulwark = {
  PARENT: [exports.genericTank],
  LABEL: "Bulwark",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, 5.5, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20, 8, 1, 0, -5.5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [10, 8, 1, 0, 5.5, 190, 0],
    },
    {
      POSITION: [4, 8, 1.7, 10, 5.5, 190, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
    {
      POSITION: [10, 8, 1, 0, -5.5, 170, 0],
    },
    {
      POSITION: [4, 8, 1.7, 10, -5.5, 170, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.bushwhack = {
  PARENT: [exports.genericTank],
  LABEL: "Snipe Guard",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.morerecoil]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 8.5, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8.5, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.miniwhack = {
  PARENT: [exports.genericTank],
  LABEL: "Bushwhacker",
  BODY: {
    ACCELERATION: base.ACCEL * 0.7,
    FOV: base.FOV * 1.2,
  },
  DANGER: 7,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [22, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [20, 8, 1, 0, 0, 0, 0.333],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 8, 1, 0, 0, 0, 0.667],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [13, 8.5, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8.5, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};

// NPCS:
exports.crasher = {
  TYPE: "crasher",
  LABEL: "Crasher",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 5,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    SPEED: 4.25,
    ACCEL: 0.01,
    HEALTH: 0.5,
    DAMAGE: 10,
    PENETRATION: 2,
    PUSHABILITY: 0.5,
    DENSITY: 80,
    RESIST: 2,
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothWithMotion",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true,
},
exports.sentry = {
  PARENT: [exports.genericTank],
  TYPE: "crasher",
  LABEL: "Sentry",
  DANGER: 3,
  COLOR: 5,
  SHAPE: 3,
  SIZE: 10,
  SKILL: skillSet({
    rld: 0.5,
    dam: 0.8,
    pen: 0.8,
    str: 0.1,
    spd: 1,
    atk: 0.5,
    hlt: 0,
    shi: 0,
    rgn: 0.7,
    mob: 0,
  }),
  VALUE: 12700,
  VARIES_IN_SIZE: true,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  AI: { NO_LEAD: true },
  BODY: {
    FOV: 1,
    ACCEL: 0.006,
    DAMAGE: base.DAMAGE * 1.3,
    SPEED: base.SPEED * 0.5,
  },
  MOTION_TYPE: "motor",
  FACING_TYPE: "smoothToTarget",
  HITS_OWN_TYPE: "hard",
  HAS_NO_MASTER: true,
  DRAW_HEALTH: true,
  GIVE_KILL_MESSAGE: true,
};
exports.trapTurret = {
  PARENT: [exports.genericTank],
  LABEL: "Turret",
  BODY: {
    FOV: 3,
  },
  AUTOFIRE: true,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster",
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [16, 14, 1, 0, 0, 0, 0],
    },
    {
      POSITION: [4, 14, 1.8, 16, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.trap,
          g.lowpower,
          g.halfreload,
        ]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.sentrySwarm = {
  PARENT: [exports.sentry],
  DANGER: 3,
  GUNS: [
    {
      POSITION: [7, 14, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.fatsentry = {
  PARENT: [exports.sentry],
  DANGER: 3,
  SIZE: 32,
  VALUE: 20000,
  LABEL: "Massive Sentry",
  BODY: {
    SPEED: base.SPEED * 0.1,
    HEALTH: base.HEALTH * 4,
  },
  GUNS: [
    {
      POSITION: [7, 14, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil, g.halfreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
      },
    },
  ],
};
exports.sentryBent = {
  PARENT: [exports.sentry],
  DANGER: 3,
  GUNS: [
    {
      POSITION: [19, 8, 1, 0, -2, -200, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 2, 200, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [22, 8, 1, 0, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.sentryMachine = makeAuto(
  {
    PARENT: [exports.sentry],
    DANGER: 3,
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [13, 10, 1.3, 7, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
          TYPE: exports.bullet,
        },
      },
    ],
  },
  "Sentry"
);
exports.sentryHive = {
  PARENT: [exports.sentry],
  DANGER: 3,
  GUNS: [
    {
      POSITION: [14, 14, -1.2, 5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
        TYPE: exports.hive,
      },
    },
    {
      POSITION: [15, 12, 1, 5, 0, 180, 0],
    },
  ],
};
exports.oversentry = {
  PARENT: [exports.sentry],
  DANGER: 3,
  COLOR: 5,
  MAX_CHILDREN: 18,
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 1,    
    hlt: 0.9,
    mob: 1
}),
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.morereload, g.morereload]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.morereload, g.morereload]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.skimlite = {
  PARENT: [exports.sentry],
  DANGER: 3,
  COLOR: 2,
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [16, 5, 0, 180, 170, 0],
      TYPE: exports.smolskimturret,
    },
  ],
};
exports.wallet = {
  PARENT: [exports.sentry],
  LABEL: "Wallet",
  VALUE: 50000,
  SHAPE: [
    [1, 1],
    [-1, 1],
    [0, 0],
    [0, 0],
    [-1, -1],
    [1, -1],
  ],
  DANGER: 3,
  COLOR: 2,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 8.5, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8.5, 1.7, 9, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
      },
    },
  ],
};
exports.sentryGun = makeAuto(exports.sentry, "Sentry", {
  type: exports.heavy3gun,
  size: 12,
});
exports.sentryTrap = makeAuto(exports.sentry, "Sentry", {
  type: exports.trapTurret,
  size: 12,
});
exports.sentryspawner = {
  PARENT: [exports.genericTank],
  LABEL: "Sentry Sanctuary",
  STAT_NAMES: statnames.drone,
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  COLOR: 5,
  SIZE: 15,
  INDEPENDENT: true,
  AI: { chase: true },
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
        TYPE: [
          exports.sentrySwarm,
          { LABEL: "Crasher", VARIES_IN_SIZE: true, DRAW_HEALTH: true },
        ],
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
        TYPE: [
          exports.sentryGun,
          { LABEL: "Crasher", VARIES_IN_SIZE: true, DRAW_HEALTH: true },
        ],
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
        TYPE: [
          exports.sentryTrap,
          { LABEL: "Crasher", VARIES_IN_SIZE: true, DRAW_HEALTH: true },
        ],
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};

exports.miniboss = {
  PARENT: [exports.genericTank],
  TYPE: "miniboss",
  DANGER: 6,
  SKILL: skillSet({
    rld: 0.5,
    dam: 0.4,
    pen: 0.6,
    str: 0.6,
    spd: 0.7,
    atk: 0.2,
    hlt: 0.6,
    shi: 0.6,
    rgn: 0.4,
    mob: 0.2,
  }),
  LEVEL: 45,
  CONTROLLERS: ["nearestDifferentMaster", "minion", "canRepel"],
  AI: { NO_LEAD: true },
  FACING_TYPE: "autospin",
  HITS_OWN_TYPE: "hard",
  BROADCAST_MESSAGE: "A boss has been defeated!",
};
exports.crasherSpawner = {
  PARENT: [exports.genericTank],
  LABEL: "Crasher Spawner",
  STAT_NAMES: statnames.drone,
  CONTROLLERS: ["nearestDifferentMaster"],
  COLOR: 5,
  SHAPE: -5,
  INDEPENDENT: true,
  AI: { chase: true },
  MAX_CHILDREN: 14,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.fast]),
        TYPE: [
          exports.drone,
          { LABEL: "Crasher", VARIES_IN_SIZE: true, DRAW_HEALTH: true },
        ],
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
exports.elite = {
  PARENT: [exports.miniboss],
  LABEL: "Elite Crasher",
  COLOR: 5,
  SHAPE: 3,
  SIZE: 20,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: 12,
    SHIELD: base.SHIELD * 1.25,
    DAMAGE: base.DAMAGE * 2.5,
  },
};
exports.elite_destroyer = {
  PARENT: [exports.elite],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 16, 1, 6, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 180, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [11, 0, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [11, 0, 0, -60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.bigauto4gun, { INDEPENDENT: true, COLOR: 5 }],
    },
  ],
};
exports.www = {
  PARENT: [exports.miniboss],
  LABEL: "-w-",
  COLOR: 12,
  SHAPE: 5,
  SIZE: 40,
  CAN_BE_ON_LEADERBOARD: false,
  VARIES_IN_SIZE: true,
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: 500,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.fast]),
        TYPE: [
          exports.drone,
          { LABEL: "Crasher", VARIES_IN_SIZE: true, DRAW_HEALTH: true },
        ],
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.fast]),
        TYPE: [
          exports.drone,
          { LABEL: "Crasher", VARIES_IN_SIZE: true, DRAW_HEALTH: true },
        ],
        SYNCS_SKILLS: true,
        AUTOFIRE: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      POSITION: [5, 16, 1, 6, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.mach, g.pound, g.pound, g.destroy]),
        TYPE: exports.bullet,
        LABEL: "Devastator",
      },
    },
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 0, 0, 180, 360, 0],
      TYPE: [exports.ranger],
    },
    {
      POSITION: [11, 0, 0, 60, 360, 0],
      TYPE: [exports.crasherSpawner],
    },
    {
      POSITION: [11, 0, 0, -60, 360, 0],
      TYPE: [exports.bansheegun],
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.spray, { INDEPENDENT: true, COLOR: 5 }],
    },
  ],
};
exports.elite_gunner = {
  PARENT: [exports.elite],
  FACING_TYPE: "locksFacing",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [14, 16, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 16, 1.5, 14, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
        TYPE: [exports.pillbox, { INDEPENDENT: true }],
      },
    },
    {
      POSITION: [6, 14, -2, 2, 0, 60, 0],
    },
    {
      POSITION: [6, 14, -2, 2, 0, 300, 0],
    },
  ],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 8, 0, 60, 180, 0],
      TYPE: [exports.auto4gun, { INDEPENDENT: true }],
    },
    {
      POSITION: [14, 8, 0, 300, 180, 0],
      TYPE: [exports.auto4gun, { INDEPENDENT: true }],
    },
  ],
};
exports.elite_sprayer = {
  PARENT: [exports.elite],
    SKILL: skillSet({
    rld: 1,
    dam: 0.8,
    pen: 0.8,
    spd: 1,
    str: 1,
    atk: 0.9,
  }),
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [exports.spray, { COLOR: 5 }],
    },
    {
      POSITION: [8, 0, 0, 0, 190, 1],
      TYPE: [exports.trimach, { COLOR: 5 }],
    },
  ],
};
exports.elite_nail = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 6, 0, 180, 190, 0],
      TYPE: [exports.nailgun, { COLOR: 5 }],
    },
    {
      POSITION: [12, 6, 0, 60, 190, 0],
      TYPE: [exports.nailgun, { COLOR: 5 }],
    },
    {
      POSITION: [12, 6, 0, -60, 190, 0],
      TYPE: [exports.nailgun, { COLOR: 5 }],
    },
    {
      POSITION: [10, 0, 0, 0, 190, 1],
      TYPE: [exports.megatrapper, { COLOR: 5 }],
    },
  ],
};
exports.elite_engineer = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.engineer, { COLOR: 5 }],
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [exports.engineer, { COLOR: 5 }],
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [exports.engineer, { COLOR: 5 }],
    },
    {
      POSITION: [12, 6, 0, 0, 190, 0],
      TYPE: [exports.construct, { COLOR: 5 }],
    },
    {
      POSITION: [12, 6, 0, 120, 190, 0],
      TYPE: [exports.construct, { COLOR: 5 }],
    },
    {
      POSITION: [12, 6, 0, 240, 190, 0],
      TYPE: [exports.construct, { COLOR: 5 }],
    },
  ],
};

exports.pig7 = {
  PARENT: [exports.miniboss],
  LABEL: "UwO",
  SHAPE: 7,
  COLOR: 5,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.56,
    HEALTH: base.HEALTH * 34.7,
    SHIELD: base.SHIELD * 2,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 3.1,
  },
  SIZE: 60.7,
  DANGER: 7,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7, 10, 0, 30, 110, 0],
      TYPE: exports.mini,
    },
    {
      POSITION: [7, 10, 0, 90, 110, 0],
      TYPE: exports.anni,
    },
    {
      POSITION: [7, 10, 0, 150, 110, 0],
      TYPE: exports.mini,
    },
    {
      POSITION: [7, 10, 0, 210, 110, 0],
      TYPE: exports.anni,
    },
    {
      POSITION: [7, 10, 0, 270, 110, 0],
      TYPE: exports.mini,
    },
    {
      POSITION: [7, 10, 0, 330, 110, 0],
      TYPE: exports.anni,
    },
    {
      POSITION: [13, 0, 0, 0, 360, 1],
      TYPE: [exports.factory, { INDEPENDENT: false /*COLOR: 5*/ }],
    },
  ],
};
exports.xe3 = {
  PARENT: [exports.miniboss],
  LABEL: "XD-3",
  COLOR: 4,
  SHAPE: 4,
  SIZE: 22,
  VALUE: 10000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 2,
    HEALTH: base.HEALTH * 2,
    SHIELD: base.SHIELD * 2,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 3,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.hunter,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter,
          g.preda,
        ]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet,
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [8, 0, 0, 0, 360, 1],
      TYPE: exports.pillbox2,
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [8, 6.5, 5, 270, 230, 0],
      TYPE: exports.assassin,
    },
    {
      POSITION: [8, 6.5, -5, 90, 230, 0],
      TYPE: exports.assassin,
    },
    {
      POSITION: [8, 6.5, -5, 270, 230, 0],
      TYPE: exports.assassin,
    },
    {
      POSITION: [8, 6.5, 5, 90, 230, 0],
      TYPE: exports.assassin,
    },
    {
      POSITION: [8, 6.5, 0, 270, 230, 0],
      TYPE: exports.assassin,
    },
    {
      POSITION: [8, 6.5, 0, 90, 230, 0],
      TYPE: exports.assassin,
    },
  ],
};
exports.mothershipmini = {
  PARENT: [exports.genericTank],
  LABEL: "PolyShip",
  DANGER: 7,
  COLOR: 36,
  SHAPE: 5,
  SIZE: 90,
  VALUE: 10000,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
    HEALTH: 2000,
  },

  STAT_NAMES: statnames.drone,

  DANGER: 30,
  MAX_CHILDREN: 32,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [12, 4, 1, 0, 0, 0, 0],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 0, 22.5, 0.1],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.adrone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 0, 45, 0.2],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 0, 67.5, 0.3],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.adrone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 0, 90, 0.4],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 0, 112.5, 0.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.adrone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 0, 135, 0.6],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 0, 157.5, 0.7],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.adrone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 0, 180, 0.8],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 0, 202.5, 0.9],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.adrone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 0, 225, 1],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 0, 247.5, 1.1],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.adrone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 0, 270, 1.2],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 0, 292.5, 1.3],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.adrone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 0, 315, 1.4],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.drone,
        MAX_CHILDREN: 2,
      },
    },
    {
      POSITION: [12, 4, 1, 0, 0, 337.5, 1.5],
      PROPERTIES: {
        AUTOFIRE: true,
        SHOOT_SETTINGS: combineStats([g.drone, g.over2]),
        TYPE: exports.adrone,
        MAX_CHILDREN: 2,
      },
    },
  ],
};
exports.elite_artillery = {
  PARENT: [exports.elite],
  SIZE: 30,
  VALUE: 250000,
  LABEL: "MortarX",
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.artillery, { COLOR: 5 }],
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [exports.artillery, { COLOR: 5 }],
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [exports.artillery, { COLOR: 5 }],
    },
    {
      POSITION: [14, 6, 0, 0, 190, 0],
      TYPE: [exports.pound, { COLOR: 5 }],
    },
    {
      POSITION: [14, 6, 0, 120, 190, 0],
      TYPE: [exports.pound, { COLOR: 5 }],
    },
    {
      POSITION: [14, 6, 0, 240, 190, 0],
      TYPE: [exports.pound, { COLOR: 5 }],
    },
    {
      POSITION: [14, 0, 0, 0, 190, 1],
      TYPE: [exports.mortar, { COLOR: 5 }],
    },
    {
      POSITION: [8, 0, 0, 180, 190, 1],
      TYPE: [exports.factory, { COLOR: 5 }],
    },
  ],
};
exports.elite_builder = {
  PARENT: [exports.elite],
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [14, 6, 0, 180, 190, 0],
      TYPE: [exports.megatrapper, { COLOR: 5 }],
    },
    {
      POSITION: [14, 6, 0, 60, 190, 0],
      TYPE: [exports.megatrapper, { COLOR: 5 }],
    },
    {
      POSITION: [14, 6, 0, -60, 190, 0],
      TYPE: [exports.megatrapper, { COLOR: 5 }],
    },
    {
      POSITION: [9, 0, 0, 0, 190, 1],
      TYPE: [exports.heptatrap, { COLOR: 5 }],
    },
  ],
};

exports.palisade = (() => {
  let props = {
    SHOOT_SETTINGS: combineStats([
      g.factory,
      g.pound,
      g.halfreload,
      g.halfreload,
    ]),
    TYPE: exports.minion3,
    STAT_CALCULATOR: gunCalcNames.drone,
    AUTOFIRE: true,
    MAX_CHILDREN: 1,
    SYNCS_SKILLS: true,
    WAIT_TO_CYCLE: true,
  };
  return {
    PARENT: [exports.miniboss],
    LABEL: "Rogue Palisade",
    COLOR: 17,
    SHAPE: 6,
    SIZE: 28,
    VALUE: 500000,
    BODY: {
      FOV: 1.3,
      SPEED: base.SPEED * 0.4,
      HEALTH: base.HEALTH * 2,
      SHIELD: base.SHIELD * 2,
      REGEN: base.REGEN,
      DAMAGE: base.DAMAGE * 3,
    },
    GUNS: [
      {
        /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4, 6, -1.6, 8, 0, 0, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 60, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 120, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 180, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
          TYPE: exports.minion3,
          STAT_CALCULATOR: gunCalcNames.drone,
          AUTOFIRE: true,
          MAX_CHILDREN: 1,
          SYNCS_SKILLS: true,
          WAIT_TO_CYCLE: true,
        },
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 240, 0],
        PROPERTIES: props,
      },
      {
        POSITION: [4, 6, -1.6, 8, 0, 300, 0],
        PROPERTIES: props,
      },
    ],
    TURRETS: [
      {
        /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [5, 10, 0, 30, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 90, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 150, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 210, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 270, 110, 0],
        TYPE: exports.trapTurret,
      },
      {
        POSITION: [5, 10, 0, 330, 110, 0],
        TYPE: exports.trapTurret,
      },
    ],
  };
})();
exports.nestkeeper = {
  PARENT: [exports.miniboss],
  SHAPE: 5,
  VALUE: 500000,
  SIZE: 34,
  COLOR: 14,
  LABEL: "Nest Keeper",
  DANGER: 7,
  BODY: {
    FOV: 1.5,
    SPEED: base.SPEED * 0.3,
    HEALTH: base.HEALTH * 7,
  },
  MAX_CHILDREN: 12,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 8, 1.4, 8, 0, 36, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.over, g.pound]),
        TYPE: exports.drone,
      },
    },
    {
      POSITION: [4, 8, 1.4, 8, 0, 108, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.over, g.pound]),
        TYPE: exports.drone,
      },
    },
    {
      POSITION: [4, 8, 1.4, 8, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.over, g.pound]),
        TYPE: exports.drone,
      },
    },
    {
      POSITION: [4, 8, 1.4, 8, 0, 252, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.over, g.pound]),
        TYPE: exports.drone,
      },
    },
    {
      POSITION: [4, 8, 1.4, 8, 0, 324, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.over, g.pound]),
        TYPE: exports.drone,
      },
    },
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [11, 8, 0, 0, 190, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [11, 8, 0, 72, 190, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [11, 8, 0, 144, 190, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [11, 8, 0, 216, 190, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [11, 8, 0, 288, 190, 0],
      TYPE: exports.auto4gun,
    },
    {
      POSITION: [11, 0, 0, 0, 360, 1],
      TYPE: [exports.boomergun, { INDEPENDENT: true, COLOR: 14 }],
    },
  ],
};
exports.polygoner = {
  PARENT: [exports.miniboss],
  LABEL: "Polygoner",
  DANGER: 7,
  SIZE: 70,
  COLOR: 31,
  HEALTH: 18,
  STAT_NAMES: statnames.necro,
  BODY: {
    ACCELERATION: base.ACCEL * 0.9,
    SPEED: base.SPEED * 0.9,
    FOV: base.FOV * 1.2,
    HEALTH: 1000,
  },
  SHAPE: 5,
  FACING_TYPE: "autospin",

  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [5, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 5,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        MAX_CHILDREN: 5,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.necro,
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 5,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
    {
      POSITION: [5, 12, 1.2, 8, 0, 180, 0.75],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.autosunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        MAX_CHILDREN: 5,
        STAT_CALCULATOR: gunCalcNames.necro,
        LABEL: "Guard",
      },
    },
  ],
  TURRETS: [
    {
      POSITION: [8, 6.5, 0, 0, 90, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [8, 6.5, 0, 180, 90, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [8, 6.5, 0, 90, 90, 1],
      TYPE: exports.sniper3gun,
    },
    {
      POSITION: [8, 6.5, 0, -90, 90, 1],
      TYPE: exports.sniper3gun,
    },
  ],
};
exports.defender = {
  PARENT: [exports.miniboss],
  LABEL: "Defender",
  VALUE: 50000,
  SIZE: 22,
  SHAPE: 3,
  COLOR: 2,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.6,
    HEALTH: base.HEALTH * 2,
  },
  CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 8, 1, 0, 0, 180, 0],
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.lessreload]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 0, 60, 0],
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.lessreload]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 0, 300, 0],
    },
    {
      POSITION: [4, 8, 1.7, 13, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.trap, g.pound, g.lessreload]),
        TYPE: exports.trap,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true,
      },
    },
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */ POSITION: [6, 8, 0, 0, 190, 1],
      TYPE: exports.auto3gun,
    },
    {
      POSITION: [6, 8, 0, 120, 190, 1],
      TYPE: exports.auto3gun,
    },
    {
      POSITION: [6, 8, 0, 240, 190, 1],
      TYPE: exports.auto3gun,
    },
  ],
};
  exports.sancdefender = {
  PARENT: [exports.genericTank],
  LABEL: "Ally Defender",
  VALUE: 500000,
  SIZE: 22,
  SHAPE: 3,
  COLOR: 2,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.6,
    HEALTH: base.HEALTH * 2,
  },
    SKILL: skillSet({
    rld: 0.5,
    dam: 0.4,
    pen: 0.6,
    str: 0.6,
    spd: 0.7,
    atk: 0.2,
    hlt: 0.6,
    shi: 0.6,
    rgn: 0.4,
    mob: 0.2,
    }),
  GUNS: [],
                                 
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */ POSITION: [6, 8, 0, 0, 190, 1],
      TYPE: exports.preda,
    },
    {
      POSITION: [6, 8, 0, 120, 190, 1],
      TYPE: exports.preda,
    },
    {
      POSITION: [6, 8, 0, 240, 190, 1],
      TYPE: exports.preda,
    },
  ],
};
for (let i = 0; i < 7; i++) {
  exports.sancdefender.GUNS.push({
          POSITION: [  13, 8, 1, 0, 0,     (360 / 7) * i,      0,   ],
          }, {
          POSITION: [   1,     4,     1.5,    12,    0,       (360 / 7) * i,      0,   ], 
           PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone,g.pound]),
             TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
              AUTOFIRE:true,
          }, },
     );
};    
exports.fallbattle = {
  PARENT: [exports.miniboss],
  LABEL: "Fallen Battleship",
  VALUE: 60000,
  SIZE: 28,
  DANGER: 7,
  COLOR: 18,
  STAT_NAMES: statnames.swarm,
  FACING_TYPE: "locksFacing",
  BODY: {
    FOV: base.FOV * 1.2,
    SPEED: base.SPEED * 0.4,
    HEALTH: 950,
  },
  AUTOFIRE: true,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7.5, 0.6, 7, 4, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.swarm,
          g.battle,
          g.lessreload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
        ]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 90, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, 4, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.lessreload]),
        TYPE: [exports.autoswarm],
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Autonomous",
      },
    },
    {
      POSITION: [7, 7.5, 0.6, 7, -4, 270, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.lessreload]),
        TYPE: exports.swarm,
        STAT_CALCULATOR: gunCalcNames.swarm,
        LABEL: "Guided",
      },
    },
  ],
};
exports.guardian = {
  PARENT: [exports.miniboss],
  LABEL: "Guardian",
  STAT_NAMES: statnames.drone,
  DANGER: 5,
  BODY: {
    ACCELERATION: base.ACCEL * 0.75,
    FOV: base.FOV * 1.1,
    HEALTH: 900,
  },
  SHAPE: 3,
  COLOR: 5,
  SIZE: 196,
  MAX_CHILDREN: 75,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 9, 0.0, 0, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.guardian,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.doublereload,
        ]),
        TYPE: exports.droneun,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 9, 0.0, 0, 0, 180, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.guardian]),
        TYPE: exports.droneun,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 9, 0.0, 0, 0, 180, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.guardian]),
        TYPE: exports.droneun,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 9, 0.0, 0, 0, 180, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.guardian]),
        TYPE: exports.droneun,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 9, 0.0, 0, 0, 180, 1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.guardian]),
        TYPE: exports.droneun,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
      },
    },
  ],
};
(exports.fallen_hybrid = makeFallenHybrid(
  {
    PARENT: [exports.miniboss],
    SIZE: 51,
    COLOR: 18,
    DANGER: 70,
    SHAPE: 20,
    IS_ON_LEADERBOARD: true,
    CONTROLLERS: ["nearestDifferentMaster"],
    FACING_TYPE: "looseToTarget",
    GUNS: [
      {
        /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [21, 14, 1, 0, 0, 0, 0],
        PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
          TYPE: exports.bullet,
        },
      },
    ],
  },
  "Fallen Hybrid"
)),
  (exports.bot = {
    AUTO_UPGRADE: "random",
    AUTO_UPGRADE: "random",
    HITS_OWN_TYPE: "hard",
    FACING_TYPE: "looseToTarget",
    BODY: {
      SIZE: 20,
      FOV: 5,
      HEALTH: 900,
    },
    //COLOR: 17,
    VALUE: 24000,
    SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 1,
    atk: 0.3,
    hlt: 0,
    shi: 0.1,
    rgn: 0.1,
    mob: 0.4
    }),
    // NAME: "ai_",
    CONTROLLERS: [
      "nearestDifferentMaster",
      "mapAltToFire",
      "minion",
      "fleeAtLowHealth",
    ],
    AI: { STRAFE: true },
  });

exports.group = {
  LABEL: "Drone",
  TYPE: "Grouper",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: [
    [-0.607, 0.446],
    [-1.15, 0],
    [-1.147, 0.006],
    [-0.607, -0.414],
    [-0.61, -0.98],
    [0.8, -0.6],
    [0.81, 0.6],
    [-0.607, 1.006],
  ],
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster",
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 1.2,
    PUSHABILITY: 0.6,
    ACCELERATION: 0.05,
    HEALTH: 1500,
    DAMAGE: 1.25 * wepDamageFactor,
    SPEED: 3.8,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8,
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true,
};
exports.fallord = {
  PARENT: [exports.genericTank],
  LABEL: "Fallen Overlord",
  VALUE: 2905330,
  SIZE: 28,
  DANGER: 90,
  COLOR: 17,
  STAT_NAMES: statnames.drone,
  BODY: {
    HEALTH: 400,
    SHIELD: base.SHIELD * 1,
    FOV: base.FOV * 1.2,
    DAMAGE: base.DAMAGE * 1.3,
    SPEED: base.SPEED * 0.45,
    DENSITY: base.DENSITY * 0.4,
  },
    CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
    SKILL: skillSet({
    rld: 0.5,
    dam: 0.9,
    pen: 0.9,
    str: 0.9,
    spd: 0.9,
    atk: 0.9,
    hlt: 0.6,
    shi: 0.5,
    rgn: 0.8,
    mob: 0.8,
  }),
  AUTOFIRE: true,
  MAX_CHILDREN: 28,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 12, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.over,
          g.pound,
          g.doublereload,
          g.doublereload,
          g.halfsize,
          g.doublereload,
          g.doublereload
        ]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.doublereload, g.doublereload, g.halfsize, g.doublereload, g.doublereload]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.doublereload, g.doublereload, g.halfsize, g.doublereload, g.doublereload]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over, g.pound, g.doublereload, g.doublereload, g.halfsize, g.doublereload, g.doublereload]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true,
      },
    },
  ],
};
exports.awa = {
  PARENT: [exports.miniboss],
  SHAPE: 3,
  LABEL: "AwA",
  COLOR: 19,
  SIZE: 42,
  FACING_TYPE: "autospin",
  BODY: {
    SPEED: 0.5,
    HEALTH: 1100,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [6, 6, 1.4, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [6, 6, 1.4, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [6, 6, 1.4, 8, 0, -60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
        TYPE: exports.bullet,
      },
    },
  ],
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7.5, 0, 0, 0, 0, 1],
      TYPE: [exports.factory, { COLOR: 35 }],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7.5, 0, 0, 0, 0, 1],
      TYPE: [exports.factory, { COLOR: 35 }],
    },
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [7.5, 0, 0, 0, 0, 1],
      TYPE: [exports.factory, { COLOR: 35 }],
    },
  ],
};
exports.fallmortar = {
  PARENT: [exports.genericTank],
  LABEL: "Fallen Mortar",
  VALUE: 70000,
  SIZE: 28,
  DANGER: 7,
  COLOR: 18,
  BODY: {
    FOV: base.FOV * 1.2,
    SPEED: base.SPEED * 0.8,
    HEALTH: 900,
    },
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  SKILL: skillSet({
    rld: 0.5,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 0.7,
    atk: 1,
    hlt: 0.6,
    shi: 0.6,
    rgn: 0.4,
    mob: 0.2,
      }),
  AUTOFIRE: true,
  FACING_TYPE: "looseToTarget",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [13, 3, 1, 0, -8, -7, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [13, 3, 1, 0, 8, 7, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, -6, -7, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [17, 3, 1, 0, 6, 7, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
        TYPE: exports.bullet,
        LABEL: "Secondary",
      },
    },
    {
      POSITION: [19, 12, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
        TYPE: exports.bullet,
        LABEL: "Heavy",
      },
    },
  ],
};

exports.fallfighter = {
  PARENT: [exports.genericTank],
  LABEL: "Fallen Fighter",
  VALUE: 150000,
  SIZE: 36,
  COLOR: 18,
  BODY: {
    HEALTH: 1000,
    SHIELD: base.SHIELD * 1,
    REGEN: base.REGEN * 4,
    FOV: base.FOV * 1.2,
    DAMAGE: base.DAMAGE * 1.3,
    SPEED: base.SPEED * 0.45,
    DENSITY: base.DENSITY * 0.4,
  },
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  SKILL: skillSet({
    rld: 1,
    dam: 0.2,
    pen: 0.4,
    str: 0.2,
    spd: 0.3,
    atk: 0.7,
    hlt: 0.5,
    shi: 0.9,
    rgn: 0.9,
    mob: 0.6,
      }),
  FACING_TYPE: "looseToTarget",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [16, 8, 1, 0, -1, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 1, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
        TYPE: exports.bullet,
        LABEL: "Side",
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 150, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 210, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
                  
exports.fallanni = {
  PARENT: [exports.genericTank],
  LABEL: "Fallen Annihilator",
  VALUE: 80000,
  SIZE: 48,
  COLOR: 18,
 BODY: {
    HEALTH: 700,
    SHIELD: base.SHIELD * 1,
    REGEN: base.REGEN * 4,
    FOV: base.FOV * 1.2,
    DAMAGE: base.DAMAGE * 1.3,
    SPEED: base.SPEED * 0.45,
    DENSITY: base.DENSITY * 0.4,
  },
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  DANGER: 7,
  SKILL: skillSet({
    rld: 0.5,
    dam: 1,
    pen: 1,
    str: 1,
    spd: 0.7,
    atk: 1,
    hlt: 0.6,
    shi: 0.6,
    rgn: 0.4,
    mob: 0.2,
      }),
  AUTOFIRE: true,
  FACING_TYPE: "looseToTarget",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [20.5, 19.5, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
        TYPE: exports.bullet,
      },
    },
  ],
};
exports.freybod1 = {
  PARENT: [exports.genericTank],
  SHAPE: 5,
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [13, 6, 0, 72, 190, 0],
      TYPE: [exports.auto4gun, { COLOR: 1 }],
    },
    {
      POSITION: [13, 6, 0, 144, 190, 0],
      TYPE: [exports.auto4gun, { COLOR: 1 }],
    },
    {
      POSITION: [13, 6, 0, 216, 190, 0],
      TYPE: [exports.auto4gun, { COLOR: 1 }],
    },
    {
      POSITION: [13, 6, 0, 288, 190, 0],
      TYPE: [exports.auto4gun, { COLOR: 1 }],
    },
    {
      POSITION: [13, 6, 0, 360, 216, 0],
      TYPE: [exports.auto4gun, { COLOR: 1 }],
    },
  ],
};
exports.freybod2 = {
  PARENT: [exports.genericTank],
  SHAPE: 7,
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [12, 6, 0, 51.4, 190, 0],
      TYPE: [exports.lesscruiser, { COLOR: 1 }],
    },
    {
      POSITION: [12, 6, 0, 102.8, 190, 0],
      TYPE: [exports.lesscruiser, { COLOR: 1 }],
    },
    {
      POSITION: [12, 6, 0, 154.2, 190, 0],
      TYPE: [exports.lesscruiser, { COLOR: 1 }],
    },
    {
      POSITION: [12, 6, 0, 205.6, 190, 0],
      TYPE: [exports.lesscruiser, { COLOR: 1 }],
    },
    {
      POSITION: [12, 6, 0, 257, 216, 0],
      TYPE: [exports.lesscruiser, { COLOR: 1 }],
    },
    {
      POSITION: [12, 6, 0, 308.4, 190, 0],
      TYPE: [exports.lesscruiser, { COLOR: 1 }],
    },
    {
      POSITION: [12, 6, 0, 359.8, 216, 0],
      TYPE: [exports.lesscruiser, { COLOR: 1 }],
    },
  ],
};
exports.freybod3 = {
  PARENT: [exports.genericTank],
  SHAPE: 9,
  AI: { NO_LEAD: false },
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [10, 6, 0, 40, 190, 0],
      TYPE: [exports.trapper, { COLOR: 1 }],
    },
    {
      POSITION: [10, 6, 0, 80, 190, 0],
      TYPE: [exports.trapper, { COLOR: 1 }],
    },
    {
      POSITION: [10, 6, 0, 120, 190, 0],
      TYPE: [exports.trapper, { COLOR: 1 }],
    },
    {
      POSITION: [10, 6, 0, 160, 190, 0],
      TYPE: [exports.trapper, { COLOR: 1 }],
    },
    {
      POSITION: [10, 6, 0, 200, 216, 0],
      TYPE: [exports.trapper, { COLOR: 1 }],
    },
    {
      POSITION: [10, 6, 0, 240, 190, 0],
      TYPE: [exports.trapper, { COLOR: 1 }],
    },
    {
      POSITION: [10, 6, 0, 280, 216, 0],
      TYPE: [exports.trapper, { COLOR: 1 }],
    },
    {
      POSITION: [10, 6, 0, 320, 190, 0],
      TYPE: [exports.trapper, { COLOR: 1 }],
    },
    {
      POSITION: [10, 6, 0, 360, 216, 0],
      TYPE: [exports.trapper, { COLOR: 1 }],
    },
  ],
};
exports.freyja = {
  PARENT: [exports.miniboss],
  SIZE: 50,
  COLOR: 1,
  VALUE: 1000000,
  SHAPE: 0,
  LABEL: "Freyja (Beta)",
  BODY: {
    FOV: base.FOV * 2,
    SPEED: base.SPEED * 0.25,
    HEALTH: base.HEALTH * 4.5,
  },
  AI: { NO_LEAD: false },
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [34, 0, 0, 0, 190, 1],
      TYPE: [exports.freybod3, { COLOR: 1 }],
    },
    {
      POSITION: [24, 0, 0, 0, 190, 1],
      TYPE: [exports.freybod2, { COLOR: 1 }],
    },
    {
      POSITION: [14, 0, 0, 0, 190, 1],
      TYPE: [exports.freybod1, { COLOR: 1 }],
    },
  ],
};
exports.swp11 = {
  PARENT: [exports.miniboss],
  LABEL: "Swp-11",
  COLOR: 2,
  SIZE: 23,
  VALUE: 50000,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [25, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [23, 8, 1, 0, 0, 0, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [21, 8, 1, 0, 0, 0, 0.4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [19, 8, 1, 0, 0, 0, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
    {
      POSITION: [17, 8, 1, 0, 0, 0, 0.8],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: exports.bullet,
      },
    },
  ],
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
      POSITION: [18, 0, 0, 90, 360, 0],
      TYPE: [exports.nailgun, { COLOR: 2 }],
    },
    {
      POSITION: [18, 0, 0, 270, 360, 0],
      TYPE: [exports.nailgun, { COLOR: 2 }],
    },
  ],
};
exports.summoner = {
  PARENT: [exports.genericTank],
  LABEL: "Summoner",
  VALUE: 875555,
  DANGER: 7,
  COLOR: 13,
  SHAPE: 4,
  SIZE: 29,
  STAT_NAMES: statnames.drone,
  BODY: {
    ACCELERATION: base.ACCEL * 0.25,
    SPEED: base.SPEED * 0.25,
    FOV: base.FOV * 1.4,
    HEALTH: 560
  },
    SKILL: skillSet({
    rld: 0.5,
    dam: 0.9,
    pen: 0.9,
    str: 0.9,
    spd: 0.9,
    atk: 0.9,
    hlt: 0.6,
    shi: 0.6,
    rgn: 0.8,
    mob: 0.8,
  }),
  MAX_CHILDREN: 38,
  CONTROLLERS: ["nearestDifferentMaster", "mapAltToFire", "minion"],
  FACING_TYPE: "autospin",
  BROADCAST_MESSAGE: "A Summoner has been owned!",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3, 7, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.slow
        ]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      POSITION: [3, 7, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.lowpower,
          g.slow
        ]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      POSITION: [3, 7, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.lowpower,
          g.slow
        ]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      }
    },
    {
      POSITION: [3, 7, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.drone,
          g.doublereload,
          g.doublereload,
          g.doublereload,
          g.lowpower,
          g.slow
        ]),
        TYPE: exports.sunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone
      },
    },
  ],
};
exports.fallenbooster = {
  PARENT: [exports.genericTank],
  LABEL: "Fallen Booster",
  COLOR: 18,
  VALUE: 75500,
  SIZE: 29,
  BODY: {
    HEALTH: 1000,
    SHIELD: base.SHIELD * 1,
    REGEN: base.REGEN * 4,
    FOV: base.FOV * 1.2,
    DAMAGE: base.DAMAGE * 1.3,
    SPEED: base.SPEED * 0.45,
    DENSITY: base.DENSITY * 0.4,
  },
  CONTROLLERS: ["nearestDifferentMaster", "mapTargetToGoal"],
  DANGER: 7,
  SKILL: skillSet({
    rld: 1,
    dam: 0.2,
    pen: 0.4,
    str: 0.2,
    spd: 0.3,
    atk: 0.7,
    hlt: 0.5,
    shi: 0.9,
    rgn: 0.9,
    mob: 0.6,
  }),
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.trifront,
          g.muchmorerecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: "Front",
      },
    },
    {
      POSITION: [13, 8, 1, 0, -1, 135, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [13, 8, 1, 0, 1, 225, 0.6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.flank,
          g.tri,
          g.thruster,
          g.halfrecoil,
        ]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 145, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
    {
      POSITION: [16, 8, 1, 0, 0, 215, 0.1],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
        TYPE: exports.bullet,
        LABEL: gunCalcNames.thruster,
      },
    },
  ],
};
exports.elitepenta = {
  LABEL: "Elite Pentaner",
  PARENT: [exports.miniboss],
  VALUE: 500000,
  SIZE: 24,
  BODY: {
    FOV: 1.5,
    SPEED: base.SPEED * 0.2,
    HEALTH: 300,
    DAMAGE: 2,
    SHIELD: 200,
  },
  SHAPE: 3,
  COLOR: 11,
  FACING_TYPE: "autospin",
  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [15, 5, 0, 60, 170, 0],
      TYPE: exports.skimturret,
    },
    {
      POSITION: [15, 5, 0, 180, 170, 0],
      TYPE: exports.skimturret,
    },
    {
      POSITION: [15, 5, 0, 300, 170, 0],
      TYPE: exports.skimturret,
    },
  ],
};

exports.bot = {
  AUTO_UPGRADE: "random",
  FACING_TYPE: "looseToTarget",
  BODY: {
    SIZE: 10,
    SPEED: base.SPEED * 0.03,
  },
  NAME: "",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
  ],
  AI: { STRAFE: true },
  SKILL: skillSet({
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 1,
    str: 2,
    atk: 0.9,
  }),
};

// UPGRADE PATHS
exports.testbed.UPGRADES_TIER_1 = [
  exports.tankstestbed,
  exports.bosstestbed,
  exports.sentrytestbed,
  exports.misctestbed,
  exports.removedtestbed,
  exports.diebutton,
  exports.undercovercop,
  exports.spectator,
];

exports.basic.UPGRADES_TIER_1 = [
  exports.twin,
  exports.sniper,
  exports.machine,
  exports.flank,
  exports.director,
  exports.healer,
  exports.pound,
  exports.morebasic2,
];
exports.basic.UPGRADES_TIER_3 = [];

exports.basic.UPGRADES_TIER_2 = [exports.smash];
exports.smash.UPGRADES_TIER_3 = [
  exports.megasmash,
  exports.spike,
  exports.autosmash,
  exports.weirdspike,
  exports.landmine,
  exports.bonker,
  exports.jumpsmash,
];
exports.healer.UPGRADES_TIER_2 = [
exports.ambulance,
exports.healanni,
];
exports.morebasic.UPGRADES_TIER_1 = [
  exports.morebasic2,
  exports.minishot,
  exports.basicdrive,
  exports.subduer,
  exports.uzi,
  exports.pinch,
];
exports.morebasic2.UPGRADES_TIER_1 = [
  exports.basic,
  exports.trapper,
  exports.autobasic,
  exports.pelleter,
  exports.auto2,
  exports.morebasic,
];
exports.morebasic.UPGRADES_TIER_2 = [exports.single, exports.grower];
exports.morebasic.UPGRADES_TIER_3 = [exports.switcheroo];

exports.pound.UPGRADES_TIER_2 = [
  exports.destroy,
  exports.builder,
  exports.megatrapper,
  exports.artillery,
  exports.autopound,
  exports.poundhybrid,
  exports.blaster,
  exports.minihive,
  exports.spreadling,
  exports.launcher,
  exports.multishot,
  exports.flankpound,
  exports.obliter,
  exports.boxer,
];
exports.pound.UPGRADES_TIER_3 = [];
exports.destroy.UPGRADES_TIER_3 = [
  exports.anni,
  exports.hybrid,
  exports.construct,
  exports.bigmini,
  exports.shotgun2,
  exports.hiveshooter,
  exports.conq,
  exports.pyro,
  exports.blower,
  exports.megalaunch,
  exports.decent,
];
exports.poundhybrid.UPGRADES_TIER_3 = [
  exports.hybrid,
  exports.crosshybrid,
  exports.shieldhybrid,
  exports.hivebrid,
];
exports.minihive.UPGRADES_TIER_3 = [
  exports.hiveshooter,
  exports.autohive,
  exports.doubleminihive,
  exports.beesile,
  exports.hivebrid,
  exports.beekeep,
  exports.hivedrive,
];
exports.flankpound.UPGRADES_TIER_3 = [exports.pentapound, exports.eliminator];
exports.boxer.UPGRADES_TIER_3 = [
  exports.facade,
  exports.brawler,
  exports.tackle,
];
exports.obliter.UPGRADES_TIER_3 = [
  exports.compound,
  exports.twobliter,
  exports.butcher,
  exports.eliminator,
  exports.bigmini,
  exports.sidewind,
  exports.devas,
];

exports.twin.UPGRADES_TIER_2 = [
  exports.double,
  exports.bent,
  exports.gunner,
  exports.hexa,
  exports.triple,
  exports.hewntwin,
  exports.boxer,
  exports.rocket,
  exports.autotwin,
  exports.twinhybrid,
];
exports.twin.UPGRADES_TIER_3 = [exports.dual, exports.musket];
exports.double.UPGRADES_TIER_3 = [
  exports.tripletwin,
  exports.split,
  exports.autodouble,
  exports.bentdouble,
  exports.bulwark,
  exports.twingunner,
];
exports.bent.UPGRADES_TIER_3 = [
  exports.autobent,
  exports.penta,
  exports.spread,
  exports.hepta,
  exports.benthybrid,
  exports.bentdouble,
  exports.bentliner,
  exports.pepper,
];
exports.hewntwin.UPGRADES_TIER_3 = [
  exports.split,
  exports.bentdouble,
  exports.hewntrap,
];
exports.rocket.UPGRADES_TIER_3 = [
  exports.firework,
  exports.carnation,
  exports.manofwar,
  exports.booster,
];
exports.gunner.UPGRADES_TIER_3 = [
  exports.autogunner,
  exports.rimfire,
  exports.nailgun,
  exports.battery,
  exports.splithybrid,
  exports.auto4,
  exports.machinegunner,
  exports.overgunner,
  exports.hurricane,
  exports.pirate,
  exports.twingunner,
  exports.buttbuttin,
  exports.blower,
];
exports.triple.UPGRADES_TIER_3 = [
  exports.quint,
  exports.quivhybrid,
  exports.mortar,
  exports.carrier,
  exports.penta,
  exports.spread,
  exports.autotriple,
  exports.hiveshooter,
  exports.pepper,
  exports.hepta,
];

exports.sniper.UPGRADES_TIER_2 = [
  exports.assassin,
  exports.hunter,
  exports.mini,
  exports.builder,
  exports.autosniper,
  exports.rifle,
  exports.snipebrid,
  exports.smallstalk,
  exports.obliter,
];
exports.sniper.UPGRADES_TIER_3 = [exports.bushwhack];
exports.assassin.UPGRADES_TIER_3 = [
  exports.ranger,
  exports.divvhybrid,
  exports.falcon,
  exports.autoassassin,
  exports.sniper3,
  exports.stalker,
  exports.buttbuttin,
];
exports.hunter.UPGRADES_TIER_3 = [
  exports.preda,
  exports.poach,
  exports.sidewind,
  exports.dual,
  exports.autohunter,
  exports.ordnance,
  exports.devas,
];
exports.builder.UPGRADES_TIER_3 = [
  exports.construct,
  exports.autobuilder,
  exports.shieldhybrid,
  exports.engineer,
  exports.tritrap,
  exports.conq,
  exports.dualbuild,
  exports.airhorn,
];
exports.smallstalk.UPGRADES_TIER_3 = [exports.stalker, exports.autohuntress];
exports.flanksniper.UPGRADES_TIER_3 = [exports.flankass, exports.pentsniper];
exports.rifle.UPGRADES_TIER_3 = [
  exports.musket,
  exports.armsman,
  exports.tomahawk,
  exports.osama,
  exports.crossbow,
  exports.tally,
  exports.trencher,
];

exports.machine.UPGRADES_TIER_2 = [
  exports.artillery,
  exports.mini,
  exports.gunner,
  exports.automachine,
  exports.machbrid,
  exports.blaster,
  exports.trimach,
  exports.gatling,
  exports.spray,
  exports.machtrap,
];
exports.machine.UPGRADES_TIER_3 = [];
exports.artillery.UPGRADES_TIER_3 = [
  exports.mortar,
  exports.battery,
  exports.spread,
  exports.beekeep,
  exports.autoarti,
  exports.crosshybrid,
  exports.ordnance,
];
exports.mini.UPGRADES_TIER_3 = [
  exports.stream,
  exports.nailgun,
  exports.bigmini,
  exports.hybridmini,
  exports.autominigun,
  exports.barricade,
  exports.miniwhack,
  exports.floodmini,
  exports.taser,
];
exports.blaster.UPGRADES_TIER_3 = [
  exports.pyro,
  exports.volcano,
  exports.bigmini,
  exports.autoblaster,
  exports.triblaster,
];
exports.spray.UPGRADES_TIER_3 = [
  exports.searcher,
  exports.machinegunner,
  exports.sprayflame,
];
exports.gatling.UPGRADES_TIER_3 = [
  exports.squirter,
  exports.nailgun,
  exports.stream,
];
exports.trimach.UPGRADES_TIER_3 = [
  exports.twingunner,
  exports.pentmach,
  exports.triblaster,
];

exports.flank.UPGRADES_TIER_2 = [
  exports.hexa,
  exports.tri,
  exports.auto3,
  exports.flanktrap,
  exports.pellguard,
  exports.bird,
  exports.autoflank,
  exports.flanksniper,
  exports.flankbrid,
  exports.threetrap,
];
exports.bird.UPGRADES_TIER_3 = [
  exports.falcon,
  exports.eagle,
  exports.robin,
  exports.sparrow,
  exports.taser,
];
exports.tri.UPGRADES_TIER_3 = [
  exports.fighter,
  exports.booster,
  exports.twintri,
  exports.autotri,
  exports.trihybrid,
  exports.falcon,
  exports.eagle,
  exports.bomber,
  exports.brutalizer,
  exports.taser,
];
exports.hexa.UPGRADES_TIER_3 = [
  exports.octo,
  exports.hurricane,
  exports.hexatrap,
  exports.heptatrap,
  exports.quadtrapper,
];
exports.auto3.UPGRADES_TIER_3 = [
  exports.auto5,
  exports.heavy3,
  exports.auto4,
  exports.sniper3,
  exports.machine3,
  exports.autoauto,
  exports.mixed3,
  exports.banshee,
];
exports.flanktrap.UPGRADES_TIER_3 = [
  exports.bushwhack,
  exports.guntrap,
  exports.conq,
  exports.fortress,
  exports.bomber,
  exports.bulwark,
  exports.viking,
  exports.armsman,
  exports.autoflanktrap,
  exports.miniwhack,
  exports.peashoot,
];

exports.director.UPGRADES_TIER_2 = [
  exports.overseer,
  exports.cruiser,
  exports.underseer,
  exports.lilfact,
  exports.autodire,
  exports.captain,
  exports.master,
];
exports.director.UPGRADES_TIER_3 = [exports.manager];
exports.lilfact.UPGRADES_TIER_3 = [
  exports.factory,
  exports.autolilfact,
  exports.twinfact,
  exports.machinefact,
  exports.facility,
];
exports.overseer.UPGRADES_TIER_3 = [
  exports.overlord,
  exports.overtrap,
  exports.overgunner,
  exports.autoover,
  exports.hybrid,
  exports.banshee,
  exports.drive,
];
exports.underseer.UPGRADES_TIER_3 = [
  exports.necromancer,
  exports.triseer,
  exports.autounderseer,
  exports.maleficitor,
  exports.undertrap,
  exports.underpell,
  exports.undershot,
];
exports.master.UPGRADES_TIER_3 = [
  exports.commander,
  exports.automaster,
  exports.banshee,
];
exports.captain.UPGRADES_TIER_3 = [exports.drive, exports.facility];
exports.cruiser.UPGRADES_TIER_3 = [
  exports.carrier,
  exports.battleship,
  exports.fortress,
  exports.sounder,
  exports.viking,
  exports.autocruiser,
  exports.stingray,
  exports.pirate,
  exports.commander,
  exports.tackle,
];

exports.trapper.UPGRADES_TIER_2 = [
  exports.builder,
  exports.megatrapper,
  exports.flanktrap,
  exports.threetrap,
  exports.machtrap,
  exports.twintrap,
  exports.autotrapper,
  exports.boomer,
  exports.arsenal,
  exports.foghorn,
];
exports.trapper.UPGRADES_TIER_3 = [
  exports.guntrap,
  exports.overtrap,
  exports.barricade,
];
exports.boomer.UPGRADES_TIER_3 = [
  exports.bentboomer,
  exports.megaboomer,
  exports.autoboom,
];
exports.machtrap.UPGRADES_TIER_3 = [
  exports.spraytrap,
  exports.guntrap,
  exports.barricade,
  exports.automachtrap,
];
exports.foghorn.UPGRADES_TIER_3 = [exports.airhorn, exports.brass];
exports.megatrapper.UPGRADES_TIER_3 = [
  exports.gigatrapper,
  exports.construct,
  exports.megatritrap,
  exports.automegatrapper,
  exports.thermo,
];
exports.twintrap.UPGRADES_TIER_3 = [
  exports.dualtwintrap,
  exports.dualbuild,
  exports.bulwark,
  exports.traplet,
  exports.hexatrap,
  exports.heptatrap,
  exports.quadtrapper,
  exports.hewntrap,
  exports.autotwintrap,
];
exports.threetrap.UPGRADES_TIER_3 = [
  exports.quadtrapper,
  exports.hexatrap,
  exports.heptatrap,
  exports.tritrap,
  exports.megatritrap,
  exports.fortress,
  exports.trisenal,
];
exports.arsenal.UPGRADES_TIER_3 = [
  exports.engineer,
  exports.trisenal,
  exports.thermo,
];

exports.autobasic.UPGRADES_TIER_2 = [
  exports.auto3,
  exports.autotwin,
  exports.automachine,
  exports.autosniper,
  exports.autoflank,
  exports.autodire,
  exports.autotrapper,
  exports.autopelleter,
  exports.autopound,
  exports.autoto2,
  exports.autominishot,
  exports.autopinch,
];
exports.autotwin.UPGRADES_TIER_3 = [
  exports.autodouble,
  exports.autocruiser,
  exports.autogunner,
  exports.autotriple,
  exports.autobent,
  exports.twinception,
];
exports.automachine.UPGRADES_TIER_3 = [
  exports.autogunner,
  exports.autoarti,
  exports.autominigun,
  exports.autoblaster,
];
exports.autosniper.UPGRADES_TIER_3 = [
  exports.autoassassin,
  exports.autohunter,
  exports.autohuntress,
  exports.trencher,
];
exports.autoflank.UPGRADES_TIER_3 = [
  exports.autotri,
  exports.hexatrap,
  exports.autoflanktrap,
];
exports.autodire.UPGRADES_TIER_3 = [
  exports.autoover,
  exports.autocruiser,
  exports.autolilfact,
  exports.autounderseer,
  exports.automaster,
];
exports.autotrapper.UPGRADES_TIER_3 = [
  exports.autobuilder,
  exports.hexatrap,
  exports.autoflanktrap,
  exports.automegatrapper,
  exports.autotwintrap,
  exports.automachtrap,
  exports.autoboom,
];
exports.autopelleter.UPGRADES_TIER_3 = [
  exports.autogunner,
  exports.auto4,
  exports.autocruiser,
];
exports.autopound.UPGRADES_TIER_3 = [
  exports.autodestroy,
  exports.autoarti,
  exports.autobuilder,
  exports.autohive,
  exports.butcher,
];

exports.pelleter.UPGRADES_TIER_2 = [
  exports.sailor,
  exports.borer,
  exports.storm,
  exports.gunner,
  exports.cruiser,
  exports.autopelleter,
  exports.tripelleter,
  exports.screwdriver,
  exports.pellguard,
];
exports.pellguard.UPGRADES_TIER_3 = [exports.blower, exports.buttbuttin];
exports.tripelleter.UPGRADES_TIER_3 = [
  exports.twingunner,
  exports.battleship,
  exports.tripletwin,
  exports.hurricane,
];
exports.screwdriver.UPGRADES_TIER_3 = [
  exports.nailgun,
  exports.machinegunner,
  exports.prism,
];
exports.sailor.UPGRADES_TIER_3 = [
  exports.swashbuck,
  exports.merchant,
  exports.prism,
  exports.pirate,
];
exports.borer.UPGRADES_TIER_3 = [
  exports.binocular,
  exports.autobor,
  exports.nailgun,
  exports.sounder,
];
exports.storm.UPGRADES_TIER_3 = [exports.hurricane, exports.octo];

exports.basicdrive.UPGRADES_TIER_2 = [
  exports.megadrive,
  exports.flankdrive,
  exports.lilfact,
  exports.launcher,
  exports.captain,
  exports.arsenal,
];
exports.megadrive.UPGRADES_TIER_3 = [
  exports.gigadrive,
  exports.twodrive,
  exports.hivedrive,
];
exports.flankdrive.UPGRADES_TIER_3 = [exports.hexadrive];
exports.launcher.UPGRADES_TIER_3 = [
  exports.skimmer,
  exports.twister,
  exports.sidewind,
  exports.rocketeer,
  exports.prome,
  exports.bentlaunch,
  exports.megalaunch,
];
exports.auto2.UPGRADES_TIER_2 = [
  exports.auto3,
  exports.autoto2,
  exports.heavy2,
  exports.machine2,
  exports.sniper2,
  exports.twin2,
];
exports.autoto2.UPGRADES_TIER_3 = [
  exports.autoauto,
  exports.autoheavy,
  exports.automachine2,
  exports.autosniper2,
  exports.autotwin2,
];
exports.heavy2.UPGRADES_TIER_3 = [
  exports.giga2,
  exports.heavy3,
  exports.autoheavy,
];
exports.machine2.UPGRADES_TIER_3 = [exports.machine3, exports.automachine2];
exports.sniper2.UPGRADES_TIER_3 = [exports.sniper3, exports.autosniper2];
exports.twin2.UPGRADES_TIER_3 = [exports.auto4, exports.autotwin2];

exports.twinhybrid.UPGRADES_TIER_3 = [
  exports.benthybrid,
  exports.quivhybrid,
  exports.splithybrid,
];
exports.snipebrid.UPGRADES_TIER_3 = [
  exports.divvhybrid,
  exports.poach,
  exports.tally,
];
exports.machbrid.UPGRADES_TIER_3 = [
  exports.crosshybrid,
  exports.hybridmini,
  exports.splithybrid,
];
exports.flankbrid.UPGRADES_TIER_3 = [exports.trihybrid];
exports.minishot.UPGRADES_TIER_2 = [
  exports.artillery,
  exports.harasser,
  exports.bent,
  exports.spreadling,
  exports.multishot,
  exports.autominishot,
  exports.hewntwin,
];
exports.autominishot.UPGRADES_TIER_3 = [
  exports.autoarti,
  exports.autobent,
  exports.autospread,
  exports.automultish,
];
exports.spreadling.UPGRADES_TIER_3 = [
  exports.spread,
  exports.autospread,
  exports.spreadflank,
  exports.crossbow,
];
exports.multishot.UPGRADES_TIER_3 = [exports.shotgun2, exports.automultish];
exports.harasser.UPGRADES_TIER_3 = [
  exports.mortar,
  exports.penta,
  exports.spread,
  exports.hepta,
  exports.quint,
];

exports.subduer.UPGRADES_TIER_2 = [
  exports.hunter,
  exports.launcher,
  exports.mini,
  exports.spray,
];

exports.uzi.UPGRADES_TIER_2 = [
  exports.mini,
  exports.spray,
  exports.hunter,
  exports.launcher,
  exports.screwdriver,
];
exports.uzi.UPGRADES_TIER_3 = [exports.bentliner];

exports.grower.UPGRADES_TIER_3 = [
  exports.megagrow,
  exports.twingrower,
  exports.machgrow,
  exports.growtrapper,
  exports.sprayflame,
];

exports.basicrang.UPGRADES_TIER_2 = [exports.boomer, exports.twinrang];
exports.twinrang.UPGRADES_TIER_3 = [exports.ranglet, exports.bentboomer];

exports.pinch.UPGRADES_TIER_2 = [
  exports.cruiser,
  exports.minihive,
  exports.sailor,
  exports.autopinch,
];
exports.autopinch.UPGRADES_TIER_3 = [
  exports.autocruiser,
  exports.autohive,
  exports.swashbuck,
];

exports.switcheroo.UPGRADES_TIER_2 = [exports.switcherootw];
exports.switcherootw.UPGRADES_TIER_2 = [exports.switcherooma];
exports.switcherooma.UPGRADES_TIER_2 = [exports.switcheroosn];
exports.switcheroosn.UPGRADES_TIER_2 = [exports.switcheroofl];
exports.switcheroofl.UPGRADES_TIER_2 = [exports.switcheroopo];
exports.switcheroopo.UPGRADES_TIER_2 = [exports.switcheroodi];
exports.switcheroodi.UPGRADES_TIER_2 = [exports.switcherootr];
exports.switcherootr.UPGRADES_TIER_2 = [exports.switcheroopl];
exports.switcheroopl.UPGRADES_TIER_2 = [exports.switcheroopr];
exports.switcheroopr.UPGRADES_TIER_2 = [exports.switcheroo];

exports.single.UPGRADES_TIER_3 = [exports.twingle];

exports.closedaarena.UPGRADES_TIER_2 = [
  exports.twinclose,
  exports.tripleclose,
  exports.machineclose,
  exports.megaarena,
  exports.arenasmash,
  exports.killarena,
  exports.spraycloser,
  exports.autocloser,
  exports.chungus,
  exports.pentaclose,
  exports.octoclose,
];

exports.tankstestbed.UPGRADES_TIER_1 = [
  exports.ultraskimmer,
  exports.bigstream,
  exports.spectate,
  exports.quadtank,
  exports.megaovertrap,
  exports.flamethrower,
  exports.testbed2,
  exports.basic,
];

exports.testbed2.UPGRADES_TIER_1 = [
  exports.tankstestbed,
  exports.guntrapfact,
  exports.boostfact,
  exports.bombfact,
  exports.swarfact,
  exports.omegatrapper,
  exports.healer,
  exports.napalm,
  exports.auto10,
  exports.blunder,
  exports.basic,
  exports.testbed3,
];

exports.bosstestbed.UPGRADES_TIER_2 = [
  exports.testbed,
  exports.elite_sprayer,
  exports.elite_gunner,
  exports.elite_destroyer,
  exports.elite_engineer,
  exports.elite_builder,
  exports.elite_artillery,
  exports.palisade,
  exports.elitepenta,
  exports.summoner,
  exports.fallenbooster,
  exports.nestkeeper,
  exports.defender,
  exports.swp11,
  exports.bosstestbed2,
];

exports.bosstestbed2.UPGRADES_TIER_2 = [
  exports.bosstestbed,
  exports.fallbattle,
  exports.fallord,
  exports.fallmortar,
  exports.fallfighter,
  exports.fallanni,
  exports.elite_nail,
  exports.guardian,
  exports.pig7,
  exports.xe3,
  exports.polygoner,
  exports.awa,
  exports.fallen_hybrid,
  exports.www,
  exports.bosstestbed3,
];
exports.bosstestbed3.UPGRADES_TIER_2 = [
    exports.outrage,
    exports.foremost,
];
exports.sentrytestbed.UPGRADES_TIER_2 = [
  exports.sentrySwarm,
  exports.sentryGun,
  exports.sentryTrap,
  exports.oversentry,
  exports.sentryMachine,
  exports.sentryHive,
  exports.sentryBent,
  exports.skimlite,
  exports.wallet,
  exports.fatsentry,
];

exports.misctestbed.UPGRADES_TIER_2 = [
  exports.baseProtector,
  exports.baseGunTurret,
  exports.sentryspawner,
  exports.crasherSpawner,
  exports.platinumcrasher,
  exports.closedaarena,
  exports.sancdefender,
  exports.overfact,
  exports.mothershipmini,
];

exports.developer.UPGRADES_TIER_2 = [
  exports.testbed,
  exports.hiveshooter,
  exports.spectator,
  exports.basic,
  exports.freyja,
  exports.servclean,  
  exports.undercovercop,
];

exports.testbed3.UPGRADES_TIER_1 = [
  exports.testbed2,
  exports.fnyoom,
  exports.gigasmash,
  exports.terasmash,
  exports.bonkermini,
  exports.decali,
  exports.overdestroy,
  exports.portbase,
  exports.dustbowl,
  exports.basic,
  exports.testbed4,
];

exports.testbed4.UPGRADES_TIER_1 = [
  exports.testbed3,
  exports.supershooter,
  exports.warden,
  exports.hepta,
  exports.megamortar,
  exports.blocker,
  exports.shotgunbig,
  exports.autolord,
  exports.sniper5,
  exports.megagin,
  exports.basic,
  exports.testbed5,
];

exports.testbed5.UPGRADES_TIER_1 = [
  exports.testbed4,
  exports.ubertrap,
  exports.overclock,
  exports.boomercept,
  exports.ripple,
  exports.tinybasic,
  exports.creator,
  exports.swarmcept,
  exports.swarmcept2,
  exports.skim3,
  exports.basic,
  exports.testbed6,
];

exports.testbed6.UPGRADES_TIER_1 = [
  exports.testbed5,
  exports.trapshot,
  exports.taser,
  exports.hiker,
  exports.applier,
  exports.plower,
  exports.spitfire,
  exports.bash,
  exports.vulcan,
  exports.nuker,
  exports.dragon,
  exports.testbed7,
];

exports.testbed7.UPGRADES_TIER_1 = [
  exports.testbed6,
  exports.giga3,
  exports.warrior,
  exports.autofight,
  exports.skater,
  exports.autosurf,
  exports.cancertank,
  exports.plot,
  exports.overship,
];

exports.removedtestbed.UPGRADES_TIER_1 = [
  exports.testbed,
  exports.duomach,
  exports.twinpelleter,
  exports.laserbeam,
  exports.smash2,
  exports.whirler,
  exports.basicrang,
];
