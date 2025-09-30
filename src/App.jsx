import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Ejercicio1 from "./ejercicios/Ejercicio1";
import Ejercicio2 from "./ejercicios/Ejercicio2";
import Ejercicio3 from "./ejercicios/Ejercicio3";
import Ejercicio4 from "./ejercicios/Ejercicio4";
import Ejercicio5 from "./ejercicios/Ejercicio5";
import Ejercicio6 from "./ejercicios/Ejercicio6";
import Ejercicio7 from "./ejercicios/Ejercicio7";
import Ejercicio8 from "./ejercicios/Ejercicio8";
import Ejercicio9 from "./ejercicios/Ejercicio9";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Menú principal */}
        <Route
          path="/"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                minHeight: "100vh",
                backgroundColor: "#0f172a",
                color: "white",
                textAlign: "center",
              }}
            >
              <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>
                🚀 Ejercicios de React
              </h1>
              <p style={{ color: "#e2e8f0", marginBottom: "20px" }}>
                Haz clic en un ejercicio para abrirlo:
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  width: "100%",
                  maxWidth: "400px",
                }}
              >
                <Link to="/ejercicio1" style={linkStyle}>
                  🎨 Ejercicio 1: Cambiador de Color
                </Link>
                <Link to="/ejercicio2" style={linkStyle}>
                  🖱️ Ejercicio 2: Contador de Clics
                </Link>
                <Link to="/ejercicio3" style={linkStyle}>
                  📋 Ejercicio 3: Lista Dinámica
                </Link>
                <Link to="/ejercicio4" style={linkStyle}>
                  🔍 Ejercicio 4: Filtro de Búsqueda
                </Link>
                <Link to="/ejercicio5" style={linkStyle}>
                  ➕ Ejercicio 5: Calculadora
                </Link>
                <Link to="/ejercicio6" style={linkStyle}>
                  ⏱️ Ejercicio 6: Temporizador
                </Link>
                <Link to="/ejercicio7" style={linkStyle}>
                  🔐 Ejercicio 7: Generador de Contraseñas
                </Link>
                <Link to="/ejercicio8" style={linkStyle}>
                  📝 Ejercicio 8: Contador de Palabras y Caracteres
                </Link>
                <Link to="/ejercicio9" style={linkStyle}>
                  ✅ Ejercicio 9: Lista de Tareas
                </Link>
              </div>
            </div>
          }
        />

        {/* Rutas de ejercicios */}
        <Route path="/ejercicio1" element={<Ejercicio1 />} />
        <Route path="/ejercicio2" element={<Ejercicio2 />} />
        <Route path="/ejercicio3" element={<Ejercicio3 />} />
        <Route path="/ejercicio4" element={<Ejercicio4 />} />
        <Route path="/ejercicio5" element={<Ejercicio5 />} />
        <Route path="/ejercicio6" element={<Ejercicio6 />} />
        <Route path="/ejercicio7" element={<Ejercicio7 />} />
        <Route path="/ejercicio8" element={<Ejercicio8 />} />
        <Route path="/ejercicio9" element={<Ejercicio9 />} />
      </Routes>
    </Router>
  );
}

// 🎨 Estilo para los enlaces del menú
const linkStyle = {
  backgroundColor: "#3b82f6",
  padding: "12px",
  borderRadius: "8px",
  color: "white",
  fontWeight: "bold",
  textDecoration: "none",
  transition: "background 0.3s",
  textAlign: "center",
};
