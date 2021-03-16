const { GameBoard } = require("../try");


describe("Create Gameboard", () => {
    test("Check coord match", () => {
        const GameBoardV = GameBoard();
        console.log(GameBoardV.receiveAttack("A1"))
        expect(GameBoardV.receiveAttack("A1")).toEqual([{"Cruiser": ["A1", "A2", "A3"]}]);
    });
})

