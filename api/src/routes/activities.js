const { Router } = require("express");
const axios = require("axios");

const router = Router();

router.post("/", function (req, res, next) {
    res.send("soy post");
  });  

  module.exports = router;