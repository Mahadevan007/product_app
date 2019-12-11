var mongoose = require("mongoose");

var product = mongoose.model("productdata", {
  category: {
    type: String
  },
  item: {
    type: String
  },
  quantity: {
    type: Number
  },
  price: {
    type: Number
  }
});

module.exports = product;
