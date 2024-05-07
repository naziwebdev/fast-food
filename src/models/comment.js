const mongoose = require("mongoose");
require("./product");
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
    productID: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    isAccept: {
      type: Number,
      required: true,
      default: 0,
    },
    score: {
      type: Number,
      required: true,
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

const model = mongoose.models.Comment || mongoose.model("Comment", schema);

module.exports = model;
