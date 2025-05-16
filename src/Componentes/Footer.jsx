import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import comillas from "../assets/comillas.png";

import postventa from "../assets/post-venta.png";
import logochico from "../assets/logo-chico.jpeg";
import imagen1 from "../assets/imagen1.jpeg";
import imagen2 from "../assets/imagen2.jpeg";
import equipos from "../assets/EQUIPOS.png"
import "../estilos/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [visibleImages, setVisibleImages] = useState(3);

  const images = [imagen1, imagen2, imagen1, imagen2, imagen1, imagen2];

  const toggleImages = () => {
    setVisibleImages((prev) => (prev > 3 ? 3 : images.length));
  };

  const showMore = visibleImages === 3;

  return (
    <div>
      {/* Frase destacada */}
      <div className="quote-container">
        <div className="quote-content">
          <img src={comillas} alt="" className="quote-icon" />
          <p className="quote-text">
            TRACTORES CONFORTABLES Y CÓMODOS PARA EXTENSAS JORNADAS DE TRABAJO
          </p>
          <p className="quote-subtext">
            -Diseñados para aquellos que buscan MAYOR RENDIMIENTO con mayor
            simpleza-
          </p>
        </div>
      </div>

      <div className="container mt-4">
        {/* Postventa y mesa */}
        <div className="row">
          <div className="col-md-6">
            <div className="image-container">
              <Link to="/post-venta">
                <img src={postventa} className="img-fluid" alt="postventa" />
                <div className="image-overlay">
                  <i className="fas fa-envelope"></i>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-md-6 mt-1 mt-md-0">
            <div className="image-container">
              <img src={equipos} className="img-fluid" alt="mesa" />
              <Link to="/equipos"> 
              <div className="image-overlay">
              
                <i className="fas fa-tractor"></i>
               
              </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/kyramec_maquinarias"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-dark w-100"
        >
          <div className=" container col-md-12 d-flex mt-5 instagram-hover-area">
            <div className="logo-container position-relative">
              <img
                src={logochico}
                className="img-fluid rounded-circle logochico"
                alt="logo"
              />
              <div className="overlay d-flex justify-content-center align-items-center">
                <i className="fab fa-instagram instagram-icon"></i>
              </div>
            </div>

            <div className="ms-4 mt-3">
              <h3>Kyramec SAS</h3>
              <p className="sub-text mt-2">
                Tenemos la línea más completa de Tractores Agrícolas de Chery By
                LION. Tenemos más de 2000 tractores comercializados.
              </p>
            </div>
          </div>
        </a>

        {/* Imágenes con animación */}
        <div className="row mt-4 gx-2">
          <AnimatePresence>
            {images.slice(0, visibleImages).map((img, index) => (
              <motion.div
                key={index}
                className="col-12 col-md-4 position-relative video-hover mt-3 mt-md-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <a
                  href="https://www.instagram.com/p/DItdFTiPc9v/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={img}
                    className="img-fluid w-100 mt-1"
                    alt={`img-${index}`}
                  />
                  <div className="overlay d-flex justify-content-center align-items-center">
                    <i className="fas fa-play-circle play-icon"></i>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Botones */}
        <div className="d-flex justify-content-center align-items-center mt-2 gap-2">
          <button
            className="btn btn-dark text-white btn-sm"
            onClick={toggleImages}
          >
            {showMore ? "Mostrar más" : "Mostrar menos"}
          </button>
          <a
            href="https://www.instagram.com/kyramec_maquinarias"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success text-white btn-sm"
          >
            <i className="fab fa-instagram me-2"> </i>Seguinos en Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
