import React from 'react';
import './Body2.scss'

import Me from '../SCSS/images/me.jpg'
import Arrow from '../SCSS/images/arrow.svg' 

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
                    I am a <span>Full-stack developer</span> that loves every aspect of programming. 
                    I use my development skills to create my own ideas and businesses while also taking time to learn something new and noteworthy every day. 
                    When I'm not working on my next project or idea you can find me out at the race-track or in the mountains doing what I love.
                    </p>
                </div>
            </div>
            <img className="graffiti" id="arrow" alt="Arrow" src={Arrow}/>
            <div className="home-page2-box2">
                <div className="home-page2-box2-text">
                    <h2>Technologies I use.</h2>
                </div>
            </div>
        </section>
    )
})

export default Body2;