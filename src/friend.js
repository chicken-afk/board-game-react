import React, { useState, useEffect } from 'react';  
import './css/card.css'
import { Link } from 'react-router-dom';
import datas from './data/friend.json'
import alldata from './data/all.json'
import { Helmet } from 'react-helmet';
import Footer from './footer';


const data = datas.data
const tambahan = alldata.data

const FriendCard = () => {
    const [question, setQuestion] = useState('');
    const [animating, setAnimating] = useState(false);

    const generateQuestion = () => {
        const allDatas = data.concat(tambahan);
        const n = allDatas.length;
        console.log('Panjang data', n);
        const random = Math.floor(Math.random() * n);
        return allDatas[random];
    }

    useEffect(() => {
        setQuestion(generateQuestion());
    }, []);

    const handleReload = (e) => {
        e.preventDefault();
        setAnimating(true);
        
        setTimeout(() => {
            setQuestion(generateQuestion());
            setAnimating(false);
        }, 50);
    }

    return (  
        <section className='body-class'>
            <Helmet>
                <title>Truthordare | FriendCard</title>
            </Helmet>

            <Link to="/">
                <img className="back-icon" src={require('./images/icons8-back-arrow-64.png')} alt=""/>
            </Link>

            <p className='tap-card'>Tap Kartu Untuk Membuka</p>
            <div className={`card-open ${animating ? 'card-animating' : ''}`} key={animating ? 'animating' : 'static'}>
                <div className="fundo">
                    <img src={require('./images/12.png')} alt=""/>
                    <div id="question" className="question-text-card"> {question}
                    </div>
                </div>
                <div className="frente">
                    <img src={require('./images/11.png')} alt=""/>
                </div>
            </div>
            <button onClick={handleReload} style={{background: 'none', border: 'none', padding: 0, cursor: 'pointer'}}>
                <img className='reload-button' src={require('./images/icons8-reset-100.png')} alt=""/>
            </button>
            <p className='reload-text'>Tekan icon untuk mengganti kartu</p>
            <Footer/>
        </section>
    )
}
    

export default FriendCard  