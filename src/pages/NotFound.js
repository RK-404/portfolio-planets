import "./NotFound.css";
import notFound from "../components/images/exclamation.jpg";

function NotFound() {

  document.body.style.backgroundImage = `url(${notFound})`;

  return (
    <div className="not-found">
      <h1>Ohh No!</h1>
      <h3>You left The Solar System! And about to leave the Galaxy!!</h3>
      <h5>Click PLANETS to go back to Our Solar System</h5>
    </div>
  );
}

export default NotFound;
