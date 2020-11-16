const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
/*const connection = mongoose.connection;*/

const articleRoutes = require('./routes/article');

mongoose.connect('mongodb://localhost:27017/db-blob',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true })
    .then(() => console.log('Connexion DB : OK'))
    .catch(()=> console.log('Connexion DB : KO'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/articles', articleRoutes);

module.exports = app;
