import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './components/Book';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

const App = () => {
  const { booksReducer } = useSelector((state) => state);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Books data={booksReducer} />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;