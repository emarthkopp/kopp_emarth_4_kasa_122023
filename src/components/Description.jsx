import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import "../styles/DescriptionEquipment.scss";

const Description = ({ description }) => {
// Déclaration de l'état local isOpen pour l'état d'ouverture ou de fermeture de la description
  const [isOpen, setIsOpen] = useState(false);
// Fonction toggleDescription pour basculer l'état d'ouverture ou de fermeture de la description
  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`description-container ${isOpen ? 'open' : ''}`}>{/* Conteneur de la description avec une classe "open" si isOpen est vrai */}
      <h2 onClick={toggleDescription}> {/*Bouton cliquable pour ouvrir ou fermer la description */}
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
