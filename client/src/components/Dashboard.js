import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Dashboard.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/getdata").then(res => {
      const products = res.data;
      this.setState({ products });
      console.log(products);
    });
  }

  handleDelete = _id => {
    const products = this.state.products.filter(ele => _id !== ele._id);
    this.setState({ products });
    axios
      .delete(`http://localhost:4000/deleteproduct/${_id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <h1>Dashboard</h1>
        <Link to="/add">Add New</Link>
        <table className="table" cellPadding="100px" cellSpacing="200px">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Category</th>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((ele, index) => (
              <tr key={ele._id}>
                <td>{index + 1}</td>
                <td>{ele.category}</td>
                <td>{ele.item}</td>
                <td>{ele.price}</td>
                <td>{ele.quantity}</td>
                <td>
                  <Link to="/edit">Edit</Link>
                  {"/"}
                  <button
                    className="btn"
                    onClick={() => this.handleDelete(ele._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;
