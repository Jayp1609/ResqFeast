const mongoose = require("mongoose");
const { Schema } = mongoose;

const FoodDetailsSchema = new Schema({
  address: { type: String, required: true },
  category: { type: String, require: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
});

const FoodDetails = mongoose.model("foodDetails", FoodDetailsSchema);

module.exports = FoodDetails;
