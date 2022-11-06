import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function SingleBeer() {
  const { beerId } = useParams();

  const [details, setDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      // actualizar estado
      setDetails(response.data);
      setIsFetching(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // loading
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
        <img src={details.image_url} alt="img-beer" height={250} />
        <div>
          <h2>{details.name}</h2>
          <div>
            <p style={{ fontWeight: "bold" }}>{details.first_brewed}</p>
            <p>{details.attenuation_level}</p>
          </div>
          <h5>{details.tagline}</h5>
          <p>{details.description}</p>
          <p>{details.contributed_by.split("<", 1)}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleBeer;
