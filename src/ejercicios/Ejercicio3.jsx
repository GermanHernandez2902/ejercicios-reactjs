import { useState } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio3() {
  const [tarea, setTarea] = useState(""); // texto actual del input
  const [lista, setLista] = useState([]); // array con las tareas agregadas

  // Función para agregar tarea
  const agregarTarea = () => {
    if (tarea.trim() === "") return; // evitar strings vacíos
    setLista([...lista, tarea]);
    setTarea("");
  };

  // Función para eliminar tarea
  const eliminarTarea = (index) => {
    const nuevaLista = lista.filter((_, i) => i !== index);
    setLista(nuevaLista);
  };

  return (
    <div className="ejercicio-container" style={{ backgroundColor: "#1e293b" }}>
      <h2 style={{ marginBottom: "20px" }}>📝 Lista Dinámica</h2>

      {/* Input + Botón */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <input
          type="text"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
          placeholder="Escribe una tarea..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
          }}
        />
        <button
          className="btn"
          onClick={agregarTarea}
          style={{ fontSize: "1rem", padding: "10px 15px" }}
        >
          ➕ Agregar
        </button>
      </div>

      {/* Lista */}
      <ul style={{ listStyle: "none", padding: 0, width: "100%", maxWidth: "400px" }}>
        {lista.map((item, index) => (
          <li
            key={index}
            style={{
              background: "#334155",
              color: "white",
              marginBottom: "10px",
              padding: "12px 15px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          >
            <span>{item}</span>
            <button
              onClick={() => eliminarTarea(index)}
              style={{
                background: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "6px 12px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      {/* Link para volver */}
      <Link to="/" className="back-link" style={{ marginTop: "20px" }}>
        ← Volver al menú
      </Link>
    </div>
  );
}
