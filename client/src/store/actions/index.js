import axios from "axios";
import { ACTIVITY_URL, COUNTRIES_URL } from "../constants";
export const FETCH_COUNTRIES = "FETCH_COUNTRIES";
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const ADD_ACTIVITIES = 'ADD_ACTIVITIES';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY';

export const ORDER_BY = 'ORDER_BY';


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
              payload: countries.data,
              search: name,
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

export function fetchActivities() {
  return function (dispatch) {
    axios.get(`${ACTIVITY_URL}`).then((activity) => {
      dispatch({
        type: FETCH_ACTIVITIES,
        payload: activity.data,
      });
    })
    .catch((error)=> {
      console.log(error)
    })
  };
}

export function filterByContinent(payload){
  return{
    type: FILTER_BY_CONTINENT,
    payload
  }
}
export function filterByActivity(payload){
  return{
    type: FILTER_BY_ACTIVITY,
    payload
  }
}

export function orderBy(payload){
  return{
    type: ORDER_BY,
    payload
  }
}