const { Activity } = require('../../db');


const createActivity = async function(req, res, next) {
    try {
      const { name, difficulty, duration, season, countries } = req.body;
      
      let newActivity = await Activity.create({
        name,
        difficulty,
        duration,
        season,
      });
      await newActivity.addCountry(countries);
  
      res.send('Activity created');
    } catch (e) {
      next(e);
    }
}

module.exports={
    createActivity,
}