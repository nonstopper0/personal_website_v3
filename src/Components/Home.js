import React from 'react';
import './Home.scss'
import {FaHome, FaDownload} from 'react-icons/fa'
import {MdPerson} from 'react-icons/md'

import Me from '../SCSS/images/me.jpg'
import Arrow from '../SCSS/images/arrow.svg' 

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            scrollHeight: 0
        }
        this.aboutRef = React.createRef();
        this.downloadRef = React.createRef();
        this.homeRef = React.createRef();
    }
    componentDidMount() {
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



        // mainText typing javascript
        let typeText = document.querySelector('#line');
        let border = true;
        let changeAllowed = false
        setTimeout(() => {
            changeAllowed = true
            document.querySelector('#type').style.opacity = '1'
            document.querySelector('#line2').style.opacity = '1'
        }, 2000)
        setTimeout(() => { document.querySelector('#line2').style.opacity = '0'}, 3000)
        setInterval(() => {
            if (changeAllowed) {
                if (border == true) {
                    typeText.style.opacity = '0';
                    border = false;
                } else {
                    typeText.style.opacity = '1';
                    border = true;  
                }
            }
        }, 400)
    }
    onWindowScroll = (e) => {
        // Decoration Parallax
        let windowHeight = window.innerHeight
        let scroll = window.pageYOffset


        // Load in elements
        let aboutMe = document.querySelector('.home-page2-box1')
        if (aboutMe.getBoundingClientRect().top - windowHeight/1.2 < 0) {
            aboutMe.classList.add('fade-animation')
        }

        console.log(aboutMe.getBoundingClientRect().bottom)

        // check if the scrollbar is moving up or down by comparing last marked scroll position and current
        if (this.state.scrollHeight > scroll) {
            if (aboutMe.getBoundingClientRect().bottom > -100 && aboutMe.getBoundingClientRect().bottom < 200) {
                aboutMe.classList.remove('blurred')
            }
        } else if (this.state.scrollHeight < scroll) {
            if (aboutMe.getBoundingClientRect().bottom > -100 && aboutMe.getBoundingClientRect().bottom < 300) {
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
    render() {
        return (
            <React.Fragment>
                <nav>
                <div id="navLine"></div>
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
                        <p id="home-decoration1">i</p>
                        <img id="arrow" alt="Arrow" src={Arrow}/>
                    </div>
                    <div className="home-page1-container">
                        <h1 id="big">NATHANIEL</h1>
                        <div className="home-page1-body">
                            <ins>d</ins>
                            <div className="home-page1-div">
                                <h1>Nathaniel Redmon</h1>
                                <div id="line"></div>
                            </div>
                            <div className="home-page1-div2">
                                <p id="type">Full-stack developer</p>
                                <div id="line2"></div> 
                            </div>
                            <ins>c</ins>
                        </div>
                    </div>
                    <div ref={this.aboutRef} className="home-page2-container">
                        <div className="home-page2-box1">
                            <img src={Me} alt="Nathaniel Redmon" className="home-page2-box1-img"></img>
                            <div className="home-page2-box1-text">
                                <h2>About me</h2>
                                <ins>c</ins>
                                <p>Nisi fugiat ullamco consectetur sint. Nisi labore Lorem labore cupidatat ex occaecat nulla minim. Culpa sit reprehenderit dolor aliquip id ex occaecat laborum laborum laborum fugiat in magna aute.</p>
                            </div>
                        </div>
                    </div>
                    <div className="home-page3-container">

                    </div>
                </div>
            </React.Fragment>
        )
    }
}