import React, { useState, useEffect } from "react";
import axios from "axios";

function Pedidos() {
  const [pedidos12, setPedidos12] = useState([]);
  const [pedidos34, setPedidos34] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pedidosProductos, setPedidosProductos] = useState([]);
  const [productos, setProductos] = useState([]);
  const [showEstado12, setShowEstado12] = useState(true);
  const [activeTab, setActiveTab] = useState("pendientes");
  // Luego para obtener la data
  const user = JSON.parse(localStorage.getItem("usuario"));
  // Acceder al ID
  const userId = user.id;

  useEffect(() => {
    fetch("https://localhost:7075/api/Pedidos")
      .then((res) => res.json())
      .then((data) => {
        const pedidosEstado12 = data
          .filter(
            (p) =>
              p.id_usuario === userId &&
              (p.estado_pedido === 1 || p.estado_pedido === 2)
          )
          .map((p) => ({
            ...p,
            total: getTotal(p),
          }));

        const pedidosEstado34 = data
          .filter(
            (p) =>
              p.id_usuario === userId &&
              (p.estado_pedido === 3 || p.estado_pedido === 4)
          )
          .map((p) => ({
            ...p,
            total: getTotal(p),
          }));

        setPedidos12(pedidosEstado12);
        setPedidos34(pedidosEstado34);
      });
  }, []);

  useEffect(() => {
    fetch("https://localhost:7075/api/PedidosProductos")
      .then((res) => res.json())
      .then((data) => {
        setPedidosProductos(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://localhost:7075/api/Productos")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  async function handleIniciarViaje(pedido) {
    setLoading(true);

    try {
      await axios.put(
        `https://localhost:7075/api/Pedidos/${pedido.id_pedido}`,
        {
          ...pedido,
          estado_pedido: 4, // cambiar a "en camino"
        }
      );

      alert("Pedido cancelado afortunadamente aun sin iniciar viaje!");

      // actualizar estado de pedidos
      setPedidos12((pedidos) =>
        pedidos.map((p) => {
          if (p.id_pedido === pedido.id_pedido) {
            return { ...p, estado_pedido: 4 };
          }
          return p;
        })
      );
      // Encontrar items de este pedido
      const itemsPedido = pedidosProductos.filter(
        (pp) => pp.id_pedido === pedido.id_pedido
      );

      if (itemsPedido.length > 0) {
        try {
          // Sumar precio * cantidad de cada item
          itemsPedido.forEach((item) => {
            const producto = productos.find(
              (p) => p.id_producto === item.id_producto
            );
            // Datos a actualizar
            const datos = {
              nombre: "Devolucion",
              descripcion: "",
              cantidad_disponible: producto.cantidad_disponible + item.cantidad,
            };
            // Endpoint para actualizar producto
            const url = `https://localhost:7075/api/Productos/${producto.id_producto}`;
            axios
              .put(url, datos)
              .then((respuesta) => {
                console.log("Producto actualizado" + respuesta.data);
              })
              .catch((error) => {
                console.log(error);
              });
          });
        } catch (err) {}
      }
    } catch (error) {
      console.log(error);
      alert("Oops, algo salió mal");
    }

    setLoading(false);
  }

  async function handleEntregaFinalizada(pedido) {
    setLoading(true);

    try {
      await axios.put(
        `https://localhost:7075/api/Pedidos/${pedido.id_pedido}`,
        {
          ...pedido,
          estado_pedido: 4, // cambiar a "en camino"
        }
      );

      alert("Pedido cancelado aunque ya venia en camino!");

      // actualizar estado de pedidos
      setPedidos12((pedidos) =>
        pedidos.map((p) => {
          if (p.id_pedido === pedido.id_pedido) {
            return { ...p, estado_pedido: 4 };
          }
          return p;
        })
      );

      // Encontrar items de este pedido
      const itemsPedido = pedidosProductos.filter(
        (pp) => pp.id_pedido === pedido.id_pedido
      );

      if (itemsPedido.length > 0) {
        try {
          // Sumar precio * cantidad de cada item
          itemsPedido.forEach((item) => {
            const producto = productos.find(
              (p) => p.id_producto === item.id_producto
            );
            // Datos a actualizar
            const datos = {
              nombre: "Devolucion",
              descripcion: "",
              cantidad_disponible:
                producto.cantidad_disponible + producto.cantidad,
            };
            // Endpoint para actualizar producto
            const url = `https://localhost:7075/api/Productos/${producto.id_producto}`;
            axios
              .put(url, datos)
              .then((respuesta) => {
                console.log("Producto actualizado" + respuesta.data);
              })
              .catch((error) => {
                console.log(error);
              });
          });
        } catch (err) {}
      }
    } catch (error) {
      console.log(error);
      alert("Oops, algo salió mal");
    }

    setLoading(false);
  }

  function getBoton(pedido) {
    if (pedido.estado_pedido === 1) {
      return (
        <button
          className="btn btn-danger"
          disabled={loading}
          onClick={() => handleIniciarViaje(pedido)}
        >
          {loading ? "Cargando..." : "Cancelar"}
        </button>
      );
    } else if (pedido.estado_pedido === 2) {
      return (
        <button
          className="btn btn-danger"
          disabled={loading}
          onClick={() => handleEntregaFinalizada(pedido)}
        >
          {loading ? "Cargando..." : "Cancelar"}
        </button>
      );
    } else if (pedido.estado_pedido === 3) {
      return <p>Pedido Vendido</p>;
    } else if (pedido.estado_pedido === 4) {
      return <p>Pedido Cancelado</p>;
    }
  }

  function getTotal(pedido) {
    let total = 0;

    // Encontrar items de este pedido
    const itemsPedido = pedidosProductos.filter(
      (pp) => pp.id_pedido === pedido.id_pedido
    );

    if (itemsPedido.length > 0) {
      try {
        // Sumar precio * cantidad de cada item
        itemsPedido.forEach((item) => {
          const producto = productos.find(
            (p) => p.id_producto === item.id_producto
          );
          total += producto.precio_venta * item.cantidad;
        });

        return total;
      } catch (err) {
        return 0;
      }
    }
  }

  const cardStyle = {
    backgroundColor: "#f9f9f9", // Color hueso
    padding: "20px", // Añade padding al contenido de la tarjeta
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Añade sombra a la tarjeta
    borderRadius: "8px", // Agrega bordes redondeados
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mt-4">
      <h1 style={{ textAlign: "center" }}>Pedidos</h1>
      {/* Botones para alternar entre secciones */}
      <div className="col-md-12 mb-3">
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "pendientes" ? "active" : ""
              }`}
              onClick={() => handleTabChange("pendientes")}
            >
              Pedidos Pendientes
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "cancelados" ? "active" : ""
              }`}
              onClick={() => handleTabChange("cancelados")}
            >
              Pedidos Cancelados y/o finalizados
            </button>
          </li>
        </ul>

        <div className="tab-content">
          {activeTab === "pendientes" && (
            <div className="tab-pane fade show active">
              {/* Contenido para Pedidos Pendientes */}
            </div>
          )}
          {activeTab === "cancelados" && (
            <div className="tab-pane fade show active">
              {/* Contenido para Pedidos Cancelados y/o finalizados */}
            </div>
          )}
        </div>
      </div>

      <div className="row">
        {/* Renderizado condicional basado en el estado booleano */}
        {activeTab === "pendientes" && (
          <>
            {pedidos12.length === 0 && (
              <>
                <p>No se encontraron pedidos vigentez</p>
              </>
            )}
            {pedidos12.map((pedido) => (
              <div key={pedido.id_pedido} className="col-md-4 mb-3">
                <div className="card" style={cardStyle}>
                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div className="row">
                      <div className="card-header">
                        Pedido No. {pedido.id_pedido}
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          <b>Solicitado:</b> {pedido.fecha_hora_pedido}
                        </p>
                        <p className="card-text">
                          <b>Estimado:</b> {pedido.fecha_hora_entrega}
                        </p>
                        <p className="card-text">
                          <b>Dirección:</b> {pedido.domicilio}
                        </p>
                        <p>Total: ${getTotal(pedido)}</p>
                        {getBoton(pedido)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        {activeTab === "cancelados" && (
          <>
            {pedidos34.length === 0 && (
              <>
                <p>No se encontraron pedidos vigentez</p>
              </>
            )}
            {pedidos34.map((pedido) => (
              <div key={pedido.id_pedido} className="col-md-4 mb-3">
                <div className="card" style={cardStyle}>
                  <div
                    className="card-body"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div className="row">
                      <div className="card-header">
                        Pedido No. {pedido.id_pedido}
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          <b>Solicitado:</b> {pedido.fecha_hora_pedido}
                        </p>
                        <p className="card-text">
                          <b>Terminado:</b> {pedido.fecha_hora_entrega}
                        </p>
                        <p className="card-text">
                          <b>Dirección:</b> {pedido.domicilio}
                        </p>
                        <p>Total: ${getTotal(pedido)}</p>
                        {getBoton(pedido)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Pedidos;
