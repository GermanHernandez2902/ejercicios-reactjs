// src/ejercicios/Ejercicio8.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio8() {
  // Estado que guarda el texto del textarea
  const [texto, setTexto] = useState("");

  // Cuenta las palabras: elimina espacios al inicio/final y separa por cualquier espacio
  const contarPalabras = (str) => {
    const trimmed = str.trim();
    if (trimmed === "") return 0;
    const palabras = trimmed.split(/\s+/);
    return palabras.length;
  };

  // Cuenta caracteres excluyendo todos los espacios y saltos de línea
  const contarCaracteres = (str) => {
    return str.replace(/\s/g, "").length;
  };

  return (
    <div className="ejercicio-container" style={{ backgroundColor: "#0f172a" }}>
      {/* Título */}
      <h2 style={{ marginBottom: "20px" }}>📝 Contador de Palabras y Caracteres</h2>

      {/* Área de texto donde el usuario escribe */}
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe un párrafo aquí..."
        rows="6"
        style={{
          width: "80%",
          maxWidth: "500px",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          marginBottom: "20px",
        }}
      />

      {/* Resultado en tiempo real */}
      <div
        style={{
          background: "#1e293b",
          padding: "15px",
          borderRadius: "8px",
          color: "white",
          fontSize: "1.1rem",
          width: "80%",
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <p>
          🔡 Caracteres (sin espacios): <b>{contarCaracteres(texto)}</b>
        </p>
        <p>
          📖 Palabras: <b>{contarPalabras(texto)}</b>
        </p>
      </div>

      {/* Volver al menú */}
      <Link to="/" className="back-link" style={{ marginTop: "20px" }}>
        ← Volver al menú
      </Link>
    </div>
  );
}
