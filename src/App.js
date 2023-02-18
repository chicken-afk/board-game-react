import './App.css';
import Dashboard from './home';
import CrushCard from './crush';
import CoupleCard from './couple';
import AboutCard from './about';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import './css/footer.css'

const TRACKING_ID = "G-YLNFR49CE4"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {

  return (

        <main>
          <header className='header'>
            <h3 >Support Developer? <a href='https://saweria.co/titikkomadev' target='__blank'>Disini tempatnya</a></h3>
          </header>
            <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/crush-card" component={CrushCard} />
                <Route path="/couple-card" component={CoupleCard} />
                <Route path="/about-card" component={AboutCard} />
            </Switch>
        </main>
        

  );

}

export default App;