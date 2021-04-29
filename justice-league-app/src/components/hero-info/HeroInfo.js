import React, { useEffect, useState } from "react";
import CrossComponentCommService from "../../services/cross-component-comm-service";
import "./HeroInfoStyles.css";
const HeroInfo = (props) => {
  const [hero, setHero] = useState({});

  useEffect(() => {
    getClickedHero();
  }, []);

  const getClickedHero = () => {
    CrossComponentCommService.getHeroSubject().subscribe((clickedHero) => {
      setHero(clickedHero);
    });
  };

  return (
    <div
      className="hero-info-container"
      style={{ backgroundColor: `${renderHeroBackgroundImage(hero.name)}` }}
    >
      <div className="side-panel-container">
        <div className="hero-image-container">
          <img className="hero-image" src={renderHeroImage(hero.name)}></img>
        </div>
      </div>
      <div className="side-panel-container">
        <div className="hero-name-container">
          <p className="hero-name"> {hero.name}</p>
        </div>
        <div className="hero-secret-identity-container">
          <p className="hero-secret-identity">Name: {hero.secretIdentity}</p>
        </div>
        <div className="hero-birth-place-container">
          <p className="hero-birth-place">Birthplace: {hero.birthPlace}</p>
        </div>
        <div className="hero-bio-container">
          <p className="hero-bio">Bio: {hero.bio}</p>
        </div>
      </div>
    </div>
  );
};

const renderHeroBackgroundImage = (heroName) => {
  switch (heroName) {
    case "Aquaman":
      return "teal";
    case "Batman":
      return "rgb(13,13,0)";
    case "Cyborg":
      return "slategrey";
    case "The Flash":
      return "darkred";
    case "Superman":
      return "midnightblue";
    case "Wonder Woman":
      return "goldenrod";
    default:
      return "steelblue";
  }
};

const renderHeroImage = (heroName) => {
  switch (heroName) {
    case "Aquaman":
      return "/assets/images/aquaman-pic.png";
    case "Batman":
      return "/assets/images/batman-pic.png";
    case "Cyborg":
      return "/assets/images/cyborg-pic.png";
    case "The Flash":
      return "/assets/images/the-flash-pic.png";
    case "Superman":
      return "/assets/images/superman-pic.png";
    case "Wonder Woman":
      return "assets/images/wonderwoman-pic.jpg";
    default:
      return "assets/images/justice-league-pic.jpg";
  }
};

export default HeroInfo;
