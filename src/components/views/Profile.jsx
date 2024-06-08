import React, { useState } from 'react';
import Navbar from '../Global.jsx';
import '../../assets/css/profile.css'
import editIcon from "../../assets/img/navbar/lapiz.png";

function Profile() {

  const [isEditable, setIsEditable] = useState(false);
  const [isEditableAcc, setIsEditableAcc] = useState(false);
  const [isEditablePass, setIsEditablePass] = useState(false);

  const handleEditWalletLink = () => {
    setIsEditable(true);
  };

  const handleSaveWalletLink = () => {
    setIsEditable(false);
    // Aquí puedes agregar cualquier lógica adicional para guardar el link de la wallet
  };

  const handleEditAccount = () => {
    setIsEditableAcc(true);
  };

  const handleSaveAccount = () => {
    setIsEditableAcc(false);
    // Aquí puedes agregar cualquier lógica adicional para guardar el link de la wallet
  };

  const handleEditPass = () => {
    setIsEditablePass(true);
  };

  const handleSavePass = () => {
    setIsEditablePass(false);
    // Aquí puedes agregar cualquier lógica adicional para guardar el link de la wallet
  };

  return (
    <>
      <Navbar />

      <div className="informacion">
        <img src="src/assets/img/user.png" alt="" />
        <h2>Perfil de Usuario</h2>

        <div className='dataBasic'>
          <div className="modal-content">
            <h3>Información Personal</h3>
            <p>Nombres:</p>
            <input
              type="text"
              value="Master"
              disabled={!isEditable}
              className={!isEditable ? 'input-disabled' : ''}
            />
            <p>Apellidos:</p>
            <input
              type="text"
              value="Lider"
              disabled={!isEditable}
              className={!isEditable ? 'input-disabled' : ''}
            />
            <p>Celular:</p>
            <input
              type="text"
              value="3158234567"
              disabled={!isEditable}
              className={!isEditable ? 'input-disabled' : ''}
            />

            <img src={editIcon} alt="Edit" className="edit-icon" onClick={handleEditWalletLink} />
            {isEditable && <button className="save-btn" onClick={handleSaveWalletLink}>Guardar</button>}
          </div>
          
          <br/>

          <div className="modal-content">
            <h3>Información de Cuentas</h3>
            <p>Binance Id:</p>
            <input
              type="text"
              value="3453458"
              disabled={!isEditableAcc}
              className={!isEditableAcc ? 'input-disabled' : ''}
            />
            <p>Wallet BEP20:</p>
            <input
              type="text"
              value="0x2A55a45op6i123s356i46k4k45l3w76Rt"
              disabled={!isEditableAcc}
              className={!isEditableAcc ? 'input-disabled' : ''}
            />

            <img src={editIcon} alt="Edit" className="edit-icon" onClick={handleEditAccount} />
            {isEditableAcc && <button className="save-btn" onClick={handleSaveAccount}>Guardar</button>}
          </div>

          <br/>

          <div className="modal-content">
            <h3>Cambiar Contraseña</h3>
            <p>Contraseña Anterior:</p>
            <input
              type="password"
              value="12345678"
              disabled={!isEditablePass}
              className={!isEditablePass ? 'input-disabled' : ''}
            />
            <p>Nueva Contraseña:</p>
            <input
              type="password"
              value=""
              disabled={!isEditablePass}
              className={!isEditablePass ? 'input-disabled' : ''}
            />
            <label>Por favor utilice contraseñas seguras, incluir letras mayúscula, minúsculas, numeros y caracteres especiales</label>

            <img src={editIcon} alt="Edit" className="edit-icon" onClick={handleEditPass} />
            {isEditablePass && <button className="save-btn" onClick={handleSavePass}>Guardar</button>}
          </div>
          
        </div>
      </div>
      <br/>
    </>
  );
}

export default Profile;