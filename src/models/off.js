const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    percent: {
      type: Number,
      required: true,
    },
    maxUsage: {
      type: Number,
      required: true,
    },
    usage: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const model = mongoose.models.Off || mongoose.model("Off", schema);

export default model;
