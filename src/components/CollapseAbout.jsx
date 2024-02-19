import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/CollapseAbout.scss';

const Collapse = () => {
  // Utilisation de useState pour gérer l'état local openTabs, qui stocke les onglets ouverts
  const [openTabs, setOpenTabs] = useState([]);
 // Fonction toggleDescription qui bascule l'état d'un onglet ouvert ou fermé en fonction de son index
  const toggleDescription = (index) => {
    setOpenTabs((prevTabs) => {
      if (prevTabs.includes(index)) {
        return prevTabs.filter((tab) => tab !== index);// Si l'index est présent dans openTabs, le supprimer pour fermer l'onglet
      } else {
        return [...prevTabs, index];// Sinon, ajouter l'index à openTabs pour ouvrir l'onglet
      }
    });
  };

  return (
    <div>
      <div className="container">
        <div className={`container ${openTabs.includes(1) ? "open" : ""}`}>
          <h2 onClick={() => toggleDescription(1)}>
            Fiabilité
            <span>
              <FontAwesomeIcon icon={faChevronUp} />
            </span>
          </h2>
          <div className="container__content">
            <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. les
            photos sont conformes aux logements et toutes les informations sont
            régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`container ${openTabs.includes(2) ? "open" : ""}`}>
          <h2 onClick={() => toggleDescription(2)}>
            Respect
            <span>
              <FontAwesomeIcon icon={faChevronUp} />
            </span>
          </h2>
          <div className="container__content">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`container ${openTabs.includes(3) ? "open" : ""}`}>
          <h2 onClick={() => toggleDescription(3)}>
            Service
            <span>
              <FontAwesomeIcon icon={faChevronUp} />
            </span>
          </h2>
          <div className="container__content">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`container ${openTabs.includes(4) ? "open" : ""}`}>
          <h2 onClick={() => toggleDescription(4)}>
            Sécurité
            <span>
              <FontAwesomeIcon icon={faChevronUp} />
            </span>
          </h2>
          <div className="container__content">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permetà nos équipes de vérifier que les
            standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
