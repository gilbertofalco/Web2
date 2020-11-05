const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://gilberto:277798@cluster0.z0pl7.mongodb.net/bancoprojeto?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(express.json());
app.use(routes);


app.listen(3333);
