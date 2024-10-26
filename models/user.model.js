const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// definir esquema de nuestro modelo

const userSchema = new Schema({
    name: {
        type: String,

        minlength: 3,
        maxlength: 100
    },
    email: {
        type: String,

        trim: true,
        minlength: 5,
        maxlength: 100,
        // unique: true,
        // index: true,
        // validate: {
        //     validator: (value) => {
        //         const regex = /^[A-Za-z0-9._+\-']+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

        //         return regex.test(value)
        //     }
        // }
    },
    password: {
        type: String,

        trim: true,
        minlength: 5,
        maxlength: 70

    },
    repeatpass: {
        type: String,

        trim: true,
        minlength: 3,
        maxlength: 70

    },
    category: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 70

    },
    description: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 70

    },
    bornDate: {
        type: String,

        trim: true,
        minlength: 5,
        maxlength: 24
        // validator: (value) => {
        //     const fecha = new Date(value);
        //     const hoy = new Date();

        //     return fecha < (hoy - 18años en milesegundo);
        // }
    }, 
    image: {
        type: String,
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