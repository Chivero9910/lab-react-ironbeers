import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ListBeers() {
  const [list, setList] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setList(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isFetching === true) {
    return <h3>Estamos buscando entre barriles...</h3>;
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

      <div>
        {list.map((eachBeer) => {
          return (
            <div key={eachBeer._id} style={{ display: "flex", gap: "50px" }}>
              <Link to={`/beers/${eachBeer._id}`}>
                <img
                  src={eachBeer.image_url}
                  style={{ height: "250px", padding: "40px"}}
                  alt="imgBeer"
                />
              </Link>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "220px",
                  justifyContent: "center"
                }}
              >
                <h3>{eachBeer.name}</h3>
                <h5>{eachBeer.tagline}</h5>
                <p> {eachBeer.contributed_by.split("<", 1)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListBeers;
