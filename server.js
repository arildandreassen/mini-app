const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const calculator = require("./routes/calculator");

app.listen(port, () => {
  console.log(`SERVER READY ON PORT ${port}`);
});

app.use("/", calculator);
