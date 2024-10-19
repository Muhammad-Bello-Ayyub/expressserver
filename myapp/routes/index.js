var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express JS' });
});

// Respond with Hello World! on the homepage:
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// Respond to POST request on the root route (/), the application’s home page:
// app.post('/', (req, res) => {
//   res.send('Got a POST request')
// })

// Respond to a PUT request to the /user route:
// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// })

// Respond to a DELETE request to the /user route:
// app.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })

module.exports = router;
