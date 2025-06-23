const Entry = require("../models/Entry");

exports.addEntry = async (req, res) => {
  try {
    const entry = new Entry(req.body);
    const saved = await entry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEntries = async (req, res) => {
  try {
    const { uid } = req.query;
    const entries = await Entry.find({ uid }).sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
