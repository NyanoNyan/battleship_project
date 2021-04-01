import React, { useState } from "react";

import DisplayBoard from "./components/DisplayBoard.js"

import Ship from "../src/factory_functions/ship";
import GameBoard from "../src/factory_functions/gameboard";
import Player from "../src/factory_functions/player";


const App = () => {
  const [isSetUp, setIsSetUp] = useState(false);
  

  // Set up methods
  const onClick = (e) => {
    e.target.textContent = "X";
    let test = newGameBoardP.receiveAttack(e.target.id);
    console.log(test);
    // console.log(newGameBoardP.checkAllSunk());
  }


  // Set up Game
  const newGameBoardP = GameBoard();
  const newGameBoardC = GameBoard();
  const newPlayers = Player();

  newGameBoardP.placeShips("Carrier", ["A1", "A2", "A3", "A4", "A5"], 5);
  newGameBoardP.placeShips("Battleship", ["C1", "C2", "C3", "C4"], 4);
  newGameBoardP.placeShips("Cruiser", ["E1", "E2", "E3"], 3);
  newGameBoardP.placeShips("Submarine", ["G1", "G2", "G3"], 3);
  newGameBoardP.placeShips("Destroyer", ["I1", "I2"], 2);

  newGameBoardC.placeShips("Carrier", ["J1", "J2", "J3", "J4", "J5"], 5);
  newGameBoardC.placeShips("Battleship", ["H1", "H2", "H3", "H4"], 4);
  newGameBoardC.placeShips("Cruiser", ["F1", "F2", "F3"], 3);
  newGameBoardC.placeShips("Submarine", ["D1", "D2", "D3"], 3);
  newGameBoardC.placeShips("Destroyer", ["B1", "B2"], 2);

  return (
    <div>
      <DisplayBoard 
        onClick = {onClick}
      />
    </div>
  )
}

export default App;
