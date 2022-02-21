let express = require('express');
let router = express.Router();

let inventoryController = require('../controllers/inventory');

/*  helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}  */

router.get('/', inventoryController.list);

// GET Route for displaying the Add page - CREATE Operation 
router.get('/add',inventoryController.displayAddPage); 

// POST Route for processing the Add page - CREATE Operation 
router.post('/add',inventoryController.processAddPage); 

//  Routers for edit
router.get('/edit/:id', inventoryController.displayEditPage);
router.post('/edit/:id', inventoryController.processEditPage);

// Delete
router.get('/delete/:id', inventoryController.performDelete); 

module.exports = router;