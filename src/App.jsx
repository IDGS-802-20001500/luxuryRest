import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Recetas from "./pages/Recetas";
import Productos from "./pages/Productos";
import Merma from "./pages/Merma";
import "./App.css";
import Footpage from "./components/Footpage";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<h1>login</h1>} />
        <Route path="registrar" element={<h1>registrar</h1>} />
        <Route path="inventario" element={<h1>inventario</h1>} />
        <Route path="productos" element={<Productos />} />
        <Route path="recetas" element={<Recetas />} />
        <Route path="materiaPrima" element={<h1>materiaPrima</h1>} />
        <Route path="compras" element={<h1>compras</h1>} />
        <Route path="ventas">
          <Route path="ventas/carrito" element={<h1>ventas</h1>} />
          <Route path="ventas/pago" element={<h1>ventas</h1>} />
        </Route>
        <Route path="proveedores" element={<h1>proveedores</h1>} />
        <Route path="clientes" element={<h1>clientes</h1>} />
        <Route path="usuarios" element={<h1>usuarios</h1>} />
        <Route path="pedidos" element={<h1>pedidos</h1>} />
        <Route path="finanzas" element={<h1>facturas</h1>} />
        <Route path="merma" element={<Merma />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footpage />
    </BrowserRouter>
  );
};

export default App;
