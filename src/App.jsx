import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="login" element={<h1>login</h1>} />
        <Route path="registrar" element={<h1>registrar</h1>} />
        <Route path="inventario" element={<h1>inventario</h1>} />
        <Route path="productos" element={<h1>productos</h1>} />
        <Route path="recetas" element={<h1>recetas</h1>} />
        <Route path="materiaPrima" element={<h1>materiaPrima</h1>} />
        <Route path="compras" element={<h1>compras</h1>} />
        <Routes path="ventas">
          <Route path="ventas/carrito" element={<h1>ventas</h1>} />
          <Route path="ventas/pago" element={<h1>ventas</h1>} />
        </Routes>
        <Route path="proveedores" element={<h1>proveedores</h1>} />
        <Route path="clientes" element={<h1>clientes</h1>} />
        <Route path="usuarios" element={<h1>usuarios</h1>} />
        <Route path="pedidos" element={<h1>pedidos</h1>} />
        <Route path="finanzas" element={<h1>facturas</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
