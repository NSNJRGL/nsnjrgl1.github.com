const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <form action="/result" method="post">
      <input name="name" type="text" /> 
      <input name="age" type="text" /> 
      <button type="submit">Submit</button>
    </form>
  `);
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
