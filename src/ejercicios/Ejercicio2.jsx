import { useState } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio2() {
  const [contador, setContador] = useState(0);

  return (
    <div className="ejercicio-container" style={{ backgroundColor: "#1e293b" }}>
      <h2>🖱️ Contador de Clics</h2>
      <p style={{ fontSize: "1.5rem", margin: "10px 0" }}>Clics: {contador}</p>
      
      <button className="btn" onClick={() => setContador(contador + 1)}>
        Contar clics
      </button>

      <Link to="/" className="back-link">
        ← Volver al menú
      </Link>
    </div>
  );
}
