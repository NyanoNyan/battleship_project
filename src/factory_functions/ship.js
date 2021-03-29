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
            const hitCount = getHits().filter((e) => e === v).length;
            const locCount = getPlaceLoc().filter((e) => e === v).length;
            if (hitCount !== locCount) {
                return false;
            }
            return true;
        }
    };

    return {
        hit,
        isSunk,
        getName,
        getPlaceLoc,
        getLength,
        getHits,
        setCoord,
    };
};

export default Ship;