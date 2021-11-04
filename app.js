const express = require("express");
const app = express();
const path = require("path");

app.listen(4000, () => {
  console.log("Servidor corriendo en el puerto: 4000");
});

const publicDomain = path.resolve(__dirname, "./public");
app.use(express.static(publicDomain));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/views/index.html"));
});
