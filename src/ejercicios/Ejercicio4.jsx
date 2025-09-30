import { useState } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio4() {
  const [busqueda, setBusqueda] = useState("");

  // Lista predefinida de animales
  const animales = [
    "Perro", "Gato", "Pez", "Loro", "Conejo",
    "Tortuga", "Hamster", "Caballo", "Vaca", "Oveja",
    "Gallina", "Águila", "Delfín", "Tiburón", "León",
    "Tigre", "Elefante", "Cebra", "Jirafa", "Canguro"
  ];

  // Filtrar lista en tiempo real
  const listaFiltrada = animales.filter((animal) =>
    animal.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="ejercicio-container" style={{ backgroundColor: "#0f172a" }}>
      <h2 style={{ marginBottom: "20px" }}>🔎 Filtro de Búsqueda</h2>

      {/* Campo de búsqueda */}
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Escribe para filtrar animales..."
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "1rem",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      />

      {/* Lista de animales filtrados */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {listaFiltrada.length > 0 ? (
          listaFiltrada.map((animal, index) => (
            <li
              key={index}
              style={{
                background: "#1e293b",
                color: "white",
                marginBottom: "8px",
                padding: "10px 15px",
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: "500",
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              }}
            >
              {animal}
            </li>
          ))
        ) : (
          <p style={{ color: "#f87171", fontWeight: "bold" }}>
            ❌ No hay coincidencias
          </p>
        )}
      </ul>

      {/* Volver al menú */}
      <Link to="/" className="back-link" style={{ marginTop: "20px" }}>
        ← Volver al menú
      </Link>
    </div>
  );
}
