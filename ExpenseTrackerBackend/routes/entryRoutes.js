const express = require("express");
const { addEntry, getEntries } = require("../controllers/entryController");
const router = express.Router();

router.post("/", addEntry);
router.get("/", getEntries);

module.exports = router;
