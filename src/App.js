import React from "react";
import "./app.css";

function App() {
  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>vamos calcular seu imc</span>

      <div className="area-input">
        <input type="text" placeholder="Peso em kg. Ex:90" />
        <input type="text" placeholder="Altura em cm. Ex:1.85" />

        <button>Calcular</button>
      </div>

      <h2>Seu IMC é de:</h2>
    </div>
  );
}

export default App;
