import { useEffect, useState } from "react";
import axios from "axios";

export default function XCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    // fetch method
    //     fetch("https://restcountries.com/v3.1/all")
    //       .then((res) => res.json())
    //       .then((data) => setCountries(data))
    //       .catch((err) => console.log("Error fetching API"));
    //   });

    // axios method
    // axios
    //   .get("https://restcountries.com/v3.1/all")
    //   .then((response) => {
    //     setCountries(response.data);
    //   })
    //   .catch((error) => {
    //     console.log("Error in fetching data - axios");
    //   });

    // async/ await
    async function fetchData() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log("error in async/ await");
      }
    }
    fetchData();
  });

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  };
  const cardStyle = {
    width: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
  };
  const cardImgStyle = {
    objectfit: "contain",
    width: "100px",
    height: "100px",
  };
  return (
    <div style={containerStyle}>
      {countries.map((country) => (
        <div style={cardStyle}>
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            style={cardImgStyle}
          />
          <h2 style={{ textAlign: "center" }}>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}
