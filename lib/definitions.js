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
        let skills = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let s in args) {
            if (!args.hasOwnProperty(s)) continue;
            skills[skcnv[s]] = Math.round(config.MAX_SKILL * args[s]);
        }
        return skills;
    };
})();

const g = { // Gun info here 
    trap:               [36,    1,     0.25,   0.6,    1,      0.75,   1,      5,      1,      1,      1,      15,     3], 
  autodrone:             [1,     1,     1,      1,      1.25,   1.15,   1,      1,      0.85,   99999999999999999999999999999999999999999999999999999999999999999,      1,      1,      1.1],
    elitemurder:        [2.2,   2,     0.5,    1,      2,      4,      1.2,    0.65,   0.5,    1,      2,      1,      3],
    sniperX:             [1.85,  1,     0.25,   1,      1,      0.9,    1.1,    0.65,    1.5,    1,      1.5,    0.2,    1.15],
    sniperXX:             [9.5,  1,     0.25,   1,      1,      0.9,    1.1,    0.65,    1.5,    1,      1.5,    0.2,    1.15],
    trap2:               [90,    1,     0.25,   0.6,    1,      0.75,   1,      5,      1,      1,      1,      15,     3], 
    swarm:              [18,    0.25,  0.05,   0.4,    1,      0.75,   1,      4,      1,      1,      1,      5,      1],
  manybee:              [9,    0.25,  0.05,   0.4,    1,      0.2,   1,      4,      1,      1,      1,      5,      1],
  manybee2:              [0.7,    0.25,  0.05,   0.4,    1,      0.2,   1,      4,      1,      1,      1,      5,      1],
  swarm2: [14, 0.25, 0.05, 0.4, 1, 1.15, 1, 4, 1, 1, 1, 5, 1],
  swarms:              [60,    0.25,  0.05,   0.4,    1,      0.75,   1,      4,      1,      1,      1,      5,      1],
    drone:              [50,    0.25,  0.1,    0.6,    1,      1,      1,      2,      1,      1,      1,      0.1,    1],
    droneboss:          [70,    0.25,  0.1,    0.6,    1,      4,      1,     0.45,      1,      1,      1,      0.1,    1],
    pound3:             [2,     0,     1,      1,      1,      0.8,      1,      0.85,   0.8,    1,      1.5,    1,      1.15], 
    summoner:           [2,     0,  0.1,    0.6,    1,      0.7,      1,      2,      1,      1,      1,      0.1,    1],
    stream3:            [0.6,   0,   1,      1,      1,      1.4,   1,      0.75,   1,      1,      1,      1,      1],    
    factory:            [60,    1,     0.1,    0.7,    1,      0.75,   1,      3,      1,      1,      1,      0.1,    1], 
    basic:              [18,    1.4,   0.1,    1,      1,      0.75,   1,      4.5,    1,      1,      1,      15,     1],
    BLM:              [18,    1.4,   0.1,    1,      1,      0.75,   1,      2.5,    1,      1,      1,      15,     1],
    basicxx:              [1,    1.4,   0.1,    1,      1,      0.75,   1,      4.5,    1,      1,      1,      360,     1],
    theia:         [3.2,  1,     0.25,   1,      1.15,   1,      1.1,    1.18,   1.18,   1,      3,      1,      1.3],
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    blank:              [1,     1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1],
        spam:           [1.1,   1,     1,      1.05,   1,      1.1,    1,      0.9,    0.7,    1,      1,      1,      1.05],
        spamX:           [0.46,   1,     1,      1.05,   1,      1.9,    1,      0.5,    0.7,    1,      1,      1,      1.05],
        spamXL:           [0.7,   1,     1,      1.05,   1,      0.01,    1,      100000,    0.7,    1,      1,      1,      1.05],
        minion:         [1,     1,     2,      1,      0.4,    0.4,    1.2,    1,      1,      0.75,   1,      2,      1], 
        minion2:         [2.3,     1,     2,      1,      0.4,    0.5,    1.2,    1,      1,      0.75,   1,      2,      1],
        minion3:         [1.2,     1,     2,      1,      0.4,    1,    1.2,    1,      1,      0.75,   1,      2,      1],
        single:         [1.05,  1,     1,      1,      1,      1,      1,      1.05,   1,      1,      1,      1,      1],  
    sniper:             [1.35,  1,     0.25,   1,      1,      0.8,    1.1,    1.5,    1.5,    1,      1.5,    0.2,    1.15],
  sniperswarm:             [3.5,  1,     0.25,   1,      1,      0.8,    1.1,    1.5,    1.5,    1,      1.5,    0.2,    1.15],
  sniperswarm2:             [2.3,  1,     0.25,   1,      1,      0.8,    1.1,    1.5,    1.5,    1,      1.5,    360,    1.15],
  redi:                 [35,  12,     0.25,     1,      1,     35,     10,    3.5,    1.5,    1,      1.5,    0.1,    1.15],
        rifle:          [0.8,   0.8,   1.5,    1,      0.8,    0.8,    0.9,    1,      1,      1,      1,      2,      1],     
        assass:         [1.65,  1,     0.25,   1,      1.15,   1,      1.1,    1.18,   1.18,   1,      3,      1,      1.3],
  assassswarm:         [4,  1,     0.25,   1,      1.15,   1,      1.1,    1.18,   1.18,   1,      3,      1,      1.3],
  assassswarm2:         [2,  1,     0.25,   1,      1.15,   1,      1.1,    1.18,   1.18,   1,      3,      360,      1.3],
        hunter:         [1.5,   0.7,   1,      0.95,   1,      0.9,    1,      1.1,    0.8,    1,      1.2,    1,      1.15], 
            hunter2:    [1,     1,     1,      0.9,    2,      0.5,    1.5,    1,      1,      1,      1.2,    1,      1.1], 
            preda:      [1.4,   1,     1,      0.8,    1.5,    0.9,    1.2,    0.9,    0.9,    1,      1,      1,      1],   
            snake:      [0.4,   1,     4,      1,      1.5,    0.9,    1.2,    0.2,    0.35,   1,      3,      6,      0.5],   
            sidewind:   [1.5,   2,     1,      1,      1.5,    1.7,    1,      0.15,   0.5,    1,      1,      1,      1], 
            rocketeer:   [2.5,   0.5,     1,      1,      1.5,    1.4,    1,      0.15,   0.5,    1,      1,      1,      1],
             rocketeerx:   [4.5,   0.5,     1,      1,      1.5,    1.4,    1,      0.35,   0.5,    1,      1,      1,      1],
            snakeskin:  [0.6,   1,     2,      1,      0.5,    0.5,    1,      1,      0.2,    0.4,    1,      5,      1],
  snakeskin2:  [0.3,   1,     2,      1,      0.5,    1,    1,      1,      0.2,    0.4,    1,      5,      1],
    mach:               [0.5,   0.8,   1.7,    1,      0.7,    0.7,    1,      1,      0.8,    1,      1,      2.5,    1],
  mach2:               [1.15,   0.8,   1.7,    1,      0.7,    0.6,    1,      1,      0.8,    1,      1,      2.5,    1],
        blaster:        [1,     1.2,   1.25,   1.1,    1.5,    1,      0.6,    0.8,    0.33,   0.6,    0.5,    1.5,    0.8], 
        chain:          [1.25,  1.33,  0.8,    1,      0.8,    1,      1.1,    1.25,   1.25,   1.1,    1.25,   0.5,    1.1], 
        mini:           [1.25,  0.6,   1,      0.8,    0.55,   0.45,   1.25,   1.33,   1,      1,      1.25,   0.5,    1.1], 
            stream:     [1.1,   0.6,   1,      1,      1,      0.65,   1,      1.24,   1,      1,      1,      1,      1],
  gay:     [1.1,   0.6,   1,      1,      1,      0.13,   1,      1.24,   1,      1,      1,      1,      1],
            streamx:    [1.1,   2.3,   1,      1,      1,      0.65,   1,      1.24,   1,      1,      1,      1,      1],
  streamgay:    [1.1,   1.5,   1,      1,      1,      0.65,   1,      1.24,   1,      1,      1,      1,      1],
        shotgun:        [8,     0.4,   1,      1.5,    1,      0.4,    0.8,    1.8,    0.6,    1,      1.2,    1.2,    1], 
    flank:              [1,     1.2,   1,      1,      1.02,   0.81,   0.9,    1,      0.85,   1,      1.2,    1,      1],
        tri:            [1,     0.9,   1,      1,      0.9,    1,      1,      0.8,    0.8,    0.6,    1,      1,      1],  
            trifront:   [1,     0.2,   1,      1,      1,      1,      1,      1.3,    1.1,    1.5,    1,      1,      1],  
            thruster:   [1,     1.5,   2,      1,      0.5,    0.5,    0.7,    1,      1,      1,      1,      0.5,    0.7],
           thrusterx:   [0.4,     1.3,   2,      1,      0.5,    0.1,    0.7,    1,      1,      1,      1,      0.5,    0.7], 
        auto: /*pure*/  [1.8,   0.75,  0.5,    0.8,    0.9,    0.6,    1.2,    1.1,    1,      0.8,    1.3,    1,      1.25],
            five:       [1.15,  1,     1,      1,      1,      1,      1,      1.05,   1.05,   1.1,    2,      1,      1],   
            autosnipe:  [1,     1,     1,      1.4,    2,      1,      1,      1,      1,      1,      1,      1,      1],   
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */ 
    pound:              [2,     2,     1,      1,      1,      2,      1,      0.85,   0.8,    1,      1.5,    1,      1.15],
    poundsusus:         [2,     2,     1,      1,      1,      0.85,   1,       1.3,   0.8,    1,      1.5,    1,      1.15],
  poundsususs:         [1.4,     2,     1,      1,      1,      0.35,   1,       1,   0.8,    1,      1.5,    1,      1.15],
    destroysussus:      [2.2,   2,     0.5,    1,      2,      0.75,      1.2,    1,   0.5,    1,      2,      1,      3],
        destroy:        [2.2,   2,     0.5,    1,      2,      1.9,      1.2,    0.65,   0.5,    1,      2,      1,      3],
  destroyrag:        [2,   2,     0.5,    1,      2,      1.9,      1.2,    1.16,   0.5,    1,      2,      1,      3],
            anni:       [0.85,  1.25,  1,      1,      1,      0.95,      1,      1,      1,      1,      1,      1,      1],  
  annirag:       [0.85,  1.25,  1,      1,      1,      0.95,      1,      1.2,      1,      1,      1,      1,      1],
            hive:       [0.65,   0.8,   1,      0.8,    0.7,    0.3,    1,      1,      0.6,    1,      1,      1,      1],
        arty:           [1.2,   0.7,   1,      0.9,    1,      1,      1,      1.15,   1.1,    1,      1.5,    1,      1],
  arty92:           [2.5,   0.7,   1,      0.9,    1,      1.4,      1,      1.15,   1.1,    1,      1.5,    1,      1],
  arty93:           [2.5,   0.7,   1,      0.9,    1,      1.4,      1,      0.9,   1.1,    1,      1.5,    1,      1],
      arty3:           [1.6,   0.7,   1,      0.9,    1,      1.75,      1,      1.15,   1.1,    1,      1.5,    1,      1], 
            mortar:     [1.2,   1,     1,      1,      1.1,    1,      1,      0.8,    0.8,    1,      1,      1,      1],   
            spreadmain: [0.78125, 0.25, 0.5,   1,      0.5,    1,      1,   1.5/0.78, 0.9/0.78,1,      1,      1,      1], 
            spread:     [1.5,   1,     0.25,   1,      1,      1,      1,      0.7,    0.7,    1,      1,      0.25,   1],   
            skim:       [2.33,  0.8,   0.8,    0.9,    1.35,   0.8,    2,      0.3,    0.3,    1,      1,      1,      1.1],   
    twin:               [1,     0.5,   0.9,    1,      0.9,    0.7,    1,      1,      1,      1,      1,      1.2,    1],
        bent:           [1.1,   1,     0.8,    1,      0.9,    1,      0.8,    1,      1,      1,      0.8,    0.5,    1],    
        triple:         [1.2,   0.667, 0.9,    1,      0.85,   0.85,   0.9,    1,      1,      1,      1.1,    0.9,    0.95], 
  triplex:              [2.4, 0.6, 0.9,    1,      0.85,   0.65,   0.9,    1,      1,      1,      1.1,    0.9,    0.95],
  bitsussy:              [3.3, 0.6, 0.9,    1,      0.85,   0.55,   0.9,    1,      1,      1,      1.1,    0.9,    0.95],
            quint:      [1.5,   0.667, 0.9,    1,      1,      1.2,      0.9,    1,      1,      1,      1.1,    0.9,    0.95], 
            dual:       [2,     1,     0.8,    1,      1.5,    1,      1,      1.3,    1.1,    1,      1,      1,      1.25], 
        double:         [1,     1,     1,      1,      1,      0.9,    1,      1,      1,      1,      1,      1,      1],
            hewn:       [1.25,  1.5,   1,      1,      0.9,    0.85,   1,      1,      0.9,    1,      1,      1,      1],
        puregunner:     [1,     0.25,  1.5,    1.2,    1.35,   0.25,   1.25,   0.8,    0.65,   1,      1.5,    1.5,    1.2],
            machgun:    [0.66,  0.8,   2,      1,      1,      0.75,   1,      1.2,    0.8,    1,      1,      2.5,    1], 
    gunner:             [1.25,  0.25,  1.5,    1.1,    1,      0.35,   1.35,   0.9,    0.8,    1,      1.5,    1.5,    1.2],
  gunner2:             [1.35,  0.25,  1.5,    1.1,    1,      0.35,   1.35,   0.9,    0.8,    1,      1.5,    1.5,    1.2],
        power:          [1,     1,     0.6,    1.2,    1,      1,      1.25,   2,      1.7,    1,      2,      0.5,    1.5], 
            nail:       [0.85,  2.5,   1,      0.8,    1,      0.7,    1,      1,      1,      1,      2,      1,      1],       
        fast:           [1,     1,     1,      1,      1,      1,      1,      1.2,    1,      1,      1,      1,      1], 
    turret:             [2,     1,     1,      1,      0.8,    0.6,    0.7,    1,      1,      1,      0.1,    1,      1], 
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    battle:             [1,     1,     1,      1,      1.25,   1.15,   1,      1,      0.85,   1,      1,      1,      1.1],
  battleX:             [1.4,     1,     1,      1,      1.25,   0.7,   1,      1,      0.85,   1,      1,      1,      1.1],
  swarmX:              [23,    0.25,  0.05,   0.4,    1,      0.5,   1,      4,      1,      1,      1,      5,      1], 
  swarmXX:              [35,    0.25,  0.05,   0.4,    1,      0.5,   1,      4,      1,      1,      1,      5,      1], 
        bees:           [1.3,   1,     1,      1.4,    1,      1.5,    0.5,    3,      1.5,    1,      0.25,   1,      1],   
        carrier:        [1.5,   1,     1,      1,      1,      0.8,    1,      1.3,    1.2,    1.2,    1,      1,      1],
    hexatrap:           [1.3,   1,     1.25,   1,      1,      1,      1,      0.8,    1,      0.5,    1,      1,      1],     
    block:              [1.1,   2,     0.1,    1.5,    2,      1,      1.25,   1.5,    2.5,    1.25,   1,      1,      1.25],
        construct:      [1.3,   1,     1,      0.9,    1,      1,      1,      1,      1.1,    1,      1,      1,      1], 
        boomerang:      [3.4,   1,     1,      1,      0.5,    0.5,    2.4,      0.75,   0.75,   1.333,  1,      1,      1], 
    over:               [1.25,  1,     1,      0.85,   0.7,    0.8,    1,      1,      0.9,    1,      2,      1,      1],
    overs:               [1.25,  1,     1,      0.85,   0.7,    1.3,    1,      1,      0.9,    1,      2,      1,      1],
  overboss:               [1.45,  1,     1,      0.85,   0.7,   4,    1,      0.65,      0.9,    1,      2,      1,      1],
        meta:           [1.333, 1,     1,      1,      1,      0.667,  1,      1,      1,      1,      1,      1,      1],   
        weak:           [2,     1,     1,      1,      0.6,    0.6,    0.8,    0.5,    0.7,    0.25,   0.3,    1,      1],   
        master:         [3,     1,     1,      0.7,    0.4,    0.7,    1,      1,      1,      0.1,    0.5,    1,      1],
  fallenoverlord: [0.2, 1, 1, 0.65, 1, 1.78, 1, 1, 1, 1, 1, 1, 1],
        sunchip:        [5,     1,     1,      1.4,    0.5,    0.4,    0.6,    1,      1,      1,      0.8,    1,      1],     
    babyfactory:        [1.5,   1,     1,      1,      1,      1,      1,      1,      1.35,   1,      1,      1,      1], 
    lowpower:           [1,     1,     2,      1,      0.5,    0.5,    0.7,    1,      1,      1,      1,      0.5,    0.7], 
    halfrecoil:         [1,     0.5,   1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    morerecoil:         [1,     1.15,  1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1],
    muchmorerecoil:     [1,     1.35,  1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1],
    lotsmorrecoil:      [1,     1.8,   1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    tonsmorrecoil:      [1,     4,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    doublereload:       [0.5,   1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1],  
    morereload:         [0.75,  1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    halfreload:         [2,     1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    norecoil: [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    lessreload:         [1.5,   1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    threequartersrof:   [1.333, 1,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    morespeed:          [1,     1,     1,      1,      1,      1,      1,      1.3,    1.3,    1,      1,      1,      1], 
    bitlessspeed:       [1,     1,     1,      1,      1,      1,      1,      0.93,   0.93,   1,      1,      1,      1], 
    slow:               [1,     1,     1,      1,      1,      1,      1,      0.7,    0.7,    1,      1,      1,      1], 
    halfspeed:          [1,     1,     1,      1,      1,      1,      1,      0.5,    0.5,    1,      1,      1,      1],
    notdense:           [1,     1,     1,      1,      1,      1,      1,      1,      1,      1,      0.1,    1,      1],
    halfrange:          [1,     1,     1,      1,      1,      1,      1,      1,      1,      0.5,    1,      1,      1], 
    fake:               [1,     1,     1,   0.00001, 0.0001,   1,      1,   0.00001,   2,      0,      1,      1,      1], 
    /***************** RELOAD RECOIL SHUDDER  SIZE   HEALTH  DAMAGE   PEN    SPEED    MAX    RANGE  DENSITY  SPRAY   RESIST  */
    op:                 [0.5,   1.3,   1,      1,      4,      10000,      4,      3,      2,      1,      5,      0.1,      1],       
    fast:               [0.5,   5,     1,      1,      1,      1,      1,      1,      1,      1,      1,      1,      1], 
    protectorswarm:     [5,  0.000001, 1,      1,      100,    1,      1,      1,      1,     0.5,     5,      1,      10], 
    cool:              [180,    1.4,   0.1,    1,      1,      0.075,   1,      3.5,    1,      1,      1,      115,     1],
    gunpowder:          [2,  1,     0.25,   1,      1,      0.8,    1.1,    0,    1.5,    1,      1.5,    0.2,    1.15],
};

const dfltskl = 8;

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
    COLOR: 15,
    BODY: {
        DAMAGE: 2 * basePolygonDamage,
        DENSITY: 30,
        HEALTH: 50 * basePolygonHealth,
        RESIST: Math.pow(1.25, 2),
        SHIELD: 20 * basePolygonHealth,
        REGEN: 0.2,
    },
    DRAW_HEALTH: false,
    GIVE_KILL_MESSAGE: false,
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
    DRAW_HEALTH: false,
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
    DRAW_HEALTH: false,
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
    DRAW_HEALTH: false,
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
    COLOR: 10,
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
    DRAW_HEALTH: false,
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
    DRAW_HEALTH: false,
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
    DRAW_HEALTH: false,
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
    DRAW_HEALTH: false,
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
    exports.trap2 = {
        PARENT: [exports.obstacle],
        TYPE: "bullet",
        SIZE: 25,
        SHAPE: -7,
        LABEL: "Gravel",
        HITS_OWN_TYPE: "push",
        BODY: {
          PUSHABILITY: 1,
        }
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
exports.bullet4 = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        PENETRATION: 1,
        SPEED: 3.75,
        RANGE: 120,
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
exports.flame = {
    LABEL: 'Bullet',
    TYPE: 'bullet',
    SHAPE: 4,
    ACCEPTS_SCORE: false,
    COLOR: 12,
    BODY: {
        PENETRATION: 1,
        SPEED: 12.75,
        RANGE: 100,
        DENSITY: 1.25,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 6 * wepDamageFactor,
        PUSHABILITY: 0.3,
    },
  
    FACING_TYPE: 'smoothWithMotion',
    CAN_GO_OUTSIDE_ROOM: true,
    HITS_OWN_TYPE: 'never',
    // DIE_AT_LOW_SPEED: true,
    DIE_AT_RANGE: true,
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
exports.hpbullet = {
    LABEL: 'Heal Bullet',
    TYPE: 'bullet',
    ACCEPTS_SCORE: false,
    BODY: {
        TEAM: -100,
        PENETRATION: 1,
        SPEED: 0.45,
        RANGE: 40,
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
exports.hepullet = {
  PARENT: [exports.bullet],
  LABEL: "heal bullet",
  TYPE: "bullet",
   COLOR: 0,
   INDEPENDENT: true,
  BODY: {
    HITS_OWN_TYPE: 'hard',
    DAMAGE: -7 * wepDamageFactor
  }
};
    exports.casing = {
        PARENT: [exports.bullet],
        LABEL: 'Shell',
        TYPE: 'swarm',
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
    exports.bee = {
        PARENT: [exports.swarm],
        PERSISTS_AFTER_DEATH: true, 
        SHAPE: 4, 
        LABEL: 'Drone',
        HITS_OWN_TYPE: 'hardWithBuffer',
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
        RANGE: 200,
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
        DAMAGE: 2 * wepDamageFactor,
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
exports.blocketernal = {
        LABEL: 'Set Trap',
        PARENT: [exports.trap],
        SHAPE: -4,
        MOTION_TYPE: 'motor',
        BODY: {
            SPEED: 1,
            DENSITY: 5,
            RANGE: 150,
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
        DAMAGE: 1.6 * wepDamageFactor,
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
        DAMAGE: 1.7 * wepDamageFactor,
        SPEED: 1,
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
        DAMAGE: 1.2 * wepDamageFactor,
        SPEED: 1,
        RANGE: 200,
        DENSITY: 0.03,
        RESIST: 1.5,
        FOV: 0.8,
    },
    HITS_OWN_TYPE: 'hard',
    DRAW_HEALTH: true,
    CLEAR_ON_MASTER_UPGRADE: true,
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
                    TYPE: [exports.blocketernal, { PERSISTS_AFTER_DEATH: true, }],
                }, }, {
            POSITION: [  14,     6,      1,      0,      2,     270,    0.5,  ],  
                PROPERTIES: {
                    AUTOFIRE: true,
                    SHOOT_SETTINGS: combineStats([g.basic, g.skim, g.doublereload, g.lowpower, g.morerecoil, g.morespeed]),
                    TYPE: [exports.blocketernal, { PERSISTS_AFTER_DEATH: true, }],
                }, },
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
  BODY: {
    PENETRATION: 1,
        SPEED: 1,
        RANGE: 120,
        DENSITY: 2,
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
  },
  FACING_TYPE: "turnWithSpeed",
  INDEPENDENT: true,
  CONTROLLERS: ["alwaysFire", "nearestDifferentMaster", "targetSelf"],
  AI: { NO_LEAD: true },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [7, 9.5, 0.6, 7, 0, 360, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.poundsususs]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 90, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.poundsususs]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    },
    {
      POSITION: [7, 9.5, 0.6, 7, 0, 180, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.poundsususs]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    },
        {
      POSITION: [7, 9.5, 0.6, 7, 0, 270, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.poundsususs]),
        TYPE: [exports.bullet, { PERSISTS_AFTER_DEATH: true }]
      }
    },
  ]
};
    exports.racket = {
        PARENT: [exports.bullet],
      PARENT: [exports.swarm],
        PERSISTS_AFTER_DEATH: true, 
        LABEL: 'Drone',
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
    exports.racketex = {
        PARENT: [exports.bullet],
        LABEL: 'heatmissle',
        INDEPENDENT: false,
          MOTION_TYPE: 'swarm',
    FACING_TYPE: 'smoothWithMotion',
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    CRAVES_ATTENTION: true,
        BODY: {
            RANGE: 12000,
        },  
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,    5,     1,     8,      0,     180,    5,   ], 
                PROPERTIES: {
                    AUTOFIRE: true,
                    STAT_CALCULATOR: gunCalcNames.thruster,
                    SHOOT_SETTINGS: combineStats([
                        g.basic, g.mach, g.mach, g.snake, g.snakeskin,
                    ]),
                    TYPE: [exports.bullet4, { PERSISTS_AFTER_DEATH: true, }],
                },
        }          
        ],
    };
 exports.racketx = {
        PARENT: [exports.bullet],
        LABEL: 'Rocket',
        INDEPENDENT: true,
   CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
        BODY: {
            RANGE: 120,
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
        HEALTH: 0.33 * wepHealthFactor,
        DAMAGE: 4 * wepDamageFactor,
        PUSHABILITY: 0.3,
        },  
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   12,    11,     1.4,     5,      0,     180,   7.75,   ], 
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
                }, 
                }, 
               
        ],
    };
    exports.colony = {
        PARENT: [exports.bullet],
        LABEL: 'colony',
        BODY: {
            RANGE: 90,
            FOV: 0.5,
        },  
        FACING_TYPE: 'autospin',
        INDEPENDENT: true,
        CONTROLLERS: ['alwaysFire', 'nearestDifferentMaster', 'targetSelf',],
        AI: { NO_LEAD: true, },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   7,    9.5,    0.6,     7,      0,      108,     0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload,  g.pound, g.destroy,]),
                    TYPE: exports.hive,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      180,    0,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.pound, g.destroy,]),
                    TYPE: exports.hive,
                    STAT_CALCULATOR: gunCalcNames.swarm,  
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      252,    0,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.pound, g.destroy,]),
                    TYPE: exports.hive,
                    STAT_CALCULATOR: gunCalcNames.swarm, 
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      324,    0,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.pound, g.destroy,]),
                    TYPE: exports.hive,
                    STAT_CALCULATOR: gunCalcNames.swarm, 
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      36,     0,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.halfreload, g.halfreload, g.pound, g.destroy,]),
                    TYPE: exports.hive,
                    STAT_CALCULATOR: gunCalcNames.swarm,  
                }, 
                }, 
               
        ],
    };
//hey ethan, what u doin?
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
            POSITION: [   7,    9.5,    1.4,     7,      0,      0,     1,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                   TYPE: exports.bullet5,
                  STAT_CALCULATOR: gunCalcNames.bullet5,    
                }, }, {
            POSITION: [   7,    9.5,    1.4,     7,      0,      90,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5,  
                }, }, {
            POSITION: [   7,    9.5,    1.4,     7,      0,      180,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                }, }, {
            POSITION: [   7,    9.5,    1.4,     7,      0,      270,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               {
            POSITION: [   7,    9.5,    1.4,     7,      0,      45,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               {
            POSITION: [   7,    9.5,    1.4,     7,      0,      130,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               {
            POSITION: [   7,    9.5,    1.4,     7,      0,      225,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               {
            POSITION: [   7,    9.5,    1.4,     7,      0,      315,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   7,    9.5,    1.4,     7,      0,      0,     1,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5,    
                }, }, {
            POSITION: [   7,    9.5,    1.4,     7,      0,      90,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5,  
                }, }, {
            POSITION: [   7,    9.5,    1.4,     7,      0,      180,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                }, }, {
            POSITION: [   7,    9.5,    1.4,     7,      0,      270,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               {
            POSITION: [   7,    9.5,    1.4,     7,      0,      45,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               {
            POSITION: [   7,    9.5,    1.4,     7,      0,      130,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               {
            POSITION: [   7,    9.5,    1.4,     7,      0,      225,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
               {
            POSITION: [   7,    9.5,    1.4,     7,      0,      315,    1,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunpowder, g.gunpowder]),
                            TYPE: exports.bullet5,
                    STAT_CALCULATOR: gunCalcNames.bullet5, 
                },}, 
        ],
    };
exports.testbedsuprise = {
        PARENT: [exports.bullet],
        LABEL: 'Hive',
        BODY: {
            RANGE: 60,
            FOV: 0.5,
            DENSITY: 5,
        },  
        FACING_TYPE: 'turnWithSpeed',
        INDEPENDENT: true,
        CONTROLLERS: ['alwaysFire', 'nearestDifferentMaster', 'targetSelf',],
        MOTION_TYPE: "motor",
        AI: { NO_LEAD: true, },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   7,    9.5,    0.6,     7,      0,      108,     0,   ],  }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      180,    0.2,  ],  }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      252,    0.4,  ],  }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      324,    0.6,  ], }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      36,     0.8,  ], }, 
        ],
    };
exports.betasuprise = {
        PARENT: [exports.bullet],
        LABEL: 'Hive',
        BODY: {
            RANGE: 60,
            FOV: 0.5,
            DENSITY: 5,
        },  
        FACING_TYPE: 'turnWithSpeed',
        INDEPENDENT: true,
        CONTROLLERS: ['alwaysFire', 'nearestDifferentMaster', 'targetSelf',],
        MOTION_TYPE: "motor",
        AI: { NO_LEAD: true, },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   7,    9.5,    0.6,     7,      0,      180,     0,   ],  }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      360,    0.2,  ],  }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      270,    0.4,  ],  }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      90,    0.6,  ], },
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
    FACING_TYPE: 'toTarget',
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
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound, g.morereload, g.morereload]),
                    TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.fixedReload,
                }, }, {
            POSITION: [  20,     6,      1,      0,     -5,      0,     0.5,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.power, g.morerecoil, g.turret, g.fast, g.mach, g.pound, g.morereload, g.morereload]),
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
                    SHOOT_SETTINGS: combineStats([g.basic, g.triplex]),
                    TYPE: exports.bullet,
                    STAT_CALCULATOR: gunCalcNames.fixedReload,
                }, }, {            
            POSITION: [  20,     7,      1,      0,     5.75,    0,     0.5,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.triplex]),
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
exports.mercury = {
    PARENT: [exports.genericTank],
    LABEL: 'mercury',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    COLOR: 16,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  12,    10,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            }, }
    ],
};
exports.venus = {
    PARENT: [exports.genericTank],
    LABEL: 'venus',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    COLOR: 16,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  15,    10,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            }, }
    ],
};
exports.earth = {
    PARENT: [exports.genericTank],
    LABEL: 'earth',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    COLOR: 8,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  15,    10,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            }, }
    ],
};
exports.mars = {
    PARENT: [exports.genericTank],
    LABEL: 'mars',
    BODY: {
        FOV: 2,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    COLOR: 16,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  15,    10,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            }, }
    ],
};
exports.jupiter = {
    PARENT: [exports.genericTank],
    LABEL: 'jupiter',
  COLOR: 7,
    BODY: {
        FOV: 5,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    COLOR: 16,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    10,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            },
    }
    ],
};
exports.saturn = {
    PARENT: [exports.genericTank],
    LABEL: 'saturn',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    COLOR: 13,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    10,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            }, }
    ],
};
exports.uranus = {
    PARENT: [exports.genericTank],
    LABEL: 'uranus',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    COLOR: 15,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    10,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            }, }
    ],
};
exports.neptune = {
    PARENT: [exports.genericTank],
    LABEL: 'neptune',
    BODY: {
        FOV: 3,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    COLOR: 14,
    GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
        POSITION: [  22,    10,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.flank, g.auto]),
                TYPE: exports.bullet,
            }, }
    ],
};
exports.sol = {
    PARENT: [exports.genericTank],
    LABEL: 'sol',
    BODY: {
        FOV: 1,
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
//Done :)
//I am exporting now
exports.theBelt = {
    PARENT: [exports.genericTank],
    LABEL: 'thebelt',
    BODY: {
        FOV: 1,
    },
    CONTROLLERS: ['canRepel', 'onlyAcceptInArc', 'mapAltToFire', 'nearestDifferentMaster'], 
    COLOR: 16,
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

//Sun spikes?
//if i d the normal spike thing it chrashes
//watch this
// i will do it on sol
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
           POSITION: [   4,     7,    1.4,      18.5,      0,      0,      0,   ], 
            }, {
            POSITION: [   11,     10,    0,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroy, g.anni]),
                    TYPE: exports.hpbullet,
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
                   POSITION: [  10,    16,    -0.5,     9,      0,      0,      0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniperswarm, g.theia]),
                            TYPE: exports.theia,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                         {
                    POSITION: [  17,    15,      -1.3,      0,      0,      0,      0,  ], 
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
    "canRepel",
    "onlyAcceptInArc",
    "mapAltToFire",
    "nearestDifferentMaster"
  ],
  COLOR: 16,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [  10,    16,    -0.5,     9,      0,      0,      0,  ], 
        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.rocketeerx]),
                            TYPE: exports.racketgay,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                         {
                    POSITION: [  17,    15,      -1.3,      0,      0,      0,      0,  ],
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
      POSITION: [  10,    14,    -0.5,     9,      0,      0,      0,  ], 
                        }, {
                    POSITION: [  17,    15,      1,      0,      0,      0,      0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniperswarm, g.assassswarm]),
                            TYPE: exports.hypermissile,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
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
                    SHOOT_SETTINGS: combineStats([g.swarms, g.hive, g.bees]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm,    
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      180,    0.2,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarms, g.hive, g.bees]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm,  
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      252,    0.4,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarms, g.hive, g.bees]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm, 
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      324,    0.6,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarms, g.hive, g.bees]),
                    TYPE: exports.bee,
                    STAT_CALCULATOR: gunCalcNames.swarm, 
                }, }, {
            POSITION: [   7,    9.5,    0.6,     7,      0,      36,     0.8,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.swarms, g.hive, g.bees]),
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
                    SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
                    TYPE: exports.bullet,
                }, }, {
            POSITION: [  18,     6,      1,      0,     5.5,     0,     0.5,  ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.twin]),
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
exports.spikeBody = {
  
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 9,
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
exports.cyclones = {
    LABEL: '',
    CONTROLLERS: ['reversespin'], 
    COLOR: 6,
    SHAPE: 12,
    INDEPENDENT: false,
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
        SPEED: 1,
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
        FOV: 0.5,
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
    },
    DIE_AT_RANGE: true, 
    TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
        POSITION: [  11,     0,      0,      0,     360,  1], 
            TYPE: exports.pillboxTurret,
        }
    ]
};
exports.pillboxlegion = {
    LABEL: 'Pillbox',
    PARENT: [exports.trap],
    SHAPE: -4,
    MOTION_TYPE: 'motor',    
    CONTROLLERS: ['nearestDifferentMaster'],
    INDEPENDENT: true,
    BODY: {
        SPEED: 0.85,
        DENSITY: 5,
        RANGE: 120,
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
exports.basics = {
    PARENT: [exports.genericTank],
    LABEL: 'reset stuff',
    LEVEL: -1,
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
    SPEED: base.SPEED* 1.3
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
       /*PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.op, g.stream]),
            TYPE: exports.bullet81273
        },*/ }, 
    ],
};
        exports.testbed = {
            PARENT: [exports.genericTank],
            LABEL: 'DEVELOPER',
            RESET_UPGRADES: true,
            COLOR: 47,
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
            SKILL: [0,0,0,0,0,0,0,0,0,0],
            SKILL_CAP: [dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl],
            SHAPE: 0,
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                    TYPE: [exports.bullet, { SHAPE: 5, }],
                }, }, {
                                    POSITION: [  1,    6,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basicxx, g.sniperswarm2, g.assassswarm2]),
                    TYPE: exports.testbedsuprise,
                    AUTOFIRE: false,
                }, }, {
                                    POSITION: [  1,    6,    -1.4,     0,      0,      270,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basicxx, g.sniperswarm2, g.assassswarm2]),
                    TYPE: exports.testbedsuprise,
                    AUTOFIRE: false,
                }, }, {
                                    POSITION: [  1,    6,    -1.4,     0,      0,      90,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basicxx, g.sniperswarm2, g.assassswarm2]),
                    TYPE: exports.testbedsuprise,
                    AUTOFIRE: false,
                }, }, {
                                    POSITION: [  1,    6,    -1.4,     0,      0,      180,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basicxx, g.sniperswarm2, g.assassswarm2]),
                    TYPE: exports.testbedsuprise,
                    AUTOFIRE: false,
                }, }
                  ],
        };
exports.betatester = {
            PARENT: [exports.genericTank],
            LABEL: 'BETA-TESTER',
            RESET_UPGRADES: true,
            LEVEL: 45,
            COLOR: 52,
            BODY: { // def
                SHIELD: 1000,
                REGEN: 10,
                HEALTH: 100,
                DAMAGE: 10,
                DENSITY: 20,
                FOV: 0.85,
            },
            HAS_NO_RECOIL: true,
            SKILL: [0,0,0,0,0,0,0,0,0,0],
            SKILL_CAP: [dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl, dfltskl],
            SHAPE: 0,
            TURRETS: [],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  18,    10,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.op]),
                    TYPE: [exports.bullet, { SHAPE: 5, }],
                }, }, {
                                    POSITION: [  1,    6,    -1.4,     0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basicxx, g.sniperswarm2, g.assassswarm2]),
                    TYPE: exports.betasuprise,
                    AUTOFIRE: false,
                }, }, {
                                    POSITION: [  1,    6,    -1.4,     0,      0,      270,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basicxx, g.sniperswarm2, g.assassswarm2]),
                    TYPE: exports.betasuprise,
                    AUTOFIRE: false,
                }, }, {
                                    POSITION: [  1,    6,    -1.4,     0,      0,      90,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basicxx, g.sniperswarm2, g.assassswarm2]),
                    TYPE: exports.betasuprise,
                    AUTOFIRE: false,
                }, }, {
                                    POSITION: [  1,    6,    -1.4,     0,      0,      180,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basicxx, g.sniperswarm2, g.assassswarm2]),
                    TYPE: exports.betasuprise,
                    AUTOFIRE: false,
                }, }
                  ],
        };
        exports.sentries = {
            PARENT: [exports.genericTank],
            LABEL: 'Sentries',
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
            SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
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
            SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
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
            SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
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
            SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
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
            SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
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
            SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
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
            SKILL: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
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
                    POSITION: [  19,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.single]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    }
                ],
            };  

        let smshskl = 13;
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
exports.autosmashragnarok = {
            PARENT: [exports.bullet],
            LABEL: 'Auto-Smasher',
            SHAPE: 0,
            COLOR: 0,
            BODY: {
                FOV: base.FOV * 1.05,
                DENSITY: 2,
                DAMAGE: 24,
                HEALTH: 10,
                SPEED: 1,
            },
            TURRETS: [{ /** SIZE     X       Y     ANGLE    ARC */
                POSITION: [  21.5,   0,      0,      0,     360,  0,], 
                TYPE: exports.smasherBody,
            }],
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
                LABEL: 'WeirdSpike',
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
            exports.smasherragnarok = makeAuto(exports.autosmashragnarok, 'Auto-Smasher', { type: exports.oldAutoSmasherTurret, size: 11,});
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
exports.funnyX = {
        PARENT: [exports.genericTank],
  LABEL: 'regular visitor',
   SKILL: [8,8,8,8,8,8,8,8,8,0],
  CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
        COLOR: 6,
        SHAPE: 4,
        BODY: {
          HEALTH: 3000,
        },
       BROADCAST_MESSAGE: "A pp has left",
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
exports.funny = {
        PARENT: [exports.genericTank],
        LABEL: 'nothing to see here',
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
                        TYPE: exports.bullet,
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
/** 
ENABLE AI ON TANKS: code = enableis
           POSITION: [  1,    0.01,     1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                TYPE: exports.bulletenableai,
**/
    exports.flamer = {
        PARENT: [exports.genericTank],
        LABEL: 'Flamethrower',
        BODY: {
            ACCELERATION: base.ACCEL * 0.7, 
            FOV: base.FOV * 1.2,
        },
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  24,    8.5,     1,      0,      0,      0,      0,   ], 

            }, {
              POSITION: [  6,    2,     1,      25,      4.25,      0,      0,   ], 
            },{
              POSITION: [  6,    2,     1,      25,      -4.25,      0,      0,   ],
            },{
               POSITION: [  2,    8.5,     1,      31,      0,      0,      0,   ], 
                          PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.mach, g.gunner, g.stream3, g.stream3]),
                TYPE: exports.flame,
            },}
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
exports.Longer = {
                PARENT: [exports.genericTank],
                LABEL: 'Rangerx2',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.5,
                    SPEED: base.SPEED * 0.8,
                    FOV: 
                  base.FOV * 2,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  45,    8.5,     1,      0,      0,      0,      0,   ], 
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
                LABEL: 'Rangerx50',
                DANGER: 7,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.5,
                    SPEED: base.SPEED * 0.8,
                    FOV: 
                  base.FOV * 3,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,    8.5,     1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
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
                    POSITION: [  7,    14,    1,    14,      0,      0,      0,  ], 
                  PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.rocketeer]),
                            TYPE: exports.racketx,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, }, {
                    POSITION: [  18,    14,    -1.25,     0,      0,      0,      0,  ], 
                        },
                ],
            };
    exports.director = {
        PARENT: [exports.genericTank],
        LABEL: 'Director',  
        STAT_NAMES: statnames.drone,
        DANGER: 5,
        BODY: {
            ACCELERATION: base.ACCEL * 0.75,
            FOV: base.FOV * 1.1,
        },
        MAX_CHILDREN: 5,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,     12,    1.2,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                    TYPE: exports.drone,
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
            exports.sanc = {
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
                        TYPE: exports.SusGun,
                            }, {
                    POSITION: [  16,     1,      0,     120,     0, 0], 
                        TYPE: exports.SusGun
                            }, {
                    POSITION: [  16,     1,      0,     240,     0, 0], 
                        TYPE: exports.SusGun,
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
                LABEL: 'Mothership',
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
                LABEL: '',
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
        SHOOT_SETTINGS: combineStats([g.manybee, g.battle, g.carrier]),
        TYPE: exports.beeTwT,
      STAT_CALCULATOR: gunCalcNames.swarm,          
                        }, }, {
      POSITION: [7,  7.5, 0.6, 7, 0, 35, 0.5],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.manybee, g.battle, g.carrier]),
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
            exports.autocruiser = makeAuto(exports.cruiser);
            exports.fortress = {
                PARENT: [exports.genericTank],
                LABEL: 'Fortress', //'Palisade',
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
            LABEL: 'Underseer',
            DANGER: 6,
            STAT_NAMES: statnames.drone,
            BODY: {
                ACCELERATION: base.ACCEL * 0.7,
                SPEED: base.SPEED * 0.9,
                FOV: base.FOV * 1.1,
            },
            SHAPE: 4,
            MAX_CHILDREN: 14,
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
            exports.necromancer = {
                PARENT: [exports.genericTank],
                LABEL: 'Necromancer',
                DANGER: 7,
                STAT_NAMES: statnames.necro,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.15,
                },
                SHAPE: 4,
                FACING_TYPE: 'autospin',
                MAX_CHILDREN: 14,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   5,     12,    1.2,     8,      0,     90,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                            TYPE: exports.sunchip,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.necro,
                        }, }, {
                    POSITION: [   5,     12,    1.2,     8,      0,     270,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip]),
                            TYPE: exports.sunchip,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            STAT_CALCULATOR: gunCalcNames.necro,
                        }, }, {
                    POSITION: [   5,     12,    1.2,     8,      0,      0,     0.25, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.weak, g.doublereload]),
                            TYPE: exports.autosunchip,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            MAX_CHILDREN: 4,
                            STAT_CALCULATOR: gunCalcNames.necro,
                            LABEL: 'Guard',
                        }, }, {
                    POSITION: [   5,     12,    1.2,     8,      0,     180,    0.75  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.sunchip, g.weak, g.doublereload]),
                            TYPE: exports.autosunchip,
                            AUTOFIRE: true,
                            SYNCS_SKILLS: true,
                            MAX_CHILDREN: 4,
                            STAT_CALCULATOR: gunCalcNames.necro,
                            LABEL: 'Guard', 
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
            exports.factory = {
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
                LABEL: 'Sprayer',
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  24,     7,      1,      0,      0,      0,      0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.lowpower, g.mach, g.morerecoil]),
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
exports.ender = {
                PARENT: [exports.genericTank],
                LABEL: 'Death by lag',
                DANGER: 7,
                BODY: {
                    FOV: 1.3,
                },
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  25,     8,      1,      0,      0,      0,      0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.streamgay]),
                            TYPE: exports.boom,
                        }, }, { 
                    POSITION: [  23,     8,      1,      0,      0,      0,     0.2, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.streamgay]),
                            TYPE: exports.boom,
                        }, }, { 
                    POSITION: [  21,     8,      1,      0,      0,      0,     0.4, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.streamgay]),
                            TYPE: exports.boom,
                        }, }, { 
                    POSITION: [  19,     8,      1,      0,      0,      0,     0.6, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.mini, g.streamgay]),
                            TYPE: exports.boom,
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
    exports.heatseekish = {
        PARENT: [exports.genericTank],
        DANGER: 5,
        BODY: {
            ACCELERATION: base.ACCEL * 0.8,
        },
        LABEL: 'test',
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [  20,    12,      1,      0,      0,      0,      0,   ], 
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pound]),
                TYPE: exports.bullet,
            }, },
        ],
    };
            exports.heatseek = {
                PARENT: [exports.genericTank],
                LABEL: 'missle',
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
                            TYPE: exports.racketex,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                        {
                    POSITION: [  18,    14,    -1.1,     0,      0,      0,      0,  ], 
                          
                        },
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
            exports.NUKE = {
                PARENT: [exports.genericTank],
                LABEL: 'NUKE',
                DANGER: 7,
                          HAS_NO_RECOIL: true,
                BODY: {
                    ACCELERATION: base.ACCEL * 0.7,
                    SPEED: base.SPEED * 0.8,
                    FOV: base.FOV * 1.04,
                },
                GUNS: [ {
                    POSITION: [  24,    15,    0.65,    0,      0,      0,      0,  ], 
                                          PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.BOOM,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                       {
                    POSITION: [  24,    15,    0.65,    0,      0,      0,      0,  ], 
                                          PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.BOOM,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                       {
                    POSITION: [  24,    15,    0.65,    0,      0,      0,      0,  ], 
                                          PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.BOOM,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                       {
                    POSITION: [  24,    15,    0.65,    0,      0,      72,      0,  ], 
                                          PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.BOOM,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                       {
                    POSITION: [  24,    15,    0.65,    0,      0,      72,      0,  ], 
                                          PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.BOOM,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                       {
                    POSITION: [  24,    15,    0.65,    0,      0,      72,      0,  ], 
                                          PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.BOOM,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                       {
                    POSITION: [  24,    15,    0.65,    0,      0,      144,      0,  ], 
                                          PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.BOOM,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                       {
                    POSITION: [  24,    15,    0.65,    0,      0,      144,      0,  ], 
                                          PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.BOOM,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                       {
                    POSITION: [  24,    15,    0.65,    0,      0,      144,      0,  ], 
                                          PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.BOOM,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                       {
                    POSITION: [  24,    15,    0.65,    0,      0,      216,      0,  ], 
                                          PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.BOOM,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                       {
                    POSITION: [  24,    15,    0.65,    0,      0,      216,      0,  ], 
                                          PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.BOOM,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                       {
                    POSITION: [  24,    15,    0.65,    0,      0,      216,      0,  ], 
                                          PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.BOOM,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                       {
                    POSITION: [  24,    15,    0.65,    0,      0,      288,      0,  ], 
                                          PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.BOOM,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                       {
                    POSITION: [  24,    15,    0.65,    0,      0,      288,      0,  ], 
                                          PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.BOOM,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
                       {
                    POSITION: [  24,    15,    0.65,    0,      0,      288,      0,  ], 
                                          PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.hunter, g.sidewind]),
                            TYPE: exports.BOOM,
                            STAT_CALCULATOR: gunCalcNames.sustained,
                        }, },
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
        exports.wowie = {
            PARENT: [exports.genericTank],
            DANGER: 6,
            BODY: {
                ACCELERATION: base.ACCEL * 0.75,
            },
            LABEL: 'wowie',
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  21,    14,      1,      0,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.stream, g.stream]),
                    TYPE: exports.bullet5,
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
exports.testingtank = {
                PARENT: [exports.genericTank],
                BODY: {
                    ACCELERATION: base.ACCEL * 0.75,
                },
                LABEL: 'UNIVERSAL TESTING TANK',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                     POSITION: [ 28,  15,     1.4,      0,      0,      0,      0,   ],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.sniper, g.assass]),
                        TYPE: exports.smasherragnarok,
                    }, }, {
                    POSITION: [20.5, 25, 1.2, 3.2, 0, 0, 0],
                    }
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
                    POSITION: [   10.5,    5,      1,      6,     5,      0,      0,   ],
                   PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.triplex]),
                TYPE: exports.bullet,
                        }, }, {
                    POSITION: [   10.5,    5,      1,      6,     -5,      0,      0.5,   ],
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
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.arty, g.arty, g.skim]),
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
                LABEL: 'Spreadshot',
                DANGER: 7,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  13,     4,      1,      0,    -0.8,    -75,    5/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [ 14.5,    4,      1,      0,    -1.0,    -60,    4/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [  16,     4,      1,      0,    -1.6,    -45,    3/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [ 17.5,    4,      1,      0,    -2.4,    -30,    2/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [  19,     4,      1,      0,    -3.0,    -15,    1/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {                    
                    POSITION: [  13,     4,      1,      0,     0.8,     75,    5/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [ 14.5,    4,      1,      0,     1.0,     60,    4/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [  16,     4,      1,      0,     1.6,     45,    3/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [ 17.5,    4,      1,      0,     2.4,     30,    2/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [  19,     4,      1,      0,     3.0,     15,    1/6,    ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.gunner, g.arty, g.twin, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Spread',
                        }, }, {
                    POSITION: [  13,    10,     1.3,     8,      0,      0,      0,     ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.spreadmain, g.spread]),
                            TYPE: exports.bullet,
                            LABEL: 'Pounder',
                        }, },
                ],
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
            exports.diggatrap = (() => {
                let a = 360/7, d = 1/7;
                return {
                    PARENT: [exports.genericTank],
                    LABEL: 'Septa-Trapper',
                    SKILL: [9,9,9,9,9,9,9,9,9,9],
                    CONTROLLERS: ['alwaysFire'],
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
    HEALTH: 1300,
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
      POSITION: [25, 0, 0, 0, 360, 0],
      TYPE: exports.dominationBody  
    },
  ],
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
    HEALTH: 1300,
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
      POSITION: [25, 0, 0, 0, 360, 0],
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
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
           POSITION: [   4,     7,    1.4,     18.5,      0,      0,      0,   ], 
            }, {
            POSITION: [   11,     10,    0,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.sniper]),
                    TYPE: exports.hepullet,
                }, },
        ],
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
  LABEL: "Celestial Trap",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.23,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 13, 1, 8, 0, 0, 0]
    },
    {
      POSITION: [4, 15, 1.4, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniperXX]),
        TYPE: exports.trapCeles,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true,
      }
    }
  ]
};
exports.trapper = {
  PARENT: [exports.genericTank],
  DANGER: 7,
  LABEL: "Celestial Trap",
  STAT_NAMES: statnames.trap,
  BODY: {
    SPEED: base.SPEED * 0.8,
    FOV: base.FOV * 1.23,
  },
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [9, 13, 1, 8, 0, 0, 0]
    },
    {
      POSITION: [4, 15, 1.4, 17, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniperXX]),
        TYPE: exports.trapCeles,
        STAT_CALCULATOR: gunCalcNames.trap,
        AUTOFIRE: true,
      }
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
exports.nolivesmatter = {
                PARENT: [exports.genericTank],
                LABEL: 'No Lives Matter',
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
                            MAX_CHILDREN: 2
                        }, }, {
                        POSITION: [  15,     8,      1.4,      0,      0,      180,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.morereload]),
                            TYPE: exports.racketgay,
                            LABEL: 'Front',
                            MAX_CHILDREN: 1
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
                        }, }, {
                    POSITION: [  16,     12,      -1.4,      0,     -1,      90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                            TYPE: exports.autodrone,
                            LABEL: 'Side',
                            MAX_CHILDREN: 1,
                        }, }, {   
                    POSITION: [  16,     12,      -1.4,      0,      1,     -90,     0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.drone, g.over]),
                            TYPE: exports.autodrone,
                            LABEL: 'Side',
                            MAX_CHILDREN: 1
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
              CONTROLLERS: ['reversespin'],
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
            exports.auto25 = {
                PARENT: [exports.genericTank],
                LABEL: 'Auto-25',
                DANGER: 7,
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  8,     38,      0,      0,     360, 1], 
                        TYPE: exports.mercury,
                            }, {
                    POSITION: [  12,     38,      0,      45,    360, 1], 
                        TYPE: exports.venus,
                            }, {
                    POSITION: [  12,     38,      0,     90,    360, 1], 
                        TYPE: exports.earth,
                            }, {
                    POSITION: [  12,     38,      0,     135,    360, 1], 
                        TYPE: exports.mars,
                            },{
                    POSITION: [  18,     38,      0,      180,    360, 1], 
                        TYPE: exports.jupiter,
                            }, {
                    POSITION: [  16,     38,      0,     225,    360, 1], 
                        TYPE: exports.saturn,
                            },{
                    POSITION: [  14,     38,      0,     270,    360, 1], 
                        TYPE: exports.uranus,
                            },{
                    POSITION: [  14,     38,      0,     315,    360, 1], 
                        TYPE: exports.neptune,
                            },
                ],
            };
exports.destroy5 = {
                PARENT: [exports.genericTank],
                LABEL: 'Star-Burst',
                DANGER: 7,
                FACING_TYPE: 'autospin',
                TURRETS: [{ //  SIZE     X       Y     ANGLE    ARC
                    POSITION: [  11,     8,      0,      0,     0, 0], 
                        TYPE: exports.rocketshoot,
                            }, {
                    POSITION: [  11,     8,      0,      72,    0, 0], 
                        TYPE: exports.rocketshoot,
                            }, {
                    POSITION: [  11,     8,      0,     144,    0, 0], 
                        TYPE: exports.rocketshoot,
                            }, {
                    POSITION: [  11,     8,      0,     216,    0, 0], 
                        TYPE: exports.rocketshoot,
                            }, {
                    POSITION: [  11,     8,      0,     288,    0, 0], 
                        TYPE: exports.rocketshoot,
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
            exports.JohnathansFault = {
                PARENT: [exports.genericTank],
                LABEL: 'Swarming King',
                DANGER: 7,
              FACING_TYPE: 'autospin',
TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  13,     8,      0,      0,     190, 0], 
                        TYPE: exports.colony,
                            }, {
                    POSITION: [  13,     8,      0,      120,    190, 0], 
                        TYPE: exports.colony,
                            }, {
                    POSITION: [  13,     8,      0,     240,    190, 0], 
                        TYPE: exports.colony,
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
exports.miniboss = {
    PARENT: [exports.genericTank],
    TYPE: 'miniboss',
    DANGER: 6,
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
    CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, STRAFE: true,},
    FACING_TYPE: 'autospin',
    HITS_OWN_TYPE: 'never',
    BROADCAST_MESSAGE: 'A visitor has left the realm!',
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
      MAX_CHILDREN: 12
                        }, }, {
   POSITION: [7,  7.5, 0.6, 7, 0, -45, 1],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.manybee2, g.battle, g.carrier]),
        TYPE: exports.beebossbee,
      STAT_CALCULATOR: gunCalcNames.swarm,
      MAX_CHILDREN: 12
                        }, }, {
    POSITION: [7,  7.5, 0.6, 7, 0, 135, 1],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.manybee2, g.battle, g.carrier]),
        TYPE: exports.beebossbee,
      STAT_CALCULATOR: gunCalcNames.swarm,
      MAX_CHILDREN: 12
                        }, }, {
    POSITION: [7,  7.5, 0.6, 7, 0, -135, 1],
    PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.manybee2, g.battle, g.carrier]),
        TYPE: exports.beebossbee,
      STAT_CALCULATOR: gunCalcNames.swarm,     
      MAX_CHILDREN: 12
                        }, },
  ],
  TURRETS: [{
    POSITION: [  14.5,     0,      0,       0,    360,   1, ],  
    TYPE: [exports.God, {INDEPENDENT: false,}]
  }, {
    POSITION: [  12,     3,      0,       270,    180,   0, ],  
    TYPE: [exports.builder, {INDEPENDENT: false,}]
  }, {
    POSITION: [  12,     3,      0,       180,    180,   0, ],  
    TYPE: [exports.swarmerpaladin, {INDEPENDENT: false,}]
  }, {
    POSITION: [  12,     3,      0,       90,    180,   0, ],  
    TYPE: [exports.swarmerpaladin, {INDEPENDENT: false,}]
  }, {  
    POSITION: [  12,     3,      0,       360,    180,  0, ],  
    TYPE: [exports.swarmerpaladin, {INDEPENDENT: false,}]
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
            FOV: 0.5,
            SPEED: 2.25,
            DAMAGE: 1.9 * wepHealthFactor
        },
        AI: {
            BLIND: true,
            FARMER: true,
        },
        DRAW_HEALTH: false,
    };
exports.Celestialbody3 = {
  LABEL: "",
  COLOR: 35,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 32,
  SHAPE: 7,
  FOV: 1,
  FACING_TYPE: "autospin",
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 7, 1.4, 8, 0, 26, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.pound3, 
          g.summoner, 
          g.stream
        ]),
        TYPE: exports.sumchipx,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 77, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.pound3, 
          g.summoner, 
          g.stream
        ]),
        TYPE: exports.sumchipx,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 129, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.pound3, 
          g.summoner, 
          g.stream
        ]),
        TYPE: exports.sumchipx,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 180, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.pound3, 
          g.summoner, 
          g.stream
        ]),
        TYPE: exports.sumchipx,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 231, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.pound3, 
          g.summoner, 
          g.stream
        ]),
         TYPE: exports.sumchipx,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 282, 0],
     PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.pound3, 
          g.summoner, 
          g.stream
        ]),
        TYPE: exports.sumchipx,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    },
    {
      POSITION: [4, 7, 1.4, 8, 0, 333, 0],
       PROPERTIES: {
        SHOOT_SETTINGS: combineStats([
          g.pound3, 
          g.summoner, 
          g.stream
        ]),
         TYPE: exports.sumchipx,
        AUTOFIRE: true,
        SYNCS_SKILLS: true,
      }
    }
  ]
};
exports.Celestialbody4 = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    AUTOSPIN: true,
    COLOR: 35,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
                   TURRETS: [{/*********  SIZE     X       Y     ANGLE    ARC */
                   POSITION: [  8,     9,      0,     35,     180,   0, ], 
                    TYPE: [exports.sider],
                    }, {
                POSITION: [  8,     9,      0,     110,    180,   0, ],
                    TYPE: [exports.sider],
                     }, {
                POSITION: [  8,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.sider],
                       }, {
                POSITION: [  8,     9,      0,     252,    180,   0, ],
                    TYPE: [exports.sider], 
                          }, {
                POSITION: [  8,     9,      0,     325,    180,   0, ],
                    TYPE: [exports.sider],
            }],
        };
exports.Celestialbody5 = {
  LABEL: "",
  COLOR: 5,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 12,
  SHAPE: 7,
  FOV: 1,
 INDEPENDENT: true,
  FACING_TYPE: 'suspin',
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 7, -1.4, 8, 0, 26, 0],
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
      POSITION: [4, 7, -1.4, 8, 0, 77, 0],
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
      POSITION: [4, 7, -1.4, 8, 0, 129, 0],
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
      POSITION: [4, 7, -1.4, 8, 0, 180, 0],
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
      POSITION: [4, 7, -1.4, 8, 0, 231, 0],
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
      POSITION: [4, 7, -1.4, 8, 0, 282, 0],
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
      POSITION: [4, 7, -1.4, 8, 0, 333, 0],
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
    //
    ///
    ////
    /////
    //////
    ///////
    ////////
    /////////
    //////////
    ///////////
    ////////////
    POSITION: [1, 4, -1.4, 8, 0, 26, 0],
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
      POSITION: [1, 4, -1.4, 8, 0, 77, 0],
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
      POSITION: [1, 4, -1.4, 8, 0, 129, 0],
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
      POSITION: [1, 4, -1.4, 8, 0, 180, 0],
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
      POSITION: [1, 4, -1.4, 8, 0, 231, 0],
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
      POSITION: [1, 4, -1.4, 8, 0, 282, 0],
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
      POSITION: [1, 4, -1.4, 8, 0, 333, 0],
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
    CONTROLLERS: ['spin'],
    AUTOSPIN: true,
    FACING_TYPE: "autospin",
    COLOR: 5,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
                   TURRETS: [{/*********  SIZE     X       Y     ANGLE    ARC */
                   POSITION: [  8,     9,      0,     35,     180,   0, ], 
                    TYPE: [exports.sider2],
                    }, {
                POSITION: [  8,     9,      0,     110,    180,   0, ],
                    TYPE: [exports.sider2],
                     }, {
                POSITION: [  8,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.sider2],
                       }, {
                POSITION: [  8,     9,      0,     252,    180,   0, ],
                    TYPE: [exports.sider2], 
                          }, {
                POSITION: [  8,     9,      0,     325,    180,   0, ],
                    TYPE: [exports.sider2],
            }],
        };
exports.Celestialbody7 = {
  LABEL: "",
  COLOR: 2,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 12,
  SHAPE: 7,
  FOV: 1,
 INDEPENDENT: true,
  FACING_TYPE: 'suspin',
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 7, 1.4, 8, 0, 26, 0],
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
      POSITION: [4, 7, 1.4, 8, 0, 77, 0],
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
      POSITION: [4, 7, 1.4, 8, 0, 129, 0],
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
      POSITION: [4, 7, 1.4, 8, 0, 180, 0],
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
      POSITION: [4, 7, 1.4, 8, 0, 231, 0],
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
      POSITION: [4, 7, 1.4, 8, 0, 282, 0],
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
      POSITION: [4, 7, 1.4, 8, 0, 333, 0],
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
exports.Celestialbody8 = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    AUTOSPIN: true,
    FACING_TYPE: "autospin",
    COLOR: 2,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
                   TURRETS: [{/*********  SIZE     X       Y     ANGLE    ARC */
                   POSITION: [  8,     9,      0,     35,     180,   0, ], 
                    TYPE: [exports.sider3],
                    }, {
                POSITION: [  8,     9,      0,     110,    180,   0, ],
                    TYPE: [exports.sider3],
                     }, {
                POSITION: [  8,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.sider3],
                       }, {
                POSITION: [  8,     9,      0,     252,    180,   0, ],
                    TYPE: [exports.sider3], 
                          }, {
                POSITION: [  8,     9,      0,     325,    180,   0, ],
                    TYPE: [exports.sider3],
            }],
        };
exports.Celestialbody9 = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    AUTOSPIN: true,
    FACING_TYPE: "autospin",
    COLOR: 14,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
                   TURRETS: [{/*********  SIZE     X       Y     ANGLE    ARC */
                   POSITION: [  8,     9,      0,     35,     180,   0, ], 
                    TYPE: [exports.swarmerpaladin],
                    }, {
                POSITION: [  8,     9,      0,     110,    180,   0, ],
                    TYPE: [exports.swarmerpaladin],
                     }, {
                POSITION: [  8,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.swarmerpaladin],
                       }, {
                POSITION: [  8,     9,      0,     252,    180,   0, ],
                    TYPE: [exports.swarmerpaladin], 
                          }, {
                POSITION: [  8,     9,      0,     325,    180,   0, ],
                    TYPE: [exports.swarmerpaladin],
            }],
        };
exports.Celestialbody10 = {
  LABEL: "",
  COLOR: 14,
  SIZE: 100,
  SKILL: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
  MAX_CHILDREN: 14,
  SHAPE: 7,
  FOV: 1,
 INDEPENDENT: true,
  FACING_TYPE: 'suspin',
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [4, 7, 1.4, 8, 0, 26, 0],
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
      POSITION: [4, 7, 1.4, 8, 0, 77, 0],
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
      POSITION: [4, 7, 1.4, 8, 0, 129, 0],
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
      POSITION: [4, 7, 1.4, 8, 0, 180, 0],
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
      POSITION: [4, 7, 1.4, 8, 0, 231, 0],
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
      POSITION: [4, 7, 1.4, 8, 0, 282, 0],
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
      POSITION: [4, 7, 1.4, 8, 0, 333, 0],
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
                            SHOOT_SETTINGS: combineStats([g.swarm2, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,          
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,      -4,      0,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm2, g.battle, g.carrier]),
                            TYPE: exports.autoswarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,    
                       
                }, }
        ],
    };
exports.Celestialbody1 = {
    LABEL: '',
    CONTROLLERS: ['reversespin'], 
    COLOR: 1,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 7,
    INDEPENDENT: true,
 TURRETS: [{/*********  SIZE     X       Y     ANGLE    ARC */
                   POSITION: [  7,     9,      0,     26,     180,   0, ], 
                    TYPE: [exports.crgun2],
                    }, {
                POSITION: [  7,     9,      0,     77,    180,   0, ],
                    TYPE: [exports.crgun2],
                     }, {
                POSITION: [  7,     9,      0,     129,    180,   0, ],
                    TYPE: [exports.crgun2],
                       }, {
                POSITION: [  7,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.crgun2], 
                          }, {
                POSITION: [  7,     9,      0,     231,    180,   0, ],
                    TYPE: [exports.crgun2],
                          }, {
                POSITION: [  7,     9,      0,     282,    180,   0, ],
                    TYPE: [exports.crgun2],
                            }, {
                POSITION: [  7,     9,      0,     333,    180,   0, ],
                    TYPE: [exports.crgun2],
                 
            }, 
          ],
        };
exports.Celestialbody2 = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 1,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    INDEPENDENT: true,
                   TURRETS: [{/*********  SIZE     X       Y     ANGLE    ARC */
                   POSITION: [  7,     9,      0,     35,     180,   0, ], 
                    TYPE: [exports.auto4gun],
                    }, {
                POSITION: [  7,     9,      0,     110,    180,   0, ],
                    TYPE: [exports.auto4gun],
                     }, {
                POSITION: [  7,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.auto4gun],
                       }, {
                POSITION: [  7,     9,      0,     252,    180,   0, ],
                    TYPE: [exports.auto4gun], 
                          }, {
                POSITION: [  7,     9,      0,     325,    180,   0, ],
                    TYPE: [exports.auto4gun],
            }],
        };
exports.Celestialtheia = {
          PARENT: [exports.miniboss],
          LABEL: 'Celestial',
          SKILL: [0,9,9,9,9,9,9,9,9,9],
          NAME: ' ',
          VALUE: 1000000,
          SHAPE: 9,
          COLOR: 35,
          LEVEL: 200,
          SIZE: 45,
 BODY: {
                FOV: 1,
                HEALTH: 430,
                SHIELD: 2,
                REGEN: base.REGEN * 0.1,
                SPEED: base.SPEED * 0.45,
                DAMAGE:  5,
            },
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     9,      0,     260,     180,   0, ], 
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  5,     9,      0,     219,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  5,     9,      0,     300,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  5,     9,      0,     339,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  5,     9,      0,     380,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5,     9,      0,     420,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5,     9,      0,     459,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  5,     9,      0,     500,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  14.5,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody3, {INDEPENDENT: false,}]  
                       }, {
                POSITION: [  8.75,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody4]  
  
            }],
        };
exports.Celestialnyx = {
         PARENT: [exports.miniboss],
          LABEL: 'Celestial',
          SKILL: [0,9,9,9,9,9,9,9,9,9],
          NAME: ' ',
          VALUE: 1000000,
          SHAPE: 9,
          COLOR: 5,
          LEVEL: 200,
          FACING_TYPE: 'autospin',
          SIZE: 45,
 BODY: {
                FOV: 1,
                HEALTH: 430,
                SHIELD: 2,
                REGEN: base.REGEN * 0.1,
                SPEED: base.SPEED * 0.35,
                DAMAGE:  5,
                AUTOSPIN: true,
            },
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     9,      0,     260,     180,   0, ], 
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  5,     9,      0,     219,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  5,     9,      0,     300,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  5,     9,      0,     339,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  5,     9,      0,     380,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5,     9,      0,     420,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5,     9,      0,     459,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  5,     9,      0,     500,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  14.5,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody5, {INDEPENDENT: false,}]  
                       }, {
                POSITION: [  8.75,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody6]  
  
            }],
        };
exports.Celestialzaphkiel = {
         PARENT: [exports.miniboss],
          LABEL: 'Celestial',
          SKILL: [0,9,9,9,9,9,9,9,9,9],
          NAME: ' ',
          VALUE: 1000000,
          SHAPE: 9,
          COLOR: 2,
          LEVEL: 200,
          FACING_TYPE: 'autospin',
          SIZE: 45,
 BODY: {
                FOV: 1,
                HEALTH: 430,
                SHIELD: 2,
                REGEN: base.REGEN * 0.1,
                SPEED: base.SPEED * 0.25,
                DAMAGE:  5,
                AUTOSPIN: true,
            },
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     9,      0,     260,     180,   0, ], 
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  5,     9,      0,     219,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  5,     9,      0,     300,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  5,     9,      0,     339,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  5,     9,      0,     380,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5,     9,      0,     420,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5,     9,      0,     459,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  5,     9,      0,     500,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  14.5,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody7, {INDEPENDENT: false,}]  
                       }, {
                POSITION: [  8.75,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody8]  
  
            }],
        };
exports.Celestialpaladin = {
         PARENT: [exports.miniboss],
          LABEL: 'Celestial',
          SKILL: [0,9,9,9,9,9,9,9,9,9],
          NAME: ' ',
          VALUE: 1000000,
          SHAPE: 9,
          COLOR: 14,
          LEVEL: 200,
          FACING_TYPE: 'autospin',
          SIZE: 45,
 BODY: {
                FOV: 1,
                HEALTH: 430,
                SHIELD: 2,
                REGEN: base.REGEN * 0.1,
                SPEED: base.SPEED * 0.25,
                DAMAGE:  5,
                AUTOSPIN: true,
            },
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     9,      0,     260,     180,   0, ], 
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  5,     9,      0,     219,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  5,     9,      0,     300,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  5,     9,      0,     339,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  5,     9,      0,     380,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5,     9,      0,     420,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5,     9,      0,     459,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  5,     9,      0,     500,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  14.5,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody10, {INDEPENDENT: false,}]  
                       }, {
                POSITION: [  8.75,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody9, {INDEPENDENT: false,}]  
  
            }],
        };
exports.Celestialfreyja = {
         PARENT: [exports.miniboss],
          LABEL: 'Celestial',
          SKILL: [0,9,9,9,9,9,9,9,9,9],
          NAME: ' ',
          VALUE: 1000000,
          SHAPE: 9,
          COLOR: 1,
          LEVEL: 200,
          FACING_TYPE: 'autospin',
          SIZE: 45,
 BODY: {
                FOV: 1,
                HEALTH: 430,
                SHIELD: 2,
                REGEN: base.REGEN * 0.1,
                SPEED: base.SPEED * 0.25,
                DAMAGE:  5,
                AUTOSPIN: true,
            },
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  5,     9,      0,     260,     180,   0, ], 
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  5,     9,      0,     219,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  5,     9,      0,     300,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  5,     9,      0,     339,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  5,     9,      0,     380,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5,     9,      0,     420,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5,     9,      0,     459,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  5,     9,      0,     500,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  14.5,     0,      0,       0,    0,   1, ],  
                    TYPE: [exports.Celestialbody1]  
                       }, {
                POSITION: [  8.75,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.Celestialbody2]  
  
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
exports.ragnarok1 = {
    LABEL: '',
    COLOR: 0,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 17,
  SHAPE: 9,
  GUNS: [
    {
      /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
      POSITION: [3.5, 4.2, -1.4, 8, 0, 19.8, 0],
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
      POSITION: [3.5, 4.2, -1.4, 8, 0, -19.8, 0],
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
POSITION: [3.5, 4.2, -1.4, 8, 0, -60, 0],
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
POSITION: [3.5, 4.2, -1.4, 8, 0, 60, 0],
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
POSITION: [3.5, 4.2, -1.4, 8, 0, -140, 0],
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
POSITION: [3.5, 4.2, -1.4, 8, 0, 140, 0],
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
POSITION: [3.5, 4.2, -1.4, 8, 0, 180, 0],
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
POSITION: [3.5, 4.2, -1.4, 8, 0, 260, 0],
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
POSITION: [3.5, 4.2, -1.4, 8, 0, -260, 0],
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
                    POSITION: [ 18.6,  9,    1.4,      0,      0,      0,      0,   ],
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.basic, g.pound, g.destroyrag, g.annirag]),
                        TYPE: exports.smasherragnarok,
                    }, }, {
                    POSITION: [10.9, 16, 1.2, 5, 0, 0, 0],
                    }
                ],
            };
exports.ragnarok2 = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 0,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 7,
    INDEPENDENT: true,
                TURRETS: [{//********  SIZE     X       Y     ANGLE    ARC 
                POSITION: [  8.4,     9,      0,     26,     90,   0, ], 
                    TYPE: [exports.smashshoot],
                    }, {
                POSITION: [  8.4,     9,      0,     77,   90,   0, ],
                    TYPE: [exports.smashshoot],
                     }, {
                POSITION: [  8.4,     9,      0,     129,    90,   0, ],
                    TYPE: [exports.smashshoot],
                       }, {
                POSITION: [  8.4,     9,      0,     180,    90,   0, ],
                    TYPE: [exports.smashshoot], 
                          }, {
                POSITION: [  8.4,     9,      0,     231,    90,   0, ],
                    TYPE: [exports.smashshoot],
                          }, {
                POSITION: [  8.4,     9,      0,     282,    90,   0, ],
                    TYPE: [exports.smashshoot],
                            }, {
                POSITION: [  8.4,     9,      0,     333,    90,   0, ],
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
                            SHOOT_SETTINGS: combineStats([g.swarm2, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm, 
                            MAX_CHILDREN: 4
                    }, }, { 
                POSITION: [  10,    3.5,     0.6,      0,    -7.25,    0,     0.75, ], 
                    PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm2, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,
                            MAX_CHILDREN: 4
                    }, }, { 
                POSITION: [  16,    3.5,     1,      0,     3.75,    0,      0,   ], 
                    PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner2, g.twin, g.power, g.slow]),
                    TYPE: exports.bullet,
                    }, }, { 
                POSITION: [  16,    3.5,     1,      0,    -3.75,    0,     0.25, ], 
                    PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.basic, g.auto, g.gunner2, g.twin, g.power, g.slow]),
                    TYPE: exports.bullet,
                    }, }, 
            ],
        };
exports.ragnarok3 = {
    LABEL: '',
    CONTROLLERS: ['reversespin'],
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
         PARENT: [exports.miniboss],
          LABEL: 'Ragnarok',
          SKILL: [0,9,9,9,9,9,9,9,9,9],
          NAME: ' ',
          SHAPE: 12,
          VALUE: 100000000,
           COLOR: 0,
          LEVEL: 500,
          SIZE: 90,
 BODY: {
                FOV: 0.8,
                HEALTH: 800,
                SHIELD: 10,
                SPEED: base.SPEED * 0.25,
                DAMAGE:  25,
            },
           FACING_TYPE: 'autospin',
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
               POSITION: [  5,     9,      0,     270,     180,   0, ], 
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  5,     9,      0,     240,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  5,     9,      0,     210,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  5,     9,      0,     150,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  5,     9,      0,     120,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5,     9,      0,     90,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5,     9,      0,     60,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  5,     9,      0,     30,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],  
                                }, {
                POSITION: [  5,     9,      0,     0,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}], 
                        }, {
               /////////////////////////////////////////////////////////
                POSITION: [  16,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.ragnarok1, {INDEPENDENT: false,}] 
                          }, {
                POSITION: [  9.87,     0,      0,       0,    360,   1, ], 
                    TYPE: [exports.ragnarok2] 
                            }, {
                POSITION: [  5.85,     0,      0,       0,    360,   1, ],  
                    TYPE: [exports.ragnarok3]  
                            }, {
                ///////////////////////////////////////////////////////
                POSITION: [  5,     9,      0,     -90,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  5,     9,      0,     -60,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  5,     9,      0,     -30,    180,   0, ],
                    TYPE: [exports.trapperceles, {INDEPENDENT: true,}],  
                               
                  
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
                    POSITION: [ 8.2,  17,    1.6,      12.4,      0,      0,      0,   ],
                     }, {
                    POSITION: [10.5, 8, 1.2, 5, 0, 0, 0],
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.sniperswarm, g.assassswarm]),
                            TYPE: exports.alphaskimmer,
                            STAT_CALCULATOR: gunCalcNames.sustained,               
                        },},{
                    POSITION: [10.5, 20, 1.2, 5, 0, 0, 0],
                    }
                ],
            };
exports.Celestialbody12 = {
    LABEL: '',
    CONTROLLERS: ['reversespin'], 
    COLOR: 6,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 7,
    INDEPENDENT: true,
                   TURRETS: [{/*********  SIZE     X       Y     ANGLE    ARC */
                 POSITION: [  7,     9,      0,     260,     180,   0, ], 
                    TYPE: [exports.misslergun],
                    }, {
                POSITION: [  7,     9,      0,     219,    180,   0, ],
                    TYPE: [exports.misslergun],
                     }, {
                POSITION: [  7,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.misslergun],
                       }, {
                POSITION: [  7,     9,      0,     300,    180,   0, ],
                    TYPE: [exports.misslergun], 
                          }, {
                POSITION: [  7,     9,      0,     339,    180,   0, ],
                    TYPE: [exports.misslergun],
                          }, {
                POSITION: [  7,     9,      0,     380,    180,   0, ],
                    TYPE: [exports.misslergun],
                            }, {
                POSITION: [  7,     9,      0,     420,    180,   0, ],
                    TYPE: [exports.misslergun],
                            }, {
                POSITION: [  7,     9,      0,     459,    180,   0, ],
                    TYPE: [exports.misslergun],
                             }, {
                POSITION: [  7,     9,      0,     500,    180,   0, ],
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
                            SHOOT_SETTINGS: combineStats([g.swarm2, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,          
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,      2,      40,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm2, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,    
                        }, }, {
                    POSITION: [   7,    7.5,    0.6,     7,     -2,     -40,    0.5,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarm2, g.battle, g.carrier]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,
                }, }
        ],
    };
exports.Celestialbody22 = {
    LABEL: '',
    CONTROLLERS: ['spin'],
    COLOR: 6,
  SIZE: 100,
  SKILL: [9,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 7,
    INDEPENDENT: true,
                TURRETS: [{//********  SIZE     X       Y     ANGLE    ARC
                POSITION: [  7.4,     9,      0,     26,     180,   0, ], 
                    TYPE: [exports.cargun],
                    }, {
                POSITION: [  7.4,     9,      0,     77,    180,   0, ],
                    TYPE: [exports.cargun],
                     }, {
                POSITION: [  7.4,     9,      0,     129,    180,   0, ],
                    TYPE: [exports.cargun],
                       }, {
                POSITION: [  7.4,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.cargun], 
                          }, {
                POSITION: [  7.4,     9,      0,     231,    180,   0, ],
                    TYPE: [exports.cargun],
                          }, {
                POSITION: [  7.4,     9,      0,     282,    180,   0, ],
                    TYPE: [exports.cargun],
                            }, {
                POSITION: [  7.4,     9,      0,     333,    180,   0, ],
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
        SHOOT_SETTINGS: combineStats([g.basic, g.bitsussy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [18, 10, 1, 0, -5, 0, 0.5],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.bitsussy]),
        TYPE: exports.bullet
      }
    },
    {
      POSITION: [21, 10, 1.2, 0, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.bitsussy]),
        TYPE: exports.bullet
      }
    }
  ]
};
exports.Celestialbody32 = {
    LABEL: '',
    CONTROLLERS: ['reversespin'],
    COLOR: 6,
  SIZE: 100,
  SKILL: [0,9,9,9,9,9,9,9,9,9],
  MAX_CHILDREN: 28,
    SHAPE: 5,
    //INDEPENDENT: true,
                  TURRETS: [{//******** SIZE     X       Y     ANGLE    ARC 
                   POSITION: [  7.6,     9,      0,     35,     180,   0, ], 
                    TYPE: [exports.triplegun],
                    }, {
                POSITION: [  7.6,     9,      0,     110,    180,   0, ],
                    TYPE: [exports.triplegun],
                     }, {
                POSITION: [  7.6,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.triplegun],
                       }, {
                POSITION: [  7.6,     9,      0,     252,    180,   0, ],
                    TYPE: [exports.triplegun], 
                          }, {
                POSITION: [  7.6,     9,      0,     325,    180,   0, ],
                    TYPE: [exports.triplegun],
            }],
        };
exports.Celestialeternal = {
            PARENT: [exports.genericTank],
          LABEL: 'Celestial Eternal',
          NAME: "",
          SKILL: [0,9,9,9,9,9,9,9,9,9],
          SHAPE: 12,
          VALUE: 100000000,
           COLOR: 6,
               LEVEL: 500,
          SIZE: 75,
 BODY: {
                FOV: 1,
                HEALTH: 800,
                SHIELD: 10,
                SPEED: 0.65,
                DAMAGE:  25,
            },
           FACING_TYPE: 'autospin',
            TURRETS: [{
                /*********  SIZE     X       Y     ANGLE    ARC */
               POSITION: [  7.5,     9,      0,     270,     180,   0, ], 
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                    }, {
                POSITION: [  7.5,     9,      0,     240,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                     }, {
                POSITION: [  7.5,     9,      0,     210,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                       }, {
                POSITION: [  7.5,     9,      0,     180,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}], 
                          }, {
                POSITION: [  7.5,     9,      0,     150,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                          }, {
                POSITION: [  7.5,     9,      0,     120,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  7.5,     9,      0,     90,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  7.5,     9,      0,     60,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  7.5,     9,      0,     30,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],  
                                }, {
                POSITION: [  7.5,     9,      0,     0,    180,   0, ],
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
                POSITION: [  7.5,     9,      0,     -90,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                            }, {
                POSITION: [  7.5,     9,      0,     -60,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],
                             }, {
                POSITION: [  7.5,     9,      0,     -30,    180,   0, ],
                    TYPE: [exports.trapper, {INDEPENDENT: true,}],  
                               
                  
            }],
        };

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
        exports.bushwhack = makeTrapper(exports.sniper, 'Sniper Guard');


// UPGRADE PATHS
exports.removed.UPGRADES_TIER_1 = [ 
  exports.quadtrapper,
  exports.bentboomer,
  exports.sniper3,//debatable
  exports.octobase,
  exports.master,
  exports.destroy5,
  exports.mothershipX,
  exports.mothership,
  exports.betabosses
];
exports.basics.UPGRADES_TIER_1 = [exports.basic];
exports.testbed.UPGRADES_TIER_1 = [
exports.beta,
exports.bosses,
exports.removed,
exports.sentries,
exports.basic,
exports.arena,
];
exports.beta.UPGRADES_TIER_1 = [
exports.sanctuary,
exports.testingtank,
exports.beehive,
exports.pain,
  exports.ender,
exports.wowie,
  exports.gay,
];
exports.betabosses.UPGRADES_TIER_1 = [
  exports.CLOSER,
  exports.beeboss,
  exports.NUKE,
  exports.JohnathansFault,
  exports.auto25,

];
exports.sol.UPGRADES_TIER_1 = [
exports.mercury,
exports.venus,
exports.earth,
exports.mars,
exports.jupiter,
exports.saturn,
exports.uranus,
exports.neptune,
];
//exports.whything.UPGRADES_TIER_1 = [exports.whything2];
//exports.whything2.UPGRADES_TIER_1 = [exports.whything];

exports.basic.UPGRADES_TIER_1 = [exports.twin, exports.sniper, exports.machine, exports.pound, exports.flank, exports.builder, exports.director];
        exports.basic.UPGRADES_TIER_3 = [exports.single, exports.heal];
    exports.basic.UPGRADES_TIER_2 = [exports.smash];

    exports.twin.UPGRADES_TIER_2 = [exports.double, exports.bent, exports.gunner, exports.hexa];
        exports.twin.UPGRADES_TIER_3 = [exports.dual,];
        exports.double.UPGRADES_TIER_3 = [exports.tripletwin, exports.split, exports.autodouble, exports.bentdouble];
        exports.bent.UPGRADES_TIER_3 = [exports.penta, exports.spread, exports.benthybrid, exports.bentdouble, exports.triple];
        exports.gunner.UPGRADES_TIER_3 = [exports.autogunner, exports.nailgun, exports.auto4, exports.machinegunner];

    exports.sniper.UPGRADES_TIER_2 = [exports.assassin, exports.hunter, exports.mini];
        exports.sniper.UPGRADES_TIER_3 = [exports.bushwhack];
        exports.assassin.UPGRADES_TIER_3 = [exports.ranger, exports.falcon];
        exports.ranger.UPGRADES_TIER_3 = [exports.Longer];
        exports.Longer.UPGRADES_TIER_3 = [exports.God];
        exports.hunter.UPGRADES_TIER_3 = [exports.preda, exports.dual, exports.poach, exports.sidewind];

        exports.machine.UPGRADES_TIER_2 = [exports.destroy, exports.gunner, exports.artillery, exports.flamer];
        exports.machine.UPGRADES_TIER_3 = [exports.spray];
        exports.mini.UPGRADES_TIER_3 = [exports.stream, exports.hybridmini, exports.nailgun];

    exports.pound.UPGRADES_TIER_2 = [exports.destroy, exports.artillery, exports.launch];
    exports.launch.UPGRADES_TIER_3 = [exports.skimmer, exports.hiveshooter, exports.rocketshoot, exports.sidewind, exports.twist, exports.heatseek];
        exports.destroy.UPGRADES_TIER_3 = [exports.anni, exports.hybrid, exports.shotgun2, exports.whything];
        exports.artillery.UPGRADES_TIER_3 = [exports.mortar, exports.spread];
         exports.shotgun2.UPGRADES_TIER_1 = [exports.autoshooter];

    exports.flank.UPGRADES_TIER_2 = [exports.hexa, exports.tri, exports.auto3, exports.flanktrap];
        exports.flank.UPGRADES_TIER_3 = [];
        exports.tri.UPGRADES_TIER_3 = [exports.fighter, exports.bomber, exports.booster, exports.falcon, exports.bomber, exports.brutalizer, exports.autotri, exports.shootstar];
        exports.hexa.UPGRADES_TIER_3 = [exports.octo, exports.hexatrap, exports.heptatrap];
        exports.auto3.UPGRADES_TIER_3 = [exports.auto5, exports.heavy3, exports.auto4, exports.stream5];
        exports.flanktrap.UPGRADES_TIER_3 = [exports.bushwhack, exports.guntrap, exports.fortress, exports.bomber];

        exports.builder.UPGRADES_TIER_3 = [exports.construct, exports.autobuilder, exports.engineer, exports.boomer];

    exports.director.UPGRADES_TIER_2 = [exports.overseer, exports.cruiser, exports.underseer];
        exports.director.UPGRADES_TIER_3 = [exports.factory];
        exports.overseer.UPGRADES_TIER_3 = [exports.overlord, exports.autoover,exports.banshee, exports.overtrap, exports.overgunner];  
        exports.underseer.UPGRADES_TIER_3 = [exports.necromancer];
        exports.cruiser.UPGRADES_TIER_3 = [exports.carrier, exports.battleship, exports.brutalizer, exports.fortress, exports.autocruiser,];
      exports.triple.UPGRADES_TIER_3 = [exports.quint];
      exports.penta.UPGRADES_TIER_3 = [exports.septa, exports.pentatrap, exports.hybridpenta];
      exports.hybridpenta.UPGRADES_TIER_1 = [exports.hybridpentaX];
      exports.fighter.UPGRADES_TIER_1 = [exports.nolivesmatter, exports.developer];

    exports.smash.UPGRADES_TIER_3 = [exports.megasmash, exports.spike, exports.autosmash, exports.weirdspike, exports.boostspike, exports.autospike, exports.sol];
exports.overlord.UPGRADES_TIER_1 = [exports.overlooker, exports.testbed];
            
/*    exports.twin.UPGRADES_TIER_2 = [exports.double, exports.bent, exports.triple, exports.hexa];
        exports.double.UPGRADES_TIER_3 = [exports.tripletwin, exports.autodouble];
        exports.bent.UPGRADES_TIER_3 = [exports.penta, exports.benthybrid];
        exports.triple.UPGRADES_TIER_3 = [exports.quint];

    exports.sniper.UPGRADES_TIER_2 = [exports.assassin, exports.overseer, exports.hunter, exports.builder];
        exports.assassin.UPGRADES_TIER_3 = [exports.ranger];
        exports.overseer.UPGRADES_TIER_3 = [exports.overlord, exports.battleship
            , exports.overtrap, exports.necromancer, exports.factory, exports.fortress];
        exports.hunter.UPGRADES_TIER_3 = [exports.preda, exports.poach];
        exports.builder.UPGRADES_TIER_3 = [exports.construct, exports.autobuilder];
        
    exports.machine.UPGRADES_TIER_2 = [exports.destroy, exports.gunner, exports.artillery];
        exports.destroy.UPGRADES_TIER_3 = [exports.anni, exports.hybrid];
        exports.gunner.UPGRADES_TIER_3 = [exports.autogunner, exports.mortar, exports.stream];
        exports.artillery.UPGRADES_TIER_3 = [exports.mortar, exports.spread, exports.skimmer];
        exports.machine.UPGRADES_TIER_3 = [exports.spray];

    exports.flank.UPGRADES_TIER_2 = [exports.hexa, exports.tri, exports.auto3, exports.flanktrap];
        exports.hexa.UPGRADES_TIER_3 = [exports.octo];
        exports.tri.UPGRADES_TIER_3 = [exports.booster, exports.fighter, exports.bomber, exports.autotri];
        exports.auto3.UPGRADES_TIER_3 = [exports.auto5, exports.heavy3];
        exports.flanktrap.UPGRADES_TIER_3 = [exports.guntrap, exports.fortress, exports.bomber];*/

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
    VARIES_IN_SIZE: true,
    CONTROLLERS: ['nearestDifferentMaster', 'mapTargetToGoal'],
    AI: { NO_LEAD: true, },
    BODY: {
        FOV: 1,
        ACCEL: 0.006,
        DAMAGE: 1,
        HEALTH: 2.5,
        SPEED: base.SPEED * 0.5,
    },
    MOTION_TYPE: 'motor',
    FACING_TYPE: 'smoothToTarget',
    HITS_OWN_TYPE: 'hard',
    HAS_NO_MASTER: true,
    DRAW_HEALTH: true,
    GIVE_KILL_MESSAGE: true,
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
        INDEPENDENT: true, 
        AI: { chase: true, },
        MAX_CHILDREN: 4,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,     12,    1.2,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
                    TYPE: [exports.sentrySwarm, { LABEL: 'Sentry', VARIES_IN_SIZE: true, DRAW_HEALTH: true }],
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
        INDEPENDENT: true, 
        AI: { chase: true, },
        MAX_CHILDREN: 4,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,     12,    1.2,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
                    TYPE: [exports.sentryTrap, { LABEL: 'Sentry', VARIES_IN_SIZE: true, DRAW_HEALTH: true }],
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
        INDEPENDENT: true, 
        AI: { chase: true, },
        MAX_CHILDREN: 4,
        GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
            POSITION: [   6,     12,    1.2,     8,      0,      0,      0,   ], 
                PROPERTIES: {
                    SHOOT_SETTINGS: combineStats([g.drone, g.weak, g.weak]),
                    TYPE: [exports.sentryGun, { LABEL: 'Sentry', VARIES_IN_SIZE: true, DRAW_HEALTH: true }],
                    SYNCS_SKILLS: true,
                    AUTOFIRE: true,
                    STAT_CALCULATOR: gunCalcNames.drone,
                }, },
        ],
    };
    exports.elite = {
        PARENT: [exports.miniboss],
        LABEL: 'Elite Crasher',
       CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel', 'mapTargetToGoal'],
        COLOR: 5,
        SHAPE: 3,
        SIZE: 22,
        VARIES_IN_SIZE: true,
        VALUE: 150000,
        BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.25,
            HEALTH: 300,
            SHIELD: base.SHIELD * 1.25,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 2.5,
        },
    };
exports.elitelegions = {
        PARENT: [exports.miniboss],
        LABEL: 'Elite Minion',
       CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel', 'mapTargetToGoal'],
        COLOR: 5,
        SHAPE: 3,
        SIZE: 22,
        VARIES_IN_SIZE: true,
        BROADCAST_MESSAGE: "An Elite Minion has fallen!",
        VALUE: 150000,
        HITS_OWN_TYPE: 'hard',
        AI: { STRAFE: true, },
        BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.25,
            HEALTH: 70,
            SHIELD: base.SHIELD * 1.25,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 2.5,
        },
    };
exports.legionarybody = {
  PARENT: [exports.genericTank],
  LABEL: '',
  CONTROLLERS: ['spin', 'nearestDifferentMaster'],
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
       CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel', 'mapTargetToGoal'],
        COLOR: 2,
        SHAPE: 3,
        SIZE: 22,
        VARIES_IN_SIZE: true,
        VALUE: 150000,
        BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.25,
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
       CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel', 'mapTargetToGoal'],
        COLOR: 14,
        SHAPE: 5,
        SIZE: 65,
        VARIES_IN_SIZE: true,
        VALUE: 150000,
        MAX_CHILDREN: 10,
        BODY: {
            FOV: 1.3,
            SPEED: base.SPEED * 0.25,
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
            POSITION: [  6.5,     10.5,      0,     0,    125 , 0],
                TYPE: [exports.turretnest, {INDEPENDENT: false, COLOR: 14,}]
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
                            SHOOT_SETTINGS: combineStats([g.swarmXX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                POSITION: [    4.5,    5,     0.6,      6,      0,     60,     0,   ], 
                    PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmXX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                POSITION: [    4.5,    5,     0.6,      6,      0,     -60,     0,   ], 
                    PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmXX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        }, }, {
                POSITION: [    6,    5,     0.6,      6,      8,     -60,     0.5,   ],
                                              PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmXX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    5,     0.6,      6,     -8,      60,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmXX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    5,     0.6,      6,     -8,     -60,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmXX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    5,     0.6,      6,      8,      60,     0.5,   ],
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmXX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    5,     0.6,      6,      -8,     180,     0.5,   ], 
                                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.swarmXX, g.battleX]),
                            TYPE: exports.swarm,
                            STAT_CALCULATOR: gunCalcNames.swarm,        
                            LABEL: 'Guided'                
                        },
                  }, {
                POSITION: [    6,    5,     0.6,      6,      8,     180,     0.5,   ],
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
            exports.cyclibe = {
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
                    TYPE: exports.cyclones,
                        },
             ]
            };
        exports.elite_destroyer = {
            PARENT: [exports.elite],
            CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel', 'mapTargetToGoal'],
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
            CONTROLLERS: ['nearestDifferentMaster', 'minion', 'canRepel', 'mapTargetToGoal'],
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
                POSITION: [  11,     0,      0,     180,    360,   0, ], 
                    TYPE: [exports.Sentru]
                    }, {
                POSITION: [  11,     0,      0,      60,    360,   0, ],  
                    TYPE: [exports.Sentru2]
                    }, {
                POSITION: [  11,     0,      0,     -60,    360,   0, ],  
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
                        TYPE: [exports.pillbox, { INDEPENDENT: true, }],
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
exports.elite_gunnerlegion = {
            PARENT: [exports.elitelegions],
            GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                POSITION: [  14,    16,      1,      0,      0,     180,     0,   ],
                    }, {
                POSITION: [   4,    16,     1.5,    14,      0,     180,     0,   ], 
                    PROPERTIES: {
                        SHOOT_SETTINGS: combineStats([g.trap, g.hexatrap]),
                        TYPE: [exports.pillbox, { INDEPENDENT: true, }],
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
            SKILL: [5,9,9,9,5,9,9,9,9,0],
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
exports.legionarycrasher = {
  PARENT: [exports.elite],
  LABEL: 'Legionary Crasher',
  SIZE: 70,
  BROADCAST_MESSAGE: 'An Elite Legion has been Defeated!',
  HAS_NO_RECOIL: true,
          SKILL: [0,9,9,9,9,9,9,9,9,8],
          NAME: ' ',
          VALUE: 100000000,
           COLOR: 5,
          LEVEL: 500,
 BODY: {
                FOV: 0.8,
                HEALTH: 800,
                SHIELD: 10,
                SPEED: base.SPEED * 0.25,
                DAMAGE:  25,
            },
        FACING_TYPE: 'autospin',
  GUNS: [{/*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
POSITION: [   2.3,     14,    -1.2,     8,      0,     180,      0,   ], 
  },
  {
POSITION: [   2.3,     14,    -1.2,     8,      0,     60,      0,   ], 
  },
  {
POSITION: [   2.3,     14,    -1.2,     8,      0,     -60,      0,   ], 
  }, {
///////////////////////////////////////////////////////////
    POSITION: [4.6, 11, 1, 11.3, 0, 0, 0]
    },
    {
            POSITION: [3, 3, 1.4, 14, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniperXX]),
        TYPE: exports.elite_sprayerlegion,
        MAX_CHILDREN: 1,
      }, }, {
            POSITION: [3, 3, 1.4, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniperXX]),
        TYPE: exports.elite_battleshiplegion,
        MAX_CHILDREN: 1,
      }, }, {
            POSITION: [3, 3, 1.4, 14, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniperXX]),
        TYPE: exports.elite_gunnerlegion,
        MAX_CHILDREN: 1,
      }, }, {
      POSITION: [3, 11, 1.4, 14, 0, 0, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniperXX]),
        TYPE: exports.smasher,
        MAX_CHILDREN: 1,
      }, }, {
      POSITION: [4.6, 11, 1, 11.3, 0, 120, 0]
    },
    {
      POSITION: [3, 11, 1.4, 14, 0, 120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniperXX]),
        TYPE: exports.smasher,
        MAX_CHILDREN: 1,
      }, }, {
      POSITION: [4.6, 11, 1, 11.3, 0, -120, 0]
    },
    {
      POSITION: [3, 11, 1.4, 14, 0, -120, 0],
      PROPERTIES: {
        SHOOT_SETTINGS: combineStats([g.basic, g.sniperXX]),
        TYPE: exports.smasher,
        MAX_CHILDREN: 1,
      }, }
///////////////////////////////////////////////////////////
],
        TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                POSITION: [  13,     8,      0,     180,    90, 0], 
                    TYPE: [exports.spraylegion, { COLOR: 5, }],
                        }, {
                POSITION: [  13,     8,      0,      60,    90, 0], 
                    TYPE: [exports.spraylegion, { COLOR: 5, }],
                        }, {
                POSITION: [  13,     8,      0,     -60,    90, 0], 
                    TYPE: [exports.spraylegion, { COLOR: 5, }],
                        }, {
                POSITION: [  13,     0,      0,     0,   360, 1],
                    TYPE: [exports.legionarybody],
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
                DANGER: 0,
                SIZE: 25,
                HAS_NO_RECOIL: true,
                BODY: {
                INTANGIBLE: true,
                              SPEED: base.SPEED * 0.25,
            HEALTH: base.HEALTH * 1.5,
            SHIELD: base.SHIELD * 1.25,
            REGEN: base.REGEN,
            DAMAGE: base.DAMAGE * 2.5,
                },
                SHAPE: 4,
                FACING_TYPE: 'autospin',
                MAX_CHILDREN: 32,
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [   3,     9,    1.2,     8,      0,     90,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.pound3, g.summoner, g.stream]),
                            TYPE: exports.sumchip,
                            AUTOFIRE: true
                        }, }, {
                    POSITION: [   3,     9,    1.2,     8,      0,     270,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.pound3, g.summoner, g.stream]),
                            TYPE: exports.sumchip,
                        }, }, {
                    POSITION: [   3,     9,    1.2,     8,      0,      0,     0, ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.pound3, g.summoner, g.stream]),
                            TYPE: exports.sumchip,
                            AUTOFIRE: true
                        }, }, {
                    POSITION: [   3,     9,    1.2,     8,      0,     180,    0,  ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.pound3, g.summoner, g.stream]),
                            TYPE: exports.sumchip,
                            AUTOFIRE: true

                        }, },
                    ],
            };
exports.celestialtes = { 
                PARENT: [exports.genericTank],
                DANGER: 5,
                LABEL: 'Definitly Auto-4',
                FACING_TYPE: 'autospin',
                TURRETS: [{ /*  SIZE     X       Y     ANGLE    ARC */
                    POSITION: [  38,     0,      0,      0,    360, 1], 
                        TYPE: exports.Celestialbody32,
                            },
                ],
            };
exports.bot = {
    AUTO_UPGRADE: 'random',
    FACING_TYPE: 'looseToTarget',
    BODY: {
        SIZE: 10,
    },
    //COLOR: 17,
    NAME: "[AI]",
    CONTROLLERS: [
        'nearestDifferentMaster', 'mapAltToFire', 'minion', 'fleeAtLowHealth'
    ],
    AI: { STRAFE: false, },
};
exports.bosses.UPGRADES_TIER_1 = [exports.elite_sprayer,exports.elite_destroyer,exports.elite_spawner,exports.elite_gunner, exports.elite_battleship, exports.bosses2];
exports.bosses2.UPGRADES_TIER_1 = [exports.palisade,exports.summoner,exports.skimboss, exports.cyclibe, exports.nestkeep, exports.bosses3];
exports.bosses3.UPGRADES_TIER_1 = [exports.Celestialtheia, exports.Celestialnyx, exports.Celestialzaphkiel, exports.Celestialpaladin, exports.Celestialfreyja, exports.bosses4];
exports.bosses4.UPGRADES_TIER_1 = [exports.ragnarok, exports.Celestialeternal, exports.legionarycrasher];
exports.sentries.UPGRADES_TIER_1 = [
  exports.sentrySwarm,
  exports.sentryGun,
  exports.sentryTrap,
];
exports.betabosses.UPGRADES_TIER_3 = [
  exports.celestialtes,
];