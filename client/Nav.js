import React, { Component, Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './store';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      categoryId: 'all',
    };
  }
  onChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };
  searchByTerm = () => {
    const { searchTerm, categoryId } = this.state;
    const { history } = this.props;
    history.push(`/products/category/${categoryId}/search/${searchTerm}`);
  };
  render() {
    const { searchTerm, categoryId } = this.state;
    const { categories } = this.props;
    const { onChange, searchByTerm } = this;
    return (
      <Fragment>
        <Navbar bg="light">
          <Navbar.Brand>Grace Shopper</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() =>
                this.setState({ searchTerm: '', categoryId: 'all' })
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/products"
              onClick={() =>
                this.setState({ searchTerm: '', categoryId: 'all' })
              }
            >
              Products
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/admin" className="mr-auto">
              admin
            </Nav.Link>
            {this.props.isLoggedIn ? (
              <button
                className="mr-auto"
                type="button"
                onClick={this.props.logout}
              >
                logout
              </button>
            ) : (
              <Nav.Link as={Link} to="/login" className="mr-auto">
                login
              </Nav.Link>
            )}
            <Nav.Link as={Link} to="/cart">
              cart
            </Nav.Link>
          </Nav>
          <div className="input-group">
            <Form.Control
              as="select"
              variant="outline-secondary"
              value={categoryId}
              onChange={onChange}
              name="categoryId"
            >
              <option value="all">All</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </Form.Control>
            <FormControl
              type="text"
              placeholder="Search By Title"
              className="mx-sm-2"
              name="searchTerm"
              value={searchTerm}
              onChange={onChange}
            />
            <div className="input-group-append">
              <Button
                variant="outline-secondary"
                onClick={() => searchByTerm()}
              >
                Search
              </Button>
            </div>
          </div>
        </Navbar>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user, categories }) => {
  return {
    isLoggedIn: !!user.id,
    categories,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
