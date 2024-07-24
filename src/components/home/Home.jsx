import React, { useEffect, useRef } from 'react'
import './Home.css'
import profilePic from './img/p1.png'
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp, FaHackerrank } from 'react-icons/fa'
import Typed from 'typed.js'
import resume from './resume/W.ShashinduChamika.pdf'

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
            <section class="home" id="home">

                <div class="home-content">
                    <h3>Hi, myself</h3>
                    <h1>Shashindu Chamika</h1>
                    <h3>And I'm a <span class="multiple-text" ref={typedElement}></span></h3>
                    <p>I am an enthusiastic undergraduate with a strong foundation of web and mobile application development techniques. My passion for the IT industry drives me to continuously learn and adapt to new technologies and methods </p>
                    <div class="social-media">
                        <a href=""><FaWhatsapp></FaWhatsapp></a>
                        <a href="https://www.linkedin.com/in/shashindu-chamika-a5517330a/"><FaLinkedin></FaLinkedin></a>
                        <a href="https://github.com/WShashinduChamika"><FaGithub></FaGithub></a>
                        <a href="https://web.facebook.com/shashindu.chamika/"><FaFacebook></FaFacebook></a>
                        <a href='https://www.hackerrank.com/profile/shashinduchamik2'><FaHackerrank></FaHackerrank></a>
                    </div>
                    <a href={resume} class="btn" download="resume" >Download CV</a>
                </div>

                <div class="home-img">
                    <img src={profilePic} alt='profile-pic' />
                </div>
            </section>
        </div>
    )
}
