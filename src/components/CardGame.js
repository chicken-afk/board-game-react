import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../css/card.css';

/**
 * Komponen reusable untuk menampilkan kartu game
 * @param {Object} props
 * @param {string} props.title - Judul halaman untuk SEO
 * @param {Array} props.data - Array data pertanyaan
 * @param {string} props.cardBackImage - Path ke gambar belakang kartu
 * @param {string} props.cardFrontImage - Path ke gambar depan kartu
 * @param {string} props.routePath - Path untuk reload kartu (deprecated, gunakan animasi)
 * @param {boolean} props.showFooter - Tampilkan footer atau tidak
 * @param {React.Component} props.FooterComponent - Komponen footer (opsional)
 */
const CardGame = ({ 
  title, 
  data, 
  cardBackImage, 
  cardFrontImage, 
  routePath,
  showFooter = false,
  FooterComponent = null
}) => {
  const [question, setQuestion] = useState('');
  const [animating, setAnimating] = useState(false);

  const backIcon = useMemo(() => require('../images/icons8-back-arrow-64.png'), []);
  const reloadIcon = useMemo(() => require('../images/icons8-reset-100.png'), []);
  const cardBack = useMemo(() => require(`../images/${cardBackImage}`), [cardBackImage]);
  const cardFront = useMemo(() => require(`../images/${cardFrontImage}`), [cardFrontImage]);

  const generateQuestion = () => {
    if (!data || data.length === 0) return '';
    const random = Math.floor(Math.random() * data.length);
    return data[random];
  };

  useEffect(() => {
    setQuestion(generateQuestion());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleReload = (e) => {
    e.preventDefault();
    setAnimating(true);
    
    setTimeout(() => {
      setQuestion(generateQuestion());
      setAnimating(false);
    }, 50);
  };

  return (
    <section className='body-class'>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Link to="/" aria-label="Kembali ke halaman utama">
        <img className="back-icon" src={backIcon} alt="Kembali" loading="lazy" />
      </Link>

      <p className='tap-card'>Tap Kartu Untuk Membuka</p>
      
      <div className={`card-open ${animating ? 'card-animating' : ''}`} key={animating ? 'animating' : 'static'}>
        <div className="fundo">
          <img src={cardBack} alt="Kartu belakang" loading="lazy" />
          <div className="question-text-card">{question}</div>
        </div>
        <div className="frente">
          <img src={cardFront} alt="Kartu depan" loading="lazy" />
        </div>
      </div>

      <a href="#" onClick={handleReload} aria-label="Ganti kartu">
        <img className='reload-button' src={reloadIcon} alt="Ganti kartu" loading="lazy" />
      </a>
      
      <p className='reload-text'>Tekan icon untuk mengganti kartu</p>
      
      {showFooter && FooterComponent && <FooterComponent />}
    </section>
  );
};

export default CardGame;
