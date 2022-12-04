const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models"); 

app.use(express.json());
app.use(cors());

db.sequelize.sync().then(() => {
  app.listen(4000, () => {
    console.log("server started...");
  });
});

app.get("/", (req, res) => {
  res.send("hello world");
});
