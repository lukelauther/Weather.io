// PUT MIDDLEWARE FUNCTIONS HERE
// need to import weather model
const db = require('./model');
// const { response } = require('./server');
const apiKey = 'OtsnH8FAro5OSgpZG75rjEPoD2SjZCn5';

const weatherController = {};

weatherController.getLocationKey = (req, res, next) => {
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=OtsnH8FAro5OSgpZG75rjEPoD2SjZCn5&q=${req.body.userLocation}`)
      .then((info) => info.json())
      .then((data) => {
        db.create({
          city: data[0].LocalizedName,
          state: data[0].AdministrativeArea.LocalizedName,
          locationKey: data[0].Key,
        })
        // will log the document being created
        .then((result) => {
          res.locals.location = result;
          return next();
        }); 
      })
      .catch((error) => console.log("An error occured"));
}

weatherController.getCurrentConditions = (req, res, next) => {
    fetch(`http://dataservice.accuweather.com/currentconditions/v1/${res.locals.location.locationKey}?&apikey=OtsnH8FAro5OSgpZG75rjEPoD2SjZCn5`)
      .then(info => info.json())
      .then(data => {
        console.log(`Currently ${data[0].Temperature.Imperial.Value}°F`)
        res.locals.currentTemp = data[0].Temperature.Imperial.Value;
        return next();
      })
      .catch(error => console.log('An error has occured'));
}

module.exports = weatherController