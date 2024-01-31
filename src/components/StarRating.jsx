import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/StarRating.scss';

const StarRating = ({ score }) => {
  const clampedScore = Math.min(5, Math.max(0, score));

  const fullStars = Math.floor(clampedScore);
  const emptyStars = 5 - fullStars;

  const stars = Array.from({ length: fullStars }, (_, index) => (
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
