import React from 'react'
import './Portfolio.css'
import p1 from './img/1.jpg'
import p2 from './img/2.jpg'
import p3 from './img/3.jpg'
import p4 from './img/4.jpg'
import p5 from './img/5.jpg'
import p6 from './img/6.jpg'
import { FaUpRightFromSquare } from 'react-icons/fa6'

export default function Portfolio() {
    return (
        <div>
            <section className="portfolio" id="portfolio">

                <h2 className="heading">Latest <span>Projects</span></h2>

                <div className="portfolio-container">

                    <div className="portfolio-box">
                        <img src={p1} />
                        <div className="portfolio-layer">
                            <h4>Web Design</h4>
                            <p>Akkdfkdf, dfdkfkdfkallk, ddfldlfs ddf lsfd dfaldf ajfldfjdflldfjdlf dfdlfldlf dfdfjld.</p>
                            <a href=""><FaUpRightFromSquare classNameName='portfolio-icon'></FaUpRightFromSquare></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={p2} />
                        <div className="portfolio-layer">
                            <h4>Web Design</h4>
                            <p>Akkdfkdf, dfdkfkdfkallk, ddfldlfs ddf lsfd dfaldf ajfldfjdflldfjdlf dfdlfldlf dfdfjld.</p>
                            <a href=""><FaUpRightFromSquare classNameName='portfolio-icon'></FaUpRightFromSquare></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={p3} />
                        <div className="portfolio-layer">
                            <h4>Web Design</h4>
                            <p>Akkdfkdf, dfdkfkdfkallk, ddfldlfs ddf lsfd dfaldf ajfldfjdflldfjdlf dfdlfldlf dfdfjld.</p>
                            <a href=""><FaUpRightFromSquare classNameName='portfolio-icon'></FaUpRightFromSquare></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={p4} />
                        <div className="portfolio-layer">
                            <h4>Web Design</h4>
                            <p>Akkdfkdf, dfdkfkdfkallk, ddfldlfs ddf lsfd dfaldf ajfldfjdflldfjdlf dfdlfldlf dfdfjld.</p>
                            <a href=""><FaUpRightFromSquare classNameName='portfolio-icon'></FaUpRightFromSquare></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={p5} />
                        <div className="portfolio-layer">
                            <h4>Web Design</h4>
                            <p>Akkdfkdf, dfdkfkdfkallk, ddfldlfs ddf lsfd dfaldf ajfldfjdflldfjdlf dfdlfldlf dfdfjld.</p>
                            <a href=""><FaUpRightFromSquare classNameName='portfolio-icon'></FaUpRightFromSquare></a>
                        </div>
                    </div>

                    <div className="portfolio-box">
                        <img src={p6} />
                        <div className="portfolio-layer">
                            <h4>Web Design</h4>
                            <p>Akkdfkdf, dfdkfkdfkallk, ddfldlfs ddf lsfd dfaldf ajfldfjdflldfjdlf dfdlfldlf dfdfjld.</p>
                            <a href=""><FaUpRightFromSquare classNameName='portfolio-icon'></FaUpRightFromSquare></a>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    )
}
