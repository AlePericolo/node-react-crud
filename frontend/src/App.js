import React from "react";
import { Route, Switch } from 'react-router-dom';

import Layout from "./containers/layout";
import Dashboard from "./pages/dashboard";
import Error from "./pages/error";

import postRoutes from "./routes/post";

const App = () => {

  const menu = [
    { name: "home", icon: "home", path: "/" },
    { name: "post", icon: "newspaper", path: "/post/" }
  ];

  return (
    <Layout menu={menu}>
      <Switch>
        {postRoutes}
        <Route path="/" exact render={(props) => <Dashboard {...props} menu={menu} />} />
        <Route component={Error} />
      </Switch>
    </Layout>
  );

}

export default App;
