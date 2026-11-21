import Board from "./Board";
import { useState } from "react";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const isXNext = currentMove % 2 === 0;

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (move) => {
    setCurrentMove(move);
  };

  return (
    <>
      <Board
        currentSquares={currentSquares}
        isXNext={isXNext}
        onChange={handlePlay}
      />
      <div>
        <ol>
          {history.map((_, move) => (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>
                {move === 0 ? "Go to game start" : `Go to move #${move}`}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
