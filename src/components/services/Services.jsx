import React from 'react'
import './Services.css'
import { FaAndroid, FaCode } from 'react-icons/fa'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

export default function Services() {
    return (
        <div>
            <section className="services" id="services">

                <h2 className="heading">My <span>Services</span></h2>

                <div className="service-container">

                    <div className="service-box">
                        <FaCode className='service-box-icon'></FaCode>
                        <h3>Web Development</h3>
                        <p>Transform your ideas into reality with custom web development. Utilizing the latest technologies,
                            I create responsive, user-friendly websites that enhance your online presence and drive engagement
                        </p>
                        <a href="#about" class="btn">Read more</a>
                    </div>

                    <div className="service-box">
                        <AiOutlineFundProjectionScreen className="service-box-icon"></AiOutlineFundProjectionScreen>
                        <h3>Quality Assurance</h3>
                        <p>Ensure your software's reliability and performance with comprehensive quality assurance services. 
                           I meticulously test and refine your applications to deliver flawless and user-friendly experiences.
                        </p>
                        <a href="#about" className="btn">Read more</a>
                    </div>

                    <div className="service-box">
                        <FaAndroid className="service-box-icon"></FaAndroid>
                        <h3>App Development</h3>
                        <p>Elevate your business with intuitive and engaging mobile apps. Specializing in both iOS and Android platforms,
                           I develop seamless, high-performance mobile solutions tailored to your needs.
                        </p>
                        <a href="#about" className="btn">Read more</a>
                    </div>

                </div>

            </section>
        </div>
    )
}
