import React from "react";
import "../estilos/Footer.css";
import { Link } from "react-router-dom";
const Footer2 = () => {
  return (
    <div>
      <div
        className="row text-start mt-4 text-white"
        style={{ backgroundColor: "#242424" }}
      >
        <div className="col-md-4 borde-vertical-blanco mt-4 mb-5">
          <p class="kyramec-text">
           Kyramec, representante oficial de American Agro y  American Vial Group
          </p>

          <button
            className="btn btn-success text-white btn-kyramec d-block mx-auto"
            onClick={() =>
              window.open(
                "https://www.instagram.com/kyramec_maquinarias",
                "_blank"
              )
            }
          >
            <i className="fab fa-instagram"></i> /kyramec_maquinarias
          </button>

          <button
            className="btn btn-success text-white btn-kyramec d-block mx-auto mt-3"
            onClick={() =>
              window.open(
                "https://www.facebook.com/KyramecMaquinarias",
                "_blank"
              )
            }
          >
            <i className="fab fa-facebook"></i> /kyramec
          </button>
        </div>

        <div className="col-md-4 borde-vertical-blanco mt-4 mb-5 text-center text-md-start">
  <h3 className="ubicacion ">UBICACIÓN</h3>
  <ul className="mt-4 parrafos-juntos">
    <li>RN12 Km 601, La Paz, Entre Ríos - ARGENTINA</li>

    {[
      '543437554243',
      '543437404556',
      '543437400103',
      '543437510000',
      '543437520085'
    ].map((number, index) => (
      <li key={index}>
        <a
          href={`https://wa.me/${number}?text=${encodeURIComponent('Hola, vengo desde la página de Kyramec')}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          +{number.slice(0, 2)} {number.slice(2, 6)} {number.slice(6, 9)}-{number.slice(9)}
        </a>
      </li>
    ))}
  </ul>
</div>


        <div className="col-md-4 mt-4 mb-5 text-center text-md-start d-none d-md-block">
          <ul className="list-items">
            <li >
              <Link to="/" className="nav-footer">
                Inicio
              </Link>
            </li>
            <li >
              <Link to="/nosotros" className="nav-footer">
                Nosotros
              </Link>
            </li>
            <li >
              <Link to="/equipos" className="nav-footer">
                Equipos
              </Link>
            </li>
            <li >
              <Link to="/implementos" className="nav-footer">
                Implementos
              </Link>
            </li>
            
            <li >
              <Link to="/servicios-y-financiacion" className="nav-footer">
                Servicios y Financiación
              </Link>
            </li>
            <li >
              <Link to="/contactos" className="nav-footer">
                Contactos
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center py-4" style={{ backgroundColor: "black" }}>
        <p className="copyright">
          Copyright © 2025 Kyramec - Todos los derechos reservados
        </p>
      </div>
    </div>
  );
};

export default Footer2;
