let playerPoints = 100;
let playerSkill = 7;
let daysOnIsland = 0;
const fullMonth = 30;
const points = 10;

class Player {
  constructor(name) {
    this.name = name;
    this.playerSkill = playerSkill;
    this.playerPoints = playerPoints;
    this.daysOnIsland = daysOnIsland;
  }
  rollDice() {
    return Math.round(Math.random() * 10);
  }
  playerFood() {
    const food = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    if (food) {
      this.playerPoints += points;
      console.log(`${this.name} found food`);
    } else {
      this.playerPoints -= points;
      console.log(`${this.name} did not find food`);
    }
  }
  motherNature() {
    const motherNatureRoll = this.rollDice();
    const playerRoll = this.rollDice();

    if (motherNatureRoll > playerRoll) {
      this.playerPoints -= points;
      console.log(`${this.name} lost the dice roll to Mother Nature`);
    } else if (motherNatureRoll < playerRoll) {
      this.playerPoints += points;
      console.log(`${this.name} won the dice roll against Mother Nature`);
    } else if (motherNatureRoll === playerRoll) {
      console.log("No one wins the dice roll");
    }
  }
  nextDay() {
    this.daysOnIsland += 1;
    if (this.daysOnIsland <= 1) {
      console.log(
        `${this.name} has spent ${this.daysOnIsland} day on the island`
      );
    } else if (this.daysOnIsland >= 2) {
      console.log(
        `${this.name} has spent ${this.daysOnIsland} days on the island`
      );
    }
  }
  survived() {
    if (this.daysOnIsland === fullMonth)
      console.log(`${this.name} survived ${this.fullMonth} days!`);
  }
  playerDeath() {
    if (this.playerPoints <= 0) return `${this.name} is dead`;
  }
  vsMotherNature() {
    this.nextDay();
    this.playerFood();
    this.motherNature();
    this.survived();
    this.playerDeath();
    console.log(
      `${this.name}'s current points are ${this.playerPoints} points`
    );
  }
}
