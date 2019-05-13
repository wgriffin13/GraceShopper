import React, { Component, Fragment } from 'react';
import {
  Col,
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  NavDropdown,
  InputGroup
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, updateNavSearchValsBasedOnURL } from './store';

class Navigation extends Component {
  constructor(props) {
    super(props);
    if (!props.navSearchTerms.categoryId || !props.navSearchTerms.searchTerm) {
      this.state = {
        searchTerm: '',
        categoryId: '0'
      };
    } else {
      this.state = {
        searchTerm: props.navSearchTerms.searchTerm
          ? props.navSearchTerms.searchTerm
          : '',
        categoryId: props.navSearchTerms.categoryId
          ? props.navSearchTerms.categoryId
          : '0'
      };
    }
  }
  componentDidUpdate(prevProps) {
    const { navSearchTerms } = this.props;
    if (
      prevProps.navSearchTerms.categoryId !== navSearchTerms.categoryId ||
      prevProps.navSearchTerms.searchTerm !== navSearchTerms.searchTerm
    ) {
      this.setState({
        searchTerm: navSearchTerms.searchTerm ? navSearchTerms.searchTerm : '',
        categoryId: navSearchTerms.categoryId ? navSearchTerms.categoryId : '0'
      });
    }
  }

  logout = () => {
    this.props.logout();
    this.props.history.push('/');
  };
  onChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };
  searchByTerm = () => {
    const { searchTerm, categoryId } = this.state;
    const { history } = this.props;
    history.push(`/products/search/category/${categoryId}/term/${searchTerm}`);
  };
  render() {
    const { searchTerm, categoryId } = this.state;
    const { categories, isLoggedIn, user, clearNavSearchTerms } = this.props;
    const { onChange, searchByTerm } = this;

    return (
      <Fragment>
        <Navbar className="mb-2">
          <Container>
            <Col>
              <Nav>
                <Navbar.Brand>Grace Shopper</Navbar.Brand>

                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => clearNavSearchTerms()}
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="/products"
                  onClick={() => clearNavSearchTerms()}
                >
                  Products
                </Nav.Link>
              </Nav>
            </Col>

            {isLoggedIn ? (
              <Fragment>
                {/* <p style={{ fontSize: 12, fontWeight: 'lighter' }}>
                  signed in as
                </p> */}
                <NavDropdown title={`${user.username}`} id="basic-nav-dropdown">
                  {user.isAdmin ? (
                    <NavDropdown.Item>
                      <Nav.Link as={Link} to="/admin">
                        admin
                      </Nav.Link>
                    </NavDropdown.Item>
                  ) : (
                    <NavDropdown.Item>
                      <Nav.Link as={Link} to="/user">
                        my account
                      </Nav.Link>
                    </NavDropdown.Item>
                  )}

                  <NavDropdown.Item>
                    <button type="button" onClick={this.logout}>
                      logout
                    </button>
                  </NavDropdown.Item>
                </NavDropdown>
              </Fragment>
            ) : (
              <Fragment>
                <NavDropdown title="login" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Nav.Link as={Link} to="/login" className="mr-auto">
                      existing account
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#create">
                    <Nav.Link as={Link} to="/signup">
                      create account
                    </Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Fragment>
            )}

            <Nav.Link as={Link} to="/cart" style={{ color: '#7cc245' }}>
              <i className="fas fa-shopping-cart" size="9x" />
            </Nav.Link>

            <Col>
              <Nav className="justify-content-end">
                <Form>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <Form.Control
                        size="sm"
                        as="select"
                        value={categoryId}
                        onChange={onChange}
                        name="categoryId"
                      >
                        <option value="0">All Categories</option>
                        {categories.map(cat => (
                          <option
                            key={cat.id}
                            value={cat.id}
                            style={{ backgrounColor: `${cat.color}` }}
                          >
                            {cat.name}
                          </option>
                        ))}
                      </Form.Control>
                    </InputGroup.Prepend>
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Search Products"
                      name="searchTerm"
                      value={searchTerm}
                      onChange={onChange}
                    />
                    <InputGroup.Append>
                      <Button
                        size="sm"
                        variant="outline-success"
                        onClick={() => searchByTerm()}
                      >
                        Search
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form>
              </Nav>
            </Col>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user, categories, navSearchTerms }) => {
  return {
    isLoggedIn: !!user.id,
    categories,
    user,
    navSearchTerms
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    clearNavSearchTerms: () => dispatch(updateNavSearchValsBasedOnURL('0', ''))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
