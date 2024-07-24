import React from 'react'
import './Portfolio.css'
import p1 from './img/1.png'
import p2 from './img/2.png'
import p3 from './img/3.png'
// import p4 from './img/4.jpg'
// import p5 from './img/5.jpg'
// import p6 from './img/6.jpg'
import { FaUpRightFromSquare } from 'react-icons/fa6'

export default function Portfolio() {
    return (
        <div>
            <section className="portfolio" id="portfolio">

                <h2 className="heading">Latest <span>Projects</span></h2>

                <div className="portfolio-container">

                    <div className="portfolio-box">
                        <img src={p1} alt='p1' />
                        <div className="portfolio-layer">
                            <h4>AQUO</h4>
                            <p>This is a mobile application that I developed for controlling and monitoring agricultural works.</p>
                            <a href="https://github.com/WShashinduChamika/MiniProject-AQUO-.git"><FaUpRightFromSquare className='portfolio-icon'></FaUpRightFromSquare></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={p2} alt='p2' />
                        <div className="portfolio-layer">
                            <h4>MasterMindEd</h4>
                            <p>This is web application that I developed as online course registration platform.</p>
                            <a href="https://github.com/WShashinduChamika/Master-Mind.git"><FaUpRightFromSquare className='portfolio-icon'></FaUpRightFromSquare></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={p3} alt='p3' />
                        <div className="portfolio-layer">
                            <h4>S&N Meals</h4>
                            <p>This mobile applicaton allows users to order foods in effective and effecient way.</p>
                            <a href="https://github.com/WShashinduChamika/SN-Meals.git"><FaUpRightFromSquare className='portfolio-icon'></FaUpRightFromSquare></a>
                        </div>
                    </div>

                    {/* <div className="portfolio-box">
                        <img src={p4} alt='p4' />
                        <div className="portfolio-layer">
                            <h4>Web Design</h4>
                            <p>Akkdfkdf, dfdkfkdfkallk, ddfldlfs ddf lsfd dfaldf ajfldfjdflldfjdlf dfdlfldlf dfdfjld.</p>
                            <a href="#about"><FaUpRightFromSquare className='portfolio-icon'></FaUpRightFromSquare></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={p5} alt='p5' />
                        <div className="portfolio-layer">
                            <h4>Web Design</h4>
                            <p>Akkdfkdf, dfdkfkdfkallk, ddfldlfs ddf lsfd dfaldf ajfldfjdflldfjdlf dfdlfldlf dfdfjld.</p>
                            <a href="#about"><FaUpRightFromSquare className='portfolio-icon'></FaUpRightFromSquare></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={p6} alt='p6' />
                        <div className="portfolio-layer">
                            <h4>Web Design</h4>
                            <p>Akkdfkdf, dfdkfkdfkallk, ddfldlfs ddf lsfd dfaldf ajfldfjdflldfjdlf dfdlfldlf dfdfjld.</p>
                            <a href="#about"><FaUpRightFromSquare className='portfolio-icon'></FaUpRightFromSquare></a>
                        </div>
                    </div> */}

                </div>

            </section>

        </div>
    )
}
