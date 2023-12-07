import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/logo_luxuryRest.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://localhost:7075/api/login",
        formData
      );

      const { token, user } = response.data;

      // Guardar el token en localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", JSON.stringify(user));
      alert("Usuario logueado con exito");
      window.location.href = "http://localhost:5173/ventas/carrito";
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      alert("Usuario o contraseña incorrectas");
    }
  };

  const containerStyle = {
    border: "1px solid #ccc", // Añade un borde al contenedor
    borderRadius: "8px", // Agrega esquinas redondeadas al borde
    padding: "20px",
    maxWidth: "400px", // Limita el ancho máximo del contenedor
    margin: "auto", // Centra el contenedor horizontalmente
    marginTop: "5rem", // Añade un margen superior
    backgroundColor: "#f9f9f9", // Color hueso
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Sombra suave
  };

  return (
    <div className="container mt-5" style={containerStyle}>
      <img
        src={`${logo}`}
        alt="Logo"
        style={{
          height: "10rem",
          margin: "auto", // Centra horizontalmente
          display: "block", // Asegura que la imagen sea un bloque para aplicar márgenes automáticamente
        }}
      />
      <h2 className="mb-4 text-center">LuxuryRest</h2>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3 text-center">
          ¿No tienes cuenta?{" "}
          <a href="http://localhost:5173/">Regístrate aquí</a>
        </div>
        <div className="d-grid">
          <div className="text-center">
            <button type="submit" className="btn btn-primary mx-auto">
              Iniciar sesión
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
