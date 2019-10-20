import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import FormikLogin from './components/FormikLogin';
import FormikForm from './components/FormikForm';
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/login" render={props => <FormikForm {...props} />} />
        <PrivateRoute path='/colors' component={BubblePage} />
        <Route component={FormikForm} />
        </Switch>
 
        
      </div>
    </Router>
  );
}

export default App;
