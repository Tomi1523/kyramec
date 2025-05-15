import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTractorDetails } from "../services/useTractores";
import Menu from "./Menu";
import "../estilos/DetallesTractor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Footer2 from "./Footer2";

const DetallesTractor = () => {
  const { id } = useParams();
  const { tractor, loading, error } = useTractorDetails(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [index, setIndex] = useState(0);
console.log(tractor)
  const siguienteImagen = () => {
    setIndex((prevIndex) => (prevIndex + 1) % tractor.imageUrls.length);
  };

  const anteriorImagen = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex - 1 + tractor.imageUrls.length) % tractor.imageUrls.length
    );
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Menu />
      <div className="container mt-4 mb-4">
        <div className="p-4 bg-light rounded shadow">
          <div className="row align-items-center">
            {/* Contenedor imagen + miniaturas */}
            <div className="col-md-8 d-flex align-items-center">
              {/* Miniaturas a la izquierda, en columna pequeña */}
              <div className="d-flex flex-column align-items-center align-self-start me-3">
                {tractor.imageUrls.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Miniatura ${i}`}
                    onClick={() => setIndex(i)}
                    className={`img-thumbnail mb-2 ${
                      index === i ? "border border-success" : ""
                    }`}
                    style={{
                      width: "70px",
                      height: "50px",
                      objectFit: "cover",
                      cursor: "pointer",
                      transition: "border 0.3s",
                    }}
                  />
                ))}
              </div>

              {/* Imagen principal */}
              <div className="position-relative">
                <img
                  src={tractor.imageUrls[index]}
                  alt="Imagen tractor"
                  className="img-fluid rounded shadow"
                  style={{
                    width: "600px",
                    height: "470px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                  onClick={handleImageClick}
                />

                {/* Botón Anterior */}
                <button
                  onClick={anteriorImagen}
                  className="btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-2"
                  style={{ opacity: 0.7 }}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>

                {/* Botón Siguiente */}
                <button
                  onClick={siguienteImagen}
                  className="btn btn-dark position-absolute top-50 end-0 translate-middle-y me-2"
                  style={{ opacity: 0.7 }}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>

            {/* Información del producto */}
            <div className="col-md-4 p-4 border rounded bg-white mt-4 mt-md-0">
              {tractor.condicion &&
                tractor.title &&
                tractor.precioIVA?.moneda &&
                tractor.precioIVA?.valor && (
                  <>
                    <p className="text-muted mb-2">
                      {capitalizeFirstLetter(tractor.condicion)}
                    </p>
                    <h3 className="mb-2 fw-bold tractor">{tractor.title}</h3>
                    <h1 className="mb-4">
                      {tractor.precioIVA.moneda} ${tractor.precioIVA.valor}
                    </h1>
                    <hr />
                  </>
                )}

           

      
  <h5 className="mt-2">Medio de pago y financiación</h5>
  <>
  {/* Comentado: Entrega + Financiación */}
  {/* {tractor.condicionesFinanciacion?.entregaFinanciacion?.checked && (
    <p className="mb-1 contado">{tractor.condicionesFinanciacion.entregaFinanciacion.valor}% de entrega + financiación</p>
  )} */}

  {tractor.condicionesFinanciacion?.aceptaCanje && (
    <p className="mb-1 contado">Acepta Canje</p>
  )}

  {tractor.condicionesFinanciacion?.aConvenir && (
    <p className="mb-1 contado">A Convenir</p>
  )}

  {/* Comentado: Cheques */}
  {/* {tractor.condicionesFinanciacion?.cheques?.checked && (
    <p className="mb-1 contado">Cheques: {tractor.condicionesFinanciacion.cheques.valor}</p>
  )} */}

  {tractor.condicionesFinanciacion?.cuotas?.checked && (
    <p className="mb-1 contado">Hasta {tractor.condicionesFinanciacion.cuotas.valor} cuotas</p>
  )}

  {tractor.condicionesFinanciacion?.financiacionFabrica && (
    <p className="mb-1 contado">Financiación de Fábrica</p>
  )}

  {/* Comentado: Financiado */}
  {/* {tractor.condicionesFinanciacion?.financiado?.checked && (
    <p className="mb-1 contado">Financiado: {tractor.condicionesFinanciacion.financiado.valor}</p>
  )} */}

  {/* Comentado: Tasa en Dólares */}
  {/* {tractor.condicionesFinanciacion?.tasaDolares?.checked && (
    <p className="mb-1 contado">Tasa en Dólares: {tractor.condicionesFinanciacion.tasaDolares.valor}</p>
  )} */}

  {/* Comentado: Tasa en Pesos */}
  {/* {tractor.condicionesFinanciacion?.tasaPesos?.checked && (
    <p className="mb-1 contado">Tasa en Pesos: {tractor.condicionesFinanciacion.tasaPesos.valor}</p>
  )} */}
</>

  <hr />






<p className="text-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{cursor:"pointer"}}>
  Ver todos los medios de pago
</p>


<div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
 <div className="modal-dialog modal-dialog-centered modal-lg-custom">

    <div className="modal-content">
    <div className="modal-header border-0 d-flex justify-content-end w-100">
  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
</div>


      <div className="modal-body w-100" >
        <h5 className="fw-bold mb-1" >Condiciones comerciales</h5>
        <p className="texto-modal">Conocé todas las condiciones comerciales y medios de pago disponibles</p>
        <h6 className="fw-bold mt-1">Medios de pago</h6>
        <p className="texto-modal">¡Elegí la forma de pago más conveniente para cerrar tu negocio!</p>
          
{tractor.condicionesFinanciacion?.entregaFinanciacion?.checked && (
    <p className="mb-1 contado">{tractor.condicionesFinanciacion.entregaFinanciacion.valor}% de entrega + financiación</p>
  )}
  {tractor.condicionesFinanciacion?.aceptaCanje && (
    <p className="mb-1 contado">Acepta Canje</p>
  )}
  {tractor.condicionesFinanciacion?.aConvenir && (
    <p className="mb-1 contado">A Convenir</p>
  )}
  {tractor.condicionesFinanciacion?.cheques?.checked && (
    <p className="mb-1 contado">Hasta {tractor.condicionesFinanciacion.cheques.valor} cheques</p>
  )}
  {tractor.condicionesFinanciacion?.cuotas?.checked && (
    <p className="mb-1 contado">Hasta {tractor.condicionesFinanciacion.cuotas.valor} cuotas</p>
  )}
  {tractor.condicionesFinanciacion?.financiacionFabrica && (
    <p className="mb-1 contado">Financiación de Fábrica</p>
  )}
  {tractor.condicionesFinanciacion?.financiado?.checked && (
    <p className="mb-1 contado">Financialo en {tractor.condicionesFinanciacion.financiado.valor} años</p>
  )}
  {tractor.condicionesFinanciacion?.tasaDolares?.checked && (
    <p className="mb-1 contado">Tasa {tractor.condicionesFinanciacion.tasaDolares.valor}% en dólares</p>
  )}
  {tractor.condicionesFinanciacion?.tasaPesos?.checked && (
    <p className="mb-1 contado">Tasa {tractor.condicionesFinanciacion.tasaPesos.valor}% en pesos</p>
  )}
      </div>
      
      
    </div>
  </div>
</div>




              <a
                href={`https://wa.me/5493434694909?text=${encodeURIComponent(
                  `Hola, vengo desde la página de Kyramec y me gustaría consultar sobre el tractor "${tractor.title}". ¿Podrías brindarme más información? ¡Muchas gracias!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg w-100"
              >
                Consultar
              </a>

              {tractor.localidad && (
                <p className="mb-1 fw-bold">
                  <hr />
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="me-2"
                    style={{ color: "#1b5e20" }}
                  />
                  {capitalizeFirstLetter(tractor.localidad)}
                </p>
              )}
            </div>
          </div>



          <div className="container mb-5 mt-5">
            <div className="row">
              <div className="col-md-12">
                <h5 className="border-bottom pb-2 mb-4 text-start">
                  Detalles Técnicos
                </h5>

                <div className="d-flex flex-column">
                  {tractor.marca && (
                    <div className="d-flex custom-border">
                      <div className="bg-white p-2 col-5 d-flex align-items-center">
                        Marca
                      </div>
                      <div className="p-2 col-7 d-flex custom-class">
                        {capitalizeFirstLetter(tractor.marca)}
                      </div>
                    </div>
                  )}

                  {tractor.modelo && (
                    <div className="d-flex custom-border">
                      <div className="bg-white p-2 col-5 d-flex align-items-center">
                        Modelo
                      </div>
                      <div className="p-2 col-7 d-flex custom-class">
                        {capitalizeFirstLetter(tractor.modelo)}
                      </div>
                    </div>
                  )}

                  {tractor.anoFabricacion && (
                    <div className="d-flex custom-border">
                      <div className="bg-white p-2 col-5 d-flex align-items-center">
                        Año de Fabricación
                      </div>
                      <div className="p-2 col-7 d-flex custom-class">
                        {capitalizeFirstLetter(tractor.anoFabricacion)}
                      </div>
                    </div>
                  )}

                  {tractor.linea && (
                    <div className="d-flex custom-border">
                      <div className="bg-white p-2 col-5 d-flex align-items-center">
                        Línea
                      </div>
                      <div className="p-2 col-7 d-flex custom-class">
                        {capitalizeFirstLetter(tractor.linea)}
                      </div>
                    </div>
                  )}

                  {tractor.potencia && (
                    <div className="d-flex custom-border">
                      <div className="bg-white p-2 col-5 d-flex align-items-center">
                        Potencia (HP)
                      </div>
                      <div className="p-2 col-7 d-flex custom-class">
                        {capitalizeFirstLetter(tractor.potencia)}
                      </div>
                    </div>
                  )}

                  {tractor.traccion && (
                    <div className="d-flex custom-border">
                      <div className="bg-white p-2 col-5 d-flex align-items-center">
                        Tracción
                      </div>
                      <div className="p-2 col-7 d-flex custom-class">
                        {capitalizeFirstLetter(tractor.traccion)}
                      </div>
                    </div>
                  )}

                  {tractor.direccion && (
                    <div className="d-flex custom-border">
                      <div className="bg-white p-2 col-5 d-flex align-items-center">
                        Dirección
                      </div>
                      <div className="p-2 col-7 d-flex custom-class">
                        {capitalizeFirstLetter(tractor.direccion)}
                      </div>
                    </div>
                  )}

                  {tractor.tipoMotor && (
                    <div className="d-flex custom-border">
                      <div className="bg-white p-2 col-5 d-flex align-items-center">
                        Tipo de Motor
                      </div>
                      <div className="p-2 col-7 d-flex custom-class">
                        {capitalizeFirstLetter(tractor.tipoMotor)}
                      </div>
                    </div>
                  )}

                  {tractor.levanteTresPuntos && (
                    <div className="d-flex custom-border">
                      <div className="bg-white p-2 col-5 d-flex align-items-center">
                        Levante 3 puntos
                      </div>
                      <div className="p-2 col-7 d-flex custom-class">
                        {capitalizeFirstLetter(tractor.levanteTresPuntos)}
                      </div>
                    </div>
                  )}

                  {tractor.cabina && (
                    <div className="d-flex custom-border">
                      <div className="bg-white p-2 col-5 d-flex align-items-center">
                        Cabina
                      </div>
                      <div className="p-2 col-7 d-flex custom-class">
                        {capitalizeFirstLetter(tractor.cabina)}
                      </div>
                    </div>
                  )}

                  {tractor.varianteTraccion && (
                    <div className="d-flex custom-border">
                      <div className="bg-white p-2 col-5 d-flex align-items-center">
                        Variante de Tracción
                      </div>
                      <div className="p-2 col-7 d-flex custom-class">
                        {capitalizeFirstLetter(tractor.varianteTraccion)}
                      </div>
                    </div>
                  )}

                  {tractor.tipoRodado && (
                    <div className="d-flex custom-border">
                      <div className="bg-white p-2 col-5 d-flex align-items-center">
                        Tipo de Rodado
                      </div>
                      <div className="p-2 col-7 d-flex custom-class">
                        {capitalizeFirstLetter(tractor.tipoRodado)}
                      </div>
                    </div>
                  )}

                  {tractor.concesionario && (
                    <div className="d-flex custom-border">
                      <div className="bg-white p-2 col-5 d-flex align-items-center">
                        Concesionario
                      </div>
                      <div className="p-2 col-7 d-flex custom-class">
                        {capitalizeFirstLetter(tractor.concesionario)}
                      </div>
                    </div>
                  )}

                  

                  {tractor.entrega && (
                    <div className="d-flex custom-border">
                      <div className="bg-white p-2 col-5 d-flex align-items-center">
                        Entrega
                      </div>
                      <div className="p-2 col-7 d-flex custom-class">
                        {capitalizeFirstLetter(tractor.entrega)}
                      </div>
                    </div>
                  )}

                  {tractor.finalidad && (
                    <div className="d-flex custom-border">
                      <div className="bg-white p-2 col-5 d-flex align-items-center">
                        Tipo de operación
                      </div>
                      <div className="p-2 col-7 d-flex custom-class">
                        {capitalizeFirstLetter(tractor.finalidad)}
                      </div>
                    </div>
                  )}

                  {tractor.condicion && (
                    <div className="d-flex custom-border">
                      <div className="bg-white p-2 col-5 d-flex align-items-center">
                        Condición
                      </div>
                      <div className="p-2 col-7 d-flex custom-class">
                        {capitalizeFirstLetter(tractor.condicion)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="container mb-5 mt-5">
            <div className="row">
              {tractor.text && (
                <div className="col-md-12">
                  <h5 className="border-bottom pb-2 mb-4 text-start">
                    Descripción
                  </h5>
                  <p>{tractor.text}</p>
                </div>
              )}
            </div>
          </div>
          {tractor.pdfUrl && (
            <div className="d-flex flex-column align-items-center justify-content-center mb-5">
              <h3>Ficha técnica</h3>
              <a
                href={tractor.pdfUrl}
                className="btn btn-primary px-5 mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver PDF
              </a>
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={tractor.imageUrls[index]} alt="Imagen ampliada" />
            {/* Botón Anterior en el modal */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                anteriorImagen();
              }}
              className="modal-nav-button left"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            {/* Botón Siguiente en el modal */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                siguienteImagen();
              }}
              className="modal-nav-button right"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      )}
      <Footer2 />
    </div>
  );
};

export default DetallesTractor;
