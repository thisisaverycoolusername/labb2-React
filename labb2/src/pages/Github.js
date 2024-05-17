import React, { Fragment } from 'react';
import './github.css';
import { Link } from 'react-router-dom';

function Github() {
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
    <p><a href="https://github.com/thisisaverycoolusername/MyFirstProgram">MyFirstProgram</a>
        Public
         C# </p>   <p><a href="https://github.com/thisisaverycoolusername/oop-uppgift-1">oop-uppgift-1</a>
        
        Public
         C#  </p><p><a href="https://github.com/thisisaverycoolusername/Polymorphism">Polymorphism</a>
        
        Public
        
         C#   </p> <p><a href="https://github.com/thisisaverycoolusername/OOP-Generic-Collections">OOP-Generic-Collections</a>
        
        Public
        Lab 8
        
         C#    </p><p><a href="https://github.com/thisisaverycoolusername/Labb3---Databas">Labb3---Databas</a>
        
        Public
         C#    </p><p><a href="https://github.com/thisisaverycoolusername/ChessBoard">ChessBoard</a>
        
        Public
         C#</p>
        
        </Fragment>
    );
}

export default Github;