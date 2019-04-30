import React, { Component } from 'react';
import { Button, Card, Container, Col, Row } from 'react-bootstrap';
const seed = require('../server/db/seed');

class Products extends Component {
  findCategory = (product, categories) => {
    return categories.find(cat => cat.id === product.categoryId);
  };
  render() {
    //temporarily pulling data from seed file
    const products = seed.seedProducts;
    const categories = seed.categories;

    return (
      <Container className="d-flex mt-3">
        <Row>
          {products.map(product => {
            return (
              <Col lg={true} xl={true} key={product.id}>
                <Card
                  style={{
                    width: '15rem',
                    height: '25rem'
                    // borderColor: `${
                    //   this.findCategory(product, categories).color
                    // }`
                  }}
                  className="mb-3 mt-3 shadow bg-white rounded"
                >
                  <Card.Header
                    className="text-center"
                    style={{
                      backgroundColor: `${
                        this.findCategory(product, categories).color
                      }`
                    }}
                  >
                    {this.findCategory(product, categories).name}
                  </Card.Header>
                  <Card.Body className="text-center">
                    <Card.Img variant="top" src={product.imageUrl} />
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Link href={`/#/products/${product.id}`}>
                      details
                    </Card.Link>
                  </Card.Body>
                  <Card.Footer
                    className="text-center"
                    style={{
                      backgroundColor: `${
                        this.findCategory(product, categories).color
                      }`
                    }}
                  >
                    ${product.price}
                    <span> / {product.quantity} inStock</span>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default Products;
