let mongoose = require('mongoose');

let inventoryModel = mongoose.Schema(
    {
        contact_name: String,
        contact_no: Number,
        
        email: String,
        
    },
    {
        collection: "inventory"
    }
);

module.exports = mongoose.model('Inventory', inventoryModel);