// src/ejercicios/Ejercicio9.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio9() {
  // Estado de tareas (cada tarea es { id, texto, completada })
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  // Al cargar, recuperar de localStorage
  useEffect(() => {
    const guardadas = localStorage.getItem("tareas");
    if (guardadas) {
      setTareas(JSON.parse(guardadas));
    }
  }, []);

  // Cada vez que cambien las tareas, guardarlas
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // Agregar tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    const nueva = {
      id: Date.now(),
      texto: nuevaTarea.trim(),
      completada: false,
    };
    setTareas([...tareas, nueva]);
    setNuevaTarea("");
  };

  // Cambiar estado de completada
  const toggleTarea = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  // Limpiar tareas completadas
  const limpiarCompletadas = () => {
    setTareas(tareas.filter((t) => !t.completada));
  };

  return (
    <div className="ejercicio-container" style={{ backgroundColor: "#0f172a" }}>
      <h2 style={{ marginBottom: "20px" }}>✅ Lista de Tareas</h2>

      {/* Input para nueva tarea */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribe una nueva tarea..."
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            width: "250px",
            marginRight: "10px",
          }}
        />
        <button
          onClick={agregarTarea}
          style={{
            background: "#3b82f6",
            color: "white",
            padding: "10px 15px",
            borderRadius: "8px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.opacity = 0.8)}
          onMouseOut={(e) => (e.target.style.opacity = 1)}
        >
          ➕ Agregar
        </button>
      </div>

      {/* Lista de tareas */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          width: "300px",
          margin: "0 auto 20px auto",
          textAlign: "left",
        }}
      >
        {tareas.map((t) => (
          <li
            key={t.id}
            style={{
              marginBottom: "10px",
              background: "#1e293b",
              padding: "10px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "white",
            }}
          >
            <input
              type="checkbox"
              checked={t.completada}
              onChange={() => toggleTarea(t.id)}
            />
            <span
              style={{
                textDecoration: t.completada ? "line-through" : "none",
                color: t.completada ? "#94a3b8" : "white",
              }}
            >
              {t.texto}
            </span>
          </li>
        ))}
      </ul>

      {/* Botón para limpiar completadas */}
      {tareas.some((t) => t.completada) && (
        <button
          onClick={limpiarCompletadas}
          style={{
            background: "#ef4444",
            color: "white",
            padding: "10px 15px",
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
          🗑️ Limpiar completadas
        </button>
      )}

      {/* Volver al menú */}
      <Link to="/" className="back-link" style={{ marginTop: "20px" }}>
        ← Volver al menú
      </Link>
    </div>
  );
}
