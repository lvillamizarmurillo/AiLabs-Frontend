import React, { useState } from 'react';
import '../../../../assets/css/deleteFees.css'; // Asegúrate de importar el CSS correcto

function DeleteFees() {
    const [id, setId] = useState('');

    const handleInputChange = (event) => {
      setId(event.target.value);
    };
  
    const handleDeleteId = () => {
      setId('');
    };
  
    return (
      <div className="id-input-with-delete">
        <input type="text" value={id} onChange={handleInputChange} placeholder="Ingrese un ID" />
        {id && <button className="delete-button" onClick={handleDeleteId}>Eliminar</button>}
      </div>
    );
}

export default DeleteFees;
