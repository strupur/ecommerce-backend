const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// definir esquema de nuestro modelo

const productSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        minlength: 3,
        trim: true,
        maxlength: 90,
        require: true,
    },
    price: {
        type: Number,
        trim: true,
        minlength: 3,
        require: true,
        maxlength: 100,
        
        
    },
    description: { 
        type: String,
        trim: true,
        minlength: 5,
        require: true,
        maxlength: 70,

     },
    category: { 
        type: String,
        minlength: 3,
        require: true,
        maxlength: 100,
    },
    image: { 
        type: String,
        trim: true,
        minlength: 3,
        require: true,
        maxlength: 300,
    },
    createdAt: { 
        type: Date,
        default: Date.now,
     },
    active: { 
        type: Boolean,
        default: true
    }    
    
});

module.exports = mongoose.model("Product", productSchema);