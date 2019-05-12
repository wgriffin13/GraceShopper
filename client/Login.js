import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAttempt, 
        createPendingOrder,
        addToCart,
        updateQuantity,
        fetchUserOrders} from './store';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: {}
        }
    }
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        }, () => console.log(this.state));
    }
    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.login({
            email: this.state.email,
            password: this.state.password
        })
            .then(user => {
                if (user.id) {
                    this.props.requestFetchUserOrders(user.id)
                        .then( (orders) => {
                            if (this.props.sessionCart){
                                const pendingOrder = orders.find(order => order.status === 'pending');
                                this.dealWithSessionCart(pendingOrder, user);
                            }
                        })
                    this.props.history.push('/')
                }
            })
            .catch(error => this.setState({
                error,
                email: '',
                password: ''
            }, () => console.log(this.state)))

    }
    dealWithSessionCart = async (pendingOrder, user) => {
        if (!pendingOrder) {
            pendingOrder = await this.props.createPendingOrder({
                userId: user.id,
                status: 'pending'
            });
        }
        this.props.sessionCart.lineitems.forEach(item => this.dealWithCartItems(item, pendingOrder))
        
    }
    dealWithCartItems = (item, pendingOrder) => {
        const existingli = pendingOrder.lineitems.find(li => li.productId === item.productId);
        if (existingli) {
            const newQuant = existingli.quantity + item.quantity;
            this.props.updateQuantity(existingli.id, newQuant);
        } else {
            item.orderId = pendingOrder.id;
            this.props.addToCart(item);
        }
    }
    render() {
        const { email, password, error } = this.state;
        const { handleChange, handleSubmit } = this;
        return (
            <div>
                <h1>Please Log In:</h1>
                <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" value={email} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" value={password} onChange={handleChange} className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Log-In</button>
                    {error.message ? <div><em>There was an error logging in. Your email and/or password were not recognized.</em></div> : ''}
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({sessionCart, orders}) => {
    return {
        sessionCart,
        pendingOrder: orders.find(order => order.status === 'pending')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(loginAttempt(user)),
        requestFetchUserOrders: (userId) => dispatch(fetchUserOrders(userId)),
        createPendingOrder: (order) => dispatch(createPendingOrder(order)),
        addToCart: (item) => dispatch(addToCart(item)),
        updateQuantity: (id, quant) => dispatch(updateQuantity(id, quant))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
