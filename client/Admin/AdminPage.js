import React, { Component, Fragment } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import UsersPanel from './UsersPanel';
import InventoryPanel from './Inventory';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.seedState()
    };
    console.log('props in AdminPage', props);
  }

  componentDidMount() {
    this.setState(this.seedState());
  }

  //temporarily hard seeding
  seedState = () => {
    return {
      users: [
        {
          id: 1,
          email: 'jane@email.com',
          password: '12345',
          isAdmin: false
        },
        {
          id: 2,
          email: 'joe@email.com',
          password: 'catsdogs',
          isAdmin: false
        },
        {
          id: 3,
          email: 'owner@email.com',
          password: '54321',
          isAdmin: true
        }
      ]
    };
  };

  render() {
    const users = this.state.users;
    const products = this.props.products;

    return (
      <Fragment>
        <Container className="d-flex">
          <Row>
            <Card>
              <UsersPanel users={users} />
              <InventoryPanel products={products} />
            </Card>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ products }) => {
  return {
    products
  };
};

export default connect(mapStateToProps)(Admin);
