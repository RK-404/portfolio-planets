import "./Index.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AllPlanets from "../components/AllPlanets";
import bg from "../components/images/planets.jpg";

const API = process.env.REACT_APP_API_URL;

function Index() {
  const [allPlanets, setAllPlanets] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/planets`)
      .then((response) => setAllPlanets(response.data))
      .catch((e) => console.error("catch", e));
  }, []);


  document.body.style.backgroundImage = `url(${bg})`;
  
  return (
    <div className="Index">
      <div className="inner">
        <h2>Total Listed Planets: {allPlanets.length}</h2>
        <Link to="/planets/new" className="header-link">
          <button className="new-btn">ADD A PLANET</button>
        </Link>
      </div>
      <AllPlanets allPlanets={allPlanets} />
    </div>
  );
}

export default Index;
