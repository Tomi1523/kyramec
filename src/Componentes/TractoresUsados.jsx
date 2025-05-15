import React from "react";
import { useNavigate } from "react-router-dom";
import { useTractores } from "../services/useTractores";
import Footer2 from "./Footer2";
import Menu from './Menu';

const TractoresUsados = () => {
  const { tractores, loading, error } = useTractores();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-success" role="status"></div>
      </div>
    );
  }

  if (error)
    return <p className="text-danger text-center mt-4">Error: {error}</p>;

  const tractoresUsados = tractores.filter(tractor => tractor.subcategoria === "usado");

  const handleTractorClick = (tractorId) => {
    navigate(`/equipos/tractores/${tractorId}`);
  };

  return (
    <>
      <Menu />
      <div className="container mt-4">
        <div className="row">
          {tractoresUsados.map((tractor) => (
            <div key={tractor.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div
                className="card h-100 shadow-sm pointer"
                onClick={() => handleTractorClick(tractor.id)}
              >
                <img
                  src={tractor.imageUrls[0]}
                  alt={tractor.title}
                  className="card-img-top img-responsive-height"
                />
                 <div className="card-body d-flex flex-column justify-content-center mt-4">
                  <h5 className="card-title text-center" style={{ color: "#383838" }}>
                    {tractor.title}
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

export default TractoresUsados;
