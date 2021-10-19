const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "nasanjargal",
    resave: false,
    saveUninitialized: true,
  })
);

let products = [
  {
    id: 1,
    name: "Headphone",
    price: 100,
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSyZnrridVSJqZnSGDDGkhgSeDmrLIfyI5FV7JvuCDVKgxcTndFRnZrEYXsZ5PVckpPdXvdOP8LLIPm4DFiZ8H1EoJqHReemnFQqvRpMok&usqp=CAY",
  },
  {
    id: 2,
    name: "VR",
    price: 200,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRiH2lU-W-Y5CNEGwhMcJN49M6odnrEcVKl5IU2dieascAglOXvdtGxta7ILE47vg2_BvYiZaINupu457As_5BQMfnbgPLEjS9Ul5bpkKRpxQlYuGGLRZY-&usqp=CAY",
  },
  {
    id: 3,
    name: "XBOX",
    price: 300,
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRB631Bx4EixPWNQCm_KMkSDhCoKx4ILVeKTt4QJKJ7pSYWJLOj1bKOb-fjYEyNSKuyK4oUcwv2YUtboyCZAJq4O8IpmUqEsRuC4TTtjJMEdX5aeCkLqhrt&usqp=CAY",
  },
];

app.get("/", (req, res) => {
  res.render("shop", {
    products: products,
  });
});

app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p.id == id);
  res.render("product", {
    product: product,
  });
});

app.post("/addToCart", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  if (!req.session.views) {
    req.session.views = {};
  }
  if (!req.session.views[name]) {
    req.session.views[name] = { name: name, price: price, quantity: 1 };
  } else {
    const quantity = req.session.views[name].quantity;
    req.session.views[name].quantity = quantity + 1;
    req.session.views[name].price = (quantity + 1) * price;
  }

  res.redirect(`/shoppingcart`);
});

app.get("/shoppingcart", (req, res) => {
  res.render("shoppingcart", { shoppingCart: req.session.views });
});

app.listen(3000);
