import {React, useEffect, useState } from "react";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, filterByActivity, filterByContinent } from "../../store/actions";
import Countries from "../countries/countries";
import NavBar from '../navBar/navBar'
import PageNumbers from "../pageNumbers/pageNumbers";
import { orderCountries, filterActivity, filterContinent } from "../utils";



export default function Home() {
  let allCountries = useSelector((state) => state.countries);
  let dispatch = useDispatch();
  const [displayCountries, setDisplayCountries] = useState([])
  const [order, setOrder] = useSelector((state) => state.order);
  const [filterCountries, setFilterCountries] = useSelector((state) => state.filterCountries);
  const [filterActivities, setfilterActivities] = useSelector((state) => state.filterActivities);


  useEffect(()=> {
    dispatch(fetchCountries());
    }, []);

  useEffect( ()=> {
    setDisplayCountries(allCountries)
  }, [allCountries])


  useEffect(() => {
    let countriesToShow = [...allCountries];
    if(filterActivities){
      countriesToShow = filterActivity(countriesToShow, filterActivities)
    } 
    if(filterCountries){
      countriesToShow = filterContinent(countriesToShow, filterCountries)
    } 
    if(order){
      countriesToShow = orderCountries(countriesToShow, order)
    }
    setDisplayCountries(countriesToShow)
    }, [filterActivities, filterCountries, order])





  const [ currentPage, setCurrentPage ] = useState(1);
  const [ countriesPerPage, setCountriesPerPage ] = useState(10);
  const lastCountryIndex =  (currentPage===1)? 9 : ((currentPage * countriesPerPage ))
  const firstCountryIndex = (currentPage===1) ? 0 : lastCountryIndex - countriesPerPage;
  const currentCountries = displayCountries.slice(firstCountryIndex, lastCountryIndex);
  
  const grid = (pageNumber)=>{
    setCurrentPage(pageNumber)
    console.log(pageNumber)
  }

  return (
    <div>
      <NavBar/>


      <Countries key={currentCountries.id} countries={currentCountries} />
      <PageNumbers allCountries={allCountries} grid={grid} countriesPerPage={countriesPerPage}/>
    </div>
  );
}
