import Navbar from '../Global.jsx';
import '../../assets/css/home.css'
import teamRefer from "../../assets/img/teamRefer.png"
import manchesterPublicity from "../../assets/img/manchesterPublicity.jpg"
import dooprimePublicity from "../../assets/img/dooprimePublicity.svg"
import base from "../../assets/img/base.png"
import grafica from "../../assets/img/grafica.png"
import billetera from "../../assets/img/billetera.png"
import grafica2 from "../../assets/img/grafica2.png"
import grafica3 from "../../assets/img/grafica3.png"
import grafica4 from "../../assets/img/grafica4.png"

function Home() {

  return (
    <>
      <Navbar />
      <div className="oficina-virtual">
        <h2>Virtual Office</h2>
      </div>
      <div className="mensaje-referir">
        <div className="imagen-referido">
          <img src={teamRefer} alt="" />
        </div>
        <div className="texto-para-referido">
          <h3>
            Complete KYC Registration
          </h3>
          <p>
            To start investing you must complete the KYC registration and be validated.
          </p>
        </div>
        <div className="botton-para-referido">
          <button class="Btn">
            <svg viewBox="0 0 512 512" class="svgIcon" height="1em"><path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"></path></svg>
            <p class="text">COPY</p>
            <span class="effect"></span>
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
                0.00 USDT
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
                0.00 USDT
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
                0.00 USDT
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
                0.00 USDT
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
                0.00 USDT
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
                0.00 USDT
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
                0.00 USDT
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
                0.00 USDT
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
                0 USERS
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
          <button class="Btn2">
            <svg viewBox="0 0 512 512" class="svgIcon2" height="1em"><path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"></path></svg>
            <p class="text2">COPY LINK ZOOM</p>
            <span class="effect2"></span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;