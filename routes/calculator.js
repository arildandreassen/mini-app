const express = require("express");
router = express.Router();
const { calculator } = require("./../controllers/calculator");

router.post("/calculator", calculator);

module.exports = router;
