import React, { Component } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
const seed = require('../server/db/seed');

class Products extends Component {
  render() {
    const categoryIdList = {
      1: 'accessories',
      2: 'boxing',
      3: 'cardio',
      4: 'pilates',
      5: 'free weights',
      6: 'smart fitness',
      7: 'yoga',
      8: 'resistance'
    };

    //temporary!!! products not coming from db, just wanted to test product layout
    const products = seed.seedProducts;

    return (
      <Container className="d-flex">
        <Row>
          {products.map(product => {
            return (
              <Col lg={true} xl={true} key={product.id}>
                <Card
                  style={{ width: '15rem', height: '25rem' }}
                  className="my-2"
                >
                  <Card.Header className="text-center">
                    {categoryIdList[product.categoryId]}
                  </Card.Header>
                  <Card.Body className="text-center">
                    <Card.Img src={product.imageUrl} />
                    <Card.Title>{product.title}</Card.Title>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Card.Subtitle>
                      ${product.price}
                      <span> / {product.quantity} inStock</span>
                    </Card.Subtitle>
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
