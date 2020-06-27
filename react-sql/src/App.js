import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (_) => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((reponse) => this.setState({ products: reponse.data }))
      .catch((err) => console.error(err));
  };
  renderProduct = ({ product_id, name }) => <div key={product_id}>{name}</div>;

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        {products.map(this.renderProduct)}
        <div>hola</div>
      </div>
    );
  }
}

export default App;
