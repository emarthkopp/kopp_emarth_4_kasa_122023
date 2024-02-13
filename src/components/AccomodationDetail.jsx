import React, { useState } from "react";
import { useParams } from "react-router-dom";
import accomodationData from "../data/accomodationData";
import StarRating from "./StarRating";
import Gallery from "./Gallery";
import Description from "./Description";
import Equipments from "./Equipments";
import "../styles/AccomodationDetail.scss";

function AccomodationDetail() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();
  const accommodation = accomodationData.find(
    (item) => item.id.toString() === id
  );

  if (!accommodation) {
    return <div>Hébergement non trouvé</div>;
  }

  const {
    title,
    pictures,
    host,
    rating,
    location,
    tags,
    description,
    equipments,
  } = accommodation;

  const hostFullName =
    host && host.name ? host.name : "Nom de l'hôte non disponible";
  const [hostFirstName, hostLastName] = hostFullName.split(" ");
  const hostPicture =
    host && host.picture ? host.picture : "Image de l'hôte non disponible";

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : pictures.length - 1
    );
  };

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < pictures.length - 1 ? prevIndex + 1 : 0
    );
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
        {pictures.length > 1 && (
          <p className="gallery__index">
            {currentIndex + 1}/{pictures.length}
          </p>
        )}
      </div>

      <div className="detail__content">
        <div className="detail__content--name">
          <div className="detail__content--title">{title}</div>
          <div className="detail__content--location">{location}</div>
          <div className="detail__content--tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="detail__content--infoHost">
          <div className="detail__content--host">
            <div className="detail__content--hostInfo">
              <p className="detail__content--hostName">{hostFirstName}</p>
              <p className="detail__content--hostName">{hostLastName}</p>
            </div>
            <img
              className="detail__content--hostPicture"
              src={hostPicture}
              alt="Votre hôte"
            />
          </div>
          <div className="detail__content--rating">
            <StarRating score={rating} />
          </div>
        </div>
      </div>
      <div className="detail__infoContainer">
        <Description description={description} />
        <Equipments equipments={equipments} />
      </div>
    </div>
  );
}

export default AccomodationDetail;
