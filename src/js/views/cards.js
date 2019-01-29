import { elements } from "./base";

/*
 * Create a list that holds all of your cards
 */
export const cardNames = [
  { className: "fa fa-diamond", id: "card-01" },
  { className: "fa fa-paper-plane-o", id: "card-02" },
  { className: "fa fa-anchor", id: "card-03" },
  { className: "fa fa-bolt", id: "card-04" },
  { className: "fa fa-cube", id: "card-05" },
  { className: "fa fa-anchor", id: "card-06" },
  { className: "fa fa-leaf", id: "card-07" },
  { className: "fa fa-bicycle", id: "card-08" },
  { className: "fa fa-diamond", id: "card-09" },
  { className: "fa fa-bomb", id: "card-10" },
  { className: "fa fa-leaf", id: "card-11" },
  { className: "fa fa-bomb", id: "card-12" },
  { className: "fa fa-bolt", id: "card-13" },
  { className: "fa fa-bicycle", id: "card-14" },
  { className: "fa fa-paper-plane-o", id: "card-15" },
  { className: "fa fa-cube", id: "card-16" }
];

/* create card html  */
const cardHtml = card => {
  const markup = `<li class="card "><i class="${card.className}" id="${
    card.id
  }"></i></li>`;
  elements.deck.insertAdjacentHTML("beforeend", markup);
};

/* loop throug each card */
export const renderCard = cardNames => {
  cardNames.forEach(cardHtml);
};

export const clearDeck = () => {
  elements.deck.innerHTML = "";
};
