import React, { useState, useEffect, useRef } from "react";
import "../estilos/Tractores.css";
import { useTractores } from "../services/useTractores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCog,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Tractores = () => {
  const { tractores, loading } = useTractores();
  const [paginaActual, setPaginaActual] = useState(1);
  const tractoresPorPagina = 10;
  const containerRef = useRef(null); 

  const tractoresFiltrados = tractores.filter(
    (tractor) => tractor.categoria === "maquinaria-agricola"
  );

  const indexUltimo = paginaActual * tractoresPorPagina;
  const indexPrimero = indexUltimo - tractoresPorPagina;
  const tractoresPagina = tractoresFiltrados.slice(indexPrimero, indexUltimo);

  const totalPaginas = Math.ceil(
    tractoresFiltrados.length / tractoresPorPagina
  );

  const cambiarPagina = (numero) => {
    if (numero >= 1 && numero <= totalPaginas) {
      setPaginaActual(numero);
    }
  };

 useEffect(() => {
  if (containerRef.current) {
    containerRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [paginaActual]);



  const getTractorRoute = (seccion, id) => {
    switch (seccion) {
      case "A":
        return `/equipos/tractores/serie-ra-25-70-hp/${id}`;
      case "B":
        return `/equipos/tractores/serie-rd-30-70-hp/${id}`;
      case "C":
        return `/equipos/tractores/serie-ra-45-90-hp/${id}`;
      case "D":
        return `/equipos/tractores/serie-rc-100-140-hp/${id}`;
      case "E":
        return `/equipos/tractores/serie-rs-160-220-hp/${id}`;
      default:
        return `/equipos/tractores/${id}`;
    }
  };

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-success" role="status"></div>
      </div>
    );
  }

  return (
    <>
      <div className="container mt-4" ref={containerRef}>
        <div className="row">
          {tractoresPagina.map((tractor) => (
            <div key={tractor.id} className="col-md-6 mb-4">
              <div className="card shadow-lg card-sólida">
                <img
                  src={tractor.imageUrls[0]}
                  className="img-tractor"
                  alt="tractor"
                />
                <div className="card-content">
                  <h3 className="titulo">{tractor.title}</h3>
                  <hr />
                  <div className="detalles">
                    {tractor.marca && (
                      <p>
                        <FontAwesomeIcon icon={faCog} className="iconito" />{" "}
                        {capitalizeFirstLetter(tractor.marca)}
                      </p>
                    )}
                    {tractor.modelo && (
                      <p>
                        <FontAwesomeIcon icon={faCog} className="iconito" />{" "}
                        {capitalizeFirstLetter(tractor.modelo)}
                      </p>
                    )}
                    {tractor.linea && (
                      <p>
                        <FontAwesomeIcon icon={faCog} className="iconito" />{" "}
                        {capitalizeFirstLetter(tractor.linea)}
                      </p>
                    )}
                    {tractor.traccion && (
                      <p>
                        <FontAwesomeIcon icon={faCog} className="iconito" />{" "}
                        {capitalizeFirstLetter(tractor.traccion)}
                      </p>
                    )}
                  </div>
                  <Link
                    to={getTractorRoute(tractor.seccion, tractor.id)}
                    className="btn btn-info"
                  >
                    <FontAwesomeIcon icon={faSearch} /> Ver + INFO
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginación */}
        <nav className="d-flex justify-content-center mt-4">
          <ul className="pagination">
            <li className={`page-item ${paginaActual === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => cambiarPagina(paginaActual - 1)}
                style={{
                  color: "#BB6C22",
                  outline: "none",
                }}
                onFocus={(e) => e.target.blur()}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </li>

            <li className="page-item active">
              <button
                className="page-link numero"
                style={{
                  cursor: "default",
                  backgroundColor: "rgb(70, 133, 2)",
                  borderColor: "transparent",
                  color: "white",
                  outline: "none",
                }}
                onFocus={(e) => e.target.blur()}
              >
                {paginaActual}
              </button>
            </li>

            <li className={`page-item ${paginaActual === totalPaginas ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => cambiarPagina(paginaActual + 1)}
                style={{
                  color: "#BB6C22",
                  outline: "none",
                }}
                onFocus={(e) => e.target.blur()}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Tractores;
