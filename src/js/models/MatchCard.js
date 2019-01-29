/* =================================================
   This script checks if two opened cards are matched
======================================================*/

export default class Match {
  constructor(card_1, card_2, playerMoves = 0, openCards) {
    this.card_1 = card_1;
    this.card_2 = card_2;
    this.playerMoves = playerMoves;
    this.openCards = openCards;
  }

  matchCard(cardID) {
    if (this.card_1 == "") {
      this.card_1 = cardID.target.firstElementChild.id;
    } else if (
      this.card_2 == "" &&
      cardID.target.firstElementChild.id != this.card_1
    ) {
      this.card_2 = cardID.target.firstElementChild.id;

      // Compare card_1 and card_2 content.
      this.compare();
    } else {
      this.openCards.pop(this.openCards.length - 1);
    }
  }

  /* =====================================
             Compare Function
  ========================================*/
  compare() {
    const element_1 = document.getElementById(this.card_1);
    const element_2 = document.getElementById(this.card_2);

    if (this.card_1 != "" && this.card_2 != "") {
      if (element_1.className == element_2.className) {
        // The cards have the same images
        this.isMatch(element_1, element_2);
      } else if (element_1.className != element_2.className) {
        // The cards have different images
        this.notMatch(element_1, element_2);
      }
    }
  }

  /*=====================================
            The cards matched
======================================*/

  isMatch(element_1, element_2) {
    element_1.parentNode.classList.add("match");
    element_2.parentNode.classList.add("match");
    element_1.parentNode.classList.remove("show", "open");
    element_2.parentNode.classList.remove("show", "open");
    this.card_1 = "";
    this.card_2 = "";
    this.playerMoves++;
  }

  /*=====================================
            The cards did not  match
======================================*/
  notMatch(element_1, element_2) {
    this.openCards.pop(this.openCards.length - 1);
    this.openCards.pop(this.openCards.length - 2);
    element_1.parentNode.classList.remove("show", "open");
    element_2.parentNode.classList.remove("show", "open");
    this.card_1 = "";
    this.card_2 = "";
    this.playerMoves++;
  }
}
