import { Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import routes from '../../../routes';

const ProtectedRoutes = () => (
  <Switch>
    <Suspense
      fallback={<CircularProgress />}
    >
      {routes.map(({ component: Component, path, exact }) => (
        <Route
          path={`/${path}`}
          key={path}
          exact={exact}
        >
          <Component />
        </Route>
      ))}
    </Suspense>
  </Switch>
);

export default ProtectedRoutes;