import { Square } from "./Square";
import { calculateWinner } from "../../lib/calculateWinner";
import './board.css';

interface BoardProps {
  xIsNext: boolean;
  squares: ( string | null )[];
  onPlay: (nextSquares: (string | null)[]) => void;
}

export const Board = ({ xIsNext, squares, onPlay }: BoardProps) => {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onSquareClick={() => handleClick(i)} />;
  };

  const boardSize = 3;
  const boardRows = [];
  for (let i = 0; i < boardSize; i++) {
    const rowSquares = [];
    for (let j = 0; j < boardSize; j++) {
      rowSquares.push(renderSquare(i * boardSize + j));
    }
    boardRows.push(<div key={i} className="board-row">{rowSquares}</div>);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        {boardRows}
      </div>
    </>
  );
};
