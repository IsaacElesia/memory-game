/* ===============================================
    This script shuffles the card deck
==================================================*/

export default class Shuffle {
  constructor(shuffled) {
    this.shuffled = shuffled;
  }

  shuffleCards() {
    let currentIndex = this.shuffled.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.shuffled[currentIndex];
      this.shuffled[currentIndex] = this.shuffled[randomIndex];
      this.shuffled[randomIndex] = temporaryValue;
    }
  }
}
