import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { MenuComponent, SideMenuComponent } from './components'
import { LoginPage, UserListPage, SignupPage, WelcomePage } from './pages'
import { loadSesion } from './redux/user/actions'
import './App.css'

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

function App({ auth, sesion }) {
  const userSesion = sessionStorage.getItem('routinguc-test-user')

  if (userSesion) {
    sesion(JSON.parse(userSesion))
  }

  return (
    <BrowserRouter>
      <MenuComponent></MenuComponent>

      <div className="App">
        <SideMenuComponent />
        <Switch>
          <Route exact path={ROUTES.LOGIN}>
            <LoginPage />
          </Route>

          <Route exact path={ROUTES.SIGUP}>
            <SignupPage />
          </Route>

          <PrivateRoute exact auth={auth} path={ROUTES.DEFAULT}>
            <WelcomePage />
          </PrivateRoute>

          <PrivateRoute exact auth={auth} path={ROUTES.USER_LIST}>
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

const mapDispatchToProps = dispatch => ({
  sesion: payload => dispatch(loadSesion(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
