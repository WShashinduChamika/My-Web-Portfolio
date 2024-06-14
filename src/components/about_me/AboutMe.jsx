import React from 'react'
import './AboutMe.css'
import aboutPic from './img/aboutpic.png'

export default function AboutMe() {
    return (
        <div>
            <section class="about" id="about">

                <div class="about-img">
                    <img src={aboutPic} />
                </div>

                <div class="about-content">
                    <h2 class="heading">ABOUT <span>Me</span></h2>
                    <h3>Full Stack Developer</h3>
                    <p>I am an enthusiastic undergraduate with a strong foundation of web and mobile application development techniques. My passion for the IT industry drives me to continuously learn and adapt to new technologies and methods. I'm eager to contribute my skills and gain knowledge from experienced professionals during this internship, 
                        further developing my expertise and advancing my career in software engineering. </p>
                    <a href="#" class="btn">Read more</a>
                </div>
            </section>
        </div>
    )
}
