import "./detail.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { COUNTRIES_URL } from "../../store/constants";
import NavBar from "../navBar/navBar";

export default function Detail() {
  const [country, setCountry] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    axios.get(COUNTRIES_URL + "/" + id).then((res) => {
      setCountry(res.data);
    });
    console.log(country);

    return () => {
      setCountry(null);
    };
  }, []);

  return (
    <div>
      <NavBar/>
    <div className="detail">
      {country ? (
        <>
          <div>
            <img src={country.flag} alt="imagen" className="flag" />

            <h3>{country.id}</h3>
            <h3>Name: {country.name}</h3>
            <h3>Capital: {country.capital}</h3>
            <h3>Continent: {country.continent}</h3>
            <h3>Area: {country.area}</h3>
            <h3>Population: {country.population}</h3>
          </div>
          <div>
            <div>
              Activities:{" "}
              {country.activities.length ? "" : country.name + " has no activities yet"}
            </div>
            <div>
              {country.activities.map((activity) => {
                return (
                  <div>
                    <h3>{activity.name}</h3>
                    <h3>Season: {activity.season}</h3>
                    <h3>Difficulty: {activity.difficulty}</h3>
                    <h3>Duration: {activity.duration}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
    </div>
  );
}
