import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: {}
    };
  }

  componentDidMount() {
    if (this.props.user.id && this.props.currentOrder) {
      this.setState({ cart: this.props.currentOrder });
    } else if (this.props.sessionCart.sessionCartId) {
      this.setState({ cart: this.props.sessionCart });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      if (this.props.user.id) {
        this.setState({ cart: this.props.currentOrder });
      } else if (this.props.sessionCart.sessionCartId) {
        this.setState({ cart: this.props.sessionCart });
      }
      console.log('sessionCart in CDU', this.props.sessionCart);
    }
  }

  calculateOrderTotal = () => {
    return this.state.cart.lineitems
      .reduce((acc, item) => {
        acc += item.quantity * item.netTotalCost;
        // console.log(acc);
        return acc;
      }, 0)
      .toFixed(2);
  };

  render() {
    console.log('props in cart render', this.props);
    const { user } = this.props;

    return (
      <div className="container">
        <h2 className="mt-2">Shopping Cart</h2>
        {this.state.cart.status ? (
          <table className="table mt-2">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Discount</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {this.state.cart.lineitems.map(item => {
                return (
                  <tr key={item.productId}>
                    <td>
                      <div className="row">
                        <div className="col-6 col-lg-3">
                          <img
                            src={item.product.imageUrl}
                            className="img-thumbnail"
                          />
                        </div>
                        <div className="col-5 col-lg-7">
                          {item.product.title}
                        </div>
                      </div>
                    </td>
                    <td className="text-right">{item.orderPrice}</td>
                    <td className="text-right">{item.discount}</td>
                    <td className="text-right">{item.quantity}</td>
                    <td className="text-right">
                      {item.netTotalCost * item.quantity}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th scope="col">Total</th>
                <th />
                <th />
                <th />
                <th scope="col">{this.calculateOrderTotal()}</th>
              </tr>
            </tfoot>
          </table>
        ) : (
          <div className="mt-2">Oh no, there are no items in your cart!</div>
        )}
        <Button
          variant="success"
          href={`/#/orders/${this.props.currentOrder.id}`}
        >
          Checkout
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ user, sessionCart, orders }) => {
  return {
    user,
    sessionCart,
    currentOrder: orders.find(order => order.status === 'pending')
  };
};

export default connect(mapStateToProps)(Cart);
