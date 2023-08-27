import { Link } from "react-router-dom";
import logo from "./images/solar-system.png";

export default function Header() {

  return (
    <nav>
      <img src={logo} alt="App Logo"/>
      <div className="nav-bar">
        <h1><Link to="/" className="header-link">HOME</Link></h1>
        <h1><Link to="/planets" className="header-link">PLANETS</Link></h1>
      </div>
    </nav>
  );
}
