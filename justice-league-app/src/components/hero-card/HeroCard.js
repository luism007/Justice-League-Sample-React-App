import "./HeroCardStyles.css";

const HeroCard = (props) => {
  return (
    <div key={props.id} className="hero-box-container">
      <div
        className="hero-logo"
        style={{ backgroundImage: `url(${renderHeroLogo(props.heroName)})` }}
      ></div>
      <p className="hero-name"> {props.heroName} </p>
    </div>
  );
};

const renderHeroLogo = (heroName) => {
  switch (heroName) {
    case "Aquaman":
      return "/assets/images/aquaman-logo.png";
    case "Batman":
      return "/assets/images/batman-logo";
    case "Cyborg":
      return "/assets/images/cyborg-logo.png";
    case "The Flash":
      return "/assets/images/flash-logo.png";
    case "Superman":
      return "/assets/images/superman-logo.png";
    case "Wonder Woman":
      return "assets/images/wonder-woman-logo.png";
    default:
      return "/assets/images/wonder-woman-logo.png";
  }
};

export default HeroCard;
