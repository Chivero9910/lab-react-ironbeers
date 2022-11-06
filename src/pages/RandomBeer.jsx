import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function RandomBeer() {
  const [beer, setBeer] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      console.log(response.data);
      setBeer(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isFetching === true) {
    return <h3>Buscando entre barriles...</h3>;
  }

  return (
    <div>
      <nav
        style={{
          backgroundColor: "lightblue",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to={"/"}>
          <p>Home</p>
        </Link>
      </nav>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "25px",
        }}
      >
        <img src={beer.image_url} alt="img-beer" height={250} />
        <div>
          <h2>{beer.name}</h2>
          <div>
            <p style={{ fontWeight: "bold" }}>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
          </div>
          <h5>{beer.tagline}</h5>
          <p></p>
          <p>{beer.description}</p>
          <p>{beer.contributed_by.split("<", 1)}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomBeer;
