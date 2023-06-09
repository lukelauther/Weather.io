const mongoose = require('mongoose')
// const MONGO_URI = 'mongodb+srv://lukelauther1:weather@weather.fc6usi4.mongodb.net/?retryWrites=true&w=majority'

// mongoose.connect(MONGO_URI);
// mongoose.connection.once('open', () => {
//     console.log('connected to the database')
// })

const Schema = mongoose.Schema;

// const locationSchema = new Schema({
//     city: { type: String, required: true },
//     state: { type: String, required: true }, 
//     locationKey: {type: Number, required: true }
// })

const locationSchema = new Schema({
    city: { type: String, required: true },
    state: { type: String, required: true },
    lat: { type: Number, required: true},
    lon: { type: Number, required: true}
});

const location = mongoose.model('Location', locationSchema);

module.exports = location;