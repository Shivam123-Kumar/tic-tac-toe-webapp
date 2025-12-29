import Square from "./Square";

export default function Board({ board, onMove }) {
  return (
    <div className="board">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onMove(index)}
        />
      ))}
    </div>
  );
}
