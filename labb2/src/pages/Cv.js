
import './cv.css';
import { Link } from 'react-router-dom';
import React, { Fragment, useState, useEffect, useRef } from 'react';
import DisplayResumeData from '../components/cvInfo';

function Cv() {
    const [theme, setTheme] = useState('light'); // Define theme state here
    const sequence = ['1', '3', '3', '7'];
    const sequenceIndex = useRef(0);

    function showPopup() {
        alert('Du har skrivit in den hemliga koden!');
    }

    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === sequence[sequenceIndex.current]) {
                sequenceIndex.current++;

                if (sequenceIndex.current === sequence.length) {
                    showPopup();
                    sequenceIndex.current = 0;
                }
            } else {
                sequenceIndex.current = 0;
            }
        }
;
      // Listen for secret code
      
      window.addEventListener('keydown', handleKeyDown);
  
      // Clean up event listener
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
      
    }, [theme]);
  
    // Change the background color of the entire page
    document.body.style.backgroundColor = theme === 'light' ? 'white' : 'black';
    document.body.style.color = theme === 'light' ? 'black' : 'white';

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
            <div className="grid-container">
                <div className="grid-item">
                    <div className="grid-item4">
                        <img src={require('./img/IMG_1329.png')}alt="description" />
                    </div>
                    <div className="grid-item1">
                    <h2 onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Om mig
      </h2>
      {/* Display cvData here... */}
                        <p>
                            Hej, jag är en 20-årig individ som för närvarande bor i Näske. 
                            Min bakgrund sträcker sig från grundskola i både Västernorrland och Jämtland, 
                            vilket har gett mig en varierad uppväxt och erfarenhet av olika miljöer. 
                            På min fritid älskar jag att fotografera, särskilt bilar och natur, då det 
                            ger mig en avkopplande och uppfriskande paus från vardagen.
                            Just nu är jag engagerad i min utbildning på yrkeshögskolan, 
                            där jag studerar .Net med AI-kompetens. 
                            Jag valde denna utbildning eftersom den erbjuder möjligheten att utforska teknikens 
                            potential inom områden som jag är passionerad för. 
                            Jag ser fram emot att utforska och utveckla vidare.
                        </p>
                    </div>
                    <div className="grid-item2">
                        <showPopup/>
                        <DisplayResumeData/>
                    </div>
                    <div className="grid-item3">
                    <div>
      
      
    </div>
                        
                    </div>
                    <div className="grid-item4">
                    <div>
      
    </div>
                    </div>
                    <div className="grid-item5"></div>
                    <div className="grid-item6"></div>
                    <div className="grid-item7"></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Cv;