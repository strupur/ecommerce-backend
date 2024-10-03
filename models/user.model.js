const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// definir esquema de nuestro modelo

const userSchema = new Schema({
    name: { type: String, required: true },
    email: {type: String},
    datebirth: {type: String},
    Image: {type: String},
    password: {type: String},
    pais: {type: String},
    comment: {type: String},
    price: {type: Number}
});

module.exports = mongoose.model("User", userSchema);