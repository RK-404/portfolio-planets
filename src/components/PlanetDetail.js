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
        <div className="detail">
          <h1>{planet.name}</h1>
          <p><span>Planet Type:</span> {planet.type}</p>
          <p><span>Planet Order:</span> {planet.planet_order ? planet.planet_order : "--No Data Provided--"}</p>
          <p><span>Distance From Sun:</span> {planet.sun_distance ? planet.sun_distance : "--No Data Provided--"}</p>
          <p><span>Radius:</span> {planet.radius ? planet.radius : "--No Data Provided--"}</p>
          <p><span>Length of Day:</span> {planet.day_length ? planet.day_length : "--No Data Provided--"}</p>
          <p><span>Length of Year:</span> {planet.year_length ? planet.year_length : "--No Data Provided--"}</p>
          <p><span>Number of Moons:</span> {planet.moons >= 0 ? planet.moons : "--No Data Provided--"}</p>
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
