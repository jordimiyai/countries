import { ADD_ACTIVITIES, FETCH_COUNTRIES, SEARCH_COUNTRIES } from "../actions";

const initialState = {
  countries: [],
  countriesNames:[],
  countriesFiltered: [],


};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesFiltered: action.payload,
        countriesNames: [...action.payload].map((country)=>{ return ({'name':country.name, 'id':country.id})}),
      };
    case SEARCH_COUNTRIES:
      return {
        ...state,
        countriesFiltered: action.payload,
      };    
      case ADD_ACTIVITIES:
      return {
        ...state,
      };
    default:
      return state;
  }
}
