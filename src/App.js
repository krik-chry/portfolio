import React from 'react';
import MainPage from './components/MainPage';
import './App.scss';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import { Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/contact" component={Contact} />
    </>
  );
}

export default App;
