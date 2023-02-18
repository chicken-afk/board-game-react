import React,{Component} from 'react';    
import './css/footer.css'


export class Footer extends Component {  

    render()  
    {  
      return (  

          <div className='footer'>
            <ul className="wrapper">
              <a className='anchor-icon' href='https://www.tiktok.com/@titikkoma.dev' target='__blank'>
                <li className="icon twitter">
                  <span className="tooltip">Tiktok</span>
                  <span><i className="fab fa-tiktok"></i></span>
                </li>
              </a>
                <a className='anchor-icon' href='https://www.instagram.com/titikkoma.dev' target='__blank'>
                  <li className="icon instagram">
                    <span className="tooltip">Instagram</span>
                    <span><i className="fab fa-instagram"></i></span>
                  </li>
                </a>
                <a className='anchor-icon' href='https://www.github.com/chicken-afk' target='__blank'>
                <li className="icon github">
                  <span className="tooltip">Github</span>
                  <span><i className="fab fa-github"></i></span>
                </li>
                </a>
              </ul>
          </div>

            )  
    }  
  }  
    

export default Footer  
