import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Button
} from 'reactstrap';

class CheckoutSuccess extends Component {

    render () {
        return (
            <Card>
                <CardHeader>
                    Success
                </CardHeader>
                <CardBody>
                    <div className="row justify-content-center">
                        <h2>Purchase Complete</h2>
                    </div>
                    <div className="row justify-content-center mt-1">
                        <h4>Thank You!</h4>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <Button color="info" onClick={() => this.props.history.push('/user')}><i className="fas fa-arrow-left" /> Orders</Button>
                    </div>
                </CardBody>
            </Card>
        )
    }
}

export default CheckoutSuccess;
