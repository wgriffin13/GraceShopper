import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import ProductImages from './ProductImages';
import { createPendingOrder, addToCart } from './store';

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

  addToCart = (item) => {
    this.props.addToCart(item)
      .then(this.props.history.push('/cart'))
  }

  handleAddToCart = () => {
    const {user, order } = this.props;
    console.log(user);
    console.log(order);
    if (user && order) {
      this.addToCart({
        orderId: order.id,
        productId: this.props.match.params.id,
        quantity: 1
      })
    } else if (user && !order) {
      this.props.createPendingOrder({
        userId: user.id,
        status: 'pending'
      })
        .then( newOrder => {
          this.addToCart({
            orderId: newOrder.id,
            productId: this.props.match.params.id,
            quantity: 1
          })
        })
    }
  }

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
            </Col>
          </Row>
        ) : (
          'No Product Found'
        )}
      </Container>
    );
  }
}

const mapStateToProps = ({ user, categories, products, orders }) => {
  return {
    user,
    products,
    categories,
    order: orders.find(order => order.status === 'pending')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPendingOrder: (userId) => dispatch(createPendingOrder(userId)),
    addToCart: (item) => dispatch(addToCart(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
