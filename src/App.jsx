import React, { useState } from "react";
import GameBoard from "./components/Gameboard.jsx"
import Log from "./components/Log.jsx";
import Player from "./components/Player.jsx"

//helper function
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}


function App() {

  const [gameTurns, setGameTurns] = useState([]);

  // const [playerActive, setPlayerActive] = useState('X');
  const activePalyer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    // setPlayerActive((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');

    setGameTurns((prevTurns) => {

      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns,];

      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePalyer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePalyer === 'O'} />
        </ol>

        {/* GAME BOEARD */}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns} />
      </div>
      {/* LOG */}
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
