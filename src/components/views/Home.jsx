import React, { useState, useEffect } from 'react';
import Navbar from '../Global.jsx';
import '../../assets/css/home.css';
import teamRefer from "../../assets/img/teamRefer.png";
import manchesterPublicity from "../../assets/img/manchesterPublicity.jpg";
import dooprimePublicity from "../../assets/img/dooprimePublicity.svg";
import base from "../../assets/img/base.png";
import grafica from "../../assets/img/grafica.png";
import billetera from "../../assets/img/billetera.png";
import grafica2 from "../../assets/img/grafica2.png";
import grafica3 from "../../assets/img/grafica3.png";
import grafica4 from "../../assets/img/grafica4.png";

const env = {
  VITE_HOSTNAME: import.meta.env.VITE_HOSTNAME,
  VITE_PORT_FRONTEND: import.meta.env.VITE_PORT_FRONTEND,
  HOSTNAME_BACKEND: import.meta.env.VITE_HOSTNAME_BACKEND,
  PORT_BACKEND: import.meta.env.VITE_PORT_BACKEND
}

function Home() {
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState(null);
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    const loadDashboard = async () => {
      const response = await (await fetch(`http://${env.HOSTNAME_BACKEND}:${env.PORT_BACKEND}/ai-labs/user`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept-version': '1.0.2',
          'Authorization': `Bearer ${token}`
        }
      })).json();

      if (response.status === 200) {
        setData(response.message);
      } else {
        console.log(response);
      }
    };

    loadDashboard();
  }, []); // Solo se ejecutará una vez cuando el componente se monte
  const loadLinkRefer = async (e) => {
    e.preventDefault();
    const response = await (await fetch(`http://${env.HOSTNAME_BACKEND}:${env.PORT_BACKEND}/ai-labs/user`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept-version': '1.0.1',
        'Authorization': `Bearer ${token}`
      }
    })).json();

    if (response.status === 200) {
      navigator.clipboard.writeText(`http://${env.VITE_HOSTNAME}:${env.VITE_PORT_FRONTEND}/register/${response.message}`); // URL de ejemplo, reemplazar con el enlace correcto
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000); 
    } else {
      console.log(response);
    }
  };

  return (
    <>
      <Navbar />
      {copied && (
        <div className="success">
          <div className="success__icon">
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m12 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm4.768 9.14c.0878-.1004.1546-.21726.1966-.34383.0419-.12657.0581-.26026.0477-.39319-.0105-.13293-.0475-.26242-.1087-.38085-.0613-.11844-.1456-.22342-.2481-.30879-.1024-.08536-.2209-.14938-.3484-.18828s-.2616-.0519-.3942-.03823c-.1327.01366-.2612.05372-.3782.1178-.1169.06409-.2198.15091-.3027.25537l-4.3 5.159-2.225-2.226c-.1886-.1822-.4412-.283-.7034-.2807s-.51301.1075-.69842.2929-.29058.4362-.29285.6984c-.00228.2622.09851.5148.28067.7034l3 3c.0983.0982.2159.1748.3454.2251.1295.0502.2681.0729.4069.0665.1387-.0063.2747-.0414.3991-.1032.1244-.0617.2347-.1487.3236-.2554z" fill="#393a37" fillRule="evenodd"></path></svg>
          </div>
          <div className="success__title">Link copiado correctamente</div>
        </div>
      )}
      <div className="oficina-virtual">
        <h2>Virtual Office</h2>
      </div>
      <div className="mensaje-referir">
        <div className="imagen-referido">
          <img src={teamRefer} alt="" />
        </div>
        <div className="texto-para-referido">
          <h3>
            Comparte tu link de referido
          </h3>
          <p>
            Para recomendar a una persona directa y ganar beneficios comparte este link.
          </p>
        </div>
        <div className="botton-para-referido">
          <button className="Btn" onClick={loadLinkRefer}>
            <svg viewBox="0 0 512 512" className="svgIcon" height="1em"><path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"></path></svg>
            <p className="text">COPY</p>
            <span className="effect"></span>
          </button>
        </div>
      </div>
      <div className="informacion-general">
        <div className="informacion-balance">
          <div className="cajas-informacion1">
            <div className="icono">
              <img src={billetera} alt="" />
            </div>
            <div className="texto-icono1">
              <h3>
                CAPITAL OPERATIVO
              </h3>
              <p>
                {data ? `${data.capitalOperativo.toFixed(2)} USDT` : '0.00 USDT'}
              </p>
            </div>
          </div>
          <div className="cajas-informacion2">
            <div className="icono">
              <img src={base} alt="" />
            </div>
            <div className="texto-icono2">
              <h3>
                RENTABILIDAD SEMANAL
              </h3>
              <p>
                {data ? `${data.rentabilidadSemanal.toFixed(2)} USDT` : '0.00 USDT'}
              </p>
            </div>
          </div>
          <div className="cajas-informacion3">
            <div className="icono">
              <img src={grafica} alt="" />
            </div>
            <div className="texto-icono3">
              <h3>
                RENTABILIDAD ACUMULADA
              </h3>
              <p>
                {data ? `${data.rentabilidadAcumulada.toFixed(2)} USDT` : '0.00 USDT'}
              </p>
            </div>
          </div>
        </div>
        <div className="informacion-balance">
          <div className="cajas-informacion2">
            <div className="icono">
              <img src={base} alt="" />
            </div>
            <div className="texto-icono2">
              <h3>
                CARTERA DIRECTA
              </h3>
              <p>
                {data ? `${data.carteraDirecta.toFixed(2)} USDT` : '0.00 USDT'}
              </p>
            </div>
          </div>
          <div className="cajas-informacion3">
            <div className="icono">
              <img src={grafica} alt="" />
            </div>
            <div className="texto-icono3">
              <h3>
                CARTERA DE EQUIPO
              </h3>
              <p>
                {data ? `${data.carteraEquipo.toFixed(2)} USDT` : '0.00 USDT'}
              </p>
            </div>
          </div>
          <div className="cajas-informacion1">
            <div className="icono">
              <img src={billetera} alt="" />
            </div>
            <div className="texto-icono1">
              <h3>
                ACUMULADO DE CARTERA
              </h3>
              <p>
                {data ? `${data.acumuladoCartera.toFixed(2)} USDT` : '0.00 USDT'}
              </p>
            </div>
          </div>
        </div>
        <div className="informacion-balance">
          <div className="cajas-informacion4">
            <div className="icono">
              <img src={grafica2} alt="" />
            </div>
            <div className="texto-icono4">
              <h3>
                GANANCIA SEMANAL
              </h3>
              <p>
                {data ? `${data.gananciaSemanal.toFixed(2)} USDT` : '0.00 USDT'}
              </p>
            </div>
          </div>
          <div className="cajas-informacion5">
            <div className="icono">
              <img src={grafica3} alt="" />
            </div>
            <div className="texto-icono5">
              <h3>
                GANANCIA TOTAL
              </h3>
              <p>
                {data ? `${data.gananciaTotal.toFixed(2)} USDT` : '0.00 USDT'}
              </p>
            </div>
          </div>
          <div className="cajas-informacion6">
            <div className="icono">
              <img src={grafica4} alt="" />
            </div>
            <div className="texto-icono6">
              <h3>
                TOTAL DE EQUIPO
              </h3>
              <p>
                {data ? `${data.totalEquipo} USERS` : '0 USERS'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-parmer">
        <div className="imagen-patrocinio">
          <div className="imagen-manchester">
            <img src={manchesterPublicity} alt="" />
          </div>
          <div className="imagen-dooprime">
            <img src={dooprimePublicity} alt="" />
          </div>
        </div>
        <div className="container-zoom">
          <h2>
            Copiar enlace de zoom
          </h2>
          <button className="Btn2" onClick={loadLinkRefer}>
            <svg viewBox="0 0 512 512" className="svgIcon2" height="1em"><path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"></path></svg>
            <p className="text2">COPY LINK ZOOM</p>
            <span className="effect2"></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;