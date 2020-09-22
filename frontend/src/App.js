import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import Layout from "./containers/layout";
import Dashboard from "./containers/dashboard";
import Post from "./containers/post";

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/post" component={Post} />
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
