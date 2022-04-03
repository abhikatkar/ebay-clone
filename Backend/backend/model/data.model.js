const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    img1: { type: String, required: true },
    img2: { type: String, required: true },
    img3: { type: String, required: true },
    img4: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    shipping_price: { type: Number, required: true },
    company: { type: String, required: true },
    star: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("data", dataSchema);
