const express = require("express");
const app = express();
const path = require("path");

/*Public*/
const publicDomain = path.resolve(__dirname, "../public");

/*Routes*/
const mainPage = require("./routes/main.js")
const mainProducts = require("./routes/products.js")
const mainUser = require("./routes/user.js")


/*Server*/
/**ejs**/
app.set('view engine', 'ejs')

/**boot**/
app.listen(4000, () => {
  console.log("Servidor corriendo en el puerto: 4000");
});

/**static_files**/
app.use(express.static(publicDomain));


/**views**/
app.use("/", mainPage);

app.use("/products", mainProducts);

app.use("/user", mainUser)

