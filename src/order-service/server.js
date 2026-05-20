const express = require("express");
const app = express();

app.use(express.json());

let orders = [];

app.post("/create", (req, res) => {
    orders.push(req.body);
    res.send("Order created");
});

app.get("/", (req, res) => {
    res.json(orders);
});

app.listen(3003, () => {
    console.log("Order Service running on 3003");
});