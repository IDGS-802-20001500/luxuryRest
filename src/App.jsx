import { Route, Routes, BrowserRouter } from "react-router-dom";
import Carrito from "./components/Carrito";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Pago from "./components/Pago";
import Pedidos from "./components/Pedidos";
import Login from "./components/Login";
import Registrar from "./components/Registrar";

const stripePromise = loadStripe(
  "pk_test_51MtEODBMu9RgSpPE73uA5jOG7SYLaorW6hU8u4wE1VNN6ERcPu19SiwPtusKsEXzQTYD6IdcOYgx5c1XlkvEufDg00EH0GUDX4"
  //'sk_test_51MtEODBMu9RgSpPEini9G9YdSjjoepnch1SljAmu7plwuVrwEm8QhxNs63Pi7585IZo7byXP2ee64jHukEobNc7c00LUPvOz6q'
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="login" element={<Login />} />
        <Route path="registrar" element={<Registrar />} />
        <Route path="inventario" element={<h1>inventario</h1>} />
        <Route path="productos" element={<h1>productos</h1>} />
        <Route path="recetas" element={<h1>recetas</h1>} />
        <Route path="materiaPrima" element={<h1>materiaPrima</h1>} />
        <Route path="compras" element={<h1>compras</h1>} />
        <Route path="ventas/carrito" element={<Carrito />} />
        <Route
          path="ventas/pago"
          element={
            <Elements stripe={stripePromise}>
              <Pago />
            </Elements>
          }
        />
        <Route path="proveedores" element={<h1>proveedores</h1>} />
        <Route path="clientes" element={<h1>clientes</h1>} />
        <Route path="usuarios" element={<h1>usuarios</h1>} />
        <Route path="pedidos" element={<Pedidos />} />
        <Route path="finanzas" element={<h1>facturas</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
