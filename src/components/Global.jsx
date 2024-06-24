import React, { useState, useEffect } from 'react';
import '../assets/css/navbar.css';
import iconUser from "../assets/img/navbar/iconUser.png";
import ailabsLogo from "../assets/img/navbar/Ai Labs logo.png";
import iconMenu from "../assets/img/navbar/iconMenu.png";
import editIcon from "../assets/img/navbar/lapiz.png";
import { logout } from './views/logout';

const env = {
  HOSTNAME_BACKEND: import.meta.env.VITE_HOSTNAME_BACKEND,
  PORT_BACKEND: import.meta.env.VITE_PORT_BACKEND
}

const Navbar = ({ userSignedIn }) => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isWalletModalOpen, setWalletModalOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [walletLink, setWalletLink] = useState('');
  const [walletLink2, setWalletLink2] = useState('');
  const [idBinance, setIdBinance] = useState('');
  const [walletUSDTBEP20, setWalletUSDTBEP20] = useState('');
  const [idTradingAccount, setIdTradingAccount] = useState('');
  const [idSuscription, setIdSuscription] = useState('');
  const [isMissingData, setIsMissingData] = useState(false);
  const [missingField1, setMissingField1] = useState('');
  const [missingField2, setMissingField2] = useState('');
  const estadoUser = localStorage.getItem('estadoUser');
  const token = localStorage.getItem('authToken');

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  const postWalletUser = async (e) => {
    e.preventDefault();
    // Validación de Id Binance o Wallet USDT BEP20
    if (!idTradingAccount || !idSuscription) {
      alert('Debe llenar ambos campos para continuar');
      return;
    }

    const body = {
      idTradingAccount: idTradingAccount,
      idSuscription: idSuscription
    };

    const response = await fetch(`http://${env.HOSTNAME_BACKEND}:${env.PORT_BACKEND}/ai-labs/user`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept-version': '1.0.0',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (response.status === 200) {
      localStorage.setItem('estadoUser', "activo");
      alert(data.message);
      setIsMissingData(false); // Cerrar modal de datos faltantes
    } else {
      console.log(data);
    }
  };

  const putWalletUser = async () => {

    // Validación de Id Binance o Wallet USDT BEP20
    if (!idBinance && !walletUSDTBEP20) {
      alert('Debe llenar al menos uno de los campos: Id Binance o Wallet USDT BEP20');
      return;
    }

    const body = {};
  
    if (idBinance) {
      body.idBinance = idBinance;
    }
  
    if (walletUSDTBEP20) {
      body.walletUSDTBEP20 = walletUSDTBEP20;
    }

    const response = await fetch(`http://${env.HOSTNAME_BACKEND}:${env.PORT_BACKEND}/ai-labs/user`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Accept-version': '1.0.1',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (response.status === 200) {
      alert(data.message);
      setWalletModalOpen(false); // Cerrar modal de wallet después de guardar
    } else {
      console.log(data);
    }
  };

  const getWalletUser = async () => {
    const response = await fetch(`http://${env.HOSTNAME_BACKEND}:${env.PORT_BACKEND}/ai-labs/user`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept-version': '1.0.3',
        'Authorization': `Bearer ${token}`
      }
    });

    const data = await response.json();

    if (response.status === 200) {
      setIdBinance(data.message.idBinance || '');
      setWalletUSDTBEP20(data.message.walletUSDTBEP20 || '');
      setWalletLink(idBinance);
      setWalletLink2(walletUSDTBEP20);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    // Simular lógica para verificar si hay datos faltantes
    let userHasMissingData = estadoUser == 'inactivo';
    setIsMissingData(userHasMissingData);

    // Obtener datos del usuario al cargar el componente
    getWalletUser();
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

  const handleSaveWalletLink = (e) => {
    e.preventDefault();
    setIsEditable(false);
    putWalletUser(); // Guardar cambios al desactivar la edición
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
                    <li onClick={handleLogout}><a href='/logout'>Salir</a></li>
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
              value={idBinance}
              onChange={(e) => setIdBinance(e.target.value)}
              disabled={!isEditable}
              className={!isEditable ? 'input-disabled' : ''}
            />
            <p>Id Binance:</p>
            <input
              type="text"
              value={walletUSDTBEP20}
              onChange={(e) => setWalletUSDTBEP20(e.target.value)}
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
              value={idTradingAccount}
              onChange={(e) => setIdTradingAccount(e.target.value)}
            />
            <input
              type="text"
              placeholder="Id Suscription"
              value={idSuscription}
              onChange={(e) => setIdSuscription(e.target.value)}
            />
            <button className="save-btn" onClick={postWalletUser}>Guardar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;