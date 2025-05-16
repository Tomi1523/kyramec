// WidgetWhatsapp.jsx
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const WidgetContacto = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    tipo: "Ventas",
  });

  const [hover, setHover] = useState(false);

  const baseColor = "#25D366";
  const hoverColor = "#1ebe55";

  const toggleForm = () => setVisible(!visible);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const numero =
      formData.tipo === "Atención al Cliente"
       ? "5493437555985"
      : "5493434694909";

    const mensaje = `Hola, mi nombre es ${formData.nombre}. Me comunico por el área de ${formData.tipo} desde la página de Kyramec.`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");

    setVisible(false);
    setFormData({ nombre: "", telefono: "", tipo: "Ventas" });
  };

  return (
    <div>
      {/* Botón flotante */}
      <button
        className="btn position-fixed bottom-0 start-0 m-4 rounded-circle"
        style={{
          width: "60px",
          height: "60px",
          backgroundColor: "#25D366",
          color: "white",
          zIndex: 1000,
          fontSize: "24px",
          boxShadow: "none",
        }}
        onClick={toggleForm}
      >
        <i className="fab fa-whatsapp"></i>
      </button>

      {/* Formulario */}
      {visible && (
        <div
          className="card position-fixed bottom-0 start-0 m-4 shadow"
          style={{
            width: "320px",
            zIndex: 2000,
            boxShadow: "none",
            border: "none",
          }}
        >
          {/* Header */}
          <div
            className="d-flex justify-content-between align-items-center px-3 py-2"
            style={{
              backgroundColor: "#25D366",
              borderTopLeftRadius: "0.25rem",
              borderTopRightRadius: "0.25rem",
            }}
          >
            <h5 className="mt-1 text-white">Contacto</h5>
            <button
              className="btn btn-sm text-white mt-1"
              onClick={toggleForm}
              style={{
                fontSize: "34px",
                background: "transparent",
                border: "none",
              }}
            >
              &times;
            </button>
          </div>

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="p-3 bg-white"
            style={{ color: "#555" }}
          >
            <p style={{ fontSize: "14px", marginBottom: "15px" }}>
              Te comunicaremos con uno de nuestros asesores
            </p>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#333" }}>
                Nombre
              </label>
              <input
                type="text"
                className="form-control inputwidg"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                 
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#333" }}>
                Teléfono
              </label>
              <input
                type="tel"
                className="form-control inputwidg"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" style={{ color: "#333" }}>
                Área
              </label>
              <select
                className="form-select inputwidg"
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                 
              >
                <option value="Ventas">Ventas</option>
                <option value="Atención al Cliente">Atención al Cliente</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn w-100 text-white"
              style={{
                backgroundColor: hover ? hoverColor : baseColor,
                border: `1px solid ${hover ? hoverColor : baseColor}`,
                color: "white",
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WidgetContacto;
