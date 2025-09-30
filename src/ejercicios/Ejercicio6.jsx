import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio6() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="ejercicio-container" style={{ backgroundColor: "#0f172a" }}>
      <h2 style={{ marginBottom: "20px" }}>⏱️ Cronómetro</h2>

      <p
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#4ade80",
          marginBottom: "20px",
        }}
      >
        {formatTime(time)}
      </p>

      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <button
          onClick={toggleTimer}
          style={{
            background: isRunning
              ? "#3b82f6" // Azul cuando está corriendo → Pausar
              : time > 0
              ? "#facc15" // Amarillo cuando se pausó → Reanudar
              : "#22c55e", // Verde al inicio → Iniciar
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.opacity = 0.8)}
          onMouseOut={(e) => (e.target.style.opacity = 1)}
        >
          {isRunning ? "⏸️ Pausar" : time > 0 ? "▶️ Reanudar" : "▶️ Iniciar"}
        </button>

        <button
          onClick={resetTimer}
          style={{
            background: "#ef4444",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.opacity = 0.8)}
          onMouseOut={(e) => (e.target.style.opacity = 1)}
        >
          🔄 Reiniciar
        </button>
      </div>

      {/* Volver al menú */}
      <Link to="/" className="back-link" style={{ marginTop: "20px" }}>
        ← Volver al menú
      </Link>
    </div>
  );
}
