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
import WEB10 from "../assets/WEB10.png";
import WEB11 from "../assets/WEB11.png";
import "../estilos/Nosotros.css";

const images = [WEB10,WEB11,WEB1, WEB2, WEB3, WEB4, WEB5, WEB6, WEB7, WEB8, WEB9];

const Nosotros = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        
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

       
        <div className="col-md-6">
          <div style={{ maxWidth: "500px" }}>
            <h2 className="fw-bold mb-3">
              Kyramec: Seguridad y confianza para el agro
            </h2>
            <p className="parrafo-justificado">
              Fundada en 2018, Kyramec se ha consolidado como una empresa confiable y comprometida con el sector agrícola,
              especializada en la venta de tractores y diversos implementos para el agro.
            </p>
            <p className="parrafo-justificado">
              En tan solo unos años, ha superado las 1,750 ventas cerradas y entregadas, demostrando su eficacia,
              compromiso con el cliente y profundo conocimiento del campo.
            </p>
            <p className="parrafo-justificado">
              Con un enfoque en la calidad, la tecnología y el servicio postventa, se posiciona como un aliado estratégico
              para agricultores y empresas del rubro, brindando soluciones modernas que impulsan la productividad agrícola.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
