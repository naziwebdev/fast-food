const mongoose = require("mongoose");
require("@/models/user");
require("@/models/product");

const schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required:true
    },

    product: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required:true
    },
  },
  { timestamps: true }
);

const model = mongoose.models.Wishlist || mongoose.model("Wishlist", schema);

module.exports = model;
