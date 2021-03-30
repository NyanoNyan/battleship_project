import "../styles/DisplayBoard.css";
import createValidMoves from "../factory_functions/createValidMoves";

const DispalyBoard = () => {

    let coordEle = [];
    const validMoves = createValidMoves("A", "J");
    for (let i = 0; i < 100; i++) {
        coordEle.push((
            <Square 
                coordVal = {validMoves[i]}
            />
        ))
    }

    return (
        <div>
            <div>I'm Inside DisplayBoard</div>
            <div className="main-board">
                <div className="board-types" id="computer-board">
                    {coordEle}
                </div>

            </div>
        </div>

    )
};

const Square = (props) => {
    const coordVal = props.coordVal;
    return (
        <button 
            className="square" id={coordVal}>
        </button>
    )
}

export default DispalyBoard;


// Material UI Grid?
// How to make a grid using react, not repeatable using dom to insert elements etc. Is there a library?

// But each ID inside square.
// How to implement DOM manipulation module.