import React, { useState } from 'react';
import '../../assets/css/form.css';
import { useNavigate, useParams } from 'react-router-dom';
import logoAiLabs from "../../assets/img/navbar/Ai Labs logo recortado.png"

const env = {
  HOSTNAME_BACKEND: import.meta.env.VITE_HOSTNAME_BACKEND,
  PORT_BACKEND: import.meta.env.VITE_PORT_BACKEND
}

function Form() {
  const { linkRefer } = useParams();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [idBinance, setIdBinance] = useState('');
  const [walletUSDTBEP20, setWalletUSDTBEP20] = useState('');

  const registerUser = async (e) => {
    e.preventDefault();

    // Validación de contraseñas
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Validación de Id Binance o Wallet USDT BEP20
    if (!idBinance && !walletUSDTBEP20) {
      alert('Debe llenar al menos uno de los campos: Id Binance o Wallet USDT BEP20');
      return;
    }

    const body = {
      username,
      nombres,
      apellidos,
      numero,
      email,
      password
    };
  
    if (idBinance) {
      body.idBinance = idBinance;
    }
  
    if (walletUSDTBEP20) {
      body.walletUSDTBEP20 = walletUSDTBEP20;
    }

    const response = await (await fetch(`http://${env.HOSTNAME_BACKEND}:${env.PORT_BACKEND}/ai-labs/registro/${linkRefer}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept-version': '1.0.0'
      },
      body: JSON.stringify(body)
    })).json();

    if (response.status == 200) {
      alert('Se registró correctamente');
      navigate('/auth');
    } else {
      console.log(response);
    }
  };

  return (
    <div className="container-auth1">
      <div className="container13">
        <div className="title13">
          <img src={logoAiLabs} alt="" />
          <h3>AI - LABS</h3>
        </div>
        <form className="form13" onSubmit={registerUser}>
          <input
            placeholder="Username"
            className="username13 input13"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Nombres"
            className="nombres13 input13"
            type="text"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
          />
          <input
            placeholder="Apellidos"
            className="apellidos13 input13"
            type="text"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
          />
          <input
            placeholder="Correo electronico"
            className="correo13 input13"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Contraseña"
            className="password13 input13"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Confirmar contraseña"
            className="contraseña13 input13"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            placeholder="Movil"
            className="movil13 input13"
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
          <input
            placeholder="Id Binance"
            className="idBinance13 input13"
            type="text"
            value={idBinance}
            onChange={(e) => setIdBinance(e.target.value)}
          />
          <input
            placeholder="Wallet USDT BEP20"
            className="wallet13 input13"
            type="text"
            value={walletUSDTBEP20}
            onChange={(e) => setWalletUSDTBEP20(e.target.value)}
          />
          <button className="btn13" type="submit">Registrar</button>
          <a href="">Política y privacidad</a>
        </form>
      </div>
    </div>
  );
}

export default Form;