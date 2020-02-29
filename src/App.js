import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { MenuComponent, SideMenuComponent } from './components'
import { LoginPage, UserListPage, SignupPage, WelcomePage, NotFoundPage } from './pages'
import { loadSesion, cleanSesion } from './redux/user/actions'
import './App.css'

const ROUTES = Object.freeze({
  DEFAULT: '/',
  LOGIN: '/login',
  SIGUP: '/signup',
  USER_LIST: '/user-list',
  MAP_INFO: '/map-info',
})



function AuthRoute({ children, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

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

function App({ auth, sesion, logout }) {

  React.useEffect(() => {
    const userSesion = sessionStorage.getItem('routinguc-test-user')

    //TODO: Check cookie to
    if (userSesion) {
      sesion(JSON.parse(userSesion))
    } else {
      logout()
    }
  })

  return (
    <BrowserRouter>
      <MenuComponent></MenuComponent>

      <div className="App">
        <SideMenuComponent />
        <Switch>
          <AuthRoute exact auth={auth} path={ROUTES.LOGIN}>
            <LoginPage />
          </AuthRoute>

          <AuthRoute exact auth={auth} path={ROUTES.SIGUP}>
            <SignupPage />
          </AuthRoute>

          <PrivateRoute exact auth={auth} path={ROUTES.DEFAULT}>
            <WelcomePage />
          </PrivateRoute>

          <PrivateRoute exact auth={auth} path={ROUTES.USER_LIST}>
            <UserListPage />
          </PrivateRoute>

          <PrivateRoute exact auth={auth} path={ROUTES.MAP_INFO}>
            <WelcomePage />
          </PrivateRoute>

          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = store => ({
  auth: store.user.logged
})

const mapDispatchToProps = dispatch => ({
  sesion: payload => dispatch(loadSesion(payload)),
  logout: () => dispatch(cleanSesion()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
