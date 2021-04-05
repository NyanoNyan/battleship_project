import "../styles/DisplayBoard.css";
import createValidMoves from "../factory_functions/createValidMoves";

const DisplayBoard = (props) => {
    const {onClick, compShips} = props;
    let compBoard = [];
    let playerBoard = [];
    let colourH = "gray";
    let colourP = "none";
    const validMoves = createValidMoves("A", "J");
    for (let i = 0; i < 100; i++) {
        // Checks coordinate match to set colour highlight for computer board
        for (let j = 0; j < compShips.length; j++) {
            if (compShips[j].getPlaceLoc().includes(validMoves[i])) {
                colourH = "#73ff8e";
                break;
            } else {
                colourH = "none";
            }
        };

        // console.log(colourH);
        compBoard.push((
            <Square 
                coordVal = {validMoves[i]}
                onClick = {onClick}
                colourH = {colourH}
            />
        ));

        playerBoard.push((
            <Square 
                coordVal = {validMoves[i]}
                onClick = {onClick}
                colourH = {colourP}
            />
        ))
    };

    const compShowShips = () => {

    };

    console.log(compBoard);
    console.log(compShips)

    return (
        <div>
            <div>Batleship Project</div>
            <div className="main-board">
                <div id="computer-board">
                    <p className="board-heading">Computer Board</p>
                    <div className="board-types">
                        {compBoard}
                    </div>

                </div>
                <div id="player-board">
                    <p className="board-heading">Player Board</p>
                    <div className="board-types">
                        {playerBoard}
                    </div>

                </div>

            </div>
        </div>

    )
};

const Square = (props) => {
    const {coordVal, onClick, colourH } = props;
    console.log(colourH);
    return (
        <button 
            className="square" id={coordVal} 
            style={{backgroundColor: colourH}} 
            onClick={(e) => onClick(e)}>
        </button>
    )
}

export default DisplayBoard;


// Material UI Grid?
// How to make a grid using react, not repeatable using dom to insert elements etc. Is there a library?

// But each ID inside square.
// How to implement DOM manipulation module.