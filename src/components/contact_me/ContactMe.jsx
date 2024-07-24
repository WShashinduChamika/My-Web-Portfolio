import React, { useRef } from 'react'
import './ContactMe.css'

import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactMe() {

    const form = useRef();

    const notify = () => {
        toast.success('Succesfully send !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }

    const sendEmail = (e) => {

        e.preventDefault();
        emailjs
            .sendForm('service_794m8eo', 'template_f14vwsf', form.current, {
                publicKey: 'luNZP3Pi3NEmTf0FA',
            })
            .then(
                () => {
                    notify()
                    console.log('SUCCESS!')
                    form.current.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text)
                },
            )
    }

    return (
        <div>
            <section className="contact" id="contact">

                <h2 className="heading">Contact <span>Me</span></h2>

                <form ref={form} onSubmit={sendEmail}>

                    <div className="input-box">
                        <input type="text" placeholder="Full Name" name='name' />
                        <input type="email" placeholder="Email" name='email' />
                    </div>

                    <div className="input-box">
                        <input type="number" placeholder="Mobile Number" name='phone_number' />
                        <input type="text" placeholder="Email Subject" name='email_subject' />
                    </div>

                    <textarea id="" cols="30" rows="10" placeholder="Your Message" name='message'></textarea>

                    <input type="submit" value="Send Message" className="btn" />

                </form>

            </section>
            <ToastContainer />
        </div>
    )
}
