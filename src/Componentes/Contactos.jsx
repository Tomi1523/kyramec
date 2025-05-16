import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Mapa from "./Mapa";
import "../estilos/Contactos.css";
import { useTractores } from "../services/useTractores";

const Contactos = () => {
  const { loading } = useTractores();
  const form = useRef();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const formEl = form.current;

    // Validación de nombre y apellido
    if (!formEl.user_name.value.trim()) {
      newErrors.user_name = "Este campo es obligatorio";
    }

    // Validación de email
    if (!formEl.user_email.value.trim()) {
      newErrors.user_email = "Este campo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formEl.user_email.value)) {
      newErrors.user_email = "Ingrese un email válido";
    }

    // Validación de teléfono
    if (!formEl.user_phone.value.trim()) {
      newErrors.user_phone = "Este campo es obligatorio";
    }

    // Validación de equipo
    if (!formEl.user_equipment.value.trim()) {
      newErrors.user_equipment = "Seleccione una opción";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm("service_n7uvqbf", "template_dhvyaqb", form.current, {
        publicKey: "Yd4e9tJ5jog2eHOZ9",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Mensaje enviado correctamente.");
          form.current.reset();
          setErrors({});
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
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
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <Mapa />
        </div>

        <div className="col-md-6">
          <form ref={form} onSubmit={sendEmail} noValidate>
            <div className="mb-4 mt-3 mt-md-0">
              <label>Nombre y apellido</label>
              <input
                type="text"
                name="user_name"
                className={`form-control ${
                  errors.user_name ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.user_name}</div>
            </div>

            <div className="mb-4">
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                className={`form-control ${
                  errors.user_email ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.user_email}</div>
            </div>

            <div className="mb-4">
              <label>Teléfono</label>
              <input
                type="number"
                name="user_phone"
                className={`form-control ${
                  errors.user_phone ? "is-invalid" : ""
                }`}
              />
              <div className="invalid-feedback">{errors.user_phone}</div>
            </div>

            <div className="mb-4">
              <label>
                Asesoramiento y presupuesto sobre los siguientes equipos
              </label>
              <select
                name="user_equipment"
                className={`form-select ${
                  errors.user_equipment ? "is-invalid" : ""
                }`}
              >
                <option value="">Seleccione una opción</option>
                <option value="45 a 70 hp">45 a 70 hp</option>
                <option value="30 a 70 hp"> 30 a 70 hp</option>
                <option value="45 a 90 hp"> 45 a 90 hp</option>
                <option value="100 a 140 hp"> 100 a 140 hp</option>
                <option value="160 a 260 hp"> 160 a 260 hp</option>
                <option value="Servicio Post Venta">Servicio Post Venta</option>
                <option value="Repuestos">Repuestos</option>
                <option value="Otras consultas">Otras consultas</option>
              </select>
              <div className="invalid-feedback">{errors.user_equipment}</div>
            </div>

            <div className="mb-4">
              <label>Consulta o Comentario</label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
              ></textarea>
              {/* Este campo no se valida, por eso no tiene feedback */}
            </div>

            <button type="submit" className="btn btn-primary ">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
