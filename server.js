const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();
const router = jsonServer.router('db.json'); // JSON Server için db.json dosyası

app.use(express.static(path.join(__dirname, 'dist'))); // Vue build edilen dosyaları sunma
app.use('/api', router); // JSON Server'ı /api altında yönlendirme

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
