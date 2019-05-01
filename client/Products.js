import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
              <Col key={product.id}>
                <Card
                  key={product.id}
                  style={{
                    width: "15rem",
                    height: "27rem"

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
                        findCategory(product, categories).color
                      }`
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
      ) : (
        "No Products Found (We can update with a better message later"
      )}
    </Container>
  );
};

const mapStateToProps = ({ categories, products }) => {
  return {
    categories,
    products
  };
};

export default connect(mapStateToProps)(Products);
