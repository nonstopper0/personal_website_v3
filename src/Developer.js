import React from 'react';

import Body1 from './Developer/Body1.js'
import Body2 from './Developer/Body2.js'
import Body3 from './Developer/Body3.js'
import Body4 from './Developer/Body4.js'
import Nav from './Developer/Nav.js'
import Portfolio from './Developer/Portfolio.js';

import './Developer.scss';
import Edge from './SCSS/images/edge.svg'

class Developer extends React.Component {
    constructor() {
        super()
        this.state = {
            scrollHeight: 0,
            loading: true,
            skillsrow: true,
            skills: true,
            aboutMe: true,
            contactMe: true
        }
        this.aboutRef = React.createRef();
        this.portfolioRef = React.createRef();
        this.homeRef = React.createRef();
        this.contactRef = React.createRef();
    }

    componentDidMount = async () => {

        window.addEventListener('scroll', this.onWindowScroll);

        // Portfolio section animations
        let portfolioRows = document.getElementsByClassName("portfolio-row")
        for (let i = 0; i < portfolioRows.length; i++) {
          portfolioRows[i].addEventListener("mouseenter", () => {
            portfolioRows[i].children[0].style.opacity = 1;
            portfolioRows[i].children[0].style.animation = "portfolio-fade-start 1s ease"
          })
          portfolioRows[i].addEventListener("mouseleave", () => {
            // Reset height to css defined height
            portfolioRows[i].style.height = ""
            portfolioRows[i].children[0].style.animation = "portfolio-fade-end 1s ease forwards"
          })
        }


        // navigations text fade in and out animation triggers
        let nav = document.querySelector('nav')
        let navRight = document.querySelector('.nav-right')
        nav.addEventListener("mouseenter", (e) => {
          if (e.clientX === 0) {
            return
          }
          navRight.style.left = "70px";
          for (let i = 0; i < navRight.children.length; i++) {
            navRight.children[i].style.animation = "nav-fade-in .5s ease-out forwards"
          }
        })
        nav.addEventListener("mouseleave", (e) => {
          console.log(e)
          // if the mouse leave the screen to the left. i do not want the nav to dissapear
          if (e.clientX < 0) {
            return
          }
          for (let i = 0; i < navRight.children.length; i++) {
            navRight.children[i].style.opacity = "0";
            navRight.children[i].style.animation = "nav-fade-out .5s ease-out"
          }
          navRight.style.left = ""
        })
    }

    onWindowScroll = (e) => {
        let windowHeight = window.innerHeight
        let scroll = window.pageYOffset
    
        // Load in elements based off of screen height
        if (this.state.skillsrow) {
          let skillsrow = document.querySelector('.home-page2-skills-row')
          if (skillsrow.getBoundingClientRect().top - windowHeight/1.2 < 0) {
            skillsrow.children[0].style.animation = ('skill-fade-in 1s ease forwards')
            document.querySelector('.mouse').style.opacity = "0";
            setTimeout(() => {
              skillsrow.children[1].style.animation = ('skill-fade-in 1s ease forwards')
            }, 500)
            setTimeout(() => {
              skillsrow.children[2].style.animation = ('skill-fade-in 1s ease forwards')
              this.setState({
                skillsrow: false
              })
            }, 1000)
          }
        }

        if (this.state.skills) {
          let skills = document.querySelector('.home-page2-box2-text') 
          if (skills.getBoundingClientRect().top - windowHeight/1.2 < 0) {
            skills.children[0].style.animation = 'skill-fade-in-2 1s ease forwards'
            skills.children[1].style.animation = 'skill-fade-in-3 1s ease forwards'
            this.setState({
              skills: false
            })
          }      
        }

        if (this.state.aboutMe) {
          let aboutMe = document.querySelector('.home-page2-box1') 
          if (aboutMe.getBoundingClientRect().top - windowHeight/1.2 < 0) {
            aboutMe.style.animation = 'skill-fade-in 1s ease forwards'
            this.setState({
              aboutMe: false
            })
            
          }             
        }

        if (this.state.contactMe) {
          let contactMe = document.querySelector('.contact-body-container').children[0]
          let icons = document.querySelector('.contact-body-icons')
          if (contactMe.getBoundingClientRect().top - windowHeight/1.2 < 0) {
            contactMe.style.animation = 'skill-fade-in 1s ease forwards'
            icons.children[3].style.animation = ('skill-fade-in 1s ease forwards')
            document.querySelector('.mouse').style.opacity = "0";
            setTimeout(() => {
              icons.children[2].style.animation = ('skill-fade-in 1s ease forwards')
            }, 200)
            setTimeout(() => {
              icons.children[1].style.animation = ('skill-fade-in 1s ease forwards')
              this.setState({
                contactMe: false
              })
            }, 400)
            setTimeout(() => {
              icons.children[0].style.animation = ('skill-fade-in 1s ease forwards')
              this.setState({
                contactMe: false
              })
            }, 600)
            
          }             
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
                  <Body4 ref={this.contactRef} />
                  <div ref={this.downloadRef}></div>
              </main>
              <footer className="app-footer">
                <p>&copy; Copyright 2020. Nathaniel Redmon</p>
                <p>This website is still in active development.</p>
              </footer>
            </div>
          </React.Fragment>
          )
    }
}

export default Developer;
