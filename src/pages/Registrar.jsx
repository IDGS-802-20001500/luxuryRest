import { useState } from "react";
import axios from "axios";

const Registrar = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    active: true,
    confirmed_at: new Date().toISOString(),
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
        "https://localhost:7075/api/User",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Usuario registrado:", response.data);
      const enlaceLogin = "http://localhost:5173/login";
      window.location.href = enlaceLogin;
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      // Manejar el error
    }
  };

  return (
    <div className="container mt-5">
      <div
        className="card p-4"
        style={{
          backgroundColor: "#f9f9f9",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          borderRadius: "8px",
        }}
      >
        <h2 className="text-center">Registrate gratis</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className="d-grid">
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Registrarse
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registrar;
