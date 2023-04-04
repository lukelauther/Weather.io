const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const mongoose = require("mongoose");
const MONGO_URI =
  "mongodb+srv://lukelauther1:weather@weather.fc6usi4.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () => {
  console.log("connected to the database");
});

app.get('/', (req, res) => {
    console.log('request is sending!')
   return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
})

// start the server
app.listen(PORT, () => {
    console.log(`Beep boop, listening on port ${PORT}`);
})

module.exports = app;