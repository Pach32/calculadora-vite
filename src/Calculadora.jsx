import React, { useState } from "react";
import Titulo from "./Titulo";

function Calculadora() {
  const [resultado, setResultado] = useState(0);
  const [incremento, setIncremento] = useState(5);

  const reiniciar = () => setResultado(0);

  const manejarCambioIncremento = (e) => {
    const valor = e.target.value;
    if (!isNaN(valor) && valor !== "") {
      setIncremento(Number(valor));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Titulo texto={`Resultado: ${resultado}`} />
      {resultado < 0 && <p style={{ color: "red" }}>¡Cuidado, son números negativos!</p>}
      <div>
        <label>
          Incremento:
          <input
            type="number"
            value={incremento}
            onChange={manejarCambioIncremento}
            style={{ padding: "5px", margin: "10px" }}
          />
        </label>
      </div>
      <button onClick={() => setResultado(resultado + incremento)}>Sumar {incremento}</button>
      <button onClick={() => setResultado(resultado - incremento)}>Restar {incremento}</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}

export default Calculadora;