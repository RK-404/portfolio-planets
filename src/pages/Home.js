import './Home.css';
import bg from "../components/images/planets.jpg";

function Home() {

  document.body.style.backgroundImage = `url(${bg})`;

  return (
    <div className="Home">
      <h1>☀️ Welcome, let's explore our Solar System! ☀️</h1>
    </div>
  );
}
  
export default Home;
  