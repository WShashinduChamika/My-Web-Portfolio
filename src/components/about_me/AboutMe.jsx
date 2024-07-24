import React from 'react'
import './AboutMe.css'
import aboutPic from './img/about.png'

export default function AboutMe() {
    return (
        <div>
            <section className="about" id="about">

                <div className="about-img">
                    <img src={aboutPic} />
                </div>

                <div className="about-content">
                    <h2 className="heading">ABOUT <span>Me</span></h2>
                    <h3>Full Stack Developer</h3>
                    <p>I am an enthusiastic undergraduate with a strong foundation of web and mobile application development techniques. My passion for the IT industry drives me to continuously learn and adapt to new technologies and methods. I'm eager to contribute my skills and gain knowledge from experienced professionals during this internship, 
                        further developing my expertise and advancing my career in software engineering. </p>
                    <a href="#" className="btn">Read more</a>
                </div>
            </section>
        </div>
    )
}
