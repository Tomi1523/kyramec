import React, { useState } from 'react';
import Menu from './Menu';
import Footer2 from './Footer2';
import { useTractores } from '../services/useTractores';
import { useNavigate } from 'react-router-dom';

const MaquinariasViales = () => {
  const { tractores, loading } = useTractores();
    const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();
 
  const tractoresFiltrados = tractores.filter(
    (tractor) => tractor.categoria === "maquinaria-viales"
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

   if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-success" role="status"></div>
      </div>
    );
  }
  return (
    <>
      <Menu />
      <div className="container mt-4">
        
        <div className="row">
           <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="Buscar maquinarias por título..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
          {tractoresFiltrados.map((tractor) => (
            <div key={tractor.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className="card h-100 shadow-sm pointer">
                <img
                  src={tractor.imageUrls[0]}
                  alt={tractor.title}
                  className="card-img-top img-responsive-height"
                  onClick={() => navigate(`/equipos/maquinarias-viales/${tractor.id}`)}
                />
                <div className="card-body d-flex flex-column justify-content-center mt-4"> 
                  <h5 className="card-title text-center" style={{ color: "#383838" }}>
                    
                    {highlightText(tractor.title, busqueda)}
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

export default MaquinariasViales;
