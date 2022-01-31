import React, { useState, useEffect } from "react";

// Your eventual challenge is to make a React app integrate with the REST Countries API to fetch country data and display it like in the designs provided by frontendmentor.io.

// Write a react app to present the list of countries as shown in the frontend mentor challenge.

function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {countries.map((country, index) => (
        <div className="col" key={index}>
          <div className="card h-100">
            <img
              src={country.flag}
              className="card-img-top"
              alt={country.name}
            />
            <div className="card-body">
              <h5 className="card-title">{country.name}</h5>
              <p className="card-text">
                Population: {country.population.toLocaleString()}
              </p>
              <p className="card-text">Region: {country.region}</p>
              <p className="card-text">Capital: {country.capital}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Countries;
