import "../css/NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navReact">
        <div className="container-fluid">
          <a
            className="btnMenu"
            href="#luxuryMenu"
            role="button"
            aria-controls="luxuryMenu"
            data-bs-toggle="offcanvas"
          >
            <i className="fa-solid fa-bars"></i>
          </a>
          <img
            src="/public/img/logo-inverso.png"
            style={{ width: "90px", height: "90px" }}
            title="Luxury Rest"
          />
          <span className="nombreEmpresa navbar-brand">Luxury Rest</span>
        </div>
      </nav>

      {/*Codigo del offcanvas para el menu slice*/}

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="luxuryMenu"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Luxury Rest</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <ul className="menuOff">
              <li>
                <a href="/" className="menuApart">
                  <i
                    className="fa-solid fa-house"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Inicio
                </a>
              </li>
              <hr />
              <li>
                <a href="" className="menuApart">
                  <i
                    className="fa-solid fa-arrow-right-to-bracket"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Iniciar sesión
                </a>
              </li>
              <hr />
              <li>
                <a href="/productos" className="menuApart">
                  <i
                    className="fa-solid fa-shop"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Productos
                </a>
              </li>
              <hr />
              <li>
                <a href="" className="menuApart">
                  <i
                    className="fa-solid fa-boxes-stacked"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Inventario
                </a>
              </li>
              <hr />
              <li>
                <a href="" className="menuApart">
                  <i
                    className="fa-solid fa-industry"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Materia prima
                </a>
              </li>
              <hr />
              <li>
                <a href="/recetas" className="menuApart">
                  <i
                    className="fa-solid fa-book"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Recetas
                </a>
              </li>
              <hr />
              <li>
                <a href="" className="menuApart">
                  <i
                    className="fa-solid fa-cart-shopping"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Compras
                </a>
              </li>
              <hr />
              <li>
                <a href="" className="menuApart">
                  <i
                    className="fa-solid fa-file-invoice-dollar"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Historial Ventas
                </a>
              </li>
              <hr />
              <li>
                <a href="" className="menuApart">
                  <i
                    className="fa-solid fa-chart-pie"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Dashboard
                </a>
              </li>
              <hr />
              <li>
                <a href="" className="menuApart">
                  <i
                    className="fa-solid fa-truck"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Pedidos
                </a>
              </li>
              <hr />
              <li>
                <a href="" className="menuApart">
                  <i
                    className="fa-solid fa-truck-ramp-box"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Proveedores
                </a>
              </li>
              <hr />
              <li>
                <a href="" className="menuApart">
                  <i
                    className="fa-solid fa-users"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Usuarios
                </a>
              </li>
              <hr />
              <li>
                <a href="" className="menuApart">
                  <i
                    className="fa-solid fa-cash-register"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Ventas
                </a>
              </li>
              <hr />
              <li>
                <a href="/merma" className="menuApart">
                  <i
                    className="fa-solid fa-trash"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Mermas
                </a>
              </li>
              <hr />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
