import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode, faDollarSign, faFire, faHeart } from '@fortawesome/free-solid-svg-icons';

import Layout from './components/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage';
import RouteError from './components/RouteError/RouteError';

library.add(faLaptopCode, faDollarSign, faFire, faHeart);

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/RouteError" component={RouteError} />
        <Redirect to="/RouteError" />
      </Switch>
    );
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
