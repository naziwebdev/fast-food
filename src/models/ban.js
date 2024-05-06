const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const model = mongoose.models.Ban || mongoose.model("Ban", schema);

export default model;
