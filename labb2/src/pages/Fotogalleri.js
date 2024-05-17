import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import './fotogalleri.css';

function Fotogalleri() {
    return (
        <Fragment>
        
        <nav className="parentList">
        <ul className="childList">
        <li><div><Link to="/">Hem</Link></div></li>
            <li><div><Link to="/kontakt">Kontakt</Link></div></li>
            <li><div><Link to="/github">Github</Link></div></li>
            <li><div><Link to="/cv">CV</Link></div></li>
            <li><div><Link to="/fotogalleri">Fotogalleri</Link></div></li>
        </ul>
    </nav>
    <div className="container">
         <p>Foton jag har tagit genom åren</p>
        <div className="">
          <div className="">
            
          </div >
          <div className='pictures'>
          <div className="one">
                <img src={require('./img/DSC04654.jpg')}alt="description" />
            </div>
            <div className="one">
                <img src={require('./img/IMG_1268.JPG')}alt="description" />
            </div>
            <div className="one">
                <img src={require('./img/IMG_1270.JPG')}alt="description" />
            </div>
            <div className="one">
                <img src={require('./img/DSC04750.jpg')}alt="description" />
            </div>
            <div className="one">
                <img src={require('./img/DSC04874.jpg')}alt="description" />
            </div>
            <div className="one">
                <img src={require('./img/DSC04683.jpg')}alt="description" />
            </div>
            <div className="one">
                <img src={require('./img/DSC04691.png')}alt="description" />
            </div>
            </div>
        </div>
       
      </div>
        </Fragment>
    );
}

export default Fotogalleri;