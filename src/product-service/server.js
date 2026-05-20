const express = require("express");
const app = express();

app.use(express.json());

let products = [];

app.post("/add", (req, res) => {
    products.push(req.body);
    res.send("Product added");
});

app.get("/", (req, res) => {
    res.json(products);
});

app.listen(3002, () => {
    console.log("Product Service running on 3002");
});