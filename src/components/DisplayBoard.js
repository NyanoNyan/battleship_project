import "../styles/DisplayBoard.css";
import createValidMoves from "../factory_functions/createValidMoves";

const DispalyBoard = (props) => {
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
            <div>I'm Inside DisplayBoard</div>
            <div className="main-board">
                <div className="board-types" id="computer-board">
                    {compBoard}
                </div>

                <div className="board-types" id="player-board">
                    {playerBoard}
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

export default DispalyBoard;


// Material UI Grid?
// How to make a grid using react, not repeatable using dom to insert elements etc. Is there a library?

// But each ID inside square.
// How to implement DOM manipulation module.