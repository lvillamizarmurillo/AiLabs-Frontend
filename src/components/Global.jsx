import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';
import iconUser from "../assets/img/navbar/iconUser.png";
import ailabsLogo from "../assets/img/navbar/Ai Labs logo.png";
import iconMenu from "../assets/img/navbar/iconMenu.png";
import editIcon from "../assets/img/navbar/lapiz.png";
import check from "../assets/img/navbar/check.png";
import waring from "../assets/img/navbar/waring.png";

const Navbar = ({ userSignedIn }) => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isWalletModalOpen, setWalletModalOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [walletLink, setWalletLink] = useState('https://mi-sitio.com/wallet'); // Link de la wallet
  const [walletLink2, setWalletLink2] = useState('https://mi-sitio.com/wallet2'); // Segundo link de la wallet
  const [isMissingData, setIsMissingData] = useState(false);
  const [missingField1, setMissingField1] = useState('');
  const [missingField2, setMissingField2] = useState('');

  useEffect(() => {
    // Simular lógica para verificar si hay datos faltantes
    const userHasMissingData = false; // Cambia esto según la lógica de tu aplicación
    setIsMissingData(userHasMissingData);
  }, []);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleWalletModal = () => {
    setWalletModalOpen(!isWalletModalOpen);
  };

  const handleEditWalletLink = () => {
    setIsEditable(true);
  };

  const handleSaveWalletLink = () => {
    setIsEditable(false);
    // Aquí puedes agregar cualquier lógica adicional para guardar el link de la wallet
  };

  const handleSaveMissingData = () => {
    setIsMissingData(false);
    // Aquí puedes agregar lógica adicional para guardar los datos faltantes
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light navbar-lewagon">
        <div>
          <div className={`menu1 ${isOpen ? 'menu1-light' : ''}`}>
            <div className="menu">
              <button className="btn" onClick={toggleMenu}>
                <img src={iconMenu} alt="" />
              </button>
              <div className={`offcanvas ${isOpen ? 'open' : ''}`}>
                <div className="offcanvas-header">
                  <div className="offcanvas-title">
                    <div className="title-menu">
                      <img src={ailabsLogo} alt="" />
                      <button className="button-closed close-btn" onClick={toggleMenu}>
                        x
                      </button>
                    </div>
                  </div>
                </div>
                <div className="offcanvas-content">
                  <a className='containerButton' href="#"><button className='button-navb'>Inicio</button></a>
                  <a className='containerButton' href="#"><button className='button-navb'>Mi equipo</button></a>
                  <a className='containerButton' href="#"><button className='button-navb'>Tutoriales</button></a>
                  <a className='containerButton' href="#"><button className='button-navb'>Privacidad</button></a>
                  <a className='containerButton' href="#"><button className='button-navb'>Socio comercial</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container-fluid-2">
            <a className="btn" href="#"><button className='button-navb2' onClick={toggleWalletModal}><p>Wallet</p></button></a>
            <div className="profile-menu-container">
              <img 
                src={iconUser}
                alt="Profile" 
                className="profile-image" 
                onClick={toggleProfileMenu} 
              />
              {profileMenuOpen && (
                <div className="profile-dropdown-menu">
                  <ul>
                    <li><a href="/profile">Mi perfil</a></li>
                    <li><a href="/wallet">Mi wallet</a></li>
                    <li><a href="/logout">Salir</a></li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {isWalletModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={toggleWalletModal}>&times;</span>
            <p>Wallet:</p>
            <input
              type="text"
              value={walletLink}
              onChange={(e) => setWalletLink(e.target.value)}
              disabled={!isEditable}
              className={!isEditable ? 'input-disabled' : ''}
            />
            <p>Id Binance:</p>
            <input
              type="text"
              value={walletLink2}
              onChange={(e) => setWalletLink2(e.target.value)}
              disabled={!isEditable}
              className={!isEditable ? 'input-disabled' : ''}
            />
            <img src={editIcon} alt="Edit" className="edit-icon" onClick={handleEditWalletLink} />
            {isEditable && <button className="save-btn" onClick={handleSaveWalletLink}>Guardar</button>}
          </div>
        </div>
      )}

      {isMissingData && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setIsMissingData(false)}>&times;</span>
            <p className="warning"> Necesitas llenar estos campos para finalizar el registro</p>
            <input
              type="text"
              placeholder="Trading Account"
              value={missingField1}
              onChange={(e) => setMissingField1(e.target.value)}
            />
            <input
              type="text"
              placeholder="Id Suscription"
              value={missingField2}
              onChange={(e) => setMissingField2(e.target.value)}
            />
            <button className="save-btn" onClick={handleSaveMissingData}>Guardar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;