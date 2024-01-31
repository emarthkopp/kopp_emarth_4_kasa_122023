import React, { useState } from 'react';
import '../styles/Gallery.scss';

const Gallery = ({ pictures, currentIndex, handleClickPrev, handleClickNext }) => {
  return (
    <div className="gallery">
      <div className="gallery__nav" onClick={handleClickPrev}>
        &lt; {/* gauche */}
      </div>
      <div className="gallery__content">
        <img src={pictures[currentIndex]} alt="vue du logement" />
      </div>
      <div className="gallery__nav" onClick={handleClickNext}>
        &gt; {/* droit */}
      </div>
    </div>
  );
};

export default Gallery;





