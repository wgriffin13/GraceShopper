import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {

    constructor() {
        super();
        this.state = {
            cart: {}
        }
    }

    componentDidMount() {
        if (this.props.user.id) {
            console.log(this.props.id);
        } else if (this.props.sessionCart.sessionCartId) {
            this.setState({cart: this.props.sessionCart})
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            if (this.props.user.id) {
                console.log(this.props.id);
            } else if (this.props.sessionCart.sessionCartId) {
                this.setState({cart: this.props.sessionCart})
            }
            console.log(this.props.sessionCart)
        }
      }

    render () {
        return (
            <div className="container">
                <h2 className="mt-2">Shopping Cart</h2>
                {(this.state.cart.status) ?
                    <table className="table mt-2">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>
                    </table> :
                    <div className="mt-2">Oh no, there are no items in your cart!</div>}
            </div>
        )
    }
}

const mapStateToProps = ({ user, sessionCart }) => {
    return {
        user,
        sessionCart,
    }
}

export default connect(mapStateToProps)(Cart)
