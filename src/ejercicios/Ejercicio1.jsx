import { useState } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio1() {
  const [color, setColor] = useState("#ec4899"); // color inicial

  // Genera un color aleatorio en formato HEX
  const cambiarColor = () => {
    const nuevoColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(nuevoColor);
  };

  return (
    <div
      className="ejercicio-container"
      style={{ backgroundColor: color }}
    >
      <h2>🎨 Cambiador de Color</h2>
      <button className="btn" onClick={cambiarColor}>
        Cambiar color
      </button>
      <Link to="/" className="back-link">
        ← Volver al menú
      </Link>
    </div>
  );
}
