import GameBoard from "./components/Gameboard.jsx"
import Player from "./components/Player.jsx"
import { useState } from "react";
function App() {
  const [playerActive, setPlayerActive] = useState('X');

  function handleSelectSquare() {
    setPlayerActive((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={playerActive === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={playerActive === 'O'} />
        </ol>

        {/* GAME BOEARD */}
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol ={playerActive} />
      </div>
      LOG
    </main>
  ) 
}

export default App
