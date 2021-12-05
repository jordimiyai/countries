import {
  ADD_ACTIVITIES,
  FETCH_COUNTRIES,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  ORDER_BY,
  SEARCH_COUNTRIES,
  FETCH_ACTIVITIES,
} from "../actions";

const initialState = {
  countries: [],
  countriesNames: [],
  countriesFiltered: [],
  activities: [],
  search: [],
  order: [],
  filterCountries: [],
  filterActivities: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesFiltered: action.payload,
        countriesNames: [...action.payload].map((country) => {
          return { name: country.name, id: country.id };
        }),
      };
    case SEARCH_COUNTRIES:
      return {
        ...state,
        countriesFiltered: action.payload,
        search: action.search,
      };
    case ADD_ACTIVITIES:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    case FETCH_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    case FILTER_BY_CONTINENT:
      return {
        ...state,
        filter: action.payload,
      };
    case FILTER_BY_ACTIVITY:
      return {
        ...state,
        filter: action.payload,
      };
    case ORDER_BY:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
}
