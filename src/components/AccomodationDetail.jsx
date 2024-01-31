import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import accomodationData from '../data/accomodationData';
import StarRating from './StarRating';
import Gallery from './Gallery'; 
import Description from './Description';
import Equipments from './Equipments';
import '../styles/AccomodationDetail.scss';

function AccomodationDetail() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();
  const accommodation = accomodationData.find((item) => item.id.toString() === id);

  if (!accommodation) {
    return <div>Hébergement non trouvé</div>;
  }

  const { title, pictures, host, rating, location, tags, description, equipments } = accommodation;

  const hostFullName = host && host.name ? host.name : "Nom de l'hôte non disponible";
  const [hostFirstName, hostLastName] = hostFullName.split(" ");
  const hostPicture = host && host.picture ? host.picture : "Image de l'hôte non disponible";


  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : pictures.length - 1));
  };

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < pictures.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="detail">
      <div className="detail__photo">
        <Gallery
          pictures={pictures}
          currentIndex={currentIndex}
          handleClickPrev={handleClickPrev}
          handleClickNext={handleClickNext}
        />
        <p className="gallery__index">{currentIndex + 1}/{pictures.length}</p>
      </div>
      <div className="detail__content">
        <div>
          <h2 className="detail__title">{title}</h2>
          <p className="detail__location">{location}</p>
        </div>
        <div className="detail__host">
          <div className="host-info">
            <p className="detail__host--name">{hostFirstName}</p>
            <p className="detail__host--name">{hostLastName}</p>
          </div>
          <img className="host-picture" src={hostPicture} alt="Votre hôte" />
        </div>
      </div>
      <div className="detail__rating">
        <StarRating score={rating} />
      </div>
      <div className="detail__tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="detail__info-container">
        <Description description={description} />
        <Equipments equipments={equipments} />
      </div>
    </div>
  );
}

export default AccomodationDetail;
