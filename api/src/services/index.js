const axios = require("axios");
const { Country } = require("../db");


const getCountriesFromApi = async function () {
  try {
    const countries = await axios.get("https://restcountries.com/v3/all");
    return countries.data;
  } catch (e) {
    console.log("Error getting countries", e);
  }
};

function formatCapital(capital) {
  let capitalStr = "Doesn't have a capital city";
  if (capital) {
    capitalStr = capital.join(", ");
  }
  return capitalStr;
}

// gives format to the objects as I need them for the database
const formatCountries = function (countries) {
  let formatedCountries = countries.map((country) => {
    let c = {
      id: country.cca3,
      name: country.name.common,
      flag: country.flags[0],
      capital: formatCapital(country.capital),
      continent: country.region,
      subregion: country.subregion,
      area: country.area,
      population: country.population,
    };
    return c;
  });
  return formatedCountries;
};


//saves the countries with a the format needed in the database
const createDB = async function () {
  let countriesRaw = await getCountriesFromApi();
  let formated = formatCountries(countriesRaw);
  Country.bulkCreate(formated);
  console.log('DB created')
  return;
};

// checks the database and if it's empty makes the request to the api, and informs accordingly 
const initialLoadDB = async function(){
    let countries = await Country.findAll();
    if(!countries.length){
        await createDB()
    }
}

module.exports = {
    initialLoadDB,
};
