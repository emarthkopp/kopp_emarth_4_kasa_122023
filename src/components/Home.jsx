import React from "react";
import fond_home from "../assets/fond_home.png";
import "../styles/Home.scss";
import AccommodationCard from "./AccomodationCard";
import accomodationData from "../data/accomodationData";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header--photo">
          <img src={fond_home} alt="logo" />
          <span className="home__photo--text">
            Chez vous, partout et ailleurs
          </span>
        </div>
      </div>
      <div className="home__accommodation">
        <div className="home__accommodation-cards">
          {accomodationData.map((accommodation, id) => (
            <AccommodationCard
              key={id}
              photo={accommodation.cover}
              title={accommodation.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
