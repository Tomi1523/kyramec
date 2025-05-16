import React, { useEffect, useRef, useState } from "react";
import "../estilos/Menu.css";
import logo from "../assets/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useTractores } from "../services/useTractores";
import WidgetContacto from "./WidgetContacto";

const Menu = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [equiposSubmenuOpen, setEquiposSubmenuOpen] = useState(false);
  const [repuestosSubmenuOpen, setRepuestosSubmenuOpen] = useState(false);
  const [implementosSubmenuOpen, setImplementosSubmenuOpen] = useState(false);

  const toggleEquiposSubmenu = () => {
    setEquiposSubmenuOpen(!equiposSubmenuOpen);
  };

  const toggleRepuestosSubmenu = () => {
    setRepuestosSubmenuOpen(!repuestosSubmenuOpen);
  };

  const toggleImplementosSubmenu = () => {
    setImplementosSubmenuOpen(!implementosSubmenuOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  const navRef = useRef();

  useEffect(() => {
    const navElement = navRef.current;

    if (navElement) {
      const dropdowns = navElement.querySelectorAll(".dropdown-menu.show");
      dropdowns.forEach((dropdown) => dropdown.classList.remove("show"));

      const toggles = navElement.querySelectorAll(".dropdown-toggle.show");
      toggles.forEach((toggle) => toggle.classList.remove("show"));
    }
  }, [location.key]);

  const { tractores, loading, error } = useTractores();

  return (
    <div>
      <div className="h-100 p-3 div-gris"></div>
      <div className="container text-center mt-4">
        <div className="row">
          <div className="col-12 col-sm-6">
            <img src={logo} className="img-fluid mt-2" alt="Logo" />
          </div>

          <div className="d-flex col-6 mt-4 h-25 d-none d-sm-flex">
            <div className="col tel">
              <FontAwesomeIcon icon={faPhone} />
              <span>+54 9 3437 55-4243</span>
             
            </div>
            <a
             href="https://wa.me/5493437554243?text=Hola%2C%20vengo%20desde%20la%20p%C3%A1gina%20Kyramec..."
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none col wsp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>+54 9 3437 55-4243</span>
            </a>

            <div className="col horarios">
              Lun a Vie: 8 a 20hs.{" "}
              <span style={{ marginLeft: "-7px" }}>Sábados: 8 a 12hs.</span>
            </div>
          </div>
        </div>
      </div>

      {/* menu celular */}
      <nav
        className={`navbar navbar-expand-lg navbar-dark d-lg-none full-width-navbar ${
          isSticky ? "fixed-navbar" : ""
        }`}
      >
        <div className="container-fluid">
          <button
            className={`navbar-toggler ${menuOpen ? "open" : ""}`}
            type="button"
            onClick={toggleMenu}
            aria-controls="mobileMenu"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="toggler-line top-line"></span>
            <span className="toggler-line middle-line"></span>
            <span className="toggler-line bottom-line"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="mobileMenu"
          >
            <ul className="navbar-nav w-100 me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-white"
                  onClick={toggleMenu}
                >
                  INICIO
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/nosotros"
                  className="nav-link text-white"
                  onClick={toggleMenu}
                >
                  NOSOTROS
                </Link>
              </li>
              <li className="nav-item position-relative">
                <span
                  className={` no-default-arrow nav-link text-white dropdown-toggle ${
                    equiposSubmenuOpen ? "open" : ""
                  }`}
                  onClick={toggleEquiposSubmenu}
                  style={{ cursor: "pointer", userSelect: "none" }}
                >
                  EQUIPOS{" "}
                  <i
                    className="fas fa-angle-right"
                    style={{ marginLeft: "2px" }}
                  ></i>
                </span>

                <div
                  className={`mobile-submenu ${
                    equiposSubmenuOpen ? "open" : ""
                  }`}
                >
                  <Link
                    to="/equipos"
                    className="nav-link text-white"
                    onClick={() => {
                      toggleEquiposSubmenu();
                      toggleMenu();
                    }}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    Ver Todo En Equipos
                  </Link>
                  <Link
                    to="/equipos/tractores"
                    className="nav-link text-white"
                    onClick={() => {
                      toggleEquiposSubmenu();
                      toggleMenu();
                    }}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    Tractores
                  </Link>
                  <Link
                    to="/equipos/maquinarias-viales"
                    className="nav-link text-white"
                    onClick={() => {
                      toggleEquiposSubmenu();
                      toggleMenu();
                    }}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    Maquinarias Viales
                  </Link>
                  <Link
                    to="/equipos/tolvas"
                    className="nav-link text-white"
                    onClick={() => {
                      toggleEquiposSubmenu();
                      toggleMenu();
                    }}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    Tolvas
                  </Link>
                  <Link
                    to="/equipos/sembradora"
                    className="nav-link text-white"
                    onClick={() => {
                      toggleEquiposSubmenu();
                      toggleMenu();
                    }}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    Sembradora
                  </Link>
                  <Link
                    to="/equipos/pulverizadoras"
                    className="nav-link text-white"
                    onClick={() => {
                      toggleEquiposSubmenu();
                      toggleMenu();
                    }}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    Pulverizadoras
                  </Link>
                  <Link
                    to="/equipos/usados"
                    className="nav-link text-white"
                    onClick={() => {
                      toggleEquiposSubmenu();
                      toggleMenu();
                    }}
                  >
                    Usados
                  </Link>
                </div>
              </li>

              <li className="nav-item position-relative">
                <span
                  className={` no-default-arrow nav-link text-white dropdown-toggle ${
                    implementosSubmenuOpen ? "open" : ""
                  }`}
                  onClick={toggleImplementosSubmenu}
                  style={{ cursor: "pointer", userSelect: "none" }}
                >
                  IMPLEMENTOS{" "}
                  <i
                    className="fas fa-angle-right"
                    style={{ marginLeft: "2px" }}
                  ></i>
                </span>

                <div
                  className={`mobile-submenu ${
                    implementosSubmenuOpen ? "open" : ""
                  }`}
                >
                  <Link
                    to="/implementos"
                    className="nav-link text-white"
                    onClick={() => {
                      toggleImplementosSubmenu();
                      toggleMenu();
                    }}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    Ver Todo En Implementos
                  </Link>
                  <Link
                    to="/implementos/desmalesadora"
                    className="nav-link text-white"
                    onClick={() => {
                      toggleImplementosSubmenu();
                      toggleMenu();
                    }}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    Desmalesadora
                  </Link>
                  <Link
                    to="/implementos/aniveladora"
                    className="nav-link text-white"
                    onClick={() => {
                      toggleImplementosSubmenu();
                      toggleMenu();
                    }}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    Aniveladora
                  </Link>
                  <Link
                    to="/implementos/acoplados"
                    className="nav-link text-white"
                    onClick={() => {
                      toggleImplementosSubmenu();
                      toggleMenu();
                    }}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    Acoplados
                  </Link>
                  <Link
                    to="/implementos/rastras"
                    className="nav-link text-white"
                    onClick={() => {
                      toggleImplementosSubmenu();
                      toggleMenu();
                    }}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    Rastras
                  </Link>
                  <Link
                    to="/implementos/palas-hidraulicas"
                    className="nav-link text-white"
                    onClick={() => {
                      toggleImplementosSubmenu();
                      toggleMenu();
                    }}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    Palas Hidraulicas
                  </Link>
                  <Link
                    to="/implementos/viales"
                    className="nav-link text-white"
                    onClick={() => {
                      toggleImplementosSubmenu();
                      toggleMenu();
                    }}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    Implementos Viales
                  </Link>
                  <Link
                    to="/implementos/varios"
                    className="nav-link text-white"
                    onClick={() => {
                      toggleImplementosSubmenu();
                      toggleMenu();
                    }}
                  >
                    Varios
                  </Link>
                </div>
              </li>

              <li className="nav-item position-relative">
                <span
                  className={` no-default-arrow nav-link text-white dropdown-toggle ${
                    repuestosSubmenuOpen ? "open" : ""
                  }`}
                  onClick={toggleRepuestosSubmenu}
                  style={{ cursor: "pointer", userSelect: "none" }}
                >
                  REPUESTOS{" "}
                  <i
                    className="fas fa-angle-right"
                    style={{ marginLeft: "2px" }}
                  ></i>
                </span>

                <div
                  className={`mobile-submenu ${
                    repuestosSubmenuOpen ? "open" : ""
                  }`}
                >
                  <Link
                    to="/repuestos"
                    className="nav-link text-white"
                    onClick={() => {
                      toggleImplementosSubmenu();
                      toggleMenu();
                    }}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    Ver Repuestos
                  </Link>
                  <div className="nav-link text-white">
                    <a
                      href="https://wa.me/5493437555985?text=Hola%2C%20vengo%20desde%20la%20p%C3%A1gina%20Kyramec..."
                      className="dropdown-item text-white d-flex align-items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
                      <span>+54 9 3437 55-5985</span>
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  to="/servicios-y-financiacion"
                  className="text-white nav-link"
                >
                  SERVICIOS Y FINANCIACIÓN
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contactos"
                  className="text-white nav-link"
                  onClick={() => {
                    toggleMenu();
                  }}
                >
                  CONTACTOS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/buscador" className="text-white nav-link">
                  <i className="fas fa-search"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Menu pc */}
      <nav
        ref={navRef}
        className={`navbar navbar-expand-lg navbar-dark d-none d-lg-block ${
          isSticky ? "fixed-navbar" : ""
        }`}
      >
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-evenly w-100">
            <li className="nav-item">
              <Link to="/" className="text-white nav-link">
                INICIO
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/nosotros" className="text-white nav-link">
                NOSOTROS
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="/equipos"
                className="text-white nav-link dropdown-toggle"
                role="button"
              >
                EQUIPOS
              </Link>

              <ul className="dropdown-menu">
                <li className="dropdown-submenu">
                  <Link
                    to="/equipos/tractores"
                    className="dropdown-item dropdown-toggle text-white d-flex justify-content-between align-items-center no-default-arrow"
                    role="button"
                  >
                    Tractores <i className="fas fa-caret-right ms-auto"></i>
                  </Link>

                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to="/equipos/tractores/serie-ra-25-70-hp"
                        className="dropdown-item dropdown-toggle text-white d-flex align-items-center no-default-arrow"
                        role="button"
                      >
                        25 a 70 hp
                      </Link>
                    </li>
                    <li className="dropdown-submenu position-relative">
                      <Link
                        to="/equipos/tractores/serie-rd-30-70-hp/"
                        className="dropdown-item dropdown-toggle text-white d-flex justify-content-between align-items-center no-default-arrow"
                        role="button"
                      >
                        30 a 70 hp
                      </Link>
                    </li>

                    <li className="dropdown-submenu position-relative">
                      <Link
                        to="/equipos/tractores/serie-ra-45-90-hp/"
                        className="dropdown-item dropdown-toggle text-white d-flex justify-content-between align-items-center no-default-arrow"
                        role="button"
                      >
                        45 a 90 hp
                      </Link>
                    </li>

                    <li className="dropdown-submenu position-relative">
                      <Link
                        to="/equipos/tractores/serie-rc-100-140-hp/"
                        className="dropdown-item dropdown-toggle text-white d-flex justify-content-between align-items-center no-default-arrow"
                        role="button"
                      >
                        100 a 140 hp
                      </Link>
                    </li>
                    <li className="dropdown-submenu">
                      <Link
                        to="/equipos/tractores/serie-rs-160-260-hp/"
                        className="dropdown-item dropdown-toggle text-white d-flex justify-content-between align-items-center no-default-arrow"
                        role="button"
                      >
                        160 a 260 hp
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link
                    to="/equipos/tolvas"
                    className="dropdown-item"
                    role="button"
                  >
                    Tolvas
                  </Link>
                </li>
                <li className="dropdown-submenu">
                  <Link
                    to="/equipos/sembradora"
                    className="dropdown-item"
                    role="button"
                  >
                    Sembradora
                  </Link>
                </li>
                <li className="dropdown-submenu">
                  <Link
                    to="/equipos/pulverizadoras"
                    className="dropdown-item"
                    role="button"
                  >
                    Pulverizadoras
                  </Link>
                </li>
                <li className="dropdown-submenu">
                  <Link
                    to="/equipos/maquinarias-viales"
                    className="dropdown-item"
                    role="button"
                  >
                    Maquinarias Viales
                  </Link>
                </li>

                <li className="dropdown-submenu">
                  <Link
                    to="/equipos/usados"
                    className="dropdown-item"
                    role="button"
                  >
                    Usados
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="/implementos"
                className="text-white nav-link dropdown-toggle"
                role="button"
              >
                IMPLEMENTOS
              </Link>

              <ul className="dropdown-menu">
                <li className="dropdown-submenu">
                  <Link
                    to="/implementos/desmalesadora"
                    className="dropdown-item"
                    role="button"
                  >
                    Desmalesadora
                  </Link>
                </li>
                <li className="dropdown-submenu">
                  <Link
                    to="/implementos/aniveladora"
                    className="dropdown-item"
                    role="button"
                  >
                    Aniveladora
                  </Link>
                </li>
                <li className="dropdown-submenu">
                  <Link
                    to="/implementos/acoplados"
                    className="dropdown-item"
                    role="button"
                  >
                    Acoplados
                  </Link>
                </li>
                <li className="dropdown-submenu">
                  <Link
                    to="/implementos/rastras"
                    className="dropdown-item"
                    role="button"
                  >
                    Rastras
                  </Link>
                </li>

                <li className="dropdown-submenu">
                  <Link
                    to="/implementos/palas-hidraulicas"
                    className="dropdown-item"
                    role="button"
                  >
                    Palas Hidraulicas
                  </Link>
                </li>
                <li className="dropdown-submenu">
                  <Link
                    to="/implementos/viales"
                    className="dropdown-item"
                    role="button"
                  >
                    Implementos Viales
                  </Link>
                </li>
                <li className="dropdown-submenu">
                  <Link
                    to="/implementos/varios"
                    className="dropdown-item"
                    role="button"
                  >
                    Varios
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                to="/repuestos"
                className="text-white nav-link dropdown-toggle"
                role="button"
              >
                REPUESTOS
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <a
                    href="https://wa.me/5493437555985?text=Hola%2C%20vengo%20desde%20la%20p%C3%A1gina%20Kyramec..."
                    className="dropdown-item text-white d-flex align-items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
                    <span>+54 9 3437 55-5985</span>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                to="/servicios-y-financiacion"
                className="text-white nav-link"
              >
                SERVICIOS Y FINANCIACIÓN
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contactos" className="text-white nav-link">
                CONTACTOS
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/buscador" className="text-white nav-link">
                <i className="fas fa-search"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <WidgetContacto />
    </div>
  );
};

export default Menu;
