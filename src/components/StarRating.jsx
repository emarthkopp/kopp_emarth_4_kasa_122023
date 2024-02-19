import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/StarRating.scss';

const StarRating = ({ score }) => {
   // Clamp du score entre 0 et 5 pour éviter des valeurs invalides
  const clampedScore = Math.min(5, Math.max(0, score));

    // Calcul du nombre d'étoiles pleines et vides
  const fullStars = Math.floor(clampedScore);
  const emptyStars = 5 - fullStars;

  const stars = Array.from({ length: fullStars }, (_, index) => (
      // Pour chaque étoile pleine, on crée un span avec la classe "full-star"
    <span key={index} className="star full-star">
      <FontAwesomeIcon icon={faStar} />
    </span>
  )).concat(
    Array.from({ length: emptyStars }, (_, index) => (
      <span key={index + fullStars} className="star">
        <FontAwesomeIcon icon={faStar} />
      </span>
    ))
  );

  return (
    <div className="star-rating">
      {stars}
    </div>
  );
};

export default StarRating;
