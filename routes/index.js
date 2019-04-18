const path = require("path");
const router = require("express").Router();
const axios = require('axios');

// If no API routes are hit, send the React app
const baseURL = 'http://dnd5eapi.co/api/';

router.get('/api/random/spell', function (req, res) {
  let queryURL = baseURL + 'spells/' + (Math.floor(Math.random() * 319) + 1);
  axios({
    method: 'GET',
    url: queryURL
  }).then(function (response) {
    console.log(response.data);
    res.json(response.data);
  });
});

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
