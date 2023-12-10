import "../css/NavBar.css";

const NavBar = () => {
  const handleLogout = () => {
    // Elimina el usuario del localStorage al cerrar sesión
    localStorage.clear();
    // Aquí podrías realizar otras acciones relacionadas con el cierre de sesión si es necesario
  };
  const isLoggedIn = !!localStorage.getItem("usuario");
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
                <a
                  href={isLoggedIn ? "/login" : "/login"}
                  className="menuApart"
                  onClick={isLoggedIn ? handleLogout : undefined}
                >
                  <i
                    className="fa-solid fa-arrow-right-to-bracket"
                    style={{ marginRight: "10px" }}
                  ></i>
                  {isLoggedIn ? "Cerrar Sesión" : "Login"}
                </a>
              </li>
              <hr />
              <li>
                <a href="/pedidos" className="menuApart">
                  <i
                    className="fa-solid fa-truck"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Pedidos
                </a>
              </li>
              <hr />
              <li>
                <a href="/ventas/carrito" className="menuApart">
                  <i
                    className="fa-solid fa-cash-register"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Productos
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
