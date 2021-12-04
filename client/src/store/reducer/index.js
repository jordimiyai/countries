import { ADD_ACTIVITIES, FETCH_COUNTRIES, FILTER_BY_CONTINENT, ORDER_BY, SEARCH_COUNTRIES } from "../actions";
import { ASC, DESC, H_POPULATION, L_POPULATION } from "../constants";

const initialState = {
  countries: [],
  countriesNames:[],
  countriesFiltered: [],
  actions: [],

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
      case FILTER_BY_CONTINENT:
        const allCountries = state.countries;
        const countriesByContinent = action.payload === 'all' ? allCountries : allCountries.filter(country => country.continent === action.payload)
      return {
        ...state,
        countriesFiltered: countriesByContinent,
      };
      case ORDER_BY:
        let orderedCountries = [...state.countries];
        if(action.payload === ASC || action.payload === DESC){
        orderedCountries.sort((a, b) => {
            if (a.name.toLowerCase()  > b.name.toLowerCase() ) {
              return action.payload === ASC ? 1 : -1;
            }
            if (a.name.toLowerCase()  < b.name.toLowerCase() ) {
              return action.payload === DESC ? 1 : -1;
            }
            return 0;
          });
        } else if(action.payload === H_POPULATION || action.payload === L_POPULATION){
          orderedCountries.sort((a, b) => {
            if (a.population > b.population  ) {
              return action.payload === L_POPULATION ? 1 : -1;
            }
            if (a.population < b.population  ) {
              return action.payload === H_POPULATION ? 1 : -1;
            }
            return 0;
          });
        }
        return {
          ...state,
          countriesFiltered: orderedCountries,
        };   
    default:
      return state;
  }
}
