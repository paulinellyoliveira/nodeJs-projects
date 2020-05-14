const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index);
routes.get("/allproducts", ProductController.listAll);
routes.post("/products", ProductController.store);
routes.get("/products/:id", ProductController.show);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.delete);

module.exports = routes; 

/*Product.create({
    title: "Sudo React Native",
    description: " Sudo Build native apps with React",
    url: "http://github.com/facebook/react-native"
});*/