const mongoose = require("mongoose");
require("./product");
const schema = new mongoose.Schema(
  {
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
      type:Date,
      default:new Date(),
      immutable: false,
    },
    productID: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    isAccept:{
      type:Number,
      required:true,
      default:0
    },
    score: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.models.Comment || mongoose.model("Comment", schema);

module.exports = model;
