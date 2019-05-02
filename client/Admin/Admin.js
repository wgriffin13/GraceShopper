import React, { Component, Fragment } from 'react';
import { Button, ButtonGroup, Container, Col, Row } from 'react-bootstrap';
// import { connect } from 'react-redux';
import UsersPanel from './UsersPanel';

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      users: this.seedState()
    };
  }

  componentDidMount() {
    this.setState(this.seedState());
  }

  //temporarily hard seeding
  seedState = () => {
    return {
      users: [
        {
          email: 'jane@email.com',
          password: '12345'
        },
        {
          email: 'joe@email.com',
          password: 'catsdogs'
        },
        {
          email: 'owner@email.com',
          password: '54321',
          isAdmin: true
        }
      ]
    };
  };

  render() {
    return (
      <Fragment>
        <Container className="d-flex">
          <Row>
            <Col>
              <UsersPanel users={this.state.users} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Admin;
