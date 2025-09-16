interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

export const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};