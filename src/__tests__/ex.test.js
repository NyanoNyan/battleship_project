// const { Ship, GameBoard, Player } = require("../logic_scripts");
import Ship from "../factory_functions/ship";
import GameBoard from "../factory_functions/gameboard";
import Player from "../factory_functions/player";

describe("Ships Checks", () => {

    test("Hit of ships", () => {
        const cruiser = Ship("Curiser", ["A1", "A2", "A3"], 3);
        cruiser.hit("A1");
        expect(cruiser.getHits()).toEqual(["A1"])
    });

    describe("Check if sunk", () => {
        test("Check same order", () => {
            const cruiser = Ship("Curiser", ["A1", "A2", "A3"], 3);
            cruiser.hit("A1");
            cruiser.hit("A2");
            cruiser.hit("A3");
            expect(cruiser.isSunk()).toEqual(true)
        });
        test("Check different order", () => {
            const cruiser = Ship("Curiser", ["A1", "A2", "A3"], 3);
            cruiser.hit("A3");
            cruiser.hit("A2");
            cruiser.hit("A1");
            expect(cruiser.isSunk()).toEqual(true)
        });
        test("Check  wrong hits", () => {
            const cruiser = Ship("Curiser", ["A1", "A2", "A3"], 3);
            cruiser.hit("A5");
            cruiser.hit("A2");
            cruiser.hit("A9");
            expect(cruiser.isSunk()).toEqual(false)
        });
    })

})

describe("GameBoard Checks", () => {
    
    describe("place ships check", () => {
        test("Create new object ships", () => {
            const board = GameBoard()
            const showShips = board.placeShips("Cruiser", ["A1", "A2", "A3"], 3);
            expect(showShips[0].getPlaceLoc()).toEqual(["A1", "A2", "A3"]);
        });
        test("Set coordinates check", () => {
            const board = GameBoard()
            const showShips = board.placeShips("Cruiser", ["A1", "A2", "A3"]);
            showShips[0].setCoord(["A1", "A2"]);
            expect(showShips[0].getPlaceLoc()).toEqual(["A1", "A2"]);
        })
    })

    describe("receiveAttack function check", () => {
        test("Check if it's been hit", () => {
            const board = GameBoard()
            const showShips = board.placeShips("Cruiser", ["A1", "A2", "A3"], 3);
            expect(board.receiveAttack("A1")).toEqual(true)
        });
        test("Check if it's not been hit", () => {
            const board = GameBoard()
            const showShips = board.placeShips("Cruiser", ["A1", "A2", "A3"], 3);
            expect(board.receiveAttack("A8")).toEqual(false)
        });
        test("Testing hit for DOM", () => {
            const board = GameBoard()
            const showShips = board.placeShips("Cruiser", ["A1", "A2", "A3"], 3);
            const test = board.receiveAttack("A1");
            expect(test).toEqual(true);
        })
    })

    describe("check if all ships are sunk", () => {
        test("Check array if all are sunk", () => {
            const board = GameBoard()
            board.placeShips("Cruiser", ["A1", "A2", "A3"], 3);
            board.placeShips("Cruiser", ["A5", "A6", "A7"], 3);
            board.receiveAttack("A1");
            board.receiveAttack("A2");
            board.receiveAttack("A3");

            board.receiveAttack("A5");
            board.receiveAttack("A6");
            board.receiveAttack("A7");
            expect(board.checkAllSunk()).toEqual(true);
        });
        test("Check array if all are not sunk", () => {
            const board = GameBoard()
            board.placeShips("Cruiser", ["A1", "A2", "A3"], 3);
            board.placeShips("Cruiser", ["A5", "A6", "A7"], 3);
            board.receiveAttack("A1");
            board.receiveAttack("A2");
            board.receiveAttack("A3");

            board.receiveAttack("A5");
            board.receiveAttack("A9");
            board.receiveAttack("A7");
            expect(board.checkAllSunk()).toEqual(false);
        });
    })
})

describe("Player section", () => {
    describe("Check computer actions", () => {
        test("Checking if moves are all unique", () => {
            const compPlayer = Player();
            const compVal = [];

            for (let i = 0; i < 100; i++) {
                compVal.push(compPlayer.computerMove());
            }

            let uniqueItem = new Set(compVal);
            // console.log(uniqueItem);
            // console.log(uniqueItem.size);

            expect(uniqueItem.size).toEqual(100);

        })
    })
})
// Need to check why only 66 unique items