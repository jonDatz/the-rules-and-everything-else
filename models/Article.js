var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({

  headline: {
    type: String,
    required: true,
    trim: true
  },
  summary: {
    type: String,
    required: true,
    trim: true
  },
  link: {
      type: String,
      required: true,
      unique: true,
      trim: true
  }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
