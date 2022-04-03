const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://abhi-ebay:Abhigayatri@cluster0.efovr.mongodb.net/data?retryWrites=true&w=majority"
  );
};
