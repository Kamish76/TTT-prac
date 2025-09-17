import './square.css';
interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

export const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <button className={`square ${value ? ' ' + value.toLowerCase() : ''}`} onClick={onSquareClick}>
      {value}
    </button>
  );
};