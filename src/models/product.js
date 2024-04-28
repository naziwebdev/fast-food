const mongoose = require("mongoose");
require("./comment");

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    score: {
      type: Number,
      default: 5,
    },
    tags: {
      type: [String],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    countAvailable: {
      type: Number,
      required: true,
    },
    weight: {
      type:Number,
      required: true,
    },
    materials: {
      type: [String],
      required: true,
    },
    tast: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    comments: {
      type: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
    },
  },
  { timestamps: true }
);

const model = mongoose.models.Product || mongoose.model("Product", schema);

module.exports = model;
