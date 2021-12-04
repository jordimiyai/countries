import {React, useEffect, useState } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, filterByContinent, orderBy } from "../../store/actions";
import Countries from "../countries/countries";
import NavBar from '../navBar/navBar'
import PageNumbers from "../pageNumbers/pageNumbers";
import { ASC, DESC, H_POPULATION, L_POPULATION } from "../../store/constants";


export default function Home() {
  let allCountries = useSelector((state) => state.countriesFiltered);

  const [ currentPage, setCurrentPage ] = useState(1);
  const [ countriesPerPage, setCountriesPerPage ] = useState(10);
  const lastCountryIndex =  (currentPage===1)? 9 : ((currentPage * countriesPerPage ))
  const firstCountryIndex = (currentPage===1) ? 0 : lastCountryIndex - countriesPerPage;
  const currentCountries = allCountries.slice(firstCountryIndex, lastCountryIndex);
  const grid = (pageNumber)=>{
    setCurrentPage(pageNumber)
    console.log(pageNumber)
  }

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

function handleContinentFilter(e){
  dispatch(filterByContinent(e.target.value))
}

function handleOrderBy(e){
  dispatch(orderBy(e.target.value))
}

  return (
    <div>
      <NavBar/>
      <div>
        <select onChange={handleOrderBy}>
        <option selected value="">Order By...</option>
        <option value={ASC}>Ascendent</option>
        <option value={DESC}>Descendent</option>
        <option value={L_POPULATION}>Lowest Population</option>
        <option value={H_POPULATION}>Highest Population</option>
        </select>
      </div>
      <div>
        <select onChange={handleContinentFilter}>
        <option value="all">All Continents</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania </option>
        <option value="Antarctic">Antarctic </option>

        
        </select>
      </div>

      

      <Countries key={currentCountries.id} countries={currentCountries} />
      <PageNumbers allCountries={allCountries} grid={grid} countriesPerPage={countriesPerPage}/>
    </div>
  );
}
