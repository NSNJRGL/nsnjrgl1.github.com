const express = require("express");
const path = require("path");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use("/css", express.static(path.join(__dirname, "css")));

app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  let html = path.join(__dirname, "./", "night.html");
  if (6 <= hour && hour <= 18) {
    html = path.join(__dirname, "./", "day.html");
  }

  res.sendFile(html);
});

app.post("/result", (req, res) => {
  const { name, age } = req.body;

  if (!name && !age) {
    name = "Nasanjargal";
    age = "24";
  }
  res.send(`Welcome ${name} ${age}`);
});

app.listen(3000);
