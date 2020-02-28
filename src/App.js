import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import { MenuComponent, SideMenuComponent } from './components'
import { LoginPage, UserListPage, SignupPage } from './pages'
import './App.css';

const ROUTES = Object.freeze({
  DEFAULT: '/',
  LOGIN: '/login',
  SIGUP: '/signup',
  USER_LIST: '/user-list',
  MAP_INFO: '/map-info',
})

function PrivateRoute({ children, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App({ auth }) {
  const defaultRoute = auth ? ROUTES.USER_LIST : ROUTES.LOGIN
  return (
    <BrowserRouter>
      <MenuComponent></MenuComponent>

      <div className="App">
        <SideMenuComponent />
        <Switch>
          <Route exact path={ROUTES.DEFAULT}>
            <Redirect to={defaultRoute} />
          </Route>

          <Route exact path={ROUTES.LOGIN}>
            <LoginPage />
          </Route>

          <Route exact path={ROUTES.SIGUP}>
            <SignupPage />
          </Route>

          <PrivateRoute exact path={ROUTES.USER_LIST}>
            <UserListPage />
          </PrivateRoute>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = store => ({
  auth: store.user.logged
})

export default connect(mapStateToProps)(App);
