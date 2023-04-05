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
        db.create({
            city: data[0].name,
            state: data[0].state,
            lat: data[0].lat,
            lon: data[0].lon
        })
            .then((result) => {
                res.locals.location = result;
                return next()
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
            // console.log('locals', res.locals.location)
            // console.log('data', data)
            res.locals.currentTemp = data.main.temp;
            res.locals.highTemp = data.main.temp_max;
            res.locals.lowTemp = data.main.temp_min;
            return next()
        })
        .catch(error => console.log('Error in getCurrentConditions', error))
}

module.exports = weatherController