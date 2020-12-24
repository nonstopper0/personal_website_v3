import React from 'react';

import Edge from './SCSS/images/edge.svg'

import Loader from './Components/Loader.js'
import Body1 from './Components/Body1.js'
import Body2 from './Components/Body2.js'
import Body3 from './Components/Body3.js'
import Nav from './Components/Nav.js'
import Portfolio from './Components/Portfolio';
import './App.scss';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            scrollHeight: 0,
            loading: true
        }
        this.aboutRef = React.createRef();
        this.portfolioRef = React.createRef();
        this.homeRef = React.createRef();
    }

    componentDidMount = async () => {

        window.addEventListener('scroll', this.onWindowScroll);

        // Portfolio section animations
        let portfolioRows = document.getElementsByClassName("portfolio-row")
        for (let i = 0; i < portfolioRows.length; i++) {
          portfolioRows[i].addEventListener("mouseenter", () => {
            portfolioRows[i].style.height = "380px";
            portfolioRows[i].children[0].style.opacity = 1;
            portfolioRows[i].children[0].style.animation = "portfolio-fade-start 1s ease"
          })
          portfolioRows[i].addEventListener("mouseleave", () => {
            // Reset height to css defined height
            portfolioRows[i].style.height = ""
            portfolioRows[i].children[0].style.animation = "portfolio-fade-end 1s ease forwards"
          })
        }

    }

    onWindowScroll = (e) => {
        console.log(this.aboutRef.current.offsetTop)
        let windowHeight = window.innerHeight
        let scroll = window.pageYOffset
    
        document.querySelector('.mouse').style.animation = "normal"
        document.querySelector('.mouse').style.opacity = "0"
  
    
        // Load in elements
        // let aboutMe = document.querySelector('.home-page2-box1')
        // if (aboutMe.getBoundingClientRect().top - windowHeight/1.2 < 0) {
        //     aboutMe.classList.add('fade-animation')
        // }
        let skills = document.querySelector('.home-page2-box2') 
        if (skills.getBoundingClientRect().top - windowHeight/1.2 < 0) {
            skills.classList.add('fade-animation')
        }            
      
        // let leeway = 100
        // if (window.screen.width > 600) { 
        //     leeway = 300
        // }
        // check if the scrollbar is moving up or down by comparing last marked scroll position and current
            // if (this.state.scrollHeight > scroll) {
            //     if (aboutMe.getBoundingClientRect().bottom > -100 && aboutMe.getBoundingClientRect().bottom < leeway) {
            //         aboutMe.classList.remove('blurred')
            //     }
            // } else if (this.state.scrollHeight < scroll) {
            //     if (aboutMe.getBoundingClientRect().bottom > -100 && aboutMe.getBoundingClientRect().bottom < leeway) {
            //         aboutMe.classList.add('blurred')
            //     }
            // }
        // set scroll position to check it the next time a scroll is performed
        this.setState({
            scrollHeight: scroll
        })
    }

    openModal = (name) => {
      // name is the id of modal you want to open 
      document.querySelector(".blurBox").style.display = "block";
      document.querySelector(name).style.display = "block";
      document.querySelector(name).style.animation = "modal-open 1s ease forwards"
    }

    closeModal = (name) => {
      // name is the id of modal you want to close 
      document.querySelector(".blurBox").style.display = "none";
      document.querySelector(name).style.animation = "modal-close 1s ease forwards"
    }

    scrollController = (refName) => {
      switch(refName) {
        case 'about':
          window.scrollTo(0, this.aboutRef.current.offsetTop)
          break;
        case 'home': 
          window.scrollTo(0, this.homeRef.current.offsetTop)
          break;
        case 'contact': 
          window.scrollTo(0, this.contactRef.current.offsetTop)
          break;
        case 'portfolio':
          window.scrollTo(0, this.portfolioRef.current.offsetTop)
          break;
        default: 
          break;
      }
    } 

    render() {
      return (
          <React.Fragment>
            <div className="page-container">
              <div className="blurBox"></div>
              <Nav scrollC={this.scrollController}/>
              <main className="home-container">
                  <img className="home-corner" id="one" alt="corner addition" src={Edge}/>
                  <img className="home-corner" id="two" alt="corner addition" src={Edge}/>
                  <img className="home-corner" id="three" alt="corner addition" src={Edge}/>
                  <img className="home-corner" id="four" alt="corner addition" src={Edge}/>
                  <div className="home-decorations">
                  </div>
                  <Portfolio close={this.closeModal} />
                  <Body1 ref={this.homeRef} />
                  <Body2 ref={this.aboutRef} />
                  <Body3 open={this.openModal} ref={this.portfolioRef} />
                  <div ref={this.downloadRef}></div>
              </main>
              <footer className="app-footer">
                <p>&copy; Copyright 2020. Nathaniel Redmon</p>
              </footer>
            </div>
          </React.Fragment>
          )
    }
}

export default App;
