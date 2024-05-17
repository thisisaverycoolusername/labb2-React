import React, { Fragment } from 'react';
import './Index.css';
import { Link } from 'react-router-dom';

function Index() {
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
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum id obcaecati magni, voluptates, natus debitis corporis, consectetur impedit illum aut soluta eum atque maxime cumque nemo adipisci? Harum, dicta corrupti.</p>

        
        </Fragment>
    );
}

export default Index;