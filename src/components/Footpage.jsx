import "../css/Footpage.css";

const Footpage = () => {
  return (
    <div>
      <footer className="footerPage">
        <div>
          <h3 className="tituloFooter">Luxury Rest</h3>
        </div>
        <div className="componetesFooter">
          <div className="apartadoFooter">
            <h6 className="titleCom text-center">Redes Sociales</h6>
            <div className="rayaF"></div>
            <div className="iconosRS">
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-square-x-twitter"></i>
              <i className="fa-brands fa-square-instagram"></i>
              <i className="fa-brands fa-tiktok"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
          <div className="apartadoFooter">
            <h6 className="titleCom text-center">Oficinas</h6>
            <div className="rayaF"></div>
            <div style={{ textAlign: "center" }}>
              <p>
                Blvd. Delta #1230
                <br />
                Col.Jerez tercera sección
              </p>
            </div>
          </div>
          <div className="apartadoFooter">
            <h6 className="titleCom text-center">Quejas</h6>
            <div className="rayaF"></div>
            <div style={{ textAlign: "center" }}>
              <p>
                <b>Si tienes alguna queja o sugerencia mandanos un correo a:</b>
                <br />
                atencionluxuryrest@luxury.com
              </p>
            </div>
          </div>
        </div>
        <div>
          <h6>© 2023 Luxury Rest</h6>
        </div>
      </footer>
    </div>
  );
};

export default Footpage;
