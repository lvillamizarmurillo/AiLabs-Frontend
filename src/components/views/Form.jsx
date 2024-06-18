import React from 'react';
import '../../assets/css/form.css';
import logoAiLabs from "../../assets/img/navbar/Ai Labs logo recortado.png"

function Auth() {
  return (
    <div className="container-auth1">
      
      <div className="container13">
        <div className="title13">
          <img src={logoAiLabs} alt="" />
        <h3>
          AI - LABS
        </h3>
      </div>
        <form className="form13" action="">
          <input placeholder="Username" className="username13 input13" type="text" />
          <input placeholder="Nombres" className="nombres13 input13" type="text" />
          <input placeholder="Apellidos" className="apellidos13 input13" type="text" />
          <input placeholder="Correo electronico" className="correo13 input13" type="text" />
          <input placeholder="Contraseña" className="password13 input13" type="password" />
          <input placeholder="Confirmar contraseña" className="contraseña13 input13" type="password" />
          <input placeholder="Movil" className="movil13 input13" type="text" />
          <input placeholder="Id Binance" className="idBinance13 input13" type="text" />
          <input placeholder="Wallet USDT BEP20" className="wallet13 input13" type="text" />
          <button className="btn13" type="submit">Registrar</button>
          <a href="">politica y privacidad</a>
        </form>
      </div>
    </div>
  );
}

export default Auth;