import { ASC, DESC, H_POPULATION, L_POPULATION } from "../../store/constants";

export function orderCountries(countries, orderType) {
  if (orderType === ASC || orderType === DESC) {
    countries.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return orderType === ASC ? 1 : -1;
      }
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return orderType === DESC ? 1 : -1;
      }
      return 0;
    });
  } else if (
    orderType === H_POPULATION ||
    orderType === L_POPULATION
  ) {
    countries.sort((a, b) => {
      if (a.population > b.population) {
        return orderType === L_POPULATION ? 1 : -1;
      }
      if (a.population < b.population) {
        return orderType === H_POPULATION ? 1 : -1;
      }
      return 0;
    });
  }

  return countries;
}


export function filterContinent (countries, continent) {
  return countries.filter((country)=> country.continent === continent)
}
export function filterActivity (countries, activity) {
  return countries.filter((country)=> country.activity === activity)
}
