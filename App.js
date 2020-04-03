const Player = require('./Player');
const Race = require('./Race');

const race = new Race({
  numberOfPlayers: process.argv[2],
  maxWaitTime: process.argv[3],
  minWaitTime: process.argv[4],
  maxRunDistance: process.argv[5],
  minRunDistance: process.argv[6],
  fieldLength: process.argv[7],
  IPlayer: Player,
});

race.startRace();
