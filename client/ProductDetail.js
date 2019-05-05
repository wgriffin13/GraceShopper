import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import ProductImages from './ProductImages';
import { createPendingOrder, addToCart, createSessionCart, setSessionCart  } from './store';

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

  addToCartOrder = (order) => {
    this.props.addToCart({
      orderId: order.id,
      productId: this.props.match.params.id * 1,
      quantity: 1,
      orderPrice: this.displayProduct().price,
      netTotalCost: this.displayProduct().price
    })
      .then(() => this.props.history.push('/cart'))
  }

  handleAddToCart = () => {
    const {user, order } = this.props;
    if (user && order) {
      this.addToCartOrder(order)
    } else if (user && !order) {
      this.props.createPendingOrder({
        userId: user.id,
        status: 'pending'
      })
        .then( newOrder => {
          this.addToCartOrder(newOrder)
        })
    }
  }

  initSessionCart = (product, qty) => {
    return {
      sessionCartId: 1,
      status: "pending",
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
    const lineItemIdx = tempSessionCart.lineitems.findIndex(item => item.product.id === product.id);
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
    console.log(tempSessionCart);
  }

  addToCart = (product, quantity) => {
    
    // Checks if user logged in
    console.log(product)
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
    this.props.history.push('/cart')
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
                <button type="button" className="btn btn-primary" onClick={this.handleAddToCart}>Add To Cart</button>
              </Row>
              <ProductImages
                prodIdx={displayProduct.id}
                handleClick={this.handleClick}
              />
              {/*TEMPORARY BUTTON TO TEST SESSION CART FUNCTIONALITY*/}
              <button type="button" onClick={() => this.addToCart(displayProduct, 1)}>Add to Cart</button>
            </Col>
          </Row>
        ) : (
          'No Product Found'
        )}
      </Container>
    );
  }
}


const mapStateToProps = ({ categories, products, user, sessionCart, orders }) => {
  return {
    user,
    products,
    categories,
    sessionCart,
    order: orders.find(order => order.status === 'pending')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPendingOrder: (order) => dispatch(createPendingOrder(order)),
    addToCart: (item) => dispatch(addToCart(item)),
    requestCreateSessionCart: (sessionCart) => dispatch(createSessionCart(sessionCart)),
    requestUpdateCart: (sessionCart) => dispatch(setSessionCart(sessionCart))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
