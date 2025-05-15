import React, { useEffect, useState } from "react";
import WEB1 from "../assets/WEB1.png";
import WEB2 from "../assets/WEB2.png";
import WEB3 from "../assets/WEB3.png";
import WEB4 from "../assets/WEB4.png";
import WEB5 from "../assets/WEB5.png";
import WEB6 from "../assets/WEB6.png";
import WEB7 from "../assets/WEB7.png";
import WEB8 from "../assets/WEB8.png";
import WEB9 from "../assets/WEB9.png";
import "../estilos/ServYfina.css";
import Menu from "./Menu";
import Footer2 from "./Footer2";

const images = [WEB1, WEB2, WEB3, WEB4, WEB5, WEB6, WEB7, WEB8, WEB9];

const ServiciosYFinanaciacion = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Menu />
      
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Carrusel personalizado */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="fade-carousel">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Imagen ${index}`}
                  className={`fade-image ${index === currentIndex ? "active" : ""}`}
                />
              ))}
            </div>
          </div>

          {/* Texto */}
          <div className="col-md-6">
            <div style={{ maxWidth: "500px" }}>
              <h2 className="fw-bold mb-3">Financiamiento a tu medida</h2>
              <p className="text-servicios">
                En Kyramec ofrecemos el mejor financiamiento del mercado, con
                planes flexibles de hasta 5 años y cuotas semestrales. Pensamos
                en las necesidades del agricultor, facilitando el acceso a
                maquinaria e implementos sin afectar su flujo de trabajo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default ServiciosYFinanaciacion;
