const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// IMPORT WEATHER CONTROLLER
const weatherController = require('./weatherController')

const mongoose = require("mongoose");
const location = require('./model');
const MONGO_URI =
  "mongodb+srv://lukelauther1:weather@weather.fc6usi4.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () => {
  console.log("hacking the database, one moment...");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
   return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
})

// API ROUTE???
app.post('/api/', weatherController.getLocationKey, weatherController.getCurrentConditions, (req, res) => {
  // console.log('post request complete')
  return res.status(200).json({
    locationCity: res.locals.location.city,
    locationState: res.locals.location.state,
    temp: res.locals.currentTemp,
    highTemp: res.locals.highTemp,
    lowTemp: res.locals.lowTemp,
    description: res.locals.description,
    feelsLike: res.locals.feelsLike,
    windSpeed: res.locals.windSpeed
  });
});

// catch all for unknown routes
app.use((req, res) => res.sendStatus(404));

// start the server
app.listen(PORT, () => {
    console.log(`Beep boop, listening on port ${PORT}`);
})

module.exports = app;