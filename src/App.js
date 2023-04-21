import React, { useState } from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Instructions from "./components/instructions/instructions";
import Main from "./components/main/main";
import "./App.css";

function App() {

  const [cards, setCards] = useState([]);

  return (
    <div className="App">
      <div className="item header">
        <Header cards={cards} setCards={setCards} />
      </div>
      <div className="item instructions">
        <Instructions />
      </div>
      <div className="item main">
        <Main cards={cards} setCards={setCards} />
      </div>
      <div className="item footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;