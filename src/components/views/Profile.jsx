import React, { useState } from 'react';
import Navbar from '../Global.jsx';
import '../../assets/css/home.css'; 
import '../../assets/css/profile.css'; 
import imagenFondoProfile from "../../assets/img/imagenFondoProfile.jpg";
import fondoIconoProfile from "../../assets/img/fondoIconoProfile.png";
import InfoPersonalProfileModule from './modules/ProfileInfoModule.jsx';
import ProfilePasswordModule from './modules/ProfilePasswordModule.jsx';
import ProfileWalletModule from './modules/ProfileWalletModule.jsx';

function Profile() {
  const [activeTab, setActiveTab] = useState('infoPersonal');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  // Función para renderizar el contenido según el tab activo
  const renderContent = () => {
    switch (activeTab) {
      case 'infoPersonal':
        return <InfoPersonalProfileModule />;
      case 'Password':
        return <ProfilePasswordModule />;
      case 'Wallet20':
        return <ProfileWalletModule />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="oficina-virtual">
        <h2>Edit Profile</h2>
      </div>
      <div className="boxProfile">
        <div className="fotoProfile">
          <img src={imagenFondoProfile} alt="Background profile" />
        </div>
        <div className="infoBoxProfile">
          <div className='primerLineaTextInfo'>
            <h3>ID: 4295</h3>
            <h3>Mastercami</h3>
            <h3>bernalmurillocamilo@gmail.com</h3>
            <h3>KYC: not verified</h3>
          </div>
          <div className='segundaLineaTextInfo'>
            <h3>Customer</h3>
            <h3> Direct: 0</h3>
          </div>
        </div>
        <div className="imgenUserBox">
          <img src={fondoIconoProfile} alt="" />
        </div>
      </div>
      <div className="infoBoxUserEdit">
        <button className={activeTab === 'infoPersonal' ? 'active' : ''} onClick={() => handleTabChange('infoPersonal')}>Info Personal</button>
        <button className={activeTab === 'Password' ? 'active' : ''} onClick={() => handleTabChange('Password')}>Password</button>
        <button className={activeTab === 'Wallet20' ? 'active' : ''} onClick={() => handleTabChange('Wallet20')}>Wallet</button>
      </div>
      {renderContent()}
      <div className="spaceButton">
        
      </div>
    </>
  );
}

export default Profile;