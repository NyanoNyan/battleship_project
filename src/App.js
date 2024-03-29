import React, { useState, useEffect } from "react";

import DisplayBoard from "./components/DisplayBoard.js";

import Ship from "../src/factory_functions/ship";
import GameBoard from "../src/factory_functions/gameboard";
import Player from "../src/factory_functions/player";

const App = () => {
    const [isSetUp, setIsSetUp] = useState(false);
    const [winner, setWinner] = useState("");
    const [isRestart, setIsRestart] = useState(false);
    const [playerBoard, setPlayerBoard] = useState("");
    const [computerBoard, setComputerBoard] = useState("");

    useEffect(() => {
      // console.log(winner)
      if (isRestart === true) {
        alert("why, hello there")
      }

    }, [isRestart]);

    // When a players selects a box to commence an attack.
    const onClick = (e) => {

        if (e.target.className === "square"){
          // Player Move
          e.target.textContent = "X";
          let isHitP = newGameBoardP.receiveAttack(e.target.id);

          //// -------Issue here when setting the hit background colour ,need to make diagram for the design-----////
          if (isHitP === true) {
              e.target.style.backgroundColor = "red";
          }
          e.target.style.pointerEvents = "none";

          compMove();
          checkWinner();
          // console.log(newGameBoardP.checkAllSunk());

        }

    };

    const onRestart = () => {

      // Fix this issue, why is console logging false, should change to true
      console.log("hello")
      setIsRestart(true);
      console.log(`state change check ${isRestart}`);
      const newGameBoardP = GameBoard();
      const newGameBoardC = GameBoard(); 
      resetBoard(document.getElementById("computer-board-squares").childNodes, "comp");
      resetBoard(document.getElementById("player-board-squares").childNodes, "player");
      setWinner("")
      // const elePlayer = document.getElementById("player-board-squares");
      // const eleComp = document.getElementById("computer-board-squares");
      // const playerNodes = [...elePlayer.childNodes];
      // const compNodes = [...eleComp.childNodes];

      // for (let i = 0; i < playerNodes.length; i++ ) {
      //   if (playerNodes[i].style.background.includes("red")) {
      //     playerNodes[i].style.background = "";
      //     playerNodes[i].textContent = "";
      //   } else if (compNodes[i].style.background.includes("red")) {
      //     console.log(compNodes[i].style.background)
      //     compNodes[i].style.background = "";
      //     compNodes[i].textContent = "";
      //   }
      // };


    };

    const resetBoard = (board, type) => {
      for (let i = 0; i < board.length; i++) {
        board[i].textContent = "";
        board[i].style.backgroundColor = "#cecece";

        if (type ==="player") {
          board[i].style.pointerEvents = "auto";
        };
      }
    }

    // Random Computer Move
    const compMove = () => {
        const compMove = newPlayers.computerMove();
        const eleComp = document.querySelector(`#${compMove}`);
        eleComp.textContent = "X";

        if (newGameBoardC.receiveAttack(compMove) === true) {
            eleComp.style.background = "red";
        }
    };

    const checkWinner = () => {
      const playerBoard = document.getElementById("player-board");
      if (newGameBoardP.checkAllSunk() === true) {
        playerBoard.style.pointerEvents = "none";
        setWinner("Player wins!");

      } else if (newGameBoardC.checkAllSunk() === true) {
        playerBoard.style.pointerEvents = "none";
        setWinner("Computer wins!");
      }
    };


    const setUpBoard = () => {
        // Player Board Set up
        newGameBoardP.placeShips("Carrier", ["A1", "A2", "A3", "A4", "A5"], 5);
        newGameBoardP.placeShips("Battleship", ["C1", "C2", "C3", "C4"], 4);
        newGameBoardP.placeShips("Cruiser", ["E1", "E2", "E3"], 3);
        newGameBoardP.placeShips("Submarine", ["G1", "G2", "G3"], 3);
        newGameBoardP.placeShips("Destroyer", ["I1", "I2"], 2);
        // Comp Board Set up
        newGameBoardC.placeShips("Carrier", ["J1", "J2", "J3", "J4", "J5"], 5);
        newGameBoardC.placeShips("Battleship", ["H1", "H2", "H3", "H4"], 4);
        newGameBoardC.placeShips("Cruiser", ["F1", "F2", "F3"], 3);
        newGameBoardC.placeShips("Submarine", ["D1", "D2", "D3"], 3);
        newGameBoardC.placeShips("Destroyer", ["B1", "B2"], 2);
    };

    // Set up Game
    // Need to figure out how to restart the game
    let newGameBoardP = GameBoard();
    let newGameBoardC = GameBoard();
    let newPlayers = Player();

    if (isRestart) {
      console.log(isRestart)
      newGameBoardP = GameBoard();
      newGameBoardC = GameBoard();
      newPlayers = Player();
      // setIsRestart(false);

    };

    setUpBoard();
    let tt = newGameBoardP.showHits();
    console.log(`This it the ships hits ${tt}`);


  
    return (
        <div>
            {console.log(isRestart)}
            <DisplayBoard 
              onClick={onClick} 
              compShips={newGameBoardC.showShips()} 
              isRestart={isRestart}
            />
            <p> {winner} </p>
            <button onClick={onRestart}>Restart Game?</button>
        </div>
    );
};

export default App;

// Things that needs to be completed
// - Restart the game
// - Random ships placements for both computer and player (optional)

// learn more about useEffect
// test why hitLocs is not showing
// Look at other codes for inspiration