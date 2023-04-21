import React from "react";
import ".//card.css";

const Card = ({ number, deleteCard }) => {
    return (
        <div className="card">
            <div className="icon" onClick={deleteCard}>
                &#x2716;
            </div>
            <div className="number">
                {number}
            </div>
        </div>
    )
}

export default Card;