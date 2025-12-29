export default function Status({ winner, isXTurn }) {
  if (winner) {
    return <h2>Winner: {winner}</h2>;
  }

  return <h2>Turn: {isXTurn ? "X" : "O"}</h2>;
}
