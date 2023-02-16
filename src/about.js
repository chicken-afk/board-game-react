import React,{Component} from 'react';  
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './css/about.css'


export class AboutCard extends Component {


    render()  
    {  
      return (  

        <section className="cards">
            <Helmet>
                <title>Truthordare | Home</title>
            </Helmet>
            <a>
            <Link to="/">
             <img className='back-icon-about' src={require('./images/icons8-back-arrow-64.png')} alt=""/>
             </Link>
            </a>
        <div className="two">
          <h1 className='title-dashboard-about'> About This Game
            <span></span>
          </h1>
        </div>

        <div className='paragraph'>
            <p>Pernah gak sih kalian lagi ngobrol sama pacar atau gebetan kalian tapi kehabisan topik atau bingung mau ngobrolin apa? Nah kalau iya maka game ini adalah solusinya</p>
            <p>
            Salah satu hal yang membuat permainan ini menarik adalah keterlibatan pemain dalam membuat pertanyaan dan tantangan untuk sesama pemain. Ini memungkinkan pemain untuk terlibat secara aktif dalam pembuatan konten permainan, yang juga memungkinkan mereka untuk lebih mengenal satu sama lain.
            </p>
            <p>Namun, karena permainan ini menekankan pada kejujuran dan keberanian, penting bagi pemain untuk menghormati satu sama lain dan memastikan bahwa mereka tidak menanyakan pertanyaan atau memberikan tantangan yang tidak sopan atau tidak pantas. Karena alasan ini, sebaiknya game ini dimainkan di lingkungan yang aman dan terpercaya, seperti antara teman dekat atau keluarga.</p>
            <p>Dalam kesimpulan, Truth or Dare adalah game kartu yang menyenangkan dan menarik yang dapat membantu pemain untuk lebih mengenal satu sama lain, keluar dari zona nyaman, dan mengembangkan kepercayaan diri. Namun, penting bagi pemain untuk memainkannya dengan cara yang pantas dan menghormati satu sama lain.</p>
            
        </div>
        </section>

            )  
    }  
  }  
    

export default AboutCard  