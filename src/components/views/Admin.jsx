import React, { useState, useEffect } from 'react';
import '../../assets/css/admin.css';
import Users from './modules/Users.jsx'; // Asegúrate de que la ruta sea correcta
import ButtonsFee from './modules/ButtonsFee.jsx'; 
import ButtonsPaid from './modules/ButtonsPaid.jsx'; 
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem('rolUser');
    if (storedRole !== 'admin') {
      localStorage.clear();
      navigate('/auth');
    }
  }, []);

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  
  return (
    <>
      <div className="container-modules">
        <div className="buttons-load-modules">
          <div 
            className={`module-button ${activeButton === 'USUARIOS' ? 'active' : ''}`}
            onClick={() => handleButtonClick('USUARIOS')}
          >
            <span className="text">U S U A R I O S</span>
            <span className="arrow"></span>
          </div>
        </div>
        <div className="buttons-load-modules">
          <div 
            className={`module-button ${activeButton === 'FEES' ? 'active' : ''}`}
            onClick={() => handleButtonClick('FEES')}
          >
            <span className="text">F E E S</span>
            <span className="arrow"></span>
          </div>
        </div>
        <div className="buttons-load-modules">
          <div 
            className={`module-button ${activeButton === 'PAGAR' ? 'active' : ''}`}
            onClick={() => handleButtonClick('PAGAR')}
          >
            <span className="text">P A G A R</span>
            <span className="arrow"></span>
          </div>
        </div>
      </div>
      {activeButton === 'USUARIOS' && <Users />}
      {activeButton === 'FEES' && <ButtonsFee />}
      {activeButton === 'PAGAR' && <ButtonsPaid />}
    </>
  );
}

export default Admin;