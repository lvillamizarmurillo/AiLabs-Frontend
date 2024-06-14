// CardsFees.jsx
import React, { useState } from 'react';
import '../../../../assets/css/cardsFees.css';
import PendingFees from './LoadFeesPending.jsx'; // Importa el componente PendingFees

function CardsFees() {
    const [showPendingFees, setShowPendingFees] = useState(false);

    const handleReviewClick = () => {
        setShowPendingFees(true);
    };

    return (
        <div className="dashboard">
            <div className="card">
                <h3>Revisar Fees Pendientes</h3>
                <p>Es necesario primero revisar fees pendientes de ser necesario para evitar cualquier tipo de inconveniente.</p>
                <button onClick={handleReviewClick}>REVISAR</button>
            </div>
            <div className="card">
                <h3>Calcular</h3>
                <p>Es necesario primero revisar fees pendientes de ser necesario para evitar cualquier tipo de inconveniente.</p>
                <button onClick={handleReviewClick}>REVISAR</button>
            </div>
            {showPendingFees && <PendingFees />} {/* Muestra el componente PendingFees si showPendingFees es true */}
        </div>
    );
}

export default CardsFees;