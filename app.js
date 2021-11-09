const express = require("express");
const app = express();

const path = require("path");

app.listen(4000, () => {
  console.log("Servidor corriendo en el puerto: 4000");
});

const publicDomain = path.resolve(__dirname, "./public");
app.use(express.static(publicDomain));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get("/games_details", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/games_details.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

app.get("/product_cart", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productCart.html"));
});

app.get("/product_details", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/productDetail.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
