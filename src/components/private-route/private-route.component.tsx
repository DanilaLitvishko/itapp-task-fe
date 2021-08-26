import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Routes from   '../../routes';
import { selectCurrentUser } from '../../redux/user/user.selectors';

interface PrivateRouteProps {
  exact?: boolean;
  path: string;
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  path,
}: PrivateRouteProps) => {

  const history = useHistory();
  const isAuthenticated = useSelector(selectCurrentUser);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.replace(Routes.LOGIN, { from: path });
    }
  });

  return isAuthenticated ? (
    <Route render={props => <Component {...props} />} />
  ) : null;
};

export default PrivateRoute;
