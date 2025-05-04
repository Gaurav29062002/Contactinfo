const express = require('express');
const router = express.Router();

let submissions = [];

router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  submissions.push({ name, email, message });
  res.status(200).json({ message: 'Form submitted successfully.' });
});

module.exports = router;
