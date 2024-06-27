require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const routerPhotos = require("./routers/photos.js")

const routerCategories = require("./routers/categories.js")

const routerMessages = require("./routers/messages.js")

const routerUsers = require("./routers/auth.js")

app.use(express.static('public'))

app.use('/photos', routerPhotos);

app.use('/categories', routerCategories);

app.use('/messages', routerMessages);

app.use('/auth', routerUsers);

app.listen(port, () => {console.log('Server Online')});

