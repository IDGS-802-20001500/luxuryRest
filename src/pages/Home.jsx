import "../css/Home.css";

const Home = () => {
  return (
    <div className="contenedorHome">
      <h1 className="tituloHome">Luxury Rest</h1>
      <h3 className="subtituloHome">Tu lugar de descanso</h3>
      <div className="carrusel mb-3">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/public/img/alf.jpg"
                className="d-block w-100"
                alt="slide 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/public/img/alm.jpg"
                className="d-block w-100"
                alt="slide 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="/public/img/sillon.jpg"
                className="d-block w-100"
                alt="slide 3"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "black",
          border: "1px solid black",
          width: "100%",
          height: "5px",
          borderRadius: "16px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      ></div>
      <div className="logotipoInfo">
        <img
          src="/public/img/logo_luxuryRest.jpg"
          alt=""
          style={{ width: "250px", height: "250px" }}
        />
      </div>
      <br />
      <div className="contenedorInfo">
        <div className="nosotrosInfo">
          <h1 className="text-center display-1">Nosotros</h1>
          <p style={{ fontSize: "1rem", textAlign: "justify" }}>
            Somos una microempresa especializada en brindarte el máximo confort
            en tus momentos de descanso. Con más de 6 meses de experiencia,
            ofrecemos productos premium como cobijas, cubre colchones y
            almohadas, cuidadosamente seleccionados para garantizar tu
            comodidad. Ubicados en la calle Diaz Mirón en la colonia centro,
            nuestra sucursal es un refugio de lujo donde encontrarás opciones
            para transformar tu espacio de descanso.
            <br />
            <br />
            En LuxuryRest, gestionamos nuestro inventario con dedicación para
            asegurar que cada producto refleje nuestro compromiso con la
            excelencia y el confort. Ven y descubre un mundo de relajación en
            LuxuryRest, donde tu descanso es lo más importante.
          </p>
        </div>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "black",
            border: "1px solid black",
            width: "100%",
            height: "5px",
            borderRadius: "16px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></div>
        <div className="misvisInfo row g-3">
          <div className="col">
            <h1 className="text-center display-2">Misión</h1>
            <br />
            <p style={{ fontSize: "1rem", textAlign: "justify" }}>
              En LuxuryRest, nuestra misión es brindar una experiencia de
              descanso excepcional y de lujo a través de productos de alta
              calidad y un servicio insuperable. Buscamos mejorar la calidad del
              descanso de nuestros clientes y crear un entorno de bienestar en
              sus vidas diarias.
            </p>
          </div>
          <div className="col">
            <h1 className="text-center display-2">Visión</h1>
            <br />
            <p style={{ fontSize: "1rem", textAlign: "justify" }}>
              Nuestra visión en LuxuryRest es convertirnos en líderes
              reconocidos en la industria del confort, ofreciendo soluciones de
              descanso personalizadas que se adapten a las necesidades únicas de
              cada individuo. Aspiramos a ser el referente en productos y
              servicios que elevan la experiencia del confort.
            </p>
          </div>
        </div>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "black",
            border: "1px solid black",
            width: "100%",
            height: "5px",
            borderRadius: "16px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></div>
        <div className="valoresInfo">
          <h1 className="text-center display-2">Valores</h1>
          <br />
          <div style={{ fontSize: "1rem", textAlign: "justify" }}>
            <p>
              En LuxuryRest, nos guían valores fundamentales de excelencia en
              cada detalle, dedicación inquebrantable al servicio al cliente y
              la constante búsqueda de la mejora en la calidad del descanso.
              Estamos comprometidos con la satisfacción del cliente, la
              innovación continua y la creación de un entorno en el que todos
              puedan encontrar un momento de relajación en su día a día.
            </p>
            <ul>
              <li>Excelencia en cada detalle.</li>
              <li>Dedicación inquebrantable al servicio al cliente.</li>
              <li>
                Búsqueda constante de la mejora en la calidad del descanso.
              </li>
              <li>Satisfacción del cliente.</li>
              <li>Innovación continua.</li>
              <li>Creación de un entorno de relajación diaria.</li>
            </ul>
          </div>
        </div>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "black",
            border: "1px solid black",
            width: "100%",
            height: "5px",
            borderRadius: "16px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></div>
        <div>
          <h1 className="text-center display-2">Nuestros productos son:</h1>
          <br />
          <div className="row g-3">
            <div className="col-3">
              <div className="card" style={{ height: "210px" }}>
                <div className="card-body">
                  <h1 className="card-title">Elegancia</h1>
                  <hr />
                  <p style={{ textAlign: "justify" }}>
                    Nuestros productos son elegantes y de alta calidad, para que
                    tu descanso sea lo más placentero posible.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card" style={{ height: "210px" }}>
                <div className="card-body">
                  <h1 className="card-title">Comodos</h1>
                  <hr />
                  <p style={{ textAlign: "justify" }}>
                    Nuestros productos son comodos y sumamente agradables para
                    que tu descanso sea lo mas agradable posible.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card" style={{ height: "210px" }}>
                <div className="card-body">
                  <h1 className="card-title">Duraderos</h1>
                  <hr />
                  <p style={{ textAlign: "justify" }}>
                    Nuestros productos son los mas duraderos del mercado, por
                    cual puedes disfrutar de ellos por mucho tiempo.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card" style={{ height: "210px" }}>
                <div className="card-body">
                  <h1 className="card-title">Calidad precio</h1>
                  <hr />
                  <p style={{ textAlign: "justify" }}>
                    Nuestros productos son de la mejor calidad y al mejor precio
                    que te podemos ofrecer en el mercado, cada centavo cuenta
                    para nosotros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "black",
            border: "1px solid black",
            width: "100%",
            height: "5px",
            borderRadius: "16px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></div>
        <div
          className="localizanos"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <h1 className="text-center display-2">Dirección</h1>
          <br />
          <img
            src="/public/img/Ubicacion.png"
            alt="ubicacion"
            style={{ width: "50%" }}
          />
        </div>
        <div
          className="container-fluid"
          style={{
            backgroundColor: "black",
            border: "1px solid black",
            width: "100%",
            height: "5px",
            borderRadius: "16px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></div>
        <div className="contactanos">
          <h1 className="text-center display-2">Contáctanos</h1>
          <br />
          <div className="row">
            <div className="col">
              <h3 className="text-center display-6">Teléfono</h3>
              <p className="text-center">+52 1 477 123 4567</p>
            </div>
            <div className="col">
              <h3 className="text-center display-6">Correo</h3>
              <p className="text-center">luxuryrestcompany@luxury.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
