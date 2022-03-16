import React from "react";
import "./app.css";

function App() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");

  function calcular() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      setMensagem(
        `Seu IMC: ${imc.toFixed(2)}.
        Você está abaixo do peso ideal!`
      );
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem(`
      Seu IMC: ${imc.toFixed(2)}.
      Você está no peso ideal!`);
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem(`
      Seu IMC: ${imc.toFixed(2)}.
      Você está acima do peso ideal!`);
    } else if (imc > 34.9) {
      setMensagem(`
      Seu IMC: ${imc.toFixed(2)}.
      Você está com obesidade!`);
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>vamos calcular seu imc</span>

      <div className="area-input">
        <input
          type="number"
          placeholder="Peso em kg. Ex: 90"
          value={peso}
          onChange={(event) => setPeso(event.target.value)}
        />
        <input
          type="number"
          placeholder="Altura em cm. Ex: 185"
          value={altura}
          onChange={(event) => setAltura(event.target.value)}
        />

        <button onClick={calcular}>Calcular</button>
      </div>

      <div className="msg">
        <h2>{mensagem}</h2>
      </div>
    </div>
  );
}

export default App;
