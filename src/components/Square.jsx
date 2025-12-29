export default function Square({ value, onClick }) {
  const color =
    value === "X"
      ? "#09ff00ff"   // neon blue
      : value === "O"
      ? "#ff4d6d"   // neon red
      : "#00ffea5f";

  return (
    <button
      className={`square ${value ? "filled" : ""}`}
      style={{ color }}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
