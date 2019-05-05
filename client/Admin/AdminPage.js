import React, { Component, Fragment } from 'react';
import { Accordion, Card, Container, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import UsersPanel from './UsersPanel';
import InventoryPanel from './InventoryPanel';
import OrdersPanel from './OrdersPanel';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordion: []
    };
  }

  componentDidMount() {
    this.setState({ accordion: [true, true, true] });
  }

  toggleAccordion = tab => {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state
    });
  };

  render() {
    const { products, users, orders } = this.props;

    return (
      <Fragment>
        <Container className="d-flex">
          <Col>
            <Accordion>
              <Card>
                <OrdersPanel orders={orders} />
                <UsersPanel users={users} />
                <InventoryPanel products={products} />
              </Card>
            </Accordion>
          </Col>
        </Container>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ products, users, orders }) => {
  return {
    products,
    users,
    orders
  };
};

export default connect(mapStateToProps)(Admin);
