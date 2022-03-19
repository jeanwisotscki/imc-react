import React from "react";
import "./app.css";

function App() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");

  function calcular() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.5) {
      setMensagem(
        `Seu IMC: ${imc.toFixed(2)}.

        Abaixo do peso`
      );
    } else if (imc >= 18.5 && imc <= 24.99) {
      setMensagem(`
      Seu IMC: ${imc.toFixed(2)}.

      Peso normal`);
    } else if (imc >= 25 && imc <= 29.99) {
      setMensagem(`
      Seu IMC: ${imc.toFixed(2)}.

      Sobrepeso`);
    } else if (imc >= 30 && imc <= 34.99) {
      setMensagem(`
      Seu IMC: ${imc.toFixed(2)}.

      Obesidade Grau I`);
    } else if (imc >= 35 && imc <= 39.99) {
      setMensagem(`
      Seu IMC: ${imc.toFixed(2)}.

      Obesidade Grau II`);
    } else {
      setMensagem(`
      Seu IMC: ${imc.toFixed(2)}.
      
      Obesidade Grau III ou Mórbida`);
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
