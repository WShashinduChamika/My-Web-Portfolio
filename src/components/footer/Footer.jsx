import React from 'react'
import './Footer.css'
import { FaAngleUp } from 'react-icons/fa6'

export default function Footer() {
    return (
        <div>
            <footer className="footer">

                <div className="footer-text">
                    <p>Copyright &copy; 2024 by sn-development | All Rights Reserved</p>
                </div>

                <div className="footer-icon-top">
                    <a href="#home"><FaAngleUp className='footer-icon'></FaAngleUp></a>
                </div>

            </footer>

        </div>
    )
}
