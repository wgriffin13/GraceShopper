import React, { Component, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="light">
          <Navbar.Brand>Grace Shopper</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Sign In || User
            </Nav.Link>
          </Nav>
        </Navbar>
      </Fragment>
    );
  }
}

export default Navigation;
