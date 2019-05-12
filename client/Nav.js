import React, { Component, Fragment } from 'react';
import {
  Col,
  Navbar,
  Nav,
  Form,
  Button,
  Row,
  NavDropdown,
  NavItem,
  InputGroup,
  Dropdown,
  DropdownButton,
  DropdownItem
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

    const foundCategory = categories.filter(
      cat => cat.id === this.state.categoryId
    );

    console.log('categories', categories);
    console.log('foundCategory', foundCategory);
    console.log('navSearchTerms', this.props.navSearchTerms);

    return (
      <Fragment>
        <Navbar className="mb-2">
          <Nav>
            <Navbar.Brand>Grace Shopper</Navbar.Brand>

            <Nav.Link as={Link} to="/" onClick={() => clearNavSearchTerms()}>
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/products"
              onClick={() => clearNavSearchTerms()}
            >
              Products
            </Nav.Link>

            {isLoggedIn ? (
              <NavDropdown
                // title="Login"
                title={`${user.username}`}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Nav.Link as={Link} to="/user">
                    my account
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <button type="button" onClick={this.logout}>
                    logout
                  </button>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown title="Login" id="basic-nav-dropdown">
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
            )}

            {/* {user.isAdmin ? (

                  <Nav.Link as={Link} to="/admin" >
                    admin
                  </Nav.Link>

              ) : (
                ''
              )} */}
            {/* <Form inline>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form> */}

            <Col lg="5">
              <div>
                <Form inline>
                  <InputGroup>
                    <InputGroup.Prepend>
                      {categoryId === '0' ? (
                        <DropdownButton
                          title="All"
                          id="basic-nav-dropdown"
                          onSelect={onChange}
                        >
                          {/* <Dropdown.Item eventKey="0" title="All">
                          All
                        </Dropdown.Item> */}
                          {categories.map(cat => (
                            <Dropdown.Item
                              key={cat.id}
                              id={cat.id}
                              name="categoryId"
                              eventKey={cat.id}
                            >
                              {cat.name}
                            </Dropdown.Item>
                          ))}
                        </DropdownButton>
                      ) : (
                        <DropdownButton
                          title={`${foundCategory}`}
                          id="basic-nav-dropdown"
                          onSelect={onChange}
                        >
                          {categories.map(cat => (
                            <Dropdown.Item
                              key={cat.id}
                              id={cat.id}
                              name={cat.id}
                              eventKey={cat.id}
                            >
                              {cat.name}
                            </Dropdown.Item>
                          ))}
                        </DropdownButton>
                      )}
                    </InputGroup.Prepend>

                    <Form.Control
                      type="text"
                      placeholder="Search Product Title"
                      name="searchTerm"
                      value={searchTerm}
                      onChange={onChange}
                    />
                    <InputGroup.Append>
                      <Button
                        variant="info"
                        onClick={() => searchByTerm()}
                        size="sm"
                      >
                        Search
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form>
              </div>
            </Col>
            <Col>
              <Button variant="outline-success" as={Link} to="/cart">
                <i className="fas fa-shopping-cart" />
              </Button>
            </Col>
          </Nav>
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
