const mongoose = require("mongoose");
require("./article");
require("./user");
const schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: new Date(),
      immutable: false,
    },
    articleID: {
      type: mongoose.Types.ObjectId,
      ref: "Article",
    },
    isAccept: {
      type: Number,
      required: true,
      default: 0,
    },
    score: {
      type: Number,
      required: true,
      default:5
    },
    hasAnswer:{
      type: Boolean,
      required: true,
      default: false,
    },
    isAnswer: {
      type: Boolean,
      required: true,
      default: false,
    },
    mainCommentID: {
      type: mongoose.Types.ObjectId,
      ref: "Comment",
      required: false,
    },
  },
  { timestamps: true }
);

const model = mongoose.models.ArticleComment || mongoose.model("ArticleComment", schema);

export default model
