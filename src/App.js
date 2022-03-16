import React from "react";
import "./app.css";

function App() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");

  function calcular() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    alert(imc.toFixed(2));
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>vamos calcular seu imc</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em kg. Ex: 90"
          value={peso}
          onChange={(event) => setPeso(event.target.value)}
        />
        <input
          type="text"
          placeholder="Altura em cm. Ex: 185"
          value={altura}
          onChange={(event) => setAltura(event.target.value)}
        />

        <button onClick={calcular}>Calcular</button>
      </div>

      <h2>Seu IMC é de:</h2>
    </div>
  );
}

export default App;
