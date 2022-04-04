// GUN DEFINITIONS
const combineStats = function(arr) {
    try {
    // Build a blank array of the appropiate length
    let data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    arr.forEach(function(component) {
        for (let i=0; i<data.length; i++) {
            data[i] = data[i] * component[i];
        }
    });
    return {
        reload:     data[0],
        recoil:     data[1],
        shudder:    data[2],
        size:       data[3],
        health:     data[4],
        damage:     data[5],
        pen:        data[6],
        speed:      data[7],
        maxSpeed:   data[8],
        range:      data[9],
        density:    data[10],
        spray:      data[11],
        resist:     data[12],
    };
    } catch(err) {
        console.log(err);
        console.log(JSON.stringify(arr));
    }
};
const skillSet = (() => {
    let config = require('../config.json');
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
    return args => {
        let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//skill set
        for (let s in args) {
            if (!args.hasOwnProperty(s)) continue;
            skills[skcnv[s]] = Math.round(config.MAX_SKILL * args[s]);
        }
        return skills;
    };
})();

const g = { // Gun info here 
    trap:               [36,    1,     0.25,   0.6,    1,      0.75,   1,      5,      1,      1,      1,      15,     3], 
  autodrone:             [1,     1,     1,      1,      1.25,   0.86,   1,      1,      0.85,   99999999999999999999999999999999999999999999999999999999999999999,      1,      1,      1.1],
  big: [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    elitemurder:        [2.2,   2,     0.5,    1,      2,      4,      1.2,    0.65,   0.5,    1,      2,      1,      3],
    sniperX:             [1.85,  1,     0.25,   1,      1,      0.9,    1.1,    0.65,    1.5,    1,      1.5,    0.2,    1.15],
    sniperXX:             [7.2,  1,     0.25,   1,      1,      0.95,    1.1,    0.7,    1.5,    1,      1.5,    0.2,    1.15],
    trap2:               [90,    1,     0.25,   0.6,    1,      0.75,   1,      5,      1,      1,      1,      15,     3], 
    swarm:              [18,    0.25,  0.05,   0.4,    1,      0.75,   1,      4,      1,      1,      1,      5,      1],
  manybee:              [9,    0.25,  0.05,   0.4,    1,      0.2,   1,      4,      1,      1,      1,      5,      1],
  manybee2:              [0.7,    0.25,  0.05,   0.4,    1,      0.2,   1,      4,      1,      1,      1,      5,      1],  
  swarm2: [14, 0.25, 0.05, 0.4, 1, 0.65, 1, 4, 1, 1, 1, 5, 1],
  swarm3: [14, 0.25, 0.05, 0.4, 1, 0.35, 1, 4, 1, 1, 1, 5, 1],
  swarms:              [60,    0.25,  0.05,   0.4,    1,      0.75,   1,      4,      1,      1,      1,      5,      1],
    drone:              [50,    0.25,  0.1,    0.6,    1,      1,      1,      2,      1,      1,      1,      0.1,    1],
    dronesanctuary:      [50,    0.25,  0.1,    0.6,    1,      1,      1,      2.9,      1,      1,      1,      0.1,    1],
    droneboss:          [70,    0.25,  0.1,    0.6,    1,      4,      1,     0.45,      1,      1,      1,      0.1,    1],
    pound3:             [0.5,     0,     1,      1,      1,      0.9,      1,      0.85,   0.8,    1,      1.5,    1,      1.15], 
    summoner:           [2,     0,  0.1,    0.6,    1,      1,      1,      2,      1,      1,      1,      0.1,    1],
    stream3:            [0.6,   0,   1,      1,      1,      1.4,   1,      0.75,   1,      1,      1,      1,      1],
  stream3celes:            [0.82,   0,   1,      1,      1,      1.4,   1,      0.75,   1,      1,      1,      1,      1],
  stream4:            [1,   0,   1,      1,      1,      0.95,   1,      0.75,   1,      1,      1,      1,      1],
    factory:            [60,    1,     0.1,    0.7,    1,      0.75,   1,      3,      1,      1,      1,      0.1,    1], 
    basic:              [18,    1.4,   0.1,    1,      1,      0.75,   1,      4.5,    1,      1,      1,      15,     1],
  nospeed:          [1,     1,     1,      1,      1,      1,      1,      0,    0.5,    1,      1,      1,      1],
          almostnospeed:          [0.1,     1,     1,      1,      1,      1,      1,      0.1,    0.5,    1,      1,      1,      1],
    spraybruh:              [18,    1.4,   0.1,    1,      1,      0.75,   1,      4.5,    1,      1,      1,      25,     1],
  sussyslow:              [1.7,    1.4,   0.1,    1,      1,      0.75,   1,      0.15,    1,      1,      1,      15,     1],
  healerx:              [18,    1.4,   0.1,    1,      1,      0.86,   1,      0.45,    1,      1,      1,      0.1,     1],
  fakeminions:              [18,    1.4,   0.1,    1,      1,      0.2,   1,      4.5,    1,      1,      1,      15,     1],
      space:              [18,    1.4,   0.1,    1,      1,      0.75,   1,      0,    1,      1,      1,      15,     1],
    BLM:              [18,    1.4,   0.1,    1,      1,      0.75,   1,      2.5,    1,      1,      1,      15,     1],
    basicxx:              [4,    1.4,   0.1,    1,      1,      0.75,   1,      0.1,    1,      1,      0.1,      15,     1],
    theia:         [3.2,  1,     0.25,   1,      1.15,   1,      1.1,    1,   1.18,   1,      3,      1,      1.3],
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    blank:              [1,     1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1],
        spam:           [1.1,   1,     1,      1.05,   1,      1.1,    1,      0.9,    0.7,    1,      1,      1,      1.05],
        spamX:           [0.46,   1,     1,      1.05,   1,      1.9,    1,      0.5,    0.7,    1,      1,      1,      1.05],
        spamXL:           [0.7,   1,     1,      1.05,   1,      0.01,    1,      100000,    0.7,    1,      1,      1,      1.05],
        minion:         [1,     1,     2,      1,      0.4,    0.4,    1.2,    1,      1,      0.75,   1,      2,      1], 
        minion2:         [2.3,     1,     2,      1,      0.4,    0.5,    1.2,    1,      1,      0.75,   1,      2,      1],
        minion3:         [1.2,     1,     2,      1,      0.4,    1,    1.2,    1,      1,      0.75,   1,      2,      1],
        single:         [1.25,  1,     1,      1,      1,      1.3,      1,      1,   1,      1,      1,      1,      1],
  singlestream:         [0.08,  1,     1,      1,      1,      1.75,      1,      1.05,   1,      1,      1,      0.001,      1],
    sniper:             [1.35,  1,     0.25,   1,      1,      0.8,    1.1,    1.5,    1.5,    1,      1.5,    0.2,    1.15],
  sniperswarm:             [3.5,  1,     0.25,   1,      1,      0.8,    1.1,    1.5,    1.5,    1,      1.5,    0.2,    1.15],
  sniperswarm2:             [3.5,  1,     0.25,   1,      1,      1.75,    1.1,    0.65,    1.5,    1,      1.5,    0.2,    1.15],
  redi:                 [35,  12,     0.25,     1,      1,     40,     15,    1.3,    1.6,    1,      1.5,    0.1,    1.15],
        rifle:          [0.8,   0.8,   1.5,    1,      0.8,    0.8,    0.9,    1,      1,      1,      1,      2,      1],     
        assass:         [1.65,  1,     0.25,   1,      1.15,   0.75,      1.1,    1.18,   1.18,   1,      3,      1,      1.3],
  assassx:         [2.45,  1,     0.25,   1,      1.15,   0.85,      1.1,    1.18,   1.38,   4,      3,      1,      1.3],
  assassswarm:         [4.7,  1,     0.25,   1,      1.15,   1,      1.1,    1.18,   1.18,   1,      3,      1,      1.3],
    assassswarm2:         [4.7,  1,     0.25,   1,      1.15,   2,      1.1,    0.7,   1.18,   1,      3,      1,      1.3],
        hunter:         [1.5,   0.7,   1,      0.95,   1,      0.9,    1,      1.1,    0.8,    1,      1.2,    1,      1.15], 
            hunter2:    [1,     1,     1,      0.9,    2,      0.5,    1.5,    1,      1,      1,      1.2,    1,      1.1], 
            preda:      [1.4,   1,     1,      0.8,    1.5,    0.9,    1.2,    0.9,    0.9,    1,      1,      1,      1],   
            snake:      [0.4,   1,     4,      1,      1.5,    0.9,    1.2,    0.2,    0.35,   1,      3,      6,      0.5],   
            sidewind:   [1.5,   2,     1,      1,      1.5,    1.7,    1,      0.15,   0.5,    1,      1,      1,      1], 
            rocketeer:   [2.5,   0.5,     1,      1,      1.5,    1.4,    1,      0.15,   0.5,    1,      1,      1,      1],
             rocketeerx:   [4.6,   0.5,     1,      1,      1.5,    1.4,    1,      0.3,   0.5,    1,      1,      1,      1],
            snakeskin:  [0.6,   1,     2,      1,      0.5,    0.5,    1,      1,      0.2,    0.4,    1,      5,      1],
  snakeskin2:  [0.3,   1,     2,      1,      0.5,    1,    1,      1,      0.2,    0.4,    1,      5,      1],
    mach:               [0.5,   0.8,   1.7,    1,      0.7,    0.7,    1,      1,      0.8,    1,      1,      2.5,    1],
  mach2:               [1.15,   0.8,   1.7,    1,      0.7,    0.6,    1,      1,      0.8,    1,      1,      2.5,    1],
        blaster:        [1,     1.2,   1.25,   1.1,    1.5,    1,      0.6,    0.8,    0.33,   0.6,    0.5,    1.5,    0.8], 
        chain:          [1.25,  1.33,  0.8,    1,      0.8,    1,      1.1,    1.25,   1.25,   1.1,    1.25,   0.5,    1.3], 
        mini:           [1.25,  0.6,   1,      0.8,    0.55,   0.45,   1.25,   1.33,   1,      1,      1.25,   0.5,    1.1], 
            stream:     [1.1,   0.6,   1,      1,      1,      0.65,   1,      1.24,   1,      1,      1,      1,      1],
  gay:     [1.1,   0.6,   1,      1,      1,      0.13,   1,      1.24,   1,      1,      1,      1,      1],
            streamx:    [1.1,   2.3,   1,      1,      1,      0.65,   1,      1.24,   1,      1,      1,      1,      1],
  streamgay:    [1.1,   1.5,   1,      1,      1,      0.65,   1,      1.24,   1,      1,      1,      1,      1],
        shotgun:        [8,     0.4,   1,      1.5,    1,      0.4,    0.8,    1.8,    0.6,    1,      1.2,    1.2,    1], 
    flank:              [1,     1.2,   1,      1,      1.02,   0.81,   0.9,    1,      0.85,   1,      1.2,    1,      1],
  flank2:              [1,     1.2,   1,      1,      1.02,   0.31,   0.9,    1,      0.85,   1,      1.2,    1,      1],
        tri:            [1,     0.9,   1,      1,      0.9,    1,      1,      0.8,    0.8,    0.6,    1,      1,      1],  
            trifront:   [1,     0.2,   1,      1,      1,      1,      1,      1.3,    1.1,    1.5,    1,      1,      1],  
            thruster:   [1,     1.5,   2,      1,      0.5,    0.5,    0.7,    1,      1,      1,      1,      0.5,    0.7],
           thrusterx:   [0.4,     1.5,   2,      1,      0.5,    0.1,    0.7,    1,      1,      1,      1,      0.5,    0.7], 
        auto: /*pure*/  [1.8,   0.75,  0.5,    0.8,    0.9,    0.6,    1.2,    1.1,    1,      0.8,    1.3,    1,      1.25],
           auto2: /*Celestial*/  [1.8,   0.75,  0.5,    0.8,    0.9,    0.4,    1.2,    1.1,    1,      0.8,    1.3,    1,      1.25],
            five:       [1.15,  1,     1,      1,      1,      1,      1,      1.05,   1.05,   1.1,    2,      1,      1],   
            autosnipe:  [1,     1,     1,      1.4,    2,      1,      1,      1,      1,      1,      1,      1,      1],   
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */ 
    pound:              [2,     2,     1,      1,      1,      2,      1,      0.85,   0.8,    1,      1.5,    1,      1.15],
    poundsusus:         [2,     2,     1,      1,      1,      0.85,   1,       1.3,   0.8,    1,      1.5,    1,      1.15],
  poundsususs:         [1.5,     2,     1,      1,      1,      0.15,   1,       1,   0.8,    1,      1.5,    1,      1.15],
    destroysussus:      [2.2,   2,     0.5,    1,      2,      0.75,      1.2,    1,   0.5,    1,      2,      1,      3],
        destroy:        [2.2,   2,     0.5,    1,      2,      1.9,      1.2,    0.65,   0.5,    1,      2,      1,      3],
  destroyrag:        [4,   2,     0.5,    1,      2,      1.9,      1.2,    1.16,   0.5,    1,      2,      1,      3],
            anni:       [0.85,  1.25,  1,      1,      1,      0.95,      1,      1,      1,      1,      1,      1,      1],  
  annirag:       [2,  1.25,  1,      1,      1,      0.95,      1,      1.2,      1,      1,      1,      1,      1],
            hive:       [0.65,   0.8,   1,      0.8,    0.7,    0.3,    1,      1,      0.6,    1,      1,      1,      1],
        arty:           [1.2,   0.7,   1,      0.9,    1,      1,      1,      1.15,   1.1,    1,      1.5,    1,      1],
  arty123:           [1.3,   0.7,   1,      0.9,    1,      1,      1,      1.15,   1.1,    1,      1.5,    1,      1],
  arty92:           [2.5,   0.7,   1,      0.9,    1,      1.4,      1,      1.15,   1.1,    1,      1.5,    1,      1],
  arty93:           [2.5,   0.7,   1,      0.9,    1,      1.4,      1,      0.9,   1.1,    1,      1.5,    1,      1],
      arty3:           [1.6,   0.7,   1,      0.9,    1,      1.95,      1,      1.6,   1.1,    1,      1.5,    1,      1], 
            mortar:     [1.2,   1,     1,      1,      1.1,    1,      1,      0.8,    0.8,    1,      1,      1,      1],   
            spreadmain: [0.78125, 0.25, 0.5,   1,      0.5,    1,      1,   1.5/0.78, 0.9/0.78,1,      1,      1,      1], 
            spread:     [1.5,   1,     0.25,   1,      1,      1,      1,      0.7,    0.7,    1,      1,      0.25,   1],   
            skim:       [2.33,  0.8,   0.8,    0.9,    1.35,   0.8,    2,      0.3,    0.3,    1,      1,      1,      1.1],
  skim123:       [0.9,  0.8,   0.8,    0.9,    1.35,   0.8,    2,      0.3,    0.3,    1,      1,      1,      1.1],
  skim2:       [4.33,  0.8,   0.8,    0.9,    1.35,   0.8,    2,      0.3,    0.3,    1,      1,      1,      1.1], 
   skim3:       [6.33,  0.8,   0.8,    0.9,    1.35,   0.9,    2,      0.3,    0.3,    1,      1,      1,      1.1],
    twin:               [1,     0.5,   0.9,    1,      0.9,    0.7,    1,      1,      1,      1,      1,      1.2,    1],
        bent:           [1.1,   1,     0.8,    1,      0.9,    1,      0.8,    1,      1,      1,      0.8,    0.5,    1],    
        triple:         [1.2,   0.667, 0.9,    1,      0.85,   0.85,   0.9,    1,      1,      1,      1.1,    0.9,    0.95], 
  triplex:              [2.4, 0.6, 0.9,    1,      0.85,   0.65,   0.9,    1,      1,      1,      1.1,    0.9,    0.95],
  triplexx:              [2.7, 0.6, 0.9,    1,      0.85,   0.25,   0.9,    1,      1,      1,      1.1,    0.9,    0.95],
  bitsussy:              [3.3, 0.6, 0.9,    1,      0.85,   0.55,   0.9,    1,      1,      1,      1.1,    0.9,    0.95],
  verysussy:              [8, 0.6, 0.9,    1,      0.85,   0.75,   0.9,    1,      1,      1,      1.1,    0.9,    0.95],
  miniac: [15, 0.1, 0.1, 1, 1, 2, 99999999999, 4.5, 1, 1, 1, 0.1, 1],
  veryfast: [4.4, 0.1, 1, 1, 1, 3, 99999999999, 1.24, 1, 1, 1, 0.1, 1],
            quint:      [1.5,   0.667, 0.9,    1,      1,      1.2,      0.9,    1,      1,      1,      1.1,    0.9,    0.95], 
            dual:       [2,     1,     0.8,    1,      1.5,    1,      1,      1.3,    1.1,    1,      1,      1,      1.25], 
        double:         [1,     1,     1,      1,      1,      0.9,    1,      1,      1,      1,      1,      1,      1],
            hewn:       [1.25,  1.5,   1,      1,      0.9,    0.85,   1,      1,      0.9,    1,      1,      1,      1],
        puregunner:     [1,     0.25,  1.5,    1.2,    1.35,   0.25,   1.25,   0.8,    0.65,   1,      1.5,    1.5,    1.2],
  puregunner2:     [4.3,     0.25,  1.5,    1.2,    1.35,   0.23,   1.25,   0.8,    0.65,   1,      1.5,    1.5,    1.2],
            machgun:    [0.66,  0.8,   2,      1,      1,      0.75,   1,      1.2,    0.8,    1,      1,      2.5,    1], 
    gunner:             [1.25,  0.25,  1.5,    1.1,    1,      0.35,   1.35,   0.9,    0.8,    1,      1.5,    1.5,    1.2],
  gunner2:             [1.35,  0.25,  1.5,    1.1,    1,      0.35,   1.35,   0.9,    0.8,    1,      1.5,    1.5,    1.2],
        power:          [1,     1,     0.6,    1.2,    1,      1,      1.25,   2,      1.7,    1,      2,      0.5,    1.5], 
            nail:       [0.85,  2.5,   1,      0.8,    1,      0.7,    1,      1,      1,      1,      2,      1,      1],       
        fast:           [1,     1,     1,      1,      1,      1,      1,      1.2,    1,      1,      1,      1,      1], 
    turret:             [2,     1,     1,      1,      0.8,    0.6,    0.7,    1,      1,      1,      0.1,    1,      1], 
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    battle:             [1,     1,     1,      1,      1.25,   1.15,   1,      1,      0.85,   1,      1,      1,      1.1],
  battle3:             [1,     1,     1,      1,      1.25,   0.4,   1,      1,      0.85,   1,      1,      1,      1.1],
  battle2:             [1,     1,     1,      1,      1.25,   0.76,   1,      1,      0.85,   1,      1,      1,      1.1],
  battleX:             [1.4,     1,     1,      1,      1.25,   0.7,   1,      1,      0.85,   1,      1,      1,      1.1],
  swarmX:              [23,    0.25,  0.05,   0.4,    1,      0.5,   1,      4,      1,      1,      1,      5,      1], 
  swarmXX:              [35,    0.25,  0.05,   0.4,    1,      0.5,   1,      4,      1,      1,      1,      5,      1], 
        bees:           [1.3,   1,     1,      1.4,    1,      1.5,    0.5,    3,      1.5,    1,      0.25,   1,      1],
        bees2:           [1.2,   1,     1,      1.4,    1,      0.87,    0.5,    3,      1.5,    1,      0.25,   1,      1],
        carrier:        [1.5,   1,     1,      1,      1,      0.8,    1,      1.3,    1.2,    1.2,    1,      1,      1],
  carrier2:        [1.5,   1,     1,      1,      1,      0.4,    1,      1.3,    1.2,    1.2,    1,      1,      1],
    hexatrap:           [1.3,   1,     1.25,   1,      1,      1,      1,      0.8,    1,      0.5,    1,      1,      1],     
    block:              [1.1,   2,     0.1,    1.5,    2,      1,      1.25,   1.5,    2.5,    1.25,   1,      1,      1.25],
        construct:      [1.3,   1,     1,      0.9,    1,      1,      1,      1,      1.1,    1,      1,      1,      1], 
   constructshot:      [1.3,   1,     1,      0.9,    1,      1,      1,      1,      1.1,    1,      1,      17,      1], 
        boomerang:      [3.4,   1,     1,      1,      0.5,    0.5,    2.4,      0.75,   0.75,   1.333,  1,      1,      1], 
    over:               [1.25,  1,     1,      0.85,   0.7,    0.8,    1,      1,      0.9,    1,      2,      1,      1],
    overs:               [1.25,  1,     1,      0.85,   0.7,    1.3,    1,      1,      0.9,    1,      2,      1,      1],
  overboss:               [1.85,  1,     1,      0.85,   0.7,   4,    1,      0.65,      0.9,    1,      2,      1,      1],
        meta:           [1.333, 1,     1,      1,      1,      0.667,  1,      1,      1,      1,      1,      1,      1],   
        weak:           [2,     1,     1,      1,      0.6,    0.6,    0.8,    0.5,    0.7,    0.25,   0.3,    1,      1],   
          weaknspray:           [2,     1,     1,      1,      0.6,    0.6,    0.8,    0.5,    0.7,    0.25,   0.3,    1,      1],   
        master:         [1,     1,     1,      0.7,    0.4,    1.1,    1,      1,      1,      0.1,    0.5,    1,      1],
  fallenoverlord: [0.2, 5, 1, 0.65, 1, 1.78, 1, 1, 1, 1, 1, 1, 1],
        sunchip:        [0.1,     1,     1,      1.4,    0.5,    0.6,    0.6,    1.2,      1,      1,      0.8,    1,      1],     
    babyfactory:        [1.5,   1,     1,      1,      1,      1,      1,      1,      1.35,   1,      1,      1,      1], 
    lowpower:           [1,     1,     2,      1,      0.5,    0.5,    0.7,    1,      1,      1,      1,      0.5,    0.7], 
    halfrecoil:         [1,     0.5,   1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    morerecoil:         [1,     1.15,  1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1],
    muchmorerecoil:     [1,     1.35,  1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1],
    lotsmorrecoil:      [1,     1.8,   1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    tonsmorrecoil:      [1,     4,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    doublereload:       [0.5,   1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1],  
    morereload:         [3.5,  1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1.2,      1], 
    morereloadx:         [4.5,  1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1.2,      1], 
    halfreload:         [2,     1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
  halfreloadss:         [4,     1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1],
    norecoil: [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    lessreload:         [1.5,   1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    threequartersrof:   [1.333, 1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    morespeed:          [1,     1,     1,      1,      1,      1,      1,      1.3,    1.3,    1,      1,      1,      1], 
    bitlessspeed:       [1,     1,     1,      1,      1,      1,      1,      0.93,   0.93,   1,      1,      1,      1], 
    slow:               [1,     1,     1,      1,      1,      1,      1,      0.7,    0.7,    1,      1,      1,      1], 
    halfspeed:          [1,     1,     1,      1,      1,      1,      1,      0.5,    0.5,    1,      1,      1,      1],
    verylowspeed:          [1,     1,     1,      1,      1,      1,      1,      0.5,    0.5,    1,      1,      1,      1],
    notdense:           [1,     1,     1,      1,      1,      1,      1,      1,      1,      1,      0.1,    1,      1],
    halfrange:          [1,     1,     1,      1,      1,      1,      1,      1,      1,      0.5,    1,      1,      1], 
    fake:               [1,     1,     1,   0.00001, 0.0001,   1,      1,   0.00001,   2,      0,      1,      1,      1], 
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    op:                 [0.5,   0,   1,      1,      4,      10000,      4,      3,      2,      1,      5,      0.1,      1], 
  bakakaba:                 [0.5,   70,   1,      1,      4,      10000,      4,      3,      2,      1,      5,      0.1,      1],
    fast:               [0.5,   5,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    protectorswarm:     [5,  0.000001, 1,      1,      100,    1,      1,      1,      1,     0.5,     5,      1,      10], 
    cool:              [180,    1.4,   0.1,    1,      1,      0.075,   1,      3.5,    1,      1,      1,      115,     1],
    gunpowder:          [2,  1,     0.25,   1,      1,      0.8,    1.1,    0,    1.5,    1,      1.5,    0.2,    1.15],
  gunpowder2:          [0.4,  1,     0.25,   1,      1,      0.9,    1.1,    0,    1.5,    1,      1.5,    0.2,    1.15],
      thread:             [35,     1,     1,      1,      1,    1,    1,    10,      1,      500,      0.1,    1,      1], 
      lowrange:              [10,    1.4,   0.1,    1,      1,      0.75,   1,      4.5,    1,      0.5,      1,      15,     1],
};

const dfltskl = 8; //Skill point cap (regular)
let smshskl = 12; //skill points for smashers
let susskl = 15; // SMACK
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
    NAME: '',
    LABEL: 'Unknown Entity',
    TYPE: 'unknown',
    DAMAGE_CLASS: 0, // 0: def, 1: food, 2: tanks, 3: obstacles
    DANGER: 0,
    VALUE: 0,
    SHAPE: 0,
    COLOR: 16,    
    INDEPENDENT: false,
    CONTROLLERS: ['doNothing'],    
    HAS_NO_MASTER: false,
    MOTION_TYPE: 'glide', // motor, swarm, chase
    FACING_TYPE: 'toTarget', // turnWithSpeed, withMotion, looseWithMotion, toTarget, looseToTarget
    DRAW_HEALTH: false,
    DRAW_SELF: true,
    DAMAGE_EFFECTS: true,
    RATEFFECTS: true,
    MOTION_EFFECTS: true,
    INTANGIBLE: false,
    ACCEPTS_SCORE: true,
    GIVE_KILL_MESSAGE: false,
    CAN_GO_OUTSIDE_ROOM: false,
    HITS_OWN_TYPE: 'normal', // hard, repel, never, hardWithBuffer
    DIE_AT_LOW_SPEED: false,
    DIE_AT_RANGE: false,
    CLEAR_ON_MASTER_UPGRADE: false,
    PERSISTS_AFTER_DEATH: false,
    VARIES_IN_SIZE: false,
    HEALTH_WITH_LEVEL: true,
    CAN_BE_ON_LEADERBOARD: true,
    HAS_NO_RECOIL: false,
    AUTO_UPGRADE: 'none',
    BUFF_VS_FOOD: false,
    OBSTACLE: false,
    CRAVES_ATTENTION: false,
    NECRO: false,
    UPGRADES_TIER_1: [],
    UPGRADES_TIER_2: [],
    UPGRADES_TIER_3: [],
    SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    LEVEL: 0,
    SKILL_CAP: [dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl],
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
    TYPE: 'food',
    DAMAGE_CLASS: 1,
    CONTROLLERS: ['moveInCircles'],
    HITS_OWN_TYPE: 'repel',
    MOTION_TYPE: 'drift',
    FACING_TYPE: 'turnWithSpeed',
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
const basePolgonSpeed = 1;
exports.hugePentagon = {
    PARENT: [exports.food],
    FOOD: {
        LEVEL: 5,
    },
    LABEL: 'Alpha Pentagon',
    VALUE: 15000,
    SHAPE: 5,
    SIZE: 58,
    COLOR: 14,
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 80,
        HEALTH: 300 * basePolygonHealth,
        RESIST: Math.pow(1.25, 3),
        SHIELD: 40 * basePolygonHealth,
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
    LABEL: 'Beta Pentagon',
    VALUE: 2500,
    SHAPE: 5,
    SIZE: 30,
    COLOR: 36,
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
    LABEL: 'Pentagon',
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
    LABEL: 'Triangle',
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
    LABEL: 'Square',
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
    LABEL: 'Egg',
    VALUE: 10,
    SHAPE: 0,
    SIZE: 5,
    COLOR: 36,
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
    LABEL: 'Pentagon',
    VALUE: 30000,
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
    LABEL: 'Triangle',
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
    LABEL: 'Square',
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
    LABEL: 'Gem',
    VALUE: 2000,
    SHAPE: 6,
    SIZE: 5,
    COLOR: 0,
    BODY: {
        DAMAGE: basePolygonDamage/4,
        DENSITY: 4,
        HEALTH: 10,
        PENETRATION: 2,
        RESIST: 2,
        PUSHABILITY: 0.25,
    },
    DRAW_HEALTH: true,
    INTANGIBLE: false,
};
exports.obstacle = {
  TYPE: "wall",
  DAMAGE_CLASS: 3,
  LABEL: "Rock",
  FACING_TYPE: "turnWithSpeed",
  SHAPE: 4,
  BODY: {
    PUSHABILITY: 0,
    HEALTH: 10000,
    SHIELD: 10000,
    REGEN: 1000,
    DAMAGE: 1,
    RESIST: 100,
    SPEED: 0
  },
  VALUE: 0,
  COLOR: 16,
  VARIES_IN_SIZE: false,
  GIVE_KILL_MESSAGE: true,
  ACCEPTS_SCORE: false
};
exports.mazeObstacle = {
  PARENT: [exports.obstacle],
  LABEL: "Wall",
  FACING_TYPE: "",
  SIZE: 230,
  VARIES_IN_SIZE: false,
  SHAPE: 4
};
exports.mazeObstacle2 = {
  PARENT: [exports.obstacle],
  LABEL: "Wall",
  FACING_TYPE: "",
  SIZE: 85,
  VARIES_IN_SIZE: false,
  SHAPE: 4
};
// WEAPONS
const wepHealthFactor = 0.5;
const wepDamageFactor = 1.5;
exports.bullet = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
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
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bulletsubmach = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 8 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bulletredi = {
    LABEL: 'Stabilizer Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    SHAPE: 6,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'turnWithSpeed',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.snipershards = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 2.5,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bulletlegion = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 60,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 15 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bullet3 = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 26,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.shrapnel = {
    LABEL: 'shrapnel',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
  SHAPE: 3,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 10,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bullet5 = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
  CONTROLLERS: ['alwaysFire', 'nearestDifferentMaster', 'targetSelf',],
    BODY: {
        PENETRATION: 1,
        SPEED: 1.1,
        RANGE: 180,
        DENSITY: 1.25,
        HEALTH: 90.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'turnWithSpeed',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
          GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   15,    9.5,    1.4,     7,      0,      0,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool, g.basic]),
                            TYPE: exports.shrapnel,
                    STAT_CALCULATOR: gunCalcNames.shrapnel,    
                }, }, {
            POSITION: [   15,    9.5,    1.4,     7,      0,      90,    0,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool, g.basic]),
                            TYPE: exports.shrapnel,
                    STAT_CALCULATOR: gunCalcNames.shrapnel,  
                }, },{
            POSITION: [   15,    9.5,    1.4,     7,      0,      180,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool, g.basic]),
                            TYPE: exports.shrapnel,
                    STAT_CALCULATOR: gunCalcNames.shrapnel,    
                }, }, {
            POSITION: [   15,    9.5,    1.4,     7,      0,      270,    0,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool, g.basic]),
                            TYPE: exports.shrapnel,
                    STAT_CALCULATOR: gunCalcNames.shrapnel,  
                }, },
                 { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   15,    9.5,    1.4,     7,      0,      45,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool, g.basic]),
                            TYPE: exports.shrapnel,
                    STAT_CALCULATOR: gunCalcNames.shrapnel,    
                }, }, {
            POSITION: [   15,    9.5,    1.4,     7,      0,      135,    0,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool, g.basic]),
                            TYPE: exports.shrapnel,
                    STAT_CALCULATOR: gunCalcNames.shrapnel,  
                }, },{
            POSITION: [   15,    9.5,    1.4,     7,      0,      225,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool, g.basic]),
                            TYPE: exports.shrapnel,
                    STAT_CALCULATOR: gunCalcNames.shrapnel,    
                }, }, {
            POSITION: [   15,    9.5,    1.4,     7,      0,      315,    0,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool, g.basic]),
                            TYPE: exports.shrapnel,
                    STAT_CALCULATOR: gunCalcNames.shrapnel,  
                }, },
                 { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   10,    19.5,    1.4,     7,      0,      0,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool, g.basic]),
                            TYPE: exports.shrapnel,
                    STAT_CALCULATOR: gunCalcNames.shrapnel,    
                }, }, {
            POSITION: [   10,    19.5,    1.4,     7,      0,      90,    0,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool, g.basic]),
                            TYPE: exports.shrapnel,
                    STAT_CALCULATOR: gunCalcNames.shrapnel,  
                }, },{
            POSITION: [   10,    19.5,    1.4,     7,      0,      180,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool, g.basic]),
                            TYPE: exports.shrapnel,
                    STAT_CALCULATOR: gunCalcNames.shrapnel,    
                }, }, {
            POSITION: [   10,    19.5,    1.4,     7,      0,      270,    0,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool, g.basic]),
                            TYPE: exports.shrapnel,
                    STAT_CALCULATOR: gunCalcNames.shrapnel,  
                }, },
                 { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   10,    19.5,    1.4,     7,      0,      45,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool, g.basic]),
                            TYPE: exports.shrapnel,
                    STAT_CALCULATOR: gunCalcNames.shrapnel,    
                }, }, {
            POSITION: [   10,    19.5,    1.4,     7,      0,      135,    0,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool, g.basic]),
                            TYPE: exports.shrapnel,
                    STAT_CALCULATOR: gunCalcNames.shrapnel,  
                }, },{
            POSITION: [   10,    19.5,    1.4,     7,      0,      225,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool, g.basic]),
                            TYPE: exports.shrapnel,
                    STAT_CALCULATOR: gunCalcNames.shrapnel,    
                }, }, {
            POSITION: [   10,    19.5,    1.4,     7,      0,      315,    0,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool, g.basic]),
                            TYPE: exports.shrapnel,
                    STAT_CALCULATOR: gunCalcNames.shrapnel,  
                }, },
            ]
};
exports.bulletghost = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 0,
        RANGE: 1000000000,
        DENSITY: 1.25,
        HEALTH: 0,
        DAMAGE: 0,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bulletenableai = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 0.1,
        SPEED: 1000000,
        RANGE: 10000,
        DENSITY: 1.25,
        HEALTH: 0.1,
        DAMAGE: 0,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bullet2 = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.65,
        RANGE: 200,
        DENSITY: 1.25,
        HEALTH: 999999999999 * wepHealthFactor,
        DAMAGE: 999999999999 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.bullet81273 = {
    LABEL: 'Eraser Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 2.65,
        RANGE: 30,
        DENSITY: 1.25,
        HEALTH: 999999999999999999999 * wepHealthFactor,
        DAMAGE: 999999999999999999999 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};


exports.hepullet = {
  PARENT: [exports.bullet],
  LABEL: "heal bullet",
  TYPE: "bullet",
   COLOR: 0,
   INDEPENDENT: true,
  MOTION_TYPE: "healer", 
  BODY: {
    HITS_OWN_TYPE: 'never',
    DAMAGE: -0.92 * wepDamageFactor
  }
};
exports.hpbullet = {
  PARENT: [exports.bullet],
  LABEL: "healing bullet",
  TYPE: "bullet",
   COLOR: 0,
   INDEPENDENT: true, 
  BODY: {
    HITS_OWN_TYPE: 'never',
    FACING_TYPE: 'smoothToTarget',
    DAMAGE: 0,
    RANGE: 7,
  },
  HAS_NO_RECOIL: true,
////////////
    GUNS: [{
      POSITION: [1, 20, 1, 0, 0, 360, 0.45],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic]),
        TYPE: [exports.hepullet, { PERSISTS_AFTER_DEATH: true }],
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
      }
    }]
};
exports.sanchpbullet = {
  PARENT: [exports.bullet],
  LABEL: "healing bullet",
  TYPE: "bullet",
   COLOR: 0,
   INDEPENDENT: true, 
  BODY: {
    HITS_OWN_TYPE: 'never',
    FACING_TYPE: 'smoothToTarget',
    DAMAGE: 0,
    RANGE: 21,
  },
  HAS_NO_RECOIL: true,
////////////
    GUNS: [{
      POSITION: [1, 20, 1, 0, 0, 360, 0.86],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.healerx]),
        TYPE: [exports.hepullet, { PERSISTS_AFTER_DEATH: true }],
        AUTOFIRE: true,
        MAX_CHILDREN: 1
      }
    }]
};
    exports.casing = {
        PARENT: [exports.bullet],
        LABEL: 'Shell',
        TYPE: 'swarm',
    };
exports.flare = {
  PARENT: [exports.bullet],
  LABEL: "Flare",
  SHAPE: 4,
  MOTION_TYPE: "grow",
};
exports.smoke = { 
  PARENT: [exports.bullet],
  LABEL: "test",  
  HAS_NO_RECOIL: false,
  SHAPE: 4,
  MOTION_TYPE: "shrink",
};
exports.smoke2 = {
  PARENT: [exports.bullet],
  LABEL: "test",  
  HAS_NO_RECOIL: false,
  CONTROLLERS: ['spin'],
  SHAPE: 4,
  MOTION_TYPE: "shrink",
};
exports.smoke3 = {
  PARENT: [exports.bullet],
  LABEL: "test",  
  HAS_NO_RECOIL: false,
  CONTROLLERS: ['reversespin'],
  SHAPE: 4,
  MOTION_TYPE: "shrink",
};
exports.flame = {
  PARENT: [exports.bullet],
  LABEL: "Flare",
  CONTROLLERS: ['alwaysFire'],
  HAS_NO_RECOIL: false,
  SHAPE: -8,
  MOTION_TYPE: "grow2",
  GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  6,     10,      1,      4,      0,      90,      1.33,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange, g.mach, g.sunchip, g.doublereload, g.nospeed]),
                    TYPE: exports.smoke3,
                }, }, {   
            POSITION: [  6,     10,      1,      4,      0,     180,     1,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange, g.mach, g.sunchip, g.doublereload, g.nospeed]),
                    TYPE: exports.smoke,
                }, }, {   
            POSITION: [  6,     10,      1,      4,      0,     270,     1.33,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange, g.mach, g.sunchip, g.doublereload, g.nospeed]),
                    TYPE: exports.smoke2,
                }, }, {   
            POSITION: [  6,     10,      1,      4,      0,     90,     1.66,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange, g.mach, g.sunchip, g.doublereload, g.nospeed]),
                    TYPE: exports.smoke3,
                }, }, {   
            POSITION: [  6,     10,      1,      4,      0,     180,     1.33,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange, g.mach, g.sunchip, g.doublereload, g.nospeed]),
                    TYPE: exports.smoke,
                }, },{   
            POSITION: [  6,     10,      1,      4,      0,     270,     1.66,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange, g.mach, g.sunchip, g.doublereload, g.nospeed]),
                    TYPE: exports.smoke2,
                }, }, {   
            POSITION: [  6,     10,      1,      4,      0,     35,     1.66,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange, g.mach, g.sunchip, g.doublereload, g.nospeed, g.norecoil]),
                    TYPE: exports.smoke3,
                }, }, {   
            POSITION: [  6,     10,      1,      4,      0,     0,     1.33,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange, g.mach, g.sunchip, g.doublereload, g.nospeed, g.norecoil]),
                    TYPE: exports.smoke,
                }, },{   
            POSITION: [  6,     10,      1,      4,      0,     -35,     1.66,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange, g.mach, g.sunchip, g.doublereload, g.nospeed, g.norecoil]),
                    TYPE: exports.smoke2,
                }, },
        ],
};
exports.swarm = {
    LABEL: 'Swarm Drone',
    TYPE: 'swarm',
    ACCEPTS_SCORE: false,
    SHAPE: 3,
    MOTION_TYPE: 'swarm',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
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
exports.eggdrone = {
    LABEL: 'Swarm Drone',
    TYPE: 'swarm',
    ACCEPTS_SCORE: false,
    SHAPE: 0,
    MOTION_TYPE: 'swarm',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
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
        LABEL: 'Drone',
        HITS_OWN_TYPE: 'hardWithBuffer',
};
exports.beex = {
        PARENT: [exports.swarm],
        PERSISTS_AFTER_DEATH: true, 
        SHAPE: 4, 
        LABEL: 'Drone',
        HITS_OWN_TYPE: 'hardWithBuffer',
      BODY: {
        ACCELERATION: 3,
        PENETRATION: 1.5,
        HEALTH: 0.35 * wepHealthFactor,
        DAMAGE: 0.931 * wepDamageFactor,
        SPEED: 4.5,
        RESIST: 1.6,
        RANGE: 200,
        DENSITY: 12,
        PUSHABILITY: 0.5,
        FOV: 1.5001,
    },
};
exports.spacerock = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 5,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "beltRockAction"
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 4.2,
    PUSHABILITY: 0.9,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.8 * wepDamageFactor,
    SPEED: 8.5,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0
  },
  HITS_OWN_TYPE: "never",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true
};
exports.beeTwT = {
        PARENT: [exports.swarm],
        PERSISTS_AFTER_DEATH: true, 
        SHAPE: 4, 
        LABEL: "Bee",
  /////////////////////////
BODY: {
   ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 4.5,
    RESIST: 1.6,
    RANGE: 240,
    DENSITY: 12,
    PUSHABILITY: 0.5,
        FOV: 1.5,
        },
  //////////////////////////
        HITS_OWN_TYPE: 'hardWithBuffer',
    };
exports.beebossbee = {
        PARENT: [exports.swarm],
        PERSISTS_AFTER_DEATH: true, 
        SHAPE: 4, 
        LABEL: "Bee",
  /////////////////////////
BODY: {
   ACCELERATION: 3,
    PENETRATION: 1.5,
    HEALTH: 0.35 * wepHealthFactor,
    DAMAGE: 1.5 * wepDamageFactor,
    SPEED: 4.5,
    RESIST: 1.6,
    RANGE: 140,
    DENSITY: 12,
    PUSHABILITY: 0.5,
        FOV: 1.5,
        },
  //////////////////////////
        HITS_OWN_TYPE: 'push',
    };
    exports.autoswarm = {
        PARENT: [exports.swarm],
        AI: { FARMER: true, },
        INDEPENDENT: true,
    };

exports.trap = {
    LABEL: 'Thrown Trap',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    SHAPE: -3, 
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'push',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
};
exports.trap3 = {
    LABEL: 'Thrown Trap',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    SHAPE: -3, 
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'push',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor, //i have to go bye
        RANGE: 450,
        DENSITY: 10, //trap speed i think
        RESIST: 2.5,
        SPEED: 0,
    },
};
exports.trapCeles = {
    LABEL: 'Thrown Trap',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    SHAPE: -3, 
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'push',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 3 * wepDamageFactor,
        RANGE: 340,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
};
exports.trap2 = {
    LABEL: 'Thrown Trap',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    SHAPE: -4, 
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'push',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 5 * wepDamageFactor,
        RANGE: 450,
        DENSITY: 2.5,
        RESIST: 2.5,
        SPEED: 0,
    },
};
exports.trapsanc = {
    LABEL: 'Thrown Trap',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    SHAPE: -3, 
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'never',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        RANGE: 165,
        DENSITY: 2.5,
        RESIST: 5,
        SPEED: 0,
    },
};
exports.trapsanc2 = {
    LABEL: 'Thrown Trap',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    SHAPE: -3, 
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'never',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        RANGE: 130,
        DENSITY: 2.5,
        RESIST: 5,
        SPEED: 0,
    },
};
exports.sanctuarytraps = {
    LABEL: 'Thrown Trap',
    TYPE: 'trap',
    ACCEPTS_SCORE: false,
    SHAPE: -3, 
    MOTION_TYPE: 'glide', // def
    FACING_TYPE: 'turnWithSpeed',
    HITS_OWN_TYPE: 'never',
    DIE_AT_RANGE: true,
    BODY: {
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 2 * wepDamageFactor,
        RANGE: 245,
        DENSITY: 2.5,
        RESIST: 5,
        SPEED: 0,
    },
};
    exports.block = {
        LABEL: 'Set Trap',
        PARENT: [exports.trap],
        SHAPE: -4,
        MOTION_TYPE: 'motor',    
        CONTROLLERS: ['goToMasterTarget'],
        BODY: {
            SPEED: 1,
            DENSITY: 5,
        },
    };
    exports.boomerang = {
        LABEL: 'Boomerang',
        PARENT: [exports.trap],
        CONTROLLERS: ['boomerang'],
        MOTION_TYPE: 'motor',  
        HITS_OWN_TYPE: 'never',
        SHAPE: -5,
        BODY: {
            SPEED: 1.25,
            RANGE: 120,
        },
    };
exports.dronefall = {
    LABEL: 'Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],

    AI: { BLIND: true, },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.86 * wepHealthFactor,
        DAMAGE: 0.8 * wepDamageFactor,
        SPEED: 4.5,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 1.6,
    },
    HITS_OWN_TYPE: 'hard',
    INDEPENDENT: true,
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};
exports.drone = {
    LABEL: 'Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],

    AI: { BLIND: true, },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 3.8,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.8,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};
exports.droneinvis = {
    LABEL: 'Vanishing Drone',
    TYPE: 'drone',
    INVISIBLE: [0.09, 0.05],
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],

    AI: { BLIND: true, },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 3.8,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.8,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};
exports.droneboss = {
    LABEL: 'Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
    AI: { BLIND: true, },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1.2 * wepDamageFactor,
        SPEED: 1.3,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.8,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
};
exports.dronebossx = {
    LABEL: 'Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
    AI: { BLIND: true, },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 0.5 * wepDamageFactor,
        SPEED: 1.78,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 1,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
  INDEPENDENT: true,
    BUFF_VS_FOOD: true,
};
exports.droneboss32 = {
    LABEL: 'Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 5,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
    AI: { BLIND: true, },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1 * wepDamageFactor,
        SPEED: 1,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 1,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: true,
    CLEAR_ON_MASTER_UPGRADE: true,
    INDEPENDENT: true,
    BUFF_VS_FOOD: true,
};
exports.no_necro = {
  PARENT: [exports.drone],
  SHAPE: 4,
  NECRO: false,
  HITS_OWN_TYPE: "hard",
  BODY: {
    DAMAGE: 12,
    FOV: 0.5
  },
  AI: {
    BLIND: true,
    FARMER: true
  },
  DRAW_HEALTH: false
};
exports.autodrone = {
  PARENT: [exports.no_necro],
  SHAPE: 3,
  AI: {
    BLIND: true,
    FARMER: true
  },
  INDEPENDENT: true
};
exports.negroes = {
  PARENT: [exports.no_necro],
  SHAPE: 3,
  AI: {
    BLIND: true,
    FARMER: true
  },
  BODY: {
    FOV: 0
  },
  INDEPENDENT: true
};
exports.motherdrone = {
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
    "hangOutNearMaster"
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 4.2,
    PUSHABILITY: 0.9,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.8 * wepDamageFactor,
    SPEED: 4.5,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0.8
  },
  HITS_OWN_TYPE: "hard",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  BUFF_VS_FOOD: true
};
    exports.sunchip = {
        PARENT: [exports.drone],
        SHAPE: 4,
        NECRO: true,
        HITS_OWN_TYPE: 'hard',
        BODY: {
            FOV: 0.5,
            HEALTH: 0.8 * wepHealthFactor
        },
        AI: {
            BLIND: true,
            FARMER: true,
        },
        DRAW_HEALTH: false,
    };
exports.sunchipinvis = {
        PARENT: [exports.drone],
        SHAPE: 4,
        NECRO: true,
        HITS_OWN_TYPE: 'hard',
        INVISIBLE: [0.09, 0.05],
        BODY: {
            FOV: 0.5,
            HEALTH: 0.8 * wepHealthFactor
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
    exports.gunchip = {
        PARENT: [exports.drone],
        SHAPE: -2,
        NECRO: true,
        HITS_OWN_TYPE: 'hard',
        BODY: {
            FOV: 0.5,
        },
        AI: {
            BLIND: true,
            FARMER: true,
        },
        DRAW_HEALTH: false,
    };

exports.missile = {
    PARENT: [exports.bullet],
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 120,
    },  
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  14,     6,      1,      0,     -2,     130,     0,   ], 
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed]),
                TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                STAT_CALCULATOR: gunCalcNames.thruster,
            }, }, {
        POSITION: [  14,     6,      1,      0,      2,     230,     0,  ], 
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.muchmorerecoil, g.morespeed, g.morespeed]),
                TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                STAT_CALCULATOR: gunCalcNames.thruster,    
            }, }, 
    ],
};
exports.missiletwist = {
    PARENT: [exports.bullet],
    LABEL: 'Missile',
    INDEPENDENT: true,
    BODY: {
        RANGE: 160,
      SPEED: 5.75,
    },
    FACING_TYPE: 'turnWithSpeed',
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  14,     6,      1,      0,      0,     0,     0,   ], 
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.snake, g.snakeskin2]),
                TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                STAT_CALCULATOR: gunCalcNames.thruster,
            }, }, {
        POSITION: [  14,     6,      1,      0,      0,     180,     0,  ], 
            PROPERTIES: {
                AUTOFIRE: true,
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.snake, g.snakeskin2]),
                TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                STAT_CALCULATOR: gunCalcNames.thruster,    
            }, }, 
    ],
};
    exports.hypermissile = {
        PARENT: [exports.missile],
        BODY: {
          RANGE: 200,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  14,     6,      1,      0,     -2,     150,     0,   ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed]),
                    TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                    STAT_CALCULATOR: gunCalcNames.thruster,
                }, }, {
            POSITION: [  14,     6,      1,      0,      2,     210,     0,   ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed]),
                    TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                    STAT_CALCULATOR: gunCalcNames.thruster,
                }, }, {        
            POSITION: [  14,     6,      1,      0,     -2,      90,    0.5,  ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed]),
                    TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                }, }, {
            POSITION: [  14,     6,      1,      0,      2,     270,    0.5,  ],  
                PROPERTIES: {
                    AUTOFIRE: true,
                    SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed]),
                    TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                }, },
        ],
    };
exports.alphaskimmer = {
        PARENT: [exports.missile],
        BODY: {
          RANGE: 300,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  14,     6,      1,      0,     -2,     150,     0,   ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed]),
                    TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                    STAT_CALCULATOR: gunCalcNames.thruster,
                }, }, {
            POSITION: [  14,     6,      1,      0,      2,     210,     0,   ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed]),
                    TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                    STAT_CALCULATOR: gunCalcNames.thruster,
                }, }, {        
            POSITION: [  14,     6,      1,      0,     -2,      90,    0.5,  ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed]),
                    TYPE: [exports.trapsanc2, { PERSISTS_AFTER_DEATH: true, }],
                    MAX_CHILDREN: 4
                }, }, {
            POSITION: [  14,     6,      1,      0,      2,     270,    0.5,  ],  
                PROPERTIES: {
                    AUTOFIRE: true,
                    SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed]),
                    TYPE: [exports.trapsanc2, { PERSISTS_AFTER_DEATH: true, }],
                    MAX_CHILDREN: 4
                }, }, {
                POSITION: [   3,     6,     1.7,    14,      -2,      90,     0,  ],
                }, {
                POSITION: [   3,     6,     1.7,    14,      2,      270,     0,  ],
                }
        ],
    };
    exports.snake = {
        PARENT: [exports.bullet],
        LABEL: 'Snake',
        INDEPENDENT: true,
        BODY: {
            RANGE: 120,
        },  
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,    12,     1.4,     8,      0,     180,    0,   ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    STAT_CALCULATOR: gunCalcNames.thruster,
                    SHOOT_SETTINGS: combineStats([
                        g.basic, g.sniper, g.hunter, g.hunter2, g.snake, g.snakeskin,
                    ]),
                    TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                }, }, {
            POSITION: [  10,    12,     0.8,     8,      0,     180,   0.5,  ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    NEGATIVE_RECOIL: true,
                    STAT_CALCULATOR: gunCalcNames.thruster,
                    SHOOT_SETTINGS: combineStats([
                        g.basic, g.sniper, g.hunter, g.hunter2, g.snake,
                    ]),
                    TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                }, },
        ],
    };
exports.theia = {
  PARENT: [exports.bullet],
  LABEL: "Hyperspinner Missile",
  COLOR: 35,
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 7, 1, 7, 0, 360, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    },
    {
      POSITION: [7, 7, 1, 7, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    },
    {
      POSITION: [7, 7, 1, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    },
        {
      POSITION: [7, 7, 1, 7, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    },
  ]
};
    exports.racket = {
        PARENT: [exports.bullet],
        LABEL: 'Launcher',
        INDEPENDENT: true,
        BODY: {
            RANGE: 120,
        },  
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,    5,     1,     8,      0,     180,    5,   ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    STAT_CALCULATOR: gunCalcNames.thruster,
                    SHOOT_SETTINGS: combineStats([
                        g.basic, g.mach, g.mach, g.snake, g.snakeskin,
                    ]),
                    TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                }, }          
        ],
    };
exports.racketsus = {
        PARENT: [exports.bullet],
        LABEL: 'Launcher',
        INDEPENDENT: true,
        BODY: {
            RANGE: 120,
        },  
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,    5,     1,     8,      0,     180,    0,   ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    STAT_CALCULATOR: gunCalcNames.thruster,
                    SHOOT_SETTINGS: combineStats([
                        g.basic, g.mini, g.stream,
                    ]),
                    TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true, }],
                }, }
        ],
    };
 exports.racketx = {
        PARENT: [exports.bullet],
        LABEL: 'Rocket',
        INDEPENDENT: true,
        BODY: {
            RANGE: 135,
        },  
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   12,    11,     1.4,     5,      0,     180,   7.75,   ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    SHOOT_SETTINGS: combineStats([
                        g.basic, g.mach, g.mach, g.streamx, g.thruster
                    ]),
                    TYPE: [exports.bullet3, { PERSISTS_AFTER_DEATH: true, }],
                  STAT_CALCULATOR: gunCalcNames.thruster,
                }, },
        ],
    };
exports.racketgay = {
        PARENT: [exports.bullet],
        LABEL: 'Rocket',
        INDEPENDENT: true,
        BODY: {
           PENETRATION: 1,
        SPEED: 2.65,
        RANGE: 130,
        DENSITY: 2,
        HEALTH: 0.43 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
        },  
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   12,    11,     1.4,     5,      0,     180,  4.75,   ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    SHOOT_SETTINGS: combineStats([
                        g.basic, g.mach, g.mach, g.streamgay, g.thruster
                    ]),
                    TYPE: [exports.bullet3, { PERSISTS_AFTER_DEATH: true, }],
                  STAT_CALCULATOR: gunCalcNames.thruster,
                }, },
        ],
    };
    exports.hive = {
        PARENT: [exports.bullet],
        LABEL: 'Hive',
        BODY: {
            RANGE: 90,
            FOV: 0.5,
        },  
        FACING_TYPE: 'turnWithSpeed',
        INDEPENDENT: true,
        CONTROLLERS: ['alwaysFire', 'nearestDifferentMaster', 'targetSelf',],
        AI: { NO_LEAD: true, },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   7,    9.5,    0.6,     7,      0,      108,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      180,    0.2,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm,  
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      252,    0.4,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm, 
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      324,    0.6,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm, 
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      36,     0.8,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.hive, g.bees]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm,  
                }, }, 
        ],
    };
 exports.BOOM = {
        PARENT: [exports.bullet],
        LABEL: 'Explosive',
        BODY: {
            RANGE: 90,
            FOV: 0.5,
        },  
        FACING_TYPE: 'turnWithSpeed',
        INDEPENDENT: true,
        CONTROLLERS: ['alwaysFire', 'nearestDifferentMaster', 'targetSelf',],
        AI: { NO_LEAD: true, },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   1,    9.5,    1.4,     7,      0,      0,     1,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                    TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5,    
                }, }, {
            POSITION: [   1,    9.5,    1.4,     7,      0,      90,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5,  
                }, }, {
            POSITION: [   1,    9.5,    1.4,     7,      0,      180,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                }, }, {
            POSITION: [   1,    9.5,    1.4,     7,      0,      270,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               {
            POSITION: [   1,    9.5,    1.4,     7,      0,      45,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               {
            POSITION: [   1,    9.5,    1.4,     7,      0,      130,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               {
            POSITION: [   1,    9.5,    1.4,     7,      0,      225,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               {
            POSITION: [   1,    9.5,    1.4,     7,      0,      315,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   1,    9.5,    1.4,     7,      0,      0,     1,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5,    
                }, }, {
            POSITION: [   1,    9.5,    1.4,     7,      0,      90,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5,  
                }, }, {
            POSITION: [   1,    9.5,    1.4,     7,      0,      180,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                }, }, {
            POSITION: [   1,    9.5,    1.4,     7,      0,      270,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               {
            POSITION: [   1,    9.5,    1.4,     7,      0,      45,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               {
            POSITION: [   1,    9.5,    1.4,     7,      0,      130,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               {
            POSITION: [   1,    9.5,    1.4,     7,      0,      225,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               {
            POSITION: [   1,    9.5,    1.4,     7,      0,      315,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
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
    LABEL: 'Unknown Class',
    TYPE: 'tank',
    DAMAGE_CLASS: 2,
    DANGER: 5,
    MOTION_TYPE: 'motor',
    FACING_TYPE: "toTarget",
    SIZE: 12,
    MAX_CHILDREN: 0,   
    DAMAGE_EFFECTS: false,
    BODY: { // def
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
let gun = { };

exports.autoTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.8
    },
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    10,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret]),
                TYPE: exports.bullet,
            }, },
    ],
};
exports.ThyThingDefender = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 1.45
    },
    COLOR: 16,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    10,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner2, g.fast]),
                TYPE: exports.bullet,
            }, },
    ],
};
exports.WTF2 = {
        PARENT: [exports.drone],
        SHAPE: 4,
        NECRO: true,
        HITS_OWN_TYPE: 'hard',
        BODY: {
            FOV: 0.5,
        },
        AI: {
            BLIND: true,
            FARMER: true,
        },
        DRAW_HEALTH: false,
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  11,     0,      0,      0,     360,  1], 
            TYPE: exports.autoTurret,
        }
    ]
    };
exports.bubble = {
  PARENT: [exports.bullet],
  LABEL: "test",
  COLOR: 36,
  SHAPE: 30,
  MOTION_TYPE: "shrink",
};
    exports.machineAutoTurret = {
        PARENT: [exports.genericTank],
        LABEL: 'Turret',
        COLOR: 16,
        //CONTROLLERS: ['nearestDifferentMaster'],
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  14,    11,     1.3,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.mach, g.slow]),
                    TYPE: exports.bullet,
                }, },
        ],
    };
    exports.autoSmasherTurret = {
        PARENT: [exports.genericTank],
        LABEL: 'Turret',
        SKILL: [9,0,0,0,0,0,0,0,0,0],
        COLOR: 16,
        HAS_NO_RECOIL: true,
        //CONTROLLERS: ['nearestDifferentMaster'],
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,     6,      1,      0,      5,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound]),
                    TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.fixedReload,
                }, }, {
            POSITION: [  20,     6,      1,      0,     -5,      0,     0.5,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound]),
                    TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.fixedReload,
                }, },
        ],
    };
    exports.oldAutoSmasherTurret = {
        PARENT: [exports.genericTank],
        LABEL: 'Turret',
        COLOR: 16,
        //CONTROLLERS: ['nearestDifferentMaster'],
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,     7,      1,      0,    -5.75,    0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.triplexx]),
                    TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.fixedReload,
                }, }, {            
            POSITION: [  20,     7,      1,      0,     5.75,    0,     0.5,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.triplexx]),
                    TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.fixedReload,
                }, },
        ],
    };

exports.auto3gun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    COLOR: 16,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    10,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            }, }
    ],
};
    exports.auto5gun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 3,
        },
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  24,    11,      1,      0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.five]),
                    TYPE: exports.bullet,
                }, }
        ],
    };
exports.circle = {
    SHAPE: 0,
    COLOR: 16,
    };
exports.circle2lel = {
    SHAPE: 0,
    COLOR: 36,
    };
exports.spinny = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 1,
    },
     INDEPENDENT: false,
    FACING_TYPE: 'autospin',
    CONTROLLERS: ['fastspin'],
    GUNS: [ {/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16,    7,      1,      0,      0,      90,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  16,    7,      1,      0,      0,      270,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX]),
                    TYPE: exports.bullet,
                },}
        ],
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  11,     0,      0,      0,     360, 1], 
                    TYPE: exports.circle,
                        },
            ],
    };
exports.spinner = {
    PARENT: [exports.genericTank],
    LABEL: 'Spinner',
    BODY: {
      FOV: base.FOV * 1.05,
      SPEED: base.SPEED
    },
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  11,     12,      0,      0,     360, 0], 
                    TYPE: exports.spinny,
              },{
        POSITION: [  11,     7,      0,      0,     360, 0], 
                    TYPE: exports.circle,
              },
            ],
};
    exports.heavy3gun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 2,
            SPEED: 0.9,
        },
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  22,    14,      1,      0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.auto]),
                    TYPE: exports.bullet,
                }, }
        ],
    };
    exports.masterGun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 3,
        },
        CONTROLLERS: ['nearestDifferentMaster'], 
        COLOR: 16,
        MAX_CHILDREN: 6,
        AI: {
            NO_LEAD: true,
            SKYNET: true,
            FULL_VIEW: true,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   8,     14,    1.3,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.master]),
                    TYPE: exports.drone,
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,
                    STAT_CALCULATOR: gunCalcNames.drone,
                }, },
        ],
    };
    exports.EliteGun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 3,
        },
        COLOR: 16,
        AI: {
            NO_LEAD: true,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   10,     12,    1.3,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.stream]),
                    TYPE: exports.bullet,
                    AUTOFIRE: true,
                }, },
        ],
    };
    exports.SusGun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 3,
        },
        COLOR: 16,
        AI: {
            NO_LEAD: true,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
           POSITION: [   4,     9,    1.4,      18.5,      0,      0,      0,   ], 
            }, {
            POSITION: [   11,     12,    0,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.sussyslow]),
                    TYPE: exports.sanchpbullet,
                    AUTOFIRE: false,
                }, },
        ],
    };
    exports.sniper3gun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 5,
        },
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  27,     9,      1,      0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.auto, g.assass, g.autosnipe]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [   5,     9,     -1.5,    8,      0,      0,      0,   ], 
            },
        ],
    };
    exports.bansheegun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
        INDEPENDENT: true,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  26,    10,      1,      0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto, g.lessreload]),
                    TYPE: exports.bullet,
                }, }
        ],
    };
    exports.auto4gun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 2,
        },
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16,     4,      1,      0,    -3.5,     0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  16,     4,      1,      0,     3.5,     0,     0.5,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.power, g.slow]),
                    TYPE: exports.bullet,
                }, }
        ],
    };
exports.auto4gunx = {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 2,
        },
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16,     4,      1,      0,    -3.5,     0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto2, g.gunner2, g.twin, g.power, g.slow]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  16,     4,      1,      0,     3.5,     0,     0.5,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto2, g.gunner2, g.twin, g.power, g.slow]),
                    TYPE: exports.bullet,
                }, }
        ],
    };
exports.sider = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                   POSITION: [  9,    16,    -0.5,     10,      0,      0,      0,  ], },
                         {
                    POSITION: [  16,    15,      -1.3,      0,      0,      0,      0,  ], 
                                                  PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniperswarm, g.theia]),
                            TYPE: exports.theia,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, 
                        },
  ]
};
exports.sider2 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",//just doing some polishing with nyx
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
POSITION: [  12,    12.4,    1,     9,      0,      0,      0,  ], 
              },
                         {
            POSITION: [  16,    12.4,      -1.3,      0,      0,      0,      0,  ],
                PROPERTIES: {
                  SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.rocketeerx]),
                  TYPE: exports.racketgay,
                  STAT_CALCULATOR: gunCalcNames.sustained,
                        },
                }
               ]
};
exports.sider3 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
POSITION: [  5,    11.8,    1,    14,      0,      0,      0,  ], 
                 PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.rocketeerx]),
                            TYPE: exports.racketsus,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                        {
                    POSITION: [  16,    14,    -1.1,     0,      0,      0,      0,  ], 
                        },
               ]
};
exports.sider4 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
POSITION: [  17,     3,      1,      0,     -6,     -7,     0.25,   ], }, {
                POSITION: [  17,     3,      1,      0,      6,      7,     0.75,   ], }, {
                POSITION: [  19,     12,     1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty3, g.arty3, g.skim]),
                        TYPE: exports.bullet,
                        LABEL: 'Heavy',
                    }, },
               ]
};
exports.skimmerx = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
POSITION: [  10,    14,    -0.5,     9,      0,      0,      0,  ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty3, g.arty3, g.skim2]),
                TYPE: exports.hypermissile,
            }, }, {
        POSITION: [  17,    15,      1,      0,      0,      0,      0,  ], 
            },
               ]
};
exports.paladin = {
  LABEL: "Hive",
  PARENT: [exports.trap],
  SHAPE: 0,
  CONTROLLERS: ["nearestDifferentMaster"],
  MOTION_TYPE: 'motor',
  INDEPENDENT: true,
  BODY: {
    PENETRATION: 1,
        SPEED: 2.65,
        RANGE: 200,
        DENSITY: 2,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
  },
  FACING_TYPE: "turnWithSpeed",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true,
  GUNS: [
    {
POSITION: [   7,    9.5,    0.6,     7,      0,      108,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarms, g.hive, g.bees2]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      180,    0.2,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarms, g.hive, g.bees2]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm,  
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      252,    0.4,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarms, g.hive, g.bees2]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm, 
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      324,    0.6,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarms, g.hive, g.bees2]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm, 
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      36,     0.8,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarms, g.hive, g.bees2]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm,  
                }, },
  ]
};
exports.swarmerpaladin = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,    14,     -1.2,    5,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniperswarm, g.assassswarm]),
                            TYPE: exports.paladin,
                        }, }, {
                    POSITION: [  15,    12,      1,      5,      0,      0,      0,   ], 
      }
  ]
};
    exports.bigauto4gun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  14,     5,      1,      0,    -4.5,     0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  14,     5,      1,      0,     4.5,     0,     0.5,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  16,     5,      1,      0,      0,      0,     0.5,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
                    TYPE: exports.bullet,
                }, }
        ],
    };
exports.bigauto4gunsus = {
        PARENT: [exports.genericTank],
        LABEL: '',
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  18,     6,      1,      0,    -5.5,     0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  18,     6,      1,      0,     5.5,     0,     0.5,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner, g.twin, g.twin, g.power, g.halfreload]),
                    TYPE: exports.bullet,
                }, }
        ],
    };
exports.tritrapgun = {
    PARENT: [exports.genericTank],
    LABEL: '',
    COLOR: 16,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  20,    16,      1,      0,      0,      0,      0,   ], 
        }, {
        POSITION: [   2,    16,     1.1,     20,     0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.block, g.auto]),
                TYPE: exports.block,
            }, },
    ],
};
exports.smasherBody = {
    LABEL: '',
    CONTROLLERS: ['spin'], 
    COLOR: 9,
    SHAPE: 6,
    INDEPENDENT: true,
};
exports.smasherBody21 = {
    LABEL: '',
    CONTROLLERS: ['spin'], 
    COLOR: 36,
    SHAPE: 6,
    INDEPENDENT: true,
};
exports.smasherBody32 = {
    LABEL: '',
    CONTROLLERS: ['reversespin'], 
    COLOR: 36,
    SHAPE: 6,
    INDEPENDENT: true,
};
exports.smasherBody2 = {
  LABEL: "",
  CONTROLLERS: ["fastspin"],
  COLOR: 9,
  SHAPE: 6,
  INDEPENDENT: true
};
exports.spikeBody = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
    SHAPE: -4,
    INDEPENDENT: true,
};
exports.fabrictear = {
    LABEL: '',
    CONTROLLERS: ['spin'],
COLOR: 17,
    SHAPE: -4,
    INDEPENDENT: true,
};
    exports.spikeBody1 = {
        LABEL: '',
        CONTROLLERS: ['fastspin'], 
        COLOR: 9,
        SHAPE: 3,
        INDEPENDENT: true,
    };
    exports.spikeBody2 = {
        LABEL: '',
        CONTROLLERS: ['reversespin'], 
        COLOR: 9,
        SHAPE: 3,
        INDEPENDENT: true,
    };
exports.spikeSun = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 13,
    SHAPE: -4,
    INDEPENDENT: true,
};
exports.megasmashBody = {
    LABEL: '',
    CONTROLLERS: ['spin'], 
    COLOR: 9,
    SHAPE: -6,
    INDEPENDENT: true,
};
exports.dominationBody = {
    LABEL: '',
    CONTROLLERS: ['dontTurn'], 
    COLOR: 9,
    SHAPE: 8,
    INDEPENDENT: true,
};
exports.cyclibe = {
    LABEL: '',
    CONTROLLERS: ['reversespin'], 
    COLOR: 6,
    SHAPE: 12,
    INDEPENDENT: false,
    FACING_TYPE: "suspin",
    GUNS: [{
                         POSITION: [  9,     2,      1,      0,      0,      45,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  9,     2,      1,      0,      0,     135,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  9,     2,      1,      0,      0,     225,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  9,     2,      1,      0,      0,     315,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX]),
                            TYPE: exports.bullet,
         }, },
      
    ]
};
exports.balls = {
    LABEL: '',
    CONTROLLERS: ['dontTurn'],
    COLOR: 36,
    SHAPE: 0,
    INDEPENDENT: true,
};
exports.baller = {
    LABEL: '',
    FACING_TYPE: 'autospin',
    COLOR: 36,
    SHAPE: 4,
    INDEPENDENT: true,
};
    exports.baseSwarmTurret = {
        PARENT: [exports.genericTank],
        LABEL: 'Protector',
        COLOR: 16,
        BODY: {
            FOV: 2,
        },
        CONTROLLERS: ['nearestDifferentMaster'], 
        AI: {
            NO_LEAD: true,
            LIKES_SHAPES: true,
        },
        INDEPENDENT: true,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   5,    4.5,    0.6,     7,      2,      0,     0.15, ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
                    TYPE: exports.swarm,
                    STAT_CALCULATOR: gunCalcNames.swarm,          
                }, }, {
            POSITION: [   5,    4.5,    0.6,     7,     -2,      0,     0.15, ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
                    TYPE: exports.swarm,
                    STAT_CALCULATOR: gunCalcNames.swarm,  
                }, }, {
            POSITION: [   5,    4.5,    0.6,    7.5,     0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarm, g.protectorswarm]),
                    TYPE: [exports.swarm, { INDEPENDENT: true, AI: { LIKES_SHAPES: true, }, }, ],
                    STAT_CALCULATOR: gunCalcNames.swarm,  
            }, }
        ],
    };
exports.negro = {
        PARENT: [exports.genericTank],
        LABEL: 'Protector',
        COLOR: 16,
        BODY: {
            FOV: 2,
        },
        CONTROLLERS: ['nearestDifferentMaster'], 
        AI: {
            NO_LEAD: true,
            LIKES_SHAPES: true,
        },
        MAX_CHILDREN: 3,
        INDEPENDENT: true,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   5,    4.5,    0.6,     7,      2,      0,     0.15, ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic]),
                    TYPE: exports.negroes,
                    STAT_CALCULATOR: gunCalcNames.swarm,          
                }, }, {
            POSITION: [   5,    4.5,    0.6,     7,     -2,      0,     0.15, ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic]),
                    TYPE: exports.negroes,
                    STAT_CALCULATOR: gunCalcNames.swarm,  
                }, }, {
            POSITION: [   5,    4.5,    0.6,    7.5,     0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic]),
                    TYPE: exports.negroes,
                    STAT_CALCULATOR: gunCalcNames.swarm,  
            }, }
        ],
    };
    exports.baseGunTurret = {
        PARENT: [exports.genericTank],
        LABEL: 'Protector',
        BODY: {
            FOV: 5,
        },
        ACCEPTS_SCORE: false,
        CONTROLLERS: ['nearestDifferentMaster'], 
        INDEPENDENT: true,
        COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  12,    12,     1,       6,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
                    TYPE: exports.bullet,          
                }, }, {
            POSITION: [  11,    13,     1,       6,      0,      0,     0.1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.destroy]),
                    TYPE: exports.bullet,          
                }, }, {
            POSITION: [   7,    13,    -1.3,     6,      0,      0,      0,   ],
                }
        ],
    };
        exports.baseProtector = {
            PARENT: [exports.genericTank],
            LABEL: 'Base Protector',
            SIZE: 64,
            BROADCAST_MESSAGE: 'A Base Protector was destroyed!',
            DAMAGE_CLASS: 0,
            ACCEPTS_SCORE: false,
            SKILL: skillSet({ 
                rld: 1,
                dam: 1,
                pen: 1,
                spd: 1,
                str: 1,
            }),
            BODY: { // def
                SPEED: 0,
                HEALTH: 10000, 
                DAMAGE: 10, 
                PENETRATION: 0.25, 
                SHIELD: 1000,
                REGEN: 100,
                FOV: 5,
                PUSHABILITY: 0,
                HETERO: 0,
            },
            //CONTROLLERS: ['nearestDifferentMaster'],
            FACING_TYPE: 'autospin',
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  25,     0,      0,      0,     360,  0], 
                    TYPE: exports.dominationBody,
                        }, {
                POSITION: [  12,     7,      0,      45,     100,  0], 
                    TYPE: exports.baseSwarmTurret,
                        }, {
                POSITION: [  12,     7,      0,     135,    100,  0], 
                    TYPE: exports.baseSwarmTurret,
                        }, {
                POSITION: [  12,     7,      0,     225,    100,  0], 
                    TYPE: exports.baseSwarmTurret,
                        }, {
                POSITION: [  12,     7,      0,     315,    100,  0], 
                    TYPE: exports.baseSwarmTurret,
                        },
            ],
            GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
                POSITION: [  4.5,  11.5,   -1.3,     6,      0,      45,     0,   ], }, {   
                POSITION: [  4.5,  11.5,   -1.3,     6,      0,     135,     0,   ], }, {   
                POSITION: [  4.5,  11.5,   -1.3,     6,      0,     225,     0,   ], }, {   
                POSITION: [  4.5,  11.5,   -1.3,     6,      0,     315,     0,   ], }, {
                POSITION: [  4.5,   8.5,   -1.5,     7,      0,      45,     0,   ], }, {   
                POSITION: [  4.5,   8.5,   -1.5,     7,      0,     135,     0,   ], }, {   
                POSITION: [  4.5,   8.5,   -1.5,     7,      0,     225,     0,   ], }, {   
                POSITION: [  4.5,   8.5,   -1.5,     7,      0,     315,     0,   ], }, 
            ],
        };

exports.minion = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion', 
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 2,
        ACCELERATION: 0.6,
        HEALTH: 5,
        SHIELD: 2,
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
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  17,     9,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        }, }, 
    ],
};
exports.minion123 = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion', 
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 2,
        ACCELERATION: 0.6,
        HEALTH: 123,
        SHIELD: 2,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
    DRAW_HEALTH: false,
    HAS_NO_RECOIL: true,
    CLEAR_ON_MASTER_UPGRADE: true,
    GIVE_KILL_MESSAGE: false,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, }, {
        POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, },
    ],
};
exports.produceminion = {
    PARENT: [exports.genericTank],
    LABEL: 'Productionist Minion', 
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 2,
        ACCELERATION: 0.6,
        HEALTH: 7,
        SHIELD: 4,
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
    INDEPENDENT: true,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  17,     9,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        }, }, 
    ],
};
exports.minion2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion', 
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 1.6,
        ACCELERATION: 0.6,
        HEALTH: 4,
        SHIELD: 2,
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
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  17,     9,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion2]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        }, }, 
    ],
};
exports.minion3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Minion', 
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 2,
        SPEED: 1.6,
        ACCELERATION: 0.6,
        HEALTH: 10,
        SHIELD: 2,
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
    INDEPENDENT: true,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'],
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  17,     9,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.minion3]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.bullet,
        }, }, 
    ],
};
exports.pillboxTurret = {
    PARENT: [exports.genericTank],
    LABEL: '',
    COLOR: 16,
    BODY: {
        FOV: 2,
    },
    HAS_NO_RECOIL: true,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    11,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.minion, g.turret, g.power, g.auto, g.notdense]),
                TYPE: exports.bullet,
            }, },
    ],
};
exports.pillbox = {
    LABEL: 'Pillbox',
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: 'motor',    
    CONTROLLERS: ['goToMasterTarget', 'nearestDifferentMaster'],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
        RANGE: 118,
    },
    DIE_AT_RANGE: true, 
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  11,     0,      0,      0,     360,  1], 
            TYPE: exports.pillboxTurret,
        }
    ]
};
exports.hexagon = {
    LABEL: '',
  SHAPE: -6,
    COLOR: 13,
};
exports.hexagon2 = {
    LABEL: '',
  SHAPE: -6,
    COLOR: 16,
};
exports.hexagonpatch = {
    LABEL: '',
  SHAPE: -6,
    COLOR: 13,
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  2,     7,      0,      0,     360,  1], 
            TYPE: exports.hexagon2,
        },{
        POSITION: [  2,     -7,      0,      0,     360,  1], 
            TYPE: exports.hexagon2,
        },{
        POSITION: [  2,     7,      0,      120,     360,  1], 
            TYPE: exports.hexagon2,
        },{
        POSITION: [  2,     -7,      0,      120,     360,  1], 
            TYPE: exports.hexagon2,
        },{
        POSITION: [  2,     7,      0,      240,     360,  1], 
            TYPE: exports.hexagon2,
        },{
        POSITION: [  2,     -7,      0,      240,     360,  1], 
            TYPE: exports.hexagon2,
        },{
        POSITION: [  2,     0,      0,      0,     360,  1], 
            TYPE: exports.hexagon2,
        },
    ]
};
exports.hexagonpatch2 = {
    LABEL: '',
  SHAPE: -6,
    COLOR: 13,
  FACING_TYPE: 'autospin',
    CONTROLLERS: ['fastspin'],
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  5,     7,      0,      0,     360,  1], 
            TYPE: exports.hexagon,
        },{
        POSITION: [  5,     -7,      0,      0,     360,  1], 
            TYPE: exports.hexagon,
        },{
        POSITION: [  5,     7,      0,      120,     360,  1], 
            TYPE: exports.hexagon,
        },{
        POSITION: [  5,     -7,      0,      120,     360,  1], 
            TYPE: exports.hexagon,
        },{
        POSITION: [  5,     7,      0,      240,     360,  1], 
            TYPE: exports.hexagon,
        },{
        POSITION: [  5,     -7,      0,      240,     360,  1], 
            TYPE: exports.hexagon,
        },{
        POSITION: [  5,     0,      0,      0,     360,  1], 
            TYPE: exports.hexagon,
        },{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  2,     7,      0,      0,     360,  1], 
            TYPE: exports.hexagon2,
        },{
        POSITION: [  2,     -7,      0,      0,     360,  1], 
            TYPE: exports.hexagon2,
        },{
        POSITION: [  2,     7,      0,      120,     360,  1], 
            TYPE: exports.hexagon2,
        },{
        POSITION: [  2,     -7,      0,      120,     360,  1], 
            TYPE: exports.hexagon2,
        },{
        POSITION: [  2,     7,      0,      240,     360,  1], 
            TYPE: exports.hexagon2,
        },{
        POSITION: [  2,     -7,      0,      240,     360,  1], 
            TYPE: exports.hexagon2,
        },{
        POSITION: [  2,     0,      0,      0,     360,  1], 
            TYPE: exports.hexagon2,
        },
    ]
};
exports.beehouse = {
    PARENT: [exports.trap],
    LABEL: "beehouse",
    SHAPE: -6,
    MOTION_TYPE: 'motor',   
  FACING_TYPE: 'turnWithSpeed',
    CONTROLLERS: ['goToMasterTarget', 'nearestDifferentMaster'],
    INDEPENDENT: true,
  HAS_NO_RECOIL: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
        RANGE: 118 
    },
    DIE_AT_RANGE: true, 
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  12,    1.5,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm3, g.battle3, g.carrier2]),
                TYPE: exports.beex,
              AUTOFIRE: true,
            }, },{
        POSITION: [  12,    1.5,      1,      0,      0,      60,      0.15,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm3, g.battle3, g.carrier2]),
                TYPE: exports.beex,
              AUTOFIRE: true,
            }, },{
        POSITION: [  12,    1.5,      1,      0,      0,      120,      0.3,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm3, g.battle3, g.carrier2]),
                TYPE: exports.beex,
              AUTOFIRE: true,
            }, },{
        POSITION: [  12,    1.5,      1,      0,      0,      180,      0.45,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm3, g.battle3, g.carrier2]),
                TYPE: exports.beex,
              AUTOFIRE: true,
            }, },{
        POSITION: [  12,    1.5,      1,      0,      0,      240,      0.6,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm3, g.battle3, g.carrier2]),
                TYPE: exports.beex,
              AUTOFIRE: true,
            }, },{
        POSITION: [  12,    1.5,      1,      0,      0,      300,      0.75,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.swarm3, g.battle3, g.carrier2]),
                TYPE: exports.beex,
              AUTOFIRE: true,
            }, },
    ],
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  18,     0,      0,      90,     360,  1], 
            TYPE: exports.hexagonpatch,
        },
    ]
};
exports.pillboxelite = {
    LABEL: 'Pillbox',
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: 'motor',    
    CONTROLLERS: ['nearestDifferentMaster'],
    INDEPENDENT: true,
    BODY: {
        SPEED: 1,
        DENSITY: 5,
    },
    DIE_AT_RANGE: true, 
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  11,     0,      0,      0,     360,  1], 
            TYPE: exports.pillboxTurret,
        }
    ]
};
exports.skimturret = {
    PARENT: [exports.genericTank],
    BODY: {
        FOV: base.FOV * 2,
    },
    COLOR: 2,
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    LABEL: '',
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  10,    14,    -0.5,     9,      0,      0,      0,  ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty3, g.arty3, g.skim]),
                TYPE: exports.hypermissile,
            }, }, {
        POSITION: [  17,    15,      1,      0,      0,      0,      0,  ], 
            },
    ],
};
function makeAuto(type, name = -1, options = {}) {
    let turret = { type: exports.autoTurret, size: 10, independent: true, };
    if (options.type != null) { turret.type = options.type; }
    if (options.size != null) { turret.size = options.size; }
    if (options.independent != null) { turret.independent = options.independent; }
    
    let output = JSON.parse(JSON.stringify(type));
    let autogun = {
        /*********  SIZE               X       Y     ANGLE    ARC */
        POSITION: [  turret.size,     0,      0,     180,    360,  1,], 
        TYPE: [turret.type, { CONTROLLERS: ['nearestDifferentMaster'], INDEPENDENT: turret.independent, }],
    };
    if (type.GUNS != null) { output.GUNS = type.GUNS; }
    if (type.TURRETS == null) { output.TURRETS = [autogun]; }
    else { output.TURRETS = [...type.TURRETS, autogun]; }
    if (name == -1) { output.LABEL = 'Auto-' + type.LABEL; } else { output.LABEL = name; }
    output.DANGER = type.DANGER + 1;
    return output;
}
function makeHybrid(type, name = -1) {
    let output = JSON.parse(JSON.stringify(type));
    let spawner = { 
        /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [   7,     12,    1.2,     8,      0,     180,     0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.drone, g.weak]),
            TYPE: [exports.drone, { INDEPENDENT: true, }],
            AUTOFIRE: true,
            SYNCS_SKILLS: true,
            STAT_CALCULATOR: gunCalcNames.drone,
            WAIT_TO_CYCLE: false,    
            MAX_CHILDREN: 3,
        }, };
    if (type.TURRETS != null) { output.TURRETS = type.TURRETS; }
    if (type.GUNS == null) { output.GUNS = [spawner]; }
    else { output.GUNS = [...type.GUNS, spawner]; }
    if (name == -1) { output.LABEL = 'Hybrid ' + type.LABEL; } else { output.LABEL = name; }
    return output;
}
function makeTrapper(type, name = -1) {
    let output = JSON.parse(JSON.stringify(type));
    let spawner1 = { 
        /********* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  15,     7,      1,      0,      0,     180,    0.5,  ],
                        };
    let spawner2 = { 
                    POSITION: [   3,     7,     1.7,    15,      0,     180,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, };
    if (type.TURRETS != null) { output.TURRETS = type.TURRETS; }
    if (type.GUNS == null) { output.GUNS = [spawner1, spawner2]; }
    else { output.GUNS = [...type.GUNS, spawner1, spawner2]; }
    if (name == -1) { output.LABEL = 'Hybrid ' + type.LABEL; } else { output.LABEL = name; }
    return output;
}
exports.basic = {
    PARENT: [exports.genericTank],
    LABEL: 'Basic',
    LEVEL: 45,
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic]),
            TYPE: exports.bullet,
            LABEL: '',                  // def
            STAT_CALCULATOR: 0,         // def
            WAIT_TO_CYCLE: false,       // def
            AUTOFIRE: false,            // def
            SYNCS_SKILLS: false,        // def         
            MAX_CHILDREN: 0,            // def  
            ALT_FIRE: false,            // def 
            NEGATIVE_RECOIL: false,     // def
        }, }, 
    ],
};
exports.arena = {
    PARENT: [exports.genericTank],
    LABEL: 'Arena Closer',
  NAME: "A R E N A  N U B",
  SIZE: 40,
  SKILL: [9,0,0,0,0,0,0,0,0,9],
  COLOR: 35,
  //CONTROLLERS: ['sus'],
  HAS_NO_RECOIL: true,
  BODY: {
    HEALTH: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
    DAMAGE: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
  REGEN: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
    SHIELD: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
    SPEED: base.SPEED * 1.3
  },
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  15.5,     10,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.op, g.stream]),
            TYPE: exports.bullet81273
        }, }, 
    ],
};
exports.CLOSER = {
    PARENT: [exports.genericTank],
    LABEL: 'Arena Closer',
  NAME: 'Arena Closer',
  SIZE: 40,
  CONTROLLERS: ["nearestDifferentMaster", 'mapTargetToGoal'],
  SKILL: [9,0,0,0,0,0,0,0,0,9],
  COLOR: 35,
  HAS_NO_RECOIL: true,
  CAN_BE_ON_LEADERBOARD: false,
  FACING_TYPE: "smoothToTarget",
  VALUE: 24000,
  BODY: {
    HEALTH: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
    DAMAGE: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
  REGEN: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
    SHIELD: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
    SPEED: base.SPEED* 1.3,
    FOV: 1.2
  },
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  13,    0.000001,     1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.op, g.stream]),
        TYPE: exports.bulletenableai,
        }, }, {
        POSITION: [  15.5,     10,      1,      0,      0,      0,      0,   ],  
       PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.op, g.stream]),
            TYPE: exports.bullet81273
        }, },
    ],
};
exports.OPENER = {
    PARENT: [exports.genericTank],
    LABEL: 'Arena Opener',
  NAME: 'Arena Opener',
  SIZE: 40,
  CONTROLLERS: ["nearestDifferentMaster", 'mapTargetToGoal'],
  SKILL: [9,0,0,0,0,0,0,0,0,9],
  COLOR: 23,
  HAS_NO_RECOIL: true,
  CAN_BE_ON_LEADERBOARD: false,
  VALUE: 24000,
  BODY: {
    HEALTH: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
    DAMAGE: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
  REGEN: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
    SHIELD: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
    SPEED: base.SPEED* 1.3,
    FOV: 1.2
  },
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  13,    0.000001,     1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.op, g.stream]),
        TYPE: exports.bulletenableai,
        }, }, {
        POSITION: [  15.5,     10,      1,      0,      0,      0,      0,   ],  
       PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.op, g.stream]),
            TYPE: exports.bullet81273
        }, },
    ],
};
exports.testold = {
  PARENT: [exports.genericTank],
  LABEL: "TESTBED",
  RESET_UPGRADES: true,
 SKILL: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,],
  LEVEL: 45,
  BODY: {
    // def
    SHIELD: 1000,
    REGEN: 10,
    HEALTH: 100,
    DAMAGE: 10,
    DENSITY: 20,
    FOV: 1
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
    [-1, 0.8]
  ],
  TURRETS: [],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, -1.4, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
        TYPE: [exports.bullet, { SHAPE: 5 }]
      }
    }
  ]
};
        exports.testbed = {
            PARENT: [exports.genericTank],
            LABEL: 'DEVELOPER',
            RESET_UPGRADES: true,
            LEVEL: 45,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 10,
                HEALTH: 100,
                DAMAGE: 10,
                DENSITY: 20,
                FOV: 0.85,
            },
            HAS_NO_RECOIL: false,
            SKILL_CAP: [dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl],
            SHAPE: 0,
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                    TYPE: [exports.bullet, { SHAPE: 5, }],
                }, }
                  ],
        };
        exports.seniorbed = {
            PARENT: [exports.genericTank],
            LABEL: 'BETA-TESTER 2',
            RESET_UPGRADES: true,
            LEVEL: 45,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 10,
                HEALTH: 100,
                DAMAGE: 10,
                DENSITY: 20,
                FOV: 0.85,
            },
            HAS_NO_RECOIL: false,
            SKILL_CAP: [dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl],
            SHAPE: 0,
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                    TYPE: [exports.bullet, { SHAPE: 5, }],
                }, }
                  ],
        };
exports.developerBody = {
    LABEL: '',
    CONTROLLERS: ['spin'], 
    COLOR: 38,
    SHAPE: 9,
    INDEPENDENT: true,
};
exports.developerBody2 = {
    LABEL: '',
    CONTROLLERS: ['reversespin'], 
    COLOR: 36,
    SHAPE: 9,
    INDEPENDENT: true,
};
    exports.annigun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        //CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
         POSITION: [ 20.5,  19.5,     1,      0,      0,      0,      0,   ],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                        TYPE: exports.bullet,
                }, }
        ],
    };
    exports.annigun2 = {
        PARENT: [exports.genericTank],
        LABEL: '',
        //CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
         POSITION: [ 20.5,  19.5,     1,      0,      0,      0,      0,   ],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                        TYPE: exports.bullet,
                }, }
        ],
    };
        exports.developer = {
            PARENT: [exports.genericTank],
            LABEL: 'DEVELOPER',
          SIZE: 30,
          COLOR: 45,
            RESET_UPGRADES: true,
            SKILL: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,],
               FACING_TYPE: 'autospin',
            LEVEL: 45,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 9999,
                HEALTH: 1000000000,
                DAMAGE: 1,
                DENSITY: 20
            },
            SHAPE: 9,

            TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                POSITION: [  23,   0,      0,      0,     360,  0,], 
                TYPE: exports.developerBody,
              }, {
                POSITION: [  11,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.annigun, { INDEPENDENT: false, COLOR: 44, }]
            }],     
        };
        exports.ethanbosses = {
            PARENT: [exports.genericTank],
            LABEL: 'Ethans Bosses',
          SIZE: 30,
          COLOR: 49,
            RESET_UPGRADES: true,
            SKILL: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8,],
               FACING_TYPE: 'autospin',
            LEVEL: 45,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 9999,
                HEALTH: 1000000000,
                DAMAGE: 1,
                DENSITY: 20
            },
            SHAPE: 9,

            TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                POSITION: [  23,   0,      0,      0,     360,  0,], 
                TYPE: exports.developerBody2,
              }, {
                POSITION: [  11,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.annigun, { INDEPENDENT: false, COLOR: 16, }]
            }],     
        };
exports.betatester = {
            PARENT: [exports.genericTank],
            LABEL: 'BETA-TESTER',
            RESET_UPGRADES: true,
            LEVEL: 45,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 10,
                HEALTH: 100,
                DAMAGE: 10,
                DENSITY: 20,
                FOV: 0.85,
            },
            HAS_NO_RECOIL: true,
            SKILL_CAP: [dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl],
            SHAPE: 0,
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                    TYPE: [exports.bullet, { SHAPE: 5, }],
                }, }]
        };
        exports.misc = {
            PARENT: [exports.genericTank],
            LABEL: 'Misc',
            RESET_UPGRADES: true,
            LEVEL: 45,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 10,
                HEALTH: 100,
                DAMAGE: 10,
                DENSITY: 20,
                FOV: 0.85,
            },
            SHAPE: 0,
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                    TYPE: [exports.bullet, { SHAPE: 5, }],
                }, }, 
            ],
        };

        exports.beta = {
            PARENT: [exports.genericTank],
            LABEL: 'Beta Tanks',
            RESET_UPGRADES: true,
            LEVEL: 60,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 10,
                HEALTH: 100,
                DAMAGE: 10,
                DENSITY: 20,
                FOV: 0.85,
            },
            SHAPE: 0,
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                    TYPE: [exports.bullet, { SHAPE: 5, }],
                }, }, 
            ],
        };
exports.betabosses = {
            PARENT: [exports.genericTank],
            LABEL: 'Beta Bosses',
            RESET_UPGRADES: true,
            LEVEL: 60,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 10,
                HEALTH: 100,
                DAMAGE: 10,
                DENSITY: 20,
                FOV: 0.85,
            },
            SHAPE: 0,
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                    TYPE: [exports.bullet, { SHAPE: 5, }],
                }, }, 
            ],
        };
        exports.removed = {
            PARENT: [exports.genericTank],
            LABEL: 'Removed Tanks',
            RESET_UPGRADES: true,
            LEVEL: 60,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 10,
                HEALTH: 100,
                DAMAGE: 10,
                DENSITY: 20,
                FOV: 0.85,
            },
            SHAPE: 0,
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                    TYPE: [exports.bullet, { SHAPE: 5, }],
                }, }, 
            ],
        };
        exports.removed2 = {
            PARENT: [exports.genericTank],
            LABEL: 'Removed Tanks 2',
            RESET_UPGRADES: true,
            LEVEL: 60,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 10,
                HEALTH: 100,
                DAMAGE: 10,
                DENSITY: 20,
                FOV: 0.85,
            },
            SHAPE: 0,
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                    TYPE: [exports.bullet, { SHAPE: 5, }],
                }, }, 
            ],
        };
        exports.bosses = {
            PARENT: [exports.genericTank],
            LABEL: 'ELITE CRASHERS',
            RESET_UPGRADES: true,
            LEVEL: 60,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 10,
                HEALTH: 100,
                DAMAGE: 10,
                DENSITY: 20,
                FOV: 0.85,
            },
            SHAPE: 0,
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                    TYPE: [exports.bullet, { SHAPE: 5, }],
                }, }, 
            ],
        };
exports.bosses2 = {
            PARENT: [exports.genericTank],
            LABEL: 'POLYGON BOSSES',
            RESET_UPGRADES: true,
            LEVEL: 60,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 10,
                HEALTH: 100,
                DAMAGE: 10,
                DENSITY: 20,
                FOV: 0.85,
            },
            SHAPE: 0,
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                    TYPE: [exports.bullet, { SHAPE: 5, }],
                }, }, 
            ],
        };
exports.bosses3 = {
            PARENT: [exports.genericTank],
            LABEL: 'CELESTIALS',
            RESET_UPGRADES: true,
            LEVEL: 60,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 10,
                HEALTH: 100,
                DAMAGE: 10,
                DENSITY: 20,
                FOV: 0.85,
            },
            SHAPE: 0,
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                    TYPE: [exports.bullet, { SHAPE: 5, }],
                }, }, 
            ],
        };
exports.bossesspecial = {
            PARENT: [exports.genericTank],
            LABEL: 'ROGUE CELESTIALS',
            RESET_UPGRADES: true,
            LEVEL: 60,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 10,
                HEALTH: 100,
                DAMAGE: 10,
                DENSITY: 20,
                FOV: 0.85,
            },
            SHAPE: 0,
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                    TYPE: [exports.bullet, { SHAPE: 5, }],
                }, }, 
            ],
        };
exports.bosses4 = {
            PARENT: [exports.genericTank],
            LABEL: 'FINAL BOSSES',
            RESET_UPGRADES: true,
            LEVEL: 60,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 10,
                HEALTH: 100,
                DAMAGE: 10,
                DENSITY: 20,
                FOV: 0.85,
            },
            SHAPE: 0,
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                    TYPE: [exports.bullet, { SHAPE: 5, }],
                }, }, 
            ],
        };
            exports.single = {
                PARENT: [exports.genericTank],
                LABEL: 'Single',
                //CONTROLLERS: ['nearestDifferentMaster'],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  20,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    }
                ],
            };
exports.singlestream = {
                PARENT: [exports.genericTank],
                LABEL: 'Streaming Single',
                HAS_NO_RECOIL: true,
                //CONTROLLERS: ['nearestDifferentMaster'],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  19.4,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.singlestream]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    }
                ],
            };
        exports.smash = {
            PARENT: [exports.genericTank],
            LABEL: 'Smasher',
            DANGER: 6,
            BODY: {
                FOV: base.FOV * 1.05,
                DENSITY: base.DENSITY * 2,
            },
            TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                POSITION: [  21.5,   0,      0,      0,     360,  0,], 
                TYPE: exports.smasherBody,
            }],
            IS_SMASHER: true,
            SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl,],
            STAT_NAMES: statnames.smasher,
        };
exports.autosmashrag = {
    PARENT: [exports.bullet],
    LABEL: 'Auto-Smasher',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 1.75,
        RANGE: 120,
        DENSITY: 2,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4.85 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
            TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                POSITION: [  21.5,   0,      0,      0,     360,  0,], 
                TYPE: exports.smasherBody,
            }],
        };
exports.Land = {
  PARENT: [exports.genericTank],
  LABEL: "Landmine",
  DANGER: 7,
  INVISIBLE: [0.09, 0.05],
  BODY: {
    SPEED: base.speed * 1.05,
    FOV: base.FOV * 1.1,
    DENSITY: base.DENSITY * 4
  },
  IS_SMASHER: true,
  SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl],
  STAT_NAMES: statnames.smasher,
  TURRETS: [
    {
      /** SIZE     X       Y     ANGLE    ARC */
      POSITION: [21, 0, 0, 0, 360, 0], 
      TYPE: exports.smasherBody
    },
    {
      POSITION: [21, 0, 0, 90, 360, 0],
      TYPE: exports.smasherBody2
    }
  ]
};
        exports.whywhywhy = {
            PARENT: [exports.genericTank],
            LABEL: '*smack*',
            DANGER: 6,
            BODY: {
                FOV: base.FOV * 1.35,
                DENSITY: base.DENSITY * 2,
                DAMAGE: 129038123829138019283 * 219383,
                HEALTH: 912839021839019823091 * 192083,
                SPEED: base.SPEED * 1.05
            },
            TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                POSITION: [  23.5,   0,      0,      0,     360,  0,], 
                TYPE: exports.smasherBody21,
            }, {
              POSITION: [ 23.5, 0, 0, 0, 360, 0],
              TYPE: exports.smasherBody32,
            }],
            IS_SMASHER: true,
           SKILL: [15,15,15,15,15,15,15,15,15,15],
           SKILL_CAP: [susskl, 0, 0, 0, 0, susskl, susskl, susskl, susskl, susskl],
            STAT_NAMES: statnames.smasher,
        };
        exports.johnathansprogects = {
            PARENT: [exports.genericTank],
            LABEL: '*JOHNATHANS PROGECT*',
            DANGER: 6,
            TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                POSITION: [  23.5,   0,      0,      0,     360,  0,], 
                TYPE: exports.smasherBody21,
            }, {
              POSITION: [ 23.5, 0, 0, 0, 360, 0],
              TYPE: exports.smasherBody32,
            }],
           SKILL: [15,15,15,15,15,15,15,15,15,15],
           SKILL_CAP: [susskl, susskl, susskl, susskl, susskl, susskl, susskl, susskl, susskl, susskl],
  BODY: {
    HEALTH: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
    DAMAGE: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
  REGEN: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
    SHIELD: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
    SPEED: base.SPEED* 1.3,
    FOV: 1.2
  },
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  13,    0.000001,     1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.op, g.stream]),
        TYPE: exports.bulletenableai,
        }, }, {
        POSITION: [  15.5,     10,      1,      0,      0,      0,      0,   ],  
       PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.op, g.stream]),
            TYPE: exports.bullet81273
        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  13,    0.000001,     1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.op, g.stream]),
        TYPE: exports.bulletenableai,
        }, }, {
        POSITION: [  15.5,     10,      1,      0,      0,      0,      0,   ],  
       PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.op, g.stream]),
            TYPE: exports.bullet81273
        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  13,    0.000001,     1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.op, g.stream]),
        TYPE: exports.bulletenableai,
        }, }, {
        POSITION: [  15.5,     10,      1,      0,      0,      0,      0,   ],  
       PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.op, g.stream]),
            TYPE: exports.bullet81273
        }, },
    ],
};
        exports.allhailknockback = {
            PARENT: [exports.genericTank],
            LABEL: 'No more hiding',
            DANGER: 6,
            TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                POSITION: [  23.5,   0,      0,      0,     360,  0,], 
                TYPE: exports.smasherBody21,
            }, {
              POSITION: [ 23.5, 0, 0, 0, 360, 0],
              TYPE: exports.smasherBody32,
            }],
           SKILL: [15,15,15,15,15,15,15,15,15,15],
           SKILL_CAP: [susskl, susskl, susskl, susskl, susskl, susskl, susskl, susskl, susskl, susskl],
  BODY: {
    HEALTH: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
    DAMAGE: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
  REGEN: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
    SHIELD: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999*999,
    SPEED: base.SPEED* 1.3,
    FOV: 1.2
  },
    //CONTROLLERS: ['nearestDifferentMaster'],
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  13,    0.000001,     1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.bakakaba, g.stream]),
        TYPE: exports.bullet81273,
        }, }
    ],
};
            exports.enderpart1 = {
                PARENT: [exports.genericTank],
                LABEL: 'Auto-5',
                DANGER: 7,
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  11,     8,      0,      0,     190, 0], 
                        TYPE: exports.CLOSER,
                            }, {
                    POSITION: [  11,     8,      0,      72,    190, 0], 
                        TYPE: exports.CLOSER,
                            }, {
                    POSITION: [  11,     8,      0,     144,    190, 0], 
                        TYPE: exports.CLOSER,
                            }, {
                    POSITION: [  11,     8,      0,     216,    190, 0], 
                        TYPE: exports.CLOSER,
                            }, {
                    POSITION: [  11,     8,      0,     288,    190, 0], 
                        TYPE: exports.CLOSER,
                            },
                ],
            };
exports.enderpart2 = {
                PARENT: [exports.genericTank],
                LABEL: 'Auto-5',
                DANGER: 7,
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  11,     8,      0,      0,     190, 0], 
                        TYPE: exports.enderpart1,
                            }, {
                    POSITION: [  11,     8,      0,      72,    190, 0], 
                        TYPE: exports.enderpart1,
                            }, {
                    POSITION: [  11,     8,      0,     144,    190, 0], 
                        TYPE: exports.enderpart1,
                            }, {
                    POSITION: [  11,     8,      0,     216,    190, 0], 
                        TYPE: exports.enderpart1,
                            }, {
                    POSITION: [  11,     8,      0,     288,    190, 0], 
                        TYPE: exports.enderpart1,
                            },
                ],
            };
exports.enderpart3 = {
                PARENT: [exports.genericTank],
                LABEL: 'May God Save You',
                DANGER: 7,
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  11,     8,      0,      0,     190, 0], 
                        TYPE: exports.enderpart2,
                            }, {
                    POSITION: [  11,     8,      0,      72,    190, 0], 
                        TYPE: exports.enderpart2,
                            }, {
                    POSITION: [  11,     8,      0,     144,    190, 0], 
                        TYPE: exports.enderpart2,
                            }, {
                    POSITION: [  11,     8,      0,     216,    190, 0], 
                        TYPE: exports.enderpart2,
                            }, {
                    POSITION: [  11,     8,      0,     288,    190, 0], 
                        TYPE: exports.enderpart2,
                            },
                ],
            };
            exports.megasmash = {
                PARENT: [exports.genericTank],
                LABEL: 'Mega-Smasher',
                DANGER: 7,
                BODY: {
                    SPEED: base.speed * 1.05,
                    FOV: base.FOV * 1.1,
                    DENSITY: base.DENSITY * 4,
                },
                IS_SMASHER: true,
                SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl,],
                STAT_NAMES: statnames.smasher,
                TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  24,     0,      0,      0,     360,  0,], 
                    TYPE: exports.megasmashBody,
                }],
            };
            exports.spike = {
                PARENT: [exports.genericTank],
                LABEL: 'Spike',
                DANGER: 7,
                BODY: {
                    SPEED: base.speed*0.9,
                    DAMAGE: base.DAMAGE * 1.1,
                    FOV: base.FOV * 1.05,
                    DENSITY: base.DENSITY * 2,
                },
                HITS_OWN_TYPE: "hard",
                IS_SMASHER: true,
                SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl,],
                STAT_NAMES: statnames.smasher,
                TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                    POSITION: [ 20.5,    0,      0,      0,     360,  0,], 
                    TYPE: exports.spikeBody,
                    }, { 
                    POSITION: [ 20.5,    0,      0,     120,    360,  0,], 
                    TYPE: exports.spikeBody,
                    }, {
                    POSITION: [ 20.5,    0,      0,     240,    360,  0,], 
                    TYPE: exports.spikeBody,
                }],
            }; 
            exports.weirdspike = {
                PARENT: [exports.genericTank],
                LABEL: 'Spike',
                DANGER: 7,
                BODY: {
                    DAMAGE: base.DAMAGE * 1.15,
                    FOV: base.FOV * 1.05,
                    DENSITY: base.DENSITY * 1.5,
                },
                IS_SMASHER: true,
                SKILL_CAP: [smshskl, 0, 0, 0, 0, smshskl, smshskl, smshskl, smshskl, smshskl,],
                STAT_NAMES: statnames.smasher,
                TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                    POSITION: [ 20.5,    0,      0,      0,     360,  0,], 
                    TYPE: exports.spikeBody1,
                    }, { 
                    POSITION: [ 20.5,    0,      0,     180,    360,  0,], 
                    TYPE: exports.spikeBody2,
                }],
            };       
            exports.autosmash = makeAuto(exports.smash, 'Auto-Smasher', { type: exports.autoSmasherTurret, size: 11, });
            exports.smasherrag = makeAuto(exports.autosmashrag, 'Auto-Smasher', { type: exports.oldAutoSmasherTurret, size: 11,});
            exports.autosmash.SKILL_CAP = [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl,];

    exports.twin = {
        PARENT: [exports.genericTank],
        LABEL: 'Twin',
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,     8,      1,      0,     5.5,     0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.bullet,
            }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,     8,      1,      0,    -5.5,     0,     0.5,  ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.bullet,
            }, }, 
        ],
    };
exports.righty = {
  PARENT: [exports.bullet],
  LABEL: "bullet",
  CONTROLLERS: ['alwaysFire'],
  GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [  6,     10,      1,      4,      0,      110,      0.2,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange, g.mach, g.doublereload, g.nospeed, g.tonsmorrecoil]),
                    TYPE: exports.bulletghost,
                }, }, {   
            POSITION: [  6,     10,      1,      4,      0,     250,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange, g.mach, g.doublereload, g.nospeed, g.tonsmorrecoil]),
                    TYPE: exports.bulletghost,
                }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [  6,     4,      1,      4,      0,      180,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange,g.lowrange, g.mach, g.sunchip, g.sunchip, g.verylowspeed, g.verylowspeed, g.verylowspeed, g.verylowspeed, g.norecoil]),
                    TYPE: exports.bullet,
                }, }, {   
            POSITION: [  6,     4,      1,      4,      0,     180,     0.25,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange,g.lowrange, g.mach, g.sunchip, g.sunchip, g.verylowspeed, g.verylowspeed, g.verylowspeed, g.verylowspeed, g.norecoil]),
                    TYPE: exports.bullet,
                }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [  6,     4,      1,      4,      0,      180,      0.5,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange,g.lowrange, g.mach, g.sunchip, g.sunchip, g.verylowspeed, g.verylowspeed, g.verylowspeed, g.verylowspeed, g.norecoil]),
                    TYPE: exports.bullet,
                }, }, {   
            POSITION: [  6,     4,      1,      4,      0,     180,     0.75,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange,g.lowrange, g.mach, g.sunchip, g.sunchip, g.verylowspeed, g.verylowspeed, g.verylowspeed, g.verylowspeed, g.norecoil]),
                    TYPE: exports.bullet,
                }, },
        ],
};
exports.lefty = {
  PARENT: [exports.bullet],
  LABEL: "bullet",
  CONTROLLERS: ['alwaysFire'],
  GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [  6,     10,      1,      4,      0,      110,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange, g.mach, g.doublereload, g.nospeed, g.tonsmorrecoil]),
                    TYPE: exports.bulletghost,
                }, }, {   
            POSITION: [  6,     10,      1,      4,      0,     250,     0.2,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange, g.mach, g.doublereload, g.nospeed, g.tonsmorrecoil]),
                    TYPE: exports.bulletghost,
                }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [  6,     4,      1,      4,      0,      180,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange,g.lowrange, g.mach, g.sunchip, g.sunchip, g.verylowspeed, g.verylowspeed, g.verylowspeed, g.verylowspeed, g.norecoil]),
                    TYPE: exports.bullet,
                }, }, {   
            POSITION: [  6,     4,      1,      4,      0,     180,     0.25,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange,g.lowrange, g.mach, g.sunchip, g.sunchip, g.verylowspeed, g.verylowspeed, g.verylowspeed, g.verylowspeed, g.norecoil]),
                    TYPE: exports.bullet,
                }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [  6,     4,      1,      4,      0,      180,      0.5,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange,g.lowrange, g.mach, g.sunchip, g.sunchip, g.verylowspeed, g.verylowspeed, g.verylowspeed, g.verylowspeed, g.norecoil]),
                    TYPE: exports.bullet,
                }, }, {   
            POSITION: [  6,     4,      1,      4,      0,     180,     0.75,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.lowrange,g.lowrange,g.lowrange, g.mach, g.sunchip, g.sunchip, g.verylowspeed, g.verylowspeed, g.verylowspeed, g.verylowspeed, g.norecoil]),
                    TYPE: exports.bullet,
                }, },
        ],
};
exports.suchwow = {
        PARENT: [exports.genericTank],
        LABEL: 'Missle Array',
        GUNS: [ { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  24,     12,      1,      0,    0,     0,     0,  ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.morereloadx, g.bitlessspeed]),
                TYPE: exports.bullet,
            }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  22,     4,      1,      0,     7.5,     0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.morereloadx, g.verylowspeed]),
                TYPE: exports.lefty,
            }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  22,     4,      1,      0,    2.5,     0,     0,  ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.morereloadx, g.verylowspeed]),
                TYPE: exports.righty,
            }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  22,     4,      1,      0,     -2.5,     0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.morereloadx, g.verylowspeed]),
                TYPE: exports.lefty,
            }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  22,     4,      1,      0,    -7.5,     0,     0,  ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.morereloadx, g.verylowspeed]),
                TYPE: exports.righty,
            }, },
        ],
    };
  exports.great = {
        PARENT: [exports.genericTank],
        LABEL: 'great',
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,     8,      1,      2,     0,     0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.cool, g.twin]),
                TYPE: exports.bullet,
            },},{
               POSITION: [  20,     5,      1,      3,     0,     0,      0,   ],
},
        ],
    };
// Now upgrades from Penta //how change upgrade path?
    exports.pentatrap = {
        PARENT: [exports.genericTank],
        LABEL: 'Support-Penta',
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16,     8,      1,      0,     0.5,     35,      0.5,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]), //outer cannons
                TYPE: exports.trap2,
            }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16,     8,      1,      0,    -0.5,     -35,     0.5,  ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]), //outer cannons
                TYPE: exports.trap2,
            }, }, {
            POSITION: [  14,     8,      1,      0,     0.5,     45,      1,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]), //outer cannons
                TYPE: exports.trap2,
            }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  14,     8,      1,      0,    -0.5,     -45,     1,  ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]), //outer cannons
                TYPE: exports.trap2,
            }, }, {
            POSITION: [  20,     12,      -1.4,      0,     0,     0,      0,   ], 
            }, {
            POSITION: [  18,     8,      1.5,      0,    0,     0,     0,  ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.pound]), // makes center cannon more powerful
                TYPE: exports.trap2,
            }, }, 
        ]
    };
exports.cum = {
    LABEL: 'cum',
    TYPE: 'cum',
    ACCEPTS_SCORE: false,
    COLOLR: 14,
    BODY: {
        PENETRATION: 420,
        SPEED: 3.75,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 69 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.funny = {
        PARENT: [exports.genericTank],
        LABEL: 'Thy Thing',
        COLOR: 6,
        SHAPE: 4,
        HAS_NO_RECOIL: true,
        BODY: {
          
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                             POSITION: [  50,     17,      0,      0,      0,      0,      0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.cum,
                        }, }, { 
                    POSITION: [  50,     17,      1,      0,      0,      0,     0.2, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.cum,
                        }, }, { 
                    POSITION: [  50,     17,      1,      0,      0,      0,     0.4, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.cum,
                        }, }, { 
                    POSITION: [  50,     17,      1,      0,      0,      0,     0.6, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.cum,
                        }, },  { 
                    POSITION: [  50,     17,      1,      0,      0,      0,     0.8, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.cum,
                        }, }, {
                     POSITION: [  55,     17,      -1.4,      0,     0,     0,      0,   ], 
                      PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.sniper]),
                TYPE: exports.bulletghost,
            }, },
             {
            POSITION: [  3,     20.3,      1,      45,     0,     0,      0,   ], 
             }
               
        ],
  TURRETS: [{
    POSITION: [  20,     0,      0,      0,     360,  1], 
                    TYPE: exports.baller,
  },{
    POSITION: [  23,     -2.5,      -12.5,      0,     360,  1], 
                    TYPE: exports.balls,
                        }, {
   POSITION: [  23,     -2.5,      12.5,      0,     360,  1], 
                    TYPE: exports.balls,
                        }]
    };
exports.twinX = {
        PARENT: [exports.genericTank],
        LABEL: '',
        COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16.5,     7.6,      1,      0,     5.5,     0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: exports.bullet,
            }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16.5,     7.6,      1,      0,    -5.5,     0,     0.5,  ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                TYPE: exports.bullet,
            }, }, 
        ],
    };
        exports.gunner = {
            PARENT: [exports.genericTank],
            LABEL: 'Gunner',
            DANGER: 6,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  12,    3.5,     1,      0,     7.25,    0,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  12,    3.5,     1,      0,    -7.25,    0,     0.75, ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  16,    3.5,     1,      0,     3.75,    0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  16,    3.5,     1,      0,    -3.75,    0,     0.25, ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast]),
                        TYPE: exports.bullet,
                    }, }, 
            ],
        };
 exports.bubbles = {
        PARENT: [exports.genericTank],
        LABEL: 'Bubble Gun',
   HAS_NO_RECOIL: true,
        GUNS: [ {    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [    12,     10,     1.4,     8,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            }, },{
              POSITION: [    12,     10,     1.4,     8,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            }, },{
          POSITION: [    8,     8,     1.4,     9,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfspeed, g.halfreload]),
                TYPE: exports.bulletghost,
            },},{
              POSITION: [    4,     6,     1,     10,      4,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            },},{
              POSITION: [    4,     6,     1,     10,      -4,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            },},{    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [    12,     10,     1.4,     8,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            }, },{
          POSITION: [    8,     8,     1.4,     9,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfspeed, g.halfreload]),
                TYPE: exports.bulletghost,
            },},{
              POSITION: [    4,     6,     1,     10,      4,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            },},{
              POSITION: [    4,     6,     1,     10,      -4,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            },},
        ],
    };
 exports.bubbler = {
        PARENT: [exports.genericTank],
        LABEL: 'Bubble Gunner',
   HAS_NO_RECOIL: true,
        GUNS: [ {    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [    12,     10,     1.4,     8,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            }, },{
              POSITION: [    12,     10,     1.4,     8,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            }, },{
          POSITION: [    8,     8,     1.4,     9,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfspeed, g.halfreload]),
                TYPE: exports.bulletghost,
            },},{
              POSITION: [    4,     6,     1,     10,      4,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            },},{
              POSITION: [    4,     6,     1,     10,      -4,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            },},{    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [    12,     10,     1.4,     8,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            }, },{
          POSITION: [    8,     8,     1.4,     9,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfspeed, g.halfreload]),
                TYPE: exports.bulletghost,
            },},{
              POSITION: [    4,     6,     1,     10,      4,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            },},{
              POSITION: [    4,     6,     1,     10,      -4,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            },},{    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [    12,     10,     1.4,     8,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            }, },{
              POSITION: [    12,     10,     1.4,     8,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            }, },{
          POSITION: [    8,     8,     1.4,     9,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfspeed, g.halfreload]),
                TYPE: exports.bulletghost,
            },},{
              POSITION: [    4,     6,     1,     10,      4,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            },},{
              POSITION: [    4,     6,     1,     10,      -4,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            },},{    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [    12,     10,     1.4,     8,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            }, },{
          POSITION: [    8,     8,     1.4,     9,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfspeed, g.halfreload]),
                TYPE: exports.bulletghost,
            },},{
              POSITION: [    4,     6,     1,     10,      4,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            },},{
              POSITION: [    4,     6,     1,     10,      -4,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            },},{    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [    12,     10,     1.4,     8,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            }, },{
              POSITION: [    12,     10,     1.4,     8,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            }, },{
          POSITION: [    8,     8,     1.4,     9,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfspeed, g.halfreload]),
                TYPE: exports.bulletghost,
            },},{
              POSITION: [    4,     6,     1,     10,      4,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            },},{
              POSITION: [    4,     6,     1,     10,      -4,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            },},{    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          POSITION: [    12,     10,     1.4,     8,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            }, },{
          POSITION: [    8,     8,     1.4,     9,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfspeed, g.halfreload]),
                TYPE: exports.bulletghost,
            },},{
              POSITION: [    4,     6,     1,     10,      4,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            },},{
              POSITION: [    4,     6,     1,     10,      -4,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.halfspeed, g.halfreload, g.halfreload]),
                TYPE: exports.bubble,
            },},
        ],
    };
            exports.machinegunner = {
                PARENT: [exports.genericTank],
                LABEL: 'Machine Gunner',
                DANGER: 6,
                BODY: {
                    SPEED: base.SPEED * 0.9,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,     3,     4.0,    -3,      5,      0,     0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  14,     3,     4.0,    -3,     -5,      0,     0.8,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  14,     3,     4.0,     0,     2.5,     0,     0.4,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  14,     3,     4.0,     0,    -2.5,     0,     0.2,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
                            TYPE: exports.bullet,
                        }, },  { 
                    POSITION: [  14,     3,     4.0,     3,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.machgun]),
                            TYPE: exports.bullet,
                        }, }, 
                ]
            };
            exports.autogunner = makeAuto(exports.gunner);            
            exports.nailgun = {
                PARENT: [exports.genericTank],
                LABEL: 'Nailgun',
                DANGER: 7,
                BODY: {
                    FOV: base.FOV * 1.1,
                    SPEED: base.SPEED * 0.9,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  19,     2,      1,      0,    -2.5,     0,     0.25, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     2,      1,      0,     2.5,     0,     0.75, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     2,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],
                        },
                ],
            };

        exports.double = {
            PARENT: [exports.genericTank],
            LABEL: 'Double Twin',
            DANGER: 6,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  20,     8,      1,      0,     5.5,     0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  20,     8,      1,      0,    -5.5,     0,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  20,     8,      1,      0,     5.5,    180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  20,     8,      1,      0,    -5.5,    180,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double]),
                        TYPE: exports.bullet,
                    }, }, 
            ],
        };
            exports.tripletwin = {
                PARENT: [exports.genericTank],
                LABEL: 'Triple Twin',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  20,     8,      1,      0,     5.5,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,    -5.5,     0,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,     5.5,    120,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,    -5.5,    120,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,     5.5,    240,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,    -5.5,    240,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.spam, g.double]),
                            TYPE: exports.bullet,
                        }, }, 
                ],
            };
            exports.autodouble = makeAuto(exports.double, 'Auto-Double');
            exports.split = {
                PARENT: [exports.genericTank],
                LABEL: 'Hewn Double',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  19,     8,      1,      0,     5.5,     25,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.morerecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     8,      1,      0,    -5.5,    -25,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.twin, g.double, g.hewn, g.morerecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,     5.5,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn, g.morerecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,    -5.5,     0,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn, g.morerecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,     5.5,    180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  20,     8,      1,      0,    -5.5,    180,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.double, g.hewn]),
                            TYPE: exports.bullet,
                        }, }, 
                ],
            };

            exports.bentdouble = {
                PARENT: [exports.genericTank],
                LABEL: 'Bent Double',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  19,     8,      1,      0,     -1,     -25,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     8,      1,      0,      1,      25,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  22,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     8,      1,      0,     -1,     155,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     8,      1,      0,      1,    -155,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  22,     8,      1,      0,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.double]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
        exports.bent = {
            PARENT: [exports.genericTank],
            LABEL: 'Triple Shot',
            DANGER: 6,
            BODY: {
                SPEED: base.SPEED * 0.9,
            },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  19,     8,      1,      0,     -2,    -20,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  19,     8,      1,      0,      2,     20,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [  22,     8,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                        TYPE: exports.bullet,
                    }, },
            ],
        };
exports.benttrap = {
            PARENT: [exports.genericTank],
            LABEL: 'Triple-Trapper',
            DANGER: 6,
            BODY: {
                SPEED: base.SPEED * 0.9,
            },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  26,     8,      1.3,      0,     0,    0,     1,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                        TYPE: exports.trapsanc,
                    }, }, {
                POSITION: [  24,     8,      1.3,      0,      0,     0,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                        TYPE: exports.trapsanc,
                    }, }, {
                POSITION: [  22,     8,      1.3,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent]),
                        TYPE: exports.trapsanc,
                    }, },
            ],
        };
            exports.penta = {
                PARENT: [exports.genericTank],
                LABEL: 'Penta Shot',
                DANGER: 7,
                BODY: {
                    SPEED: base.SPEED * 0.85,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  16,     8,      1,      0,     -3,    -30,    0.667, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  16,     8,      1,      0,      3,     30,    0.667, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     8,      1,      0,     -2,    -15,    0.333, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     8,      1,      0,      2,     15,    0.333, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  22,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
exports.hybridpenta = makeHybrid(exports.penta, "Hybrid-Penta")
exports.hybridpentaX = makeAuto(exports.hybridpenta, "Hybrid-Auto-Penta")
            exports.septa = {
                PARENT: [exports.genericTank],
                LABEL: 'Septa Shot',
                DANGER: 7,
                BODY: {
                    SPEED: base.SPEED * 0.85,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  13,     8,      1,      0,     -4,    -30,    0.75, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.bent]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  13,     8,      1,      0,      4,     30,    0.75, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.bent]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  16,     8,      1,      0,     -3,    -20,    0.5, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.bent]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  16,     8,      1,      0,      3,     20,    0.5, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.bent]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     8,      1,      0,     -2,    -10,    0.25, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.bent]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     8,      1,      0,      2,     10,    0.25, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.bent]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  22,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.bent, g.bent]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };

            exports.benthybrid = makeHybrid(exports.bent, 'Bent Hybrid');
exports.whything = {
            PARENT: [exports.genericTank],
            DANGER: 6,
            BODY: {
                FOV: base.FOV * 1.4,
            },
            LABEL: 'Redistributer',
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  5,    6,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.redi]),
                        TYPE: exports.bulletredi,
                    }, }, {
                POSITION: [  6,    4,      1,      14.5,      -0.59,      -20,      0    ],
                    }, {
                POSITION: [  6,    4,      1,      14.5,       0.59,       20,       0    ],
                    }, {
                POSITION: [  8,    15,      1,      12.75,      0,      0,      0,   ],
                    PROPERTIES: {
                      SHOOT_SETTINGS: combineStats([g.basic, g.redi]),
                      TYPE: exports.bulletghost,
                    }, }, {
                      POSITION: [   7,    15,    -1.15,    5.75,      0,      0,      0,   ],
                    },
            ],
        };
        exports.triple = {
            PARENT: [exports.genericTank],
            DANGER: 6,
            BODY: {
                FOV: base.FOV * 1.05,
            },
            LABEL: 'Triplet',
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,      1,      0,      5,      0,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  18,    10,      1,      0,     -5,      0,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  21,    10,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                        TYPE: exports.bullet,
                    }, }, 
            ],
        };
            exports.quint = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                BODY: {
                    FOV: base.FOV * 1.1,
                },
                LABEL: 'Quintuplet',
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  16,    10,      1,      0,     -5,      0,    0.667, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  16,    10,      1,      0,      5,      0,    0.667, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  19,    10,      1,      0,     -2.5,      0,    0.333, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                            TYPE: exports.bullet,
                        }, },  { 
                    POSITION: [  19,    10,      1,      0,      2.5,      0,    0.333, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                            TYPE: exports.bullet,
                        }, },  { 
                    POSITION: [  22,    10,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple, g.quint]),
                            TYPE: exports.bullet,
                        }, }, 
                ],
            };        
            exports.dual = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                BODY: {
                    ACCEL: base.ACCEL * 0.8,
                    FOV: base.FOV * 1.1,
                },
                LABEL: 'Dual',
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     7,      1,      0,     5.5,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                            TYPE: exports.bullet,
                            LABEL: 'Small',
                        }, }, { 
                    POSITION: [  18,     7,      1,      0,    -5.5,     0,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual, g.lowpower]),
                            TYPE: exports.bullet,
                            LABEL: 'Small',
                        }, }, { 
                    POSITION: [  16,    8.5,     1,      0,     5.5,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                            TYPE: exports.bullet,
                        }, },  { 
                    POSITION: [  16,    8.5,     1,      0,    -5.5,     0,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.dual]),
                            TYPE: exports.bullet,
                        }, }, 
                ],
            };

    exports.sniper = {
        PARENT: [exports.genericTank],
        LABEL: 'Sniper',
        BODY: {
            ACCELERATION: base.ACCEL * 0.7, 
            FOV: base.FOV * 1.2,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  24,    8.5,     1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: exports.bullet,
            }, },
        ],
    };
exports.bullet52 = {
  LABEL: "",
  TYPE: "bullet",
  ACCEPTS_SCORE: false,

  BODY: {
    PENETRATION: 999,
    SPEED: 3.75,
    RANGE: 210,
      
    DENSITY: 1.25,
    HEALTH: 3 * wepHealthFactor,
    DAMAGE: 2 * wepDamageFactor,
    PUSHABILITY: 0.3
  },
  FACING_TYPE: "smoothWithMotion",
  CAN_GO_OUTSIDE_ROOM: true,
  HITS_OWN_TYPE: "never",
  // DIE_AT_LOW_SPEED: true,
  DIE_AT_RANGE: true
};
exports.miniboss = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 123,
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
      CONTROLLERS: [
      'nearestDifferentMaster', 'mapAltToFire', 'minion',
      ],
    AI: { STRAFE: false, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'never',
    BROADCAST_MESSAGE: 'A visitor has left!',
};
exports.sussyarena = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 123,
    SKILL: skillSet({
        rld: 1,
        dam: 1, 
        pen: 1,
        str: 1,
        spd: 1,
        atk: 1,
        hlt: 1,
        shi: 1,
        rgn: 1,
        mob: 1,        
    }),
    LEVEL: 45,
      CONTROLLERS: ['nearestDifferentMaster', 'mapAltToFire', 'minion'],
    AI: { STRAFE: false, },
    HITS_OWN_TYPE: 'never',
    BROADCAST_MESSAGE: 'A mini ac has vanished!',
}; 
exports.mini_ac = {
  PARENT: [exports.sussyarena],
  LABEL: "Arena Closer",
  NAME: "Thy Nub of Nubs",
  COLOR: 35,
  BODY: {
    ACCELERATION: base.ACCEL * 2.2,
    FOV: base.FOV * 1.2,
    SPEED: 3.2,
    HEALTH: 30
  },
  FACING_TYPE: "smoothToTarget",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [15, 9, 1, 0, 0, 0, 0],
      PROPERTIES: { 
        SHOOT_SETTINGS: combineStats([g.miniac, g.veryfast]),
        TYPE: exports.bullet52
      }
    }
  ]
};
/** 
ENABLE AI ON TANKS: code = enableis
           POSITION: [  1,    0.01,     1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: exports.bulletenableai,
**/
exports.flamer = {
  PARENT: [exports.genericTank],
  LABEL: "Flamethrower",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [23, 7, 1.7, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.mach,
          g.lessreload
        ]),
        TYPE: exports.flare,
      },
    },
    {
      POSITION: [12, 10, 1.4, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.lessreload]),
        TYPE: exports.flare,
      },
    },
  ],
};
 exports.thatBurningRingOfFire = {
        PARENT: [exports.genericTank],
        LABEL: 'Comet  Shooter',
        HAS_NO_RECOIL: false,
        GUNS: [    //*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY
          {POSITION: [    20,     8,     1.4,     0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.spraybruh, g.halfreload, g.halfreload]),
                TYPE: exports.flame,
            }, },
          {
          POSITION: [    16,     8,     1.4,     0,      -5,      65,      0,   ], 
              PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.spraybruh]),
                TYPE: exports.bulletghost,
            },},{
          POSITION: [    16,     8,     1.4,     0,      5,      295,      0,   ], 
              PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.spraybruh]),
                TYPE: exports.bulletghost,
            },},{
          POSITION: [    22,     8,     2.4,     0,      0,      0,      0,   ], 
              },{
                POSITION: [    18,     4,     0.1,     0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.spraybruh, g.halfreload, g.halfreload]),
                TYPE: exports.bulletghost,
            }, },
        ],
    }; 
            exports.rifle = {
                PARENT: [exports.genericTank],
                LABEL: 'Rifle',
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7, 
                    FOV: base.FOV * 1.225,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */                       
                    POSITION: [  20,    10.5,    1,      0,      0,      0,      0,   ], 
                        }, {
                    POSITION: [  24,     7,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.rifle]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
        exports.assassin = {
            PARENT: [exports.genericTank],
            DANGER: 6,
            LABEL: 'Assassin',
            BODY: {
                ACCELERATION: base.ACCEL * 0.6,
                SPEED: base.SPEED * 0.85,
                FOV: base.FOV * 1.4,
            },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  27,    8.5,     1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [   5,    8.5,    -1.6,    8,      0,      0,      0,   ], 
                },
            ],
        };
exports.sniperelite = {
            PARENT: [exports.genericTank],
            DANGER: 6,
            LABEL: 'Sniper Elite',
            BODY: {
                ACCELERATION: base.ACCEL * 0.6,
                SPEED: base.SPEED * 0.85,
                FOV: base.FOV * 1.4,
            },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  27,    8.5,     1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.weaknspray, g.assass]),
                        TYPE: exports.snipershards,
                    }, }, {
                      POSITION: [  27,    8.5,     1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.weaknspray, g.assass]),
                        TYPE: exports.snipershards,
                    }, }, {
                      POSITION: [  27,    8.5,     1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.weaknspray, g.assass]),
                        TYPE: exports.snipershards,
                    }, }, {
                      POSITION: [  27,    8.5,     1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.weaknspray, g.assass]),
                        TYPE: exports.snipershards,
                    }, }, {
                POSITION: [   5,    8.5,    -1.6,    8,      0,      0,      0,   ], 
                },
            ],
        };
exports.outpost = {
            PARENT: [exports.genericTank],
            DANGER: 6,
            LABEL: 'Outpost',
            BODY: {
                ACCELERATION: base.ACCEL * 0.6,
                SPEED: base.SPEED * 0.85,
                FOV: base.FOV * 1.4,
            },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  27,    8.5,     1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [   5,    8.5,    1.6,    8,      0,      0,      0,   ], 
                },{ 
                POSITION: [  10,     4,      0.8,      0,     0,    15,     0,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.nospeed]),
                        TYPE: exports.trapsanc,
                    }, }, {
                POSITION: [  10,     4,      0.8,      0,      0,     30,     0,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.nospeed]),
                        TYPE: exports.trapsanc,
                    }, }, {
                POSITION: [  10,     4,      0.8,      0,      0,      345,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.nospeed]),
                        TYPE: exports.trapsanc,
                    }, },{
                POSITION: [  10,     4,      0.8,      0,      0,      330,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.nospeed]),
                        TYPE: exports.trapsanc,
                    }, },{
                POSITION: [  10,     4,      0.8,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.bent, g.nospeed]),
                        TYPE: exports.trapsanc,
                    }, },
            ],
        };
exports.lazer = {
    LABEL: 'Beam',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 10.5,
        RANGE: 90,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 12 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
    GUNS: [{
           POSITION: [1, 20, 1, 0, 0, 180, 0.2],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder2]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
      } 
    }]
};
exports.lazar = {
                PARENT: [exports.genericTank],
                LABEL: 'Lazer Sniper',
                DANGER: 7,
                BODY: {
                    FOV: 1.3,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                  POSITION: [  28,    3.25,     1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.anni, g.assass, g.halfreloadss]),
                        TYPE: exports.lazer,
                    }, }, {
                    POSITION: [  2,     6,      1,      18,      0,      0,     0.4, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.norecoil]),
                            TYPE: exports.bulletghost,
                          AUTOFIRE: true,
                        }, }, { 
                    POSITION: [  2,     6.5,      1,      16,      0,      0,     0.6, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.norecoil]),
                            TYPE: exports.bulletghost,
                          AUTOFIRE: true,
                        }, }, { 
                    POSITION: [  2,     7,      1,      14,      0,      0,     0.8, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.norecoil]),
                            TYPE: exports.bulletghost,
                          AUTOFIRE: true,
                        }, },  { 
                    POSITION: [  2,     7.5,      1,      12,      0,      0,     1, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.norecoil]),
                            TYPE: exports.bulletghost,
                          AUTOFIRE: true,
                        }, },{ 
                    POSITION: [  2,     8,      1,      10,      0,      0,     1.2, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream, g.norecoil]),
                            TYPE: exports.bulletghost,
                          AUTOFIRE: true,
                        }, },
                ],
            };
exports.slaughterer = {
            PARENT: [exports.genericTank],
            DANGER: 6,
            LABEL: 'Assassin',
            BODY: {
                ACCELERATION: base.ACCEL * 0.6,
                SPEED: base.SPEED * 1.05,
                FOV: base.FOV * 1.5,
            },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  27,    8.5,     1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                        TYPE: exports.bullet,
                    }, }, {
                POSITION: [   5,    8.5,    -1.6,    8,      0,      0,      0,   ], 
                       }, {
                   POSITION: [  15,     7,      1,      0,      0,     0,    0.5,  ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,     0,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {
                  POSITION: [  15,     7,      1,      0,      0,     0,    0.5,  ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,     0,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }
                   
            ],
        };
            exports.ranger = {
                PARENT: [exports.genericTank],
                LABEL: 'Ranger',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.5,
                    SPEED: base.SPEED * 0.8,
                    FOV: 
                  base.FOV * 1.5,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  32,    8.5,     1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [   5,    8.5,    -1.6,    8,      0,      0,      0,   ], 
                    },
                ],
            };
exports.God = {
                PARENT: [exports.genericTank],
                LABEL: 'Precision Sniper',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.5,
                    SPEED: base.SPEED * 0.8,
                    FOV: 
                  base.FOV * 1.5,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,    8.5,     1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assassx]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [   5,    5.5,    -1.6,    8,      0,      0,      0,   ], 
                    },
                ],
            };
            exports.autoass = makeAuto(exports.assassin, "");

        exports.hunter = {
            PARENT: [exports.genericTank],
            LABEL: 'Hunter',
            DANGER: 6,
            BODY: {
                ACCELERATION: base.ACCEL * 0.7,
                SPEED: base.SPEED * 0.9,
                FOV: base.FOV * 1.25,
            },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  24,     8,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  21,    12,      1,      0,      0,      0,     0.25, ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
                        TYPE: exports.bullet,
                    }, },
            ],
        };
            exports.preda = {
                PARENT: [exports.genericTank],
                LABEL: 'Predator',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7,
                    SPEED: base.SPEED * 0.85,
                    FOV: base.FOV * 1.3,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  21,    12,      1,      0,      0,      0,     0.15, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  18,    16,      1,      0,      0,      0,     0.3,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
            exports.poach = makeHybrid(exports.hunter, 'Poacher');
            exports.sidewind = {
                PARENT: [exports.genericTank],
                LABEL: 'Sidewinder',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.3,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  10,    11,    -0.5,    14,      0,      0,      0,  ], 
                        }, {
                    POSITION: [  21,    12,    -1.1,     0,      0,      0,      0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.snake,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                ],
            };
            exports.launch = {
                PARENT: [exports.genericTank],
                LABEL: 'Launcher',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.04,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  7,    11.8,    1,    14,      0,      0,      0,  ], 
                                          PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.racket,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                        {
                    POSITION: [  18,    14,    -1.1,     0,      0,      0,      0,  ], 
                        },
                ],
            };

            exports.rocketshoot = {
                PARENT: [exports.genericTank],
                LABEL: 'Rocketeer',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.3,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                                  POSITION: [  7,    11.5,    1,    14,      0,      0,      0,  ], 
                  PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.rocketeer]),
                            TYPE: exports.racketx,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, }, {
                    POSITION: [  7,    14,    1,    14,      0,      0,      0,  ], }, {
                    POSITION: [  18,    14,    -1.25,     0,      0,      0,      0,  ], 
                        },
                ],
            };
    exports.manager = {
        PARENT: [exports.genericTank],
        LABEL: 'Manager',  
        INVISIBLE: [0.09, 0.05],
        STAT_NAMES: statnames.drone,
        DANGER: 5,
        BODY: {
            ACCELERATION: base.ACCEL * 0.75,
            FOV: base.FOV * 1.1,
        },
        MAX_CHILDREN: 10,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,     12,    1.2,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                    TYPE: exports.droneinvis,
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,
                    STAT_CALCULATOR: gunCalcNames.drone,
                }, },
        ],
    };
            exports.master = {
                PARENT: [exports.genericTank],
                LABEL: 'Master',  
                STAT_NAMES: statnames.drone,
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                    FOV: base.FOV * 1.15,
                },
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  16,     1,      0,      0,      0, 0], 
                        TYPE: exports.masterGun,
                            }, {
                    POSITION: [  16,     1,      0,     120,     0, 0], 
                        TYPE: [exports.masterGun, { INDEPENDENT: true, }],
                            }, {
                    POSITION: [  16,     1,      0,     240,     0, 0], 
                        TYPE: [exports.masterGun, { INDEPENDENT: true, }],
                            },
                ],
            };
            exports.elite_master = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                CONTROLLERS: ['spin'],
                LABEL: 'Machine',
                SKILL: [9,9,9,9,9,9,9,9,9,9],
                BODY: {
                FACING_TYPE: "autospin",
                },
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  16,     1,      0,      0,      0, 0], 
                        TYPE: exports.EliteGun,
                            }, {
                    POSITION: [  16,     1,      0,     120,     0, 0], 
                        TYPE: exports.EliteGun
                            }, {
                    POSITION: [  16,     1,      0,     240,     0, 0], 
                        TYPE: exports.EliteGun,
                            },
                ],
            };
        exports.overseer = {
            PARENT: [exports.genericTank],
            LABEL: 'Overseer',  
            DANGER: 6,
            STAT_NAMES: statnames.drone,
            BODY: {
                ACCELERATION: base.ACCEL * 0.75,
                SPEED: base.SPEED * 0.9,
                FOV: base.FOV * 1.1,
            },
            MAX_CHILDREN: 8,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   6,     12,    1.2,     8,      0,     90,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                        TYPE: exports.drone,
                        AUTOFIRE: true,
                        SYNCS_SKILLS: true,
                        STAT_CALCULATOR: gunCalcNames.drone,
                        WAIT_TO_CYCLE: true,     
                    }, }, {
                POSITION: [   6,     12,    1.2,     8,      0,    270,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                        TYPE: exports.drone,
                        AUTOFIRE: true,
                        SYNCS_SKILLS: true,
                        STAT_CALCULATOR: gunCalcNames.drone,
                        WAIT_TO_CYCLE: true,     
                    }, },
            ],
        };
            exports.overlord = {
                PARENT: [exports.genericTank],
                LABEL: 'Overlord',
                DANGER: 7,
                STAT_NAMES: statnames.drone,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.1,
                },
                MAX_CHILDREN: 8,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   6,     12,    1.2,     8,      0,     90,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                        }, }, {
                    POSITION: [   6,     12,    1.2,     8,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.overs]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                    POSITION: [   6,     12,    1.2,     8,      0,     270,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.overs]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   6,     12,    1.2,     8,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.overs]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, },
                ],
            };
            
exports.mothership = {
                PARENT: [exports.genericTank],
                LABEL: 'Small Mothership',
                SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
              NAME: 'Mini Mothership',
              SHAPE: 15,
                DANGER: 7,
                STAT_NAMES: statnames.drone,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.65,
                  HEALTH: 300,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   5,     4,    1,     8,      0,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                        }, }, {
                    POSITION: [   5,     4,    1,     8,      0,     22.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                            AUTOFIRE: true,
                MAX_CHILDREN: 2,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                          POSITION: [   5,     4,    1,     8,      0,     45,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                    POSITION: [   5,     4,    1,     8,      0,     67.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                            AUTOFIRE: true,
                MAX_CHILDREN: 2,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,     90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,     112.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,      135,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.drone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                          }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,      157.5,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone], g.over),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                          }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,      180,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                          }, }, {
                    POSITION: [   5,     4,    1,     8,      0,     -22.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                          POSITION: [   5,     4,    1,     8,      0,     -45,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                    POSITION: [   5,     4,    1,     8,      0,     -67.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,     -90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,     -112.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,      -135,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                          }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,      -157.5,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, },
                ],
            };
exports.mothershipX = {
                PARENT: [exports.genericTank],
                LABEL: 'Mothership',
                SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
              NAME: 'Mothership',
               SIZE: 32,
              SHAPE: 15,
                DANGER: 7,
                STAT_NAMES: statnames.drone,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.65,
                  HEALTH: 300,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   5,     4,    1,     8,      0,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                        }, }, {
                    POSITION: [   5,     4,    1,     8,      0,     22.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                            AUTOFIRE: true,
                MAX_CHILDREN: 2,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                          POSITION: [   5,     4,    1,     8,      0,     45,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                    POSITION: [   5,     4,    1,     8,      0,     67.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                            AUTOFIRE: true,
                MAX_CHILDREN: 2,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,     90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,     112.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,      135,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.drone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                          }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,      157.5,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone], g.over),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                          }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,      180,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                          }, }, {
                    POSITION: [   5,     4,    1,     8,      0,     -22.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                          POSITION: [   5,     4,    1,     8,      0,     -45,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                    POSITION: [   5,     4,    1,     8,      0,     -67.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,     -90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,     -112.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,      -135,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                          }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,      -157.5,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, },
                ],
            };
            exports.overtrap = {
                PARENT: [exports.genericTank],
                LABEL: 'Overtrapper',
                DANGER: 7,
                STAT_NAMES: statnames.generic,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.6,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.2,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   6,     11,    1.2,     8,      0,     125,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,  
                            MAX_CHILDREN: 3,   
                        }, }, {
                    POSITION: [   6,     11,    1.2,     8,      0,     235,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                            MAX_CHILDREN: 3,   
                        }, }, {
                    POSITION: [  14,     8,      1,      0,      0,      0,      0,   ],
                        }, {
                    POSITION: [   4,     8,     1.5,    14,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, },
                ],
            };
            exports.banshee = {
                PARENT: [exports.genericTank],
                LABEL: 'Banshee',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.5,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.1,
                },
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  10,     8,      0,      0,      80, 0], 
                        TYPE: exports.bansheegun,
                            }, {
                    POSITION: [  10,     8,      0,     120,     80, 0], 
                        TYPE: exports.bansheegun,
                            }, {
                    POSITION: [  10,     8,      0,     240,     80, 0], 
                        TYPE: exports.bansheegun,
                            },
                ],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   6,     11,    1.2,     8,      0,      60,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,  
                            MAX_CHILDREN: 2,   
                        }, }, {
                    POSITION: [   6,     11,    1.2,     8,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                            MAX_CHILDREN: 2,   
                        }, }, {
                    POSITION: [   6,     11,    1.2,     8,      0,     300,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                            MAX_CHILDREN: 2,   
                        }, }, 
                    ]
            };
            exports.autoover = makeAuto(exports.overseer, "Auto-Overseer", {type: exports.autoSmasherTurret});
            exports.overlooker = makeAuto(exports.overlord,"Auto-Overlord");
            exports.overgunner = {
                PARENT: [exports.genericTank],
                LABEL: 'Overgunner',
                DANGER: 7,
                STAT_NAMES: statnames.generic,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                    SPEED: base.SPEED * 0.9,
                    FOV: base.FOV * 1.1,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   6,     11,    1.2,     8,      0,     125,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,  
                            MAX_CHILDREN: 3,   
                        }, }, {
                    POSITION: [   6,     11,    1.2,     8,      0,     235,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.meta]),
                            TYPE: exports.drone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                            MAX_CHILDREN: 3,   
                        }, }, {
                    POSITION: [  19,     2,      1,      0,    -2.5,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     2,      1,      0,     2.5,     0,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.slow, g.flank, g.lotsmorrecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  12,    11,      1,      0,      0,      0,      0,   ],
                        },
                ],
            };
        
        function makeSwarmSpawner(guntype) {
            return {
                PARENT: [exports.genericTank],
                LABEL: '',
                BODY: {
                    FOV: 2,
                },
                CONTROLLERS: ['nearestDifferentMaster'], 
                COLOR: 16,
                AI: {
                    NO_LEAD: true,
                    SKYNET: true,
                    FULL_VIEW: true,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,     15,    0.6,    14,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: guntype,
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,          
                        }, }
                ],
            };
        }
        exports.cruiserGun = makeSwarmSpawner(combineStats([g.swarm]));
        exports.cruiser = {
            PARENT: [exports.genericTank],
            LABEL: 'Cruiser',
            DANGER: 6,
            STAT_NAMES: statnames.swarm,
            BODY: {
                ACCELERATION: base.ACCEL * 0.75,
                FOV: base.FOV * 1.2,
            },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   7,    7.5,    0.6,     7,      4,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.swarm]),
                        TYPE: exports.swarm,
                        STAT_CALCULATOR: gunCalcNames.swarm,               
                    }, }, {
                POSITION: [   7,    7.5,    0.6,     7,     -4,      0,     0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.swarm]),
                        TYPE: exports.swarm,
                        STAT_CALCULATOR: gunCalcNames.swarm,         
                    }, },
            ],
        };
            exports.battleship = {
                PARENT: [exports.genericTank],
                LABEL: 'Battleship',
                DANGER: 7,
                STAT_NAMES: statnames.swarm,
                BODY: {
                    ACCELERATION: base.ACCEL,
                    FOV: base.FOV * 1.2,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   7,    7.5,    0.6,     7,      4,     90,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     -4,     90,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm]),
                            TYPE: [exports.autoswarm],
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Autonomous',        
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,      4,     270,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm]),
                            TYPE: [exports.autoswarm],
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Autonomous',         
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     -4,     270,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, },
                ],
            };
 exports.hehelol = {
                PARENT: [exports.genericTank],
                LABEL: 'Battleship',
                DANGER: 7,
                STAT_NAMES: statnames.swarm,
                BODY: {
                    ACCELERATION: base.ACCEL,
                    FOV: base.FOV * 1.2,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   7,    7.5,    0.6,     7,      4,     90,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     -4,     90,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm]),
                            TYPE: [exports.swarm],
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Autonomous',        
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,      4,     270,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm]),
                            TYPE: [exports.swarm],
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Autonomous',         
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     -4,     270,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, },
                ],
               TURRETS: [{
                 POSITION: [  12,     0,      0,     0,    360,  1], 
                    TYPE: [exports.battleship, {INDEPENDENT: false,}]
                        },
                 ]
            };
exports.battleshit = makeAuto(exports.hehelol, "battles*#$");
exports.beehive = {
  PARENT: [exports.genericTank],
  LABEL: "Beehive",
  DANGER: 7,
  STAT_NAMES: statnames.swarm,
  BODY: {
    HEALTH: base.HEALTH * 0.9,
    SPEED: base.SPEED * 1.95,
    FOV: base.FOV * 1.3,
  },
  GUNS: [{ /*** LENGTH WIDTH ASPECT X Y ANGLE DELAY */
  POSITION: [7,  7.5, 0.6, 7, 0, 0, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.manybee, g.battle2, g.carrier2]),
        TYPE: exports.beeTwT,
      STAT_CALCULATOR: gunCalcNames.swarm,          
                        }, }, {
      POSITION: [7,  7.5, 0.6, 7, 0, 35, 0.5],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.manybee, g.battle2, g.carrier2]),
        TYPE: exports.beeTwT,
      STAT_CALCULATOR: gunCalcNames.swarm,          
                        }, }, {
      POSITION: [7,  7.5, 0.6, 7, 0, -35, 0.5],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.manybee, g.battle, g.carrier]),
        TYPE: exports.beeTwT,
      STAT_CALCULATOR: gunCalcNames.swarm,          
                        }, }, {
      POSITION: [7,  7.5, 0.6, 7, 0, 0, 0],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.manybee, g.battle, g.carrier]),
        TYPE: exports.beeTwT,
      STAT_CALCULATOR: gunCalcNames.swarm,          
                        }, }, {
      POSITION: [7,  7.5, 0.6, 7, 0, 65, 1],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.manybee, g.battle, g.carrier]),
        TYPE: exports.beeTwT,
      STAT_CALCULATOR: gunCalcNames.swarm,          
                        }, }, {
      POSITION: [7,  7.5, 0.6, 7, 0, -65, 1],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.manybee, g.battle, g.carrier]),
        TYPE: exports.beeTwT,
      STAT_CALCULATOR: gunCalcNames.swarm,          
                        }, },
  
  ]
};
exports.craftwater = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 1,
    },
    INDEPENDENT: false,
    FACING_TYPE: 'autospin',
    CONTROLLERS: ['fastspin', 'alwaysFire'],
    COLOR: 16,
    GUNS: [ {/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16,    5,      0.6,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank2]),
                    TYPE: exports.autoswarm,
                }, }, {
            POSITION: [  16,    5,      0.6,      0,      0,      120,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank2]),
                    TYPE: exports.autoswarm,
                },}, {
            POSITION: [  16,    5,      0.6,      0,      0,      240,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank2]),
                    TYPE: exports.autoswarm,
                },}, {
            POSITION: [  16,    9,      0.6,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank2, g.fake]),
                    TYPE: exports.autoswarm,
                }, }, {
            POSITION: [  16,    9,      0.6,      0,      0,      120,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank2, g.fake]),
                    TYPE: exports.autoswarm,
                },}, {
            POSITION: [  16,    9,      0.6,      0,      0,      240,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank2, g.fake]),
                    TYPE: exports.autoswarm,
                },}
        ],
    };
            exports.carrier = {
                PARENT: [exports.genericTank],
                LABEL: 'Carrier',
                DANGER: 7,
                STAT_NAMES: statnames.swarm,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                    FOV: base.FOV * 1.3,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   7,    7.5,    0.6,     7,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,          
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,      2,      40,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,    
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     -2,     -40,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,    
                        }, }
                ],
            };
            exports.watercraft = {
                PARENT: [exports.genericTank],
                LABEL: 'Watercraft',
                DANGER: 7,
                STAT_NAMES: statnames.swarm,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                    FOV: base.FOV * 1.3,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   7,    7.5,    0.6,     7,      2,      45,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,    
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     -2,     -45,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,    
                        }, }
                ],
              TURRETS: [{
                  POSITION: [  11,     10,      0,      0,     360, 0], 
                    TYPE: exports.craftwater,
              },
              ]
            };
            exports.autocruiser = makeAuto(exports.cruiser);
            exports.fortress = {
                PARENT: [exports.genericTank],
                LABEL: 'Fortress',
                DANGER: 7,
                STAT_NAMES: statnames.generic,
                BODY: {
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.2,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   7,    7.5,    0.6,     7,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm]),
                            TYPE: [exports.swarm, { CONTROLLERS: ['canRepel'] }],
                            STAT_CALCULATOR: gunCalcNames.swarm,   
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,      0,     120,    1/3,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm]),
                            TYPE: [exports.swarm, { CONTROLLERS: ['canRepel'] }],
                            STAT_CALCULATOR: gunCalcNames.swarm,   
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,      0,     240,    2/3,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm]),
                            TYPE: [exports.swarm, { CONTROLLERS: ['canRepel'] }],
                            STAT_CALCULATOR: gunCalcNames.swarm,   
                        }, }, {
                    POSITION: [  14,     9,      1,      0,      0,     60,      0,   ],
                        }, {
                    POSITION: [   4,     9,     1.5,    14,      0,     60,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {                            
                    POSITION: [  14,     9,      1,      0,      0,     180,     0,   ],
                        }, {
                    POSITION: [   4,     9,     1.5,    14,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {                            
                    POSITION: [  14,     9,      1,      0,      0,     300,     0,   ],
                        }, {
                    POSITION: [   4,     9,     1.5,    14,      0,     300,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.halfrange, g.slow]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, },
                ],
            };

        exports.underseer = {
            PARENT: [exports.genericTank],
            LABEL: 'Necromancer',
            DANGER: 6,
            STAT_NAMES: statnames.drone,
            BODY: {
                ACCELERATION: base.ACCEL * 0.7,
                SPEED: base.SPEED * 0.9,
                FOV: base.FOV * 1.1,
            },
            SHAPE: 4,
            MAX_CHILDREN: 35,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   5,     12,    1.2,     8,      0,     90,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                        TYPE: exports.sunchip,
                        AUTOFIRE: true,
                        SYNCS_SKILLS: true,
                        STAT_CALCULATOR: gunCalcNames.necro,
                    }, }, {
                POSITION: [   5,     12,    1.2,     8,      0,     270,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                        TYPE: exports.sunchip,
                        AUTOFIRE: true,
                        SYNCS_SKILLS: true,
                        STAT_CALCULATOR: gunCalcNames.necro,
                    }, },
                ],
        };
exports.necroinvis = {
            PARENT: [exports.genericTank],
            LABEL: 'Disappearance',//learn to spell pls
            INVISIBLE: [0.09, 0.05],
            HAS_NO_RECOIL: true,
            DANGER: 6,
            STAT_NAMES: statnames.drone,
            BODY: {
                ACCELERATION: base.ACCEL * 0.7,
                SPEED: base.SPEED * 0.9,
                FOV: base.FOV * 1.1,
            },
            SHAPE: 4,
            MAX_CHILDREN: 30,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [   5,     12,    1.2,     8,      0,     0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                        TYPE: exports.sunchipinvis,
                        AUTOFIRE: true,
                        SYNCS_SKILLS: true,
                        STAT_CALCULATOR: gunCalcNames.necro,
                    }, }
                ],
        };
 exports.whythingsareincrebiblysus = {
                PARENT: [exports.genericTank],
                LABEL: 'Ah yes... Death',
                DANGER: 7,
                STAT_NAMES: statnames.necro,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.15,
                },
                SHAPE: 4,
                FACING_TYPE: 'autospin',
                MAX_CHILDREN: 36,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   5,     12,    1.2,     8,      0,     90,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                            TYPE: exports.WTF2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.necro,
                        }, }, {
                    POSITION: [   5,     12,    1.2,     8,      0,     270,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                            TYPE: exports.WTF2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.necro,
                        }, }, {
                    POSITION: [   5,     12,    1.2,     8,      0,      0,     0.25, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                            TYPE: exports.WTF2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.necro,
                        }, }, {
                    POSITION: [   5,     12,    1.2,     8,      0,     180,    0.75  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                            TYPE: exports.WTF2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.necro,
                        }, },
                    ],
            };
        exports.lilfact = {
            PARENT: [exports.genericTank],
            LABEL: '',
            DANGER: 6,
            STAT_NAMES: statnames.drone,
            BODY: {
                SPEED: base.SPEED * 0.8,
                ACCELERATION: base.ACCEL * 0.5,
                FOV: 1.1,
            },
            GUNS: [ { /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  4.5,    10,      1,     10.5,    0,      0,      0,   ], 
                }, {
                POSITION: [   1,     12,      1,      15,     0,      0,      0,   ], 
                PROPERTIES: {          
                    MAX_CHILDREN: 6,
                    SHOOT_SETTINGS: combineStats([g.factory, g.babyfactory]),
                    TYPE: exports.minion,
                    STAT_CALCULATOR: gunCalcNames.drone,                        
                    AUTOFIRE: true,
                    SYNCS_SKILLS: true,  
                }, }, {                        
                    POSITION: [  3.5,    12,      1,      8,      0,      0,      0,   ], 
                }
            ],
        };
            exports.factoryold = {
                PARENT: [exports.genericTank],
                LABEL: 'Factory',
                DANGER: 7,
                STAT_NAMES: statnames.drone,
                BODY: {
                    SPEED: base.SPEED * 0.8,
                    FOV: 1.1,
                },
                MAX_CHILDREN: 8,
                GUNS: [ { /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   5,     11,      1,      10.5,   0,      0,      0,   ], 
                        }, {
                    POSITION: [   2,     14,      1,      15.5,   0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.factory]),
                            TYPE: exports.minion,
                            STAT_CALCULATOR: gunCalcNames.drone,                        
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,   
                        }, }, {                        
                    POSITION: [   4,     14,      1,      8,      0,      0,      0,   ], 
                    }
                ],
            };
exports.factorydiep = {
                PARENT: [exports.genericTank],
                LABEL: 'Factory',
                DANGER: 7,
                SHAPE: 4,
                STAT_NAMES: statnames.drone,
                BODY: {
                    SPEED: base.SPEED * 0.8,
                    FOV: 1.1,
                },
                MAX_CHILDREN: 8,
                GUNS: [ { /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   6,     12,    1.2,     8,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.factory]),
                            TYPE: exports.minion,
                            STAT_CALCULATOR: gunCalcNames.drone,                        
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,   
                        }, },                      
                ],
            };
exports.factorydi = {
    PARENT: [exports.genericTank],
    LABEL: 'factory', 
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    SHAPE: 4,
    HAS_NO_RECOIL: true,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.0000001,
        SPEED: 7.4,
        ACCELERATION: 0.6,
        HEALTH: 5,
        SHIELD: 2,
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
    HAS_NO_RECOIL: true,
    CONTROLLERS: ['hangOutNearMaster'],
                MAX_CHILDREN: 8,
                GUNS: [ { /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   6,     12,    1.2,     8,      0,      0,      2,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.factory]),
                            TYPE: exports.minion123,
                            STAT_CALCULATOR: gunCalcNames.drone,                        
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,   
                            MAX_CHILDREN: 8,
                            AUTOFIRE: true,
                        }, },
                ],
            };
            exports.annifac = {
                PARENT: [exports.genericTank],
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                },
                LABEL: 'Anni Factory',
                HAS_NO_RECOIL: true,
                MAX_CHILDREN: 2,
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [ 20.5,  20,     1,      0,      0,      0,      0,   ],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
                        TYPE: exports.factorydi,
                        AUTOFIRE: true,
                    }, },
                ],
            };
exports.pew = {
     PARENT: [exports.genericTank],
     BODY: {
    ACCELERATION: base.ACCEL * 0.75,
       },
       LABEL: 'Block Shotgun',
       HAS_NO_RECOIL: true,
       DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.constructshot]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, }, {
                  POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.constructshot]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, }, {
                  POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.constructshot]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, }, {
                  POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.constructshot]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, }, {
                  POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.constructshot]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, }, {
                  POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.constructshot]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, }, {
                  POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.constructshot]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, }, {
                  POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.constructshot]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, }, {
                  POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.constructshot]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, }, {
                  POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.constructshot]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, }, {
                  POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.constructshot]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, }, {
                  POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.constructshot]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, }, {
                  POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.constructshot]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, }, {
                  POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.constructshot]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, }, {
                  POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.constructshot]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, }, {
                  POSITION: [  21,     20,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.constructshot]),
            WAIT_TO_CYCLE: true,
            TYPE: exports.trap2,
        }, }],
            };
    exports.machine = {
        PARENT: [exports.genericTank],
        LABEL: 'Machine Gun',
        GUNS: [ {    /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [    12,     10,     1.4,     8,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                TYPE: exports.bullet,
            }, },
        ],
    };
            exports.spray = {
                PARENT: [exports.genericTank],
                LABEL: 'Sprayer',
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  23,     7,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower, g.mach, g.morerecoil]),
                        TYPE: exports.bullet,
                    }, }, {
                    POSITION: [  12,    10,     1.4,     8,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                        TYPE: exports.bullet,
                    }, },
                ],
            };
exports.sprayer = {
                PARENT: [exports.genericTank],
                LABEL: 'Sprayer',
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  12,    10,     1.4,     8,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach2]),
                        TYPE: exports.bullet,
                    }, },
                ],
            };
   exports.spraylegion = {
                PARENT: [exports.genericTank],
                LABEL: "",
                BODY: {
                FOV: 2
                },
                HAS_NO_RECOIL: true,
                CONTROLLERS: [
                "canRepel",
                "mapAltToFire",
                "nearestDifferentMaster"
                ],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     7,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.gunner2, g.lowpower, g.mach, g.morerecoil]),
                        TYPE: exports.bulletlegion,
                    }, }, {
                    POSITION: [  13,    10,     1.4,     8,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mach]),
                        TYPE: exports.bulletlegion,
                    }, },
                ],
            };
        exports.mini = {
            PARENT: [exports.genericTank],
            LABEL: 'Minigun',
            DANGER: 6,
            BODY: {
                FOV: 1.2,
            },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  22,     8,      1,      0,      0,      0,      0, ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  20,     8,      1,      0,      0,      0,    0.333, ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                        TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  18,     8,      1,      0,      0,      0,    0.667, ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.mini]),
                        TYPE: exports.bullet,
                    }, },
            ],
        };
            exports.stream = {
                PARENT: [exports.genericTank],
                LABEL: 'Streamliner',
                DANGER: 7,
                BODY: {
                    FOV: 1.3,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  25,     8,      1,      0,      0,      0,      0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  23,     8,      1,      0,      0,      0,     0.2, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  21,     8,      1,      0,      0,      0,     0.4, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  19,     8,      1,      0,      0,      0,     0.6, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.bullet,
                        }, },  { 
                    POSITION: [  17,     8,      1,      0,      0,      0,     0.8, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.stream]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
exports.WTF = {
    LABEL: 'Auto Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    SHAPE: 3,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],

    AI: { BLIND: true, },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 3.8,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.8,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    BUFF_VS_FOOD: true,
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  11,     0,      0,      0,     360,  1], 
            TYPE: exports.stream,
        }
    ]
};
exports.gay = {
                PARENT: [exports.genericTank],
                LABEL: 'Streamliner',
                DANGER: 7,
                BODY: {
                    FOV: 1.3,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  25,     8,      1,      0,      0,      0,      0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.gay]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  23,     8,      1,      0,      0,      0,     0.2, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.gay]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  21,     8,      1,      0,      0,      0,     0.4, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.gay]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  19,     8,      1,      0,      0,      0,     0.6, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.gay]),
                            TYPE: exports.bullet,
                        }, },  { 
                    POSITION: [  17,     8,      1,      0,      0,      0,     0.8, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.gay]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
exports.whythingsareverysus = {
                PARENT: [exports.genericTank],
                LABEL: 'Ah yes... Death',
                FACING_TYPE: "suspin",
                DANGER: 7,
                STAT_NAMES: statnames.drone,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.1,
                },
                MAX_CHILDREN: 8,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   6,     12,    1.2,     8,      0,     90,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                            TYPE: exports.WTF,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                        }, }, {
                    POSITION: [   6,     12,    1.2,     8,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.overs]),
                            TYPE: exports.WTF,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                    POSITION: [   6,     12,    1.2,     8,      0,     270,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.overs]),
                            TYPE: exports.WTF,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   6,     12,    1.2,     8,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.overs]),
                            TYPE: exports.WTF,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, },
                ],
            };
            exports.hybridmini = makeHybrid(exports.mini, "Crop Duster");
            exports.minitrap = {
                PARENT: [exports.genericTank],
                DANGER: 6,
                LABEL: '',
                STAT_NAMES: statnames.trap,
                BODY: {
                    FOV: 1.15,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ 
                    POSITION: [  24,     8,      1,      0,      0,      0,      0, ], 
                            }, {
                    POSITION: [   4,     8,     1.3,     22,     0,      0,      0, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, { 
                    POSITION: [   4,     8,     1.3,     18,     0,      0,    0.333, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, { 
                    POSITION: [   4,     8,     1.3,     14,     0,      0,    0.667, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.mini, g.halfrange]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, },
                ],
            };
    
    exports.pound = {
        PARENT: [exports.genericTank],
        DANGER: 5,
        BODY: {
            ACCELERATION: base.ACCEL * 0.8,
        },
        LABEL: 'Pounder',
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,    12,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            }, },
        ],
    };
exports.pain = {
                PARENT: [exports.genericTank],
                LABEL: 'pain',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.04,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,    15,    0.65,    0,      0,      0,      0,  ], 
                                          PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.BOOM,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },{
                          POSITION: [  2,    15,    1,    15,      0,      0,      0,  ],
                        },
                       {
                          POSITION: [  15,    15,    1,    0,      0,      0,      0,  ],
                        },
                       {POSITION: [  20,    5,    0.65,    0,      3,      0,      0,  ],},
                       {POSITION: [  20,    5,    0.65,    0,      -3,      0,      0,  ],},
                ],
            };
        exports.destroy = {
            PARENT: [exports.genericTank],
            DANGER: 6,
            BODY: {
                ACCELERATION: base.ACCEL * 0.75,
            },
            LABEL: 'Destroyer',
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  21,    14,      1,      0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy]),
                    TYPE: exports.bullet,
                }, },
            ],
        };
            exports.anni = {
                PARENT: [exports.genericTank],
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                },
                LABEL: 'Annihilator',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [ 20.5,  20,     1,      0,      0,      0,      0,   ],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
                        TYPE: exports.bullet,
                    }, },
                ],
            };
exports.mercury = {
    PARENT: [exports.genericTank],
    LABEL: 'mercury',
  HAS_NO_RECOIL: true,
    BODY: {
        FOV: 1,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 13,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  1,    10,      1,      0,      0,      0,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.beetwt,
            }, }
    ],
};
exports.venus = {
    PARENT: [exports.genericTank],
    LABEL: 'venus',
  HAS_NO_RECOIL: true,
    BODY: {
        FOV: 1,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 3,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  1,    10,      1,      0,      0,      0,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            }, }
    ],
};
exports.earth = {
    PARENT: [exports.genericTank],
    LABEL: 'earth',
  HAS_NO_RECOIL: true,
    BODY: {
        FOV: 1,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 10,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  1,    10,      1,      0,      0,      0,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            }, }
    ],
};
exports.mars = {
    PARENT: [exports.genericTank],
    LABEL: 'mars',
  HAS_NO_RECOIL: true,
    BODY: {
        FOV: 1,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 12,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  1,    10,      1,      0,      0,      0,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            }, }
    ],
};
exports.jupiter = {
    PARENT: [exports.genericTank],
    LABEL: 'jupiter',
  HAS_NO_RECOIL: true,
  COLOR: 12,
    BODY: {
        FOV: 1,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 2,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  1,    10,      1,      0,      0,      0,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            },
    }
    ],
};
exports.rock1 = {
    PARENT: [exports.genericTank],
    LABEL: 'Belt rock',
  HAS_NO_RECOIL: true,
    SHAPE: 5,
    BODY: {
        FOV: 0,
    },
    //CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    //GUNS: [],
};
exports.rock2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Belt rock',
  HAS_NO_RECOIL: true,
    SHAPE: 6,
    BODY: {
        FOV: 0,
    },
    //CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    //GUNS: [],
};
exports.rock3 = {
    PARENT: [exports.genericTank],
    LABEL: 'Belt rock',
  HAS_NO_RECOIL: true,
    SHAPE: 7,
    BODY: {
        FOV: 0,
    },
    //CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    //GUNS: [],
};
exports.saturnring1 = {
    LABEL: '',
    CONTROLLERS: ['spinbelt1'], 
    COLOR: 0,
    SHAPE: 0,
    INDEPENDENT: false,
    FACING_TYPE: "autospin",
    TURRETS: [{
         POSITION: [  3,    63,      0,      0,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  2,    63,      0,      15,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  5,    63,      0,      152,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  6,    63,      0,      341,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  2,    63,      0,      273,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  7,    63,      0,      32,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  6,    63,      0,      43,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  5,    63,      0,      83,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  2,    63,      0,      123,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  8,    63,      0,      234,     360, 1],
          TYPE: exports.rock1,
          }, {
          /////
        POSITION: [  3,    63,      0,      121,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  2,    63,      0,      124,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  5,    63,      0,      43,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  6,    63,      0,      291,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  2,    63,      0,      173,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  7,    63,      0,      12,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  6,    63,      0,      53,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  5,    63,      0,      33,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  2,    63,      0,      163,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  8,    63,      0,      214,     360, 1],
          TYPE: exports.rock1,
          }
          ]
};
exports.saturn = {
    PARENT: [exports.genericTank],
    LABEL: 'saturn',
  HAS_NO_RECOIL: true,
    BODY: {
        FOV: 1,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 13,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  1,    10,      1,      0,      0,      0,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            }, },
    ],
                  TURRETS: [{
                  
                 POSITION: [  9,   0,      0,      0,     360, 0], 
                    TYPE: exports.saturnring1,
                }]
};
exports.uranus = {
    PARENT: [exports.genericTank],
    LABEL: 'uranus',
  HAS_NO_RECOIL: true,
    BODY: {
        FOV: 1,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 15,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  1,    10,      1,      0,      0,      0,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            }, }
    ],
};
exports.neptune = {
    PARENT: [exports.genericTank],
    LABEL: 'neptune',
  HAS_NO_RECOIL: true,
    BODY: {
        FOV: 1,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 14,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  1,    10,      1,      0,      0,      0,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            }, }
    ],
};
exports.spacerock = {
  LABEL: "Drone",
  TYPE: "drone",
  ACCEPTS_SCORE: false,
  DANGER: 2,
  CONTROL_RANGE: 0,
  SHAPE: 5,
  MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
  AI: { BLIND: true },
  BODY: {
    PENETRATION: 4.2,
    PUSHABILITY: 0.9,
    ACCELERATION: 0.05,
    HEALTH: 0.6 * wepHealthFactor,
    DAMAGE: 1.8 * wepDamageFactor,
    SPEED: 8.5,
    RANGE: 200,
    DENSITY: 0.03,
    RESIST: 1.5,
    FOV: 0
  },
  HITS_OWN_TYPE: "never",
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  INDEPENDENT: true,
  BUFF_VS_FOOD: true
};

exports.homingMissile = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto Drone', 
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'turnWithSpeed',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.6,
        HEALTH: 8,
        SHIELD: 2,
        DAMAGE: 0.2,
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
    INDEPENDENT: true,
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'],
    //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,     4,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.fakeminions]),
                        TYPE: exports.bullet,
                        LABEL: 'Front',
                        AUTOFIRE: true,
                    }, }, {   
                POSITION: [  16,     4,      1,      0,      0,     120,    0,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.fakeminions]),
                        TYPE: exports.bullet,
                        LABEL: gunCalcNames.thruster,
                      AUTOFIRE: true,
                    }, }, {   
                POSITION: [  16,     4,      1,      0,      0,     240,    0,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.fakeminions]),
                        TYPE: exports.bullet,
                        LABEL: gunCalcNames.thruster,
                      AUTOFIRE: true
                    }, },
            ],
};

exports.theBelt = {
    PARENT: [exports.genericTank],
    LABEL: 'thebelt',
  HAS_NO_RECOIL: true,
  CONTROLLERS: ['alwaysFire'],
    BODY: {
        FOV: 1,
    },
    COLOR: 16,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     4,      1,      0,      0,      0,      0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.spacerock,
                          WAIT_TO_CYCLE: true,  
                          MAX_CHILDREN: 3,
                        }, }, {  
                    POSITION: [  1,     4,      1,      0,      0,      90,     0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.spacerock,
                          WAIT_TO_CYCLE: true,
                          MAX_CHILDREN: 3,
                        }, }, {  
                    POSITION: [  1,     4,      1,      0,      0,     180,     0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.spacerock,
                          WAIT_TO_CYCLE: true,
                          MAX_CHILDREN: 2,
                        }, }, {  
                    POSITION: [  1,     3,      1,      0,      0,     270,     0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.spacerock,
                          WAIT_TO_CYCLE: true,
                          MAX_CHILDREN: 3,
                        }, }, {POSITION: [  1,     4,      1,      0,      0,      45,      0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.spacerock,
                          WAIT_TO_CYCLE: true,  
                          MAX_CHILDREN: 3,
                        }, }, {  
                    POSITION: [  1,     4,      1,      0,      0,      135,     0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.spacerock,
                          WAIT_TO_CYCLE: true,
                          MAX_CHILDREN: 3,
                        }, }, {  
                    POSITION: [  1,     4,      1,      0,      0,     225,     0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.spacerock,
                          WAIT_TO_CYCLE: true,
                          MAX_CHILDREN: 3,
                        }, }, {  
                    POSITION: [  1,     4,      1,      0,      0,     315,     0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.spacerock,
                          WAIT_TO_CYCLE: true,
                          MAX_CHILDREN: 3,
                        }, },{
                          POSITION: [  1,     4,      1,      0,      0,      0,      0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.spacerock,
                          WAIT_TO_CYCLE: true,  
                          MAX_CHILDREN: 3,
                        }, }, {  
                    POSITION: [  1,     4,      1,      0,      0,      90,     0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.spacerock,
                          WAIT_TO_CYCLE: true,
                          MAX_CHILDREN: 3,
                        }, }, {  
                    POSITION: [  1,     4,      1,      0,      0,     180,     0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.spacerock,
                          WAIT_TO_CYCLE: true,
                          MAX_CHILDREN: 3,
                        }, }, {  
                    POSITION: [  1,     4,      1,      0,      0,     270,     0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.spacerock,
                          WAIT_TO_CYCLE: true,
                          MAX_CHILDREN: 3,
                        }, }, {POSITION: [  1,     4,      1,      0,      0,      45,      0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.spacerock,
                          WAIT_TO_CYCLE: true,  
                          MAX_CHILDREN: 3,
                        }, }, {  
                    POSITION: [  1,     4,      1,      0,      0,      135,     0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.spacerock,
                          WAIT_TO_CYCLE: true,
                          MAX_CHILDREN: 3,
                        }, }, {  
                    POSITION: [  1,     4,      1,      0,      0,     225,     0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.spacerock,
                          WAIT_TO_CYCLE: true,
                          MAX_CHILDREN: 3,
                        }, }, {  
                    POSITION: [  1,     4,      1,      0,      0,     315,     0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.spacerock,
                          WAIT_TO_CYCLE: true,
                          MAX_CHILDREN: 3,
                        }, },
                ],
            };
            exports.auto25 = {
                PARENT: [exports.genericTank],
                LABEL: 'Solar (Old)',
                DANGER: 7,
                FACING_TYPE: 'autospin',
                HAS_NO_RECOIL: true,
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  8,     28,      0,      0,     360, 1],
                        TYPE: exports.mercury,
                            }, {
                    POSITION: [  12,     30,      0,      90,    360, 1],
                        TYPE: exports.venus,
                            }, {//is it fixed?
                    POSITION: [  12,     32,      0,     180,    360, 1],
                        TYPE: exports.earth,
                            }, {
                    POSITION: [  12,     34,      0,     270,    360, 1],
                        TYPE: exports.mars,
                            },{
                    POSITION: [  18,     48,      0,      45,    360, 1],
                        TYPE: exports.jupiter,
                            }, {
                    POSITION: [  16,     50,      0,     225,    360, 1],
                        TYPE: exports.saturn,
                            },{
                    POSITION: [  14,     52,      0,     315,    360, 1],
                        TYPE: exports.uranus,
                            },{
                    POSITION: [  14,     54,      0,     135,    360, 1],
                        TYPE: exports.neptune,
                            },{
                    POSITION: [  18,     0,      0,      0,    360, -1],
                        TYPE: exports.theBelt,
                            },{
                    POSITION: [  16,     0,      0,     72,    360, -1],
                        TYPE: exports.theBelt,
                            },{
                    POSITION: [  14,     0,      0,     144,    360, -1],
                        TYPE: exports.theBelt,
                            },{
                    POSITION: [  14,     0,      0,     216,    360, -1],
                        TYPE: exports.theBelt,
                            },{
                    POSITION: [  14,     0,      0,     288,    360, -1],
                        TYPE: exports.theBelt,
                            },
                ],
};
exports.sun = {
  LABEL: '',
  CONTROLLERS: ['nearestDifferentMaster'],
  COLOR: 35,
  SHAPE: 0,
  INDEPENDeNT: false,
  FACING_TYPE: "autospin",
  TURRETS: [{
  //
  POSITION: [ 20.5,    0,      0,      0,     360,  0,], 
  TYPE: exports.spikeSun,
  }, { 
  POSITION: [ 20.5,    0,      0,     120,    360,  0,], 
  TYPE: exports.spikeSun,
  }, {
  POSITION: [ 20.5,    0,      0,     240,    360,  0,], 
  TYPE: exports.spikeSun,
  }]
};
////////////////
//////////////// Belt Rings code below
////////////////
///////////////
exports.beltring1 = {
    LABEL: '',
    CONTROLLERS: ['spinbelt1'], 
    COLOR: 0,
    SHAPE: 0,
    INDEPENDENT: false,
    FACING_TYPE: "autospin",
    TURRETS: [{
         POSITION: [  3,    170,      0,      0,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  2,    170,      0,      15,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  5,    170,      0,      152,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  6,    170,      0,      341,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  2,    170,      0,      273,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  7,    170,      0,      32,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  6,    170,      0,      43,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  5,    170,      0,      83,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  2,    170,      0,      123,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  8,    170,      0,      234,     360, 1],
          TYPE: exports.rock1,
          }, {
          /////
        POSITION: [  3,    170,      0,      121,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  2,    170,      0,      124,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  5,    170,      0,      43,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  6,    170,      0,      291,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  2,    170,      0,      173,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  7,    1170,      0,      12,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  6,    170,      0,      53,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  5,    170,      0,      33,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  2,    170,      0,      163,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  8,    170,      0,      214,     360, 1],
          TYPE: exports.rock1,
          }
          ]
};
exports.beltring2 = {
    LABEL: '',
    CONTROLLERS: ['spinbelt2'], 
    COLOR: 0,
    SHAPE: 0,
    INDEPENDENT: false,
    FACING_TYPE: "autospin",
    TURRETS: [{
         POSITION: [  3,    176,      0,      0,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  2,    176,      0,      15,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  5,    176,      0,      152,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  6,    176,      0,      341,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  2,    176,      0,      273,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  7,    176,      0,      32,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  6,    176,      0,      43,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  5,    176,      0,      83,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  2,    176,      0,      123,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  8,    176,      0,      234,     360, 1],
          TYPE: exports.rock1,
          }, {
          /////
        POSITION: [  3,    176,      0,      121,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  2,    176,      0,      124,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  5,    176,      0,      43,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  6,    176,      0,      291,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  2,    176,      0,      173,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  7,    176,      0,      12,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  6,    176,      0,      53,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  5,    176,      0,      33,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  2,    176,      0,      163,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  8,    176,      0,      214,     360, 1],
          TYPE: exports.rock1,
          }
          ]
};
exports.beltring3 = {
    LABEL: '',
    CONTROLLERS: ['spinbelt2'], 
    COLOR: 0,
    SHAPE: 0,
    INDEPENDENT: false,
    FACING_TYPE: "autospin",
    TURRETS: [{
         POSITION: [  3,    186,      0,      213,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  2,    186,      0,      31,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  5,    186,      0,      153,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  6,    186,      0,      320,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  2,    186,      0,      218,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  7,    186,      0,      60,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  6,    186,      0,      27,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  5,    186,      0,      94,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  2,    186,      0,      119,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  8,    186,      0,      250,     360, 1],
          TYPE: exports.rock1,
          }, {
          /////
        POSITION: [  3,    186,      0,      134,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  2,    186,      0,      134,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  5,    186,      0,      38,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  6,    186,      0,      305,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  2,    186,      0,      123,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  7,    186,      0,      20,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  6,    186,      0,      43,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  5,    186,      0,      46,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  2,    186,      0,      172,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  8,    186,      0,      219,     360, 1],
          TYPE: exports.rock1,
          }
          ]
};
exports.beltring4 = {
    LABEL: '',
    CONTROLLERS: ['spinbelt2'], 
    COLOR: 0,
    SHAPE: 0,
    INDEPENDENT: false,
    FACING_TYPE: "autospin",
    TURRETS: [{
         POSITION: [  3,    180,      0,      0,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  2,    180,      0,      12,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  5,    180,      0,      163,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  6,    180,      0,      338,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  2,    180,      0,      276,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  7,    180,      0,      27,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  6,    180,      0,      48,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  5,    180,      0,      78,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  2,    180,      0,      128,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  8,    180,      0,      240,     360, 1],
          TYPE: exports.rock1,
          }, {
          /////
        POSITION: [  3,    180,      0,      130,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  2,    180,      0,      121,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  5,    180,      0,      50,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  6,    180,      0,      300,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  2,    180,      0,      150,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  7,    180,      0,      10,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  6,    180,      0,      64,     360, 1],
          TYPE: exports.rock3,
          }, {
        POSITION: [  5,    180,      0,      38,     360, 1],
          TYPE: exports.rock2,
          }, {
        POSITION: [  2,    180,      0,      170,     360, 1],
          TYPE: exports.rock1,
          }, {
        POSITION: [  8,    180,      0,      208,     360, 1],
          TYPE: exports.rock1,
          }
          ]
};
////////////////
////////////////
//////////////// Belt Rings code ^ above
///////////////
exports.mercuryorbit = {
    LABEL: '',
    CONTROLLERS: ['spinmercury'], 
    COLOR: 0,
    SHAPE: 0,
    INDEPENDENT: false,
    FACING_TYPE: "autospin",
    TURRETS: [{
    POSITION: [  9,    70,      0,      0,     360, 1],
                        TYPE: exports.mercury,
          },
  ]
};
exports.venusorbit = {
    LABEL: '',
    CONTROLLERS: ['spinvenus'], 
    COLOR: 0,
    SHAPE: 0,
    INDEPENDENT: false,
    FACING_TYPE: "autospin",
    TURRETS: [{
    POSITION: [  14,    90,      0,      0,     360, 1],
                        TYPE: exports.venus,
          },
  ]
};
exports.earthorbit = {
    LABEL: '',
    CONTROLLERS: ['spinearth'], 
    COLOR: 0,
    SHAPE: 0,
    INDEPENDENT: false,
    FACING_TYPE: "autospin",
    TURRETS: [{
    POSITION: [  15,    110,      0,      0,     360, 1],
                        TYPE: exports.earth,
          },
  ]
};
exports.marsorbit = {
    LABEL: '',
    CONTROLLERS: ['spinmars'], 
    COLOR: 0,
    SHAPE: 0,
    INDEPENDENT: false,
    FACING_TYPE: "autospin",
    TURRETS: [{
    POSITION: [  11,    133,      0,      0,     360, 1],
                        TYPE: exports.mars,
          },
  ]
};
exports.jupiterorbit = {
    LABEL: '',
    CONTROLLERS: ['spinjupiter'], 
    COLOR: 0,
    SHAPE: 0,
    INDEPENDENT: false,
    FACING_TYPE: "autospin",
    TURRETS: [{
    POSITION: [  36,    240,      0,      0,     360, 1],
                        TYPE: exports.jupiter,
          },
  ]//170
};
exports.saturnorbit = {
    LABEL: '',
    CONTROLLERS: ['spinsaturn'], 
    COLOR: 0,
    SHAPE: 0,
    INDEPENDENT: false,
    FACING_TYPE: "autospin",
    TURRETS: [{
    POSITION: [  31,    335,      0,      0,     360, 1],
                        TYPE: exports.saturn,
          },//265
  ]
};
exports.uranusorbit = {
    LABEL: '',
    CONTROLLERS: ['spinuranus'], 
    COLOR: 0,
    SHAPE: 0,
    INDEPENDENT: false,
    FACING_TYPE: "autospin",
    TURRETS: [{
    POSITION: [  28,    380,      0,      0,     360, 1],
                        TYPE: exports.uranus,
          },//350
  ]
};
exports.neptuneorbit = {
    LABEL: '',
    CONTROLLERS: ['spinneptune'], 
    COLOR: 0,
    SHAPE: 0,
    INDEPENDENT: false,
    FACING_TYPE: "autospin",
    TURRETS: [{
    POSITION: [  27,    450,      0,      0,     360, 1],
                        TYPE: exports.neptune,
          },//420
  ]
};
            exports.SolarBoss = { 
                PARENT: [exports.genericTank],
                DANGER: 7,
                COLOR: 35,
                SIZE: 35,
                LABEL: 'Solar',
                BODY: {
                    ACCELERATION: base.ACCEL * 0.6,
                    SPEED: base.SPEED * 0.8,
                    FOV: 3.4,
                },
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [ 35,    0,      0,      0,     360,  1,], 
                    TYPE: exports.sun,
                    }, {
                    POSITION: [  9,   0,      0,      0,     360, 0], 
                    TYPE: exports.mercuryorbit,
                    }, {
                    POSITION: [  9,   0,      0,      0,     360, 0], 
                    TYPE: exports.venusorbit,
                    }, {
                    POSITION: [  9,   0,      0,      0,     360, 0], 
                    TYPE: exports.earthorbit,
                    }, {
                    POSITION: [  9,   0,      0,      0,     360, 0],
                    TYPE: exports.marsorbit,
                    }, {
                    POSITION: [  9,   0,      0,      0,     360, 0],
                    TYPE: exports.jupiterorbit,
                    }, {
                    POSITION: [  9,   0,      0,      0,     360, 0],
                    TYPE: exports.saturnorbit,
                    }, {
                    POSITION: [  9,   0,      0,      0,     360, 0],
                    TYPE: exports.uranusorbit,
                    }, {
                    POSITION: [  9,   0,      0,      0,     360, 0],
                    TYPE: exports.neptuneorbit,
                    }, {
                    POSITION: [  9,   0,      0,      0,     360, 0], 
                    TYPE: exports.beltring1,
                    }, {
                    POSITION: [  9,   0,      0,      0,     360, 0], 
                    TYPE: exports.beltring2,
                    }, {
                    POSITION: [  9,   0,      0,      0,     360, 0], 
                    TYPE: exports.beltring3,
                    }, {
                    POSITION: [  9,   0,      0,      0,     360, 0], 
                    TYPE: exports.beltring4,   
                    }],
            };
exports.WTF3 = {
    LABEL: 'Auto Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    INDEPENDENT: true,
    SHAPE: -5,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],

    AI: { BLIND: true, },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 10,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.2,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
};
exports.WTF4 = {
    LABEL: 'Auto Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    INDEPENDENT: true,
    SHAPE: 2,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],

    AI: { BLIND: true, },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 1 * wepHealthFactor,
        DAMAGE: 25.25 * wepDamageFactor,
        SPEED: 10,
        RANGE: 100,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 200,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
};
exports.stick = {
    LABEL: 'Auto Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    INDEPENDENT: true,
    SHAPE: 2,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],

    AI: { BLIND: true, },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.1 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 10,
        RANGE: 2,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 2,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
};
exports.WTF5 = {
    LABEL: 'Auto Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    INDEPENDENT: true,
    SHAPE: -5,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'autospin',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
      'alwaysFire',
        'hangOutNearMaster'
    ],

    AI: { BLIND: true, },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 10.6 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 1,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 3,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
              POSITION: [   15,    9.5,    1.4,     0,      0,      0,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool]),
                            TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.bullet,   
                }, },{
                  POSITION: [   15,    9.5,    1.4,     0,      0,      72,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool]),
                            TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.bullet,      
                }, },{
                  POSITION: [   15,    9.5,    1.4,     0,      0,      144,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool]),
                            TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.bullet,   
                }, },{
                  POSITION: [   15,    9.5,    1.4,     0,      0,      216,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool]),
                            TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.bullet,    
                }, },{
                  POSITION: [   15,    9.5,    1.4,     0,      0,      288,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool]),
                            TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.bullet,     
                }, },{POSITION: [   15,    9.5,    1.4,     0,      0,      36,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool]),
                            TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.bullet,   
                }, },{
                  POSITION: [   15,    9.5,    1.4,     0,      0,      108,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool]),
                            TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.bullet,      
                }, },{
                  POSITION: [   15,    9.5,    1.4,     0,      0,      180,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool]),
                            TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.bullet,   
                }, },{
                  POSITION: [   15,    9.5,    1.4,     0,      0,      252,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool]),
                            TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.bullet,    
                }, },{
                  POSITION: [   15,    9.5,    1.4,     0,      0,      324,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.cool]),
                            TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.bullet,     
                }, },
                ],
};
exports.rock = {
    LABEL: 'Auto Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    INDEPENDENT: true,
    SHAPE: -5,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],

    AI: { BLIND: true, },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 10,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.2,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
};
exports.minitri = {
    PARENT: [exports.genericTank],
    LABEL: 'Auto Drone', 
    TYPE: 'minion',
    DAMAGE_CLASS: 0,
    HITS_OWN_TYPE: 'hardWithBuffer',
    FACING_TYPE: 'smoothToTarget',
    BODY: {
        FOV: 0.5,
        SPEED: 3,
        ACCELERATION: 0.6,
        HEALTH: 8,
        SHIELD: 2,
        DAMAGE: 0.2,
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
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'canRepel', 'hangOutNearMaster'],
    //CONTROLLERS: ['nearestDifferentMaster'],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.fakeminions]),
                        TYPE: exports.bullet,
                        LABEL: 'Front',
                    }, }, {   
                POSITION: [  16,     8,      1,      0,      0,     150,    0.1,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                        TYPE: exports.bullet,
                        LABEL: gunCalcNames.thruster,
                    }, }, {   
                POSITION: [  16,     8,      1,      0,      0,     210,    0.1,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                        TYPE: exports.bullet,
                        LABEL: gunCalcNames.thruster,
                    }, },
            ],
};
exports.miniblackhole = {
    PARENT: [exports.drone],
    LABEL: 'Auto Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    INDEPENDENT: true,
                LABEL: 'Black Hole',
                DANGER: 7,
              MAX_CHILDREN: 18,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'autospin',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
                BODY: {
                    SPEED: base.speed*0.1,
                    DAMAGE: base.DAMAGE * 1.1,
                    FOV: base.FOV * 10,
                    DENSITY: base.DENSITY * 2,
                },
                IS_SMASHER: true,
              FACING_TYPE: 'autospin',
          CONTROLLERS: ['alwaysFire',],
                TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                    POSITION: [ 20.5,    0,      0,      0,     360,  0,], 
                    TYPE: exports.fabrictear,
                    }, { 
                    POSITION: [ 20.5,    0,      0,     120,    360,  0,], 
                    TYPE: exports.fabrictear,
                    }, {
                    POSITION: [ 20.5,    0,      0,     240,    360,  0,], 
                    TYPE: exports.fabrictear,
                }],
              GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  1,     8,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.dencitychunk,
                    }, }, {   
                POSITION: [  1,     8,      1,      0,      0,     120,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.dencitychunk,
                    }, }, {   
                POSITION: [  1,     8,      1,      0,      0,     240,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.dencitychunk,
                    }, }, {   
                POSITION: [  1,     8,      1,      0,      0,      60,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.dencitychunk,
                    }, }, {   
                POSITION: [  1,     8,      1,      0,      0,     180,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.dencitychunk,
                    }, }, {   
                POSITION: [  1,     8,      1,      0,      0,     300,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.dencitychunk,
                    }, },
            ],
            }; 
exports.dencitychunk = {
    LABEL: 'Auto Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 0,
    INDEPENDENT: true,
    SHAPE: -3,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'autospin',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],

    AI: { BLIND: true, },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 50 * wepHealthFactor,
        DAMAGE: 10.25 * wepDamageFactor,
        SPEED: 2.5,
        RANGE: 10,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 1,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
};
exports.fabric = {
    PARENT: [exports.genericTank],
    LABEL: '',
    HAS_NO_RECOIL: true,
    INDEPENDENT: true,
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    10,      1,      0,      0,      0,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.thread, g.cool, g.stream]),
                TYPE: exports.bullet,
            },}
    ],
};
exports.fabric2 = {
    PARENT: [exports.genericTank],
    LABEL: '',
    HAS_NO_RECOIL: true,
    INDEPENDENT: true,
    BODY: {
      MAX_CHILDREN: 1,
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    10,      1,      0,      0,      0,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.thread, g.halfreload, g.lessreload]),
                TYPE: exports.WTF4,
            },}
    ],
};
exports.fabric3 = {
    PARENT: [exports.genericTank],
    LABEL: '',
    HAS_NO_RECOIL: true,
    INDEPENDENT: true,
    BODY: {
      MAX_CHILDREN: 1,
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
    COLOR: 16,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    10,      1,      0,      0,      0,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.thread, g.halfreload, g.lessreload]),
                TYPE: exports.stick,
            },}
    ],
};
        exports.realitypart1 = {
            PARENT: [exports.genericTank],
            LABEL: 'R3@L1TY#1',
            DANGER: 6,
            FACING_TYPE: 'autospin',
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  11,     8,      0,      0,     360, 0],
                        TYPE: exports.fabric,
                            }, {
                    POSITION: [  11,     8,      0,      36,    360, 0],
                        TYPE: exports.fabric,
                            }, {
                    POSITION: [  11,     8,      0,     72,    360, 0],
                        TYPE: exports.fabric,
                            }, {
                    POSITION: [  11,     8,      0,     108,    360, 0],
                        TYPE: exports.fabric,
                            }, {
                    POSITION: [  11,     8,      0,     144,    360, 0],
                        TYPE: exports.fabric,
                            },{
                    POSITION: [  11,     8,      0,      180,     360, 0],
                        TYPE: exports.fabric,
                            }, {
                    POSITION: [  11,     8,      0,      216,    360, 0],
                        TYPE: exports.fabric,
                            }, {
                    POSITION: [  11,     8,      0,     252,    360, 0],
                        TYPE: exports.fabric,
                            }, {
                    POSITION: [  11,     8,      0,     288,    360, 0],
                        TYPE: exports.fabric,
                            }, {
                    POSITION: [  11,     8,      0,     324,    360, 0],
                        TYPE: exports.fabric,
                            },
                ],
                BODY: {
                    HEALTH: base.HEALTH * 0.6,
                    SHIELD: base.SHIELD * 0.6,
                    DENSITY: base.DENSITY * 0.2,
                },
                DANGER: 7,
            };
        exports.realitypart2 = {
            PARENT: [exports.genericTank],
            LABEL: 'R3@L1TY#2',
            DANGER: 6,
            FACING_TYPE: 'autospin',
          CONTROLLERS: ['alwaysFire'],
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  11,     8,      0,      0,     180, 0],
                        TYPE: exports.fabric2,
              MAX_CHILDREN: 6,
                            }, {
                    POSITION: [  11,     8,      0,      36,    180, 0],
                        TYPE: exports.fabric2,
                              MAX_CHILDREN: 6,
                            }, {
                    POSITION: [  11,     8,      0,     72,    180, 0],
                        TYPE: exports.fabric2,
                              MAX_CHILDREN: 6,
                            }, {
                    POSITION: [  11,     8,      0,     108,    180, 0],
                        TYPE: exports.fabric2,
                              MAX_CHILDREN: 6,
                            }, {
                    POSITION: [  11,     8,      0,     144,    180, 0],
                        TYPE: exports.fabric2,
                              MAX_CHILDREN: 6,
                            },{
                    POSITION: [  11,     8,      0,      180,     180, 0],
                        TYPE: exports.fabric2,
                              MAX_CHILDREN: 6,
                            }, {
                    POSITION: [  11,     8,      0,      216,    180, 0],
                        TYPE: exports.fabric2,
                              MAX_CHILDREN: 6,
                            }, {
                    POSITION: [  11,     8,      0,     252,    180, 0],
                        TYPE: exports.fabric2,
                              MAX_CHILDREN: 6,
                            }, {
                    POSITION: [  11,     8,      0,     288,    180, 0],
                        TYPE: exports.fabric2,
                              MAX_CHILDREN: 6,
                            }, {
                    POSITION: [  11,     8,      0,     324,    180, 0],
                        TYPE: exports.fabric2,
                              MAX_CHILDREN: 6,
                            },
                ],
                BODY: {
                    HEALTH: base.HEALTH * 0.6,
                    SHIELD: base.SHIELD * 0.6,
                    DENSITY: base.DENSITY * 0.2,
                },
                DANGER: 7,
            };
        exports.realityseeker = {
            PARENT: [exports.genericTank],
            LABEL: 'Reality Seeker',
            DANGER: 6,
            FACING_TYPE: 'autospin',
          CONTROLLERS: ['alwaysFire'],
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  11,     8,      0,      0,     90, 0],
                        TYPE: exports.fabric3,
              MAX_CHILDREN: 6,
                            }, {
                    POSITION: [  11,     8,      0,      36,    90, 0],
                        TYPE: exports.fabric3,
                              MAX_CHILDREN: 6,
                            }, {
                    POSITION: [  11,     8,      0,     72,    90, 0],
                        TYPE: exports.fabric3,
                              MAX_CHILDREN: 6,
                            }, {
                    POSITION: [  11,     8,      0,     108,    90, 0],
                        TYPE: exports.fabric3,
                              MAX_CHILDREN: 6,
                            }, {
                    POSITION: [  11,     8,      0,     144,    90, 0],
                        TYPE: exports.fabric3,
                              MAX_CHILDREN: 6,
                            },{
                    POSITION: [  11,     8,      0,      180,     90, 0],
                        TYPE: exports.fabric3,
                              MAX_CHILDREN: 6,
                            }, {
                    POSITION: [  11,     8,      0,      216,    90, 0],
                        TYPE: exports.fabric3,
                              MAX_CHILDREN: 6,
                            }, {
                    POSITION: [  11,     8,      0,     252,    90, 0],
                        TYPE: exports.fabric3,
                              MAX_CHILDREN: 6,
                            }, {
                    POSITION: [  11,     8,      0,     288,    90, 0],
                        TYPE: exports.fabric3,
                              MAX_CHILDREN: 6,
                            }, {
                    POSITION: [  11,     8,      0,     324,    90, 0],
                        TYPE: exports.fabric3,
                              MAX_CHILDREN: 6,
                            },{
                    POSITION: [  18,     0,      0,     18,    360, 0],
                        TYPE: exports.circle2lel,
                              MAX_CHILDREN: 6,
                            },{
                    POSITION: [  16,     0,      0,     18,    360, 0],
                        TYPE: exports.circle2lel,
                              MAX_CHILDREN: 6,
                            },{
                    POSITION: [  14,     0,      0,     18,    360, 0],
                        TYPE: exports.circle2lel,
                              MAX_CHILDREN: 6,
                            },
                ],
                BODY: {
                    HEALTH: base.HEALTH * 10.6,
                    SHIELD: base.SHIELD * 10.6,
                    DENSITY: base.DENSITY * 0.2,
                  SPEED: base.SPEED * 0.1,
                },
                DANGER: 7,
            };
        exports.realitypart3 = { 
            PARENT: [exports.genericTank],
            LABEL: 'R3@L1TY#3',
            DANGER: 6,
            FACING_TYPE: 'autospin',
          CONTROLLERS: ['alwaysFire'],
          MAX_CHILDREN: 36,
GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  15,     4,      2.5,      0,     0,     0,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF5,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     30,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF5,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     60,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF5,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     90,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF5,},},{            
                  POSITION: [  15,     4,      2.5,      0,     0,     120,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF5,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     150,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF5,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     180,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF5,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     210,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF5,},},{            
                  POSITION: [  15,     4,      2.5,      0,     0,     240,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF5,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     270,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF5,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     300,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF5,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     330,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF5,},},
       
      ],
                BODY: {
                    HEALTH: base.HEALTH * 0.6,
                    SHIELD: base.SHIELD * 0.6,
                    DENSITY: base.DENSITY * 0.2,
                },
                DANGER: 7,
            };
        exports.realitypart4 = { 
            PARENT: [exports.genericTank],
            LABEL: 'R3@L1TY#4',
            DANGER: 6,
            FACING_TYPE: 'autospin',
          CONTROLLERS: ['alwaysFire'],
          MAX_CHILDREN: 36,
GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  5,     0.4,      2.5,      0,     0,     0,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.stream]),
                TYPE: exports.hpbullet,},},{
            POSITION: [  5,     0.4,      2.5,      0,     0,     90,      2,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.stream]),
                TYPE: exports.hpbullet,},},{
            POSITION: [  5,     0.4,      2.5,      0,     0,     180,      4,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.stream]),
                TYPE: exports.hpbullet,},},{
            POSITION: [  5,     0.4,      2.5,      0,     0,     270,      6,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.stream]),
                TYPE: exports.hpbullet,},},
       
      ],
                BODY: {
                    HEALTH: base.HEALTH * 0.6,
                    SHIELD: base.SHIELD * 0.6,
                    DENSITY: base.DENSITY * 0.2,
                },
                DANGER: 7,
            };
        exports.reality = {
            PARENT: [exports.genericTank],
            LABEL: 'R3@L1TY',
            CONTROLLERS: ['alwaysFire'],
          FACING_TYPE: 'autospin',
            DANGER: 6,
                          BODY: {
                    HEALTH: base.HEALTH * 2.6,
                    SHIELD: base.SHIELD * 2.6,
                    DENSITY: base.DENSITY * 0.2,
                            SPEED: base.SPEED * 0.2,
                },
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  11,     18,      0,     0,    360, 1],
                    TYPE: exports.realitypart1,
                        }, {
                POSITION: [  11,     18,      0,     120,    360, 1],
                    TYPE: exports.realitypart1,
                        }, {
                POSITION: [  11,     18,      0,     240,    360, 1],
                    TYPE: exports.realitypart1,
                        }, {
                POSITION: [  11,     0,      0,     0,    360, 0, ],
                    TYPE: exports.realitypart2,
                          MAX_CHILDREN: 6,
                        }, {
                POSITION: [  11,     0,      0,     0,    360, 0],
                    TYPE: exports.realitypart3,
                        },  {
                POSITION: [  11,     0,      0,     0,    360, 0],
                    TYPE: exports.realitypart4,
                        },   {
                POSITION: [  11,     0,      0,     0,    360, 0],
                    TYPE: exports.realitypart4,
                        },   {
                POSITION: [  11,     0,      0,     0,    360, 0],
                    TYPE: exports.realitypart4,
                        }, 
            ],
          GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,     8,      1,      0,     5.5,     60,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF3,
              MAX_CHILDREN: 3,
            }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,     8,      1,      0,    -5.5,     60,     0.5,  ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF3,
              MAX_CHILDREN: 3,
            }, }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,     8,      1,      0,     5.5,     180,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF3,
              MAX_CHILDREN: 3,
            }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,     8,      1,      0,    -5.5,     180,     0.5,  ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF3,
              MAX_CHILDREN: 3,
            }, }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,     8,      1,      0,     5.5,     300,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF3,
              MAX_CHILDREN: 3,
            }, }, { /* LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,     8,      1,      0,    -5.5,     300,     0.5,  ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.WTF3,
              MAX_CHILDREN: 3,
            }, },
        ],
};
            exports.blackhole = {
                PARENT: [exports.genericTank],
                LABEL: 'Black Hole',
                DANGER: 7,
              MAX_CHILDREN: 18,
              MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
                BODY: {
                    SPEED: base.speed*0.1,
                    DAMAGE: base.DAMAGE * 1.1,
                    FOV: base.FOV * 10,
                    DENSITY: base.DENSITY * 2,
                },
                IS_SMASHER: true,
              FACING_TYPE: 'autospin',
          CONTROLLERS: ['alwaysFire',],
                TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                    POSITION: [ 20.5,    0,      0,      0,     360,  0,], 
                    TYPE: exports.fabrictear,
                    }, { 
                    POSITION: [ 20.5,    0,      0,     120,    360,  0,], 
                    TYPE: exports.fabrictear,
                    }, {
                    POSITION: [ 20.5,    0,      0,     240,    360,  0,], 
                    TYPE: exports.fabrictear,
                }],
              GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  1,     8,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.dencitychunk,
                    }, }, {   
                POSITION: [  1,     8,      1,      0,      0,     120,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.dencitychunk,
                    }, }, {   
                POSITION: [  1,     8,      1,      0,      0,     240,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.dencitychunk,
                    }, }, {   
                POSITION: [  1,     8,      1,      0,      0,      60,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.dencitychunk,
                    }, }, {   
                POSITION: [  1,     8,      1,      0,      0,     180,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.dencitychunk,
                    }, }, {   
                POSITION: [  1,     8,      1,      0,      0,     300,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.dencitychunk,
                    }, },
            ],
            }; 
            exports.rift = {
                PARENT: [exports.genericTank],
                LABEL: 'The Broken Rift',
                DANGER: 7,
              MAX_CHILDREN: 18,
                BODY: {
                    SPEED: base.speed*0.1,
                    DAMAGE: base.DAMAGE * 1.1,
                    FOV: base.FOV * 1,
                    DENSITY: base.DENSITY * 2,
                },
                IS_SMASHER: true,
              FACING_TYPE: 'autospin',
          CONTROLLERS: ['alwaysFire'],
                TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                    POSITION: [ 20.5,    0,      0,      0,     360,  0,], 
                    TYPE: exports.fabrictear,
                    }, { 
                    POSITION: [ 20.5,    0,      0,     120,    360,  0,], 
                    TYPE: exports.fabrictear,
                    }, {
                    POSITION: [ 20.5,    0,      0,     240,    360,  0,], 
                    TYPE: exports.fabrictear,
                }],
              GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  1,     8,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.miniblackhole,
                    }, }, {   
                POSITION: [  1,     8,      1,      0,      0,     120,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.miniblackhole,
                    }, }, {   
                POSITION: [  1,     8,      1,      0,      0,     240,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.miniblackhole,
                    }, }, {   
                POSITION: [  1,     8,      1,      0,      0,      60,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.miniblackhole,
                    }, }, {   
                POSITION: [  1,     8,      1,      0,      0,     180,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.miniblackhole,
                    }, }, {   
                POSITION: [  1,     8,      1,      0,      0,     300,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.miniblackhole,
                    }, },
            ],
            };  
exports.testingtank = {
                PARENT: [exports.genericTank],
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                },
                LABEL: 'TESTING',
                DANGER: 7,
                MAX_CHILDREN: 100,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [10.9, 16, 1.2, 5, 0, 0, 0],
                      PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sussyslow]),
                        TYPE: exports.theia,
                        STAT_CALCULATOR: gunCalcNames.sustained,
                      }, }, 
                ],
          };
            exports.hiveshooter = {
                PARENT: [exports.genericTank],
                DANGER: 6,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                    SPEED: base.speed * 0.8,
                },
                LABEL: 'Swarmer',
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,    14,     -1.2,    5,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.hive]),
                            TYPE: exports.hive,
                        }, }, {
                    POSITION: [  15,    12,      1,      5,      0,      0,      0,   ], 
                    }
                ],
            };
            exports.hybrid = makeHybrid(exports.destroy, 'Hybrid');
            exports.hybrid2 = makeTrapper(exports.hybrid, 'Traprid');
            exports.shotgun2 = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Shotgun',
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7,
                },
                GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
                    POSITION: [  4,      3,      1,     11,     -3,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  4,      3,      1,     11,      3,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  4,      4,      1,     13,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.casing,
                        }, }, {
                    POSITION: [  1,      4,      1,     12,     -1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.casing,
                        }, }, {
                    POSITION: [  1,      4,      1,     11,      1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.casing,
                        }, }, {                
                    POSITION: [  1,      3,      1,     13,     -1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  1,      3,      1,     13,      1,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  1,      2,      1,     13,      2,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.casing,
                        }, }, {
                    POSITION: [  1,      2,      1,     13,     -2,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun]),
                            TYPE: exports.casing,
                        }, }, {
                    POSITION: [ 15,     14,      1,     6,       0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.shotgun, g.fake]),
                            TYPE: exports.casing,
                        }, }, {
                    POSITION: [  8,     14,    -1.3,    4,       0,      0,      0,   ], }
                ],
            };
exports.murder = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Multi-Rocketeer',
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7,
                },
                GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
                  POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                   POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, {
                    POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, {
                                    POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                   POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, {
                    POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, {
                    POSITION: [ 15,     13,      1.2,     6,       0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereload, g.fake]),
                            TYPE: exports.casing,
                        }, }, {
                    POSITION: [  8,     14,    1.2,    4,       0,      0,      0,   ], }
                ],
            };
exports.murderremoved = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                COLOR: 36,
                LABEL: 'Deletion',
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7,
                },
                GUNS: [ /***** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */ {
                  POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                          POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                          POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                          POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                          POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                          POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                          POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                          POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                          POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                          POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                          POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                          POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                          POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                          POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                          POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                          POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                   POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, {
                    POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, {
                                    POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                   POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, {
                    POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, {
                    POSITION: [ 15,     14,      -1.2,     6,       0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereload, g.fake]),
                            TYPE: exports.casing,
                        }, }
                ],
            };
    exports.autoshooter = makeAuto(exports.shotgun2);
        exports.builder = {
            PARENT: [exports.genericTank],
            DANGER: 6,
            LABEL: 'Trapper',
            STAT_NAMES: statnames.trap,
            BODY: {
                SPEED: base.SPEED * 0.8,
                FOV: base.FOV * 1.15,
            },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    12,      1,      0,      0,      0,      0,   ], 
                }, {
                POSITION: [   2,    12,     1.1,     18,     0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                        TYPE: exports.block,
                    }, },
            ],
        };
            exports.engineer = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Engineer',
                STAT_NAMES: statnames.trap,
                BODY: {
                    SPEED: base.SPEED * 0.75,
                    FOV: base.FOV * 1.15,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   5,    11,      1,     10.5,     0,      0,      0,   ], 
                    }, {
                    POSITION: [   3,    14,      1,     15.5,     0,      0,      0,   ], 
                    }, {
                    POSITION: [   2,    14,     1.3,     18,      0,      0,      0,   ], 
                        PROPERTIES: {
                            MAX_CHILDREN: 6,
                            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                            TYPE: exports.pillbox,        
                            SYNCS_SKILLS: true,   
                        }, }, {                            
                    POSITION: [   4,    14,      1,      8,      0,      0,      0,   ]
                    }
                ],
            };
exports.apiary = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Apiary',
                STAT_NAMES: statnames.trap,
                BODY: {
                    SPEED: base.SPEED * 0.75,
                    FOV: base.FOV * 1.15,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   5,    15,      1,     10.5,     0,      0,      0,   ], 
                    }, {
                    POSITION: [   3,    18,      1,     15.5,     0,      0,      0,   ], 
                    }, {
                    POSITION: [   2,    20,     0.7,     18,      0,      0,      0,   ], 
                        PROPERTIES: {
                            MAX_CHILDREN: 4,
                            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                            TYPE: exports.beehouse,        
                            SYNCS_SKILLS: true,   
                        }, }, {                            
                    POSITION: [   4,    18,      1,      8,      0,      0,      0,   ]
                    }
                ],
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  10,     0,      0,      90,     360,  1], 
            TYPE: exports.hexagon2,
        },
    ]
            };
            exports.construct = {
                PARENT: [exports.genericTank],
                LABEL: 'Mega Trapper',
                STAT_NAMES: statnames.trap,
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.5,
                    SPEED: base.SPEED * 0.7,
                    FOV: base.FOV * 1.15,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,    18,      1,      0,      0,      0,      0,   ], 
                    }, {
                    POSITION: [   2,    18,     1.2,     18,     0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.construct]),
                            TYPE: exports.block,
                        }, }, 
                ],
            };
            exports.autobuilder = makeAuto(exports.builder);
            exports.conq = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: '',
                STAT_NAMES: statnames.trap,
                BODY: {
                    SPEED: base.SPEED * 0.8,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  21,    14,      1,      0,      0,     180,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                        TYPE: exports.bullet,
                    }, }, {
                    POSITION: [  18,    14,      1,      0,      0,      0,      0,   ], 
                    }, {
                    POSITION: [   2,    14,     1.1,     18,     0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block]),
                            TYPE: exports.block,
                        }, },
                ],
            };
            exports.bentboomer = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Bent-Boomer',
                STAT_NAMES: statnames.trap,
                BODY: {
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.15,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   8,    10,      1,      8,     -2,     -15,     0,   ],
                        }, {
                    POSITION: [   8,    10,      1,      8,      2,      15,     0,   ],
                        }, {
                    POSITION: [   2,    10,     1.3,     16,    -2,     -15,     0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
                            TYPE: exports.boomerang,
                        }, }, {
                    POSITION: [   2,    10,     1.3,     16,     2,      15,    0.5,  ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.fast, g.twin]),
                            TYPE: exports.boomerang,
                        }, },
                ],
            };
            exports.boomer = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Boomer',
                STAT_NAMES: statnames.trap,
                BODY: {
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.15,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   5,    10,      1,      14,     0,      0,      0,   ],
                        }, {
                    POSITION: [   6,    10,    -1.5,      7,     0,      0,      0,   ],
                        }, {
                    //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
                    //    }, {
                    POSITION: [   2,    10,     1.3,     18,     0,      0,      0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
                            TYPE: exports.boomerang,
                        }, },
                ],
            };
exports.boomernest = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Boomer',
                STAT_NAMES: statnames.trap,
                BODY: {
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.15,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   6,    10,      1,      13,     0,      0,      0,   ],
                        }, {
                    POSITION: [   6,    10,    -1.5,      7,     0,      0,      0,   ],
                        }, {
                    //POSITION: [  12,    15,      1,      0,      0,      0,      0,   ],
                    //    }, {
                    POSITION: [   2,    10,     1.3,     18,     0,      0,      0,   ],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.boomerang]),
                            TYPE: exports.boomerang,
                        }, },
                ],
            };
exports.turretnest = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Twin',
                STAT_NAMES: statnames.trap,
                BODY: {
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.15,
                },
                CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   9.3,    5,      1,      6,     5,      0,      0,   ],
                   PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.triplex]),
                TYPE: exports.bullet,
                        }, }, {
                    POSITION: [   9.3,    5,      1,      6,     -5,      0,      0.5,   ],
                   PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.triplex]),
                TYPE: exports.bullet,
                        }, }     
                ],
            };
exports.turretlegion = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Twin',
                STAT_NAMES: statnames.trap,
                BODY: {
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.15,
                },
  CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   12.5,    5,      1,      6,     5,      0,      0,   ],
                        }, {
                    POSITION: [   12.5,    5,      1,      6,     -5,      0,      0.5,   ],
                        },    
                ],
            };
            exports.quadtrapper = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Quad-Builder',
                STAT_NAMES: statnames.trap, 
                BODY: {
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.15,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,     6,      1,      0,      0,     45,      0,   ], 
                        }, {
                    POSITION: [   2,     6,     1.1,     14,     0,     45,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
                            TYPE: exports.block,
                        }, }, {
                    POSITION: [  14,     6,      1,      0,      0,     135,     0,   ], 
                        }, {
                    POSITION: [   2,     6,     1.1,     14,     0,     135,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
                            TYPE: exports.block,
                        }, }, {
                    POSITION: [  14,     6,      1,      0,      0,     225,     0,   ], 
                        }, {
                    POSITION: [   2,     6,     1.1,     14,     0,     225,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
                            TYPE: exports.block,
                        }, }, {
                    POSITION: [  14,     6,      1,      0,      0,     315,     0,   ], 
                        }, {
                    POSITION: [   2,     6,     1.1,     14,     0,     315,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.block, g.weak]),
                            TYPE: exports.block,
                        }, },
                ],
            };

        exports.artillery = {
            PARENT: [exports.genericTank],
            DANGER: 6,
            LABEL: 'Artillery',
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  17,     3,      1,      0,     -6,     -7,     0.25,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                        TYPE: exports.bullet,
                        LABEL: 'Secondary',
                    }, }, {
                POSITION: [  17,     3,      1,      0,      6,      7,     0.75,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                        TYPE: exports.bullet,
                        LABEL: 'Secondary',
                    }, }, {
                POSITION: [  19,     12,     1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                        TYPE: exports.bullet,
                        LABEL: 'Heavy',
                    }, },
            ],
        };
exports.keepingitsus= {
            PARENT: [exports.genericTank],
            DANGER: 6,
            LABEL: 'Beekeeper',
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  13,     3,      1,      0,     -6,     -7,     0.25,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                        TYPE: exports.bee,
                        LABEL: 'Secondary',
                    }, }, {
                POSITION: [  13,     3,      1,      0,      6,      7,     0.75,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty]),
                        TYPE: exports.bee,
                        LABEL: 'Secondary',
                    }, }, {
                POSITION: [  19,     12,     1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                        TYPE: exports.bullet,
                        LABEL: 'Heavy',
                    }, },
            ],
        };
            exports.mortar = {
                PARENT: [exports.genericTank],
                LABEL: 'Mortar',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  13,     3,      1,      0,     -8,     -7,     0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                            TYPE: exports.bullet,
                            LABEL: 'Secondary',
                        }, }, {
                    POSITION: [  13,     3,      1,      0,      8,      7,     0.8,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                            TYPE: exports.bullet,
                            LABEL: 'Secondary',
                        }, }, {
                    POSITION: [  17,     3,      1,      0,     -6,     -7,     0.2,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                            TYPE: exports.bullet,
                            LABEL: 'Secondary',
                        }, }, {
                    POSITION: [  17,     3,      1,      0,      6,      7,     0.4,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin]),
                            TYPE: exports.bullet,
                            LABEL: 'Secondary',
                        }, }, {
                    POSITION: [  19,     12,     1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty]),
                            TYPE: exports.bullet,
                            LABEL: 'Heavy',
                        }, },
                ],
            };
exports.skimmer = {
                PARENT: [exports.genericTank],
                BODY: {
                    FOV: base.FOV * 1.15,
                },
                LABEL: 'Skimmer',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  10,    14,    -0.5,     9,      0,      0,      0,  ], 
                        }, {
                    POSITION: [  17,    15,      1,      0,      0,      0,      0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
                            TYPE: exports.missile,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                ],
            };
exports.twist = {
                PARENT: [exports.genericTank],
                BODY: {
                    FOV: base.FOV * 1.15,
                },
                LABEL: 'Twister',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  10,    16,    -0.5,     9,      0,      0,      0,  ], 
                                         PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty123, g.arty123, g.skim123]),
                            TYPE: exports.missiletwist,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                         {
                    POSITION: [  17,    15,      -1.3,      0,      0,      0,      0,  ], 
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
      POSITION: [13, 4, 1, 0, -0.8, -75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, -1.0, -60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, -1.6, -45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, -2.4, -30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, -3.0, -15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 4, 1, 0, 0.8, 75, 5 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [14.5, 4, 1, 0, 1.0, 60, 4 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [16, 4, 1, 0, 1.6, 45, 3 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [17.5, 4, 1, 0, 2.4, 30, 2 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [19, 4, 1, 0, 3.0, 15, 1 / 6],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.gunner,
          g.arty,
          g.twin,
          g.spread
        ]),
        TYPE: exports.bullet,
        LABEL: "Spread"
      }
    },
    {
      POSITION: [13, 9.45, 0, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.pound,
          g.spreadmain,
          g.spread,
        ]),
        TYPE: exports.bullet,
        LABEL: "Center Spread"
      }
    }
  ]
};
    exports.flank = {
        PARENT: [exports.genericTank],
        LABEL: 'Flank Guard',
        BODY: {
            SPEED: base.SPEED * 1.1,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                    TYPE: exports.bullet,
                }, }, {   
            POSITION: [  18,     8,      1,      0,      0,     120,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                    TYPE: exports.bullet,
                }, }, {   
            POSITION: [  18,     8,      1,      0,      0,     240,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.flank]),
                    TYPE: exports.bullet,
                }, },
        ],
    };
        exports.hexa = {
            PARENT: [exports.genericTank],
            LABEL: 'Hexa Tank',
            DANGER: 6,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.bullet,
                    }, }, {   
                POSITION: [  18,     8,      1,      0,      0,     120,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.bullet,
                    }, }, {   
                POSITION: [  18,     8,      1,      0,      0,     240,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.bullet,
                    }, }, {   
                POSITION: [  18,     8,      1,      0,      0,      60,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.bullet,
                    }, }, {   
                POSITION: [  18,     8,      1,      0,      0,     180,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.bullet,
                    }, }, {   
                POSITION: [  18,     8,      1,      0,      0,     300,    0.5,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank]),
                        TYPE: exports.bullet,
                    }, },
            ],
        };
            exports.octobase = {
                PARENT: [exports.genericTank],
                LABEL: 'Base',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      -1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                            TYPE: exports.trap2,
                        }, }, {   
                    POSITION: [  18,     8,      -1.4,      0,      0,      90,     0.6,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                            TYPE: exports.trap2,
                        }, }, {   
                    POSITION: [  18,     8,      -1.4,      0,      0,     180,     1.2,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                            TYPE: exports.trap2,
                        }, }, {   
                    POSITION: [  18,     8,      -1.4,      0,      0,     270,     1.8,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                            TYPE: exports.trap2,
                        }, }, {   
                    POSITION: [  18,     8,      -1.4,      0,      0,      45,    0.3,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                            TYPE: exports.trap2,
                        }, }, {   
                    POSITION: [  18,     8,      -1.4,      0,      0,     135,    0.9,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                            TYPE: exports.trap2,
                        }, }, {
                    POSITION: [  18,     8,      -1.4,      0,      0,     225,    1.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                            TYPE: exports.trap2,
                        }, }, {   
                    POSITION: [  18,     8,      -1.4,      0,      0,     315,    2.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.triple]),
                            TYPE: exports.trap2,
                        }, },
                ],
            };
            exports.octo = {
                PARENT: [exports.genericTank],
                LABEL: 'Octo Tank',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     270,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,      45,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     135,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  18,     8,      1,      0,      0,     225,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     315,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
            exports.swerl = {
                PARENT: [exports.genericTank],
                LABEL: 'Cyclone',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,     2,      1,      0,      0,      0,      0.33,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  14,     2,      1,      0,      0,      24,     0.66,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  14,     2,      1,      0,      0,     48,     1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  14,     2,      1,      0,      0,     72,     0.33,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  14,     2,      1,      0,      0,      96,    0.66,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  14,     2,      1,      0,      0,     120,    1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  14,     2,      1,      0,      0,     144,    0.33,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  14,     2,      1,      0,      0,     168,    0.66,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,     2,      1,      0,      0,      192,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  14,     2,      1,      0,      0,      216,     0.33,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  14,     2,      1,      0,      0,     240,     0.66,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  14,     2,      1,      0,      0,     264,     1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  14,     2,      1,      0,      0,      288,    0.33,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  14,     2,      1,      0,      0,     312,    0.66,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  14,    2,      1,      0,      0,     336,    1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spam]),
                            TYPE: exports.bullet,
                        }, },
                ],
            };
exports.submachinegun = {
                PARENT: [exports.genericTank],
                LABEL: 'Submachine Gun',
                DANGER: 7,
                BODY: {
                    FOV: base.FOV * 1.1,
                    SPEED: base.SPEED * 0.9,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  34,     2,      1,      0,    -5,     0,     0, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.halfreload, g.halfreload]),
                            TYPE: exports.bulletsubmach,
                        }, }, {
                    POSITION: [  34,     2,      1,      0,     5,     0,     0.4, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.halfreload, g.halfreload]),
                            TYPE: exports.bulletsubmach,
                        }, }, {
                    POSITION: [  34,     2,      1,      0,      -2.5,      0,      0.1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.halfreload, g.halfreload]),
                            TYPE: exports.bulletsubmach,
                        }, },{
                    POSITION: [  34,     2,      1,      0,     2.5,     0,     0.3, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.halfreload, g.halfreload]),
                            TYPE: exports.bulletsubmach,
                        }, }, {
                    POSITION: [  34,     2,      1,      0,      0,      0,      0.2,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.halfreload, g.halfreload]),
                            TYPE: exports.bulletsubmach,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  34,     2,      1,      0,    -5,     0,     0.9, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.halfreload, g.halfreload]),
                            TYPE: exports.bulletsubmach,
                        }, }, {
                    POSITION: [  34,     2,      1,      0,     5,     0,     0.5, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.halfreload, g.halfreload]),
                            TYPE: exports.bulletsubmach,
                        }, }, {
                    POSITION: [  34,     2,      1,      0,      -2.5,      0,      0.8,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.halfreload, g.halfreload]),
                            TYPE: exports.bulletsubmach,
                        }, },{
                    POSITION: [  34,     2,      1,      0,     2.5,     0,     0.6, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.halfreload, g.halfreload]),
                            TYPE: exports.bulletsubmach,
                        }, }, {
                    POSITION: [  34,     2,      1,      0,      0,      0,      0.7,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.nail, g.halfreload, g.halfreload]),
                            TYPE: exports.bulletsubmach,
                        }, },{
                    POSITION: [  12,     16,      1,      0,     0,     0,     0.6, ], 
                          }, {
                    POSITION: [  4,     14,      1,      26,      0,      0,      0.7,   ], 
                          },
                ],
            };
exports.steam = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
  SHAPE: 1,
    BODY: {
        PENETRATION: 1,
        SPEED: 0.1,
        RANGE: 35,
        DENSITY: 1.25,
        HEALTH: 12 * wepHealthFactor,
        DAMAGE: 30 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.thecall = {
    LABEL: 'Auto Drone',
    TYPE: 'drone',
    ACCEPTS_SCORE: false,
    DANGER: 2,
    CONTROL_RANGE: 10,
    INDEPENDENT: true,
    SHAPE: -10,
  AUTOFIRE: true,
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'autospin',
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'fastspin',
      'alwaysFire'
    ],
      COLOR: 36,
    AI: { BLIND: true, },
    BODY: {
      COLOR: 36,
        PENETRATION: 1,
        SPEED: 0.75,
        RANGE: 45,
        DENSITY: 1.25,
        HEALTH: 5.33 * wepHealthFactor,
        DAMAGE: 40 * wepDamageFactor,
        PUSHABILITY: 0.3,
        ACCELERATION: 0.05,
        RESIST: 1.5,
        FOV: 0,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: false,
    CLEAR_ON_MASTER_UPGRADE: true,
    DIE_AT_RANGE: true,
  GUNS: [ {/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16,    7,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX]),
                    TYPE: exports.bullet3,
                }, },{/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16,    7,      1,      0,      0,      90,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX]),
                    TYPE: exports.bullet3,
                }, },{/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16,    7,      1,      0,      0,      180,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX]),
                    TYPE: exports.bullet3,
                }, },{/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16,    7,      1,      0,      0,      270,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX]),
                    TYPE: exports.bullet3,
                }, },
        ],
};
exports.SUMON = {
    PARENT: [exports.genericTank],
    LABEL: '',
    BODY: {
        FOV: 1,
    },
     INDEPENDENT: true,
  HAS_NO_RECOIL: true,
    FACING_TYPE: 'autospin',
    CONTROLLERS: ['fastspin', 'alwaysFire'],
    GUNS: [ {/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16,    7,      1,      0,      0,      90,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX, g.halfreload, g.halfreload, g.halfreload, g.halfreload]),
                    TYPE: exports.thecall,
              
                }, }, {
            POSITION: [  16,    7,      1,      0,      0,      180,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX, g.halfreload, g.halfreload, g.halfreload, g.halfreload]),
                    TYPE: exports.thecall,
                },},{/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16,    7,      1,      0,      0,      270,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX, g.halfreload, g.halfreload, g.halfreload, g.halfreload]),
                    TYPE: exports.thecall,
                }, },{/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16,    7,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX, g.halfreload, g.halfreload, g.halfreload, g.halfreload]),
                    TYPE: exports.thecall,
                }, }, {/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16,    7,      1,      0,      0,      45,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX, g.halfreload, g.halfreload, g.halfreload, g.halfreload]),
                    TYPE: exports.thecall,
              
                }, }, {
            POSITION: [  16,    7,      1,      0,      0,      225,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX, g.halfreload, g.halfreload, g.halfreload, g.halfreload]),
                    TYPE: exports.thecall,
                },},{/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16,    7,      1,      0,      0,      315,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX, g.halfreload, g.halfreload, g.halfreload, g.halfreload]),
                    TYPE: exports.thecall,
                }, },{/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  16,    7,      1,      0,      0,      135,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamX, g.halfreload, g.halfreload, g.halfreload, g.halfreload]),
                    TYPE: exports.thecall,
                }, },
        ],
  TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  11,     0,      0,      0,     360, 1], 
                    TYPE: exports.circle,
                        },
            ],
    };
            exports.realitycaller = {
                PARENT: [exports.genericTank],
                LABEL: 'Reality Caller',
                  FACING_TYPE: 'autospin',
    CONTROLLERS: ['fastspin', 'alwaysFire'],
                DANGER: 7,
              TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  10,     0,      0,     0,    360, 1],
                    TYPE: exports.SUMON,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  10,     0,      0,     22.5,    360, 1],
                    TYPE: exports.SUMON,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  9,     0,      0,     22.5,    360, 1],
                    TYPE: exports.circle2lel,
                        },
            ],
              BODY: {
                    HEALTH: base.HEALTH * 10.6,
                    SHIELD: base.SHIELD * 10.6,
                    DENSITY: base.DENSITY * 0.2,
                  SPEED: base.SPEED * 0.1,
                },
            };
        exports.realityguard = { 
            PARENT: [exports.genericTank],
            LABEL: 'Reality Guardian',
            DANGER: 6,
            FACING_TYPE: 'autospin',
          CONTROLLERS: ['alwaysFire'],
          MAX_CHILDREN: 36,
GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  15,     4,      2.5,      0,     0,     0,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.rock,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     30,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.rock,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     60,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.rock,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     90,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.rock,},},{            
                  POSITION: [  15,     4,      2.5,      0,     0,     120,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.rock,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     150,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.rock,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     180,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.rock,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     210,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.rock,},},{            
                  POSITION: [  15,     4,      2.5,      0,     0,     240,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.rock,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     270,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.rock,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     300,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.rock,},},{
            POSITION: [  15,     4,      2.5,      0,     0,     330,      0,   ],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                TYPE: exports.rock,},},
       
      ],
               BODY: {
                    HEALTH: base.HEALTH * 5.6,
                    SHIELD: base.SHIELD * 5.6,
                    DENSITY: base.DENSITY * 0.2,
                  SPEED: base.SPEED * 4,
                },
                DANGER: 7,
            };
exports.steampart = {
    PARENT: [exports.genericTank],
    LABEL: '',
  SHAPE: -8,
    COLOR: 16,
  FACING_TYPE: 'autospin',
    CONTROLLERS: ['spin'],
};
exports.steampart2 = {
    PARENT: [exports.genericTank],
    LABEL: '',
  SHAPE: -7,
    COLOR: 16,
  FACING_TYPE: 'autospin',
    CONTROLLERS: ['reversespin'],
};
            exports.Vroom = {
                PARENT: [exports.genericTank],
                LABEL: 'Octo Tank',
                DANGER: 7,
              HAS_NO_RECOIL: true,
              INDEPENDENT: false,
    FACING_TYPE: 'autospin',
    CONTROLLERS: ['fastspin'],
              AUTOFIRE: true,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.2,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.3,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.4,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.5,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.6,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.7,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.8,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.9,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.2,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.3,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.4,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.5,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.6,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.7,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.8,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.9,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange]),
                            TYPE: exports.steam,
                        }, },
                ],
            };
exports.link = { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  SHAPE: -4,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  52,     0,      0,      0,     360, 1], 
                    TYPE: exports.Vroom,
                        },{
                POSITION: [  52,     0,      0,      90,     360, 1], 
                    TYPE: exports.Vroom,
                        },{
                POSITION: [  52,     0,      0,      180,     360, 1], 
                    TYPE: exports.Vroom,
                        },{
                POSITION: [  52,     0,      0,      270,     360, 1], 
                    TYPE: exports.Vroom,
                        },{
                POSITION: [  85,     0,      0,      0,     360, 1], 
                    TYPE: exports.steampart,
                        },{
                POSITION: [  52,     0,      0,      0,     360, 1], 
                    TYPE: exports.steampart2,
                        },{
                POSITION: [  25,     0,      0,      0,     360, 1], 
                    TYPE: exports.hexagon2,
                        },
            ],
        };
exports.link1 = { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  SHAPE: 0,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  17,     20,      0,      0,     360, 1], 
                    TYPE: exports.link,
                        },
            ],
        };
exports.link2 = { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  SHAPE: 0,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  35,     20,      0,      0,     360, 1], 
                    TYPE: exports.link1,
                        },
            ],
        };
exports.link3 = { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  SHAPE: 0,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  16,     20,      0,      0,     360, 1], 
                    TYPE: exports.link2,
                        },
            ],
        };
exports.link4= { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  SHAPE: 0,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  15,     20,      0,      0,     360, 1], 
                    TYPE: exports.link3,
                        },
            ],
        };
exports.link5= { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  SHAPE: 0,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  14,     20,      0,      0,     360, 1], 
                    TYPE: exports.link4,
                        },
            ],
        };
exports.chain = { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  SHAPE: -4,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  52,     0,      0,      0,     360, 1], 
                    TYPE: exports.Vroom,
                        },{
                POSITION: [  52,     0,      0,      90,     360, 1], 
                    TYPE: exports.Vroom,
                        },{
                POSITION: [  52,     0,      0,      0,     360, 1], 
                    TYPE: exports.steampart2,
                        },{
                POSITION: [  25,     0,      0,      0,     360, 1], 
                    TYPE: exports.hexagon2,
                        },
            ],
        };
exports.chain1 = { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  SHAPE: 0,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  17,     20,      0,      0,     360, 1], 
                    TYPE: exports.chain,
                        },
            ],
        };
exports.chain2 = { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  SHAPE: 0,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  35,     20,      0,      0,     360, 1], 
                    TYPE: exports.chain1,
                        },
            ],
        };
exports.chain3 = { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  SHAPE: 0,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  16,     20,      0,      0,     360, 1], 
                    TYPE: exports.chain2,
                        },
            ],
        };

exports.steamroller = { 
            PARENT: [exports.genericTank],
            LABEL: 'Morning Star',
            CONTROLLERS: ['alwaysFire'],
            DANGER: 6,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     12,      0,      0,     360, 1], 
                    TYPE: exports.link5,
                        },
            ],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  14,     10,      0.1,      0,      0,      30,      0,   ], 
                    },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  14,     10,      0.1,      0,      0,      60,      0,   ], 
                    },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  14,     10,      0.1,      0,      0,      90,      0,   ], 
                    },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  14,     10,      0.1,      0,      0,      120,      0,   ], 
                    },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  14,     10,      0.1,      0,      0,      150,      0,   ], 
                    },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  14,     10,      0.1,      0,      0,      180,      0,   ], 
                    },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  14,     10,      0.1,      0,      0,      210,      0,   ], 
                    },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  14,     10,      0.1,      0,      0,      240,      0,   ], 
                    },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  14,     10,      0.1,      0,      0,      270,      0,   ], 
                    },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  14,     10,      0.1,      0,      0,      300,      0,   ], 
                    },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  14,     10,      0.1,      0,      0,      330,      0,   ], 
                    },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  14,     10,      0.1,      0,      0,      360,      0,   ], 
                    },
                ],
        };
            exports.zoom = {
                PARENT: [exports.genericTank],
                LABEL: 'Octo Tank',
                DANGER: 7,
              HAS_NO_RECOIL: true,
              INDEPENDENT: false,
    FACING_TYPE: '',
    CONTROLLERS: ['alwaysFire'],
              AUTOFIRE: true,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.2,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.3,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.4,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.5,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.6,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.7,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.8,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      0.9,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.1,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.2,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.3,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.4,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.5,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.6,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.7,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.8,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  1,     8,      1,      0,      0,      0,      1.9,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basicxx, g.lowrange, g.lowrange, g.almostnospeed]),
                            TYPE: exports.steam,
                        }, },
                ],
            };
exports.wowzy= { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  SHAPE: 0,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  14,     20,      0,      0,     360, 1], 
                    TYPE: exports.zoom,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  24,     20,      0,      0,     360, 1], 
                    TYPE: exports.circle,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  14,     20,      0,      0,     360, 1], 
                    TYPE: exports.hexagon2,
                        },
            ],
        };
exports.wowzer= { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  SHAPE: 0,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  14,     20,      0,      15,     360, 1], 
                    TYPE: exports.zoom,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  14,     20,      0,      -15,     360, 1], 
                    TYPE: exports.zoom,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  54,     20,      0,      0,     360, 1], 
                    TYPE: exports.circle,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  18,     20,      0,      0,     360, 1], 
                    TYPE: exports.hexagon2,
                        },
            ],
        };
exports.chain= { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  SHAPE: 0,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     25,      0,      0,     360, 1], 
                    TYPE: exports.wowzer,
                        },
            ],
        };
exports.chain2= { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  INDEPENDENT: true,
  SHAPE: 0,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     25,      0,      0,     360, 1], 
                    TYPE: exports.chain,
                        },
            ],
        };
            exports.pointy = {
                PARENT: [exports.genericTank],
                LABEL: 'Lance',
              CONTROLLERS: ['alwaysFire'],
                DANGER: 7,
              HAS_NO_RECOIL: true,
              TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     12,      0,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },
            ],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  20,     18,      0.01,      4,      0,      0,      0,   ], 
                         },
                ],
            };
            exports.longpointy = {
                PARENT: [exports.genericTank],
                LABEL: 'Jouster',
              CONTROLLERS: ['alwaysFire'],
                DANGER: 7,
              HAS_NO_RECOIL: true,
              TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     12,      0,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     22,      0,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },
            ],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  34,     18,      0.01,      4,      0,      0,      0,   ], 
                         },
                ],
            };
            exports.spear = {
                PARENT: [exports.genericTank],
                LABEL: 'Spear',
              CONTROLLERS: ['alwaysFire'],
                DANGER: 7,
              HAS_NO_RECOIL: true,
              TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  1,     46,      0,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  1,     46,      0,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  1,     46,      0,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  1,     46,      0,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },
            ],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  44,     2,      1,      4,      0,      0,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  8,     8,      0.01,      44,      0,      0,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  4,     10,      0.2,      9,      0,      0,      0,   ], 
                         },
                ],
            };
exports.verylongpointy = {
                PARENT: [exports.genericTank],
                LABEL: 'Royal Jouster',
              CONTROLLERS: ['alwaysFire'],
                DANGER: 7,
              HAS_NO_RECOIL: true,
              TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  1,     12,      0,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  1,     22,      0,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  1,     32,      0,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  1,     42,      0,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },
            ],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  44,     10,      0.01,      4,      0,      0,      0,   ], 
                         },
                ],
            };
exports.sharppointy = {
                PARENT: [exports.genericTank],
                LABEL: 'Blade',
              CONTROLLERS: ['alwaysFire'],
                DANGER: 7,
              HAS_NO_RECOIL: true,
              TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     12,      1,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     12,      -1,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },
            ],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      0,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,     18,      0.5,      4,      0,      0,      0,   ], 
                         },
                ],
            };
exports.verysharppointy = {
                PARENT: [exports.genericTank],
                LABEL: 'Sword',
              CONTROLLERS: ['alwaysFire'],
                DANGER: 7,
              HAS_NO_RECOIL: true,
              TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     12,      0,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     12,      0,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     10,      0,      1,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     10,      0,      -1,     360, 0], 
                    TYPE: exports.wowzy,
                        },
            ],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.09,      4,      0,      0,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,     18,      0.6,      4,      0,      0,      0,   ], 
                         },
                ],
            };
exports.head= { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
  CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
            DANGER: 6,
  SHAPE: 0,
  BODY: {
    FOV: 1,
  },
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  28,     0,      0,      0,     360, 1], 
                    TYPE: exports.zoom,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  48,     0,      0,      0,     360, 1], 
                    TYPE: exports.circle,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  28,     0,      0,      0,     360, 1], 
                    TYPE: exports.hexagon2,
                        },
            ],
  GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  38,     18,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.redi, g.doublereload, g.doublereload]),
            TYPE: exports.bullet,
        }, }, { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  38,     18,      1,      0,      0,      0,      1,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.puregunner, g.fast, g.redi, g.doublereload, g.doublereload]),
            TYPE: exports.bullet,
        }, }, //YOU PUT REDI IN THERE? THATS FOR REDISTRIBUTER
    ],
        };
exports.neck = { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
  CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
            DANGER: 6,
            SHAPE: 0,
            INDEPENDENT: true,
            HAS_NO_RECOIL: true,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     20,      0,      0,     120, 1], 
                    TYPE: exports.head,
                        },
            ],
        };
exports.neck1 = { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
            SHAPE: 0,
            INDEPENDENT: true,
            HAS_NO_RECOIL: true,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     20,      0,      0,     120, 1], 
                    TYPE: exports.neck,
                        },
            ],
        };
exports.neck2 = { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
  CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
            DANGER: 6,
            SHAPE: 0,
            INDEPENDENT: true,
            HAS_NO_RECOIL: true,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     20,      0,      0,     180, 1], 
                    TYPE: exports.neck1,
                        },
            ],
        };
exports.neck3 = { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
            SHAPE: 0,
            INDEPENDENT: true,
            HAS_NO_RECOIL: true,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     20,      0,      0,     120, 1], 
                    TYPE: exports.neck2,
                        },
            ],
        };
exports.neck4 = { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
            SHAPE: 0,
            INDEPENDENT: true,
            HAS_NO_RECOIL: true,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     20,      0,      0,     120, 1], 
                    TYPE: exports.neck3,
                        },
            ],
        };
exports.hydrabass = { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
            SHAPE: 0,
            INDEPENDENT: true,
            HAS_NO_RECOIL: true,
                    FACING_TYPE: 'autospin',
    CONTROLLERS: ['alwaysFire'],
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     20,      0,      0,     180, 1], 
                    TYPE: exports.neck4,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     20,      0,      60,     180, 1], 
                    TYPE: exports.neck4,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     20,      0,      120,     180, 1], 
                    TYPE: exports.neck4,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     20,      0,      180,     180, 1], 
                    TYPE: exports.neck4,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     20,      0,      240,     180, 1], 
                    TYPE: exports.neck4,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     20,      0,      300,     180, 1], 
                    TYPE: exports.neck4,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  50,     0,      0,      0,     180, 1], 
                    TYPE: exports.hexagon2,
                        },
            ],
        };
exports.hydra = {
                PARENT: [exports.genericTank],
                LABEL: 'Hydra',
                                FACING_TYPE: 'autospin',
    CONTROLLERS: ['fastspin', 'alwaysFire'],
                DANGER: 7,
              HAS_NO_RECOIL: true,
              TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  4,     0,      0,      0,     360, 1], 
                    TYPE: exports.hydrabass,
                        },
            ],
            };
exports.flail = {
                PARENT: [exports.genericTank],
                LABEL: 'Flail',
              CONTROLLERS: ['alwaysFire'],
                DANGER: 7,
              HAS_NO_RECOIL: true,
              TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  4,     12,      0,      0,     360, 1], 
                    TYPE: exports.chain2,
                        },
            ],
            };
exports.biflail = {
                PARENT: [exports.genericTank],
                LABEL: 'Flail',
                DANGER: 7,
                            HAS_NO_RECOIL: true,
              INDEPENDENT: true,
    FACING_TYPE: 'autospin',
    CONTROLLERS: ['fastspin', 'alwaysFire'],
              AUTOFIRE: true,
              TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  4,     12,      0,      0,     360, 1], 
                    TYPE: exports.chain2,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  4,     12,      0,      180,     360, 1], 
                    TYPE: exports.chain2,
                        },
            ],
            };

exports.chain3= { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  SHAPE: 0,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     -55,      0,      180,     360, 1], 
                    TYPE: exports.wowzer,
                        },
            ],
        };
exports.chain4= { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  SHAPE: 0,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     25,      0,      0,     360, 1], 
                    TYPE: exports.chain3,
                        },
            ],
        };
exports.chain5= { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
    INDEPENDENT: true,
  SHAPE: 0,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     25,      0,      0,     360, 1], 
                    TYPE: exports.chain4,
                        },
            ],
        };
exports.trichain= { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  SHAPE: 0,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  12,     12,      0,      -45,     360, 1], 
                    TYPE: exports.chain5,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  12,     12,      0,      45,     360, 1], 
                    TYPE: exports.chain5,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  12,     12,      0,      0,     360, 1], 
                    TYPE: exports.chain5,
                        },
            ],
        };
exports.MightBeAnAx = {
                PARENT: [exports.genericTank],
                LABEL: 'Sword',
              CONTROLLERS: ['alwaysFire'],
                DANGER: 7,
              HAS_NO_RECOIL: true,
              TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     22,      5,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE    X       Y     ANGLE    ARC */
                POSITION: [  5,     22,      -5,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     24,      5,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     24,      -5,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },
            ],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,     9,      2,      0,      -25,      90,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,     9,      2,      0,      25,      270,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  28,     2,      1,      4,      0,      0,      0,   ], 
                         },
                ],
            };
exports.triflail = {
                PARENT: [exports.genericTank],
                LABEL: 'Tri-Flail',
              CONTROLLERS: ['alwaysFire'],
                DANGER: 7,
              HAS_NO_RECOIL: true,
              TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  4,     12,      0,      0,     360, 1], 
                    TYPE: exports.chain5,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  4,     12,      0,      35,     360, 1], 
                    TYPE: exports.chain5,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  4,     12,      0,      -35,     360, 1], 
                    TYPE: exports.chain5,
                        },
            ],
            };
            exports.OHBOY = {
                PARENT: [exports.genericTank],
                LABEL: 'Lance',
              HAS_NO_RECOIL: true,
              INDEPENDENT: false,
    FACING_TYPE: 'autospin',
    CONTROLLERS: ['fastspin'],
              AUTOFIRE: true,
              TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     12,      0,      0,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     12,      0,      90,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     12,      0,      180,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     12,      0,      270,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     12,      0,      45,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     12,      0,      135,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     12,      0,      225,     360, 0], 
                    TYPE: exports.wowzy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     12,      0,      315,     360, 0], 
                    TYPE: exports.wowzy,
                        },
            ],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      0,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      90,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      180,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      270,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      45,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      135,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      225,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      315,      0,   ], 
                         },
                ],
            };
            exports.oHbOy = {
                PARENT: [exports.genericTank],
                LABEL: 'Lance',
              HAS_NO_RECOIL: true,
              INDEPENDENT: false,
    FACING_TYPE: 'autospin',
    CONTROLLERS: ['spin'],
              AUTOFIRE: true,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      0,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      90,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      180,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      270,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      45,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      135,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      225,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      315,      0,   ], 
                         },
                ],
            };
            exports.ohboy = {
                PARENT: [exports.genericTank],
                LABEL: 'Lance',
              HAS_NO_RECOIL: true,
              INDEPENDENT: false,
    FACING_TYPE: 'autospin',
    CONTROLLERS: ['reversespin'],
              AUTOFIRE: true,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      0,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      90,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      180,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      270,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      45,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      135,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      225,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     18,      0.01,      4,      0,      315,      0,   ], 
                         },
                ],
            };
exports.unsafe= { 
            PARENT: [exports.genericTank],
            LABEL: 'idk',
            DANGER: 6,
  SHAPE: 4,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     25,      0,      0,     360, 1], 
                    TYPE: exports.OHBOY,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     25,      0,      0,     360, 1], 
                    TYPE: exports.oHbOy,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  20,     25,      0,      0,     360, 1], 
                    TYPE: exports.ohboy,
                        },
            ],
        };
exports.buzzsaw = {
                PARENT: [exports.genericTank],
                LABEL: 'Buzzsaw',
              CONTROLLERS: ['alwaysFire'],
                DANGER: 7,
              HAS_NO_RECOIL: true,
              TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  8,     12,      0,      0,     360, 0], 
                    TYPE: exports.unsafe,
                        },
            ],
            };
exports.healSign = {
  PARENT: [exports.genericTank],
  COLOR: 12,
  LABEL: "",
  SHAPE: [
    [0.2, -0.8],
    [0.2, -0.196],
    [0.8, -0.196],
    [0.8, 0.2],
    [0.204, 0.2],
    [0.2, 0.8],
    [-0.2, 0.8],
    [-0.2, 0.2],
    [-0.8, 0.2],
    [-0.807, -0.2],
    [-0.2, -0.2],
    [-0.2, -0.8]
  ],
  BODY: {
    FOV: 3,
    CONTROLLERS: [
      "canRepel",
      "onlyAcceptInArc",
      "mapAltToFire",
      "nearestDifferentMaster"
    ]
  }
};
exports.healSign2 = {
  PARENT: [exports.genericTank],
  COLOR: 12,
  LABEL: "",
  CONTROLLERS: ['dontTurn'],
  SHAPE: [
    [0.2, -0.8],
    [0.2, -0.196],
    [0.8, -0.196],
    [0.8, 0.2],
    [0.204, 0.2],
    [0.2, 0.8],
    [-0.2, 0.8],
    [-0.2, 0.2],
    [-0.8, 0.2],
    [-0.807, -0.2],
    [-0.2, -0.2],
    [-0.2, -0.8]
  ],
  BODY: {
    FOV: 3,
  }
};
            exports.sanc = {
                PARENT: [exports.genericTank],
                DANGER: 7,
                CONTROLLERS: ['reverseceles', 'alwaysFire'],
                LABEL: 'Machine',
                SKILL: [9,9,9,9,9,9,9,9,9,9],
                BODY: {
                FACING_TYPE: "autospin",
                },
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  16,     1,      0,      0,      0, 0], 
                        TYPE: exports.SusGun,
                            }, {
                    POSITION: [  16,     1,      0,     120,     0, 0], 
                        TYPE: exports.SusGun
                            }, {
                    POSITION: [  16,     1,      0,     240,     0, 0], 
                        TYPE: exports.SusGun,
                            }]
            };
            exports.heptatrap = (() => {
                let a = 360/7, d = 1/7;
                return {
                    PARENT: [exports.genericTank],
                    LABEL: 'Septa-Trapper',
                    DANGER: 7,
                    BODY: {
                        SPEED: base.SPEED * 0.8,
                    },
                    STAT_NAMES: statnames.trap,
                    HAS_NO_RECOIL: true,
                    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                        POSITION: [  15,     7,      1,      0,      0,      0,      0,   ],
                            }, {
                        POSITION: [   3,     7,     1.7,    15,      0,      0,      0,   ], 
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                                TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                            }, }, {
                        POSITION: [  15,     7,      1,      0,      0,      a,     4*d,  ],
                            }, {
                        POSITION: [   3,     7,     1.7,    15,      0,      a,     4*d,  ], 
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                                TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                            }, }, {
                        POSITION: [  15,     7,      1,      0,      0,     2*a,    1*d,  ],
                            }, {
                        POSITION: [   3,     7,     1.7,    15,      0,     2*a,    1*d,  ], 
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                                TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                            }, }, {
                        POSITION: [  15,     7,      1,      0,      0,     3*a,    5*d,  ],
                            }, {
                        POSITION: [   3,     7,     1.7,    15,      0,     3*a,    5*d,  ], 
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                                TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                            }, }, {
                        POSITION: [  15,     7,      1,      0,      0,     4*a,    2*d,  ],
                            }, {
                        POSITION: [   3,     7,     1.7,    15,      0,     4*a,    2*d,  ], 
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                                TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                            }, }, {
                        POSITION: [  15,     7,      1,      0,      0,     5*a,    6*d,  ],
                            }, {
                        POSITION: [   3,     7,     1.7,    15,      0,     5*a,    6*d,  ], 
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                                TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                            }, }, {
                        POSITION: [  15,     7,      1,      0,      0,     6*a,    3*d,  ],
                            }, {
                        POSITION: [   3,     7,     1.7,    15,      0,     6*a,    3*d,  ], 
                            PROPERTIES: {
                                SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                                TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                            }, },
                    ],
                };
            })();
exports.sanctuary = {
        PARENT: [exports.genericTank],
        LABEL: 'Sanctuary',
        FACING_TYPE:'autospin',
  CONTROLLERS: ["doNothing"],
  DAMAGE_CLASS: 0,
  DANGER: 100,
  ACCEPTS_SCORE: false,
  VARIES_IN_SIZE: false,
  HAS_NO_RECOIL: true,
  CAN_BE_ON_LEADERBOARD: false, 
  SKILL: skillSet({ 
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 0,
    str: 1,
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 4231,
    DAMAGE: 13,
    PENETRATION: 0.25,
    SHIELD: 20,

    FOV: 1,
    PUSHABILITY: 0,
    HETERO: 0
  },
  SIZE: 45,
        GUNS: [],
    TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [23.6, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody  
    }, {
    POSITION: [  8.5,     0,      0,      18,    360,  1],
      TYPE: [exports.sanc, { INDEPENDENT: true, }]
        }, {
   POSITION: [ 9.2,     0,      0,     0,     360, 1],
    TYPE: exports.healSign2,
    }],
};
for (let i = 0; i < 8; i++) {
  exports.sanctuary.GUNS.push({
          POSITION: [  6.5,      4,      1,     5,     0,      (360 / 8) * i,      0,   ],
          }, {
          POSITION: [   1,     4,     1.5,    12,    0,       (360 / 8) * i,      0,   ], 
           PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.dronesanctuary,g.pound]),
             TYPE: exports.sanctuarytraps, STAT_CALCULATOR: gunCalcNames.trap,
              AUTOFIRE:true,
          }, },
     );
};
exports.neutraldom = {
  PARENT: [exports.genericTank],
  LABEL: 'Dominator',
  DAMAGE_CLASS: 0,
  DANGER: 100,
  ACCEPTS_SCORE: false,
  VARIES_IN_SIZE: false,
  CAN_BE_ON_LEADERBOARD: false, 
  SKILL: skillSet({ 
    rld: 1,
    dam: 1,
    pen: 1,
    spd: 0,
    str: 1,
  }),
  BODY: {
    // def
    SPEED: 0,
    HEALTH: 4231,
    DAMAGE: 13,
    PENETRATION: 0.25,
    SHIELD: 20,

    FOV: 1,
    PUSHABILITY: 0,
    HETERO: 0
  },
  SIZE: 45,
  //CONTROLLERS: ['nearestDifferentMaster'],

  TURRETS: [
    {
      /*  SIZE     X       Y     ANGLE    ARC */
      POSITION: [23.6, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody  
    },
  ],
                };
    exports.heal = {
        PARENT: [exports.genericTank],
        LABEL: 'Healer',
        BODY: {
            ACCELERATION: base.ACCEL * 0.7, 
            FOV: base.FOV * 1.2,
        },
        HAS_NO_RECOIL: true,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
           POSITION: [   4,     7,    1.4,     20.5,      0,      0,      0,   ], 
            }, {
            POSITION: [   13,     10,    0,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic]),
                    TYPE: exports.hpbullet,
                }, }],
      TURRETS:[{
      POSITION: [20, 0, 0, 0, 360, 1], 
     TYPE: exports.healSign,       
                          
      },
     ]
    };
             exports.hexatrap = makeAuto({
                PARENT: [exports.genericTank],
                LABEL: 'Hexa-Trapper',
                DANGER: 7,
                BODY: {
                    SPEED: base.SPEED * 0.8,
                },
                STAT_NAMES: statnames.trap,
                HAS_NO_RECOIL: true,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  15,     7,      1,      0,      0,      0,      0,   ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {
                    POSITION: [  15,     7,      1,      0,      0,     60,     0.5,  ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,     60,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {
                    POSITION: [  15,     7,      1,      0,      0,     120,     0,   ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,     120,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {
                    POSITION: [  15,     7,      1,      0,      0,     180,    0.5,  ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,     180,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {
                    POSITION: [  15,     7,      1,      0,      0,     240,     0,   ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,     240,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, }, {
                    POSITION: [  15,     7,      1,      0,      0,     300,    0.5,  ],
                        }, {
                    POSITION: [   3,     7,     1.7,    15,      0,     300,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),           

                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, },
                ],
            }, 'Hexa-Trapper');

exports.trapperceles = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Celestial Turret",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.23,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8.9, 11.4, 1, 7.7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniperXX]),
        TYPE: exports.trapCeles,
        STAT_CALCULATOR: gunCalcNames.trap,
        WAIT_TO_CYCLE: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [9.5, 15, 1, 7.2, 0, 0, 0],
    },
    {
      POSITION: [4, 16, 1.6, 17.7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniperXX]),
        TYPE: exports.bulletghost,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true,
      },
    }
  ]
};
exports.ragnarok_is_special = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Celestial Turret",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.23,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8.8, 11.4, 1, 7.7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniperXX]),
        TYPE: exports.trapCeles,
        STAT_CALCULATOR: gunCalcNames.trap,
        WAIT_TO_CYCLE: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [9.3, 15, 1, 7.2, 0, 0, 0],
    },
    {
      POSITION: [4, 16, 1.6, 17.4, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniperXX]),
        TYPE: exports.bulletghost,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true,
      },
    }
  ]
};
exports.trapper = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Celestial Turret",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.23,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [8.6, 11.4, 1, 7.7, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniperXX]),
        TYPE: exports.trapCeles,
        STAT_CALCULATOR: gunCalcNames.trap,
        WAIT_TO_CYCLE: true,
        AUTOFIRE: true,
      },
    },
    {
      POSITION: [9.1, 13, 1, 7.2, 0, 0, 0],
    },
    {
      POSITION: [4, 14, 1.6, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniperXX]),
        TYPE: exports.bulletghost,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true,
      },
    }
  ]
};
        exports.tri = {
            PARENT: [exports.genericTank],
            LABEL: 'Tri-Angle',
            BODY: {
                HEALTH: base.HEALTH * 0.8,
                SHIELD: base.SHIELD * 0.8,
                DENSITY: base.DENSITY * 0.6,
            },
            DANGER: 6,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
                        TYPE: exports.bullet,
                        LABEL: 'Front',
                    }, }, {   
                POSITION: [  16,     8,      1,      0,      0,     150,    0.1,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                        TYPE: exports.bullet,
                        LABEL: gunCalcNames.thruster,
                    }, }, {   
                POSITION: [  16,     8,      1,      0,      0,     210,    0.1,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                        TYPE: exports.bullet,
                        LABEL: gunCalcNames.thruster,
                    }, },
            ],
        }; 
        exports.trimother = {
            PARENT: [exports.genericTank],
            LABEL: 'Tri-Mother',
          MAX_CHILDREN: 4,
          NO_RECOIL: true,
          //put it underneath the cannon definition in properties
            BODY: {
                HEALTH: base.HEALTH * 0.8,
                SHIELD: base.SHIELD * 0.8,
                DENSITY: base.DENSITY * 0.6,
            },
            DANGER: 6,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
                        TYPE: exports.bulletghost,
                        LABEL: 'Front',
                    }, }, {   
                POSITION: [  16,     8,      1.4,      0,      0,     150,    0.1,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                      MAX_CHILDREN: 3,
                        TYPE: exports.minitri,
                        LABEL: gunCalcNames.thruster,
                      AUTOFIRE: true,
                    }, }, {   
                POSITION: [  16,     8,      1.4,      0,      0,     210,    0.1,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                      MAX_CHILDREN: 3,
                        TYPE: exports.minitri,
                        LABEL: gunCalcNames.thruster,
                      AUTOFIRE: true,
                    }, },
            ],
        }; 
        exports.GHOST = { //The true ghost lel [] working on ALPHA: 1, set command
            PARENT: [exports.genericTank],
            LABEL: 'Phantom',
          INVISIBLE: [0.01, 0.05],
          NO_RECOIL: false,
            BODY: {
                HEALTH: base.HEALTH * 0.8,
                SHIELD: base.SHIELD * 0.8,
                DENSITY: base.DENSITY * 0.6,
            },
            DANGER: 6,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.tonsmorrecoil]),
                        TYPE: exports.bullet,
                        LABEL: 'Front',
                    }, }, {
                POSITION: [  16,     8,      1,      0,      0,     150,    0.1,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                        TYPE: exports.bullet,
                        LABEL: gunCalcNames.thruster,
                    }, }, {   
                POSITION: [  16,     8,      1,      0,      0,     210,    0.1,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                        TYPE: exports.bullet,
                        LABEL: gunCalcNames.thruster,
                    }, },{   
                POSITION: [  16,     8,      1,      0,      0,     180,    0.1,  ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thrusterx]),
                        TYPE: exports.bulletghost,
                        LABEL: gunCalcNames.thruster,
                    }, },
            ],
        }; 
            exports.booster = {
                PARENT: [exports.genericTank],
                LABEL: 'Booster',
                BODY: {
                    HEALTH: base.HEALTH * 0.6,
                    SHIELD: base.SHIELD * 0.6,
                    DENSITY: base.DENSITY * 0.2,
                },
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,     -1,     140,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,      1,     220,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     150,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     210,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
            exports.speedster = {
                PARENT: [exports.genericTank],
                LABEL: 'Speedster',
              NO_RECOIL: false,
                BODY: {
                    HEALTH: base.HEALTH * 0.6,
                    SHIELD: base.SHIELD * 0.6,
                    DENSITY: base.DENSITY * 0.2,
                },
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  14,     4,      0.6,      0,      -5,      5,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.lowpower, g.lowpower, g.lowpower, g.morespeed]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, },{
                    POSITION: [  14,     4,      0.6,      0,      5,      355,      0.4,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.lowpower, g.lowpower, g.lowpower, g.morespeed]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, },{
                          POSITION: [ 13.5,  10,     2,      5,      0,      180,      0.1,   ],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
                        TYPE: exports.bullet,
                    }, },{
                    POSITION: [  13,     8,      1,      0,     -1,     140,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,      1,     220,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     150,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     210,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
exports.boostspike = {
                PARENT: [exports.genericTank],
                LABEL: 'Booster-Spike',
                 BODY: {
                    SPEED: base.speed,
                    DAMAGE: base.DAMAGE * 1.1,
                    FOV: base.FOV * 1.05,
                    DENSITY: base.DENSITY * 0.2,
                },
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  15,     10,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  13,     10,      1,      0,     -1,     140,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  13,     10,      1,      0,      1,     220,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     10,      1,      0,      0,     150,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     10,      1,      0,      0,     210,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
  SKILL_CAP: [smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl, smshskl,],
                STAT_NAMES: statnames.smasher,
                TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                    POSITION: [ 20.5,    0,      0,      0,     360,  0,], 
                    TYPE: exports.spikeBody,
                    }, { 
                    POSITION: [ 20.5,    0,      0,     120,    360,  0,], 
                    TYPE: exports.spikeBody,
                    }, {
                    POSITION: [ 20.5,    0,      0,     240,    360,  0,], 
                    TYPE: exports.spikeBody,
                }],
            };
exports.autospike = makeAuto(exports.spike, "why is this a thing?");
exports.shootstar = {
                PARENT: [exports.genericTank],
                LABEL: 'Shooting-Star',
                BODY: {
                    HEALTH: base.HEALTH * 0.6,
                    SHIELD: base.SHIELD * 0.6,
                    DENSITY: base.DENSITY * 0.2,
                },
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.BLM]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  13,     10,      1,      0,     -1,     140,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thrusterx, g.halfrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  13,     10,      1,      0,      1,     220,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thrusterx, g.halfrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     10,      1,      0,      0,     150,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thrusterx]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     10,      1,      0,      0,     210,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thrusterx]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
            exports.fighter = {
                PARENT: [exports.genericTank],
                LABEL: 'Fighter',
                BODY: {
                    DENSITY: base.DENSITY * 0.6,
                },
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,     -1,      90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Side',
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      1,     -90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Side',
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     150,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     210,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
exports.Stealthjet = {
                PARENT: [exports.genericTank],
                LABEL: 'Stealth-Jet',
                BODY: {
                    DENSITY: base.DENSITY * 0.6,
                },
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  16,     8,      1.4,      0,     -1,      90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.homingMissile,
                          MAX_CHILDREN: 4,
                          AUTOFIRE: true,
                            LABEL: 'Side',
                        }, }, {   
                    POSITION: [  16,     8,      1.4,      0,      1,     -90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.homingMissile,
                          MAX_CHILDREN: 4,
                          AUTOFIRE: true,
                            LABEL: 'Side',
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     150,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     210,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                            
                        }, },
                ],
            };
exports.nolivesmatter = {
                PARENT: [exports.genericTank],
                LABEL: 'Canoneer',
                BODY: {
                    DENSITY: base.DENSITY * 0.6,
                },
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                  POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                            ALT_FIRE: true,
                        }, }, { 
                   POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [  16,     8,      1,      0,      0,     150,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     210,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
exports.nolivesmatterbotedition = {
                PARENT: [exports.genericTank],
                LABEL: 'Canoneer',
                BODY: {
                    DENSITY: base.DENSITY * 0.6,
                },
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                  POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, { 
                   POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, {
                    POSITION: [  18,     8,      1.4,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                        }, }, {
                    POSITION: [  16,     8,      1,      0,      0,     150,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     210,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
            exports.brutalizer = {
                PARENT: [exports.genericTank],
                LABEL: 'Surfer',
                BODY: {
                    DENSITY: base.DENSITY * 0.6,
                },
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [   7,    7.5,    0.6,     7,     -1,      90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm]),
                            TYPE: [exports.autoswarm],
                            STAT_CALCULATOR: gunCalcNames.swarm,         
                        }, }, {   
                    POSITION: [   7,    7.5,    0.6,     7,      1,     -90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm]),
                            TYPE: [exports.autoswarm],
                            STAT_CALCULATOR: gunCalcNames.swarm,     
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     150,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     210,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
            exports.bomber = {
                PARENT: [exports.genericTank],
                LABEL: 'Bomber',
                BODY: {
                    DENSITY: base.DENSITY * 0.6,
                },
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  20,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     130,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
                            TYPE: exports.bullet,
                            LABEL: 'Wing',
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     230,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri]),
                            TYPE: exports.bullet,
                            LABEL: 'Wing',
                        }, }, {
                    POSITION: [  14,     8,      1,      0,      0,     180,     0,   ],
                        }, {
                    POSITION: [   4,     8,     1.5,    14,      0,     180,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.morerecoil]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, },
                ],
            };    
            exports.autotri = makeAuto(exports.tri, 'Auto Tri-Angle');   
            exports.autotri.BODY = {
                SPEED: base.SPEED,
            };   
            exports.falcon = {
                PARENT: [exports.genericTank],
                LABEL: 'Falcon',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.8,
                    FOV: base.FOV * 1.2,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  27,    8.5,     1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass, g.lessreload]),
                            TYPE: exports.bullet,
                            LABEL: 'Assassin',
                            ALT_FIRE: true,
                        }, }, {
                    POSITION: [   5,    8.5,   -1.6,     8,      0,      0,      0,   ], 
                        }, {   
                    POSITION: [  16,     8,      1,      0,      0,     150,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     210,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  18,     8,      1,      0,      0,     180,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
exports.seekbullet = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 1000000,
        RANGE: 1000000,
        DENSITY: 1.25,
        HEALTH: 0.33,
        DAMAGE: 0,
        PUSHABILITY: 0.3,
    },
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
};
exports.tellwhere = {
    PARENT: [exports.genericTank],
    LABEL: '',
    INDEPENDENT: true,
    BODY: {
        FOV: 3,
    },
  HAS_NO_RECOIL: true,
    CONTROLLERS: ['nearestDifferentMaster'], 
    COLOR: 16,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  40,    20,      0.01,      0,      0,      0,      0,   ], 
      PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
            TYPE: exports.seekbullet,
                        }, }
    ],
};
exports.seeker = {
    LABEL: 'Pillbox',
    PARENT: [exports.trap],
    SHAPE: -3,
    MOTION_TYPE: 'glide',    
    CONTROLLERS: ['nearestDifferentMaster', 'alwaysFire'],
    INDEPENDENT: true,
    FACING_TYPE: "suspin",
    BODY: {
        SPEED: 1.2,
        DENSITY: 2,
    },
    DIE_AT_RANGE: true, 
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  8,     0,      0,      0,     360,  1], 
            TYPE: exports.tellwhere,
        },
    ],
  GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     10,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx, g.norecoil, g.lowpower]),
            TYPE: exports.swarm,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     10,      1,      0,      0,      120,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx, g.norecoil, g.lowpower]),
            TYPE: exports.swarm,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     10,      1,      0,      0,      240,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.morereloadx, g.norecoil, g.lowpower]),
            TYPE: exports.swarm,
                        }, },
                ],
};
exports.KFCminimeal = { 
            PARENT: [exports.drone],
            LABEL: 'Rat',
            DANGER: 6,
  SHAPE: 0,
    MOTION_TYPE: "chase",
  FACING_TYPE: "smoothToTarget",
      INDEPENDENT: true,
  FOV: 1.5,
  BODY: {
        PENETRATION: 1,
        SPEED: 3,
        RANGE: 300,
        DENSITY: 1.25,
        HEALTH: 0.5 * wepHealthFactor,
        DAMAGE: 0.5 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
  CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  7,     0,      0,      0,     360, 1], 
                    TYPE: exports.tellwhere,
                        },
            ],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  9,     1,      0.1,      0,      -16,      95,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  9,     1,      0.1,      3,      -12,      95,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  9,     1,      0.1,      0,      16,      -95,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  9,     1,      0.1,      3,      12,      -95,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     20,      0.1,      0,      0,      0,      0,   ], 
                         },
                   { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  1,     8,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.norecoil, g.lowpower]),
            TYPE: exports.bullet,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  16,     6,      1,      0,      -3,      140,      0.6,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tonsmorrecoil]),
            TYPE: exports.bulletghost,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  16,     6,      1,      0,      3,      220,      0.6,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tonsmorrecoil]),
            TYPE: exports.bulletghost,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     6,      1,      0,      0,      150,      0.1,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tonsmorrecoil]),
            TYPE: exports.bulletghost,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     6,      1,      0,      0,      210,      0.1,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.tonsmorrecoil]),
            TYPE: exports.bulletghost,
                        }, },
                ],
        };
exports.KFC = { 
            PARENT: [exports.genericTank],
            LABEL: 'Rat',
            DANGER: 6,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  7,     0,      0,      0,     360, 1], 
                    TYPE: exports.tellwhere,
                        },
            ],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  9,     1,      0.1,      0,      -16,      95,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  9,     1,      0.1,      3,      -12,      95,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  9,     1,      0.1,      0,      16,      -95,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  9,     1,      0.1,      3,      12,      -95,      0,   ], 
                         },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     20,      0.1,      0,      0,      0,      0,   ], 
                         },
                   { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  1,     8,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.norecoil, g.lowpower]),
            TYPE: exports.bullet,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  16,     6,      1,      0,      -3,      140,      0.6,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bulletghost,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  16,     6,      1,      0,      3,      220,      0.6,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bulletghost,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     6,      1,      0,      0,      150,      0.1,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bulletghost,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     6,      1,      0,      0,      210,      0.1,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
            TYPE: exports.bulletghost,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  1,     8,      1,      0,      0,      90,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.norecoil, g.lowpower]),
            TYPE: exports.KFCminimeal,
          AUTOFIRE: true,
          MAX_CHILDREN: 3,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  1,     8,      1,      0,      0,      180,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.norecoil, g.lowpower]),
            TYPE: exports.KFCminimeal,
          AUTOFIRE: true,
          MAX_CHILDREN: 3,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  1,     8,      1,      0,      0,      270,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.norecoil, g.lowpower]),
            TYPE: exports.KFCminimeal,
          AUTOFIRE: true,
          MAX_CHILDREN: 3,
                        }, },
                ],
        };
exports.compass = { 
            PARENT: [exports.genericTank],
            LABEL: 'Compass',
            DANGER: 6,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  7,     0,      0,      0,     360, 1], 
                    TYPE: exports.tellwhere,
                        },
            ],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     10,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.norecoil]),
            TYPE: exports.bullet,
                        }, },
                ],
        };
exports.radar = { 
            PARENT: [exports.genericTank],
            LABEL: 'Radar',
            DANGER: 6,
            BODY: {
          ACCELERATION: base.ACCEL * 0.7, 
          FOV: base.FOV * 1.2,
            },
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  7,     0,      0,      0,     360, 1], 
                    TYPE: exports.tellwhere,
                        },
            ],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  24,     8.5,      1,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.norecoil]),
            TYPE: exports.bullet,
                        }, },
                ],
        };
exports.gps = { 
            PARENT: [exports.genericTank],
            LABEL: 'GPS',
            DANGER: 6,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     5,      0,      0,     75, 1], 
                    TYPE: exports.tellwhere,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     5,      0,      72,     75, 1], 
                    TYPE: exports.tellwhere,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     5,      0,      144,     75, 1], 
                    TYPE: exports.tellwhere,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     5,      0,      216,     75, 1], 
                    TYPE: exports.tellwhere,
                        },{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     5,      0,      288,     75, 1], 
                    TYPE: exports.tellwhere,
                        },
            ],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     4,      1,      0,      -2.5,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.norecoil]),
            TYPE: exports.bullet,
                        }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  18,     4,      1,      0,      2.5,      0,      0.5,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.norecoil]),
            TYPE: exports.bullet,
                        }, },
                ],
        };
exports.locator = { 
            PARENT: [exports.genericTank],
            LABEL: 'Locator',
            DANGER: 6,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  7,     0,      0,      0,     360, 1], 
                    TYPE: exports.tellwhere,
                        },
            ],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  14,     6,      1.2,      0,      0,      45,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.nospeed, g.lowrange]),
            TYPE: exports.seeker,
          MAX_CHILDREN: 4,
                    }, },{
        POSITION: [  14,     6,      1.2,      0,      0,      -45,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.nospeed, g.lowrange]),
            TYPE: exports.seeker,
          MAX_CHILDREN: 4,
                    }, },{ /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  14,     6,      1.2,      0,      0,      135,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.nospeed, g.lowrange]),
            TYPE: exports.seeker,
          MAX_CHILDREN: 4,
                    }, },{
        POSITION: [  14,     6,      1.2,      0,      0,      -135,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.nospeed, g.lowrange]),
            TYPE: exports.seeker,
          MAX_CHILDREN: 4,
                    }, },{
        POSITION: [  18,     8,      0.8,      0,      0,      0,      0,   ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.norecoil]),
            TYPE: exports.bullet,
                    }, },
                ],
        };
        exports.auto3 = { 
            PARENT: [exports.genericTank],
            LABEL: 'Auto-3',
            DANGER: 6,
            FACING_TYPE: 'autospin',
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  11,     8,      0,      0,     190, 0], 
                    TYPE: exports.auto3gun,
                        }, {
                POSITION: [  11,     8,      0,     120,    190, 0], 
                    TYPE: exports.auto3gun,
                        }, {
                POSITION: [  11,     8,      0,     240,    190, 0], 
                    TYPE: exports.auto3gun,
                        },
            ],
        };
            exports.auto5 = {
                PARENT: [exports.genericTank],
                LABEL: 'Auto-5',
                DANGER: 7,
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  11,     8,      0,      0,     190, 0], 
                        TYPE: exports.auto5gun,
                            }, {
                    POSITION: [  11,     8,      0,      72,    190, 0], 
                        TYPE: exports.auto5gun,
                            }, {
                    POSITION: [  11,     8,      0,     144,    190, 0], 
                        TYPE: exports.auto5gun,
                            }, {
                    POSITION: [  11,     8,      0,     216,    190, 0], 
                        TYPE: exports.auto5gun,
                            }, {
                    POSITION: [  11,     8,      0,     288,    190, 0], 
                        TYPE: exports.auto5gun,
                            },
                ],
            };
exports.destroy5 = {
                PARENT: [exports.genericTank],
                LABEL: 'Star-Burst',
                DANGER: 7,
                FACING_TYPE: 'autospin',
                TURRETS: [{ //  SIZE     X       Y     ANGLE    ARC
                    POSITION: [  11,     8,      0,      0,     190, 0], 
                        TYPE: exports.destroy,
                            }, {
                    POSITION: [  11,     8,      0,      72,    190, 0], 
                        TYPE: exports.destroy,
                            }, {
                    POSITION: [  11,     8,      0,     144,    190, 0], 
                        TYPE: exports.destroy,
                            }, {
                    POSITION: [  11,     8,      0,     216,    190, 0], 
                        TYPE: exports.destroy,
                            }, {
                    POSITION: [  11,     8,      0,     288,    190, 0], 
                        TYPE: exports.destroy,
                            },
                ],
            };
exports.stream5 = {
                PARENT: [exports.genericTank],
                LABEL: 'stream-5',
                DANGER: 7,
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  13,     8,      0,      0,     190, 0], 
                        TYPE: exports.gay,
                            }, {
                    POSITION: [  13,     8,      0,      72,    190, 0], 
                        TYPE: exports.gay,
                            }, {
                    POSITION: [  13,     8,      0,     144,    190, 0], 
                        TYPE: exports.gay,
                            }, {
                    POSITION: [  13,     8,      0,     216,    190, 0], 
                        TYPE: exports.gay,
                            }, {
                    POSITION: [  13,     8,      0,     288,    190, 0], 
                        TYPE: exports.gay,
                            },
                ],
            };
            exports.heavy3 = {
                BODY: {
                    SPEED: base.SPEED * 0.95,
                },
                PARENT: [exports.genericTank],
                LABEL: 'Mega-3',
                DANGER: 7,
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  14,     8,      0,      0,     190, 0], 
                        TYPE: exports.heavy3gun,
                            }, {
                    POSITION: [  14,     8,      0,     120,    190, 0], 
                        TYPE: exports.heavy3gun,
                            }, {
                    POSITION: [  14,     8,      0,     240,    190, 0], 
                        TYPE: exports.heavy3gun,
                            },
                ],
            };
            exports.tritrap = {
                LABEL: '',
                BODY: {
                    SPEED: base.SPEED * 1.1,
                },
                PARENT: [exports.genericTank],
                DANGER: 6,
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  12,     8,      0,      0,     190, 0], 
                        TYPE: exports.tritrapgun,
                            }, {
                    POSITION: [  12,     8,      0,     120,    190, 0], 
                        TYPE: exports.tritrapgun,
                            }, {
                    POSITION: [  12,     8,      0,     240,    190, 0], 
                        TYPE: exports.tritrapgun,
                            },
                ],
            };
            exports.sniper3 = { 
                PARENT: [exports.genericTank],
                DANGER: 7,
                LABEL: 'Sniper-3',
                BODY: {
                    ACCELERATION: base.ACCEL * 0.6,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.25,
                },
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  13,     8,      0,      0,     170, 0], 
                        TYPE: exports.sniper3gun,
                            }, {
                    POSITION: [  13,     8,      0,     120,    170, 0], 
                        TYPE: exports.sniper3gun,
                            }, {
                    POSITION: [  13,     8,      0,     240,    170, 0], 
                        TYPE: exports.sniper3gun,
                            },
                ],
            };
            exports.auto4 = { 
                PARENT: [exports.genericTank],
                DANGER: 5,
                LABEL: 'Auto-4',
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  13,     6,      0,      45,    160, 0], 
                        TYPE: exports.auto4gun,
                            }, {
                    POSITION: [  13,     6,      0,     135,    160, 0], 
                        TYPE: exports.auto4gun,
                            }, {
                    POSITION: [  13,     6,      0,     225,    160, 0],
                        TYPE: exports.auto4gun,
                            }, {
                    POSITION: [  13,     6,      0,     315,    160, 0],
                        TYPE: exports.auto4gun,
                            },
                ],
            };
exports.largeboss = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 123,
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
      CONTROLLERS: [
      'nearestDifferentMaster', 'mapAltToFire', 'orbitsupermassive',
      ],
    AI: { STRAFE: false, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'never',
    BROADCAST_MESSAGE: 'A visitor has left!',
};
exports.largerboss = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 123,
    SKILL: skillSet({
        rld: 0.7,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
    LEVEL: 45,
      CONTROLLERS: [
      'nearestDifferentMaster', 'mapAltToFire', 'orbitveryverylarge',
      ],
    AI: { STRAFE: false, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'never',
    BROADCAST_MESSAGE: 'A visitor has left!',
};
exports.diepbossram = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 123,
    SKILL: skillSet({
        rld: 1,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 1,        
    }),
      BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.35,
            HEALTH: 350,
            SHIELD: base.SHIELD * 1.25,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 2.5,
        },
    LEVEL: 45,
      CONTROLLERS: [
      'nearestDifferentMaster', 'mapTargetToGoal'
      ],
    AI: { STRAFE: false, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'never',
    BROADCAST_MESSAGE: 'A visitor has left!',
};
exports.diepbossdroner = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 123,
    SKILL: skillSet({
        rld: 0.8,
        dam: 0.5, 
        pen: 0.8,
        str: 0.8,
        spd: 0.2,
        atk: 0.3,
        hlt: 1,
        shi: 0.7,
        rgn: 0.7,
        mob: 0,        
    }),
      BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.25,
            HEALTH: 350,
            SHIELD: base.SHIELD * 1.25,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 2.5,
        },
    LEVEL: 45,
      CONTROLLERS: [
      'nearestDifferentMaster', 'mapAltToFire', 'minion'
      ],
    AI: { STRAFE: false, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'never',
    BROADCAST_MESSAGE: 'A visitor has left!',
};
exports.diepbossthingg = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 123,
    SKILL: skillSet({
        rld: 1,
        dam: 1, 
        pen: 1,
        str: 1,
        spd: 1,
        atk: 1,
        hlt: 1,
        shi: 1,
        rgn: 1,
        mob: 0,        
    }),
      BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.25,
            HEALTH: 350,
            SHIELD: base.SHIELD * 1.25,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 2.5,
        },
    LEVEL: 45,
      CONTROLLERS: [
      'nearestDifferentMaster', 'mapAltToFire', 'minion'
      ],
    AI: { STRAFE: false, },
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'never',
    BROADCAST_MESSAGE: 'A visitor has left!',
};

exports.beeboss = {
  PARENT: [exports.miniboss],
  LABEL: "Simpletons Army",
  SIZE: 25,
  GUNS: [{
    POSITION: [7,  7.5, 0.6, 7, 0, 45, 1],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.manybee2, g.battle, g.carrier]),
        TYPE: exports.beebossbee,
      STAT_CALCULATOR: gunCalcNames.swarm,
      MAX_CHILDREN: 7
                        }, }, {
   POSITION: [7,  7.5, 0.6, 7, 0, -45, 1],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.manybee2, g.battle, g.carrier]),
        TYPE: exports.beebossbee,
      STAT_CALCULATOR: gunCalcNames.swarm,
      MAX_CHILDREN: 7
                        }, }, {
    POSITION: [7,  7.5, 0.6, 7, 0, 135, 1],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.manybee2, g.battle, g.carrier]),
        TYPE: exports.beebossbee,
      STAT_CALCULATOR: gunCalcNames.swarm,
      MAX_CHILDREN: 7
                        }, }, {
    POSITION: [7,  7.5, 0.6, 7, 0, -135, 1],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.manybee2, g.battle, g.carrier]),
        TYPE: exports.beebossbee,
      STAT_CALCULATOR: gunCalcNames.swarm,     
      MAX_CHILDREN: 7
                        }, },
  ],
  TURRETS: [{
    POSITION: [  14.5,     0,      0,       0,    360,   1, ],  
    TYPE: [exports.God, {INDEPENDENT: false,}]
  }, {
    POSITION: [  12,     4,      0,       0,    180,   0, ],  
    TYPE: [exports.negro, {INDEPENDENT: false,}]
  }, {
    POSITION: [  12,     4,      0,       0,    180,   0, ],  
    TYPE: [exports.negro, {INDEPENDENT: false,}]
  }, {
    POSITION: [  12,     4,      0,       0,    180,   0, ],  
    TYPE: [exports.negro, {INDEPENDENT: false,}]
  }, {  
    POSITION: [  12,     4,      0,       0,    180,  0, ],  
    TYPE: [exports.negro, {INDEPENDENT: false,}]
  }]
};
//
//
  //
//
  //
//                  CELESTIALS
  //                CODE: Supermassive start
//
  //
//

//
  //
//
exports.sumchip = {
        PARENT: [exports.drone],
        SHAPE: 4,
        NECRO: false,
        HITS_OWN_TYPE: 'hard',
        BODY: {
            FOV: 0.5,
            SPEED: 3.85,
        },
        AI: {
            BLIND: true,
            FARMER: true,
        },
        DRAW_HEALTH: false,
    };
exports.sumchipx = {
        PARENT: [exports.drone],
        SHAPE: 4,
        NECRO: false,
        HITS_OWN_TYPE: 'hard',
        BODY: {
            FOV: 0.85,
            SPEED: 3.53,
        },
        AI: {
            BLIND: true,//should i reset again? yes
            FARMER: true,
        },
        DRAW_HEALTH: false,
        INDEPENDENT: true
    };
exports.Celestialbody3 = {
  LABEL: "",
  CONTROLLERS: ['reverseceles'],
  COLOR: 35,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  SHAPE: 7,
  FOV: 1,
  FACING_TYPE: "autospin",
  MAX_CHILDREN: 35,
  GUNS: [
    {
      //*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY 
      POSITION: [3.6, 6, 1.4, 8, 0, 26, 1],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.basic,
          g.mini,
          g.stream3celes,
          g.fake
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
        
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 77, 1],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.basic,
          g.mini,
          g.stream3celes,
          g.fake
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
        WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
       
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 129, 1],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.basic,
          g.mini,
          g.stream3celes,
          g.fake
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
       WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
       
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 180, 1],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.basic,
          g.mini,
          g.stream3celes,
          g.fake
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
       WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
       
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 231, 1],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.basic,
          g.mini,
          g.stream3celes,
          g.fake
        ]),
         TYPE: exports.bullet,
        AUTOFIRE: true,
       WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
       
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 282, 1],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.basic,
          g.mini,
          g.stream3celes,
          g.fake
        ]),
        TYPE: exports.bullet,
        AUTOFIRE: true,
       WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
       
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 333, 1],
       PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.basic,
          g.mini,
          g.stream3celes,
          g.fake
        ]),
         TYPE: exports.bullet,
        AUTOFIRE: true,
         WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
         
      }
    }, {
    ////////////////////////////////////
      POSITION: [1, 6, 1.4, 8, 0, 26, 1],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.basic,
          g.mini,
          g.stream3celes
        ]),
        TYPE: exports.sumchipx,
        AUTOFIRE: true,
        WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
        
      }
    },
    {
      POSITION: [1, 6, 1.4, 8, 0, 77, 1],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.basic,
          g.mini,
          g.stream3celes
        ]),
        TYPE: exports.sumchipx,
        AUTOFIRE: true,
        WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
       
      }
    },
    {
      POSITION: [1, 6, 1.4, 8, 0, 129, 1],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.basic,
          g.mini,
          g.stream3celes
        ]),
        TYPE: exports.sumchipx,
        AUTOFIRE: true,
       WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
       
      }
    },
    {
      POSITION: [1, 6, 1.4, 8, 0, 180, 1],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.basic,
          g.mini,
          g.stream3celes
        ]),
        TYPE: exports.sumchipx,
        AUTOFIRE: true,
       WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
       
      }
    },
    {
      POSITION: [1, 6, 1.4, 8, 0, 231, 1],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.basic,
          g.mini,
          g.stream3celes
        ]),
         TYPE: exports.sumchipx,
        AUTOFIRE: true,
       WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
       
      }
    },
    {
      POSITION: [1, 6, 1.4, 8, 0, 282, 1],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.basic,
          g.mini,
          g.stream3celes
        ]),
        TYPE: exports.sumchipx,
        AUTOFIRE: true,
       WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
       
      }
    },
    {
      POSITION: [1, 6, 1.4, 8, 0, 333, 1],
       PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.basic,
          g.mini,
          g.stream3celes
        ]),
         TYPE: exports.sumchipx,
        AUTOFIRE: true,
         WAIT_TO_CYCLE: true,
        SYNCS_SKILLS: true,
         
      }
    }
  ]
};
exports.Celestialbody4 = {
    LABEL: '',
    CONTROLLERS: ['spinceles'],
    AUTOSPIN: true,
    COLOR: 35,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
                   TURRETS: [{/*********  SIZE     X       Y     ANGLE    ARC */
                   POSITION: [  10,     7.5,      0,     35,     160,   0, ], 
                    TYPE: [exports.sider],
                    }, {
                POSITION: [  10,     7.5,      0,     110,    160,   0, ],
                    TYPE: [exports.sider],
                     }, {
                POSITION: [  10,     7.5,      0,     180,    160,   0, ],
                    TYPE: [exports.sider],
                       }, {
                POSITION: [  10,     7.5,      0,     252,    160,   0, ],
                    TYPE: [exports.sider], 
                          }, {
                POSITION: [  10,     7.5,      0,     325,    160,   0, ],
                    TYPE: [exports.sider],
            }],
        };
exports.Celestialbody5 = {
  LABEL: "",
  CONTROLLERS: ['reverseceles'],
  COLOR: 5,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  SHAPE: 7,
  FOV: 1,
  FACING_TYPE: "autospin",
  MAX_CHILDREN: 23,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3.6, 7, -1.4, 8, 0, 26, 0],
PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.bulletghost,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [3.6, 7, -1.4, 8, 0, 77, 0],
PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.bulletghost,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [3.6, 7, -1.4, 8, 0, 129, 0],
PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.bulletghost,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [3.6, 7, -1.4, 8, 0, 180, 0],
PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.bulletghost,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [3.6, 7, -1.4, 8, 0, 231, 0],
PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.bulletghost,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [3.6, 7, -1.4, 8, 0, 282, 0],
PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.bulletghost,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [3.6, 7, -1.4, 8, 0, 333, 0],
PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.bulletghost,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      /////////////////////////////////
      ////////////////////////////////
      ///////////////////////////////
POSITION: [1, 5, -1.4, 8, 0, 26, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.minion3,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [1, 5, -1.4, 8, 0, 77, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.factory,
          g.poundsusus
        ]),
        TYPE: exports.minion3,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [1, 5, -1.4, 8, 0, 129, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.minion3,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [1, 5, -1.4, 8, 0, 180, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.minion3,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [1, 5, -1.4, 8, 0, 231, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
         TYPE: exports.minion3,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [1, 5, -1.4, 8, 0, 282, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
        TYPE: exports.minion3,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [1, 5, -1.4, 8, 0, 333, 0],
       PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
          g.poundsusus
        ]),
         TYPE: exports.minion3,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    }
  ]
};
exports.Celestialbody6 = {
    LABEL: '',
    CONTROLLERS: ['spinceles'],
    AUTOSPIN: true,
    COLOR: 5,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
                   TURRETS: [{/*********  SIZE     X       Y     ANGLE    ARC */
                   POSITION: [  10,     7.5,      0,     35,     160,   0, ], 
                    TYPE: [exports.sider2],
                    }, {
                POSITION: [  10,     7.5,      0,     110,    160,   0, ],
                    TYPE: [exports.sider2],
                     }, {
                POSITION: [  10,     7.5,      0,     180,    160,   0, ],
                    TYPE: [exports.sider2],
                       }, {
                POSITION: [  10,     7.5,      0,     252,    160,   0, ],
                    TYPE: [exports.sider2], 
                          }, {
                POSITION: [  10,     7.5,      0,     325,    160,   0, ],
                    TYPE: [exports.sider2],
            }],
        };
exports.Celestialbody7 = {
  LABEL: "",
  CONTROLLERS: ['reverseceles'],
  COLOR: 14,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  SHAPE: 7,
  FOV: 1,
  MAX_CHILDREN: 32,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      //*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY 
      POSITION: [3.6, 6, 1.4, 8, 0, 26, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.bulletghost,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 77, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.bulletghost,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 129, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.bulletghost,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 180, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.bulletghost,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 231, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.bulletghost,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 282, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.bulletghost,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 333, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.bulletghost,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    }, {
  //////////////////////
      POSITION: [1, 10, 1, 8, 0, 26, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.droneboss32,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [1, 10, 1, 8, 0, 77, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.droneboss32,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [1, 10, 1, 8, 0, 129, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.droneboss32,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [1, 10, 1, 8, 0, 180, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.droneboss32,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [1, 10, 1, 8, 0, 231, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.droneboss32,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [1, 10, 1, 8, 0, 282, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.droneboss32,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [1, 10, 1, 8, 0, 333, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.droneboss32,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.Celestialbody8 = {
    LABEL: '',
    CONTROLLERS: ['spinceles'],
    AUTOSPIN: true,
    COLOR: 14,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
                   TURRETS: [{/*********  SIZE     X       Y     ANGLE    ARC */
                   POSITION: [  10,     7.5,      0,     35,     160,   0, ], 
                    TYPE: [exports.swarmerpaladin],
                    }, {
                POSITION: [  10,     7.5,      0,     110,    160,   0, ],
                    TYPE: [exports.swarmerpaladin],
                     }, {
                POSITION: [  10,     7.5,      0,     180,    160,   0, ],
                    TYPE: [exports.swarmerpaladin],
                       }, {
                POSITION: [  10,     7.5,      0,     252,    160,   0, ],
                    TYPE: [exports.swarmerpaladin], 
                          }, {
                POSITION: [  10,     7.5,      0,     325,    160,   0, ],
                    TYPE: [exports.swarmerpaladin],
            }],
        };
exports.Celestialbody9 = {
  LABEL: "",
  CONTROLLERS: ['reverseceles'],
  COLOR: 2,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  SHAPE: 7,
  FOV: 1,
  MAX_CHILDREN: 15,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      //*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY 
      POSITION: [3.6, 6, 1.4, 8, 0, 26, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.dronebossx,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 77, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.dronebossx,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 129, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.dronebossx,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 180, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.dronebossx,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 231, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.dronebossx,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 282, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.dronebossx,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [3.6, 6, 1.4, 8, 0, 333, 0],
PROPERTIES: {
  SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
  TYPE: exports.dronebossx,
  AUTOFIRE: true,
  SYNCS_SKILLS: true,
  STAT_CALCULATOR: gunCalcNames.drone,
  WAIT_TO_CYCLE: true
      }
    }
  ]
};
exports.Celestialbody10 = {
    LABEL: '',
    CONTROLLERS: ['spinceles'],
    AUTOSPIN: true,
    COLOR: 2,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
                   TURRETS: [{/*********  SIZE     X       Y     ANGLE    ARC */
                   POSITION: [  10,     7.5,      0,     35,     160,   0, ], 
                    TYPE: [exports.skimmerx],
                    }, {
                POSITION: [  10,     7.5,      0,     110,    160,   0, ],
                    TYPE: [exports.skimmerx],
                     }, {
                POSITION: [  10,     7.5,      0,     180,    160,   0, ],
                    TYPE: [exports.skimmerx],
                       }, {
                POSITION: [  10,     7.5,      0,     252,    160,   0, ],
                    TYPE: [exports.skimmerx], 
                          }, {
                POSITION: [  10,     7.5,      0,     325,    160,   0, ],
                    TYPE: [exports.skimmerx],
            }],
        };
exports.crgun2 = {
        PARENT: [exports.genericTank],
        LABEL: '',
      MAX_CHILDREN: 4,
        BODY: {
            FOV: 2,
        },
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
         GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   7,    7.5,    0.6,     7,      4,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm2, g.battle2, g.carrier2]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,          
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,      -4,      0,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm2, g.battle2, g.carrier2]),
                            TYPE: exports.autoswarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,    
                       
                }, }
        ],
    };
exports.crgun50 = {
        PARENT: [exports.genericTank],
        LABEL: '',
      MAX_CHILDREN: 3,
        BODY: {
            FOV: 2,
        },
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
         GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   7,    7.5,    0.6,     7,      2,      15,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm2, g.battle2, g.carrier2]),
                            TYPE: exports.bee,
                            STAT_CALCULATOR: gunCalcNames.swarm,          
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,      -2,      -15,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm2, g.battle2, g.carrier2]),
                            TYPE: exports.bee,
                            STAT_CALCULATOR: gunCalcNames.swarm,    
                       
                }, }
        ],
    };
exports.crgun = {
        PARENT: [exports.genericTank],
        LABEL: '',
      MAX_CHILDREN: 4,
        BODY: {
            FOV: 2,
        },
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
         GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   8.5,   11,    0.6,     6,      0,      0,    0.5,  ],       
                }, {
                POSITION: [   3.4,    14,    1,     14.3,      0,      0,      0,   ],         
                        }
        ],
    };
exports.crgun3 = {
        PARENT: [exports.genericTank],
        LABEL: '',
      MAX_CHILDREN: 3,
        BODY: {
            FOV: 2,
        },
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
         GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   8.5,   11,    0.6,     6,      0,      0,    0.5,  ],      
           PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm2, g.battle2, g.carrier2]),
                            TYPE: exports.eggdrone,
                            STAT_CALCULATOR: gunCalcNames.swarm,          
                        },
                },
        ],
    };
// overboss droneboss droneboss32 dronebossx
exports.Celestialbody1 = {
    LABEL: '',
    CONTROLLERS: ['reverseceles'], 
    COLOR: 1,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 7,
    INDEPENDENT: true,
  FACING_TYPE: "autospin",
 TURRETS: [{//*********  SIZE     X       Y     ANGLE    ARC 
                POSITION: [  8.5,     9,      0,     26,     180,   0, ], 
                    TYPE: [exports.crgun2],
                    }, {
                POSITION: [  8.5,     9,      0,     77,    180,   0, ],
                    TYPE: [exports.crgun2],
                     }, {
                POSITION: [  8.5,     9,      0,     129,    180,   0, ],
                    TYPE: [exports.crgun2],
                       }, {
                POSITION: [  8.5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.crgun2], 
                          }, {
                POSITION: [  8.5,     9,      0,     231,    180,   0, ],
                    TYPE: [exports.crgun2],
                          }, {
                POSITION: [  8.5,     9,      0,     282,    180,   0, ],
                    TYPE: [exports.crgun2],
                            }, {
                POSITION: [  8.5,     9,      0,     333,    180,   0, ],
                    TYPE: [exports.crgun2],
                 
            }, 
          ],
        };
exports.Celestialbody213 = {
  LABEL: "",
  CONTROLLERS: ['reverseceles'],
  COLOR: 17,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  SHAPE: 7,
  FOV: 1,
  FACING_TYPE: "autospin",
  MAX_CHILDREN: 23,
   TURRETS: [{//*********  SIZE     X       Y     ANGLE    ARC 
                POSITION: [  8.5,     9,      0,     26,     180,   0, ], 
                    TYPE: [exports.crgun],
                    }, {
                POSITION: [  8.5,     9,      0,     77,    180,   0, ],
                    TYPE: [exports.crgun],
                     }, {
                POSITION: [  8.5,     9,      0,     129,    180,   0, ],
                    TYPE: [exports.crgun],
                       }, {
                POSITION: [  8.5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.crgun], 
                          }, {
                POSITION: [  8.5,     9,      0,     231,    180,   0, ],
                    TYPE: [exports.crgun],
                          }, {
                POSITION: [  8.5,     9,      0,     282,    180,   0, ],
                    TYPE: [exports.crgun],
                            }, {
                POSITION: [  8.5,     9,      0,     333,    180,   0, ],
                    TYPE: [exports.crgun],
                 
            }, 
          ],
GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
POSITION: [1, 5, -1.4, 8, 0, 26, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
        ]),
        TYPE: exports.produceminion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [1, 5, -1.4, 8, 0, 77, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
           g.factory,
        ]),
        TYPE: exports.produceminion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [1, 5, -1.4, 8, 0, 129, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
        ]),
        TYPE: exports.produceminion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [1, 5, -1.4, 8, 0, 180, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
        ]),
        TYPE: exports.produceminion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [1, 5, -1.4, 8, 0, 231, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
        ]),
         TYPE: exports.produceminion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [1, 5, -1.4, 8, 0, 282, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
        ]),
        TYPE: exports.produceminion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [1, 5, -1.4, 8, 0, 333, 0],
       PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.factory,
        ]),
         TYPE: exports.produceminion,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    }
  ]
};
exports.Celestialbody2152 = {
  LABEL: "",
  CONTROLLERS: ['reverseceles'],
  COLOR: 17,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  SHAPE: 7,
  FOV: 1,
  FACING_TYPE: "autospin",
  MAX_CHILDREN: 23,
   TURRETS: [{//*********  SIZE     X       Y     ANGLE    ARC 
                POSITION: [  8.5,     9,      0,     26,     180,   0, ], 
                    TYPE: [exports.crgun50],
                    }, {
                POSITION: [  8.5,     9,      0,     77,    180,   0, ],
                    TYPE: [exports.crgun50],
                     }, {
                POSITION: [  8.5,     9,      0,     129,    180,   0, ],
                    TYPE: [exports.crgun50],
                       }, {
                POSITION: [  8.5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.crgun50], 
                          }, {
                POSITION: [  8.5,     9,      0,     231,    180,   0, ],
                    TYPE: [exports.crgun50],
                          }, {
                POSITION: [  8.5,     9,      0,     282,    180,   0, ],
                    TYPE: [exports.crgun50],
                            }, {
                POSITION: [  8.5,     9,      0,     333,    180,   0, ],
                    TYPE: [exports.crgun50],
                 
            }, 
          ],
};
exports.Celestialbody2156 = {
  LABEL: "",
  CONTROLLERS: ['reverseceles'],
  COLOR: 17,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  SHAPE: 7,
  FOV: 1,
  FACING_TYPE: "autospin",
  MAX_CHILDREN: 23,
   TURRETS: [{//*********  SIZE     X       Y     ANGLE    ARC 
                POSITION: [  8.5,     9,      0,     26,     180,   0, ], 
                    TYPE: [exports.crgun3],
                    }, {
                POSITION: [  8.5,     9,      0,     77,    180,   0, ],
                    TYPE: [exports.crgun3],
                     }, {
                POSITION: [  8.5,     9,      0,     129,    180,   0, ],
                    TYPE: [exports.crgun3],
                       }, {
                POSITION: [  8.5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.crgun3], 
                          }, {
                POSITION: [  8.5,     9,      0,     231,    180,   0, ],
                    TYPE: [exports.crgun3],
                          }, {
                POSITION: [  8.5,     9,      0,     282,    180,   0, ],
                    TYPE: [exports.crgun3],
                            }, {
                POSITION: [  8.5,     9,      0,     333,    180,   0, ],
                    TYPE: [exports.crgun3],
                 
            }, 
          ],
};
exports.Celestialbody2 = {
    LABEL: '',
    CONTROLLERS: ['spinceles'],
    COLOR: 1,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
          TURRETS: [{//**   SIZE     X       Y     ANGLE    ARC
                POSITION: [  10.6,     7.5,      0,     35,     160,   0, ], 
                    TYPE: [exports.auto4gunx],
                    }, {
                POSITION: [  10.6,     7.5,      0,     110,    160,   0, ],
                    TYPE: [exports.auto4gunx],
                     }, {
                POSITION: [  10.6,     7.5,      0,     180,    160,   0, ],
                    TYPE: [exports.auto4gunx],
                       }, {
                POSITION: [  10.6,     7.5,      0,     252,    160,   0, ],
                    TYPE: [exports.auto4gunx], 
                          }, {
                POSITION: [  10.6,     7.5,      0,     325,    160,   0, ],
                    TYPE: [exports.auto4gunx],
            }],
        };
exports.Celestialbody123 = {
    LABEL: '',
    CONTROLLERS: ['spinceles'],
    COLOR: 17,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
          TURRETS: [{//**   SIZE     X       Y     ANGLE    ARC
                POSITION: [  10.6,     7.5,      0,     35,     160,   0, ], 
                    TYPE: [exports.auto4gunx],
                    }, {
                POSITION: [  10.6,     7.5,      0,     110,    160,   0, ],
                    TYPE: [exports.auto4gunx],
                     }, {
                POSITION: [  10.6,     7.5,      0,     180,    160,   0, ],
                    TYPE: [exports.auto4gunx],
                       }, {
                POSITION: [  10.6,     7.5,      0,     252,    160,   0, ],
                    TYPE: [exports.auto4gunx], 
                          }, {
                POSITION: [  10.6,     7.5,      0,     325,    160,   0, ],
                    TYPE: [exports.auto4gunx],
            }],
        };
exports.Celestialbody1138 = {
    LABEL: '',
    CONTROLLERS: ['spinceles'],
    COLOR: 17,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
          TURRETS: [{//**   SIZE     X       Y     ANGLE    ARC
                POSITION: [  10.6,     7.5,      0,     35,     160,   0, ], 
                    TYPE: [exports.sider3],
                    }, {
                POSITION: [  10.6,     7.5,      0,     110,    160,   0, ],
                    TYPE: [exports.sider3],
                     }, {
                POSITION: [  10.6,     7.5,      0,     180,    160,   0, ],
                    TYPE: [exports.sider3],
                       }, {
                POSITION: [  10.6,     7.5,      0,     252,    160,   0, ],
                    TYPE: [exports.sider3], 
                          }, {
                POSITION: [  10.6,     7.5,      0,     325,    160,   0, ],
                    TYPE: [exports.sider3],
            }],
        };
exports.Celestialbody1148 = {
    LABEL: '',
    CONTROLLERS: ['spinceles'],
    COLOR: 17,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
          TURRETS: [{//**   SIZE     X       Y     ANGLE    ARC
                POSITION: [  10.6,     7.5,      0,     35,     160,   0, ], 
                    TYPE: [exports.sider4],
                    }, {
                POSITION: [  10.6,     7.5,      0,     110,    160,   0, ],
                    TYPE: [exports.sider4],
                     }, {
                POSITION: [  10.6,     7.5,      0,     180,    160,   0, ],
                    TYPE: [exports.sider4],
                       }, {
                POSITION: [  10.6,     7.5,      0,     252,    160,   0, ],
                    TYPE: [exports.sider4], 
                          }, {
                POSITION: [  10.6,     7.5,      0,     325,    160,   0, ],
                    TYPE: [exports.sider4],
            }],
        };
//
//
//
//     OLD theia code
//
//
//
exports.Celestialsunchip = {
  PARENT: [exports.drone],
  SHAPE: 4,
  NECRO: false,
    CONTROLLERS: [
    "nearestDifferentMaster",
    "canRepel",
    "mapTargetToGoal",
    "hangOutNearMaster"
  ],
  HITS_OWN_TYPE: "hard",
  BODY: {
    DAMAGE: 3,
    FOV: 0.4
  },
  AI: {
    BLIND: true,
    FARMER: true
  },
  DRAW_HEALTH: false,
  INDEPENDENT: true,
};
exports.Celestialbody3old = {
  LABEL: "",
  CONTROLLERS: ["reversespin"],
  COLOR: 35,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 28,
  SHAPE: 7,
  INDEPENDENT: true,
  FOV: 1,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 7, 1.4, 8, 0, 26, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.stream,
          g.basic,
          g.mach,
          g.fallenoverlord,
          g.pound,
          g.norecoil
        ]),
        TYPE: exports.Celestialsunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 77, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.stream,
          g.basic,
          g.mach,
          g.fallenoverlord,
          g.pound,
          g.norecoil
        ]),
        TYPE: exports.Celestialsunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 129, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.stream,
          g.basic,
          g.mach,
          g.fallenoverlord,
          g.pound,
          g.norecoil
        ]),
        TYPE: exports.Celestialsunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 180, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.stream,
          g.basic,
          g.mach,
          g.fallenoverlord,
          g.pound,
          g.norecoil
        ]),
        TYPE: exports.Celestialsunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 231, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.stream,
          g.basic,
          g.mach,
          g.fallenoverlord,
          g.pound,
          g.norecoil
        ]),
         TYPE: exports.Celestialsunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 282, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.stream,
          g.basic,
          g.mach,
          g.fallenoverlord,
          g.pound,
          g.norecoil
        ]),
        TYPE: exports.Celestialsunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 333, 0],
       PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.stream,
          g.basic,
          g.mach,
          g.fallenoverlord,
          g.pound,
          g.norecoil
        ]),
         TYPE: exports.Celestialsunchip,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    }
  ]
};
exports.siderold = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [10, 13, -0.5, 14, 0, 0, 0]
    },
    {
      POSITION: [21, 14, -1.5, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.anni, g.lessreload, g.pound]),
        TYPE: exports.theia,
        STAT_CALCULATOR: gunCalcNames.sustained
      }
    },
  ]
};
exports.Celestialbody4old = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    AUTOSPIN: true,
    FACING_TYPE: "autospin",
    COLOR: 35,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
                   TURRETS: [{/*********  SIZE     X       Y     ANGLE    ARC */
                   POSITION: [  7,     9,      0,     35,     180,   0, ], 
                    TYPE: [exports.siderold],
                    }, {
                POSITION: [  7,     9,      0,     110,    180,   0, ],
                    TYPE: [exports.siderold],
                     }, {
                POSITION: [  7,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.siderold],
                       }, {
                POSITION: [  7,     9,      0,     252,    180,   0, ],
                    TYPE: [exports.siderold], 
                          }, {
                POSITION: [  7,     9,      0,     325,    180,   0, ],
                    TYPE: [exports.siderold],
            }],
        };
        exports.Celestial_theiaold = {
         PARENT: [exports.genericTank],
          LABEL: 'Celestial',
          SKILL: [0,9,9,9,0,9,9,9,9,9],
          NAME: ' ',
          VALUE: 1000000,
          SHAPE: 9,
          COLOR: 35,
          LEVEL: 200,
          FACING_TYPE: 'autospin',
          SIZE: 45,
 BODY: {
                FOV: 0.8,
                HEALTH: 13000,
                SHIELD: 25,
                REGEN: base.REGEN * 0.1,
                SPEED: base.SPEED * 0.45,
                DAMAGE:  35,
                AUTOSPIN: true,
            },
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     9,      0,     260,     180,   0, ], 
                    TYPE: [exports.trapperceles],
                    }, {
                POSITION: [  5,     9,      0,     219,    180,   0, ],
                    TYPE: [exports.trapperceles],
                     }, {
                POSITION: [  5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapperceles],
                       }, {
                POSITION: [  5,     9,      0,     300,    180,   0, ],
                    TYPE: [exports.trapperceles], 
                          }, {
                POSITION: [  5,     9,      0,     339,    180,   0, ],
                    TYPE: [exports.trapperceles],
                          }, {
                POSITION: [  5,     9,      0,     380,    180,   0, ],
                    TYPE: [exports.trapperceles],
                            }, {
                POSITION: [  5,     9,      0,     420,    180,   0, ],
                    TYPE: [exports.trapperceles],
                            }, {
                POSITION: [  5,     9,      0,     459,    180,   0, ],
                    TYPE: [exports.trapperceles],
                             }, {
                POSITION: [  5,     9,      0,     500,    180,   0, ],
                    TYPE: [exports.trapperceles],
                       }, {
                POSITION: [  15,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody3old]  
                       }, {
                POSITION: [  9,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody4old]  
  
            }],
        };
//
//
//
//     OLD theia code
//
//
//
exports.Celestialtheia = {
          PARENT: [exports.miniboss],
          LABEL: 'Celestial',
          SKILL: [9,9,9,9,9,9,9,9,9,9],
          NAME: "Theia",
          VALUE: 1000000,
          SHAPE: 9,
          COLOR: 35,
          LEVEL: 200,
          SIZE: 45,
 BODY: {
                FOV: 1,
                HEALTH: 1000,
                SHIELD: 2,
                REGEN: base.REGEN * 0.1,
                SPEED: 1.10,
                DAMAGE:  5,
            },
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  6.5,     9,      0,     260,     180,   0, ], 
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  6.5,     9,      0,     219,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  6.5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  6.5,     9,      0,     300,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  6.5,     9,      0,     339,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  6.5,     9,      0,     380,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  6.5,     9,      0,     420,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  6.5,     9,      0,     459,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  6.5,     9,      0,     500,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  14.94,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody3, {INDEPENDENT: false,}]  
                       }, {
                POSITION: [  8.6,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody4]  
  
            }],
        };
exports.Celestialfreyja = {
          PARENT: [exports.miniboss],
          LABEL: 'Celestial',
          SKILL: [9,9,9,9,9,9,9,9,9,9],
          NAME: "Freyja",
          VALUE: 1000000,
          SHAPE: 9,
          COLOR: 1,
          LEVEL: 200,
          SIZE: 45,
 BODY: {
                FOV: 1,
                HEALTH: 1000,
                SHIELD: 2,
                REGEN: base.REGEN * 0.1,
                SPEED: 1.86,
                DAMAGE:  5,
            },
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  6.5,     9,      0,     260,     180,   0, ], 
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  6.5,     9,      0,     219,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  6.5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  6.5,     9,      0,     300,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  6.5,     9,      0,     339,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  6.5,     9,      0,     380,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  6.5,     9,      0,     420,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  6.5,     9,      0,     459,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  6.5,     9,      0,     500,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  14.77,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody1]  
                       }, {
                POSITION: [  8.7,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody2]  
  
            }],
        };
exports.Celestialnyx = {
          PARENT: [exports.miniboss],
          LABEL: 'Celestial',
          SKILL: [9,9,9,9,9,9,9,9,9,9],
          NAME: "Nyx",
          VALUE: 1000000,
          SHAPE: 9,
          COLOR: 5,
          LEVEL: 200,
          SIZE: 45,
 BODY: {
                FOV: 1,
                HEALTH: 1000,
                SHIELD: 2,
                REGEN: base.REGEN * 0.1,
                SPEED: 1.15,
                DAMAGE:  5,
            },
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  6.5,     9,      0,     260,     180,   0, ], 
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  6.5,     9,      0,     219,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  6.5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  6.5,     9,      0,     300,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  6.5,     9,      0,     339,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  6.5,     9,      0,     380,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  6.5,     9,      0,     420,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  6.5,     9,      0,     459,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  6.5,     9,      0,     500,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  14.94,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody5]  
                       }, {
                POSITION: [  8.6,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody6]  
  
            }],
        };
exports.Celestialpaladin = {
          PARENT: [exports.miniboss],
          LABEL: 'Celestial',
          SKILL: [9,9,9,9,9,9,9,9,9,9],
          NAME: "Paladin",
          VALUE: 1000000,
          SHAPE: 9,
          COLOR: 14,
          LEVEL: 200,
          SIZE: 45,
 BODY: {
                FOV: 1,
                HEALTH: 1000,
                SHIELD: 2,
                REGEN: base.REGEN * 0.1,
                SPEED: 0.76,
                DAMAGE:  5,
            },
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  6.5,     9,      0,     260,     180,   0, ], 
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  6.5,     9,      0,     219,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  6.5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  6.5,     9,      0,     300,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  6.5,     9,      0,     339,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  6.5,     9,      0,     380,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  6.5,     9,      0,     420,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  6.5,     9,      0,     459,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  6.5,     9,      0,     500,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  14.94,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody7]  
                       }, {
                POSITION: [  8.6,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody8]  
  
            }],
        };
exports.Celestialzaphkiel = {
          PARENT: [exports.miniboss],
          LABEL: 'Celestial',
          SKILL: [9,9,9,9,9,9,9,9,9,9],
          NAME: "Zaphkiel",
          VALUE: 1000000,
          SHAPE: 9,
          COLOR: 2,
          LEVEL: 200,
          SIZE: 45,
 BODY: {
                FOV: 1,
                HEALTH: 1000,
                SHIELD: 2,
                REGEN: base.REGEN * 0.1,
                SPEED: 1.10,
                DAMAGE:  5,
            },
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  6.5,     9,      0,     260,     180,   0, ], 
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  6.5,     9,      0,     219,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  6.5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  6.5,     9,      0,     300,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  6.5,     9,      0,     339,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  6.5,     9,      0,     380,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  6.5,     9,      0,     420,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  6.5,     9,      0,     459,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  6.5,     9,      0,     500,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  14.94,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody9]  
                       }, {
                POSITION: [  8.6,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody10]
  
            }],
        };
exports.RogueCelesTyr = {
          PARENT: [exports.miniboss],
          LABEL: 'Rogue Celestial',
          SKILL: [9,9,9,9,9,9,9,9,9,9],
          NAME: "Tyr",
          VALUE: 1000000,
          SHAPE: 9,
          COLOR: 17,
          LEVEL: 200,
          SIZE: 45,
 BODY: {
                FOV: 1,
                HEALTH: 1000,
                SHIELD: 2,
                REGEN: base.REGEN * 0.1,
                SPEED: 1.37,
                DAMAGE:  5,
            },
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  6.5,     9,      0,     260,     180,   0, ], 
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  6.5,     9,      0,     219,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  6.5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  6.5,     9,      0,     300,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  6.5,     9,      0,     339,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  6.5,     9,      0,     380,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  6.5,     9,      0,     420,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  6.5,     9,      0,     459,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  6.5,     9,      0,     500,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  14.94,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody213]  
                       }, {
                POSITION: [  8.6,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody123]  
  
            }],
        };
exports.RogueCelesAlviss = {
          PARENT: [exports.miniboss],
          LABEL: 'Rogue Celestial',
          SKILL: [9,9,9,9,9,9,9,9,9,9],
          NAME: "Alviss",
          VALUE: 1000000,
          SHAPE: 9,
          COLOR: 17,
          LEVEL: 200,
          SIZE: 45,
 BODY: {
                FOV: 1,
                HEALTH: 1000,
                SHIELD: 2,
                REGEN: base.REGEN * 0.1,
                SPEED: 1.37,
                DAMAGE:  5,
            },
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  6.5,     9,      0,     260,     180,   0, ], 
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  6.5,     9,      0,     219,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  6.5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  6.5,     9,      0,     300,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  6.5,     9,      0,     339,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  6.5,     9,      0,     380,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  6.5,     9,      0,     420,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  6.5,     9,      0,     459,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  6.5,     9,      0,     500,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  14.94,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody2156]  
                       }, {
                POSITION: [  8.6,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody1138]  
  
            }],
        };
exports.RogueCelesFiolnir = {
          PARENT: [exports.miniboss],
          LABEL: 'Rogue Celestial',
          SKILL: [9,9,9,9,9,9,9,9,9,9],
          NAME: "Fiolnir",
          VALUE: 1000000,
          SHAPE: 9,
          COLOR: 17,
          LEVEL: 200,
          SIZE: 45,
 BODY: {
                FOV: 1,
                HEALTH: 1000,
                SHIELD: 2,
                REGEN: base.REGEN * 0.1,
                SPEED: 1.37,
                DAMAGE:  5,
            },
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  6.5,     9,      0,     260,     180,   0, ], 
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  6.5,     9,      0,     219,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  6.5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  6.5,     9,      0,     300,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  6.5,     9,      0,     339,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  6.5,     9,      0,     380,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  6.5,     9,      0,     420,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  6.5,     9,      0,     459,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  6.5,     9,      0,     500,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  14.94,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody2152]  
                       }, {
                POSITION: [  8.6,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody1148]  
  
            }],
        };
//
  //
//
  //
//
   //
//               CELESTIALS
  //             CODE: Supermassive end
//
  //
//
  //             FINALS
//               CODE: hypermassive start
  //
//
exports.celesbody1 = {
    LABEL: '',
    COLOR: 0,
  CONTROLLERS: ['reverseceles'],
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 19,
  SHAPE: 9,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3.5, 4.2, -1.4, 8, 0, 19.8, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.bulletghost,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [3.5, 4.2, -1.4, 8, 0, -19.8, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.bulletghost,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
    }
    },
    {
POSITION: [3.5, 4.2, -1.4, 8, 0, -60, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.bulletghost,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
    }
    },
    {
POSITION: [3.5, 4.2, -1.4, 8, 0, 60, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.bulletghost,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
    }
    },
    {
POSITION: [3.5, 4.2, -1.4, 8, 0, -140, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.bulletghost,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
    }
    },
    {
POSITION: [3.5, 4.2, -1.4, 8, 0, 140, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.bulletghost,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
    }
    },
    {
POSITION: [3.5, 4.2, -1.4, 8, 0, 180, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.bulletghost,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
    }
    },  
    {
POSITION: [3.5, 4.2, -1.4, 8, 0, 260, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.bulletghost,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
    }
    },
    {
POSITION: [3.5, 4.2, -1.4, 8, 0, -260, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.bulletghost,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
    }
    }, {
      /////
            POSITION: [1, 7, -1.4, 8, 0, 19.8, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.droneboss32,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [1, 7, -1.4, 8, 0, -19.8, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.droneboss32,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
    }
    },
    {
POSITION: [1, 7, -1.4, 8, 0, -60, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.droneboss32,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
    }
    },
    {
POSITION: [1, 7, -1.4, 8, 0, 60, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.droneboss32,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
    }
    },
    {
POSITION: [1, 7, -1.4, 8, 0, -140, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.droneboss32,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
    }
    },
    {
POSITION: [1, 7, -1.4, 8, 0, 140, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.droneboss32,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
    }
    },
    {
POSITION: [1, 7, -1.4, 8, 0, 180, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.droneboss32,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
    }
    },  
    {
POSITION: [1, 7, -1.4, 8, 0, 260, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.droneboss32,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
    }
    },
    {
POSITION: [1, 7, -1.4, 8, 0, -260, 0],
PROPERTIES: {
          SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
          TYPE: exports.droneboss32,
          AUTOFIRE: true,
          SYNCS_SKILLS: true,
          STAT_CALCULATOR: gunCalcNames.drone,
          WAIT_TO_CYCLE: true
    }
    },
  ]
};
exports.smashshoot = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [ 18.6,  10,    1.4,      0,      0,      0,      0,   ],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroyrag, g.annirag]),
                        TYPE: exports.smasherrag,
                    }, }, {
                    POSITION: [ 1,  9,    1.4,      0,      0,      0,      0,   ],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroyrag, g.annirag]),
                        TYPE: exports.bulletenableai,
                    }, }, {
                    POSITION: [10.9, 16, 1.2, 5, 0, 0, 0],
                    }
                ],
            };
exports.celesbody2 = {
    LABEL: '',
    CONTROLLERS: ['spinceles'],
    COLOR: 0,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 7,
    INDEPENDENT: true,
                TURRETS: [{//********  SIZE     X       Y     ANGLE    ARC 
                POSITION: [  8.4,     9,      0,     26,     180,   0, ], 
                    TYPE: [exports.smashshoot],
                    }, {
                POSITION: [  8.4,     9,      0,     77,   180,   0, ],
                    TYPE: [exports.smashshoot],
                     }, {
                POSITION: [  8.4,     9,      0,     129,    180,   0, ],
                    TYPE: [exports.smashshoot],
                       }, {
                POSITION: [  8.4,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.smashshoot], 
                          }, {
                POSITION: [  8.4,     9,      0,     231,    180,   0, ],
                    TYPE: [exports.smashshoot],
                          }, {
                POSITION: [  8.4,     9,      0,     282,    180,   0, ],
                    TYPE: [exports.smashshoot],
                            }, {
                POSITION: [  8.4,     9,      0,     333,    180,   0, ],
                    TYPE: [exports.smashshoot],
            }],
        };
exports.gunnercruise = {
            PARENT: [exports.genericTank],
            LABEL: "",
  BODY: {
    FOV: 2
  },
  MAX_CHILDREN: 42,
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  10,    3.5,     0.6,      0,     7.25,    0,     0.5,  ], 
                    PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm2, g.battle2, g.carrier2]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm, 
                            MAX_CHILDREN: 4
                    }, }, { 
                POSITION: [  10,    3.5,     0.6,      0,    -7.25,    0,     0.75, ], 
                    PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm2, g.battle2, g.carrier2]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,
                            MAX_CHILDREN: 4
                    }, }, { 
                POSITION: [  16,    3.5,     1,      0,     3.75,    0,      0,   ], 
                    PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto2, g.gunner2, g.twin, g.power, g.slow]),
                    TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  16,    3.5,     1,      0,    -3.75,    0,     0.25, ], 
                    PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto2, g.gunner2, g.twin, g.power, g.slow]),
                    TYPE: exports.bullet,
                    }, }, 
            ],
        };
exports.celesbody3 = {
    LABEL: '',
    CONTROLLERS: ['reverseceles'],
    COLOR: 0,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 12,
    SHAPE: 5,
    INDEPENDENT: true,
                 TURRETS: [{//*********  SIZE     X       Y     ANGLE    ARC
                   POSITION: [  8,     9,      0,     35,     180,   0, ], 
                    TYPE: [exports.gunnercruise],
                    }, {
                POSITION: [  8,     9,      0,     110,    180,   0, ],
                    TYPE: [exports.gunnercruise],
                     }, {
                POSITION: [  8,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.gunnercruise],
                       }, {
                POSITION: [  8,     9,      0,     252,    180,   0, ],
                    TYPE: [exports.gunnercruise], 
                          }, {
                POSITION: [  8,     9,      0,     325,    180,   0, ],
                    TYPE: [exports.gunnercruise],
            }], 
        };
exports.ragnarok = {
         PARENT: [exports.largeboss],
          LABEL: 'Ragnarok',
          SKILL: [0,9,9,9,9,9,9,9,9,9],
          NAME: "Ragnarok",
          SHAPE: 12,
          VALUE: 5000000,
           COLOR: 0,
          LEVEL: 500,
          SIZE: 85,
 BODY: {
                FOV: 0.8,
                HEALTH: 800,
                SHIELD: 10,
                SPEED: 0.76,
                DAMAGE:  25,
            },
           FACING_TYPE: 'autospin',
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  3.8,     9.3,      0,     270,     180,   0, ], 
                    TYPE: [exports.ragnarok_is_special, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  3.8,     9.3,      0,     240,    180,   0, ],
                    TYPE: [exports.ragnarok_is_special, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  3.8,     9.3,      0,     210,    180,   0, ],
                    TYPE: [exports.ragnarok_is_special, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  3.8,     9.3,      0,     180,    180,   0, ],
                    TYPE: [exports.ragnarok_is_special, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  3.8,     9.3,      0,     150,    180,   0, ],
                    TYPE: [exports.ragnarok_is_special, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  3.8,     9.3,      0,     120,    180,   0, ],
                    TYPE: [exports.ragnarok_is_special, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  3.8,     9.3,      0,     90,    180,   0, ],
                    TYPE: [exports.ragnarok_is_special, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  3.8,     9.3,      0,     60,    180,   0, ],
                    TYPE: [exports.ragnarok_is_special, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  3.8,     9.3,      0,     30,    180,   0, ],
                    TYPE: [exports.ragnarok_is_special, {INDEPENDENT: true,}],  
                                }, {
                POSITION: [  3.8,     9.3,      0,     0,    180,   0, ],
                    TYPE: [exports.ragnarok_is_special, {INDEPENDENT: true,}], 
                        }, {
               /////////////////////////////////////////////////////////
                POSITION: [  16,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.celesbody1, {INDEPENDENT: false,}] 
                          }, {
                POSITION: [  9.87,     0,      0,       0,    360,   1, ], 
                    TYPE: [exports.celesbody2] 
                            }, {
                POSITION: [  5.85,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.celesbody3]  
                            }, {
                ///////////////////////////////////////////////////////
                POSITION: [  3.8,     9.3,      0,     -60,    180,   0, ],
                    TYPE: [exports.ragnarok_is_special, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  3.8,     9.3,      0,     -30,    180,   0, ],
                    TYPE: [exports.ragnarok_is_special, {INDEPENDENT: true,}],  
                               
                  
            }],
        };
// KRONOS
exports.misslergun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  BODY: {
    FOV: 2
  },
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [ 4.1,  12.9,    1.8,      15.9,      0,      0,      0,   ], },{
                    POSITION: [10.9, 16, 1.2, 5, 0, 0, 0],
                      PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty3, g.arty3, g.skim3]),
                        TYPE: exports.alphaskimmer,
                        STAT_CALCULATOR: gunCalcNames.sustained
                    }, }, 
                ],
            };
exports.Celestialbody12 = {
    LABEL: '',
    CONTROLLERS: ['reverseceles'], 
    COLOR: 6,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 6,
    SHAPE: 7,
    INDEPENDENT: true,
                   TURRETS: [{/*********  SIZE     X       Y     ANGLE    ARC */
                 POSITION: [  6.7,     9,      0,     260,     180,   0, ], 
                    TYPE: [exports.misslergun],
                    }, {
                POSITION: [  6.7,     9,      0,     219,    180,   0, ],
                    TYPE: [exports.misslergun],
                     }, {
                POSITION: [  6.7,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.misslergun],
                       }, {
                POSITION: [  6.7,     9,      0,     300,    180,   0, ],
                    TYPE: [exports.misslergun], 
                          }, {
                POSITION: [  6.7,     9,      0,     339,    180,   0, ],
                    TYPE: [exports.misslergun],
                          }, {
                POSITION: [  6.7,     9,      0,     380,    180,   0, ],
                    TYPE: [exports.misslergun],
                            }, {
                POSITION: [  6.7,     9,      0,     420,    180,   0, ],
                    TYPE: [exports.misslergun],
                            }, {
                POSITION: [  6.7,     9,      0,     459,    180,   0, ],
                    TYPE: [exports.misslergun],
                             }, {
                POSITION: [  6.7,     9,      0,     500,    180,   0, ],
                    TYPE: [exports.misslergun],  
            }],
        };
 exports.cargun = {
        PARENT: [exports.genericTank],
        LABEL: '',
      MAX_CHILDREN: 5,
        BODY: {
            FOV: 2,
        },
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
         GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   7,    7.5,    0.6,     7,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm2, g.battle2, g.carrier2]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,          
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,      2,      40,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm2, g.battle2, g.carrier2]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,    
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     -2,     -40,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm2, g.battle2, g.carrier2]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,
                }, }
        ],
    };
exports.Celestialbody22 = {
    LABEL: '',
    CONTROLLERS: ['spinceles'],
    COLOR: 6,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 7,
    INDEPENDENT: true,
                TURRETS: [{//********  SIZE     X       Y     ANGLE    ARC
                POSITION: [  6.1,     9,      0,     26,     180,   0, ], 
                    TYPE: [exports.cargun],
                    }, {
                POSITION: [  6.1,     9,      0,     77,    180,   0, ],
                    TYPE: [exports.cargun],
                     }, {
                POSITION: [  6.1,     9,      0,     129,    180,   0, ],
                    TYPE: [exports.cargun],
                       }, {
                POSITION: [  6.1,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.cargun], 
                          }, {
                POSITION: [  6.1,     9,      0,     231,    180,   0, ],
                    TYPE: [exports.cargun],
                          }, {
                POSITION: [  6.1,     9,      0,     282,    180,   0, ],
                    TYPE: [exports.cargun],
                            }, {
                POSITION: [  6.1,     9,      0,     333,    180,   0, ],
                    TYPE: [exports.cargun],
            }],
        };
exports.triplegun = {
        PARENT: [exports.genericTank],
        LABEL: '',
        BODY: {
            FOV: 2,
        },
        SIZE: 28,
        CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
        COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [18, 10, 1, 0, 5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.verysussy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.verysussy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 10, 1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.verysussy]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.Celestialbody32 = {
    LABEL: '',
    CONTROLLERS: ['reverseceles'],
    COLOR: 6,
  SIZE: 100,
  SKILL: [0,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    //INDEPENDENT: true,
                  TURRETS: [{//******** SIZE     X       Y     ANGLE    ARC 
                POSITION: [  7.2,     9,      0,     35,     180,   0, ], 
                    TYPE: [exports.triplegun],
                    }, {
                POSITION: [  7.2,     9,      0,     110,    180,   0, ],
                    TYPE: [exports.triplegun],
                     }, {
                POSITION: [  7.2,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.triplegun],
                       }, {
                POSITION: [  7.2,     9,      0,     252,    180,   0, ],
                    TYPE: [exports.triplegun], 
                          }, {
                POSITION: [  7.2,     9,      0,     325,    180,   0, ],
                    TYPE: [exports.triplegun],
            }],
        };
exports.Celestialeternal = {
         PARENT: [exports.largeboss],
          LABEL: 'Eternal',
          SKILL: [0,9,9,9,9,9,9,9,9,9],
          NAME: "Kronos",
          SHAPE: 12,
          VALUE: 5000000,
           COLOR: 6,
          LEVEL: 500,
          SIZE: 95,
 BODY: {
                FOV: 0.8,
                HEALTH: 800,
                SHIELD: 10,
                SPEED: 0.64,
                DAMAGE:  25,
            },
           FACING_TYPE: 'autospin',
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
               POSITION: [  5.7,     9,      0,     270,     180,   0, ], 
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  5.7,     9,      0,     240,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  5.7,     9,      0,     210,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  5.7,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  5.7,     9,      0,     150,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  5.7,     9,      0,     120,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5.7,     9,      0,     90,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5.7,     9,      0,     60,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  5.7,     9,      0,     30,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],  
                                }, {
                POSITION: [  5.7,     9,      0,     0,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}], 
                        }, {
                POSITION: [  13.6,  0,    0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody12] 
                          }, {
                POSITION: [  10,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody22] 
                            }, {
                POSITION: [  7,    0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody32]  
                            }, {
                POSITION: [  5.7,     9,      0,     -90,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5.7,     9,      0,     -60,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  5.7,     9,      0,     -30,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],  
                               
                  
            }],
        };
// UNHOLY HELLBRINGER
exports.overminion = {
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
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  MAX_CHILDREN: 4,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
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
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
}; 

exports.overminion2 = {
  PARENT: [exports.genericTank],
  LABEL: "Mothership",
  TYPE: "minion",
  DAMAGE_CLASS: 0,
  HITS_OWN_TYPE: "hardWithBuffer",
  FACING_TYPE: "smoothToTarget",
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9,],
  BODY: {
    FOV: 0.5,
    SPEED: 3,
    ACCELERATION: 0.4,
    HEALTH: 10000,
    SHIELD: 500,
    DAMAGE: 1.2,
    RESIST: 1,
    PENETRATION: 120,
    DENSITY: 0.4
  },
  AI: {
    BLIND: true
  },
  DRAW_HEALTH: false,
  CLEAR_ON_MASTER_UPGRADE: true,
  MAX_CHILDREN: 4,
  SHAPE:15,
  GIVE_KILL_MESSAGE: false,
  CONTROLLERS: [
    "nearestDifferentMaster",
    "mapAltToFire",
    "minion",
    "canRepel",
    "hangOutNearMaster"
  ],
  //CONTROLLERS: ['nearestDifferentMaster'],
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [   5,     4,    1,     8,      0,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                MAX_CHILDREN: 2,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                        }, }, {
                    POSITION: [   5,     4,    1,     8,      0,     22.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                            AUTOFIRE: true,
                MAX_CHILDREN: 2,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                          POSITION: [   5,     4,    1,     8,      0,     45,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                    POSITION: [   5,     4,    1,     8,      0,     67.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                            AUTOFIRE: true,
                MAX_CHILDREN: 2,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,     90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,     112.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,      135,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.drone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                          }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,      157.5,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone], g.over),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                          }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,      180,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                          }, }, {
                    POSITION: [   5,     4,    1,     8,      0,     -22.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                          POSITION: [   5,     4,    1,     8,      0,     -45,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                    POSITION: [   5,     4,    1,     8,      0,     -67.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,     -90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.autodrone, g.over]),
                            TYPE: exports.autodrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,     -112.5,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,      -135,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                          }, }, { 
                    POSITION: [   5,     4,    1,     8,      0,      -157.5,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over, g.over]),
                            TYPE: exports.motherdrone,
                MAX_CHILDREN: 2,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
     
      }
    }
  ]
}; 
exports.huntgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
    POSITION: [24, 8, 1, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.25],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.predagun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.hunter2, g.preda]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  21,    12,      1,      0,      0,      0,     0.15, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.hunter2, g.preda]),
                            TYPE: exports.bullet,
                        }, }, { 
                    POSITION: [  18,    16,      1,      0,      0,      0,     0.3,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
                            TYPE: exports.bullet,
                        }, },
                ],
};
exports.snipegun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  24,    8.5,     1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: exports.bullet,
            }, },
        ],
};
exports.huntgun2 = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
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
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 12, 1, 0, 0, 0, 0.15],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.basic,
          g.sniper,
          g.hunter,
          g.hunter2,
          g.preda
        ]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 16, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet
        }
    },
    {
      POSITION: [15, 20, 1, 0, 0, 0, 0.3],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.preda]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.overgun = {
  PARENT: [exports.genericTank],
  LABEL: "",
  CONTROLLERS: [
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  MAX_CHILDREN:8,
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
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [6, 12, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    }
  ]
};
        exports.OVK_1 = {
            PARENT: [exports.genericTank],
          LABEL: 'OVK-1',
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: 6250,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
          COLOR: 18,
           SHAPE: 12,
  FACING_TYPE: "autospin",
          SIZE: 50,
            GUNS: [
    {
           /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4, 4, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }, }, {
        POSITION: [4, 4, 1.2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
        }, }, {
        POSITION: [4, 4, 1.2, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 330, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 2,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
         },
      },
  ],  
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
    
      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    }
  ]
          
        }; 

        exports.OVK_2 = {
            PARENT: [exports.genericTank],
          LABEL: 'OVK-2',
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: 6250,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
          COLOR: 18,
           SHAPE: 12,
  FACING_TYPE: "autospin",
          SIZE: 50,
            GUNS: [
    {
           /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4, 4, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }, }, {
        POSITION: [4, 4, 1.2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
        }, }, {
        POSITION: [4, 4, 1.2, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 330, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
         },
      },
  ],  
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
    
      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    }, {
      POSITION: [3, 8, 0, 0, 360, 1],
      TYPE: [exports.snipegun, { INDEPENDENT: false, COLOR: 18 }]
      }, {
      POSITION: [3, 8, 0, 90, 360, 1],
      TYPE: [exports.snipegun, { INDEPENDENT: false, COLOR: 18 }]
        }, {
      POSITION: [3, 8, 0, -90, 360, 1],
      TYPE: [exports.snipegun, { INDEPENDENT: false, COLOR: 18 }]
          }, {
      POSITION: [3, 8, 0, 180, 360, 1],
      TYPE: [exports.snipegun, { INDEPENDENT: false, COLOR: 18 }]
    }
  ]
          
        }; 

        exports.OVK_3 = {
            PARENT: [exports.genericTank],
          LABEL: 'OVK-3',
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: 6250,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
          COLOR: 18,
           SHAPE: 12,
  FACING_TYPE: "autospin",
          SIZE: 50,
            GUNS: [
    {
           /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4, 4, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }, }, {
        POSITION: [4, 4, 1.2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
        }, }, {
        POSITION: [4, 4, 1.2, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 330, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
         },
      },
  ],  
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
    
      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    }, {
      POSITION: [3, 8, 0, 0, 360, 1],
      TYPE: [exports.snipegun, { INDEPENDENT: false, COLOR: 18 }]
      }, {
      POSITION: [3, 8, 0, 90, 360, 1],
      TYPE: [exports.snipegun, { INDEPENDENT: false, COLOR: 18 }]
        }, {
      POSITION: [3, 8, 0, -90, 360, 1],
      TYPE: [exports.snipegun, { INDEPENDENT: false, COLOR: 18 }]
          }, {
      POSITION: [3, 8, 0, 180, 360, 1],
      TYPE: [exports.snipegun, { INDEPENDENT: false, COLOR: 18 }]
            }, {
      POSITION: [3, 8, 0, 45, 360, 1],
      TYPE: [exports.snipegun, { INDEPENDENT: false, COLOR: 18 }]
      }, {
      POSITION: [3, 8, 0, -45, 360, 1],
      TYPE: [exports.snipegun, { INDEPENDENT: false, COLOR: 18 }]
        }, {
      POSITION: [3, 8, 0, -225, 360, 1],
      TYPE: [exports.snipegun, { INDEPENDENT: false, COLOR: 18 }]
          }, {
      POSITION: [3, 8, 0, 225, 360, 1],
      TYPE: [exports.snipegun, { INDEPENDENT: false, COLOR: 18 }]
    }
  ]
          
        }; 

        exports.OVK_4 = {
            PARENT: [exports.genericTank],
          LABEL: 'OVK-4',
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: 7500,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
          COLOR: 18,
           SHAPE: 12,
  FACING_TYPE: "autospin",
          SIZE: 60,
            GUNS: [
    {
           /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [4, 4, 1.2, 8, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {     
      POSITION: [5, 2.5, 1, 9.5, 0, 90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.overminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
        }, }, {
      POSITION: [4, 4, 1, 8, 0, 90, 0]
    }, {
        POSITION: [4, 4, 1.2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
        }, }, {
        POSITION: [4, 4, 1.2, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {     
      POSITION: [5, 2.5, 1, 9.5, 0, -90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.overminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
        }, }, {
      POSITION: [4, 4, 1, 8, 0, -90, 0]
    }, {
      POSITION: [4, 4, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 330, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
         },
      },
  ],  
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
    
      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    }, {
      POSITION: [3, 7, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
      }, {
      POSITION: [3, 7, 0, 90, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
        }, {
      POSITION: [3, 7, 0, -90, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
          }, {
      POSITION: [3, 7, 0, 180, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
            }, {
      POSITION: [3, 7, 0, 45, 360, 1],
      TYPE: [exports.huntgun, { INDEPENDENT: false, COLOR: 18 }]
      }, {
      POSITION: [3, 7, 0, -45, 360, 1],
      TYPE: [exports.huntgun, { INDEPENDENT: false, COLOR: 18 }]
        }, {
      POSITION: [3, 7, 0, -225, 360, 1],
      TYPE: [exports.huntgun, { INDEPENDENT: false, COLOR: 18 }]
          }, {
      POSITION: [3, 7, 0, 225, 360, 1],
      TYPE: [exports.huntgun, { INDEPENDENT: false, COLOR: 18 }]
    }
  ]
          
        }; 

        exports.OVK_5 = {
            PARENT: [exports.genericTank],
          LABEL: 'OVK-5',
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: 7500,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
          COLOR: 18,
           SHAPE: 12,
  FACING_TYPE: "autospin",
          SIZE: 60,
            GUNS: [
    {
           /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          
      POSITION: [5, 2.5, 1, 9.5, 0, 0, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big]),
        TYPE: exports.overminion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
        }, }, {
      POSITION: [4, 4, 1, 8, 0, 0, 0]
    }, {
      POSITION: [4, 4, 1.2, 8, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {     
      POSITION: [5, 2.5, 1, 9.5, 0, 90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.overminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
        }, }, {
      POSITION: [4, 4, 1, 8, 0, 90, 0]
    }, {
        POSITION: [4, 4, 1.2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {    
      POSITION: [5, 2.5, 1, 9.5, 0, 180, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big]),
        TYPE: exports.overminion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
        }, }, {
      POSITION: [4, 4, 1, 8, 0, 180, 0]
    }, {
      POSITION: [4, 4, 1.2, 8, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
        }, }, {
        POSITION: [4, 4, 1.2, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {     
      POSITION: [5, 2.5, 1, 9.5, 0, -90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.overminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
        }, }, {
      POSITION: [4, 4, 1, 8, 0, -90, 0]
    }, {
      POSITION: [4, 4, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 330, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
         },
      },
  ],  
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
    
      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
    }, {
      POSITION: [3, 7, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
      }, {
      POSITION: [3, 7, 0, 90, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
        }, {
      POSITION: [3, 7, 0, -90, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
          }, {
      POSITION: [3, 7, 0, 180, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }] 
            }, {
      POSITION: [3, 7, 0, 45, 360, 1],
      TYPE: [exports.predagun, { INDEPENDENT: false, COLOR: 18 }]
      }, {
      POSITION: [3, 7, 0, -45, 360, 1],
      TYPE: [exports.predagun, { INDEPENDENT: false, COLOR: 18 }]
        }, {
      POSITION: [3, 7, 0, -225, 360, 1],
      TYPE: [exports.predagun, { INDEPENDENT: false, COLOR: 18 }]
          }, {
      POSITION: [3, 7, 0, 225, 360, 1],
      TYPE: [exports.predagun, { INDEPENDENT: false, COLOR: 18 }]
    }
  ]
          
        }; 
exports.OVK_6 = {
            PARENT: [exports.genericTank],
          LABEL: 'OVK-6',
  VALUE: 150000,
  BODY: {
    FOV: 1.3,
    SPEED: base.SPEED * 0.25,
    HEALTH: 7500,
    SHIELD: base.SHIELD * 1.25,
    REGEN: base.REGEN,
    DAMAGE: base.DAMAGE * 2.5
  },
          COLOR: 18,
           SHAPE: 12,
  FACING_TYPE: "autospin",
          SIZE: 65,
            GUNS: [
    {
           /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
          
      POSITION: [5, 2.5, 1, 9.5, 0, 0, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big]),
        TYPE: exports.overminion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
        }, }, {
      POSITION: [4, 4, 1, 8, 0, 0, 0]
    }, {
      POSITION: [4, 4, 1.2, 8, 0, 30, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 60, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {     
      POSITION: [5, 2.5, 1, 9.5, 0, 90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.overminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
        }, }, {
      POSITION: [4, 4, 1, 8, 0, 90, 0]
    }, {
        POSITION: [4, 4, 1.2, 8, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 150, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {    
      POSITION: [5, 2.5, 1, 9.5, 0, 180, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory, g.big]),
        TYPE: exports.overminion2,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
        }, }, {
      POSITION: [4, 4, 1, 8, 0, 180, 0]
    }, {
      POSITION: [4, 4, 1.2, 8, 0, 210, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
        }, }, {
        POSITION: [4, 4, 1.2, 8, 0, 240, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {     
      POSITION: [5, 2.5, 1, 9.5, 0, -90, 0]
    },
    {
      POSITION: [2, 4, 1, 13.5, 0, -90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.factory]),
        TYPE: exports.overminion,
        STAT_CALCULATOR: gunCalcNames.drone,
        MAX_CHILDREN: 2,
        AUTOFIRE: true,
        SYNCS_SKILLS: true
        }, }, {
      POSITION: [4, 4, 1, 8, 0, -90, 0]
    }, {
      POSITION: [4, 4, 1.2, 8, 0, 300, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
      }
    },
    {
      POSITION: [4, 4, 1.2, 8, 0, 330, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.drone, g.over]),
        TYPE: exports.drone,
        AUTOFIRE: true,
        MAX_CHILDREN: 1,
        SYNCS_SKILLS: true,
        STAT_CALCULATOR: gunCalcNames.drone,
        WAIT_TO_CYCLE: true
         },
      },
  ],  
  TURRETS: [
    {
      /*********  SIZE     X       Y     ANGLE    ARC */
    
      POSITION: [6, 0, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
      }, {
      POSITION: [3, 7, 0, 0, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
      }, {
      POSITION: [3, 7, 0, 90, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
      }, {
      POSITION: [3, 7, 0, -90, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
      }, {
      POSITION: [3, 7, 0, 180, 360, 1],
      TYPE: [exports.overgun, { INDEPENDENT: false, COLOR: 18 }]
      }, {
      POSITION: [3, 8, 0, 45, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 18 }]
      }, {
      POSITION: [3, 8, 0, -45, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 18 }]
        }, {
      POSITION: [3, 8, 0, -225, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 18 }]
      }, {
      POSITION: [3, 8, 0, 225, 360, 1],
      TYPE: [exports.huntgun2, { INDEPENDENT: false, COLOR: 18 }]
    }
  ]
          
        };
//BRINGER OF HELL
        exports.flanktrap = makeTrapper(exports.basic, 'Flank Guard');

            exports.guntrap = {
                PARENT: [exports.genericTank],
                LABEL: 'Gunner Trapper',
                DANGER: 7,
                STAT_NAMES: statnames.generic,
                BODY: {
                    FOV: base.FOV * 1.25,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  19,     2,      1,      0,    -2.5,     0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  19,     2,      1,      0,     2.5,     0,     0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.twin, g.tonsmorrecoil, g.lotsmorrecoil]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  12,    11,      1,      0,      0,      0,      0,   ],
                        }, {
                    POSITION: [  13,    11,      1,      0,      0,     180,     0,   ],
                        }, {
                    POSITION: [   4,    11,     1.7,    13,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.trap, g.fast, g.halfrecoil]),
                            TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
                        }, },
                ],
            };
        exports.bushwhack = makeTrapper(exports.slaughterer, 'Sniper Guard');


// UPGRADE PATHS
exports.removed.UPGRADES_TIER_1 = [ 
  exports.quadtrapper,
  exports.bentboomer,
  exports.octobase,
  exports.master,
  exports.destroy5,
  exports.mothershipX,
  exports.mothership,
  exports.hybrid2,
  exports.battleshit,
  exports.whythingsareverysus,
  exports.whythingsareincrebiblysus,
  exports.murderremoved,
  exports.auto25,
  exports.singlestream,
  exports.removed2
];
exports.removed2.UPGRADES_TIER_1 = [
  exports.shootstar,
  exports.Celestial_theiaold,
  exports.pew
];
exports.testbed.UPGRADES_TIER_1 = [
exports.beta,
exports.bosses,
exports.removed,
exports.misc,
exports.basic,
exports.arena,
exports.developer,
exports.testold,
exports.johnathansprogects,
exports.ethanbosses
];
exports.developer.UPGRADES_TIER_1 = [
  exports.allhailknockback
];
exports.ethanbosses.UPGRADES_TIER_1 = [
  exports.OVK_1,
];
exports.betatester.UPGRADES_TIER_1 = [
exports.beta,
exports.bosses,
exports.removed,
exports.misc,
exports.basic,
exports.arena,
exports.testold,
];
exports.seniorbed.UPGRADES_TIER_1 = [
exports.beta,
exports.bosses,
exports.removed,
exports.misc,
exports.basic,
exports.arena,
exports.testold,
exports.johnathansprogects
];
exports.beta.UPGRADES_TIER_1 = [
exports.sanctuary,
exports.testingtank,
exports.beehive,
exports.betabosses,
];
exports.betabosses.UPGRADES_TIER_1 = [
  exports.beeboss,
  exports.blackhole,
];
exports.blackhole.UPGRADES_TIER_1 = [
  exports.rift
];
exports.johnathansprogects.UPGRADES_TIER_1 = [
    exports.realitypart1,
    exports.realitypart2,
    exports.realitypart3,
    exports.realitypart4,
    exports.reality,
  exports.realitycaller,
  exports.realityguard,
  exports.realityseeker,
  exports.enderpart3
];
exports.basic.UPGRADES_TIER_1 = [exports.twin, exports.sniper, exports.machine, exports.pound, exports.flank, exports.builder, exports.overseer];
        exports.basic.UPGRADES_TIER_3 = [exports.single, exports.heal, exports.pointy];
    exports.basic.UPGRADES_TIER_2 = [exports.smash, exports.compass];
    exports.compass.UPGRADES_TIER_3 = [exports.gps, exports.locator, exports.radar, exports.KFC];
    exports.pointy.UPGRADES_TIER_2 = [exports.flail, exports.longpointy, exports.sharppointy];
    exports.flail.UPGRADES_TIER_3 = [exports.steamroller, exports.triflail, exports.buzzsaw, exports.hydra];
    exports.longpointy.UPGRADES_TIER_3 = [exports.verylongpointy, exports.spear];
    exports.sharppointy.UPGRADES_TIER_3 = [exports.verysharppointy, exports.MightBeAnAx];

    exports.twin.UPGRADES_TIER_2 = [exports.double, exports.bent, exports.gunner, exports.hexa];
        exports.twin.UPGRADES_TIER_3 = [exports.dual, exports.suchwow];
        exports.double.UPGRADES_TIER_3 = [exports.tripletwin, exports.split, exports.autodouble, exports.bentdouble];
        exports.bent.UPGRADES_TIER_3 = [exports.penta, exports.spread, exports.benthybrid, exports.bentdouble, exports.triple];
        exports.gunner.UPGRADES_TIER_3 = [exports.autogunner, exports.nailgun, exports.auto4, exports.machinegunner, exports.submachinegun];

    exports.sniper.UPGRADES_TIER_2 = [exports.assassin, exports.hunter, exports.mini, exports.lazar];
        exports.sniper.UPGRADES_TIER_3 = [];
        exports.assassin.UPGRADES_TIER_3 = [exports.ranger, exports.falcon, exports.bushwhack, exports.sniperelite, exports.outpost];
        exports.ranger.UPGRADES_TIER_3 = [exports.God];
        exports.hunter.UPGRADES_TIER_3 = [exports.preda, exports.dual, exports.poach, exports.sidewind];

        exports.machine.UPGRADES_TIER_2 = [exports.destroy, exports.gunner, exports.artillery, exports.flamer, exports.bubbles, exports.thatBurningRingOfFire];
        exports.bubbles.UPGRADES_TIER_2 = [exports.bubbler];
        exports.machine.UPGRADES_TIER_3 = [exports.spray];
        exports.mini.UPGRADES_TIER_3 = [exports.stream, exports.hybridmini, exports.nailgun, exports.benttrap];
        
    exports.pound.UPGRADES_TIER_2 = [exports.destroy, exports.artillery, exports.launch];
    exports.launch.UPGRADES_TIER_3 = [exports.skimmer, exports.hiveshooter, exports.rocketshoot, exports.sidewind, exports.twist];
        exports.destroy.UPGRADES_TIER_3 = [exports.anni, exports.hybrid, exports.shotgun2, exports.whything];
        exports.artillery.UPGRADES_TIER_3 = [exports.mortar, exports.spread, exports.keepingitsus];
         exports.shotgun2.UPGRADES_TIER_1 = [exports.autoshooter];

    exports.flank.UPGRADES_TIER_2 = [exports.hexa, exports.tri, exports.auto3, exports.flanktrap];
        exports.flank.UPGRADES_TIER_3 = [];
        exports.tri.UPGRADES_TIER_3 = [exports.speedster, exports.fighter, exports.booster, exports.falcon, exports.bomber, exports.brutalizer, exports.nolivesmatter, exports.GHOST, exports.trimother, exports.Stealthjet]; //want a reset?
        exports.hexa.UPGRADES_TIER_3 = [exports.octo, exports.hexatrap, exports.heptatrap, exports.swerl];
        exports.auto3.UPGRADES_TIER_3 = [exports.auto5, exports.heavy3, exports.auto4, exports.stream5, exports.sniper3, exports.spinner];
        exports.flanktrap.UPGRADES_TIER_3 = [exports.bushwhack, exports.guntrap, exports.fortress, exports.bomber];
        exports.shotgun2.UPGRADES_TIER_2 = [exports.murder];

        exports.builder.UPGRADES_TIER_3 = [exports.construct, exports.autobuilder, exports.engineer, exports.apiary, exports.boomer];

        exports.overseer.UPGRADES_TIER_3 = [exports.overlord, exports.autoover,exports.banshee, exports.overtrap, exports.overgunner, exports.factorydiep, exports.cruiser, exports.underseer, exports.necroinvis, exports.manager];  
        exports.cruiser.UPGRADES_TIER_3 = [exports.carrier, exports.watercraft, exports.battleship, exports.brutalizer, exports.fortress, exports.autocruiser,];
      exports.triple.UPGRADES_TIER_3 = [exports.quint];
      exports.penta.UPGRADES_TIER_3 = [exports.septa, exports.pentatrap, exports.hybridpenta];
      exports.hybridpenta.UPGRADES_TIER_1 = [exports.hybridpentaX];

    exports.smash.UPGRADES_TIER_3 = [exports.megasmash, exports.spike, exports.autosmash, exports.weirdspike, exports.boostspike, exports.autospike, exports.Land];
exports.overlord.UPGRADES_TIER_1 = [exports.overlooker];
// random hell
exports.OVK_1.UPGRADES_TIER_2 = [exports.OVK_2];
exports.OVK_2.UPGRADES_TIER_2 = [exports.OVK_3];
exports.OVK_3.UPGRADES_TIER_2 = [exports.OVK_4];
exports.OVK_4.UPGRADES_TIER_2 = [exports.OVK_5];
exports.OVK_5.UPGRADES_TIER_2 = [exports.OVK_6];
// NPCS:
exports.crasher = {
    TYPE: 'crasher',
    LABEL: 'Crasher',
    COLOR: 5,
    SHAPE: 3,
    SIZE: 5,
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    BODY: {
        SPEED: 5,
        ACCEL: 0.01,
        HEALTH: 0.5,
        DAMAGE: 5,
        PENETRATION: 2,
        PUSHABILITY: 0.5,
        DENSITY: 10,
        RESIST: 2,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothWithMotion',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
};
exports.sentry = {
    PARENT: [exports.genericTank],
    TYPE: 'crasher',
    LABEL: 'Sentry',
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
    VALUE: 1500,
    VARIES_IN_SIZE: false,
    AI: { NO_LEAD: true, },
    BODY: {
        PENETRATION: 1.2,
        PUSHABILITY: 0.6,
        ACCELERATION: 0.05,
        HEALTH: 0.6 * wepHealthFactor,
        DAMAGE: 1.25 * wepDamageFactor,
        SPEED: 3.8,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.8,
    },
    CONTROLLERS: [
        'nearestDifferentMaster',
        'canRepel',
        'mapTargetToGoal',
        'hangOutNearMaster'
    ],
    MOTION_TYPE: 'chase',
    FACING_TYPE: 'smoothToTarget',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: false,
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: false,
};
exports.trapTurret = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.5,
    },
    INDEPENDENT: true,
    CONTROLLERS: ['nearestDifferentMaster', 'alwaysFire'], 
    COLOR: 16,
    AI: {
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  16,    14,      1,      0,      0,      0,      0,   ],
            }, {
        POSITION: [   4,    14,     1.8,    16,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.lowpower, g.fast, g.halfreload]),
                TYPE: exports.trap, STAT_CALCULATOR: gunCalcNames.trap,
            }, },
    ],
};
exports.trapTurret2 = {
    PARENT: [exports.genericTank],
    LABEL: 'Turret',
    BODY: {
        FOV: 0.5,
    },
    INDEPENDENT: true,
    CONTROLLERS: ['nearestDifferentMaster', 'alwaysFire'], 
    COLOR: 16,
    AI: {
        SKYNET: true,
        FULL_VIEW: true,
    },
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  16,    14,      1,      0,      0,      0,      0,   ],
            }, {
        POSITION: [   4,    14,     1.8,    16,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.poundsusus, g.destroysussus]),
                TYPE: exports.trapsanc, STAT_CALCULATOR: gunCalcNames.trap,
            }, },
    ],
};
exports.sentrySwarm = {
    PARENT: [exports.sentry],
    DANGER: 3,
    GUNS: [{
        POSITION: [    7,    14,    0.6,     7,     0,    180,     0,  ], 
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.swarm, g.morerecoil]),
            TYPE: exports.swarm,
            STAT_CALCULATOR: gunCalcNames.swarm,     
        }, },
    ],
};
exports.sentryGun = makeAuto(exports.sentry, 'Sentry', { type: exports.heavy3gun, size: 12, });
exports.sentryTrap = makeAuto(exports.sentry, 'Sentry', { type: exports.trapTurret, size: 12, });


    exports.crasherSpawner = {
        PARENT: [exports.genericTank],
        LABEL: 'Spawned',  
        STAT_NAMES: statnames.drone,
        CONTROLLERS: ['nearestDifferentMaster'], 
        COLOR: 5, 
        INDEPENDENT: true,
        AI: { chase: true, },
        MAX_CHILDREN: 4,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,     12,    1.2,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
                    TYPE: [exports.drone, { LABEL: 'Crasher', VARIES_IN_SIZE: true, DRAW_HEALTH: true }],
                    SYNCS_SKILLS: true,
                    AUTOFIRE: true,
                    STAT_CALCULATOR: gunCalcNames.drone,
                }, },
        ],
    };
exports.Sentru = {
        PARENT: [exports.genericTank],
        LABEL: 'Spawned',  
        STAT_NAMES: statnames.drone,
        CONTROLLERS: ['nearestDifferentMaster'], 
        COLOR: 5,
        AI: { chase: true, },
        MAX_CHILDREN: 2,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,     16,    1,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
                    TYPE: [exports.sentrySwarm, { LABEL: 'Sentry', VARIES_IN_SIZE: false, DRAW_HEALTH: true }],
                    SYNCS_SKILLS: true,
                    AUTOFIRE: true,
                    STAT_CALCULATOR: gunCalcNames.drone,
                }, },
        ],
    };
exports.Sentru2 = {
        PARENT: [exports.genericTank],
        LABEL: 'Spawned',  
        STAT_NAMES: statnames.drone,
        CONTROLLERS: ['nearestDifferentMaster'], 
        COLOR: 5, 
        AI: { chase: true, },
        MAX_CHILDREN: 2,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,     16,    1,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
                    TYPE: [exports.sentryTrap, { LABEL: 'Sentry', VARIES_IN_SIZE: false, DRAW_HEALTH: true }],
                    SYNCS_SKILLS: true,
                    AUTOFIRE: true,
                    STAT_CALCULATOR: gunCalcNames.drone,
                }, },
        ],
    };
exports.Sentru3 = {
        PARENT: [exports.genericTank],
        LABEL: 'Spawned',  
        STAT_NAMES: statnames.drone,
        CONTROLLERS: ['nearestDifferentMaster'], 
        COLOR: 5, 
        AI: { chase: true, },
        MAX_CHILDREN: 2,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,     16,    1,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
                    TYPE: [exports.sentryGun, { LABEL: 'Sentry', VARIES_IN_SIZE: false, DRAW_HEALTH: true }],
                    SYNCS_SKILLS: true,
                    AUTOFIRE: true,
                    STAT_CALCULATOR: gunCalcNames.drone,
                }, },
        ],
    };
    exports.elite = {
        PARENT: [exports.miniboss],
        LABEL: 'Elite Crasher',
      CONTROLLERS: [
      'nearestDifferentMaster', 'mapAltToFire', 'minion',
      ],
    AI: { STRAFE: false, },
        COLOR: 5,
        SHAPE: 3,
        SIZE: 22,
        VALUE: 150000,
        BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.25,
            HEALTH: 250,
            SHIELD: base.SHIELD * 1.25,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 2.5,
        },
    };
exports.elitelegions = {
        PARENT: [exports.elite],
        LABEL: 'Elite Minion',
        COLOR: 5,
        SHAPE: 3,
        SIZE: 20,
        CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'hangOutNearMaster'
      ],
      BODY: {
        FOV: 1.7,
        SPEED: 2,
        ACCELERATION: 0.6,
        HEALTH: 5,
        SHIELD: 2,
        DAMAGE: 1.2,
        RESIST: 1,
        PENETRATION: 1,
        DENSITY: 0.4,
    },
    AI: {
        BLIND: true,
    },
        VARIES_IN_SIZE: false,
        BROADCAST_MESSAGE: "An Elite Minion has fallen!",
        VALUE: 100000,
        HITS_OWN_TYPE: 'hard',
        DRAW_HEALTH: true
    };
exports.legionarybody = {
  PARENT: [exports.genericTank],
  LABEL: '',
  CONTROLLERS: ['reverseceles', 'nearestDifferentMaster'],
  COLOR: 5,
  SHAPE: 3,
  INDEPENDENT: true, //180 180 60 60 -60 -60
    GUNS: [{/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
POSITION: [   2.3,     7,    -1.2,     8,      4.5,     180,      0,   ], 
    },{
POSITION: [   2.3,     7,    -1.2,     8,      -4.5,     180,      0,   ], 
    },{
POSITION: [   2.3,     7,    -1.2,     8,      4.5,     60,      0,   ], 
    },{
POSITION: [   2.3,     7,    -1.2,     8,      -4.5,     60,      0,   ], 
    },{
POSITION: [   2.3,     7,    -1.2,     8,      4.5,     -60,      0,   ], 
    },{
POSITION: [   2.3,     7,    -1.2,     8,      -4.5,     -60,      0,   ], 
    }
],
TURRETS: [{/*  SIZE     X       Y     ANGLE    ARC */
  POSITION: [  8.5,     11,      0,     0,    170, 0], 
      TYPE: [exports.turretlegion],
        }, {
  POSITION: [  8.5,     11,      0,     120,    170, 0], 
      TYPE: [exports.turretlegion],
        }, {
  POSITION: [  8.5,     11,      0,     -120,    170, 0], 
      TYPE: [exports.turretlegion],
        }
]
};
exports.skimboss = {
        PARENT: [exports.miniboss],
        TYPE: 'miniboss',
        LABEL: 'Elite Skimmer',
             CONTROLLERS: [
      'nearestDifferentMaster', 'mapAltToFire', 'minion',
      ],
    AI: { STRAFE: false, },
        COLOR: 2,
        SHAPE: 3,
        SIZE: 26,
        VALUE: 150000,
        BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.35,
            HEALTH: 300,
            SHIELD: base.SHIELD * 1.25,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 2.5,
        },
        FACING_TYPE: 'autospin',
        TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
            POSITION: [  15,     5,      0,     60,     170, 0], 
                TYPE: exports.skimturret,
                    }, {
            POSITION: [  15,     5,      0,     180,    170, 0], 
                TYPE: exports.skimturret,
                    }, {
            POSITION: [  15,     5,      0,     300,    170, 0], 
                TYPE: exports.skimturret,
                    },
        ],
    };
exports.nestkeep = {
        PARENT: [exports.miniboss],
        TYPE: 'miniboss',
        LABEL: 'Nest Keeper',
    CONTROLLERS: [
      'nearestDifferentMaster', 'mapAltToFire', 'minion',
      ],
    AI: { STRAFE: false, },
        COLOR: 14,
        SHAPE: 5,
        SIZE: 45,
        VALUE: 150000,
        MAX_CHILDREN: 10,
        BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.45,
            HEALTH: 300,
            SHIELD: base.SHIELD * 2.25,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 2.5,
        },
        FACING_TYPE: 'autospin',
         GUNS: [{
           POSITION: [   4,     7,    1.2,     7.8,      0,     35,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.droneboss,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
         }, },{
           POSITION: [   4,     7,    1.2,     7.8,      0,     -35,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.droneboss,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
         }, }, {
            POSITION: [   4,     7,    1.2,     7.8,      0,     180,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.droneboss,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
         }, }, {
           POSITION: [   4,     7,    1.2,     7.8,      0,     108,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.droneboss,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
         }, }, {
           POSITION: [   4,     7,    1.2,     7.8,      0,     -108,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.droneboss, g.overboss]),
                            TYPE: exports.droneboss,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true
         }, }
           
           
           ],
        TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
            POSITION: [  8.6,     0,      0,     0,    360 , 1], 
                TYPE: [exports.boomernest, { INDEPENDENT: false, COLOR: 14, }]
                    }, {
            POSITION: [  7.3,     9.3,      0,     0,    125 , 0],
                TYPE: [exports.turretnest, {INDEPENDENT: false, COLOR: 16,}]
                    }, {
            POSITION: [  7.3,     9.3,      0,     72,    125 , 0],
                TYPE: [exports.turretnest, {INDEPENDENT: false, COLOR: 16,}]
                    }, {
            POSITION: [  7.3,     9.3,      0,     144,    125 , 0],
                TYPE: [exports.turretnest, {INDEPENDENT: false, COLOR: 16,}]
                    }, {
            POSITION: [  7.3,     9.3,      0,     216,    125 , 0],
                TYPE: [exports.turretnest, {INDEPENDENT: false, COLOR: 16,}]
                    }, {
            POSITION: [  7.3,     9.3,      0,     288,    125 , 0],
                TYPE: [exports.turretnest, {INDEPENDENT: false, COLOR: 16,}]
                    },
        ],
    };
exports.elite_battleship = {
  PARENT: [exports.elite],
  GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [    1,    0.01,     1,      6,      0,     180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                        TYPE: exports.bulletenableai,
                        LABEL: 'enable',
                    }, }, {
                POSITION: [    1,    0.01,     1,      6,      0,      60,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                        TYPE: exports.bulletenableai,
                        LABEL: 'enable',
                    }, }, {
                POSITION: [    1,    0.01,     1,      6,      0,     -60,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                        TYPE: exports.bulletenableai,
                        LABEL: 'enable',
                    }, }, {
                      POSITION: [    4.5,    5,     0.6,      6,      0,     180,     0,   ], 
                      PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                POSITION: [    4.5,    5,     0.6,      6,      0,     60,     0,   ], 
                    PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                POSITION: [    4.5,    5,     0.6,      6,      0,     -60,     0,   ], 
                    PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                POSITION: [    6,    5,     0.6,      6,      8,     -60,     0.5,   ],
                                              PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    5,     0.6,      6,     -8,      60,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    5,     0.6,      6,     -8,     -60,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    5,     0.6,      6,      8,      60,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    5,     0.6,      6,      -8,     180,     0.5,   ], 
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    5,     0.6,      6,      8,     180,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                    
            }, {
                  //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
               //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
              //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
                      
                //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
               //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
              //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
                POSITION: [    4.5,    8,     0.6,      6,      0,     180,     0,   ], 
                      PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                POSITION: [    4.5,    8,     0.6,      6,      0,     60,     0,   ], 
                    PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                POSITION: [    4.5,    8,     0.6,      6,      0,     -60,     0,   ], 
                    PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                POSITION: [    6,    8,     0.6,      6,      8,     -60,     0.5,   ],
                                              PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    8,     0.6,      6,     -8,      60,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    8,     0.6,      6,     -8,     -60,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    8,     0.6,      6,      8,      60,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    8,     0.6,      6,      -8,     180,     0.5,   ], 
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    8,     0.6,      6,      8,     180,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                    
            }],
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [ 5,     7,      0,     0,    360,   1, ], 
                    TYPE: [exports.autoTurret]
                    }, {
                POSITION: [ 5,     -4,      8,    0,    360,   1, ],  
                    TYPE: [exports.autoTurret]
                    }, {
                POSITION: [ 5,     -4,      -8,    0,    360,   1, ],  
                    TYPE: [exports.autoTurret]
                    },
            ],
        };
exports.elite_battleshiplegion = {
  PARENT: [exports.elitelegions],
  INDEPENDENT: true,
  GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [    1,    0.01,     1,      6,      0,     180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                        TYPE: exports.bulletenableai,
                        LABEL: 'enable',
                    }, }, {
                POSITION: [    1,    0.01,     1,      6,      0,      60,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                        TYPE: exports.bulletenableai,
                        LABEL: 'enable',
                    }, }, {
                POSITION: [    1,    0.01,     1,      6,      0,     -60,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                        TYPE: exports.bulletenableai,
                        LABEL: 'enable',
                    }, }, {
                      POSITION: [    3,    5,     0.6,      6,      0,     180,     0,   ], 
                      PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmXX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                POSITION: [    3,    5,     0.6,      6,      0,     60,     0,   ], 
                    PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmXX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                POSITION: [    3,    5,     0.6,      6,      0,     -60,     0,   ], 
                    PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmXX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                POSITION: [    3,    5,     0.6,      6,      8,     -60,     0.5,   ],
                                              PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmXX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    3,    5,     0.6,      6,     -8,      60,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmXX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    3,    5,     0.6,      6,     -8,     -60,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmXX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    3,    5,     0.6,      6,      8,      60,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmXX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    3,    5,     0.6,      6,      -8,     180,     0.5,   ], 
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmXX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    3,    5,     0.6,      6,      8,     180,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmXX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                    
            }, {
                  //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
               //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
              //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
                      
                //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
               //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
              //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
                POSITION: [    4.5,    8,     0.6,      6,      0,     180,     0,   ], 
                      PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                POSITION: [    4.5,    8,     0.6,      6,      0,     60,     0,   ], 
                    PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                POSITION: [    4.5,    8,     0.6,      6,      0,     -60,     0,   ], 
                    PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                POSITION: [    6,    8,     0.6,      6,      8,     -60,     0.5,   ],
                                              PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    8,     0.6,      6,     -8,      60,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    8,     0.6,      6,     -8,     -60,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    8,     0.6,      6,      8,      60,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    8,     0.6,      6,      -8,     180,     0.5,   ], 
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    8,     0.6,      6,      8,     180,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmX, g.battleX]),
                            TYPE: exports.bulletghost,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                    
            }],
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [ 5,     9,      0,     0,    360,   1, ], 
                    TYPE: [exports.autoTurret]
                    }, {
                POSITION: [ 5,     -4,      8,    0,    360,   1, ],  
                    TYPE: [exports.autoTurret]
                    }, {
                POSITION: [ 5,     -4,      -8,    0,    360,   1, ],  
                    TYPE: [exports.autoTurret]
                    },
            ],
        };
            exports.cyclone = {
                PARENT: [exports.elite],
                SKILL: skillSet({
               rld: 0.6,
               dam: 0.5, 
               pen: 0.8,
               str: 0.8,
               spd: 0.2,
               atk: 0.3,
               hlt: 1,
               shi: 0.7,
               rgn: 0.7,
               mob: 1,        
    }),
                SHAPE: 0,
                COLOR: 6,
                LABEL: 'Cyclone',
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  9,     2,      1,      0,      0,      45,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamXL]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  9,     2,      1,      0,      0,     135,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamXL]),
                            TYPE: exports.bullet,
                        }, }, {
                    POSITION: [  9,     2,      1,      0,      0,     225,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamXL]),
                            TYPE: exports.bullet,
                        }, }, {   
                    POSITION: [  9,     2,      1,      0,      0,     315,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.flank, g.spamXL]),
                            TYPE: exports.bullet,
                        }, },
                ],
              TURRETS: [{
                POSITION: [  25,     0,      0,      0,     360,  0], 
                    TYPE: exports.cyclibe,
                        },
             ]
            };
        exports.elite_destroyer = {
            PARENT: [exports.elite],
                  CONTROLLERS: [
      'nearestDifferentMaster', 'mapAltToFire', 'minion',
      ],
    AI: { STRAFE: false, },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [    1,    0.01,     1,      6,      0,     180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                        TYPE: exports.bulletenableai,
                        LABEL: 'enable',
                    }, }, {
                POSITION: [    1,    0.01,     1,      6,      0,      60,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                        TYPE: exports.bulletenableai,
                        LABEL: 'enable',
                    }, }, {
                POSITION: [    1,    0.01,     1,      6,      0,     -60,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                        TYPE: exports.bulletenableai,
                        LABEL: 'enable',
                    }, }, {
                //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
               //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
              //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
                POSITION: [    5,    16,     1,      6,      0,     180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.elitemurder]),
                        TYPE: exports.bullet,
                        LABEL: 'Devastator',
                    }, }, {
                POSITION: [    5,    16,     1,      6,      0,      60,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.elitemurder]),
                        TYPE: exports.bullet,
                        LABEL: 'Devastator',
                    }, }, {
                POSITION: [    5,    16,     1,      6,      0,     -60,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.pound, g.elitemurder]),
                        TYPE: exports.bullet,
                        LABEL: 'Devastator',
                    }, }
            ],
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  11,     0,      0,     180,    360,   0, ], 
                    TYPE: [exports.crasherSpawner]
                    }, {
                POSITION: [  11,     0,      0,      60,    360,   0, ],  
                    TYPE: [exports.crasherSpawner]
                    }, {
                POSITION: [  11,     0,      0,     -60,    360,   0, ],  
                    TYPE: [exports.crasherSpawner]
                    }, {
                POSITION: [  11,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.bigauto4gun, { INDEPENDENT: false, COLOR: 5, }]
                    },
            ],
        };
    exports.elite_spawner = {
        PARENT: [exports.elite],
        CONTROLLERS: [
      'nearestDifferentMaster', 'mapAltToFire', 'minion',
      ],
    AI: { STRAFE: false, },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [    1,    0.01,     1,      6,      0,     180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                        TYPE: exports.bulletenableai,
                        LABEL: 'enable',
                    }, }, {
                POSITION: [    1,    0.01,     1,      6,      0,      60,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                        TYPE: exports.bulletenableai,
                        LABEL: 'enable',
                    }, }, {
                POSITION: [    1,    0.01,     1,      6,      0,     -60,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                        TYPE: exports.bulletenableai,
                        LABEL: 'enable',
                    }, }, {
                //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
               //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
              //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
                POSITION: [    5,    16,     1,      6,      0,     180,     0,   ], 
                    }, {
                POSITION: [    5,    16,     1,      6,      0,      60,     0,   ], 
                    }, {
                POSITION: [    5,    16,     1,      6,      0,     -60,     0,   ], 
                    }, {
                POSITION: [    2,    18,     1,      12,      0,     -60,     0,   ],
                    }, {
                POSITION: [    2,    18,     1,      12,      0,     60,     0,   ],
                    }, {
                POSITION: [    2,    18,     1,      12,      0,     180,     0,   ],
                    }
            ],
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  11,     6.5,      0,     180,    0,   0, ], 
                    TYPE: [exports.Sentru]
                    }, {
                POSITION: [  11,     6.5,      0,      60,    0,   0, ],  
                    TYPE: [exports.Sentru2]
                    }, {
                POSITION: [  11,     6.5,      0,     -60,    0,   0, ],  
                    TYPE: [exports.Sentru3]
                    }, {
                POSITION: [  11,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.bigauto4gunsus, { INDEPENDENT: false, COLOR: 5, }]
                    },
            ],
        };
        exports.elite_gunner = {
          FACING_TYPE: "smoothToTarget",
            PARENT: [exports.elite],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  14,    16,      1,      0,      0,     180,     0,   ],
                    }, {
                POSITION: [   4,    16,     1.5,    14,      0,     180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                        TYPE: [exports.pillboxelite, { INDEPENDENT: true, }],
                    }, }, {                
                POSITION: [   6,    14,     -2,      2,      0,      60,     0,   ],
                    }, {                
                POSITION: [   6,    14,     -2,      2,      0,     300,     0,   ],
                    }
            ],
            AI: { NO_LEAD: false, },
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  14,     8,      0,     60,     180,   0, ], 
                    TYPE: [exports.auto4gun],
                    }, {
                POSITION: [  14,     8,      0,     300,    180,   0, ],
                    TYPE: [exports.auto4gun],
            }],
        };
exports.elite_spawnerlegion = {
            PARENT: [exports.elitelegions],
        CONTROLLERS: [
      'nearestDifferentMaster', 'mapAltToFire', 'minion',
      ],
    AI: { STRAFE: false, },
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [    1,    0.01,     1,      6,      0,     180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                        TYPE: exports.bulletenableai,
                        LABEL: 'enable',
                    }, }, {
                POSITION: [    1,    0.01,     1,      6,      0,      60,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                        TYPE: exports.bulletenableai,
                        LABEL: 'enable',
                    }, }, {
                POSITION: [    1,    0.01,     1,      6,      0,     -60,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                        TYPE: exports.bulletenableai,
                        LABEL: 'enable',
                    }, }, {
                //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
               //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
              //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
                POSITION: [    5,    16,     1,      6,      0,     180,     0,   ], 
                    }, {
                POSITION: [    5,    16,     1,      6,      0,      60,     0,   ], 
                    }, {
                POSITION: [    5,    16,     1,      6,      0,     -60,     0,   ], 
                    }, {
                POSITION: [    2,    18,     1,      12,      0,     -60,     0,   ],
                    }, {
                POSITION: [    2,    18,     1,      12,      0,     60,     0,   ],
                    }, {
                POSITION: [    2,    18,     1,      12,      0,     180,     0,   ],
                    }
            ],
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  11,     6.5,      0,     180,    0,   0, ], 
                    TYPE: [exports.Sentru]
                    }, {
                POSITION: [  11,     6.5,      0,      60,    0,   0, ],  
                    TYPE: [exports.Sentru2]
                    }, {
                POSITION: [  11,     6.5,      0,     -60,    0,   0, ],  
                    TYPE: [exports.Sentru3]
                    }, {
                POSITION: [  11,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.bigauto4gunsus, { INDEPENDENT: false, COLOR: 5, }]
                    },
            ],
        };
        exports.elite_sprayer = { 
            PARENT: [exports.elite],
            SKILL: [0,9,3,9,2,9,9,9,9,0],
            AI: { NO_LEAD: false, },
            HAS_NO_RECOIL: true,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  8.5,     0,      0,      18,    360,  1],
                    TYPE: [exports.elite_master, { INDEPENDENT: true, }, { COLOR: 5, }]
                        }, {
                POSITION: [  9,     6,      -5,     180,     130, 0], 
                    TYPE: [exports.spray, { COLOR: 16, }],
                        }, {
                POSITION: [  9,     6,      5,     180,     130, 0], 
                    TYPE: [exports.spray, { COLOR: 16, }],
                        }, {
                POSITION: [  9,     6,      5,      60,    130, 0], 
                    TYPE: [exports.spray, { COLOR: 16, }],
                        }, {
                POSITION: [  9,     6,      -5,      60,    130, 0], 
                    TYPE: [exports.spray, { COLOR: 16, }],
                        }, {
                POSITION: [  9,     6,      5,     -60,    130, 0], 
                    TYPE: [exports.spray, { COLOR: 16, }],
                        }, {
                POSITION: [  9,     6,      -5,     -60,    130, 0], 
                    TYPE: [exports.spray, { COLOR: 16, }],
                        },
            ],
        };
exports.elite_sprayerlegion = { 
            PARENT: [exports.elitelegions],
            INDEPENDENT: true,
            SKILL: [0,9,3,9,2,9,9,9,9,0],
            AI: { NO_LEAD: false, },
            HAS_NO_RECOIL: true,
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  14,     6,      0,     180,     190, 0], 
                    TYPE: [exports.sprayer, { COLOR: 5, }],
                        }, {
                POSITION: [  14,     6,      0,      60,    190, 0], 
                    TYPE: [exports.sprayer, { COLOR: 5, }],
                        }, {
                POSITION: [  14,     6,      0,     -60,    190, 0], 
                    TYPE: [exports.sprayer, { COLOR: 5, }],
                        },
            ],
        };
    exports.palisade = {
            PARENT: [exports.miniboss],
            LABEL: 'Rogue Palisade',
            SKILL: [5,9,9,9,5,9,9,9,9,9],
            COLOR: 17,
            SHAPE: 6,
            SIZE: 28,
            VALUE: 500000,
            BODY: {
                FOV: 1.3,
                SPEED: base.SPEED * 0.1,
                HEALTH: 300,
                SHIELD: base.SHIELD * 2,
                REGEN: base.REGEN,
                DAMAGE: base.DAMAGE * 3,
            },
            GUNS: [ { /**** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                                  
            POSITION: [   4,      0.1,    -1.6,     8,      0,      0,      0,   ], 
                    PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.halfreload, g.halfreload]),
            TYPE: exports.bulletenableai,
            STAT_CALCULATOR: gunCalcNames.drone,                        
            AUTOFIRE: true,
                    }, }, {
                POSITION: [   4,      0.1,    -1.6,     8,      0,     60,      0,   ], 
                    PROPERTIES: {
                      SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.halfreload, g.halfreload]),
            TYPE: exports.bulletenableai,
            STAT_CALCULATOR: gunCalcNames.drone,                        
            AUTOFIRE: true,
                    }, }, {
                POSITION: [   4,      0.1,    -1.6,     8,      0,     120,     0,   ], 
                    PROPERTIES: {
                      SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.halfreload, g.halfreload]),
            TYPE: exports.bulletenableai,
            STAT_CALCULATOR: gunCalcNames.drone,                        
            AUTOFIRE: true,
                    }, }, {
                POSITION: [   4,      0.1,    -1.6,     8,      0,     180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.factory, g.pound]),
                        TYPE: exports.bulletenableai,
                        STAT_CALCULATOR: gunCalcNames.drone,                      
                        AUTOFIRE: true,
                    }, }, {
                POSITION: [   4,      0.1,    -1.6,     8,      0,     240,     0,   ], 
                    PROPERTIES: {
                      SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.halfreload, g.halfreload]),
            TYPE: exports.bulletenableai,
            STAT_CALCULATOR: gunCalcNames.drone,                        
            AUTOFIRE: true,
                    }, }, {
                POSITION: [   4,      0.1,    -1.6,     8,      0,     300,     0,   ], 
                    PROPERTIES: {
                      SHOOT_SETTINGS: combineStats([g.factory, g.pound, g.halfreload, g.halfreload]),
            TYPE: exports.bulletenableai,
            STAT_CALCULATOR: gunCalcNames.drone,                        
            AUTOFIRE: true,
                    }, }, {
                      //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
                    //||||||||||||||||||||||||||||||||||||||||||||||||\\
                      //\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
                POSITION: [   4,      6,    -1.6,     8,      0,      0,      0,   ], 
                    PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.factory, g.poundsusus]),
            TYPE: exports.minion2,
            STAT_CALCULATOR: gunCalcNames.drone,                        
            AUTOFIRE: true,
            MAX_CHILDREN: 2,
            SYNCS_SKILLS: true,   
            WAIT_TO_CYCLE: true,
                    }, }, {
                POSITION: [   4,      6,    -1.6,     8,      0,     60,      0,   ], 
                    PROPERTIES: {
                      SHOOT_SETTINGS: combineStats([g.factory, g.poundsusus]),
            TYPE: exports.minion2,
            STAT_CALCULATOR: gunCalcNames.drone,                        
            AUTOFIRE: true,
            MAX_CHILDREN: 2,
            SYNCS_SKILLS: true,   
            WAIT_TO_CYCLE: true,
                    }, }, {
                POSITION: [   4,      6,    -1.6,     8,      0,     120,     0,   ], 
                    PROPERTIES: {
                      SHOOT_SETTINGS: combineStats([g.factory, g.poundsusus]),
            TYPE: exports.minion2,
            STAT_CALCULATOR: gunCalcNames.drone,                        
            AUTOFIRE: true,
            MAX_CHILDREN: 2,
            SYNCS_SKILLS: true,   
            WAIT_TO_CYCLE: true,
                    }, }, {
                POSITION: [   4,      6,    -1.6,     8,      0,     180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.factory, g.poundsusus]),
                        TYPE: exports.minion2,
                        STAT_CALCULATOR: gunCalcNames.drone,                      
                        AUTOFIRE: true,
                        MAX_CHILDREN: 1,
                        SYNCS_SKILLS: true, 
                        WAIT_TO_CYCLE: true,  
                    }, }, {
                POSITION: [   4,      6,    -1.6,     8,      0,     240,     0,   ], 
                    PROPERTIES: {
                      SHOOT_SETTINGS: combineStats([g.factory, g.poundsusus]),
            TYPE: exports.minion2,
            STAT_CALCULATOR: gunCalcNames.drone,                        
            AUTOFIRE: true,
            MAX_CHILDREN: 2,
            SYNCS_SKILLS: true,   
            WAIT_TO_CYCLE: true,
                    }, }, {
                POSITION: [   4,      6,    -1.6,     8,      0,     300,     0,   ], 
                    PROPERTIES: {
                      SHOOT_SETTINGS: combineStats([g.factory, g.poundsusus]),
            TYPE: exports.minion2,
            STAT_CALCULATOR: gunCalcNames.drone,                        
            AUTOFIRE: true,
            MAX_CHILDREN: 2,
            SYNCS_SKILLS: true,   
            WAIT_TO_CYCLE: true,
                    },}
            ],
            TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [   5,    10,      0,      30,    110, 0], 
                    TYPE: exports.trapTurret2,
                        }, {
                POSITION: [   5,    10,      0,      90,    110, 0], 
                    TYPE: exports.trapTurret2,
                        }, {
                POSITION: [   5,    10,      0,     150,    110, 0], 
                    TYPE: exports.trapTurret2,
                        }, {
                POSITION: [   5,    10,      0,     210,    110, 0], 
                    TYPE: exports.trapTurret2,
                        }, {
                POSITION: [   5,    10,      0,     270,    110, 0], 
                    TYPE: exports.trapTurret2,
                        }, {
                POSITION: [   5,    10,      0,     330,    110, 0], 
                    TYPE: exports.trapTurret2,
                        },
            ],
        };
exports.legionaryaihatesme = {
  PARENT: [exports.genericTank],
  LABEL: "",
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  FOV: 1,
  FACING_TYPE: "autospin",
  GUNS: [{
      POSITION: [3, 4.9, 1.4, 10, 0, 0, 4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniperXX]),
        TYPE: exports.elite_spawnerlegion,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
      }, }, {
      POSITION: [3, 4.9, 1.4, 10, 0, 120, 4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniperXX]),
        TYPE: exports.elite_battleshiplegion,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
      }, }, {
      POSITION: [3, 4.9, 1.4, 10, 0, -120, 4],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniperXX]),
        TYPE: exports.elite_sprayerlegion,
        MAX_CHILDREN: 1,
        AUTOFIRE: true,
      },
  }]
};
exports.legionarycrasher = {
  PARENT: [exports.largerboss],
  LABEL: 'Legionary Crasher',
  SIZE: 110,
  BROADCAST_MESSAGE: 'An Elite Legion has been Defeated!',
  HAS_NO_RECOIL: true,
          SKILL: [7,9,9,9,9,9,9,9,9,8],
          NAME: "Ceres",
          VALUE: 5000000,
           COLOR: 5,
           SHAPE: 3,
          LEVEL: 500,
 BODY: {
                FOV: 0.8,
                HEALTH: 800,
                SHIELD: 10,
                SPEED: 0.56,
                DAMAGE:  25,
            },
        FACING_TYPE: 'autospin',
  GUNS: [{/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
POSITION: [   2.4,     14,    -1.2,     7.92,      0,     180,      0,   ], 
  },
  {
POSITION: [   2.4,     14,    -1.2,     7.92,      0,     60,      0,   ], 
  },
  {
POSITION: [   2.4,     14,    -1.2,     7.92,      0,     -60,      0,   ], 
  }, {
///////////////////////////////////////////////////////////
////////////
    POSITION: [4.6, 11, 1, 11.3, 0, 0, 0]
    },
    {
      POSITION: [3, 11, 1.4, 14, 0, 0, 0],
      }, {
      POSITION: [4.6, 11, 1, 11.3, 0, 120, 0]
    },
    {
      POSITION: [3, 11, 1.4, 14, 0, 120, 0],
}, {
      POSITION: [4.6, 11, 1, 11.3, 0, -120, 0]
    },
    {
      POSITION: [3, 11, 1.4, 14, 0, -120, 0],}
///////////////////////////////////////////////////////////
],
        TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  13,     8,      0,     180,    110, 0], 
                    TYPE: [exports.spraylegion, { COLOR: 5, }],
                        }, {
                POSITION: [  13,     8,      0,      60,    110, 0], 
                    TYPE: [exports.spraylegion, { COLOR: 5, }],
                        }, {
                POSITION: [  13,     8,      0,     -60,    110, 0], 
                    TYPE: [exports.spraylegion, { COLOR: 5, }],
                        }, {
                POSITION: [  13,     0,      0,     0,   360, 1],
                    TYPE: [exports.legionarybody],
                        }, {
                POSITION: [  16,     0,      0,     0,   0, 0],
                   TYPE: [exports.legionaryaihatesme],
                        },
        ],
    };
exports.sunchip2 = {
        PARENT: [exports.drone],
        SHAPE: 5,
        NECRO: true,
        HITS_OWN_TYPE: 'hard',
        BODY: {
            FOV: 0.9,
        },
        AI: {
            BLIND: true,
            FARMER: true,
        },
        DRAW_HEALTH: false,
    };
exports.summoner = {
                PARENT: [exports.miniboss],
                LABEL: 'Summoner',
                COLOR: 13,
                SIZE: 25,
                SKILL: [6,6,6,7,6,6,7,7,6,8],
                HAS_NO_RECOIL: true,
                BODY: {
                INTANGIBLE: true,
                              SPEED: base.SPEED * 0.25,
            HEALTH: 260,
            SHIELD: base.SHIELD * 1.25,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 2.5,
                },
                SHAPE: 4,
                FACING_TYPE: 'autospin',
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   4.6,     10.5,    1.2,     8,      0,     90,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.pound3, g.summoner, g.stream]),
                            TYPE: exports.sumchip,
                            MAX_CHILDREN: 12,
                            AUTOFIRE: true
                        }, }, {
                    POSITION: [   4.6,     10.5,    1.2,     8,      0,     270,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.pound3, g.summoner, g.stream]),
                            TYPE: exports.sumchip,
                            MAX_CHILDREN: 12,
                          AUTOFIRE: true
                        }, }, {
                    POSITION: [   4.6,     10.5,    1.2,     8,      0,      0,     0, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.pound3, g.summoner, g.stream]),
                            TYPE: exports.sumchip,
                             MAX_CHILDREN: 12,
                            AUTOFIRE: true
                        }, }, {
                    POSITION: [   4.6,     10.5,    1.2,     8,      0,     180,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.pound3, g.summoner, g.stream]),
                            TYPE: exports.sumchip,
                             MAX_CHILDREN: 12,
                            AUTOFIRE: true

                        }, },
                    ],
            };
            exports.fallbooster = {
                PARENT: [exports.diepbossram],
                LABEL: 'Fallen Booster',
                CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
                SIZE: 22,
                COLOR: 18,
                FACING_TYPE: "smoothToTarget",
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  18,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.trifront, g.muchmorerecoil]),
                            TYPE: exports.bullet,
                            LABEL: 'Front',
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,     -1,     140,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  13,     8,      1,      0,      1,     220,    0.6,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster, g.halfrecoil]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     150,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, }, {   
                    POSITION: [  16,     8,      1,      0,      0,     210,    0.1,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.tri, g.thruster]),
                            TYPE: exports.bullet,
                            LABEL: gunCalcNames.thruster,
                        }, },
                ],
            };
            exports.falloverlord = {
                PARENT: [exports.diepbossdroner],
                LABEL: 'Fallen Overlord',
                SIZE: 22,
                COLOR: 18,
                STAT_NAMES: statnames.drone,
                MAX_CHILDREN: 38,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   6,     3,    1.2,     8,      0,     90,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.stream, g.basic, g.mach, g.fallenoverlord, g.pound, g.norecoil]),
                            TYPE: exports.dronefall,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true,     
                        }, }, {
                    POSITION: [   6,     3,    1.2,     8,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.stream, g.basic, g.mach, g.fallenoverlord, g.pound, g.norecoil]),
                            TYPE: exports.dronefall,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                    POSITION: [   6,     3,    1.2,     8,      0,     270,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.stream, g.basic, g.mach, g.fallenoverlord, g.pound, g.norecoil]),
                            TYPE: exports.dronefall,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, { 
                    POSITION: [   6,     3,    1.2,     8,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.stream, g.basic, g.mach, g.fallenoverlord, g.pound, g.norecoil]),
                            TYPE: exports.dronefall,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                    POSITION: [   6,     12,    1.2,     8,      0,     90,      0,   ], }, {
                    POSITION: [   6,     12,    1.2,     8,      0,     180,     0,   ], }, {
                    POSITION: [   6,     12,    1.2,     8,      0,     270,     0,   ], }, { 
                    POSITION: [   6,     12,    1.2,     8,      0,      0,      0,   ], },
                  ///////////////////////////////////////////////
                ],
            };
exports.fakedefenderbody = {
      SKILL: skillSet({
        rld: 1,
        dam: 1, 
        pen: 1,
        str: 1,
        spd: 1,
        atk: 1,
        hlt: 1,
        shi: 1,
        rgn: 1,
        mob: 0,        
    }),
  LABEL: '', 
    COLOR: 2,
    SHAPE: 3,
    INDEPENDENT: false,
    FACING_TYPE: "autospin",
          TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
            POSITION: [  9,     4.3,      0,     60,     0, 0], 
                TYPE: exports.trapperceles,
                    }, {
            POSITION: [  9,     4.3,      0,     180,    0, 0], 
                TYPE: exports.trapperceles,
                    }, {
            POSITION: [  9,     4.3,      0,     300,    0, 0], 
                TYPE: exports.trapperceles,
                    }, {    
                POSITION: [ 5,     9,      0,     0,    360,   1, ], 
                    TYPE: [exports.ThyThingDefender]
                    }, {
                POSITION: [ 5,     -4,      8,    0,    360,   1, ],  
                    TYPE: [exports.ThyThingDefender]
                    }, {
                POSITION: [ 5,     -4,      -8,    0,    360,   1, ],  
                    TYPE: [exports.ThyThingDefender]
                    }],
};
exports.defender = {
        PARENT: [exports.diepbossthingg],
        LABEL: 'Defender',
        SHAPE: 2,
        COLOR: 3,
        SIZE: 22,
        TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [22,      0,       0,    0,      0,   1, ],
                    TYPE: exports.fakedefenderbody
                    }],
    };
            exports.guardian = {
                PARENT: [exports.diepbossdroner],
                LABEL: 'Guardian',
                SIZE: 22,
                COLOR: 5,
                SHAPE: 3,
                FACING_TYPE: 'smoothToTarget',
                STAT_NAMES: statnames.drone,
                MAX_CHILDREN: 38,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   3,     4,    1.2,     8,      0,     180,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.stream, g.basic, g.mach, g.fallenoverlord, g.pound]),
                            TYPE: exports.dronefall,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.drone,
                            WAIT_TO_CYCLE: true, 
                        }, }, {
                    POSITION: [   3,     14,    1.2,     8,      0,     180,     0,   ], },
                  ///////////////////////////////////////////////
                ],
            };
exports.bot = {
    AUTO_UPGRADE: 'random',
    FACING_TYPE: 'smoothToTarget',
    SKILL: skillSet({ 
                rld: 1,
                dam: 1,
                pen: 1,
                spd: 0.6,
                str: 1,
            }),
    BODY: {
        SIZE: 10,
        VALUE: 24000,
    },
    //COLOR: 17,
    NAME: "[AI] ",
    CONTROLLERS: ['nearestDifferentMaster', 'mapAltToFire', 'minion', 'fleeAtLowHealth'],
    AI: { STRAFE: false, },
};
exports.bosses.UPGRADES_TIER_1 = [exports.elite_sprayer,exports.elite_destroyer,exports.elite_spawner,exports.elite_gunner, exports.elite_battleship, exports.bosses2];
exports.bosses2.UPGRADES_TIER_1 = [exports.palisade,exports.summoner,exports.skimboss, exports.cyclone, exports.nestkeep, exports.bosses3, exports.bosses];
exports.bosses3.UPGRADES_TIER_1 = [exports.Celestialtheia, exports.Celestialfreyja, exports.Celestialpaladin ,exports.Celestialnyx, exports.Celestialzaphkiel, exports.bosses4, exports.bosses2, exports.bossesspecial];
exports.bosses4.UPGRADES_TIER_1 = [exports.ragnarok, exports.Celestialeternal, exports.legionarycrasher, exports.bosses3];
exports.bossesspecial.UPGRADES_TIER_1 = [exports.RogueCelesTyr, exports.RogueCelesAlviss, exports.RogueCelesFiolnir];
exports.misc.UPGRADES_TIER_1 = [
  exports.fallbooster,
  exports.falloverlord,
  exports.defender,
  exports.summoner,
  exports.guardian,
  exports.CLOSER,
  exports.whywhywhy,
  exports.mini_ac,
  exports.pain,
  exports.annifac,
];
exports.betabosses.UPGRADES_TIER_3 = [
exports.theBelt, exports.SolarBoss
];