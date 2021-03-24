const Ship = (name, placedLoc, length) => {
    let hits = [];
    const getName = () => name;
    const getPlaceLoc = () => placedLoc;
    const getLength = () => length;
    const getHits = () => hits;

    // takes a number and marks that position as a "hit"
    const hit = (hitLoc) => {
        hits.push(hitLoc);  
    };
    
    const setCoord = (coordinates) => {
        placedLoc = coordinates;
    };

    // Calculates based on it's length and whether all of the position
    // of that particular shit have been hit.
    const isSunk = () => {
        // if hits == length then sunk

        // Get unique items
        const uniqueValues = new Set([...getHits(), ...getPlaceLoc()]);
        if (getHits().length !== getPlaceLoc().length) {
            return false;
        }
        // Loop over each unique values and compare it with each item in an array.
        // If the lengths of both count are the same since, return true. Since we are checking 
        // if each unique items are in the two arrays first then checking if the len are the same.
        for (const v of uniqueValues) {
            const hitCount = getHits().filter(e => e === v).length;
            const locCount = getPlaceLoc().filter(e => e === v).length;
            if (hitCount !== locCount) {
                return false;
            }
            return true;
        }
    }

    return {
        hit, 
        isSunk,
        getName,
        getPlaceLoc,
        getLength,
        getHits,
        setCoord,
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
    let shipsObjs = [];

    // Check todo list project, how you made a list of objects.
    const placeShips = (name, location, length) => {
        const newShip = Ship(name, location, length);
        shipsObjs.push(newShip);
        return shipsObjs;
    }

    // determines whether or not not the attack hit and sends
    // the "hit" function to the correct ship.
    // Or it records the coordinates of the missed shot.
    const receiveAttack = (coordinates) => {
        let check = false;
        shipsObjs.filter((obj) => {
            if (obj.getPlaceLoc().includes(coordinates)){
                obj.hit(coordinates);
                check = true;
            } else {
                check = false;
                missedShots.push(coordinates);
            }
        })
        return check;
    };

    const checkAllSunk = () => {
        let sunkArray = [];
        shipsObjs.map((obj) => {
            sunkArray.push(obj.isSunk());
        })
        return sunkArray.every(arr => arr === true);
    };

    return {
        placeShips,
        receiveAttack,
        checkAllSunk
    }

};

const Player = () => {

    function genCharArray(charA, charZ) {
        var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
        for (; i <= j; ++i) {
            a.push(String.fromCharCode(i));
        }
        return a;
    }
    const validMoves = genCharArray("A", "J");
    const setUpMoves = validMoves.map((arr) => {
        let store = [];
        for (let i = 1; i < 11; i++) {
            store.push(arr+String(i));
        }
        return store;
    });
    const newValidMoves = [].concat(...setUpMoves);
    // console.log(newValidMoves);

    const playerControl = () => {
        const assignedBoard = 0;

    };

    const computerControl = () => {
        const assignedBoard = 1;
        const randomPick = newValidMoves[Math.floor(Math.random()* newValidMoves.length)];
        newValidMoves.filter((item) => item !== randomPick);
        console.log(newValidMoves)
        return randomPick;
    };



    return {
        playerControl,
        computerControl,
        genCharArray
    }

};

module.exports = {
    GameBoard,
    Ship,
    Player,
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

/// comparing two arrays in JavaScript
// https://www.30secondsofcode.org/blog/s/javascript-array-comparison

// Flattening multi-dimensional array