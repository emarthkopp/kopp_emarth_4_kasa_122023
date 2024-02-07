import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/AccomodationCard.scss";


function AccommodationCard({ id, photo, title }) {
  return (
    <Link to={`/accommodation/${id}`} className="accomodation-card">
        {photo && <img src={photo} alt={title} />}
        {title && <h3>{title}</h3>}
    </Link>
  );
}

export default AccommodationCard;
