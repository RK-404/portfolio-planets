import "./New.css";
import NewPlanet from "../components/NewPlanet";
import bg from "../components/images/planets.jpg";

function New() {

  document.body.style.backgroundImage = `url(${bg})`;
  
  return (
    <div className="New">
      <div className="inner">
        <h2>Add a New Planet</h2>
      </div>
      <NewPlanet />
    </div>
  );
}

export default New;
