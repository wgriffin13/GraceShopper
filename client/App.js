import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Products from './Products';
import Navigation from './Nav';
import ProductDetail from './ProductDetail';
import { connect } from 'react-redux';
import { fetchCategories, fetchProducts } from './store';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';

class App extends Component {
  componentDidMount() {
    this.props.fetchInitialCategories();
    this.props.fetchInitialProducts();
  }
  render() {
    return (
      <Fragment>
        <HashRouter>
          <Route component={Navigation} />
          <Switch>
            <Route exact path="/products" component={Products} />
            <Route path="/products/category/:categoryId" component={Products} />
            <Route exact path="/products/:id" component={ProductDetail} />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </HashRouter>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchInitialCategories: () => dispatch(fetchCategories()),
    fetchInitialProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
