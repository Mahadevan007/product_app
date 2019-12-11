const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var product = require("./products");

// mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/tasksproductdb");

app.get("/getdata", async (req, res) => {
  try {
    const all_products = await product.find();
    console.log(all_products);
    res.status(201).json(all_products);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/createproduct", async (req, res) => {
  console.log(req.body);
  var productdata = await req.body;
  var productinfo = new product(productdata);
  try {
    await productinfo.save();
    res.status(201).send(productinfo);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.put("/editproduct", async (req, res) => {
  console.log(req.body);
  const new_product = await product.findOne({ category: req.body.category });
  if (new_product) {
    const result = await product.updateMany(
      { _id: new_product._id },
      {
        $set: {
          category: req.body.category,
          item: req.body.item,
          quantity: req.body.quantity,
          price: req.body.price
        }
      }
    );
    res.status(201).send({
      message: "Success"
    });
  }
});

app.delete("/deleteproduct/:id", async (req, res) => {
  try {
    const new_product = await product.findByIdAndDelete({
      _id: req.params.id
    });
    res.status(201).send(new_product);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(4000, function() {
  console.log("Server has started");
});
