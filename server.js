const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const app = express();

// Set up multer for file upload handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle form submission
app.post('/api/contact', upload.single('attachment'), (req, res) => {
  const { name, email, phone, subject, message, contactMethod } = req.body;
  const attachment = req.file ? req.file.filename : null;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required except phone and attachment.' });
  }

  // Handle form data (for example, store it in a database or send an email)

  res.status(200).json({
    message: 'Form submitted successfully',
    formData: {
      name,
      email,
      phone,
      subject,
      message,
      contactMethod,
      attachment,
    },
  });
});

// Serve static files for the frontend
app.use(express.static('public'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});