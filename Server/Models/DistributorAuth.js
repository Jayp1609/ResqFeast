const mongoose = require("mongoose");
const { Schema } = mongoose;

const DistributorAuthSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: Number, required: true },
  password: { type: String, required: true },
});

const DistributorAuth = mongoose.model("disributorauth", DistributorAuthSchema);

module.exports = DistributorAuth;
