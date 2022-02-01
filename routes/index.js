let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.home);

/* GET projects page. */
router.get('/projects', indexController.projects);

/* GET about page. */
router.get('/about', indexController.about);

module.exports = router;
