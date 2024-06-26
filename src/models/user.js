const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required:false,
      default:'کاربر'
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
      default: "User",
    },
    password: {
      type: String,
      required: false,
    },
    refreshToken: String,
  },
  { timestamps: true }
);

const model = mongoose.models.User || mongoose.model("User", schema);

module.exports = model