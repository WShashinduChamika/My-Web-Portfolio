import React, { useEffect, useRef } from 'react'
import './Home.css'
import profilePic from './img/p.png'
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Typed from 'typed.js'

export default function Home() {

    const typedElement = useRef(null)

    useEffect(() => {
        const options = {
            strings: ['Full Stack Mobile Developer', 'Project Manager', 'Full Stack Web Developer'],
            typeSpeed: 70,
            backSpeed: 70,
            loop: true,
        };

        const typed = new Typed(typedElement.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div>
            <section className="home" id="home">

                <div className="home-content">
                    <h3>Hi, myself</h3>
                    <h1>Shashindu Chamika</h1>
                    <h3>And I'm a <span className="multiple-text" ref={typedElement}></span></h3>
                    <p>I am an enthusiastic undergraduate with a strong foundation of web and mobile application development techniques. My passion for the IT industry drives me to continuously learn and adapt to new technologies and methods </p>
                    <div className="social-media">
                        <a href="#"><FaWhatsapp></FaWhatsapp></a>
                        <a href="#"><FaLinkedin></FaLinkedin></a>
                        <a href="#"><FaGithub></FaGithub></a>
                        <a href="#"><FaFacebook></FaFacebook></a>
                    </div>
                    <a href="#" className="btn">Download CV</a>
                </div>

                <div className="home-img">
                    <img src={profilePic} alt='profile-pic' />
                </div>
            </section>
        </div>
    )
}
