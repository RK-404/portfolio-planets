import noImg from "./images/unknown-planet.jpg";
import { Link } from "react-router-dom";

function PlanetCard({ planet }) {
  return (
    <div to={`/planets/${planet.id}`}  className="planet-card" style={{backgroundColor: `${planet.is_primary ? '#822afd70' :'#2a93fd70'}`}}>
      <div className="planet-img">
        <img src={planet.img_src ? planet.img_src : noImg} alt={planet.name}/>
      </div>
      <div>
        <h3>
          <Link to={`/planets/${planet.id}`} >{planet.name}</Link>
        </h3>
      </div>
    </div>
  );
}

export default PlanetCard;
