import React from 'react';

import Can from './SCSS/images/can.svg'
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

        await this.setState({loading: false})

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
      
      
        //blur the window
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
        console.log(this.aboutRef.current.offsetTop)
        let windowHeight = window.innerHeight
        let scroll = window.pageYOffset
    
        document.querySelector('.mouse').style.animation = "normal"
        document.querySelector('.mouse').style.opacity = "0"
  
    
        // Load in elements
        let aboutMe = document.querySelector('.home-page2-box1')
        if (aboutMe.getBoundingClientRect().top - windowHeight/1.2 < 0) {
            aboutMe.classList.add('fade-animation')
        }
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

    componentWillUnmount() {
        let nav = document.querySelector('nav')
        nav.removeEventListener('mouseover')
        nav.removeEventListener('mouseleave')
        window.removeEventListener('scroll')
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

    openModal = (name) => {
      document.querySelector(".blurBox").style.display = "block";
      document.querySelector(name).style.display = "block";
    }

    closeModal = (name) => {
      document.querySelector(".blurBox").style.display = "none";
      document.querySelector(name).style.display = "none";
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
            { !this.state.loading ? 
            <div className="page-container">
              <div className="blurBox"></div>
              <Nav scrollC={this.scrollController} graffiti={this.deGraffiti}/>
              <main className="home-container">
                <img className="home-corner" id="one" alt="corner addition" src={Edge}/>
                <img className="home-corner" id="two" alt="corner addition" src={Edge}/>
                <img className="home-corner" id="three" alt="corner addition" src={Edge}/>
                <img className="home-corner" id="four" alt="corner addition" src={Edge}/>
                <div className="home-decorations">
                  <p className="graffiti" id="home-decoration1">i</p>
                  <img className="graffiti" id="can" alt="can" src={Can}/>
                </div>
                <Portfolio close={this.closeModal} />
                <Body1 ref={this.homeRef} />
                <Body2 ref={this.aboutRef} />
                <Body3 open={this.openModal} ref={this.portfolioRef} />
                <div ref={this.downloadRef} style={{height: 1000, width: '100%'}}></div>
              </main>
              <footer className="app-footer">
                <p>&copy; Copyright 2020. Nathaniel Redmon</p>
              </footer>
            </div>
            :
            <Loader />
            }
          </React.Fragment>
          )
    }
}

export default App;
