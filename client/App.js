import React, { Component, Fragment } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Products from './Products';

class App extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter>
          <Route exact path="/" component={Products} />
        </HashRouter>
      </Fragment>
    );
  }
}

export default App;
