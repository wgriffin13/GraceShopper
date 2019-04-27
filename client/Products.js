import React, { Component, Fragment } from 'react';
import { Card } from 'react-bootstrap';
const seed = require('../server/db/seed');

class Products extends Component {
  render() {
    const products = seed.seedProducts;
    return (
      <Fragment>
        <ul>
          {products.map(product => {
            return (
              <li key={product.id}>
                <Card style={{ width: '35rem' }}>
                  <div>{product.title}</div>
                  <div>{product.price}</div>
                  <div>{product.quantity}</div>
                  <Card.Img src={product.imageUrl} />
                  <div>{product.description}</div>
                </Card>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default Products;
