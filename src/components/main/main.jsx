import React from "react";
import Card from "./card/card";
import "./main.css";

const Main = ({ cards, setCards }) => {
    const deleteCard = (id) => {
        setCards(cards.filter(item => id !== item.id));
    }

    return (
        <div className="main">
            {cards.map((card) => (
                <Card key={card.id} number={card.number} deleteCard={() => deleteCard(card.id)} />
            ))}
        </div>
    )
};

export default Main;