import React, { useState } from "react";

function App() {
    const [headingText, changeHeading] = useState("Howdy")
    const [isMousedOver, setMouseOver] = useState(false);

    function handleClick() {
        changeHeading('Howdy, Partner')
    }

    function handleMouseOver() {
        setMouseOver(true);
    }
    function handleMouseOut() {
        setMouseOver(false);
    }

    return (
        <div className="container">
            <h1>{headingText}</h1>
            <input type="text" placeholder="What's your name?" />
            <button
                style={{ backgroundColor: isMousedOver ? "black" : "white" }}
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                Submit
            </button>
        </div >
    );
}

export default App;
