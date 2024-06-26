require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const routerPhotos = require("./routers/photos.js")

app.use('/photos', routerPhotos);

app.listen(port, () => {console.log('Server Online')});

