import React, { Fragment } from 'react';
import './kontakt.css';
import { Link } from 'react-router-dom';

function Kontakt() {
    return (
        <Fragment>
        <nav class="parentList">
        <ul class="childList">
        <li><div><Link to="/">Hem</Link></div></li>
            <li><div><Link to="/kontakt">Kontakt</Link></div></li>
            <li><div><Link to="/github">Github</Link></div></li>
            <li><div><Link to="/cv">CV</Link></div></li>
            <li><div><Link to="/fotogalleri">Fotogalleri</Link></div></li>
        </ul>
    </nav>
    <p>Telefonnummer: +46 xx xxx xxxx</p>
    <p>Email: x@x.se</p>
    <p>Adress: Genvägen 100</p>
    <p>FYI: lämnar inte ut min riktiga info</p>
        </Fragment>
    );
}

export default Kontakt;