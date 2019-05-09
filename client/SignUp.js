import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            userName: '',
            password: '',
            email: '',
        }
    }
    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value
        }, () => console.log(this.state));
    }
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="userName">User Name:</Label>
                    <Input
                    type="text"
                    name="userName"
                    value={this.state.userName}
                    onChange={this.handleChange}
                     />
                </FormGroup>
                <FormGroup>
                <Label for="email">Email:</Label>
                    <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                     />
                </FormGroup>
                <FormGroup>
                <Label for="password">Password:</Label>
                    <Input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                     />
                </FormGroup>
                <Button>Create Account</Button>
            </Form>
        )
    }
}

export default SignUp;