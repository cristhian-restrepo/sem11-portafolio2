
import React, { useState } from 'react';
import './Contador.css'; 

function Contador() {
  // Definimos el estado del contador
  const [contador, setContador] = useState(0);

  // Función para incrementar el contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  // Función para decrementar el contador
  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div className="contador-card">
      {/* Título agregado */}
      <h2>Componente creado para validar elementos de React</h2>

      {/* Mostrar el valor actual del contador */}
      <h3>Contador: {contador}</h3>

      {/* Botones para incrementar y decrementar */}
      <div className="botones">
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
      </div>
    </div>
  );
}

export default Contador;
