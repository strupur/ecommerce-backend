const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// definir esquema de nuestro modelo

const orderSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        minlength: 3,
        trim: true,
        maxlength: 90
    },
    viewValue: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 100,
    },
    description: { 
        type: String,
        trim: true,
        minlength: 5,
        maxlength: 70,
    } 
    
});

module.exports = mongoose.model("Order", orderSchema);