import { Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import routes from'../../routes';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const ProtectedRoutes = () => {
  const token = localStorage.getItem('token');

  return (
    <Switch>
      <Suspense
        fallback={<CircularProgress />}
      >
        {routes.map(({ component: Component, path, exact }) => (
          <PrivateRoute
            path={`/${path}`}
            key={path}
            exact={exact}
            isAuthenticated={token !== ''}
          >
            <Component />
          </PrivateRoute>
        ))}
      </Suspense>
    </Switch>
  )
};

export default ProtectedRoutes;