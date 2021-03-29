
import "../styles/DisplayBoard.css"
const DispalyBoard = () => {

    let test = [];

    for (let i = 0; i < 100; i++) {
        test.push((
            <Square />
        ))
    }

    return (
        <div>
            <div>I'm Inside DisplayBoard</div>
            <div className="main-board">
                {test}
            </div>
        </div>

    )
};

const Square = () => {
    return (
        <button className="square">
        </button>
    )
}

export default DispalyBoard;


// Material UI Grid?
// How to make a grid using react, not repeatable using dom to insert elements etc. Is there a library?

// But each ID inside square.