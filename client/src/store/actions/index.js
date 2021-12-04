import axios from "axios";
import { ACTIVITY_URL, COUNTRIES_URL } from "../constants";
export const FETCH_COUNTRIES = "FETCH_COUNTRIES";
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const ADD_ACTIVITIES = 'ADD_ACTIVITIES';


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

export function searchCountry(name){
  return function(dispatch){
      axios.get(COUNTRIES_URL + "?name=" + name)
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

export function addActivity(payload){
  return async function(dispatch){
    try {
      console.log(payload)
      await axios.post(ACTIVITY_URL, payload)
      dispatch({
        type: ADD_ACTIVITIES
      })

    } catch (error) {
      console.log(error)
    }
  }
}