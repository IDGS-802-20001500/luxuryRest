import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Carrito.css"; // Archivo CSS para estilos
import Rating from "react-rating-stars-component";

axios.defaults.headers.common["Accept"] = "application/json";

const Carrito = () => {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    axios.get("https://localhost:7075/api/Productos").then((response) => {
      // Filtrar por nombre y estatus
      let productosFiltrados = [];
      if (busqueda !== "") {
        productosFiltrados = response.data
          .filter(
            (prod) =>
              prod.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
              prod.estatus === 1
          )
          .map((prod) => ({
            ...prod,
            cantidad: 1,
          }));
      } else {
        productosFiltrados = response.data
          .filter((prod) => prod.estatus === 1)
          .map((prod) => ({
            ...prod,
            cantidad: 1,
          }));
      }
      setProductos(productosFiltrados);
    });
    console.log(busqueda);
  }, [busqueda]); // Disparar efecto cuando cambia busqueda

  // Guardar los cambios en localStorage cada vez que se actualice productosEnCarrito
  useEffect(() => {
    localStorage.setItem(
      "productosEnCarrito",
      JSON.stringify(productosEnCarrito)
    );
  }, [productosEnCarrito]);

  const totalAPagar = productosEnCarrito.reduce(
    (total, producto) => total + producto.precio_venta * producto.cantidad,
    0
  );

  const agregarAlCarrito = (producto) => {
    alert(`Producto: ${producto.nombre}, agregado al carrito`);
    setProductosEnCarrito([...productosEnCarrito, producto]);
  };

  const eliminarDelCarrito = (id_producto) => {
    alert(`Producto con id: ${id_producto}, eliminado al carrito`);
    const nuevosProductosEnCarrito = [...productosEnCarrito].filter(
      (producto) => producto.id_producto !== id_producto
    );
    setProductosEnCarrito(nuevosProductosEnCarrito);
  };

  const handlePagarClick = () => {
    const usuario = localStorage.getItem("usuario");
    // Verificar si el id_usuario está en el localStorage
    if (usuario) {
      const enlacePasarelaPago = "http://localhost:5173/ventas/pago";
      window.location.href = enlacePasarelaPago;
    } else {
      // Si no se encuentra el id de usuario en el localStorage, redirigir al usuario a /login
      alert("Necesitas loguearte primero");
      window.location.href = "http://localhost:5173/login";
    }
  };

  const cardStyle = {
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Añade sombra a las tarjetas
    margin: "10px", // Añade un margen entre las tarjetas
    borderRadius: "8px", // Agrega esquinas redondeadas
    backgroundColor: "#f9f9f9", // Color hueso
    padding: "20px", // Añade un padding al contenido de la tarjeta
  };

  return (
    <div className="container mt-4">
      <h1 style={{ textAlign: "center" }}>LuxuryRest</h1>
      {!mostrarCarrito && (
        <>
          <input
            type="text"
            className="form-control"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar..."
          />
          <br></br>
          <div className="row">
            {productos.length === 0 && (
              <>
                <p>No se encontraron productos que coincidan con la búsqueda</p>
                <img
                  src="https://sipp-pinturerias.com.ar/img/404.png"
                  width={"100%"}
                  height={"420rem"}
                  alt="Imagen de producto no encontrado"
                />
              </>
            )}
            {productos
              .filter((producto) =>
                producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
              )
              .map((producto) => (
                <div key={producto.id_producto} className="col-md-4 mb-3">
                  <div className="card" style={cardStyle}>
                    <div
                      className="card-body"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <h4
                            className="card-title"
                            style={{ textAlign: "center" }}
                          >
                            {producto.nombre}
                          </h4>
                        </div>
                        <img
                          src={`${producto.imagen}`}
                          width={"100%"}
                          height={"40%"}
                          alt="Imagen de producto"
                        />
                        <div className="col-md-12">
                          <p
                            className="card-text"
                            style={{ textAlign: "center" }}
                          >
                            Descripcion: {producto.descripcion}
                          </p>
                        </div>
                        <div>
                          <p className="card-text">
                            <span className="bg-light p-1 rounded">
                              <strong>Precio:</strong> ${producto.precio_venta}
                            </span>
                          </p>
                        </div>

                        <div style={{ marginLeft: "auto" }}>
                          <Rating
                            count={5}
                            value={producto.valoracionT / producto.valoracionC}
                            edit={false}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                          />
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          style={{ alignItems: "flex-end" }}
                          defaultValue={1}
                          max={producto.cantidad_disponible}
                          min={1}
                          onChange={(e) => {
                            const nuevaCantidad =
                              parseInt(e.target.value, 10) || 0;
                            const nuevosProductos = productos.map((p) =>
                              p.id_producto === producto.id_producto
                                ? {
                                    ...p,
                                    cantidad: nuevaCantidad,
                                  }
                                : p
                            );
                            setProductos(nuevosProductos);
                          }}
                        />
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                          <button
                            onClick={() => agregarAlCarrito(producto)}
                            className="btn btn-primary form-control"
                            width={"100%"}
                          >
                            Agregar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
      <div
        className="carrito-indicador mt-3"
        onClick={() => setMostrarCarrito(!mostrarCarrito)}
      >
        <img
          src="/src/assets/carrito.png"
          alt="Carrito"
          className="mr-2"
          width="30"
        />
        <span className="badge badge-secondary">
          {productosEnCarrito.length}
        </span>
      </div>
      {mostrarCarrito && (
        <div className="productos-carrito mt-4">
          <h2>Productos en el carrito:</h2>
          {productosEnCarrito.map((producto) => (
            <div key={producto.id} className="card mb-3" style={cardStyle}>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={`${producto.imagen}`}
                      className="img-fluid rounded"
                      alt="Imagen de producto"
                    />
                  </div>
                  <div className="col-md-8">
                    <h3 className="card-title">{producto.nombre}</h3>
                    <p className="card-text">
                      Precio: ${producto.precio_venta}
                    </p>
                    <p className="card-text">Cantidad: {producto.cantidad}</p>
                    <button
                      onClick={() => eliminarDelCarrito(producto.id_producto)}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p className="mt-3">Total a pagar: ${totalAPagar}</p>
          <div className="d-flex justify-content-between">
            <button
              onClick={() => setMostrarCarrito(false)}
              className="btn btn-secondary"
            >
              Regresar
            </button>
            <button className="btn btn-success" onClick={handlePagarClick}>
              Pagar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
