/* =============================================
This script handles how the results are renderd
===============================================*/

import { elements } from "./base";

/*  Handles the number of stars to display */
const stars = i => {
  let item = "";
  if (i == 1) {
    item = `<i class="fa fa-star "></i> 
            <i class="fa fa-star "></i>
            <i class="fa fa-star "></i>`;
  } else if (i == 2) {
    item = `<i class="fa fa-star "></i> 
            <i class="fa fa-star "></i>`;
  } else if (i == 3) {
    item = `<i class="fa fa-star "></i> `;
  } else if (i == 4) {
    item = "Win with fewer moves to gain star.";
  }
  return item;
};

/*  Indicates the player position on the score-boad */
const presentPosition = (totalMoves, currentMoves, j) => {
  let tag = "";
  for (let i = 0; i < totalMoves.length; i++) {
    if (totalMoves[totalMoves.length - 1] == currentMoves[j - 1]) {
      tag =
        '<li class = "current"><span class="total-moves">' +
        currentMoves[j - 1];
    } else {
      tag = '<li><span class="total-moves">' + currentMoves[j - 1];
    }
    return tag;
  }
};

/* Handles the results HTML  */
const resultHtml = (totalMoves, currentMoves, j) => {
  const markup =
    presentPosition(totalMoves, currentMoves, j) +
    '</span><span class="star awarded-star">' +
    stars(j) +
    " </span></li>";

  elements.latesResults.insertAdjacentHTML("beforeend", markup);
};

/* loop throug the moves array and render the results*/
export const renderResult = (totalMoves, currentMoves) => {
  for (let i = 1; i <= currentMoves.length; i++) {
    resultHtml(totalMoves, currentMoves, i);
  }
};

/* Clear the results  */
export const clearResult = () => {
  elements.latesResults.innerHTML = "";
};
