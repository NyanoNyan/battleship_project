import React, { useState, useEffect } from "react";
import "./styles/App.css";
import DisplayBoard from "./components/DisplayBoard.js";
import createValidMoves from "../src/factory_functions/createValidMoves";
import Ship from "../src/factory_functions/ship";
import GameBoard from "../src/factory_functions/gameboard";
import Player from "../src/factory_functions/player";

const App = () => {

  const [isRestart, setIsRestart] = useState(false);
  const [winner, setWinner] = useState("");

  const setUpBoard = (gameBoardP, gameBoardC) => {
    gameBoardP.placeShips("Carrier", ["A1", "A2", "A3", "A4", "A5"], 5);
    gameBoardP.placeShips("Battleship", ["C1", "C2", "C3", "C4"], 4);
    gameBoardP.placeShips("Cruiser", ["E1", "E2", "E3"], 3);
    gameBoardP.placeShips("Submarine", ["G1", "G2", "G3"], 3);
    gameBoardP.placeShips("Destroyer", ["I1", "I2"], 2);
    // Comp Board Set up
    gameBoardC.placeShips("Carrier", ["J1", "J2", "J3", "J4", "J5"], 5);
    gameBoardC.placeShips("Battleship", ["H1", "H2", "H3", "H4"], 4);
    gameBoardC.placeShips("Cruiser", ["F1", "F2", "F3"], 3);
    gameBoardC.placeShips("Submarine", ["D1", "D2", "D3"], 3);
    gameBoardC.placeShips("Destroyer", ["B1", "B2"], 2);
  };

  const restartBoard = (gameBoardP, gameBoardC) => {
    const playerBoard = document.getElementById("player-board");
    const winnerMsg = document.getElementById("winner-msg");

    playerBoard.className = "add-pointer";
    winnerMsg.textContent = "";

    gameBoardP = GameBoard();
    gameBoardC = GameBoard();

    setIsRestart(true);
    resetColours()
  };

  const resetColours = () => {
    const validMoves = createValidMoves("A", "J");
    const compBoardEle = [ ...document.getElementById("computer-board-squares").childNodes];
    let playerBoardEle = [ ...document.getElementById("player-board-squares").childNodes];
    
    // Reset Player Board
    playerBoardEle.map((item) => {
      item.className="square square-bg"
      item.textContent = ""
    });

    // Reset Computer Board
    compBoardEle.map((item, idx) => {
      for (let j = 0; j < gameBoardC.showShips().length; j++) {
        if (gameBoardC.showShips()[j].getPlaceLoc().includes(validMoves[idx])) {
            item.className = "square comp-show-ship-bg";
            break;
        } else {
            item.className = "square square-bg";
        }
      };
      item.textContent = "";
    })

    // reset comp
  };

  const markCoord = (e) => {
    if (e.target.className === "square square-bg") {
      let isHitP = gameBoardP.receiveAttack(e.target.id);

      // Registers the hit and changes styles
      if (isHitP) {
        e.target.className = "square square-bg2"
        e.target.textContent = "X";
      } else {
        e.target.className = "square no-pointer"
      };
    };

    computerMove();
    checkWinner();
  };

  const computerMove = () => {
    const compMove = newPlayers.computerMove();
    const eleComp = document.querySelector(`#${compMove}`);
    eleComp.textContent = "X";

    if (gameBoardC.receiveAttack(compMove) === true) {
      eleComp.className = "square square-bg2"
    };
  };

  const checkWinner = () => {
    const playerBoard = document.getElementById("player-board");
    if (gameBoardP.checkAllSunk() === true) {
      playerBoard.className = "no-pointer";
      setWinner("Player wins!");

    } else if (gameBoardC.checkAllSunk() === true) {
      playerBoard.className = "no-pointer";
      setWinner("Computer wins!");
    }
  };

  ///////////////////////////////////////

  // Set up the Board //
  const gameBoardP = GameBoard();
  const gameBoardC = GameBoard();
  setUpBoard(gameBoardP, gameBoardC);

  // Set up Player //
  const newPlayers = Player();

  // Testing hits // 
  let tt = gameBoardP.showHits();
  console.log(tt[0]);

  //////////////////////////////////////

  // Deals with setting up the game //
    return (
      <div >
            <DisplayBoard 
              markCoord = {markCoord}
              compShips = {gameBoardC.showShips()}
            />
            <p id="winner-msg"> {winner} </p>
            <button onClick={restartBoard}>Restart Game?</button>
      </div>


    )
};



export default App;

// How to reset CSS, using hooks, remaking the componenets?