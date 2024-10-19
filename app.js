const express = require('express');
const app = express();

const userRoutes = require('./routes/user.routes')

app.use( express.json());

app.use([ userRoutes ])

module.exports = app;

const gatito = 36;

console.log(gatito + 1);

const gatito1 = 35;

console.log(gatito1 + 1);
