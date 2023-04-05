const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// IMPORT WEATHER CONTROLLER
const weatherController = require('./weatherController')

const mongoose = require("mongoose");
const weather = require('./model');
const MONGO_URI =
  "mongodb+srv://lukelauther1:weather@weather.fc6usi4.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () => {
  console.log("wow! you connected to the database");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
   return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
})

// API ROUTE???
app.post('/api/', weatherController.getLocationKey, /*weatherController.getCurrentConditions,*/ (req, res) => {
  // console.log('hello from the server');
   return res.status(200).json(res.locals.test)
});

// catch all for unknown routes
app.use((req, res) => res.sendStatus(404));

// start the server
app.listen(PORT, () => {
    console.log(`Beep boop, listening on port ${PORT}`);
})

module.exports = app;