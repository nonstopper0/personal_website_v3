import React from 'react';
import './Home.scss'
import {FaHome, FaDownload} from 'react-icons/fa'
import {MdPerson} from 'react-icons/md'

import Me from '../SCSS/images/me.jpg'
import Arrow from '../SCSS/images/arrow.svg' 
import Can from '../SCSS/images/can.svg'
import NavCan from '../SCSS/images/navcan.svg'

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            scrollHeight: 0,
        }
        this.aboutRef = React.createRef();
        this.downloadRef = React.createRef();
        this.homeRef = React.createRef();
    }

    componentDidMount = async () => {
        
        window.addEventListener('scroll', this.onWindowScroll);
        
        if (window.screen.width > 500) {
            let nav = document.querySelector('nav')
            nav.addEventListener('mouseenter', () => {
                nav.style.left = '0px'
            })
            nav.addEventListener('mouseleave', () => {
                nav.style.left = '-65px'
            })
        }


        // blur the window
        // window.onblur = () => {
        //     document.querySelector('.blurBox').style.opacity = '1'
        // }
        // window.onfocus = () => {
        //     document.querySelector('.blurBox').style.opacity = '0'
        // }


        // mainText typing javascript
        let typeText = document.querySelector('#line');
        setTimeout(() => {
            document.querySelector('#type').style.opacity = '1'
            document.querySelector('#line2').style.opacity = '1'
            typeText.classList.add('blinking')
        }, 2000)
        setTimeout(() => { document.querySelector('#line2').style.opacity = '0'}, 3000)
    }

    onWindowScroll = (e) => {
        let windowHeight = window.innerHeight
        let scroll = window.pageYOffset


        // Load in elements
        let aboutMe = document.querySelector('.home-page2-box1')
        if (aboutMe.getBoundingClientRect().top - windowHeight/1.2 < 0) {
            aboutMe.classList.add('fade-animation')
        }

        let leeway = 100
        if (window.screen.width > 600) { 
            leeway = 300
        }
        // check if the scrollbar is moving up or down by comparing last marked scroll position and current
        if (this.state.scrollHeight > scroll) {
            if (aboutMe.getBoundingClientRect().bottom > -100 && aboutMe.getBoundingClientRect().bottom < leeway) {
                aboutMe.classList.remove('blurred')
            }
        } else if (this.state.scrollHeight < scroll) {
            if (aboutMe.getBoundingClientRect().bottom > -100 && aboutMe.getBoundingClientRect().bottom < leeway) {
                aboutMe.classList.add('blurred')
            }
        }
        // set scroll position to check it the next time a scroll is performed
        this.setState({
            scrollHeight: scroll
        })
    }

    componentWillUnmount() {
        document.querySelector('nav').removeEventListener('mouseover', this.navHandler())
        window.removeEventListener('scroll', this.onWindowScroll)
    }

    deGraffiti() {
        let graffiti = document.querySelectorAll('.graffiti')
        for (let i = 0; i < graffiti.length; i++) {
            if (graffiti[i].style.display !== 'none') {
                graffiti[i].style.display = 'none'
            } else {
                graffiti[i].style.display = 'block'
            }
        }
    }
    render() {
        return (
            <React.Fragment>
            { !this.state.isLoading ? 
            <div className="page-container">
                <div className="blurBox"></div>
                <nav>
                    <div id="navLine"></div>
                    <button id="canBtn" onClick={() => this.deGraffiti()}>
                        <div id="canDiv">
                            <p className="hidden">Graffiti</p>
                            <img id="canButton" src={NavCan} alt="can" />
                        </div>
                    </button>
                    <button onClick={() => window.scrollTo(0, this.homeRef.current.offsetTop)}>
                        <div>
                            <p className="hidden">Home</p>
                            <FaHome />
                        </div>
                    </button>
                    <button onClick={() => window.scrollTo(0, this.aboutRef.current.offsetTop)}>
                        <div>
                            <p className="hidden">About</p>
                            <MdPerson />
                        </div>
                    </button>
                    <button onClick={() => window.scrollTo(0, this.downloadRef.current.offsetTop)}>
                        <div>
                            <p className="hidden">Download</p>
                            <FaDownload />
                        </div>
                    </button>
                </nav>
                <div ref={this.homeRef} className="home-container">
                    <div className="home-decorations">
                        <p className="graffiti" id="home-decoration1">i</p>
                        <img className="graffiti" id="arrow" alt="Arrow" src={Arrow}/>
                        <img className="graffiti" id="can" alt="can" src={Can}/>
                    </div>
                    <div className="home-page1-container">
                        <h1 id="big">NATHANIEL</h1>
                        <div className="home-page1-body">
                            <ins className="graffiti">d</ins>
                            <div className="home-page1-div">
                                <h1>Nathaniel Redmon</h1>
                                <div id="line"></div>
                            </div>
                            <div className="home-page1-div2">
                                <p id="type">Full-stack developer</p>
                                <div id="line2"></div> 
                            </div>
                            <ins className="graffiti">c</ins>
                        </div>
                    </div>
                    <div ref={this.aboutRef} className="home-page2-container">
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
                                <p id="home-decoration2">b</p>
                                <h2>Skills</h2>
                            </div>
                        </div>
                    </div>
                    <div className="home-page3-container">
                    </div>
                </div>
            </div>
            :
            null }
            </React.Fragment>
        )
    }
}