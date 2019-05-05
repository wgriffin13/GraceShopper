import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  FormGroup,
  Input,
  Label,
  Table,
  Row
} from 'reactstrap';
// import CheckOut from './CheckOut';

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

  // checkOutOrder = id => {
  //   let path = `/orders/${id}`;
  //   this.props.history.push(path);
  // };

  render() {
    console.log('props in cart render', this.props);
    const order = this.props.orders.find(_order => _order.status === 'pending');
    console.log('order in cart render', order);
    // const user = this.props.user;
    return (
      <div>
        {order ? (
          <Fragment>
            <div>found Order Id: {order.id} </div>
            <hr />

            <Button
              color="success"
              //   onClick={this.checkOutOrder(this.state.pendingOrder.id)}
            >
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
  //   console.log('state in cart MSTP', state);
  return {
    orders: state.orders,
    user: state.user
  };
};

export default connect(mapStateToProps)(Cart);
