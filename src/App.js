import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage/homepage'

function App() {
  return (
    <main>
    <Switch>
        <Route path="/" component={Homepage} exact />
    </Switch>
</main>
  );
}

export default App;
