import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import noImg from "./images/unknown-planet.jpg";
const API = process.env.REACT_APP_API_URL;

function PlanetDetail() {
  const [planet, setPlanet] = useState([]);
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/planets/${id}`)
      .then(res => {
        setPlanet(res.data);
        if (!res.data.id) {
          navigate("/not-found");
        }
      })
      .catch(() => navigate("/not-found"));
  }, [id, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/planets/${id}`)
      .then(() => navigate(`/planets`))
      .catch((e) => console.error(e));
  };

  document.body.style.backgroundImage = `url(${planet.img_src ? planet.img_src : noImg})`;
  
  return (
    <article className="planet-page">
      <div className="planet-detail" style={{backgroundColor: `${planet.is_primary ? '#822afd40' :'#2a93fd40'}`}}>
        <div className="details">
          <h1>{planet.name}</h1>
          <p className="each-detail">
            <span>Planet Type: </span>
            <span>{planet.type}</span>
          </p>
          <p className="each-detail">
            <span>Planet Order: </span>
            <span>{planet.planet_order ? planet.planet_order : "--Data Not Provided--"}</span>
          </p>
          <p className="each-detail">
            <span>Distance From Sun: </span>
            <span>{planet.sun_distance ? planet.sun_distance : "--Data Not Provided--"}</span>
          </p>
          <p className="each-detail">
            <span>Radius: </span>
            <span>{planet.radius ? planet.radius : "--Data Not Provided--"}</span>
          </p>
          <p className="each-detail">
            <span>Length of Day: </span>
            <span>{planet.day_length ? planet.day_length : "--Data Not Provided--"}</span>
          </p>
          <p className="each-detail">
            <span>Length of Year: </span>
            <span>{planet.year_length ? planet.year_length : "--Data Not Provided--"}</span>
          </p>
          <p className="each-detail">
            <span>Number of Moons: </span>
            <span>{planet.moons >= 0 ? planet.moons : "--Data Not Provided--"}</span>
          </p>
          <br/>
          <p>{planet.description}</p>
          {planet.nasa_link &&
            <a href={planet.nasa_link} target="_blank" rel="noreferrer">
              Click here to learn more about {planet.name}
            </a>
          }
        </div>
      </div>
      <div className="show-nav">
        <div>
          {" "}
          <Link to={`/planets`}>
            <button>BACK</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/planets/${id}/edit`}>
            <button>EDIT</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>DELETE</button>
        </div>
      </div>
    </article>
  );
}

export default PlanetDetail;
