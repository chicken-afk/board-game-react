import './App.css';
import Dashboard from './home';
import CrushCard from './crush';
import CoupleCard from './couple';
import AboutCard from './about';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';
import './css/footer.css'
import ReactPwa from "react-pwa-app";


const TRACKING_ID = "G-YLNFR49CE4"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {

  return (
    <ReactPwa
    test //is to install in localhost, not required
    suspense={<>
      Opening  dari-hati Apps
    </>}
    config={{
      swUrl: "/service-worker.js", // sw file in public default is service-worker.js
      onUpdate: (reg) => {
        console.log(reg);
      },
      onSuccess: (reg) => {
        console.log(reg);
      },
      onError: (reg) => {
        console.log(reg);
      },
      onPrompt:(e) => {
        if(e.outcome === 'accepted'){
          console.log('user click on install and accept')
        }
        if(e.outcome === 'dismissed'){
          console.log('user click on install and refuse')
        }
      },
    }} 
    >
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
        
       </ReactPwa>
  );

}

export default App;