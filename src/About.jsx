import React, { useEffect }  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import fotoCV from './foto-cv.jpg'
import './About.css';



function About() {
    useEffect(() =>{
        AOS.init({duration: 1200});
    }, []);
    
    return(
     
        <div className='about-container'>
            <div className='about-image' data-aos='fade-right'>
                     <img src={fotoCV} alt='Foto-CV' />
            </div>
           
    
            
        

            <div className='about-text'>
            <h1>Chi sono</h1>
            <p>
                Mi chiamo <strong>Silvia Rocca</strong> e sono una sviluppatrice front-end appassionata di design, UI/UX e interazione.
                Ho iniziato il mio percorso con HTML, CSS, JavaScript e React, e continuo ad imparare ogni giorno nuove tecnologie.
            </p>
            <p>
                Mi piace trasformare idee in progetti concreti, mantenendo il codice pulito e accessibile.
                Credo nell'importanza della semplicità, della cura per i dettagli e nella continua crescita professionale.
            </p>
        </div>
        <div className='punti-di-forza'> < br/>
            <h3>Punti di forza</h3>
            <ul>
                <li> Precisione nei dettagli</li>
                <li> Creatività e problem solving</li>
                <li> Apprendimento rapido</li>
            </ul>
        </div>
       
        </div>

         
    
    
    );
    
}

  

export default About;