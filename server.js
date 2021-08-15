const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const users = require("./routes/users");

app.listen(port, () => {
  console.log(`SERVER READY ON PORT ${port}`);
});

app.use("/", users);
