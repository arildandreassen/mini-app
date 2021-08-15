const { response } = require("express");
const express = require("express");
router = express.Router();
const { listUsers } = require("../controllers/users");

router.get("/users", listUsers);

module.exports = router;
