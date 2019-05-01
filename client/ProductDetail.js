import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import ProductImages from './ProductImages';

const ProductDetail = ({ products, categories, match }) => {
  const displayProduct = products.find(prod => prod.id === match.params.id * 1);
  const findCategory = (prod, cats) => {
    return cats.find(cat => cat.id === prod.categoryId);
  };

  return (
    <Container className="d-flex mt-5">
      {/* Make sure to be defensive when loading a single product */}
      {displayProduct ? (
        <Row>
          <Col className="mr-3">
            <Card>
              <Card.Header
                className="text-center"
                style={{
                  backgroundColor: `${
                    findCategory(displayProduct, categories).color
                  }`
                }}
              >
                {findCategory(displayProduct, categories).name}
              </Card.Header>
              <Card.Body className="text-center">
                <Card.Img src={displayProduct.imageUrl} />
              </Card.Body>
              <Card.Footer
                className="text-center"
                style={{
                  backgroundColor: `${
                    findCategory(displayProduct, categories).color
                  }`
                }}
              >
                <Card.Subtitle>
                  ${displayProduct.price}
                  <span> / {displayProduct.quantity} inStock</span>
                </Card.Subtitle>
              </Card.Footer>
            </Card>
          </Col>
          <Col className="d-flex flex-column align-items-start">
            <Row className="d-flex mt-auto mb-auto">
              <h4>{displayProduct.title}</h4>

              <p className="text-justify">{displayProduct.description}</p>
              <ProductImages prodIdx={displayProduct.id} />
            </Row>
          </Col>
        </Row>
      ) : (
        'No Product Found'
      )}
    </Container>
  );
};

const mapStateToProps = ({ categories, products }) => {
  return {
    products,
    categories
  };
};

export default connect(mapStateToProps)(ProductDetail);
