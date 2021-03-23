import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import EmployeePage from "./containers/EmployeePage";


const routes = (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/employees/:employeeId" component={EmployeePage} />
  </Router>
);

export default routes;