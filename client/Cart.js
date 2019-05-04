import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import CheckOut from './CheckOut';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      pendingOrder: {}
    };
  }

  findPendingOrder() {
    this.setState({
      pendingOrder: this.props.orders.find(order => order.status === 'pending')
    });
  }

  checkOutOrder = userId => {
    let path = `/orders/user/${userId}`;
    this.props.history.push(path);
  };

  render() {
    console.log('props in cart render', this.props);
    const pendingOrder = this.state;
    const user = this.props.user;
    return (
      <div>
        {pendingOrder ? (
          <Fragment>
            <div>Order found - {this.state.pendingOrder.id} </div>
            <Button color="success" onClick={this.checkOutOrder(user.id)}>
              Confirm Order
            </Button>
          </Fragment>
        ) : (
          'No items in your cart'
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state in cart MSTP', state);
  return {
    orders: state.orders,
    user: state.user
  };
};

export default connect(mapStateToProps)(Cart);
