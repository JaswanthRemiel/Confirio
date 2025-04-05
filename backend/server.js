const express = require("express");
const app = express();
const port = 3001;

app.get("/hello", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`port is running ${port}`);
});
