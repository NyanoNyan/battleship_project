import "../styles/DisplayBoard.css";
import createValidMoves from "../factory_functions/createValidMoves";

const DisplayBoard = (props) => {
    const { markCoord } = props;
    return (
        <div>
            <h3> Battleship Project</h3>
            <div className="main-board">
                <div id="computer-board">
                    <p className="board-heading">Computer Board</p>
                    <div className="board-types"> 
                        <CreateBoard 
                            markCoord = {markCoord}
                        />
                    </div>
                </div>

                <div id="player-board">
                    <p className="board-heading">Player Board</p>
                    <div className="board-types">
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
    const { markCoord } = props;
    const validMoves = createValidMoves("A", "J");
    let boardP = []
    for (let i = 0; i < 100; i++) {
        boardP.push(
        <button 
            key= {i} 
            id={validMoves[i]}
            className="square square-bg"
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