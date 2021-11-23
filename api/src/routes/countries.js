const { Router } = require("express");
const axios = require("axios");

const router = Router();

// me devuelve los datos de paises de la api

const getCountries = async function () {
  try {
    const countries = await axios.get("https://restcountries.com/v3/all");
    return countries.data;
  } catch (e) {
    console.log("Error getting countries", e);
  }
};

router.get("/", function (req, res, next) {
  res.send("soy get countries");
});

router.get("/:id", function (req, res, next) {
  res.send("soy get countries por id");
});

module.exports = router;
