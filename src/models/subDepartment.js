const mongoose = require("mongoose");
require("./department");

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    department: {
      type: mongoose.Types.ObjectId,
      ref: "Department",
      required: true,
    },
  },
  { timestamps: true }
);

const model =
  mongoose.models.SubDepartment || mongoose.model("SubDepartment", schema);

export default model;
