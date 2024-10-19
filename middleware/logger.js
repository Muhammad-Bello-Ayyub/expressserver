const colors = require("colors"); // package use to add colors

//Middleware function
const logger = (req, res, next) =>{

    const methodColors = {
        GET: 'green',
        POST: 'blue',
        PUT: 'yellow',
        DELETE: 'red'
    }

    const color = methodColors[req.method] || colors.white;
    console.log(
        `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`[
            color
        ]
    );
    next();
};

module.exports = logger; // common js module
