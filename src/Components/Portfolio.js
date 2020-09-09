import React from 'react'
import "./Portfolio.scss"

import GooglePlay from "../SCSS/images/googleplay.png"
import Chrome from '../SCSS/images/chrome.png'

const Portfolio = (props) => {
    return (
        <React.Fragment>
            <div className="modal" id="nomi">
                <button onClick={() => props.close('#nomi')}>X</button>
                <header>
                    <h1>This is <span>NOMI</span></h1>
                    <p>A stock market trading replication based on real-time data.</p>
                </header>
                <img className="right" src="https://i.gyazo.com/82277fad79c178c554ab397181797beb.png"/>
                <img className="right" src="https://i.gyazo.com/7e280c54cebd7e76d1c3d593d803ce95.png"/>
                <h2>Why I created NOMI?</h2>
                <p>
                    Nomi was my capstone project for my time at General Assembly. The stock market has always been an extremely intriguing sector of programming for me.
                    When I younger I would always ask why people cannot just buy low and sell high with a computer and make unlimiited money.
                    Ofcourse when I grew older I realized this was not entirely the case.
                </p>
                <p>
                    But how could I learn the stock market without putting my own money inside it? 
                    The answer was simple, I would create my own application to invest without actually using my own money. 
                    That is where the Idea for NOMI came from.
                </p>
                <br></br>
                <h2>What is NOMI?</h2>
                <p>
                    It is a website and mobile application that allows for the user to buy and sell stocks on a daily or weekly basis. 
                    NOMI is aimed for long-term traders that are not neccesarily interested in day-trading.
                </p>
                <br></br>
                <h2>Technologies Used</h2>
                <ul>
                    <li>ReactJS</li>
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                    <li>Firebase</li>
                    <li>Heroku</li>
                </ul>
                {/* <a href="https://play.google.com/store/apps/details?id=com.nathanielredmon.nomi"><img src={GooglePlay}/></a>
                <a href="https://nomi-4acb8.web.app/"><img src={Chrome}/></a> */}

            </div>
            <div className="modal" id="invidstor">
                <button onClick={() => props.close('#invidstor')}>X</button>
                <header>
                    <h1>This is <span>Invidstor</span></h1>
                    <p>An application for investing in your favorite content.</p>
                </header>
            </div>
            <div className="modal" id="invidstor">
                <button onClick={() => props.close('#invidstor')}>X</button>
            </div>
        </React.Fragment>
    )
}

export default Portfolio;