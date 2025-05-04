const express = require('express');
const app = express();
const contactRoute = require('./routes/contact');

app.use(express.static('public'));
app.use(express.json());
app.use('/api/contact', contactRoute);

module.exports = app; // Only export the app
