import noImg from "./images/unknown-planet.jpg";
import { Link } from "react-router-dom";

function PlanetCard({ planet }) {
  return (
    <Link to={`/planets/${planet.id}`} >
      <div className="planet-card" style={{backgroundColor: `${planet.is_primary ? '#822afd70' :'#2a93fd70'}`}}>
        <div className="planet-img">
          <img src={planet.img_src ? planet.img_src : noImg} alt={planet.name}/>
        </div>
        <h3>{planet.name}</h3>
      </div>
    </Link>
  );
}

export default PlanetCard;
