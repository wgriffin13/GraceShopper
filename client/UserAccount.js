import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Accordion,
  Button,
  Card,
  Col,
  Pagination,
  Table,
  Row
} from 'react-bootstrap';
import OrdersPanel from './Admin/OrdersPanel';

class UserAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordion: []
    };
  }

  componentDidMount() {
    this.setState({ accordion: [true] });
  }

  toggleAccordion = tab => {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state
    });
  };

  render() {
    const { user, orders } = this.props;

    console.log('props in UserAccount', this.props);

    if (user) {
      return (
        <Card>
          <Card.Header
            style={{ backgroundColor: '#f46854' }}
            className="text-white"
          >
            User Account
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>{user.name}</Col>
            </Row>
            <Row>
              <Col>{user.email}</Col>
            </Row>
            <Row>
              <Col>
                <small className="text-center">
                  registered user since {user.createdAt.slice(0, 10)}
                </small>
              </Col>
            </Row>
            <hr />

            <Accordion>
              <OrdersPanel orders={orders} />
            </Accordion>
          </Card.Body>
        </Card>
      );
    } else {
      return '';
    }
  }
}

const mapStateToProps = ({ products, user, orders }) => {
  return {
    products,
    user,
    orders
  };
};

export default connect(mapStateToProps)(UserAccount);
