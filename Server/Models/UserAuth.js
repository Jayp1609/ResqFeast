const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserAuthSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contact: { type: Number, required: true },
  password: { type: String, required: true },
});

const UserAuth = mongoose.model("userauth", UserAuthSchema);

module.exports = UserAuth;
