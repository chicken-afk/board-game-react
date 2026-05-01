import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { fetchCardQuestions, fetchCards } from './utils/api';
import './css/card.css';

const CardPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [card, setCard] = useState((location.state && location.state.card) || null);
  const [questions, setQuestions] = useState([]);
  const questionsRef = useRef([]);
  const [question, setQuestion] = useState('');
  const currentQuestionRef = useRef('');
  const [throwPhase, setThrowPhase] = useState('idle'); // 'idle' | 'exit' | 'enter'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (!card) {
          const cards = await fetchCards();
          const found = cards.find((c) => String(c.id) === String(id));
          if (found) setCard(found);
        }

        const qs = await fetchCardQuestions(id);
        setQuestions(qs);
        questionsRef.current = qs;
        if (qs.length > 0) {
          const first = qs[Math.floor(Math.random() * qs.length)].question;
          setQuestion(first);
          currentQuestionRef.current = first;
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleReload = (e) => {
    e.preventDefault();
    const qs = questionsRef.current;
    if (!qs.length || throwPhase !== 'idle') return;

    // Phase 1: throw current card out
    setThrowPhase('exit');
    setTimeout(() => {
      // Pick a different question if possible
      let nextQuestion;
      if (qs.length === 1) {
        nextQuestion = qs[0].question;
      } else {
        let candidates = qs.filter((q) => q.question !== currentQuestionRef.current);
        if (!candidates.length) candidates = qs;
        nextQuestion = candidates[Math.floor(Math.random() * candidates.length)].question;
      }
      currentQuestionRef.current = nextQuestion;
      setQuestion(nextQuestion);

      // Phase 2: deal new card in
      setThrowPhase('enter');
      setTimeout(() => {
        setThrowPhase('idle');
      }, 450);
    }, 400);
  };

  if (loading) {
    return (
      <section className='body-class'>
        <p style={{ color: '#fff', textAlign: 'center', paddingTop: '40vh' }}>Memuat...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className='body-class'>
        <Link to="/">
          <img className="back-icon" src={require('./images/icons8-back-arrow-64.png')} alt="Kembali" />
        </Link>
        <p style={{ color: '#fff', textAlign: 'center', paddingTop: '40vh' }}>Error: {error}</p>
      </section>
    );
  }

  return (
    <section className='body-class'>
      <Helmet>
        <title>{card ? `${card.title} | Dari-Hati` : 'Dari-Hati'}</title>
      </Helmet>

      <Link to="/">
        <img className="back-icon" src={require('./images/icons8-back-arrow-64.png')} alt="Kembali" />
      </Link>

      <p className='tap-card'>Tap Kartu Untuk Membuka</p>

      <div
        className={`card-open${throwPhase === 'exit' ? ' card-exit' : throwPhase === 'enter' ? ' card-enter' : ''}`}
      >
        <div className="fundo">
          {card && card.image_back && (
            <img src={card.image_back} alt="Kartu belakang" loading="lazy" />
          )}
          <div id="question" className="question-text-card">{question}</div>
        </div>
        <div className="frente">
          {card && card.image && (
            <img src={card.image} alt="Kartu depan" loading="lazy" />
          )}
        </div>
      </div>

      <button
        onClick={handleReload}
        aria-label="Ganti kartu"
        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
      >
        <img className='reload-button' src={require('./images/icons8-reset-100.png')} alt="Ganti kartu" loading="lazy" />
      </button>

      <p className='reload-text'>Tekan icon untuk mengganti kartu</p>
    </section>
  );
};

export default CardPage;
