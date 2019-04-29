import React, { Component, Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Products from './Products';
import Navigation from './Nav';
import ProductDetail from './ProductDetail';

class App extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter>
          <Route component={Navigation} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/home" component={Home} />
        </HashRouter>
      </Fragment>
    );
  }
}

export default App;
