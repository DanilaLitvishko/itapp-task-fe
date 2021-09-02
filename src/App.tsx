import React, {lazy, Suspense} from "react";
import { Route, Switch } from "react-router";
import { CircularProgress } from '@material-ui/core';

import Layout from './components/layout/layout.component';
import PrivateRoute from './components/private-route/private-route.component';

import styles from './App.module.scss';

const Auth = lazy(() => import('./components/auth/auth.component'));
const ResendEmail = lazy(() => import('./components/resend-email/resend-email.component'));
const ActivateEmail = lazy(() => import('./components/activate-email/activate-email.component'))
const CreditCardDetail = lazy(() => import('./components/credit-card-details/credit-card-details.component'))

function App() {
  return (
    <Layout>
      <Suspense
          fallback={
            <div className={styles.suspenseLoader}>
              <CircularProgress />
            </div>
          }
        >
        <Switch>
          <Route exact path="/" component={Auth} />
          <PrivateRoute component={ResendEmail} path="/resendEmail"/>
          <Route
            path="/activateEmail/:confirmationCode"
            component={ActivateEmail}
          />
          <Route path="/credit-card-detail" component={CreditCardDetail}/>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
