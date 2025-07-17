import React from "react";

const countries = [
  { name: "India", capital: "New Delhi" },
  { name: "USA", capital: "Washington, D.C." },
  { name: "Canada", capital: "Ottawa" },
  { name: "Italy", capital: "Rome" },
  { name: "Japan", capital: "Tokyo" }
];

const Country = () => {
  return (
    <div>
      <h1>Country and Capitals</h1>
      <div className="shape">
        <ul>
          {countries.map((country, index) => (
            <li key={index}>{country.name}: {country.capital}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Country;