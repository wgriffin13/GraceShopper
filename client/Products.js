import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Products = ({ products, categories, match }) => {
  let displayProducts = [];
  if (match.params.categoryId) {
    displayProducts = products.filter(
      prod => prod.categoryId === match.params.categoryId * 1
    );
  } else {
    displayProducts = products;
  }
  const findCategory = (product, cats) => {
    return cats.find(cat => cat.id === product.categoryId);
  };
  return (
    <Container className="d-flex mt-3">
      {/* Make sure to be defensive when loading products based on the category */}
      {displayProducts.length ? (
        <Row>
          {displayProducts.map(product => {
            return (
              <Col lg={true} xl={true} key={product.id}>
                <Card
                  style={{ width: '15rem', height: '25rem' }}
                  className="my-2"
                >
                  <Card.Header
                    className="text-center"
                    style={{
                      backgroundColor: `${
                        findCategory(product, categories).color
                        }`,
                    }}
                  >
                    {findCategory(product, categories).name}
                  </Card.Header>
                  <Link to={`/products/${product.id}`}>
                    <Card.Body className="text-center">
                      <Card.Img src={product.imageUrl} />
                      <Card.Title>{product.title}</Card.Title>
                    </Card.Body>
                  </Link>
                  <Card.Footer
                    className="text-center"
                    style={{
                      backgroundColor: `${
                        findCategory(product, categories).color
                        }`,
                    }}
                  >
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
      ) : (
          'No Products Found (We can update with a better message later'
        )}
    </Container>
  );
};

const mapStateToProps = ({ categories, products }) => {
  return {
    categories,
    products,
  };
};

export default connect(mapStateToProps)(Products);
