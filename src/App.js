import './App.css';
import Dashboard from './home';
import CrushCard from './crush';
import CoupleCard from './couple';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-YLNFR49CE4"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {

  return (

        <main>
            <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/crush-card" component={CrushCard} />
                <Route path="/couple-card" component={CoupleCard} />
            </Switch>
        </main>

  );

}

export default App;