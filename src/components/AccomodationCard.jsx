import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/AccomodationCard.scss";


function AccommodationCard({ id, photo, title }) {
  return (
     // Utilisation du composant Link pour créer un lien vers une page en fonction de l'id passé en paramètre
    <Link to={`/accommodation/${id}`} className="accomodation-card">
       {/* Si une photo est fournie, affiche une balise img avec cette photo en utilisant la source fournie et le titre comme texte alternatif */}
        {photo && <img src={photo} alt={title} />}
         {/* idem pour le titre*/}
        {title && <h3>{title}</h3>}
    </Link>
  );
}

export default AccommodationCard;
