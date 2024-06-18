import React, { useState } from 'react';
import '../../../assets/css/profileModules.css';

function ProfilePasswordModule() {
  const initialFormData = {
    password: '123',
    confirmPassword: '321'
  };

  const [formData, setFormData] = useState(initialFormData);
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Aquí puedes implementar la lógica para guardar los cambios en tu backend o donde corresponda
    // En este ejemplo, simplemente simulamos que los datos se guardan y desactivamos el modo de edición
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
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          disabled={!editMode} // Deshabilitar el input si no está en modo de edición
        />
      </div>
      <div className="form-row">
        <label>Confirmar Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
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

export default ProfilePasswordModule;