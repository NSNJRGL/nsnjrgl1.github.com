const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));

app.use("/css", express.static(path.join(__dirname, "../q3", "css")));

app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();
  let html = path.join(__dirname, "../q3", "night.html");
  if (6 <= hour && hour <= 18) {
    html = path.join(__dirname, "../q3", "day.html");
  }

  res.sendFile(html);
});

app.get("/output", (req, res) => {
  let { name, age } = req.query;
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = "100";
  }
  res.send(`Welcome ${name} age ${age}`);
});

app.post("/result", (req, res) => {
  let { name, age } = req.body;
  res.redirect(`/output?name=${name}&age=${age}`);
});

app.listen(3000);
