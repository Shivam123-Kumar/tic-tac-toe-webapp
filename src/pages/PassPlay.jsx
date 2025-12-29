import { useState, useEffect } from "react";
import Board from "../components/Board";
import Status from "../components/Status";

import { checkWinner, isDraw } from "../utils/gameUtils";
import { playClick, playWin, playDraw } from "../utils/sound";

export default function PassPlay() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const winner = checkWinner(board);

  // HANDLE PLAYER MOVE
  function handleMove(index) {
    if (board[index] || winner) return;

    playClick();

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  }

  // WIN / DRAW SOUND EFFECT
  useEffect(() => {
    if (winner) {
      playWin();
    } else if (isDraw(board)) {
      playDraw();
    }
  }, [winner, board]);

  // RESET GAME
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
