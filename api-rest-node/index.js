const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");


//iniciando app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando BD
mongoose.connect("mongodb://localhost:27017/api-rest-node", {useNewUrlParser: true});
requireDir("./src/models");
//require('./src/models/Product');

//const Product = mongoose.model("Product");

app.use("/api", require("./src/routes"));

//porta da aplicação
app.listen(3001);