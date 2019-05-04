import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// import { Accordion, Card, Container, Col, Form, Row } from 'react-bootstrap';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Table,
  Row
} from 'reactstrap';

class CheckOut extends Component {
  constructor() {
    super();
    this.state = {
      order: {
        id: 44,
        userId: 1,
        status: 'pending',
        createdAt: '2019-05-03 13:38:42.201-04'
      },
      user: {
        name: 'JaneD',
        email: 'jane@email.com',
        password: '12345',
        createdAt: '2016-03-13 13:38:42.201-04'
      },
      collapseShipping: false,
      collapsePayment: false,
      customShipping: [true, false],
      customPayment: [true, false]
    };
  }

  // findOrder() {
  //   this.setState({
  //     order: this.props.orders.find(order => order.status === 'pending')
  //   });
  // }

  // findUser() {
  //   const order = this.state.order;
  //   this.setState({
  //     user: this.props.users.filter(usr => usr.id === order.userId)
  //   });
  // }
  toggleShipping = () => {
    this.setState({ collapseShipping: !this.state.collapseShipping });
  };

  togglePayment = () => {
    this.setState({ collapsePayment: !this.state.collapsePayment });
  };

  toggleCustomShipping(tab) {
    const prevState = this.state.customShipping;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      customShipping: state
    });
  }

  toggleCustomPayment(tab) {
    const prevState = this.state.customPayment;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      customPayment: state
    });
  }

  render() {
    const { order, user } = this.state;

    // console.log(order);
    // console.log(user);
    console.log(this.props);

    return (
      <Fragment>
        <hr />
        <Row>
          <Col>{user.name}</Col>
          <Col>
            <small className="text-center">
              registered user since {user.createdAt.slice(0, 10)}
            </small>
          </Col>
          <Col>
            <span className="float-right">{user.email}</span>
          </Col>
        </Row>

        <hr />
        <Card>
          <CardHeader>
            Order # {order.id}
            <span className="float-right">{order.createdAt.slice(0, 10)}</span>
          </CardHeader>

          <CardBody>
            <div id="shippingAccordion" data-children=".item">
              <div className="item">
                <Button
                  className="mb-3 p-0"
                  color="link"
                  onClick={() => this.toggleCustomShipping(0)}
                  aria-expanded={this.state.customShipping[0]}
                  aria-controls="shippingAccordion1"
                >
                  Shipping
                </Button>
                <Collapse
                  isOpen={this.state.customShipping[0]}
                  data-parent="#shippingAccordion"
                  id="shippingAccordion1"
                  className="ml-3"
                >
                  <FormGroup>
                    <Label htmlFor="company">Name</Label>
                    <Input
                      type="text"
                      id="company"
                      placeholder="Enter your company name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="vat">Company</Label>
                    <Input type="text" id="vat" placeholder="DE1234567890" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="street">Street</Label>
                    <Input
                      type="text"
                      id="street"
                      placeholder="Enter street name"
                    />
                  </FormGroup>
                  <FormGroup row className="my-0">
                    <Col xs="8">
                      <FormGroup>
                        <Label htmlFor="city">City</Label>
                        <Input
                          type="text"
                          id="city"
                          placeholder="Enter your city"
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="postal-code">Postal Code</Label>
                        <Input
                          type="text"
                          id="postal-code"
                          placeholder="Postal Code"
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      type="text"
                      id="country"
                      placeholder="Country name"
                    />
                  </FormGroup>
                </Collapse>
              </div>
            </div>
            <div id="paymentAccordion" data-children=".item">
              <div className="item">
                <Button
                  className="mb-3 p-0"
                  color="link"
                  onClick={() => this.toggleCustomPayment(0)}
                  aria-expanded={this.state.customPayment[0]}
                  aria-controls="paymentAccordion1"
                >
                  Payment
                </Button>
                <Collapse
                  isOpen={this.state.customPayment[0]}
                  data-parent="#paymentAccordion"
                  id="paymentAccordion1"
                  className="ml-3"
                >
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="nameOnCard">Name on Card</Label>
                        <Input
                          type="text"
                          id="nameOnCard"
                          placeholder="Enter your name"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="ccnumber">Credit Card Number</Label>
                        <Input
                          type="text"
                          id="ccnumber"
                          placeholder="0000 0000 0000 0000"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="ccmonth">Month</Label>
                        <Input type="select" name="ccmonth" id="ccmonth">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="ccyear">Year</Label>
                        <Input type="select" name="ccyear" id="ccyear">
                          <option>2017</option>
                          <option>2018</option>
                          <option>2019</option>
                          <option>2020</option>
                          <option>2021</option>
                          <option>2022</option>
                          <option>2023</option>
                          <option>2024</option>
                          <option>2025</option>
                          <option>2026</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="cvv">CVV/CVC</Label>
                        <Input
                          type="text"
                          id="cvv"
                          placeholder="123"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Collapse>
              </div>
            </div>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders,
    users: state.users
  };
};

export default connect(mapStateToProps)(CheckOut);
