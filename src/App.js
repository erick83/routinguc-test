import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import { MenuComponent } from './components'
import { LoginPage } from './pages'
import store from './redux/store';
import './App.css';

const ROUTES = Object.freeze({
  DEFAULT: '/',
  SIGIN: '/sigin',
  USER_LIST: 'user-list',
})

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MenuComponent></MenuComponent>
        <Switch>
          <Route exact path={ROUTES.DEFAULT} component={LoginPage}></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
