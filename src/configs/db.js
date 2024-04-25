const mongoose = require("mongoose");

const connectTodb = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    }


    await mongoose.connect("mongodb://127.0.0.1:27017/fastfood");
    console.log("mongoDB connect successfully");
  } catch (err) {
    console.log("mongoose faild to connect !", err);
  }
};

module.exports = connectTodb
