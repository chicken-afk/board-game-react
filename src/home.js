import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';    
import './css/dashboard.css'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from './footer';


export class Dashboard extends Component {  

    render()  
    {  
      return (  

        <section className="cards">
            <Helmet>
                <title>Truthordare | Home</title>
            </Helmet>
        <div className="two">
          <h1 className='title-dashboard'> Dari-Hati
            <span>Know your partner</span>
          </h1>
        </div>
          <div className="owl-wrapper">
          <OwlCarousel items={3}  
            className="owl-theme"  
            loop  
            margin={15} 
            autoplay={true}
            autoplayHoverPause={true}
            center={true}
            items={1.4}
            stagePadding={15}
            animateOut={'slide-up'}
            animateIn={'slide-down'}
            smartSpeed={1950}
            >  
              
              <Link to="/couple-card">
                <div id="card" className="card">
                </div>
              </Link>

              <Link to="/crush-card">
                <div id="card" className="card background-crush">
                </div> 
              </Link>

              <Link to="/friend-card">
                <div id="card" className="card background-friend">
                </div> 
              </Link>
              
            </OwlCarousel>
          </div>
          <Link to="/about-card">
          <p className='about-text'>About this game</p>
          </Link>
          <Footer/>
        </section>

            )  
    }  
  }  
    

export default Dashboard  
