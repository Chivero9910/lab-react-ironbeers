import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <img src={require("../assets/beers.png")} alt="beers" />
      <Link to={"/beers"}>Beers</Link>
      <img src={require("../assets/random-beer.png")} alt="RandomBeer" />
      <Link to={"/random-beer"}>Random Beer</Link>
      <img src={require("../assets/new-beer.png")} alt="NewBeer" />
      <Link to={"/new-beer"}>New Beer</Link>
    </div>
  );
}

export default Home;
