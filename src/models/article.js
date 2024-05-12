const mongoose = require("mongoose");
require("./articleComment");
require("./user");

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      trquired: true,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    comments: {
      type: [{ type: mongoose.Types.ObjectId, ref: "ArticleComment" }],
    },
  },
  { timestamps: true }
);

const model = mongoose.models.Article || mongoose.model("Article", schema);

module.exports = model;
