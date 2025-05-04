const express = require('express');
const app = express();
const contactRoute = require('./routes/contact');

app.use(express.static('public'));
app.use(express.json());
app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; // for testing
