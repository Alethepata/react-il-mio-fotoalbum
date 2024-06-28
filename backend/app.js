require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors");

const routerPhotos = require("./routers/photos.js")

const routerCategories = require("./routers/categories.js")

const routerMessages = require("./routers/messages.js")

const routerUsers = require("./routers/auth.js");

const access = require("./middlewares/access.js");

const notFound = require("./middlewares/notFound.js");

const badRequest = require("./middlewares/badRequest.js");

const serverError = require("./middlewares/serverError.js");

const HomeController = require("./controllers/HomeController.js");

app.use(cors());

app.use(express.static('public'))

app.use('/home', HomeController)

app.use('/categories', routerCategories);

app.use('/messages', routerMessages);

app.use('/auth', routerUsers);

app.use(access);

app.use('/photos', routerPhotos);

app.use(notFound);

app.use(badRequest);

app.use(serverError);


app.listen(port, () => {console.log('Server Online')});

