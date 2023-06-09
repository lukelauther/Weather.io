// PUT MIDDLEWARE FUNCTIONS HERE
// need to import weather model
const db = require('./model');
// const { response } = require('./server');

// ACCUWEATHER KEY
// const apiKey = 'OtsnH8FAro5OSgpZG75rjEPoD2SjZCn5';

// OPENWEATHER KEY
const apiKey = '01b7db4cad30c396038a495ce4a70214';

const weatherController = {};

weatherController.getLocationKey = (req, res, next) => {
    
    // fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=OtsnH8FAro5OSgpZG75rjEPoD2SjZCn5&q=${req.body.userLocation}`)
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${req.body.userLocation}&appid=01b7db4cad30c396038a495ce4a70214`)
      .then((info) => info.json())
      .then(data => {
        db.findOne({ city: data[0].name })
            .then(result => {
                if (result) {
                    // console.log('result ', result)
                    res.locals.location = result;
                    return next();
                } else {
                    db.create({
                      city: data[0].name,
                      state: data[0].state,
                      lat: data[0].lat,
                      lon: data[0].lon,
                    }).then((result) => {
                      res.locals.location = result;
                      return next();
                    });
                }
            })
      })
      .catch((error) => console.log('Error in getLocationKey', error));
    //   .then((data) => {
        // db.create({
        //   city: data[0].LocalizedName,
        //   state: data[0].AdministrativeArea.LocalizedName,
        //   locationKey: data[0].Key,
        // })
        //   // will log the document being created
        //   .then((result) => {
        //     res.locals.location = result;
        //     return next();
        //   });
    //   })
    //   .catch((error) => console.log(error));
}

weatherController.getCurrentConditions = (req, res, next) => {
//     fetch(`http://dataservice.accuweather.com/currentconditions/v1/${res.locals.location.locationKey}?&apikey=OtsnH8FAro5OSgpZG75rjEPoD2SjZCn5`)
//       .then(info => info.json())
//       .then(data => {
//         // console.log(`Currently ${data[0].Temperature.Imperial.Value}°F`)
//         res.locals.currentTemp = data[0].Temperature.Imperial.Value;
//         return next();
//       })
//       .catch(error => console.log('An error has occured'))
    // console.log('locals', res.locals.location);
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${res.locals.location.lat}&lon=${res.locals.location.lon}&appid=01b7db4cad30c396038a495ce4a70214&units=Imperial`)
        .then(info => info.json())
        .then(data => {
            res.locals.description = data.weather[0].description
            res.locals.feelsLike = data.main.feels_like
            res.locals.currentTemp = data.main.temp;
            res.locals.highTemp = data.main.temp_max;
            res.locals.lowTemp = data.main.temp_min;
            res.locals.windSpeed = data.wind.speed
            return next()
        })
        .catch(error => console.log('Error in getCurrentConditions', error))
}

weatherController.deleteLocation = (req, res, next) => {
    db.findOneAndDelete({ city: req.params.id })
        .then(response => {
            // console.log('deleted document ', response)
            return next();
        })
        .catch(error => console.log('Error in deleteLocation', error))
}

module.exports = weatherController