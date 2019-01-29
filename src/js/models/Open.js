/* ================================================
      This script opens or closes the cards
==================================================*/

export const openCard = target => {
  if (target.classList.contains("show", "open")) {
    target.classList.remove("show", "open");
  } else {
    target.classList.add("show", "open");
  }
};
