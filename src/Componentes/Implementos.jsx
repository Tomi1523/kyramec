import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';
import Footer2 from './Footer2';
import { useImplementos } from '../services/UseImplementos';

const Implementos = () => {
  const { implementos, loading, error } = useImplementos();
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

  return (
    <>
      <Menu />
      <div className="container mt-4">
        <div className="row">
          {implementos.map((implemento) => (
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
                    {implemento.title}
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

export default Implementos;
