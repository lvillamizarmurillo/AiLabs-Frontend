import React, { useState } from 'react';
import '../../../assets/css/profileModules.css';

function ProfileWalletModule() {
  const initialFormData = {
    idBinance: '88451221',
    walletUSDTBEP20: 'https://walet/jsfisjdc'
  };

  const [formData, setFormData] = useState(initialFormData);
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Lógica para guardar los cambios (simulado)
    setEditMode(false);
    alert('Cambios guardados');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="profile-content">
      <h3>Info Personal</h3>
      <div className="form-row">
        <label>Id Binance:</label>
        <input
          type="text"
          name="idBinance"
          value={formData.idBinance}
          onChange={handleChange}
          disabled={!editMode}
        />
      </div>
      <div className="form-row">
        <label>Wallet USDT BEP20:</label>
        <input
          type="text"
          name="walletUSDTBEP20"
          value={formData.walletUSDTBEP20}
          onChange={handleChange}
          disabled={!editMode}
        />
      </div>
      <div className="form-actions">
        {!editMode && (
          <button onClick={handleEditClick}>Editar</button>
        )}
        {editMode && (
          <button onClick={handleSaveClick}>Guardar</button>
        )}
      </div>
    </div>
  );
}

export default ProfileWalletModule;
