# Code Storage
## unsued or important code
Map Setup 6 sancs

    [ "norm", "norm", "norm", "norm", "norm", "wall", "norm", "norm", "norm", "norm", "norm"],
    [ "norm", "wall", "wall", "wall", "wall", "bas3", "wall", "wall", "wall", "wall", "norm"],
    [ "norm", "wall", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    [ "norm", "wall", "norm", "bas1", "norm", "bas1", "norm", "bas1", "norm", "wall", "norm"],
    [ "norm", "wall", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "wall", "norm"],
    [ "wall", "bas3", "norm", "bas1", "norm", "nest", "norm", "bas1", "norm", "bas3", "wall"],
    [ "norm", "wall", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "wall", "norm"],
    [ "norm", "wall", "norm", "bas1", "norm", "bas1", "norm", "bas1", "norm", "wall", "norm"],
    [ "norm", "wall", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "wall", "norm"],
    [ "norm", "wall", "wall", "wall", "wall", "bas3", "wall", "wall", "wall", "wall", "norm"],
    [ "norm", "norm", "norm", "norm", "norm", "wall", "norm", "norm", "norm", "norm", "norm"]
Map Setup 4 sancs

    [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    [ "norm", "wall", "wall", "wall", "bas3", "bas3", "wall", "wall", "wall", "norm"],
    [ "norm", "wall", "norm", "norm", "norm", "norm", "norm", "norm", "wall", "norm"],
    [ "norm", "wall", "norm", "bas1", "nest", "nest", "bas1", "norm", "wall", "norm"],
    [ "norm", "bas3", "norm", "nest", "norm", "norm", "nest", "norm", "bas3", "norm"],
    [ "norm", "bas3", "norm", "nest", "norm", "norm", "nest", "norm", "bas3", "norm"],
    [ "norm", "wall", "norm", "bas1", "nest", "nest", "bas1", "norm", "wall", "norm"],
    [ "norm", "wall", "norm", "norm", "norm", "norm", "norm", "norm", "wall", "norm"],
    [ "norm", "wall", "wall", "wall", "bas3", "bas3", "wall", "wall", "wall", "norm"],
    [ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"]
Kronos Code

    exports.Celestialeternal = {
            PARENT: [exports.genericTank],
          LABEL: 'Celestial Eternal',
          NAME: "Kronos",
          SKILL: [0,9,9,9,9,9,9,9,9,9],
          SHAPE: 12,
          VALUE: 100000000,
           COLOR: 6,
               LEVEL: 500,
          SIZE: 95,
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
Single Code

       exports.singlestream = {
                PARENT: [exports.genericTank],
                LABEL: 'Streaming Single',
                //CONTROLLERS: ['nearestDifferentMaster'],
                GUNS: [ { /*** LENGTH  WIDTH   ASPECT    X       Y     ANGLE   DELAY */
                    POSITION: [  19.4,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.singlestream]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    },{ 
                    POSITION: [  19.4,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.singlestream]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    },{ 
                    POSITION: [  19.4,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.singlestream]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    },{ 
                    POSITION: [  19.4,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.singlestream]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    },{ 
                    POSITION: [  19.4,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.singlestream]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    },{ 
                    POSITION: [  19.4,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.singlestream]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    },{ 
                    POSITION: [  19.4,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.singlestream]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    },{ 
                    POSITION: [  19.4,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.singlestream]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    },{ 
                    POSITION: [  19.4,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.singlestream]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    },{ 
                    POSITION: [  19.4,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.singlestream]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    },{ 
                    POSITION: [  19.4,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.singlestream]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    },{ 
                    POSITION: [  19.4,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.singlestream]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    },{ 
                    POSITION: [  19.4,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.singlestream]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    },{ 
                    POSITION: [  19.4,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.singlestream]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    },{ 
                    POSITION: [  19.4,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.singlestream]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    },{ 
                    POSITION: [  19.4,     8,      1,      0,      0,      0,      0,   ], 
                        PROPERTIES: {
                            SHOOT_SETTINGS: combineStats([g.basic, g.singlestream]),
                            TYPE: exports.bullet,
                        }, },  {
                    POSITION: [  5.5,    8,    -1.8,    6.5,     0,      0,      0,   ],                         
                    }
                ],
            };
Boss Spawning Function (Old)

    let spawnBosses = (() => {
        let timer = 0;
        let boss = (() => {
            let i = 0,
                names = [],
                bois = [Class.egg],
                n = 0,
                begin = 'yo some shit is about to move to a lower position',
                arrival = 'Something happened lol u should probably let Neph know this broke',
                loc = 'norm';
            let spawn = () => {
                let spot, m = 0;
                do {
                    spot = room.randomType(loc); m++;
                } while (dirtyCheck(spot, 500) && m<30);
                let o = new Entity(spot);
                    o.define(ran.choose(bois));
                    o.team = -100;
                    o.name = names[i++];
            };
            return {
                prepareToSpawn: (classArray, number, nameClass, typeOfLocation = 'norm') => {
                    n = number;
                    bois = classArray;
                    loc = typeOfLocation;
                    names = ran.chooseBossName(nameClass, number);
                    i = 0;
                    if (n === 1) {
                        begin = 'A visitor is coming.';
                        arrival = names[0] + ' has arrived.'; 
                    } else {
                        begin = 'Visitors are coming.';
                        arrival = '';
                        for (let i=0; i<n-2; i++) arrival += names[i] + ', ';
                        arrival += names[n-2] + ' and ' + names[n-1] + ' have arrived.';
                    }
                },
                spawn: () => {
                    sockets.broadcast(begin);
                    for (let i=0; i<n; i++) {
                        setTimeout(spawn, ran.randomRange(3500, 5000));
                    }
                    // Wrap things up.
                    setTimeout(() => sockets.broadcast(arrival), 5000);
                    util.log('[SPAWN] ' + arrival);
                },
            };
        })();
        return census => {
            if (timer > 70 && ran.dice(160 - timer)) {
                util.log('[SPAWN] Preparing to spawn...' + Class);
                timer = 0;
                let choice = [];
                switch (ran.chooseChance(1, 1, 1, 1)) {
                    case 0: 
                        choice = [[Class.elite_destroyer,Class.elite_sprayer,Class.elite_gunner, Class.elite_gunner,Class.elite_spawner], 1, 'a', 'bas3'];
                        break;
                    case 1: 
                        choice = [[Class.elite_destroyer,Class.elite_sprayer,Class.elite_battleship, Class.elite_gunner,Class.elite_spawner], 2, 'a', 'bas3'];
                        break;
                    case 2: 
                        choice = [[Class.palisade,Class.summoner,Class.skimboss,Class.cyclibe, Class.nestkeep], 1, 'a', 'bas3']; 
                        sockets.broadcast('A strange trembling...');
                        break;
                    case 3: 
                        choice = [[Class.palisade,Class.summoner,Class.skimboss,Class.cyclibe, Class.nestkeep], 2, 'a', 'bas3']; 
                        sockets.broadcast('A strange trembling...');
                        break; 

                }
                boss.prepareToSpawn(...choice);
                setTimeout(boss.spawn, 300);
                // Set the timeout for the spawn functions
            } else if (!census.miniboss) timer++;
        };
    })();