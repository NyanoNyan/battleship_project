import "../styles/DisplayBoard.css";
import createValidMoves from "../factory_functions/createValidMoves";

const DisplayBoard = (props) => {
    const { markCoord, compShips } = props;
    return (
        <div>
            <h3> Battleship Project</h3>
            <div className="main-board">
                <div id="computer-board">
                    <p className="board-heading">Computer Board</p>
                    <div id= "computer-board-squares" className="board-types"> 
                        <CreateBoard 
                            markCoord = {markCoord}
                            compShips = {compShips}
                        />
                    </div>
                </div>

                <div id="player-board">
                    <p className="board-heading">Player Board</p>
                    <div id= "player-board-squares" className="board-types">
                        <CreateBoard 
                            markCoord = {markCoord}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

const CreateBoard = (props) => {
    const { markCoord, compShips } = props;
    const validMoves = createValidMoves("A", "J");
    let classColour = "square square-bg";

    let boardP = [];
    for (let i = 0; i < 100; i++) {
        if (compShips !== undefined) {
            // Highlighting the computer ships placements
            for (let j = 0; j < compShips.length; j++) {
                if (compShips[j].getPlaceLoc().includes(validMoves[i])) {
                    classColour = "square comp-show-ship-bg";
                    break;
                } else {
                    classColour = "square square-bg";
                }
            };
        };
        
        // Push the board details in boardP
        boardP.push(
        <button 
            key= {i} 
            id={validMoves[i]}
            className={classColour}
            onClick={(e) => markCoord(e)}>
        </button>
        );
    };
    return boardP;
};

export default DisplayBoard;


// Material UI Grid?
// How to make a grid using react, not repeatable using dom to insert elements etc. Is there a library?

// But each ID inside square.
// How to implement DOM manipulation module.