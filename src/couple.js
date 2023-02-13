import React,{Component} from 'react';  
import './css/card.css'
import { Link } from 'react-router-dom';
import datas from './data/couple.json'
import { Helmet } from 'react-helmet';



const data = datas.data

export class CoupleCard extends Component {

    generateQuestion() {
        var n = data.length;
        console.log('Panjang data', n)
        var random = Math.floor(Math.random() * n);
        this.question = data[random]
    }

    render()  
    {  
      this.generateQuestion()
      const code = this.question;
      return (  

            <section className='body-class'>
            <Helmet>
                <title>Truthordare | CoupleCard</title>
            </Helmet>

            <a>
            <Link to="/">
             <img className="back-icon" src={require('./images/icons8-back-arrow-64.png')} alt=""/>
             </Link>
            </a>

            <a className='tap-card'>Tap Kartu Untuk Membuka</a>
            <div className="card-open">
                <div className="fundo">
                    <img src={require('./images/8.png')} alt=""/>
                    <div id="question" className="question-text-card"> {code}
                    </div>
                </div>
                <div className="frente">
                    <img src={require('./images/7.png')} alt=""/>
                </div>
            </div>
            <Link to="/couple-card">
                <img className='reload-button' src={require('./images/icons8-reset-100.png')} alt=""/>
            </Link>
            <a className='reload-text'>Tekan icon untuk mengganti kartu</a>

            </section>

            )  
    }  
  }  
    

export default CoupleCard  