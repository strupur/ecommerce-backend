const express = require('express');
const app = express();
const cors = require('cors');

const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const categoryRoutes = require('./routes/category.routes');
const orderRoutes = require('./routes/order.routes');

app.use( cors())

app.use( express.static('public'))

app.use( express.json());

app.use([ userRoutes, productRoutes, categoryRoutes, orderRoutes])

module.exports = app;

// app.use((req, res, next) => {

//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'); 
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); 
//     res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
//     next();
        
// })
