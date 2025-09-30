import { useState } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio7() {
  const [length, setLength] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [copiado, setCopiado] = useState(false);

  // 🔐 Generador de contraseña aleatoria
  const generarContraseña = () => {
    const longitud = parseInt(length);

    if (!longitud || longitud < 4) {
      setError("⚠️ La longitud debe ser mayor o igual a 4.");
      setPassword("");
      return;
    }

    setError("");
    setCopiado(false);

    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
    let nuevaContraseña = "";

    for (let i = 0; i < longitud; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      nuevaContraseña += caracteres[randomIndex];
    }

    setPassword(nuevaContraseña);
  };

  // 📋 Copiar al portapapeles
  const copiarContraseña = () => {
    navigator.clipboard.writeText(password);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000); // Oculta el mensaje después de 2s
  };

  return (
    <div className="ejercicio-container" style={{ backgroundColor: "#0f172a" }}>
      <h2 style={{ marginBottom: "20px" }}>🔐 Generador de Contraseñas</h2>

      {/* Input para la longitud */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          placeholder="Longitud de la contraseña"
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            width: "250px",
            textAlign: "center",
          }}
        />
      </div>

      {/* Botón para generar */}
      <button
        onClick={generarContraseña}
        style={{
          background: "#3b82f6",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
          transition: "0.3s",
          marginBottom: "20px",
        }}
        onMouseOver={(e) => (e.target.style.opacity = 0.8)}
        onMouseOut={(e) => (e.target.style.opacity = 1)}
      >
        🎲 Generar contraseña
      </button>

      {/* Mensajes de error */}
      {error && (
        <p style={{ color: "#f87171", fontWeight: "bold", marginBottom: "10px" }}>
          {error}
        </p>
      )}

      {/* Contraseña generada */}
      {password && !error && (
        <div style={{ marginBottom: "15px" }}>
          <p
            style={{
              color: "#4ade80",
              fontSize: "1.2rem",
              fontWeight: "bold",
              background: "#1e293b",
              padding: "10px 15px",
              borderRadius: "8px",
              wordBreak: "break-all",
              marginBottom: "10px",
            }}
          >
            ✅ Contraseña generada: {password}
          </p>

          {/* Botón copiar */}
          <button
            onClick={copiarContraseña}
            style={{
              background: "#10b981",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.opacity = 0.8)}
            onMouseOut={(e) => (e.target.style.opacity = 1)}
          >
            📋 Copiar contraseña
          </button>

          {/* Confirmación */}
          {copiado && (
            <p style={{ color: "#38bdf8", marginTop: "10px", fontWeight: "bold" }}>
              ✅ ¡Contraseña copiada!
            </p>
          )}
        </div>
      )}

      {/* Volver al menú */}
      <Link to="/" className="back-link" style={{ marginTop: "20px" }}>
        ← Volver al menú
      </Link>
    </div>
  );
}

