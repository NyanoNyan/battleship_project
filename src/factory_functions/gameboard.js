import Ship from "../factory_functions/ship"
// Should keep track of missed attacks so they can display them
// Should report whether or not all of the ships have been sunk

// Maybe game board creates ships and set's it location, stores it in GameBoard as an object.
// e.g. {type: Carrier, coordinates: ["A1","A2"]}
// When a person clicks a coordinate,

// Maybe create each Ship object and put it in an Array for chedckAllSunk?

const GameBoard = (ship) => {
    let missedShots = [];
    let shipsObjs = [];

    // Check todo list project, how you made a list of objects.
    const placeShips = (name, location, length) => {
        const newShip = Ship(name, location, length);
        shipsObjs.push(newShip);
        return shipsObjs;
    };

    // determines whether or not not the attack hit and sends
    // the "hit" function to the correct ship.
    // Or it records the coordinates of the missed shot.

    /////////
    // Need to fix this loop, it's not stopping/breaking when it finds coordinate which match
    // which should return true for all and should return not true if it's not in.
    ////////
    const receiveAttack = (coordinates) => {
        let check = false;
        shipsObjs.filter((obj) => {
            if (obj.getPlaceLoc().includes(coordinates)) {
                obj.hit(coordinates);
                console.log("true")
                check = true;
            } else {
                missedShots.push(coordinates);
                console.log("false")
                check = false;
            }
        });
        return check;
    };

    const checkAllSunk = () => {
        let sunkArray = [];
        shipsObjs.map((obj) => {
            sunkArray.push(obj.isSunk());
        });
        return sunkArray.every((arr) => arr === true);
    };

    return {
        placeShips,
        receiveAttack,
        checkAllSunk,
    };
};


export default GameBoard;