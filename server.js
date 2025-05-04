const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Root route to fix "Cannot GET /" error
app.get('/', (req, res) => {
  res.send('Contact Form API is running');
});

// Simple POST route with validation
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  res.status(200).json({ message: 'Form submitted successfully.' });
});

// Only start the server if not in test mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}

module.exports = app;
