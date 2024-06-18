import React, { useState } from 'react';
import '../../../assets/css/profileModules.css';

function InfoPersonalProfileModule() {
  const initialFormData = {
    username: 'mastercami',
    nombres: 'Camilo',
    apellidos: 'Bernal Murillo',
    movil: '123456789'
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
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          disabled={!editMode} // Deshabilitar el input si no está en modo de edición
        />
      </div>
      <div className="form-row">
        <label>Nombres:</label>
        <input
          type="text"
          name="nombres"
          value={formData.nombres}
          onChange={handleChange}
          disabled={!editMode}
        />
      </div>
      <div className="form-row">
        <label>Apellidos:</label>
        <input
          type="text"
          name="apellidos"
          value={formData.apellidos}
          onChange={handleChange}
          disabled={!editMode}
        />
      </div>
      <div className="form-row">
        <label>Móvil:</label>
        <input
          type="text"
          name="movil"
          value={formData.movil}
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

export default InfoPersonalProfileModule;