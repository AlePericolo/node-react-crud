import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import Layout from "./containers/layout";
import Dashboard from "./containers/dashboard";

import postRoutes from "./routes/post";

const App = () => {

  const menu = [
    { name: "home", path: "/" },
    { name: "post", path: "/post/" }
  ];

  return (
    <Layout menu={menu}>
      <Switch>
        {postRoutes}
        <Route path="/" exact render={(props) => <Dashboard {...props} menu={menu} />} />
      </Switch>
    </Layout>
  );

}

export default App;
