import React, { useEffect } from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1200});
    }, []);

    return(

      
        <div className='contact-container'>
            <h1 data-aos='fade-down'>Contatti</h1>
            <p data-aos='fade-up'>
                Hai un progetto o una collaborazione in mente? Scrivimi!
            </p>

            <div className='contact-icons' data-aos='zoom-in'>
                <a href='https://www.linkedin.com/in/silvia-rocca-5589161b8/' target='_blank' rel='noreferrer'>
                <FaLinkedin /></a>

                <a href='https://github.com' target='_blank' rel='noreferrer'>
                <FaGithub /></a>

                <a href='mailto:silviaroca99@gmail.com'>
                    <FaEnvelope />
                </a>
            </div>
           
        </div>
        
   
    )
        

}export default Contact;