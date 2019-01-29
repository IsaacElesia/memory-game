import Shuffle from "./models/Shuffle";
import * as cards from "./views/cards";
import { elements } from "./views/base";
import Match from "./models/MatchCard";
import * as open from "./models/Open";
import * as list from "./models/List";
import * as positions from "./models/Positions";
import * as results from "./views/results";

/** Global state of the app
 * -current card deck
 * -method for matching the cards
 */
const state = { openCards: [], totalMoves: [] };

/* ===============================================
    Initialize Various Properties of the App
===================================================*/
const init = () => {
  cards.clearDeck();
  /* Shuffle the cards */
  state.card.shuffleCards();
  /* display the cards */
  cards.renderCard(state.card.shuffled);
  elements.moves.textContent = 0;
  state.match.playerMoves = 0;
  state.openCards.length = 0;
  results.clearResult();
};

/* ============================================
          Main control of the App
==============================================*/
const controlCards = () => {
  const card_1 = "",
    card_2 = "",
    playerMoves = 0;

  /* list of cards */
  const cardNames = cards.cardNames;

  /* Initialize the current card deck */
  state.card = new Shuffle(cardNames);

  /* Initialize the match method */
  state.match = new Match(card_1, card_2, playerMoves, state.openCards);

  /* Hide the score-board */
  elements.scoreBoard.style.display = "none";

  init();
};
controlCards();

/* ===========================================
  Events that occur when a card is clicked
===============================================*/
elements.deck.addEventListener("click", e => {
  if (e.target.tagName == "LI") {
    open.openCard(e.target);
    list.openCardList(state.openCards, e);
    state.match.matchCard(e);
  }

  elements.moves.textContent = state.match.playerMoves;

  /* Events that occur when all the cards had been matched */
  if (state.openCards.length == 16) {
    state.totalMoves.push(state.match.playerMoves);
    const positons = positions.playersPositions(state.totalMoves);
    elements.scoreBoard.style.display = "flex";
    elements.deck.style.display = "none";
    elements.restart.style.display = "none";
    results.renderResult(state.totalMoves, positons);
  }

  /*   console.log(state.openCards);
  console.log("openCard length = " + state.openCards.length);
  console.log(`match Player moves ${state.match.playerMoves}`);
  console.log(`card_1 = ${state.match.card_1}`);
  console.log(`card_2 = ${state.match.card_2}`);
  console.log(`Total Moves = ${state.totalMoves}`); */
});

/* ===============================================
Events that occur when restart symbol is clicked
===================================================*/
elements.restart.addEventListener("click", init);

/* ===============================================
Events that occur when a player click Play-again
===================================================*/
elements.playAgain.addEventListener("click", e => {
  controlCards();
  elements.deck.style.display = "flex";
});
