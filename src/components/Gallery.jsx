import React from 'react';
import '../styles/Gallery.scss';

const Gallery = ({ pictures, currentIndex, handleClickPrev, handleClickNext }) => {
  const showNav = pictures.length > 1;// Vérifie s'il y a plus d'une image à afficher dans la galerie

  return (
    <div className="gallery">
      {showNav && (
        <div className="gallery__nav" onClick={handleClickPrev}>
          &lt; {/* gauche */}
        </div>
      )}
      <div className="gallery__content">
        <img src={pictures[currentIndex]} alt="vue du logement" />
      </div>
      {showNav && (
        <div className="gallery__nav" onClick={handleClickNext}>
          &gt; {/* droit */}
        </div>
      )}
    </div>
  );
};

export default Gallery;



