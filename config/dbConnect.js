const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const CONNECTION_STRING = process.env.CONNECTION_STRING;

    mongoose.set("strictQuery", true);
    await mongoose.connect(CONNECTION_STRING);

    console.log("Connected to the database");
  } catch (err) {
    console.log(err.message);
  }
};
