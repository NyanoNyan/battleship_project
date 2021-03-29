import Ship from "../factory_functions/ship";
import GameBoard from "../factory_functions/gameboard";
import Player from "../factory_functions/player";

function mainGame() {
    while (true) {
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
    }
}

export default mainGame;

// module.exports = {
//     mainGame,
// };

// 10 * 10 grid
// Number and letter coordinates used.
// Ship sizes//
// Carrier:  5
// Battleship: 4
// Cruiser: 3
// Submarine: 3
// Destroyer: 2

// Need to re-read instructions again.
const shipOrder = [
    "Carrier",
    "Battleship",
    "Cruiser",
    "Submarine",
    "Destroyer",
];

/// comparing two arrays in JavaScript
// https://www.30secondsofcode.org/blog/s/javascript-array-comparison

// Flattening multi-dimensional array
