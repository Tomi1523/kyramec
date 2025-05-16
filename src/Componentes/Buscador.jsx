import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTractores } from '../services/useTractores';
import { useImplementos } from '../services/UseImplementos';
import { useRepuestos } from '../services/UseRepuestos';
import Menu from './Menu';
import Footer2 from './Footer2';

const Buscador = () => {
  const navigate = useNavigate();
  const { tractores, loading: loadingTractores, error: errorTractores } = useTractores();
  const { repuestos, loading: loadingRepuestos, error: errorRepuestos } = useRepuestos();
  const { implementos, loading: loadingImplementos, error: errorImplementos } = useImplementos();
  const [busqueda, setBusqueda] = useState('');

  if (loadingTractores || loadingRepuestos || loadingImplementos) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-success" role="status"></div>
      </div>
    );
  }

  if (errorTractores || errorRepuestos || errorImplementos) {
    return <p className="text-danger text-center mt-4">Error al cargar los datos.</p>;
  }

  const handleItemClick = (id, type) => {
    navigate(`/${type}/${id}`);
  };

  const filtrarPorTitulo = (items) => {
    return items.filter(item =>
      item.title.toLowerCase().includes(busqueda.toLowerCase())
    );
  };

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

  const tractoresFiltrados = filtrarPorTitulo(tractores);
  const repuestosFiltrados = filtrarPorTitulo(repuestos);
  const implementosFiltrados = filtrarPorTitulo(implementos);

  const noHayCoincidencias = tractoresFiltrados.length === 0 && repuestosFiltrados.length === 0 && implementosFiltrados.length === 0;

  return (
  <>
    <Menu />
    <div className="container mt-4">
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {busqueda && (
        <>
          {noHayCoincidencias ? (
            <p className="text-center text-muted">No se encontraron resultados.</p>
          ) : (
            <>
              {tractoresFiltrados.length > 0 && (
                <>
                  <h2>Tractores</h2>
                  <div className="row">
                    {tractoresFiltrados.map((tractor) => (
                      <div key={tractor.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                        <div
                          className="card h-100 shadow-sm pointer"
                          onClick={() => handleItemClick(tractor.id, 'equipos/tractores')}
                        >
                          {tractor.imageUrls && (
                            <img
                              src={tractor.imageUrls[0]}
                              alt={tractor.title}
                              className="card-img-top img-responsive-height"
                            />
                          )}
                          <div className="card-body d-flex flex-column justify-content-center mt-4">
                            <h5 className="card-title text-center" style={{ color: "#383838" }}>
                              {highlightText(tractor.title, busqueda)}
                            </h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {repuestosFiltrados.length > 0 && (
                <>
                  <h2>Repuestos</h2>
                  <div className="row">
                    {repuestosFiltrados.map((repuesto) => (
                      <div key={repuesto.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                        <div
                          className="card h-100 shadow-sm pointer"
                          onClick={() => handleItemClick(repuesto.id, 'repuestos')}
                        >
                          {repuesto.imageUrls && (
                            <img
                              src={repuesto.imageUrls[0]}
                              alt={repuesto.title}
                              className="card-img-top img-responsive-height"
                            />
                          )}
                          <div className="card-body d-flex flex-column justify-content-center mt-4">
                            <h5 className="card-title text-center" style={{ color: "#383838" }}>
                              {highlightText(repuesto.title, busqueda)}
                            </h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {implementosFiltrados.length > 0 && (
                <>
                  <h2>Implementos</h2>
                  <div className="row">
                    {implementosFiltrados.map((implemento) => (
                      <div key={implemento.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                        <div
                          className="card h-100 shadow-sm pointer"
                          onClick={() => handleItemClick(implemento.id, 'implementos')}
                        >
                          {implemento.imageUrls && (
                            <img
                              src={implemento.imageUrls[0]}
                              alt={implemento.title}
                              className="card-img-top img-responsive-height"
                            />
                          )}
                          <div className="card-body d-flex flex-column justify-content-center mt-4">
                            <h5 className="card-title text-center" style={{ color: "#383838" }}>
                              {highlightText(implemento.title, busqueda)}
                            </h5>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
    <Footer2 />
  </>
);

};

export default Buscador;
