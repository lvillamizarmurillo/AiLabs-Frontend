import React, { useState } from 'react';
import '../../../../assets/css/saveNewsFees.css';

function SaveFees() {
    const [fees, setFees] = useState([{ idTradingAccount: '', idSubscription: '', fee: '', date: '' }]);

    const handleAddRow = () => {
      setFees([...fees, { idTradingAccount: '', idSubscription: '', fee: '', date: '' }]);
    };
  
    const handleRemoveRow = (index) => {
      const newFees = [...fees];
      newFees.splice(index, 1);
      setFees(newFees);
    };

    const handleRemoveAllRowsBelow = (index) => {
      const newFees = fees.slice(0, index + 1);
      setFees(newFees);
    };
  
    const handleInputChange = (index, event) => {
      const { name, value } = event.target;
      const newFees = [...fees];
      newFees[index][name] = value;
      setFees(newFees);
    };
  
    const handleSaveFees = () => {
      alert(JSON.stringify(fees)); // Aquí enviarías los datos al backend, por ahora solo mostramos un alert
    };
  
    return (
      <>
        {fees.map((fee, index) => (
          <div className="save-fees-form1" key={index}>
            <label>
              ID Trading Account:
              <input type="text" name="idTradingAccount" value={fee.idTradingAccount} onChange={(e) => handleInputChange(index, e)} />
            </label>
            <label>
              ID Subscription:
              <input type="text" name="idSubscription" value={fee.idSubscription} onChange={(e) => handleInputChange(index, e)} />
            </label>
            <label>
              Fee:
              <input type="number" name="fee" value={fee.fee} onChange={(e) => handleInputChange(index, e)} />
            </label>
            <label>
              Date:
              <input type="date" name="date" value={fee.date} onChange={(e) => handleInputChange(index, e)} />
            </label>
            {index === 0 && fees.length > 1 && <button className="remove-all-below-button" onClick={() => handleRemoveAllRowsBelow(index)}>--x--</button>}
            {index > 0 && <button className="remove-button" onClick={() => handleRemoveRow(index)}>×</button>}
          </div>
        ))}
        <div className="save-fees-buttons">
          <button className="save-button" onClick={handleSaveFees}>Guardar Fees</button>
          <button className="add-button" onClick={handleAddRow}>+</button>
        </div>
      </>
    );
}

export default SaveFees;