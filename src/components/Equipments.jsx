import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "../styles/DescriptionEquipment.scss"; 
const Equipments = ({ equipments }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEquipments = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`description-container ${isOpen ? 'open' : ''}`}>
      <h2 onClick={toggleEquipments}>
        Equipments
        <span><FontAwesomeIcon icon={faChevronUp} /></span>
      </h2>
      <div className="description-content">
        {equipments.map((equipment, index) => (
          <p key={index}>{equipment}</p>
        ))}
      </div>
    </div>
  );
};

export default Equipments;
