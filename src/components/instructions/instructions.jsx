import React from "react";
import './instructions.css';

const Instructions = () => {
    return (
        <div className="instructions">
            <p>Press the <b>"add card"</b> button to add the new Card.</p>
            <p>Use the <b>"sort cards"</b> button to sort the Cards by the increase.</p>
            <p>Press an <b>&#x2716;</b> icon on the top right to delete them.</p>
        </div>
    )
};

export default Instructions;