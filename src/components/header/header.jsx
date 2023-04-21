import React from "react";
import "./header.css";

const Header = ({ cards, setCards }) => {

    const addCard = () => {
        const newCard = {
            id: Math.floor(Math.random() * 1000),
            number: Math.floor(Math.random() * 1000),
        };
        setCards([...cards, newCard]);
    };

    const sortCards = () => {
        cards.sort((a, b) => a.number - b.number);
        setCards([...cards]);
    }

    return (
        <div className="header">
            <button onClick={addCard} className="button">Add Card</button>
            <button onClick={sortCards} className="button">Sort Cards</button>
        </div>
    )
}

export default Header;