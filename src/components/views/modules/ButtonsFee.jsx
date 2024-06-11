import React, { useState } from 'react';
import '../../../assets/css/navFee.css';
import AllFees from './Fees/LoadAllFee.jsx';
import PendingFees from './Fees/LoadFeesPending.jsx'; 
import FeesPaid from './Fees/LoadFeesPaid.jsx'; 
import PendingFeesDate from './Fees/LoadFeesPendingForDate.jsx';
import PaidFeesDate from './Fees/LoadFeesPaidForDate.jsx';
import SaveFees from './Fees/SaveNewsFees.jsx';
import DeleteFees from './Fees/DeleteFees.jsx';

function NavFee() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <div className="nav-containerFee">
        <div className="menu-buttons">
          {["All Fees", "Pending Fees", "Fees Paid", "+ Pending Fees", "+ Fees Paid", "Save Fees", "Delete Fees"].map((buttonText, index) => (
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
        {activeButton === 'All Fees' && <AllFees />}
        {activeButton === 'Pending Fees' && <PendingFees />}
        {activeButton === 'Fees Paid' && <FeesPaid />}
        {activeButton === '+ Pending Fees' && <PendingFeesDate />}
        {activeButton === '+ Fees Paid' && <PaidFeesDate />}
        {activeButton === 'Save Fees' && <SaveFees />}
        {activeButton === 'Delete Fees' && <DeleteFees />}
        {/* Puedes agregar más componentes aquí para otros botones */}
      </div>
    </>
  );
}

export default NavFee;