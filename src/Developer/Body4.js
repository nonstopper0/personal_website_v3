import React from 'react'
import './Body4.scss'
import {HiMail, HiPhone} from 'react-icons/hi'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

const Body4 = React.forwardRef((props, ref) => {
    return (
        <React.Fragment>
            <div className="page-triangle4"></div>
            <section ref={ref} className="contact-container">
                <div className="contact-body-container">
                    <h4>Get in touch</h4>
                    <div className="contact-body-icons">
                        <a href="tel:502-693-6152"><HiPhone /></a>
                        <a href="mailto:nathanielredmon@gmail.com"><HiMail /></a>
                        <a href="https://github.com/nonstopper0"><AiFillGithub /></a>
                        <a href="https://www.linkedin.com/in/nathaniel-redmon-68b74915b/"><AiFillLinkedin/></a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
})

export default Body4;