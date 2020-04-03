class Player {
  constructor(params) {
    const {
      playerNumber,
      currentPosition = 0,
      maxWaitTime,
      minWaitTime,
      maxRunDistance,
      minRunDistance,
      fieldLength,
      iFinished,
      playerName,
    } = params;
    this.playerNumber = playerNumber;
    this.currentPosition = currentPosition;
    this.maxWaitTime = maxWaitTime;
    this.minWaitTime = minWaitTime;
    this.maxRunDistance = maxRunDistance;
    this.minRunDistance = minRunDistance;
    this.fieldLength = fieldLength;
    this.iFinished = iFinished;
    this.playerName = playerName;
  }

  generateRandomTimeDelay = () => { 
    const delay = Math.floor(Math.random() * this.maxWaitTime) + this.minWaitTime;
    return delay;
  };

  generateRandomRunDistance = () => {
    const distance = Math.floor(Math.random() * this.maxRunDistance) + this.minRunDistance;
    return distance;
  };

  waitThenRun = () => {
    setTimeout(this.run, this.generateRandomTimeDelay());
  }

  run = async () => {
    this.currentPosition += this.generateRandomRunDistance();
    if (this.currentPosition < this.fieldLength) {
      console.log(`Player ${this.playerNumber} ran to the ${this.currentPosition} yd line.`);
      return this.waitThenRun();
    } else {
      console.log(`** Player ${this.playerNumber} has reached the End Zone. **`);
      return this.iFinished();
    }
  }
}

module.exports = Player;