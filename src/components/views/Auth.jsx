import React from 'react';
import '../../assets/css/auth.css';
import logoAiLabs from "../../assets/img/navbar/Ai Labs logo recortado.png"

function Auth() {
  return (
    <div className="container-auth">
      
      <div className="container12">
        <div className="title12">
          <img src={logoAiLabs} alt="" />
        <h3>
          AI - LABS
        </h3>
      </div>
        <form className="form12" action="">
          <input placeholder="Username" className="username12 input12" type="text" />
          <input placeholder="Password" className="password12 input12" type="password" />

          <button className="btn12" type="submit">Login</button>
          <a href="">Política y privacidad</a>
        </form>
      </div>
    </div>
  );
}

export default Auth;
