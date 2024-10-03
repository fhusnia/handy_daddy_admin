const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// db.json dosyasından verileri okuma endpoint'i
app.get('/api/data/appliances', (req, res) => {
    fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
      if (err) {
        return res.status(500).send('Error reading db.json');
      }
      res.send(JSON.parse(data).appliances);
    });
});

// Sunucu başlatma
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
