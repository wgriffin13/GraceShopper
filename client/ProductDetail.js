import React, { Component } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
const seed = require('../server/db/seed');

class ProductDetail extends Component {
  findCategory = (product, categories) => {
    return categories.find(cat => cat.id === product.categoryId);
  };
  render() {
    //temporarily pulling data from seed file
    const categories = seed.categories;
    const products = seed.seedProducts;
    const tempProduct = products[6];

    return (
      <Container className="d-flex mt-5">
        <Row>
          <Col className="mr-3">
            <Card>
              <Card.Header
                className="text-center"
                style={{
                  backgroundColor: `${
                    this.findCategory(tempProduct, categories).color
                  }`
                }}
              >
                {this.findCategory(tempProduct, categories).name}
              </Card.Header>
              <Card.Body className="text-center">
                <Card.Img src={tempProduct.imageUrl} />
              </Card.Body>
              <Card.Footer
                className="text-center"
                style={{
                  backgroundColor: `${
                    this.findCategory(tempProduct, categories).color
                  }`
                }}
              >
                <Card.Subtitle>
                  ${tempProduct.price}
                  <span> / {tempProduct.quantity} inStock</span>
                </Card.Subtitle>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="d-flex flex-column align-items-start">
            <Row className="d-flex mt-auto mb-auto">
              <h4>{tempProduct.title}</h4>

              <p className="text-justify">{tempProduct.description}</p>
              <Container className="d-flex justify-content-center">
                {tempProduct.detailImages.map(img => {
                  return (
                    <Image
                      key={img}
                      src={img}
                      style={{ width: '5rem', height: '5rem' }}
                    />
                  );
                })}
              </Container>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProductDetail;
