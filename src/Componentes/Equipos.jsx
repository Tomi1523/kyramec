import React, { useState } from "react";
import { useTractores } from "../services/useTractores";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import Footer2 from "./Footer2";

const Equipos = () => {
  const { tractores, loading, error } = useTractores();
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const handleClick = (tractor) => {
    if (tractor.categoria === "maquinaria-viales") {
      navigate(`/equipos/maquinarias-viales/${tractor.id}`);
    } else {
      switch (tractor.seccion) {
        case "A":
          navigate(`/equipos/tractores/serie-ra-25-70-hp/${tractor.id}`);
          break;
        case "B":
          navigate(`/equipos/tractores/serie-rd-30-70-hp/${tractor.id}`);
          break;
        case "C":
          navigate(`/equipos/tractores/serie-ra-45-90-hp/${tractor.id}`);
          break;
        case "D":
          navigate(`/equipos/tractores/serie-rc-100-140-hp/${tractor.id}`);
          break;
        case "E":
          navigate(`/equipos/tractores/serie-rs-160-260-hp/${tractor.id}`);
          break;
        default:
          navigate(`/equipos/tractores/${tractor.id}`);
      }
    }
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

  const tractoresFiltrados = tractores.filter((tractor) =>
    tractor.title.toLowerCase().includes(busqueda.toLowerCase())
  );

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
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Buscar equipo por título..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <div className="row">
          {tractoresFiltrados.length > 0 ? (
            tractoresFiltrados.map((tractor) => (
              <div
                key={tractor.id}
                className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4"
                onClick={() => handleClick(tractor)}
              >
                <div className="card h-100 shadow-sm pointer">
                  <img
                    src={tractor.imageUrls[0]}
                    alt={tractor.title}
                    className="card-img-top img-responsive-height"
                  />
                  <div className="card-body d-flex flex-column justify-content-center mt-4">
                    <h5 className="card-title text-center" style={{ color: "#383838" }}>
                      {highlightText(tractor.title, busqueda)}
                    </h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">No se encontraron resultados.</p>
          )}
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Equipos;
