import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';    
import './css/dashboard.css'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from './footer';
import { fetchCards } from './utils/api';


const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCards()
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="cards">
      <Helmet>
        <title>Truthordare | Home</title>
      </Helmet>
      <div className="two">
        <h1 className='title-dashboard'> Dari-Hati
          <span>Pahami pasangan anda</span>
        </h1>
      </div>
      <div className="owl-wrapper">
        {loading && (
          <p style={{ color: '#fff', textAlign: 'center', padding: '20px' }}>Memuat kartu...</p>
        )}
        {error && (
          <p style={{ color: '#fff', textAlign: 'center', padding: '20px' }}>Gagal memuat kartu</p>
        )}
        {!loading && !error && cards.length > 0 && (
          <OwlCarousel
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
            {cards.map((card) => (
              <Link key={card.id} to={{ pathname: `/card/${card.id}`, state: { card } }}>
                <div
                  id="card"
                  className="card"
                  style={{
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <p className='title-card'>{card.title}</p>
                </div>
              </Link>
            ))}
          </OwlCarousel>
        )}
      </div>
      <Link to="/about-card">
        <p className='about-text'>About this game</p>
      </Link>
      <Footer />
    </section>
  );
};

export default Dashboard;

