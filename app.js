const express = require('express');
const carsRoutes = require('./controllers/cars');

const app = express();

app.use(carsRoutes);
app.use(express.static('public'));
app.listen(3001);

