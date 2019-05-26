import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import './App.css';
import Home from './components/PageHome';
import Connexion from './screen/Connexion'


class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Connexion} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
