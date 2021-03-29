import createValidMoves from "../factory_functions/createValidMoves";

const Player = () => {
    let newValidMoves = createValidMoves("A", "J");
    const playerMove = () => {
        const assignedBoard = 0;
    };

    const computerMove = () => {
        const assignedBoard = 1;
        const randomPick =
            newValidMoves[Math.floor(Math.random() * newValidMoves.length)];
        newValidMoves = newValidMoves.filter((item) => item !== randomPick);

        return randomPick;
    };

    return {
        playerMove,
        computerMove,
    };
};

export default Player;