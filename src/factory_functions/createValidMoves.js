const createValidMoves = (charA, charZ) => {
    function genCharArray(charA, charZ) {
        var a = [],
            i = charA.charCodeAt(0),
            j = charZ.charCodeAt(0);
        for (; i <= j; ++i) {
            a.push(String.fromCharCode(i));
        }
        return a;
    }
    const validMoves = genCharArray(charA, charZ);
    const setUpMoves = validMoves.map((arr) => {
        let store = [];
        for (let i = 1; i < 11; i++) {
            store.push(arr + String(i));
        }
        return store;
    });

    return [].concat(...setUpMoves);
};

export default createValidMoves;