var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET pooja page. */
router.get('/julio', function(req, res, next) {
  res.render(
    'users', 
    { 
      title: 'Users',
      name: 'Pooja'
    }
  );
});

module.exports = router;
