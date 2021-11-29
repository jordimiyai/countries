const { Router } = require("express");
const router = Router();
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const { getCountriesDB, getCountriesById } = require("./controllers/countries");
// makes the request to de api and saves a raw version of the results

const querySchema = Joi.object({
  name: Joi.string().regex(/^[a-zA-Z\s]+$/),
});

const paramsSchema = Joi.object({
  id: Joi.string()
    .regex(/^[a-zA-Z]+$/)
    .length(3),
});

router.get("/", validator.query(querySchema), getCountriesDB);

router.get("/:id", validator.params(paramsSchema), getCountriesById);

module.exports = router;
