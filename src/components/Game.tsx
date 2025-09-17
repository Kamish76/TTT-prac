import { useState } from "react";
import { Board } from "./Board.tsx";

export const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    const description = "Go To Move " + move;

    if(move <= 0) {
        return null;
    }
    return (
        <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
    );

  });

  function restartGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <p>Move History</p>
        <ol>{moves}</ol>

        <div className="restart-button">
          <button onClick={() => restartGame()}>Restart Game</button>
        </div>
      </div>
    </div>
  );
};