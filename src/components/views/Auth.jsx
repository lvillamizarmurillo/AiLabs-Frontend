import React, { useState } from 'react';
import '../../assets/css/auth.css';
import { useNavigate } from 'react-router-dom';
import logoAiLabs from "../../assets/img/navbar/Ai Labs logo recortado.png";

const env = {
  HOSTNAME_BACKEND: import.meta.env.VITE_HOSTNAME_BACKEND,
  PORT_BACKEND: import.meta.env.VITE_PORT_BACKEND
}

function Auth() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginIn = async(e)=>{
    const response = await(await fetch(`http://${env.HOSTNAME_BACKEND}:${env.PORT_BACKEND}/ai-labs/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept-version': '1.0.0'
        },
        body: JSON.stringify({
          email,
          password,
        })
    })).json();

    if(response.status == 200) {
        localStorage.setItem('authToken',response.message);
        const getUser = async()=>{

          const token = localStorage.getItem('authToken');

          try {
            
            const response = await(await fetch(`http://${env.HOSTNAME_BACKEND}:${env.PORT_BACKEND}/ai-labs/user`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept-version': '1.0.0',
                    'Authorization': `Bearer ${token}`
                }
            })).json();
        
            if(response.status == 200) {
                localStorage.setItem('estadoUser',response.message.status);
                localStorage.setItem('rolUser',response.message.rol);
  
                const rol = response.message.rol;
                if (rol === 'user') {
                  navigate('/');
                } else {
                  console.log(response)
                }
              } else {
                console.log(response)
              }

          } catch (error) {
            // se setea role admin porque si entra por el catch es porque es admin
            localStorage.setItem('rolUser', 'admin');
            navigate('/admin');
          }

        }
          
          getUser();
    } else {
      console.log(response)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos obligatorios
    if (!email || !password) {
      alert('Email y password son obligatorios');
      return;
    }

    loginIn(email, password);
  };

  return (
    <div className="container-auth">
      <div className="container12">
        <div className="title12">
          <img src={logoAiLabs} alt="" />
          <h3>AI - LABS</h3>
        </div>
        <form className="form12" action="" onSubmit={ handleSubmit }>
          <input 
            placeholder="Username" 
            className="username12 input12" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <input 
            placeholder="Password" 
            className="password12 input12" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn12" type="submit">Login</button>
          <a href="">Política y privacidad</a>
        </form>
      </div>
    </div>
  );
}

export default Auth;
