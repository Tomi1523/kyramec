import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { faCog, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Menu from './Menu';
import Footer2 from './Footer2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useImplemento } from '../services/UseImplementos';

const ImplementoId = () => {
  const { id } = useParams();
  const { implemento, loading, error } = useImplemento(id);
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const siguienteImagen = () => {
    setIndex((prevIndex) => (prevIndex + 1) % implemento.imageUrls.length);
  };

  const anteriorImagen = () => {
    setIndex((prevIndex) => (prevIndex - 1 + implemento.imageUrls.length) % implemento.imageUrls.length);
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-success" role="status"></div>
      </div>
    );
  }

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Menu />
      <div className="container mt-4 bg-light rounded shadow">
        <div className="row">
          <div className="col-md-6 d-flex align-items-start">
            {/* Miniaturas a la izquierda */}
            <div className="d-flex flex-column align-items-center align-self-start me-3">
              {implemento.imageUrls.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Miniatura ${i}`}
                  onClick={() => setIndex(i)}
                  className={`img-thumbnail mb-2 ${index === i ? "border border-success" : ""}`}
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
                src={implemento.imageUrls[index]}
                alt={implemento.title}
                style={{ width: '100%',marginBottom: '20px', cursor: 'pointer' }}
                onClick={handleImageClick}
              />
              <button
                onClick={anteriorImagen}
                className="btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-3"
                style={{ opacity: 0.7 }}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                onClick={siguienteImagen}
                className="btn btn-dark position-absolute top-50 end-0 translate-middle-y me-3"
                style={{ opacity: 0.7 }}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>

          <div className="col-md-6 d-flex flex-column align-self-start">
            <div className="p-4">
              <h2 className="mb-3">Detalles Técnicos</h2>
              <h4 className="fw-bold mb-3">{implemento.title}</h4>

              {/* Campos adicionales */}
            {implemento.extraFields && implemento.extraFields.filter(f => f && f.trim() !== "").length > 0 && (
  <div className="mb-4">
    <h6 className="text-muted mb-2">Características:</h6>
    <ul className="list-unstyled ps-2">
      {implemento.extraFields
        .filter(f => f && f.trim() !== "") // solo los que no estén vacíos
        .map((field, index) => (
          <li key={index} className="mb-1 d-flex align-items-center">
            <FontAwesomeIcon icon={faCog} className="iconito me-2" />
            <span>{field}</span>
          </li>
        ))}
    </ul>
  </div>
)}


              {/* Descripción */}
              {implemento.text && (
                <div>
                  <h6 className="text-muted border-bottom pb-2 mb-2">Descripción</h6>
                  <p className="text-secondary">{implemento.text}</p>
                </div>
              )}
            
            </div>

             {implemento.pdfUrl && (
            <div className="d-flex flex-column align-items-center justify-content-center mb-5">
              <h3>Ficha técnica</h3>
              <a
                href={implemento.pdfUrl}
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
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={implemento.imageUrls[index]} alt="Imagen ampliada" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                anteriorImagen();
              }}
              className="modal-nav-button left"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
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
    </>
  );
};

export default ImplementoId;
