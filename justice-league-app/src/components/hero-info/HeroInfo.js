import React, { useEffect, useState } from "react";
import CrossComponentCommService from "../../services/cross-component-comm-service";
import "./HeroInfoStyles.css";

class HeroInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: {},
    };

    this.getClickedHero = this.getClickedHero.bind(this);
    this.renderHeroImage = this.renderHeroImage.bind(this);
    this.renderHeroBackgroundImage = this.renderHeroBackgroundImage.bind(this);
  }

  componentDidMount() {
    this.getClickedHero();
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log("Previous State", prevState);
  //   console.log("Current State", this.state);

  //   if (prevState.hero._id !== this.state.hero._id) {
  //     console.log("Update This Component");
  //   }
  // }

  componentWillUnmount() {
    this.subscription$.unsubscribe();
    console.log("Destory This Component");
  }

  getClickedHero() {
    this.subscription$ = CrossComponentCommService.getHeroSubject().subscribe(
      (clickedHero) => {
        this.setState({ hero: clickedHero });
      }
    );
  }

  renderHeroImage(heroName) {
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
  }

  renderHeroBackgroundImage = (heroName) => {
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

  render() {
    return (
      <div
        className="hero-info-container"
        style={{
          backgroundColor: `${this.renderHeroBackgroundImage(
            this.state.hero.name
          )}`,
        }}
      >
        <div className="side-panel-container">
          <div className="hero-image-container">
            <img
              className="hero-image"
              src={this.renderHeroImage(this.state.hero.name)}
            ></img>
          </div>
        </div>
        <div className="side-panel-container">
          <div className="hero-name-container">
            <p className="hero-name"> {this.state.hero.name}</p>
          </div>
          <div className="hero-secret-identity-container">
            <p className="hero-secret-identity">
              Name: {this.state.hero.secretIdentity}
            </p>
          </div>
          <div className="hero-birth-place-container">
            <p className="hero-birth-place">
              Birthplace: {this.state.hero.birthPlace}
            </p>
          </div>
          <div className="hero-bio-container">
            <p className="hero-bio">Bio: {this.state.hero.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroInfo;
