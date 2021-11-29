const { Router } = require("express");
const Joi = require("joi");
const validator = require('express-joi-validation').createValidator({})
const { createActivity } = require('./controllers/activities')

const bodySchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  difficulty: Joi.number().integer().min(1).max(5).required(),
  duration: Joi.number().integer().required(),
  season: Joi.string().valid("Autumn", "Winter", "Spring", "Summer").required(),
  countries: Joi.array()
    .items(
      Joi.string()
        .regex(/^[A-Z]+$/)
        .uppercase()
        .length(3)
    )
    .required(),
});

const router = Router();

router.post("/", validator.body(bodySchema), createActivity);

module.exports = router;
