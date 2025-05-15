import React from "react";
import Menu from "./Menu";
import Footer2 from "./Footer2";
import "../estilos/PostVenta.css";
import comillas from "../assets/comillas.png";
import servicio from "../assets/serviciotecnico.jpg";
import repuesto from "../assets/repuestos.jpg";
const PostVenta = () => {
  return (
    <>
      <Menu />
      <div class=" bg-light mt-4 ">
        <div className="container py-4">
          <div className="d-flex ">
            <img src={comillas} alt="" className="quote-icon  me-3" />
            <div className="texto ">
              <p>
                {" "}
                Nuestros tractores AGRO CHERY son equipos de alta tecnología que
                requieren una atención técnica personalizada, para garantizar un
                sólido respaldo a nuestros clientes.{" "}
              </p>
              <p>
                {" "}
                No dude en contactarse con nosotros al +54 3434 69-4909 o a
                través de nuestro formulario de contacto para que un asesor se
                comunique con usted.{" "}
              </p>
            </div>
          </div>
          <p className="cherry d-block ">-AgroChery -</p>

          <div className="row" style={{ marginTop: "80px" }}>
            <div className="col-12 col-md-7 d-flex justify-content-center align-items-center">
              <div>
                <img src={servicio} className="img-fluid" />
              </div>
            </div>
            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center mt-2 mt-md-0 ">
              <div className="mx-0 mx-md-4">
                <h3 className="serviciotec">SERVICIO TÉCNICO ESPECIALIZADO</h3>
                <p className="text-mu">
                  Contamos con herramientas de última tecnología y con un equipo
                  de profesionales comprometidos para brindar el más calificado
                  soporte técnico. Orientado a los requerimientos que nuestros
                  clientes se merecen.
                </p>
              </div>
            </div>

            <div className="w-100 d-flex justify-content-center my-4">
              <div
                style={{
                  width: "100%",
                  borderBottom: "2px dashed black",
                }}
              ></div>
            </div>

            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
              <div className="">
                <h3 className="serviciotec">REPUESTOS ORIGINALES</h3>
                <p className="text-mu">
                  Repuestos originales para toda nuestra gama de tractores, que
                  aseguran el óptimo funcionamiento de los equipos y la máxima
                  protección de la inversión, cuidando la vida útil y el
                  rendimiento de la maquinaria. Stock permanente de repuestos
                  100% originales.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-7 d-flex justify-content-center align-items-center mt-2 mt-md-0 ">
              <div>
                <img src={repuesto} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#4f4f4f",height:"300px" }} className="d-flex justify-content-center align-items-center text-center py-5 mt-5">
  <div>
    <h2 className="serviciotec">¡Contactá a un experto!</h2>
    <h3 className="text-white mt-3 asesoramiento">¿Necesitás asesoramiento?</h3>


    <a  href="https://wa.me/5493434694909?text=Hola%2C%20vengo%20desde%20la%20p%C3%A1gina%20Kyramec..." target="_blank" rel="noopener noreferrer">
  <button className="btn contactanos-btn mt-3">Contactanos!</button>
</a>

  </div>
</div>

      </div>
      <div style={{marginTop:"-25px"}}> 
      <Footer2 />
      </div>
    </>
  );
};

export default PostVenta;
