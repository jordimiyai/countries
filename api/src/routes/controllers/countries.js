const { Country, Activity } = require("../../db");
const { Op } = require("sequelize");

const formatCard = function (countries) {
  countries.map((c) => {
    ({
      name: c.name,
      continent: c.continent,
      flag: c.flag,
      id: c.id,
    });
  });
  return countries;
};

const hasQuery = function (name) {
  return name ? { where: { name: { [Op.iLike]: "%" + name + "%" } } } : {};
};

const getCountriesDB = function (req, res, next) {
  const { name } = req.query;
  try {
    Country.findAll(hasQuery(name)).then((response) => {
      let countries = response ? formatCard(response) : "No matches found";
      res.status(200).json(countries);
    });
  } catch (error) {
    next(error);
  }
};

//search the countries by id on the database
const getCountriesById = function (req, res, next) {
  const { id } = req.params;
  try {
    let countryById = Country.findByPk(id.toUpperCase(), {
      include: [
        {
          model: Activity,
        },
      ],
      attributes: {
        exclude: ["country_activity"],
      },
    });

    countryById.then((resp) => {
      if (!resp) {
        resp = "No matches found for that ID";
      }
      res.send(resp);
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCountriesDB,
  getCountriesById,
};
