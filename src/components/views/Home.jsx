import Navbar from '../Global.jsx';
import '../../assets/css/home.css'

function Home() {

  return (
    <>
      <Navbar />
      <div className="saldo-container">
        <div className="historico">
          <p className="title">Historico de Ganancia:</p>
          <p className="saldo">1000</p>
        </div>
        <div className="historico">
          <p className="title">Saldo actual:</p>
          <p className="saldo">1000</p>
        </div>
      </div>

      <div className="informacion">
        <div className="referidos">
          <table>
            <tr>
              <td colSpan={2}>
                <h2>Vista rápida de mi equipo</h2>
              </td>
            </tr>
            <tr>
              <td><p>username</p></td>
              <td><p>nivel 1</p></td>
            </tr>
            <tr>
              <td><p>username</p></td>
              <td><p>nivel 1</p></td>
            </tr>
            <tr>
              <td><p>username</p></td>
              <td><p>nivel 2</p></td>
            </tr>
            <tr>
              <td><p>username</p></td>
              <td><p>nivel 2</p></td>
            </tr>
            <tr>
              <td><p>username</p></td>
              <td><p>nivel 3</p></td>
            </tr>
            <tr>
              <td><p>username</p></td>
              <td><p>nivel 4</p></td>
            </tr><tr>
              <td><p>username</p></td>
              <td><p>nivel 5</p></td>
            </tr>
          </table>
        </div>
        <div className="opciones">
          <div className="arriba">
            <div className="optionUer">
              <a href="">
                <img src="src/assets/img/user.png" alt="" />
                <p>Perfil</p>
              </a>
            </div>
            <div className="optionUer">
              <a href="">
                <img src="src/assets/img/equipo.png" alt="" />
                <p>Mi equipo</p>
              </a>
            </div>
          </div>
          <div className="abajo">
            <div className="optionUer">
              <a href="">
                <img src="src/assets/img/referidos.png" alt="" />
                <p>Tutorial para conectarte a Ail-Labs</p>
              </a>
            </div>
            <div className="optionUer">
              <a href="">
                <img src="src/assets/img/soporte.png" alt="" />
                <p>Soporte</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;