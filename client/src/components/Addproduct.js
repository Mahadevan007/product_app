import React from "react";
import "./Addproduct.css";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

class Addproduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      item: "",
      quantity: 0,
      price: 0
    };
  }

  componentDidMount() {}

  handleChange = e => {
    this.setState({ category: e.target.value });
  };

  valueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:4000/createproduct", this.state)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="Addproduct container">
        <h3>Back to Dashboard</h3>
        <Link to="/">Dashboard</Link>
        <h1>Add New Product</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-element">
            <select onChange={this.handleChange}>
              <option value="Home Appliances">Home Appliances</option>
              <option value="Kids wear">Kids Wear</option>
              <option value="Electronics">Electronics</option>
              <option value="Furnitures">Furnitures</option>
              <option value="Books">Books</option>
            </select>
          </div>
          <label>Item</label>
          <div className="form-element">
            <input
              placeholder="Item Name"
              value={this.state.item}
              onChange={this.valueChange}
              name="item"
              type="text"
            />
          </div>
          <label>Quantity</label>
          <div className="form-element">
            <input
              placeholder="Quantity"
              value={this.state.quantity}
              name="quantity"
              type="number"
              onChange={this.valueChange}
            />
          </div>
          <label>Price</label>
          <div className="form-element">
            <input
              placeholder="Price"
              value={this.state.price}
              name="price"
              type="number"
              onChange={this.valueChange}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
export default Addproduct;
