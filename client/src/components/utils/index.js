
export default function orderBy(){
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
}