import React from 'react';
import "../styles/AccomodationCard.scss";

function AccommodationCard({ photo, title }) {
  return (

    <div className="accomodation-card">
      {photo && <img src={photo} alt={title} />}
      {title && <h3>{title}</h3>}
    </div>
  );
}

export default AccommodationCard;