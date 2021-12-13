import { lazy } from 'react';

const routes = [
  {
    path: 'admin/dashboard',
    component: lazy(() => import('./screens/Dashboard/Dashboard')),
    exact: true
  },
  {
    path: 'admin/selecoes',
    component: lazy(() => import('./screens/Selecoes/Selecoes')),
    exact: true
  },
  {
    path: 'admin/jogadores',
    component: lazy(() => import('./screens/Jogadores/Jogadores')),
    exact: true
  },
  {
    path: 'admin/estadios',
    component: lazy(() => import('./screens/Estadios/Estadios')),
    exact: true
  },
  {
    path: 'admin/partidas',
    component: lazy(() => import('./screens/Partidas/Partidas')),
    exact: true
  },
  /*{
    path: 'admin/selecoes/:id',
    component: lazy(() => import('components/Selecao')),
    exact: true
  },
  {
    path: 'admin/estadios/:id',
    component: lazy(() => import('components/Estadio')),
    exact: true
  },
  {
    path: 'admin/partidas/:id',
    component: lazy(() => import('components/Partida')),
    exact: true
  },
  {
    path: 'admin/jogadores/:id',
    component: lazy(() => import('components/Jogadores')),
    exact: true
  }*/
];

export default routes;