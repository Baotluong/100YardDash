class Race {
  constructor(params) {
    const {
      numberOfPlayers = 2,
      maxWaitTime = 3000,
      minWaitTime = 1000,
      maxRunDistance = 10,
      minRunDistance = 1,
      fieldLength = 100,
      IPlayer,
    } = params;
    this.numberOfPlayers = numberOfPlayers;
    this.maxWaitTime = maxWaitTime;
    this.minWaitTime = minWaitTime;
    this.maxRunDistance = maxRunDistance;
    this.minRunDistance = minRunDistance;
    this.fieldLength = fieldLength;
    this.finishes = [];
    this.IPlayer = IPlayer;
  }

  playerFinished = ({ playerNumber }) => {
    this.finishes = [ ...this.finishes, playerNumber ];
    if(this.finishes.length >= this.numberOfPlayers) {
      this.raceFinished();
    }
  }
  
  raceFinished = () => {
    console.log(`The race has finished. The final standings are:`);
    this.finishes.forEach((playerNumber, index) => {
      console.log(`${index+1}: Player ${playerNumber}`);
    })
  }
  
  startRace = () => {
    for (let playerNumber = 1; playerNumber <= this.numberOfPlayers; playerNumber++) {
      const player = new this.IPlayer({
        playerNumber,
        maxWaitTime: this.maxWaitTime,
        minWaitTime: this.minWaitTime,
        maxRunDistance: this.maxRunDistance,
        minRunDistance: this.minRunDistance,
        fieldLength: this.fieldLength,
        iFinished: () => { this.playerFinished({ playerNumber }) },
      });
      player.waitThenRun();
    }
  }
}

module.exports = Race;