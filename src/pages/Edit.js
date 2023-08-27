import EditPlanet from "../components/EditPlanet";
import bg from "../components/images/planets.jpg";

function Edit() {

  document.body.style.backgroundImage = `url(${bg})`;
  
  return (
    <div className="Edit">
      <div className="inner">
        <h2>Edit Planet</h2>
      </div>
      <EditPlanet />
    </div>
  );
}

export default Edit;
