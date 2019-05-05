import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import ProductImages from './ProductImages';
import { createSessionCart, setSessionCart } from './store';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayImage: ''
    };
  }

  componentDidMount() {
    if (this.props.match.params.id !== localStorage.getItem('matchParams')) {
      this.setState({
        displayImage: this.displayProduct().imageUrl
      });
    } else {
      this.hydrateStateWithLocalStorage();
    }
  }

  hydrateStateWithLocalStorage = () => {
    if (localStorage.hasOwnProperty('displayImage')) {
      let value = localStorage.getItem('displayImage');
      try {
        value = JSON.parse(value);
        this.setState({ displayImage: value });
      } catch (e) {
        this.setState({ displayImage: value });
      }
    }
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({ displayImage: event.target.src });
    localStorage.setItem('displayImage', JSON.stringify(event.target.src));
    localStorage.setItem('matchParams', this.props.match.params.id);
  };

  displayProduct = () => {
    if (this.props.products.length) {
      const displayProd = this.props.products.find(
        prod => prod.id === this.props.match.params.id * 1
      );
      return displayProd;
    }
  };

  findCategory = (prod, cats) => {
    return cats.find(cat => cat.id === prod.categoryId);
  };

  initSessionCart = (product, qty) => {
    return {
      sessionCartId: 1,
      status: 'pending',
      lineitems: [
        {
          quantity: qty,
          orderPrice: product.price,
          discount: 0,
          netTotalCost: product.price,
          productId: product.id,
          product: {
            id: product.id,
            title: product.title,
            imageUrl: product.imageUrl
          }
        }
      ]
    };
  };

  updateSessionCart = (product, qty) => {
    const tempSessionCart = this.props.sessionCart;
    const lineItemIdx = tempSessionCart.lineitems.findIndex(
      item => item.product.id === product.id
    );
    if (lineItemIdx > -1) {
      tempSessionCart.lineitems[lineItemIdx].quantity += qty;
    } else {
      tempSessionCart.lineitems.push({
        quantity: qty,
        orderPrice: product.price,
        discount: 0,
        netTotalCost: product.price,
        productId: product.id,
        product: {
          id: product.id,
          title: product.title,
          imageUrl: product.imageUrl
        }
      });
    }
    this.props.requestCreateSessionCart(tempSessionCart);
    // console.log(tempSessionCart);
  };

  addToCart = (product, quantity) => {
    // Checks if user logged in
    if (this.props.user.email) {
      console.log('User loggined in: ' + this.props.user);
    } else if (this.props.sessionCart.sessionCartId) {
      // Session cart exists -> updates quantity or adds line item
      console.log('Session cart exists: ' + this.props.sessionCart);
      this.updateSessionCart(product, quantity);
    } else {
      // Create a session cart
      const sessionCart = this.initSessionCart(product, quantity);
      this.props.requestCreateSessionCart(sessionCart);
    }
    // Sends user to cart
    this.props.history.push('/cart');
  };

  render() {
    const { categories } = this.props;

    const product = this.props.products.find(
      prd => prd.id === this.props.match.params.id * 1
    );

    return (
      <Container className="d-flex mt-5">
        {/* Make sure to be defensive when loading a single product */}
        {product ? (
          <Row>
            <Col className="mr-3">
              <Card>
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
                  <Card.Img src={this.state.displayImage} />
                </Card.Body>
                <Card.Footer
                  className="text-center"
                  style={{
                    backgroundColor: `${
                      this.findCategory(product, categories).color
                    }`
                  }}
                >
                  <Card.Subtitle>
                    ${product.price}
                    <span> / {product.quantity} inStock</span>
                  </Card.Subtitle>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="d-flex flex-column align-items-start">
              <Row className="d-flex mt-auto mb-auto">
                <h4>{product.title}</h4>

                <p className="text-justify">{product.description}</p>
              </Row>
              <ProductImages
                prodIdx={product.id}
                handleClick={this.handleClick}
              />
              {/*TEMPORARY BUTTON TO TEST SESSION CART FUNCTIONALITY*/}
              <button type="button" onClick={() => this.addToCart(product, 1)}>
                Add to Cart
              </button>
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
    sessionCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestCreateSessionCart: sessionCart =>
      dispatch(createSessionCart(sessionCart)),
    requestUpdateCart: sessionCart => dispatch(setSessionCart(sessionCart))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
