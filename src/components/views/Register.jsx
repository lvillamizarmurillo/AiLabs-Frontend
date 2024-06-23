import '../../assets/css/register.css';
import { useParams } from 'react-router-dom';
import videoRegistro from '../../assets/media/VideoRegistro.mp4';

const env = {
  VITE_HOSTNAME: import.meta.env.VITE_HOSTNAME,
  VITE_PORT_FRONTEND: import.meta.env.VITE_PORT_FRONTEND,
};

function Register() {
  const { linkRefer } = useParams();
  return (
    <>
      <div className="reg-container">
        <div className="cards">
          <div className="card">
            <h2>Registrate en nuestro Backoffice</h2>
            <div className="img-content">
              <a href={`http://${env.VITE_HOSTNAME}:${env.VITE_PORT_FRONTEND}/form/${linkRefer}`} target="_blank">
                <img src="/src/assets/img/register-logo.png" alt="Step 1" />
              </a>
            </div>
            <div className="wrapper">
              <input type="checkbox" />
              <div className="btn">
                Step 1&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="circle">
                  <span>!</span>
                </div>
              </div>
              <div className="tooltip">Puedes ver este paso en el seg 45 del video.</div>
            </div>
          </div>
          
          <div className="card">
            <h2>Registrate en Dooprime</h2>
            <div className="img-content">
              <a href="https://www.dooprimenews.com/tag/referral-link" target="_blank">
                <img src="/src/assets/img/dooprime-logo.png" alt="Step 2" />
              </a>
            </div>
            <div className="wrapper">
              <input type="checkbox" />
              <div className="btn">
                Step 2&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="circle">
                  <span>!</span>
                </div>
              </div>
              <div className="tooltip">Puedes ver este paso en el min 1:22 del video.</div>
            </div>
          </div>
          
          <div className="card">
            <h2>Conectarse a MT Ai-Labs</h2>
            <div className="img-content">
              <a href="https://www.fxpro.investments/es/trading-platforms/metatrader4" target="_blank">
                <img src="/src/assets/img/mt.png" alt="Step 3" />
              </a>
            </div>
            <div className="wrapper">
              <input type="checkbox" />
              <div className="btn">
                Step 3&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="circle">
                  <span>!</span>
                </div>
              </div>
              <div className="tooltip">Puedes ver este paso en el min 3:38 del video.</div>
            </div>
          </div>
          
          <div className="card">
            <h2>Iniciar Sesión</h2>
            <div className="img-content">
              <a href={`http://${env.VITE_HOSTNAME}:${env.VITE_PORT_FRONTEND}/auth`} target="_blank">
              <img src="/src/assets/img/navbar/Ai Labs logo.png" alt="Step 4" />
              </a>
            </div>
            <div className="wrapper">
              <input type="checkbox" />
              <div className="btn">
                Step 4&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="circle">
                  <span>!</span>
                </div>
              </div>
              <div className="tooltip">Inicia sesion en tu backoffice!</div>
            </div>
          </div>
        </div>

        <hr />

        <section className="video">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={videoRegistro}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}

export default Register;