var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const user = {
    fName: 'Faisal',
    lName: 'Bello',
    hobby: 'soccer'
  }
  res.send(user);
});

module.exports = router;
