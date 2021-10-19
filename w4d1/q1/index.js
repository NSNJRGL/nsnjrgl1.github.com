const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("nasanjargal"));

app.get("/", (req, res) => {
  res.render("index", { cookies: req.cookies });
});

app.post("/register-cookie", (req, res) => {
  const tenSecond = 10000;

  if (req.body.key && req.body.value)
    res.cookie(req.body.key, req.body.value, { maxAge: tenSecond });

  res.redirect(303, "/");
});

app.listen(3000);
