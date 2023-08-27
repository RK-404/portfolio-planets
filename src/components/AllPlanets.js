import PlanetCard from "./PlanetCard";

function AllPlanets({ allPlanets }) {
  return (
    <div className="all-planets">
      {allPlanets.map(planet =>
        <PlanetCard key={planet.id} planet={planet}/>
      )}
    </div>
  );
}

export default AllPlanets;
