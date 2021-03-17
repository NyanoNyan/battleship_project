const { Ship, GameBoard } = require("../try");


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

