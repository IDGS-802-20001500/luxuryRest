import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import "./App.css";
import Footpage from "./components/Footpage";
import Carrito from "./pages/Carrito";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Pago from "./pages/Pago";
import Pedidos from "./pages/Pedido";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";

const stripePromise = loadStripe(
  "pk_test_51MtEODBMu9RgSpPE73uA5jOG7SYLaorW6hU8u4wE1VNN6ERcPu19SiwPtusKsEXzQTYD6IdcOYgx5c1XlkvEufDg00EH0GUDX4"
  //'sk_test_51MtEODBMu9RgSpPEini9G9YdSjjoepnch1SljAmu7plwuVrwEm8QhxNs63Pi7585IZo7byXP2ee64jHukEobNc7c00LUPvOz6q'
);

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registrar" element={<Registrar />} />
        <Route path="ventas/carrito" element={<Carrito />} />
        <Route
          path="ventas/pago"
          element={
            <Elements stripe={stripePromise}>
              <Pago />
            </Elements>
          }
        />
        <Route path="pedidos" element={<Pedidos />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footpage />
    </BrowserRouter>
  );
};

export default App;
