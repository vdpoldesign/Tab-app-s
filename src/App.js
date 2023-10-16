import React, { useState } from "react";

const messages = ["Leer javascript", "Leer React", "Vind een baan"];

function App() {
  const [stap, setStap] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function handleVorige() {
    //if (stap > 1) setStap(stap - 1);
    if (stap > 1) setStap((s) => s - 1);
  }
  function handleVolgende() {
    if (stap > 1) setStap((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={stap === 1 ? "active" : ""}>1</div>
            <div className={stap === 2 ? "active" : ""}>2</div>
            <div className={stap === 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Stap {stap}: {messages[stap - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleVorige}
            >
              Vorige
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleVolgende}
            >
              Volgende
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
