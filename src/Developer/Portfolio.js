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
                    <p>A stock market trading replication based on real-time daily data.</p>
                </header>
                <br></br>
                <img className="right" alt="nomi application" src="https://i.gyazo.com/82277fad79c178c554ab397181797beb.png"/>
                <img className="right" alt="nomi application" src="https://i.gyazo.com/7e280c54cebd7e76d1c3d593d803ce95.png"/>
                <h2>Why I created NOMI?</h2>
                <p>
                    &emsp;&ensp;Nomi was my capstone project for my time at General Assembly. The stock market has always been an extremely intriguing sector of programming for me.
                    When I younger I would always ask why people cannot just buy low and sell high with a computer and make unlimiited money.
                    Ofcourse when I grew older I realized this was not entirely the case.
                </p>
                <p>
                    &emsp;&ensp;How could I learn the stock market without putting my own money inside it? 
                    The answer was simple, I would create my own application to invest without actually using my own money. 
                    That is where the Idea for NOMI came from.
                </p>
                <br></br>
                <h2>What is NOMI?</h2>
                <p>
                    &emsp;&ensp;It is a website and mobile application that allows for the user to buy and sell stocks on a daily or weekly basis. 
                    NOMI is aimed for long-term traders that are not neccesarily interested in day-trading.
                    I created this application as an assignment in 2 weeks while attending General Assembly in early 2020.
                    The front-end of NOMI is built off of <b>ReactJS</b> with a few custom libraries to enchance the overall look. 
                    For the back-end of NOMI I created an <b>ExpressJS</b> application that would communicate with multiple APIs and databases to properly store and create trading data.
                </p>
                <br></br>
                <h2>Handling API and User Data</h2>
                <p>
                    &emsp;&ensp;The biggest challenge for this project was coming up with and implementing the data structure for the flow of market and user data.
                    I started out my application as a simple ExpressJS app with a MongoDB database for users along with a bcrypt system for securing passwords. 
                    Once I started to work with a few stock market API's I soon realized that I could not rely soley on the API itself for my data.
                    All of the API's I could find at the time were extremely limited sometimes only allowing 100 calls a day. 
                    After a few estimations I calulcated that my application was going to need to call between 2-15 times per login just to gather the home-page data for each selected stock.
                    I knew a total re-design was needed if I wanted to not pay for an unlimited API.
                </p>
                <p>
                    &emsp;&ensp;Instead of pulling from the API every single time I wanted to use the data, I routed my application to only pull when the data is expired, using my own database as an API to my application. 
                    In short: I pull from my market API when the data is outdated by a day or more then send it directly to my own database. Letting every user use my datasets after the first user has triggered the update. Only grabbing the data I need, when I need it.
                </p>
                <p>
                    &emsp;&ensp;Once the API data was secured I wanted to make sure that when a user bought or sold a stock I would have all the exact secure data to confirm that it happened the way it should.
                    When a User buys a stock on NOMI I start out with a double check to make sure it is updated with the correct price and relative date.
                    The next step in the process is creating an <b>Action</b>. 
                    Actions are how I keep past and present trades, they store things like: Owner_id, Is_Owned, Quantity, Buy_Price, Stock_Name, Buy_Executed, Sell_Executed, Sell_Price. 
                    With this data I can track and monitor a full catalog of detailed trades aswell as properly update them as the user moves through the application within my ExpressJS app.
                </p>
                <br></br>
                <h2>Conclusion</h2>
                <p>
                    &emsp;&ensp;Even though there were many obstacles, I learned so many valuable things about Data, ReactJS, and ExpressJS code formation that it was absolutely worth it.
                    This project walked me through the entire process of creating a production application just within a few weeks. It is now currently on the Google Play store aswell as online hosted through firebase and heroku through the links below!
                </p>
                <br></br>
                <h2>Technologies Used</h2>
                <ul>
                    <li>ReactJS</li>
                    <li>React Native</li>
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                    <li>Stock market API</li>
                    <li>Firebase</li>
                    <li>Heroku</li>
                </ul>
                <a href="https://play.google.com/store/apps/details?id=com.nathanielredmon.nomi"><img alt="google play logo" src={GooglePlay}/></a>
                <a href="https://nomi-4acb8.web.app/"><img alt="chrome browser logo" src={Chrome}/></a>

            </div>



            <div className="modal" id="invidstor">
                <button onClick={() => props.close('#invidstor')}>X</button>
                <header>
                    <h1>This is <span>Invidstor</span></h1>
                    <p>An application for investing in your favorite content.</p>
                </header>
                <br></br>
                <h2>Bringing Investing and Content together</h2>
                <p>
                    &emsp;&ensp;Invidstor is an application aimed towards the young people who want to invest, but are scared off by the towering buildings and masssive greed of wall street.
                    Todays generation spend most of their time consuming content online. 
                    The biggest contributor to that content consumption is Youtube. 
                    There are over 5 Billion* videos watched on Youtube every single day and Invidstor taps into this consumption and combines the content consumer with the eager investor.
                </p>
                <h2>This Project is still in development</h2>
                <p>
                    &emsp;&ensp;I am currently developing this project but the algorithms, basic layout, user system, and databasing have been created. 
                    It is hosted in early alpha form at <a href="https://invidstor.com">Invidstor.com</a> if you would like to see current progress.
                    If the development website seems to not be communicating with the back-end it means it is currently undergoing productional maintenance. 
                </p>
            </div>



            <div className="modal" id="reactpixel">
                <button onClick={() => props.close('#reactpixel')}>X</button>
                <header>
                    <h1>This is <span>React Pixel</span></h1>
                    <p>An application for creating pixel art online.</p>
                </header>
                <br></br>
                <h2>Creating Pixel Art on the web</h2>
                <p>
                    &emsp;&ensp;Invidstor is an application aimed towards the young people who want to invest, but are scared off by the towering buildings and masssive greed of wall street.
                    Todays generation spend most of their time consuming content online. 
                    The biggest contributor to that content consumption is Youtube. 
                    There are over 5 Billion* videos watched on Youtube every single day and Invidstor taps into this consumption and combines the content consumer with the eager investor.
                </p>
                <h2>This Project is still in development</h2>
                <p>
                    &emsp;&ensp;I am currently developing this project but the algorithms, basic layout, user system, and databasing have been created. 
                    It is hosted in early alpha form at <a href="https://invidstor.com">Invidstor.com</a> if you would like to see current progress.
                    If the development website seems to not be communicating with the back-end it means it is currently undergoing productional maintenance. 
                </p>
            </div>
            <div className="modal" id="invidstor">
                <button onClick={() => props.close('#invidstor')}>X</button>
            </div>
        </React.Fragment>
    )
}

export default Portfolio;