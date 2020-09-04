import React from 'react';
import './Body2.scss'

import Me from '../SCSS/images/me.jpg'
import Logos from '../SCSS/images/technologies.png'

const Body2 = React.forwardRef((props, ref) => {
    return (
        <section ref={ref}  className="home-page2-container">
            <div className="home-page2-box1">
                <img src={Me} alt="Nathaniel Redmon" className="home-page2-box1-img"></img>
                <div className="home-page2-box1-text">
                    <h2>About me</h2>
                    <ins className="graffiti">c</ins>
                    <p>
                    Currently located in <span>Denver, Colorado.</span>
                    I am a <span>Full-stack developer</span>
                    </p>
                </div>
            </div>
            <div className="home-page2-timeline">
                <section className="home-page2-timeline-left">
                    <div className="timeline-textbox">
                            <div className="timeline-line-left"></div>
                            <p>Started School at General Assembly for Software Engineering</p>
                            <h6>November 2019</h6>
                    </div>
                    <div style={{height: '60px'}}></div>
                    <div className="timeline-textbox">
                            <div className="timeline-line-left"></div>
                            <p>Started postion as Website Manager at PFTLeads </p>
                            <h6>April 2020</h6>
                    </div>
                </section>
                <section className="home-page2-timeline-middle">
                    <div className="timeline-textbox">
                        
                    </div>
                </section>
                <section className="home-page2-timeline-right">
                    <div style={{height: '60px'}}></div>
                    <div className="timeline-textbox">
                            <p>Graduated General Assembly</p>
                            <h6>February 2020</h6>
                            <div className="timeline-line-right"></div>
                    </div>
                </section>
            </div>
            <div className="home-page2-box2">
                <div className="home-page2-box2-text">
                    <h3>Technologies I use.</h3>
                    <img id="home-page2-box2-logos" alt="technology logos" src={Logos}/>
                </div>
            </div>
        </section>
    )
})

export default Body2;