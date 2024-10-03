const express = require('express');
const app = express();
const User = require("./models/user.model")

app.delete("/users", (req, res)=>{
    return res.send("usuarios borrado");
})

app.get("/users", async (req, res) => {
    try {
        
        const users = await User.find();

        console.log(users);
        
        return res.status(200).send(users);

    } catch (error) {
        console.log(error);
        res.status(500).send("Error al obtener usuario")
    }
})

app.post("/users", (req, res)=> {
    
    const user = new User(req.body);

    // console.log(user);

    user.save().then(nuevoUser => {

        console.log(nuevoUser);
        return res.send("el usuario se creo correctamente");

    }).catch(error => {
        console.log(error);
        return res.send("el usuario no se pudo crear");
    })

})

// app.post("/users", (req, res) => {
//     return res.send({

//         "name": "Pepito Gomez",
//         "email":
//         "pepito@doe.com",
//         "password": "1234",
//         "otro": "Cualquier cosa",
//         "age": 36
//         }
//         )
// })
module.exports = app;