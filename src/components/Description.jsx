import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "../styles/DescriptionEquipment.scss";

const Description = ({ description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`description-container ${isOpen ? 'open' : ''}`}>
      <h2 onClick={toggleDescription}>
        Description
        <span><FontAwesomeIcon icon={faChevronUp} /></span>
      </h2>
      <div className="description-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Description;
