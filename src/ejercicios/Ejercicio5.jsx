import { useState } from "react";
import { Link } from "react-router-dom";

export default function Ejercicio5() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const validarEntradas = () => {
    if (num1 === "" || num2 === "") {
      setError("⚠️ Por favor ingresa ambos números.");
      return false;
    }
    if (isNaN(num1) || isNaN(num2)) {
      setError("⚠️ Solo se permiten números.");
      return false;
    }
    setError("");
    return true;
  };

  const operar = (tipo) => {
    if (!validarEntradas()) return;

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (tipo) {
      case "sumar":
        setResultado(n1 + n2);
        break;
      case "restar":
        setResultado(n1 - n2);
        break;
      case "multiplicar":
        setResultado(n1 * n2);
        break;
      case "dividir":
        if (n2 === 0) {
          setError("❌ No se puede dividir entre 0.");
          setResultado(null);
        } else {
          setResultado(n1 / n2);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="ejercicio-container" style={{ backgroundColor: "#0f172a" }}>
      <h2 style={{ marginBottom: "20px" }}>🧮 Calculadora Sencilla</h2>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Número 1"
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            width: "150px",
            marginRight: "10px",
            textAlign: "center",
          }}
        />
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Número 2"
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            width: "150px",
            textAlign: "center",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => operar("sumar")}
          style={{
            background: "#3b82f6",
            color: "white",
            padding: "10px 15px",
            borderRadius: "8px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
          }}
        >
          ➕ Sumar
        </button>
        <button
          onClick={() => operar("restar")}
          style={{
            background: "#3b82f6",
            color: "white",
            padding: "10px 15px",
            borderRadius: "8px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
          }}
        >
          ➖ Restar
        </button>
        <button
          onClick={() => operar("multiplicar")}
          style={{
            background: "#3b82f6",
            color: "white",
            padding: "10px 15px",
            borderRadius: "8px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
          }}
        >
          ✖️ Multiplicar
        </button>
        <button
          onClick={() => operar("dividir")}
          style={{
            background: "#3b82f6",
            color: "white",
            padding: "10px 15px",
            borderRadius: "8px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
          }}
        >
          ➗ Dividir
        </button>
      </div>

      {error && (
        <p style={{ color: "#f87171", fontWeight: "bold", marginBottom: "10px" }}>
          {error}
        </p>
      )}

      {resultado !== null && !error && (
        <p
          style={{
            color: "#4ade80",
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "#1e293b",
            padding: "10px 15px",
            borderRadius: "8px",
          }}
        >
          ✅ Resultado: {resultado}
        </p>
      )}

      {/* Volver al menú */}
      <Link to="/" className="back-link" style={{ marginTop: "20px" }}>
        ← Volver al menú
      </Link>
    </div>
  );
}
