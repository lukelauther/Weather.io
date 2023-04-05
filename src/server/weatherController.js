// PUT MIDDLEWARE FUNCTIONS HERE
// need to import weather model
const db = require('./model')

weatherController.getLocationKey = (req, res, next) => {
    res.locals.test = req.body
    return next();
}

// weatherController.getCurrentConditions = (req, res, next) => {

// }