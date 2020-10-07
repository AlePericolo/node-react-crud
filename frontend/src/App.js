import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import Layout from "./containers/layout";
import Dashboard from "./containers/dashboard";

import postRoutes from "./routes/post";

class App extends Component {

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            {postRoutes}
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
