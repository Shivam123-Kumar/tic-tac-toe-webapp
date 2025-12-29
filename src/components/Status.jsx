// export default function Status({ winner, isXTurn }) {
//   if (winner) {
//     return <h2>Winner: {winner}</h2>;
//   }

//   return <h2>Turn: {isXTurn ? "X" : "O"}</h2>;
// }


export default function Status({ winner, isXTurn }) {
  return (
    <h2 style={{ marginBottom: "10px", color: "#ffd60a" }}>
      {winner
        ? `Winner: ${winner}`
        : `Turn: ${isXTurn ? "X" : "O"}`}
    </h2>
  );
}
