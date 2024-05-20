const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Define the folder path where files will be stored
const folderPath = path.join(__dirname, '../files');

// Ensure the folder exists
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

// Endpoint to create a text file with the current timestamp
router.post('/create', (req, res) => {
  const currentDate = new Date();
  const timestamp = currentDate.toISOString();
  const fileName = `${currentDate.toISOString().replace(/:/g, '-')}.txt`;
  const filePath = path.join(folderPath, fileName);

  fs.writeFile(filePath, timestamp, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to create file' });
    }
    res.status(201).json({ message: 'File created successfully', fileName });
  });
});

// Endpoint to retrieve all text files in the folder
router.get('/list', (req, res) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve files' });
    }
    const textFiles = files.filter(file => file.endsWith('.txt'));
    res.status(200).json(textFiles);
  });
});

module.exports = router;
