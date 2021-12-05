import "./countries.css";
import React from "react";
import Country from "../country/country";

export default function Countries(props) {
  const { countries } = props;
  return (
    <div className="Countries">
      {countries.length ? (
        countries.map((country) => {
          return <Country key={country.id} country={country} />;
        })
      ) : (
        <div >
       <h3>Sorry, No countries available</h3>
        </div>
      )}
    </div>
  );
}

// pagina grande tendria que traerse los paises, hacer los filtros
