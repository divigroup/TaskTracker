const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  uid: { type: String, required: true },
  title: String,
  amount: Number,
  type: { type: String, enum: ["expense", "reminder"], default: "expense" },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Entry", entrySchema);
