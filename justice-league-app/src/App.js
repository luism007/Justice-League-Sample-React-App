import logo from "./logo.svg";
import "./App.css";
import HeroList from "./components/hero-list/HeroList";
import HeroInfo from "./components/hero-info/HeroInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <HeroInfo></HeroInfo>
      <HeroList></HeroList>
    </div>
  );
}

export default App;
