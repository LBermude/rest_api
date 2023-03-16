
const express = require('express');

const app = express();
const parkings = require('../parkings.json');

app.get('/', (req, res) => {
    res.status(200).json(parkings);
  });

app.listen(3000, () => {
    console.log('listening on port 3000');
  });