require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConnect = require("./config/db");
const addItem = require("./controller/foodItem/AddItem");
const deleteItem=require('./controller/foodItem/DeleteItem');
const fetchItems = require("./controller/foodItem/FetchItem");
const updateItems = require("./controller/foodItem/UpdateItem");
const addCategory = require("./controller/category/Addcategory");
const fetchCategory = require("./controller/category/FetchCategory");
const addOrder = require("./controller/orders/addOrder");
const fetchOrders = require("./controller/orders/fetchOrders");
const fetchOrderSummary = require("./controller/orders/fetchorderSummary");
const payment = require("./controller/Payment/payment");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello!");
});
app.post("/addItem", addItem);
app.delete("/deleteItem/:id",deleteItem);
app.get('/fetchItems',fetchItems);
app.put('/updateItem/:id',updateItems);
app.post('/addCategory',addCategory);
app.get('/fetchCategory',fetchCategory);
app.post('/addOrder',addOrder);
app.get('/fetchOrderSummary/:orderid',fetchOrderSummary);
app.get('/fetchOrders/:userid',fetchOrders);
app.post("/create-payment-session", payment);
const port = 8080;
app.listen(port, () => {
  console.log("server is running");
});
dbConnect()
  .then(() => console.log("db connected successully"))
  .catch(() => console.log("db failed to connect"));
