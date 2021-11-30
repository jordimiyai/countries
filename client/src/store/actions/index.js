import axios from "axios";
import { COUNTRIES_URL } from "../constants";
export const FETCH_COUNTRIES = "FETCH_COUNTRIES";
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';


export function fetchCountries() {
  return function (dispatch) {
    axios.get(`${COUNTRIES_URL}`).then((countries) => {
      dispatch({
        type: FETCH_COUNTRIES,
        payload: countries.data,
      });
    })
    .catch((error)=> {
      console.log(error)
    })
  };
}

export function findCountry(search){
  return function(dispatch){
      axios.get(COUNTRIES_URL + "?title=" + search)
      .then((countries) => {
          dispatch({
              type: SEARCH_COUNTRIES, 
              payload: countries.data
          })
      })
      .catch((error)=> {
          console.log(error)
      })
  }
}