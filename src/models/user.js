const mongoose = require("mongoose");

const schema = new mongoose.schema(
  {
    name: {
      type: String,
      required: true,
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
    refteshToken: String,
  },
  { timestamps: true }
);

const model = mongoose.models.User || mongoose.model("User", schema);

export default model;
