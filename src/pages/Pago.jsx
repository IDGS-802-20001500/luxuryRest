import { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

axios.defaults.headers.common["Accept"] = "application/json";

const Pago = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const [direccion, setDireccion] = useState("");

  // Cargar los datos del carrito al inicio (si existen en localStorage)
  useEffect(() => {
    const carritoGuardado = localStorage.getItem("productosEnCarrito");
    if (carritoGuardado) {
      setProductosEnCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  const calcularTotalAPagar = () => {
    return productosEnCarrito.reduce(
      (total, producto) => total + producto.precio_venta * producto.cantidad,
      0
    );
  };

  const redirigirPedidos = () => {
    // Aquí puedes poner el enlace de la pasarela de pago
    const enlacePedidos = "http://localhost:5173/pedidos";
    window.location.href = enlacePedidos;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      const fechaActual = new Date(); // Obtener la fecha actual
      fechaActual.setHours(fechaActual.getHours() - 6); // Restar 6 horas a la fecha actual
      const fecha_hora_pedido = fechaActual.toISOString(); // Formatear la fecha a ISO string
      fechaActual.setDate(fechaActual.getDate() + 3); // Sumar 3 días a la fecha actual
      const fecha_hora_entrega = fechaActual.toISOString(); // Formatear la fecha a ISO string
      // Luego para obtener la data
      const user = JSON.parse(localStorage.getItem("usuario"));
      // Acceder al ID
      const userId = user.id;

      // Estructura de datos para la inserción del pedido
      const datosPedido = {
        id_usuario: userId,
        estado_pedido: 1,
        fecha_hora_pedido: fecha_hora_pedido,
        domicilio: direccion,
        empleado: 1,
        fecha_hora_entrega: fecha_hora_entrega,
      };

      // Realizar la inserción en el servidor
      axios
        .post("https://localhost:7075/api/Pedidos", datosPedido)
        .then((response) => {
          // Estructura de datos para la inserción de los pedidosProdructos
          for (let index = 0; index < productosEnCarrito.length; index++) {
            const producto = productosEnCarrito[index];
            const datosPedido1 = {
              id: 0,
              id_pedido: response.data.id_pedido, // Reemplaza con el ID del pedido
              id_producto: producto.id_producto,
              cantidad: producto.cantidad,
            };
            // Realizar la inserción en el servidor
            axios
              .post("https://localhost:7075/api/PedidosProductos", datosPedido1)
              .then((response) => {
                // Estructura de datos para la inserción de los pedidosProdructos
                for (
                  let index = 0;
                  index < productosEnCarrito.length;
                  index++
                ) {
                  const producto = productosEnCarrito[index];
                  const datosProducto = {
                    nombre: "",
                    descripcion: "",
                    cantidad_disponible:
                      producto.cantidad_disponible - producto.cantidad,
                  };
                  // Realizar la inserción en el servidor
                  axios
                    .put(
                      `https://localhost:7075/api/Productos/` +
                        producto.id_producto,
                      datosProducto
                    )
                    .then((response) => {
                      console.log(
                        "Producto actualizado exitosamente:",
                        response.data
                      );
                      // Realizar acciones adicionales si es necesario
                    })
                    .catch((error) => {
                      console.error("Error al insertar datos:", error);
                    });
                }
                redirigirPedidos();
              })
              .catch((error) => {
                console.error("Error al insertar datos:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Error al insertar datos:", error);
        });
    }
  };

  const cardStyle = {
    backgroundColor: "#f9f9f9", // Color hueso
    padding: "20px", // Añade padding al contenido de la tarjeta
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Añade sombra a la tarjeta
    borderRadius: "8px", // Agrega bordes redondeados
  };

  return (
    <div className="container mt-4">
      <h1 style={{ textAlign: "center" }}>Pasarela de Pago</h1>
      <form onSubmit={handleSubmit} className="my-4">
        <div className="card p-4" style={cardStyle}>
          <p className="mb-3">
            Total a pagar: $
            {productosEnCarrito.length > 0 ? calcularTotalAPagar() : 0}
          </p>
          <div className="mb-3">
            <label htmlFor="direccion" className="form-label">
              Dirección de envío:
            </label>
            <input
              type="text"
              className="form-control"
              id="direccion"
              placeholder="Ingrese su dirección de envío"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Detalles de tarjeta:</label>
            <CardElement
              className="form-control"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
          <button
            type="submit"
            disabled={!stripe}
            className="btn btn-success btn-lg d-block w-100"
          >
            Realizar Compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default Pago;
