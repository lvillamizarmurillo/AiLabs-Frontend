import React, { useState } from 'react';
import '../../../assets/css/navPaid.css';
import PendingFees from './Fees/LoadFeesPending.jsx'; 
import FeesPaid from './Fees/LoadFeesPaid.jsx'; 
import CardsFees from './Fees/CardsFees.jsx';

function NavPaid() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <div className="nav-containerFee">
        <div className="menu-buttons">
          {["Pagar Fees", "Vista de pago", "Reiniciar"].map((buttonText, index) => (
            <div className="buttons-fees-options" key={index}>
              <button
                className={`fancy ${activeButton === buttonText ? 'active' : ''}`}
                onClick={() => handleButtonClick(buttonText)}
              >
                <span className="top-key"></span>
                <span className="text">{buttonText}</span>
                <span className="bottom-key-1"></span>
                <span className="bottom-key-2"></span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        {activeButton === 'Pagar Fees' && <CardsFees />}
        {activeButton === 'Vista de pago' && <PendingFees />}
        {activeButton === 'Reiniciar' && <FeesPaid />}
        {/* Puedes agregar más componentes aquí para otros botones */}
      </div>
    </>
  );
}

export default NavPaid;