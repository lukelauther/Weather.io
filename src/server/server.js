const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.get('/', (req, res) => {
    console.log('request is sending!')
   return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
})

// start the server
app.listen(PORT, () => {
    console.log(`Beep boop, listening on port ${PORT}`);
})

module.exports = app;