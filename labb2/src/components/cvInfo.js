import React from 'react';
import resumedata from "./cv.json";

// Educations
const DisplayResumeData = () => {
    return (
        <div>
            <div>
            <h1>Arbetslivserfarenheter</h1>
            <ul>
                {resumedata.arbetslivserfarenheter.map((arbetslivserfarenheter) => (
                    <li key={arbetslivserfarenheter.id}>
                        <h2> {arbetslivserfarenheter.name}</h2>
                        <p> {arbetslivserfarenheter.description}</p>
                        
                    </li>
                    ))}
                </ul>
            </div>
            <div>
            <h1>Utbildningar</h1>
            <ul>
             {resumedata.utbildningar.map((utbildningar) => (
                 <li key={utbildningar.id}>
                     <h2>{utbildningar.name}</h2>
                     <p>{utbildningar.description}</p>
                     
                 </li>
                 ))}
             </ul>
         </div>
         
         </div>
    );
};

export default DisplayResumeData;