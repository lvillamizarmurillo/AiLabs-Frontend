import React, { useState } from 'react';
import '../../assets/css/admin.css';
import Users from './modules/Users.jsx'; // Asegúrate de que la ruta sea correcta
import ButtonsFee from './modules/ButtonsFee.jsx'; 
import ButtonsPaid from './modules/ButtonsPaid.jsx'; 

function Admin() {
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