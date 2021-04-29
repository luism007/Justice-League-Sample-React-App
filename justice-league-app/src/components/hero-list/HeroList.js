import React from "react";
import { render } from "react-dom";
import CrossComponentCommService from "../../services/cross-component-comm-service";
import HeroCard from "../hero-card/HeroCard";
import "./HeroListStyles.css";

class HeroList extends React.Component {
  // Mounting Lifecycle Methods in Order
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { heroList: [] };

    // Setup the my own custom methods to use.

    this.getHeroes = this.getHeroes.bind(this);
    this.clickedHero = this.clickedHero.bind(this);
  }

  // This is called as soon as a component is placed in the DOM.
  // Any initialization of data being received from a remote endpoint ...
  // ... be placed here.
  componentDidMount() {
    // Makes call to get heroes!
    this.getHeroes();
  }

  // Unmounting Lifecycle Methods
  // This method is called when the component is removed from the DOM
  componentWillUnmount() {}

  // User-defined methods
  getHeroes() {
    fetch("http://localhost:4001/heroes", () => {})
      .then((response) => response.json())
      .then((response) => {
        this.setState({ heroList: response });
      })
      .catch((error) => {
        alert("No Heroes :( ");
      });
  }

  clickedHero(hero) {
    CrossComponentCommService.updateHeroSubject(hero);
  }

  // this is the only method you must define in a React.Component
  render() {
    return (
      <div className="hero-list-container">
        {this.state.heroList.map((hero, index) => (
          <div
            key={index}
            onClick={() => {
              this.clickedHero(hero);
            }}
            className="hero-card-holder"
          >
            <HeroCard id={index} heroName={hero.name}></HeroCard>
          </div>
        ))}
      </div>
    );
  }
}

export default HeroList;
