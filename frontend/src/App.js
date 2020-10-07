import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import Layout from "./containers/layout";
import Dashboard from "./containers/dashboard";
import Posts from "./containers/posts";

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/posts" component={Posts} />
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
