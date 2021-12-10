const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override')


/*Public*/
const publicDomain = path.resolve(__dirname, "../public");

/*Routes*/
const mainPage = require("./routes/main.js")
const mainProducts = require("./routes/products.js")
const mainUser = require("./routes/user.js")
const mainGames = require("./routes/games.js")

const productsServices = require("./services/productsServices")

/*Server*/
/**ejs**/
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "views"))
/**urlencoded**/
app.use(express.urlencoded({ extended : false}))
/**use json**/
app.use(express.json())
/**methodOverRide**/
app.use(methodOverride('_method'))


/**boot**/
app.listen(4000, () => {
  console.log("Servidor corriendo en el puerto: 4000");
});

/**static_files**/
app.use(express.static(publicDomain));

app.locals.products = productsServices.getAll()

/**views**/
app.use("/", mainPage);

app.use("/products", mainProducts);

app.use("/user", mainUser)

app.use("/games", mainGames)


/**error-404**/
app.use((req,res,next) => {
  res.status(404).render(path.resolve(__dirname, "./views/main/not-found"))
})
