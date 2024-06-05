import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';
import iconUser from "../assets/img/navbar/iconUser.png";
import ailabsLogo from "../assets/img/navbar/Ai Labs logo.png";
import iconMenu from "../assets/img/navbar/iconMenu.png";

const Navbar = ({ userSignedIn }) => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
                  <a className='containerButton' href="#"><button className='button-navb'>Wallet</button></a>
                  <a className='containerButton' href="#"><button className='button-navb'>Tutoriales</button></a>
                  <a className='containerButton' href="#"><button className='button-navb'>Privacidad</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="text-reference">
            <h5>mi equipo</h5>
            <p>4</p>
          </div>
          <div className="text-reference">
            <h5>Nfts</h5>
            <p>1</p>
          </div>
          <div>
            <a className='containerButton' href="#"><button className='button-navb2'><p>Recomendar</p></button></a>
          </div>
        </div>
        <div className="container-fluid-2">
          <a className="btn" href="#"><button className='button-navb2'><p>Wallet</p></button></a>
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
      </nav>
    </>
  );
};

export default Navbar;