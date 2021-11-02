import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" >
          <Main />
        </Route>
        <Route path='/categories'>
          <Categories />
        </Route>
      </Switch>
    </>
  );
}

export default App;
