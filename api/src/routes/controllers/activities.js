const { Activity } = require('../../db');
const fs = require('fs');


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

const getActivities = function(req, res, next){
  try {
    Activity.findAll()
    .then((response) => {
      let activities = response ? response : "No matches found";
      res.status(200).json(activities);
    });
  } catch (error) {
    next(error);
  }
}

// I created a file with some activities to have preloaded
const getActivitiesForBD = function(){
  let rawdata = fs.readFileSync('activities.json');
  // dar formato y devolver 
  let activities = JSON.parse(rawdata);
  return activities
}


module.exports={
    createActivity,
    getActivities,
    getActivitiesForBD,
}