import React from "react";
import {
  Route,
  HashRouter as Router,
  Switch,
} from "react-router-dom";
import Home from "./pages/home";
import { ROUTER } from "./utils/constants";
import Layout from "./components/layout";

const App = () => {

  return (
    <Router>
      <Switch>
        <Layout>
          <Route path={ROUTER.HOME} component={Home}/>
        </Layout>
      </Switch>  
    </Router>
  );
}

export default App;
