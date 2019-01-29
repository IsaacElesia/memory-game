/* ==============================================
      This script creates list of opened cards
==================================================*/

export const openCardList = (listArray, cardName) => {
  if (cardName) {
    listArray.push(cardName.target.firstElementChild.className);
  }
};
