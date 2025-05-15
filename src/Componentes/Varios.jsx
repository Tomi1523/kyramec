import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';
import Footer2 from './Footer2';
import { useImplementos } from '../services/UseImplementos';

const Varios = () => {
  const { implementos, loading, error } = useImplementos();
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const handleVerDetalle = (id) => {
    navigate(`/implementos/${id}`);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-success" role="status"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-danger text-center mt-4">Error: {error}</p>;
  }

const subcategoriasExcluidas = [
  "pala-hidraulica",
  "rastra",
  "acoplado",
  "niveladora",
  "desmalesadora",
];

const categoriaExcluida = "implementos-viales";

// Filtrar implementos para excluir las subcategorías y la categoría especificada
const implementosFiltrados = implementos.filter(
  (implemento) =>
    !subcategoriasExcluidas.includes(implemento.subcategoria) &&
    implemento.categoria !== categoriaExcluida
);

  const highlightText = (text, highlight) => {
  if (!highlight.trim()) {
    return text;
  }

  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return parts.map((part, index) =>
    part.match(new RegExp(`^${highlight}$`, "i")) ? (
      <span key={index} style={{ backgroundColor: "yellow" }}>
        {part}
      </span>
    ) : (
      part
    )
  );
};

  return (
    <>
      <Menu />
      <div className="container mt-4">
         <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Buscar implemento por título..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
        <div className="row">
          {implementosFiltrados.map((implemento) => (
            <div
              key={implemento.id}
              className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4"
              onClick={() => handleVerDetalle(implemento.id)}
             
            >
              <div className="card h-100 shadow-sm pointer">
                <img
                  src={implemento.imageUrls[0]}
                  alt={implemento.title}
                  className="card-img-top img-responsive-height"
                />
                <div className="card-body d-flex flex-column justify-content-center mt-4">
                  <h5 className="card-title text-center" style={{ color: "#383838" }}>
                   
                   {highlightText(implemento.title, busqueda)}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Varios;
