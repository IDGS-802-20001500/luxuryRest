import "../css/Recetas.css";

const Recetas = () => {
  return (
    <div className="contenedorRecetas">
      <div className="tituloContainer">
        <div className="iconContainer">
          <i className="fa-solid fa-book"></i>
        </div>
        <h1 className="titulo">Gestión de Recetas</h1>
      </div>
      <div
        className="container-fluid"
        style={{
          border: "1px solid rgba(0, 0, 0, 0.2)",
          width: "100%",
          height: "1px",
          borderRadius: "16px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      ></div>
    </div>
  );
};

export default Recetas;
