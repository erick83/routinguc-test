import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

import { MenuComponent, SideMenuComponent } from './components'
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
        <div className="App">
          <SideMenuComponent></SideMenuComponent>
          <Switch>
            <Route exact path={ROUTES.DEFAULT} component={LoginPage}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
