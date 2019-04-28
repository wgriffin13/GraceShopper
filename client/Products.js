import React, { Component, Fragment } from "react";
import { Card, CardDeck } from "react-bootstrap";
const seed = require("../server/db/seed");

class Products extends Component {
  render() {
    const products = seed.seedProducts;
    console.log("products.length", products.length);
    return (
      <Fragment>
        <CardDeck>
          {products.map(product => {
            return (
              <Card key={product.id} style={{ width: "35rem" }}>
                <Card.Img variant="top" src={product.imageUrl} />
                <div>{product.title}</div>
                <div>
                  ${product.price}
                  <span> / {product.quantity} inStock</span>
                </div>

                {/* <div>{product.description}</div> */}
              </Card>
            );
          })}
        </CardDeck>
      </Fragment>
    );
  }
}

export default Products;
