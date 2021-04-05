import "../styles/DisplayBoard.css";
import createValidMoves from "../factory_functions/createValidMoves";

const DisplayBoard = (props) => {
    const {onClick} = props;
    let compBoard = [];
    let playerBoard = [];
    const validMoves = createValidMoves("A", "J");
    for (let i = 0; i < 100; i++) {
        compBoard.push((
            <Square 
                coordVal = {validMoves[i]}
                onClick = {onClick}
            />
        ));

        playerBoard.push((
            <Square 
                coordVal = {validMoves[i]}
                onClick = {onClick}
            />
        ))
    }

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
    const {coordVal, onClick } = props;
    return (
        <button 
            className="square" id={coordVal} onClick={(e) => onClick(e)}>
        </button>
    )
}

export default DisplayBoard;


// Material UI Grid?
// How to make a grid using react, not repeatable using dom to insert elements etc. Is there a library?

// But each ID inside square.
// How to implement DOM manipulation module.