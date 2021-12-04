import {React, useEffect } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../store/actions";
import Countries from "../countries/countries";
import NavBar from '../navBar/navBar'

export default function Home() {
  let allCountries = useSelector((state) => state.countries);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <div>
      <NavBar/>
      <Countries key={allCountries.id} countries={allCountries} />
      <div>
        <select>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
        </select>
      </div>
      <div>
        <select>
        <option value="all">all</option>
        <option value="africa">africa</option>
        <option value="america">america</option>
        <option value="asia">asia</option>
        <option value="europa">europa</option>
        <option value="europa"> </option>
        </select>
      </div>
    </div>
  );
}
