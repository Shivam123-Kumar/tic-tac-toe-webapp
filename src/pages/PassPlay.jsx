import { useState } from "react";
import Board from "../components/Board";
import Status from "../components/Status";

const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

// function checkWinner(board) {
//   for (let [a, b, c] of winPatterns) {
//     if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//       return board[a];
//     }
//   }
//   return null;
// }

import { checkWinner, isDraw } from "../utils/gameUtils";


export default function PassPlay() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = checkWinner(board);

  function handleMove(index) {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  }

  return (
    <div className="game">
      <h1>Pass & Play</h1>
      <Status winner={winner} isXTurn={isXTurn} />
      <Board board={board} onMove={handleMove} />
      <button onClick={resetGame}>Restart</button>
    </div>
  );
}
