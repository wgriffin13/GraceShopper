import React, { Component } from "react";
import { connect } from "react-redux";

import { loginAttempt, fetchUserOrders } from "./store";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: {}
    };
  }
  handleChange = evt => {
    this.setState(
      {
        [evt.target.name]: evt.target.value
      },
      () => console.log(this.state)
    );
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props
      .login({
        email: this.state.email,
        password: this.state.password
      })
      .then(user => {
        if (user.id) {
          this.props.requestFetchUserOrders(user.id);
          this.props.history.push("/");
        }
      })
      .catch(error =>
        this.setState(
          {
            error,
            email: "",
            password: ""
          },
          () => console.log(this.state)
        )
      );
  };
  render() {
    const { email, password, error } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <h5>Please Log In:</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log-In
          </button>
          {error.message ? (
            <div>
              <em>
                There was an error logging in. Your email and/or password were
                not recognized.
              </em>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(loginAttempt(user)),
    requestFetchUserOrders: userId => dispatch(fetchUserOrders(userId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login);

{
  /* <Col>
<h5>Log In:</h5>
<Form inline onSubmit={handleSubmit}>
  <InputGroup>
    <Form.Label>Email:</Form.Label>
    <FormControl
      type="email"
      placeHolder="email"
      value={email}
      onChange={handleChange}
    />
  </InputGroup>
  <InputGroup>
    <Form.Label>Password:</Form.Label>
    <FormControl
      type="password"
      value={password}
      onChange={handleChange}
      placeHolder="password"
    />
  </InputGroup>
  <Button type="submit" className="btn btn-primary">
    Log-In
  </Button>
  {error.message ? (
    <div>
      <em>
        There was an error logging in. Your email and/or password were
        not recognized.
      </em>
    </div>
  ) : (
    ''
  )}
</Form>
</Col> */
}
