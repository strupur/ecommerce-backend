const express = require('express');
const app = express();



const userRoutes = require('./routes/user.routes')

app.use( express.json());

// app.delete("/users", (req, res)=>{
//     return res.send("usuarios borrado");
// })

app.use([ userRoutes ])


module.exports = app;