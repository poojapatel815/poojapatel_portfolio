let mongoose = require('mongoose');

// Connect to our model
let Inventory = require('../models/inventory');

exports.list = function(req, res, next) {
    Inventory.find( (err, inventoryList) => {

        if(err){
            return console.error(err);
        }
        else{
             console.log(inventoryList);
            res.render(
                'inventory/list', 
                { 
                    title: 'Business List',
                    InventoryList: inventoryList
                }
            );
        }

    })
}

module.exports.displayAddPage = (req, res, next) => {
    
    let newItem = Inventory();

    res.render(
        'inventory/add_edit', 
        {
            title: 'Add a new Item',
            item: newItem
        }
    )          
}


module.exports.processAddPage = (req, res, next) => {
    
    let newItem = Inventory({
        _id: req.body.id,
        contact_name: req.body.contact_name,
        contact_no: req.body.contact_no,
        email: req.body.email,
        
    });

    Inventory.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/inventory');
        }
    });
}


module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Inventory.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render(
                'inventory/add_edit', 
                {
                    title: 'Edit Item', 
                    item: itemToEdit
                }
            )
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Inventory({
        _id: req.body.id,
        contact_name: req.body.contact_name,
        contact_no: req.body.contact_no,
        email: req.body.email,

    });

    // console.log(updatedItem);

    Inventory.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/inventory');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Inventory.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/inventory');
        }
    });
}
