import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";    
import { useState, useEffect } from "react";

const API = process.env.REACT_APP_API_URL;

function EditPlanet() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [planet, setPlanet] = useState({
    name: "",
    type: "",
    planet_order: "",
    sun_distance: "",
    radius: "",
    day_length: "",
    year_length: "",
    moons: "",
    description: "",
    nasa_link: "",
    img_src: "",
    is_primary: false,
  });

  const updatePlanet = (updatedPlanet) => {
    axios
      .put(`${API}/planets/${id}`, updatedPlanet)
      .then(() => {
          navigate(`/planets/${id}`);
        },
        (error) => console.error(error))
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setPlanet({ ...planet, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setPlanet({ ...planet, [event.target.id]: Number(event.target.value) });
  };

  const handleCheckboxChange = () => {
    setPlanet({ ...planet, is_primary: !planet.is_primary });
  };

  useEffect(() => {
    axios
      .get(`${API}/planets/${id}`)
      .then(
        (response) => setPlanet(response.data),
        (error) => navigate(`/not-found`)
      );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    planet.planet_order = planet.planet_order === "" ? -1 : planet.planet_order;
    planet.moons = planet.moons === "" ? -1 : planet.moons;
    updatePlanet(planet, id);
  };

  return (
    <div className="NewEdit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Planet Name (Required):</label>
        <input
          id="name"
          value={planet.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of the Planet"
          required
        />
        <label htmlFor="type">Planet Type (Required):</label>
        <input
          id="type"
          type="text"
          value={planet.type}
          onChange={handleTextChange}
          placeholder="Planet Type?"
          required
        />
        <label htmlFor="planet_order">Planet Order in the Solar System (Numbers only):</label>
        <input
          id="planet_order"
          type="number"
          value={planet.planet_order}
          onChange={handleNumberChange}
          placeholder="Planet Order in the Solar System (nummer only)"
        />
        <label htmlFor="sun_distance">Distance from Sun:</label>
        <input
          id="sun_distance"
          type="text"
          value={planet.sun_distance}
          onChange={handleTextChange}
          placeholder="Distance from Sun"
        />
        <label htmlFor="radius">Radius of the Planet:</label>
        <input
          id="radius"
          type="text"
          value={planet.radius}
          onChange={handleTextChange}
          placeholder="Radius of the Planet"
        />
        <label htmlFor="day_length">Length of a Day (in Earth's time):</label>
        <input
          id="day_length"
          type="text"
          value={planet.day_length}
          onChange={handleTextChange}
          placeholder="Length of a Day (in Earth's time)"
        />
        <label htmlFor="year_length">Length of a Year (in Earth's time):</label>
        <input
          id="year_length"
          type="text"
          value={planet.year_length}
          onChange={handleTextChange}
          placeholder="Length of a Year (in Earth's time)"
        />
        <label htmlFor="moons">Number of Moons:</label>
        <input
          id="moons"
          type="number"
          value={planet.moons}
          onChange={handleNumberChange}
          placeholder="Number of Moons (nummer only)"
        />
        <label htmlFor="description">Short Description (optional):</label>
        <input
          id="description"
          type="text"
          value={planet.description}
          onChange={handleTextChange}
          placeholder="Short Description (optional)"
        />
        <label htmlFor="nasa_link">Website link of NASA or the info source (optional):</label>
        <input
          id="nasa_link"
          type="url"
          value={planet.nasa_link}
          onChange={handleTextChange}
          placeholder="Website link of NASA or the info source (optional)"
        />
        <label htmlFor="img_src">Planet image source link:</label>
        <input
          id="img_src"
          type="url"
          value={planet.img_src}
          onChange={handleTextChange}
          placeholder="Planet image source link"
        />
        <label htmlFor="is_primary">Check this box if it's a primary Planet: </label>
        <input
          id="is_primary"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={planet.is_primary}
        />
        <br />
        <input type="submit" value="SUBMIT"/>
      </form>
      <Link to={`/planets/${id}`}>
        <button>BACK</button>
      </Link>
    </div>
  );
}

export default EditPlanet;
