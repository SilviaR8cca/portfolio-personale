import React, { useEffect }  from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Home.css';

function Home() {
   
    useEffect(() => {
        AOS.init({ duration:1000});
    }, []);

    return (
        <div className="home-wrapper">
              
         
           
           
        <div className="home-container">
            <div className="intro-section" data-aos="fade-up">
                <h1>Ciao, sono <span className="highlight">Silvia</span></h1>
                <h2>Frontend Developer</h2>
                <p>Specializzata in HTML, CSS, Javascript, React e TypeScript mi sto specializzando  anche in altri linguaggi di sviluppo</p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/silvia-rocca-5589161b8/" target="_blank" rel="noreferrer">
                    <FaLinkedin /> </a>

                    <a href="https://github.com" target="_blank" rel="noreferrer">
                    <FaGithub /> </a>

                    <a href="mailto:silviarocca99@gmail.com">
                        <FaEnvelope /> </a>
                </div>
            </div>

            <div className="skills-section" data-aos="fade-up">
                <h3>Competenze</h3>
                <div className="skill">
                    <span>HTML</span>
                    <div className="bar html"></div>
                </div>
                <div className="skill">
                    <span>CSS</span>
                    <div className="bar css"></div>
                    </div>
                <div className="skill">
                    <span>JavaScript</span>
                    <div className="bar js"></div>
                </div>
                <div className="skill">
                    <span>React</span>
                    <div className="bar react"></div>
                </div>
                <div className="skill">
                    <span>TypeScript</span>
                    <div className="bar TS"></div>
                </div>
            </div>
        </div>
        <div className="bottom-divider"></div>
        <footer className="home-footer">
            <p>&copy; {new Date().getFullYear()} Silvia Rocca - Tutti i diritti riservati</p>
        </footer>
        </div>
    );
}

export default Home;