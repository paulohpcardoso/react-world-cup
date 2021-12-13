import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRotes/ProtectedRoutes';
import Login from './screens/Login/Login';

export default function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/estatisticas" component={Estatisticas} />
        <Route exact path="/grupos" component={Grupos} />
        <Route exact path="/noticias" component={Noticias} />
        <Route exact path="/partidas" component={Partidas} />
        <Route exact path="/partidas/:id" component={DetalhePartida} /> */ }
        <Route exact path="/admin/login" component={Login} />
        <ProtectedRoutes />
      </Switch>
    </Router>
  )
}

function Home() {
  return <h1>Home</h1>;
}

function Estatisticas() {
  return <h1>Estatisticas</h1>;
}

function Grupos() {
  return <h1>Grupos</h1>;
}

function Noticias() {
  return <h1>Noticias</h1>;
}

function Partidas() {
  return <h1>Partidas</h1>;
}

function DetalhePartida() {
  return <h1>Detalhes da partida</h1>;
}