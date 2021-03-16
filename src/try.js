const Ship = (name, placedLoc, length) => {
    let hits = [];
    const getName = () => name;
    const getPlaceLoc = () => placedLoc;
    const getLength = () => length;

    // takes a number and marks that position as a "hit"
    const hit = (hitLoc) => {
        hits.push(hitLoc);  
    }

    // Calculates based on it's length and whether all of the position
    // of that particular shit have been hit.
    const isSunk = (checkSunk) => {
        // if hits == length then sunk
        return 
    }

    return {
        hit, 
        isSunk,
        getName,
        getPlaceLoc,
        getLength,
    }

};

// Should keep track of missed attacks so they can display them
// Should report whether or not all of the ships have been sunk

// Maybe game board creates ships and set's it location, stores it in GameBoard as an object.
// e.g. {type: Carrier, coordinates: ["A1","A2"]}
// When a person clicks a coordinate, 

// Maybe create each Ship object and put it in an Array for chedckAllSunk?

const GameBoard = (ship) => {
    let missedShots = [];

    // How to structure this data, to filter it out for later on.
    let ships = [
        {Cruiser: ["A1", "A2", "A3"]},
        {Submarine: ["B1", "B2" , "B3"]},
    ]

    let shipss = [
        Ship("Curiser", ["A1", "A2", "A3"], 3),
        Ship("Submarine", ["B1", "B2" , "B3"], 3)
    ]


    const createBoard = () => {

    };
    // determines whether or not not the attack hit and sends
    // the "hit" function to the correct ship.
    // Or it records the coordinates of the missed shot.
    const receiveAttack = (coordinates) => {
        const selectedShip = ships.filter((obj) => {
            let keyObj = Object.keys(obj);
            if (obj[keyObj].includes(coordinates)){
                return [obj];
            }
        })
        return selectedShip;
    };

    const checkAllSunk = () => {

    };

    return {
        createBoard,
        receiveAttack,
    }

};

const Player = () => {

};

module.exports = {
    GameBoard
}

// 10 * 10 grid
// Number and letter coordinates used.
// Ship sizes//
// Carrier:  5
// Battleship: 4
// Cruiser: 3
// Submarine: 3
// Destroyer: 2

// Need to re-read instructions again.
const shipOrder = ["Carrier", "Battleship", "Cruiser", "Submarine", "Destroyer"];