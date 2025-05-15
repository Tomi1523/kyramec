import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Componentes/Menu";
import Nosotros from "./Componentes/Nosotros";
import Equipos from "./Componentes/Equipos";
import Footer from "./Componentes/Footer";
import Video from "./Componentes/Video";
import Tractores from "./Componentes/Tractores";
import Contactos from "./Componentes/Contactos";
import Footer2 from "./Componentes/Footer2";
import TractoresList from "./Componentes/TractoresList";
import DetallesTractor from "./Componentes/DetallesTractor";
import ScrollTop from "./Componentes/ScrollTop";
import ServiciosYFinanaciacion from "./Componentes/ServiciosYFinanaciacion";
import Implementos from "./Componentes/Implementos";
import TractorA from "./Componentes/TractorA";
import TractorB from "./Componentes/TractorB";
import TractorC from "./Componentes/TractorC";
import TractorD from "./Componentes/TractorD";
import TractorE from "./Componentes/TractorE";
import PostVenta from "./Componentes/PostVenta";
import MaquinariasViales from "./Componentes/MaquinariasViales";
import MaquinariasVialesId from "./Componentes/MaquinariasVialesId";
import ImplementoId from "./Componentes/ImplementoId";
import Desmalesadora from "./Componentes/Desmalesadora";
import Niveladora from "./Componentes/Niveladora";
import Acoplados from "./Componentes/Acoplados";
import Rastras from "./Componentes/Rastras";
import PalasHidraulicas from "./Componentes/PalasHidraulicas";
import Varios from "./Componentes/Varios";
import Tolvas from "./Componentes/Tolvas";
import Sembradora from "./Componentes/Sembradora";
import Pulverizadoras from "./Componentes/Pulverizadoras";
import TractoresUsados from "./Componentes/TractoresUsados";
import ImplementosViales from "./Componentes/ImplementosViales";
import Buscador from "./Componentes/Buscador";
import Repuestos from "./Componentes/Repuestos";
import RepuestoId from "./Componentes/RepuestoId";

function App() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Menu />
              <Video />
              <Tractores />
              <Footer />
              <Footer2 />
            </>
          }
        />
        <Route
          path="/equipos/tractores/serie-ra-25-70-hp/"
          element={<TractorA />}
        />
        <Route
          path="/equipos/tractores/serie-rd-30-70-hp/"
          element={<TractorB />}
        />
        <Route
          path="/equipos/tractores/serie-ra-45-90-hp/"
          element={<TractorC />}
        />
        <Route
          path="/equipos/tractores/serie-rc-100-140-hp/"
          element={<TractorD />}
        />
        <Route
          path="/equipos/tractores/serie-rs-160-220-hp/"
          element={<TractorE />}
        />
        
        <Route
          path="/servicios-y-financiacion"
          element={<ServiciosYFinanaciacion />}
        />
        <Route
          path="/nosotros"
          element={
            <>
              <Menu />
              <Nosotros />
              <Footer2 />
            </>
          }
        />
         <Route
          path="/contactos"
          element={
            <>
              <Menu />
              <Contactos />
              <Footer2 />
            </>
          }
        />
       <Route path="/repuestos" element={<Repuestos />} />
       <Route path="/repuestos/:id" element={<RepuestoId />} />
        <Route path="/implementos" element={<Implementos />} />
        <Route path="/implementos/desmalesadora" element={<Desmalesadora />} />
        <Route path="/implementos/aniveladora" element={<Niveladora />} />
         <Route path="/implementos/acoplados" element={<Acoplados />} />
         <Route path="/implementos/rastras" element={<Rastras />} />
          <Route path="/implementos/varios" element={<Varios />} />
          <Route path="/implementos/palas-hidraulicas" element={<PalasHidraulicas />} />
          <Route path="/implementos/viales" element={<ImplementosViales />} />
        <Route path="/implementos/:id" element={<ImplementoId />} />

        <Route path="/post-venta" element={<PostVenta />} />
        <Route path="/equipos" element={<Equipos />} />
         <Route path="/equipos/maquinarias-viales" element={<MaquinariasViales />} />
        <Route path="/equipos/maquinarias-viales/:id" element={<MaquinariasVialesId />} />

         <Route path="/equipos/tolvas" element={<Tolvas />} />
         <Route path="/equipos/sembradora" element={<Sembradora />} />
       <Route path="/equipos/pulverizadoras" element={<Pulverizadoras />} />
      <Route path="/equipos/usados" element={<TractoresUsados />} />

 <Route path="/buscador" element={<Buscador />} />

        <Route
          path="/equipos/tractores"
          element={
            <>
              <Menu />
              <TractoresList />
            </>
          }
        />
        <Route path="/equipos/tractores/:id" element={<DetallesTractor />} />
        <Route
          path="/equipos/tractores/serie-ra-25-70-hp/:id"
          element={<DetallesTractor />}
        />
        <Route
          path="/equipos/tractores/serie-rd-30-70-hp/:id"
          element={<DetallesTractor />}
        />
        <Route
          path="/equipos/tractores/serie-ra-45-90-hp/:id"
          element={<DetallesTractor />}
        />
        <Route
          path="/equipos/tractores/serie-rc-100-140-hp/:id"
          element={<DetallesTractor />}
        />
        <Route
          path="/equipos/tractores/serie-rs-160-220-hp/:id"
          element={<DetallesTractor />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
