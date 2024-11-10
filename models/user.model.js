const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 100,
        require: true
    },
    email: {
        type: String,

        trim: true,
        minlength: 5,
        maxlength: 100,
        require: true
    },
    password: {
        type: String,
        trim: true,
        minlength: 5,
        maxlength: 70,
        require: true

    },
    repeatpass: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 70,
        require: true

    },
    category: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 70,
        require: true

    },
    description: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 70,
        require: true

    },
    bornDate: {
        type: String,

        trim: true,
        minlength: 5,
        maxlength: 24,
        require: true
    }, 
    image: {
        type: String,
        trim: true,
        minlength: 3,
        require: true,
        maxlength: 300,
    },
    role: {
        type: String,
        default: "client",
        enum: ["client", "admin", "user"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", userSchema);