const cheerio = require('cheerio');
const path = require("path");
const router = require("express").Router();
const axios = require('axios');
const db = require("../models");

// If no API routes are hit, send the React app

router.post('/user', function (req, res) {
  db.User.findOneAndUpdate({email: req.body.user}, {}, {upsert: true}).populate('articles')
  .then(response => {
    res.json(response)
  });
});

router.get('/articles', function (req, res) {
  db.Article.find()
    .then(function (dbArticles) {
      res.json(dbArticles)
    });
});

router.post('/api/save', function (req, res) {
  console.log(req.body);
  console.log(req.body.articleId);
  console.log(req.body.user);
  db.User.findOneAndUpdate({email: req.body.user}, {$push : {articles: {_id: req.body.articleId}}}).then(response => {
    console.log(response);
    res.json(response);
  })
})

router.get('/api/scrape', function (req, res) {

  axios.get("http://dnd.wizards.com/articles").then(function (response) {
    let $ = cheerio.load(response.data);

    $('article div.text').each(function (i, element) {
      let result = {};

      result.headline = $(this).children('h4').text();

      result.summary = $(this).children('div').text();
      result.link = 'http://dnd.wizards.com' + $(this).children('h4').children('a').attr('href');

      db.Article.create(result)
        .then(function (dbArticle) {
          // View the added result in the console
        })
        .catch(function (err) {
          // If an error occurred, log it
          console.log(err);
        });
    });
    res.send('Scraped Articles, Chief')
  });
});

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
