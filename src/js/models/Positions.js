/* ===============================================
  This script arrange the app score 
==================================================*/

export const playersPositions = totalMoves => {
  if (totalMoves.length == 5) {
    totalMoves.splice(3, 1);
  }
  let gameMoves = [...totalMoves];
  const currentPositions = gameMoves.sort();
  return currentPositions;
};
