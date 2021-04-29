import React, { useState, useEffect } from "react";
import CrossComponentCommService from "../../services/cross-component-comm-service";
import HeroCard from "../hero-card/HeroCard";
import "./HeroListStyles.css";

const {
  REACT_APP_SERVER_URL,
  REACT_APP_SERVER_HOST,
  REACT_APP_SERVER_PORT,
} = process.env;

const HeroList = (props) => {
  const [heroList, setHeroList] = useState([]);

  useEffect(() => {
    getHeroes();
  }, []);

  const getHeroes = () => {
    fetch(
      `${REACT_APP_SERVER_URL}${REACT_APP_SERVER_HOST}${REACT_APP_SERVER_PORT}/heroes`,
      () => {}
    )
      .then((response) => response.json())
      .then((response) => {
        setHeroList([...response]);
      });
  };

  const clickedHero = (hero) => {
    CrossComponentCommService.updateHeroSubject(hero);
  };

  return (
    <div className="hero-list-container">
      {heroList.map((hero, index) => (
        <div
          key={index}
          onClick={() => {
            clickedHero(hero);
          }}
          className="hero-card-holder"
        >
          <HeroCard id={index} heroName={hero.name}></HeroCard>
        </div>
      ))}
    </div>
  );
};

export default HeroList;
