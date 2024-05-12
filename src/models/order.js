const mongoose = require("mongoose");
require("./product");
require("./user");
const schema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },

    productID: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    code: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.models.Order || mongoose.model("Order", schema);

module.exports = model;
