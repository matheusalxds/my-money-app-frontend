import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

import AuthOrApp from './authOrApp';
import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';

// Example without Link/IndexRoute
// export default props => (
//   <Router history={hashHistory}>
//     <Route path='/' component={Dashboard} />
//     <Route path='/billingCycles' component={BillingCycle} />
//     <Redirect from='*' to='/' />
//   </Router>
// )

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={AuthOrApp}>
      <IndexRoute component={Dashboard} />
      <Route path='/billingCycles' component={BillingCycle} />
    </Route>
    <Redirect from='*' to='/' />
  </Router>
)