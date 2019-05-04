import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import ProductImages from './ProductImages';
import { createSessionCart } from './store';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayImage: ''
    };
    console.log('props in ProductDetail', props);
  }

  componentDidMount() {
    this.setState({ displayImage: this.displayProduct().imageUrl });
  }

  displayProduct = () => {
    return this.props.products.find(
      prod => prod.id === this.props.match.params.id * 1
    );
  };

  findCategory = (prod, cats) => {
    return cats.find(cat => cat.id === prod.categoryId);
  };

  handleClick = event => {
    event.preventDefault();
    console.log(event.target.src);
    this.setState({ displayImage: event.target.src });
  };

  initSessionCart = (productId, qty) => {
    return {
      sessionCartId: 1,
      status: "pending",
      lineitems: [
        {
          quantity: qty,
          product: {
            id: productId
          }
        }
      ]
    };
  };

  addToCart = (productId, quantity) => {
    // Checks if user logged in
    if (this.props.user) {
      console.log('User loggined in: ' + this.props.user);
    } else if (this.props.sessionCart) {
      // Add item to session cart
      console.log('Session cart exists: ' + this.props.sessionCart);
    } else {
      // Create a session cart
      const sessionCart = this.initSessionCart(productId, quantity);
      this.props.requestCreateSessionCart(sessionCart);
    }
  };

  render() {
    const { categories } = this.props;

    const displayProduct = this.displayProduct();

    return (
      <Container className="d-flex mt-5">
        {/* Make sure to be defensive when loading a single product */}
        {this.displayProduct() ? (
          <Row>
            <Col className="mr-3">
              <Card>
                <Card.Header
                  className="text-center"
                  style={{
                    backgroundColor: `${
                      this.findCategory(displayProduct, categories).color
                    }`
                  }}
                >
                  {this.findCategory(displayProduct, categories).name}
                </Card.Header>
                <Card.Body className="text-center">
                  <Card.Img src={this.state.displayImage} />
                </Card.Body>
                <Card.Footer
                  className="text-center"
                  style={{
                    backgroundColor: `${
                      this.findCategory(displayProduct, categories).color
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
              </Row>
              <ProductImages
                prodIdx={displayProduct.id}
                handleClick={this.handleClick}
              />
              <button type="button" onClick={this.addToCart(displayProduct.id, 1)}>Add to Cart</button>
            </Col>
          </Row>
        ) : (
          'No Product Found'
        )}
      </Container>
    );
  }
}

const mapStateToProps = ({ categories, products, user, sessionCart }) => {
  return {
    products,
    categories,
    user,
    sessionCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      requestCreateSessionCart: (sessionCart) => dispatch(createSessionCart(sessionCart)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
