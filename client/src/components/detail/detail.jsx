import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { COUNTRIES_URL } from "../../store/constants";

export default function Detail() {
  const [country, setCountry] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    axios.get(COUNTRIES_URL + "/" + id).then((res) => {
      setCountry(res.data);
    });
    return () => {
      setCountry(null);
    };
  }, []);

  return (
    <div className="detail">
      {country ? (
        <>
          <img src={country.flag} alt="imagen" className="flag" />

          <h3>{country.id}</h3>
          <h3>Name: {country.name}</h3>
          <h3>Capital: {country.capital}</h3>
          <h3>Continent: {country.continent}</h3>
          <h3>Area: {country.area}</h3>
          <h3>Population: {country.population}</h3>
          <h3>Activities: {country.activities}</h3>

        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
