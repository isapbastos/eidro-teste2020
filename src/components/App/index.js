//jshint esversion:6
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import PiPage from '../Pi';
import FingerprintPage from '../Fingerprint';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
 
  <Router>
    <div>
     

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route exact path={ROUTES.PI} component={PiPage} />
      <Route exact path={ROUTES.FINGERPRINT} component={FingerprintPage} />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
    </div>
    
  </Router>
);


export default withAuthentication(App);