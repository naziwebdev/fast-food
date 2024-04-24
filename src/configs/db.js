const mongoose = require("mongoose");

const connectTodb = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    }

    await mongoose.connect(process.env.DB_URL);
    console.log("mongoDB connect successfully");
  } catch (err) {
    console.log("mongoose faild to connect !", err);
  }
};

export default connectTodb;
