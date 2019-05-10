import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';


class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            email: '',
            firstname: '',
            lastname: '',
            street: '',
            city: '',
            zip: '',
            state: ''
        }
    }
    handleChange = evt => {
        this.setState({g
            [evt.target.name]: evt.target.value
        });
    }
    handleSubmit = evt => {
        evt.preventDefault();
        axios.post('/api/users', this.state)
            .then( () => this.props.history.push('/login'))
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="username">User Name:</Label>
                    <Input
                    type="text"
                    name="username"
                    value={this.state.username}
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
                <FormGroup>
                <Label for="firstname">First Name:</Label>
                    <Input
                    type="text"
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.handleChange}
                     />
                </FormGroup>
                <FormGroup>
                <Label for="lastname">Last Name:</Label>
                    <Input
                    type="text"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.handleChange}
                     />
                </FormGroup>
                <FormGroup>
                <Label for="street">Street Address:</Label>
                    <Input
                    type="text"
                    name="street"
                    value={this.state.street}
                    onChange={this.handleChange}
                     />
                </FormGroup>
                <FormGroup>
                <Label for="zip">Zip Code:</Label>
                    <Input
                    type="text"
                    name="zip"
                    value={this.state.zip}
                    onChange={this.handleChange}
                     />
                </FormGroup>
                <FormGroup>
                <Label for="city">City:</Label>
                    <Input
                    type="text"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                     />
                </FormGroup>
                <FormGroup>
                <Label for="state">State:</Label>
                    <Input
                    type="text"
                    name="state"
                    value={this.state.state}
                    onChange={this.handleChange}
                     />
                </FormGroup>
                <Button type="submit">Create Account</Button>
            </Form>
        )
    }
}

export default SignUp;
