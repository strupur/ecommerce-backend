
const app = require('./app');
const PORT = 3000;
const mongoose = require('mongoose');

const DATABASE_URL = "mongodb+srv://FranciscoMongos:n.sgRHpL$b-7Le8@ecommerce.ioo61.mongodb.net/ecommerce";


mongoose.connect(DATABASE_URL,).then(() => {

    console.log("Conexión a la DB exitosa!");
    
    app.listen(PORT,() => {
        console.log(`#####################################################################
############## Server esta corriendo en el puerto ${PORT} ##############
#####################################################################`);
    })

}).catch(error => console.log("Error al conectar a la DB!", error));

// app.get("/", (req,res) => {
//    res.send("Hola Mundo")
// })

// app.post("/products", (req,res) => {
//     res.send("Creando un producto");
// })





