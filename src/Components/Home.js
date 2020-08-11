import React, { useState, useEffect } from 'react';
import './Home.scss'

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onWindowScroll);

        let container = document.querySelector(".home-container")
        let height = document.querySelector(".home-page2-container").getClientRects()
        container.style.height = `${height}px`

        // h1 typing css addons
        let typeText = document.querySelector('#line');
        let border = true;
        let changeAllowed = false
        setTimeout(() => {changeAllowed = true}, 2000)
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
        let windowHeight = window.innerHeight
        let scroll = window.pageYOffset
        let parallax1 = scroll * .2
        let parallax2 = scroll * .4
        let parallax3 = scroll * -1

        


        let decoration2 = document.querySelector('#home-decoration2')
        let decoration3 = document.querySelector('#home-decoration3')


        decoration2.style.transform = `translate3d(0px, ${parallax2}px, 0px)`
        decoration3.style.transform = `translate3d(0px, ${parallax3}px, 0px)`

        let aboutMeTop = document.querySelector(".home-page2-box1").getBoundingClientRect().top
        let aboutme = 0
        let distanceToTarget = aboutMeTop - windowHeight/2
        console.log('distance to target: ', distanceToTarget)
        if (distanceToTarget > 0) {
            console.log('LOADING..')
        } else {
            console.log('DONE..')
        }
        let decoration1 = document.querySelector('#home-decoration1')
        decoration1.style.transform = `translate(-50%, -50%) translate3d(0px, ${aboutme}px, 0px)`
        
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onWindowScroll)
    }
    render() {
        return (
            <React.Fragment>
                <div className="home-container">
                    <div className="home-decorations">
                        <p id="home-decoration1">d</p>
                        <p id="home-decoration2">d</p>
                        <p id="home-decoration3">c</p>
                    </div>
                    <div className="home-page1-container">
                        <div className="home-page1-body">
                            <ins>d</ins>
                            <div className="home-page1-div">
                                <h1 id="type">Nathaniel Redmon</h1>
                                <div id="line"></div>
                            </div>
                            <p>Full-stack developer</p>
                            <ins>c</ins>
                        </div>
                    </div>
                    <div className="home-page2-container">
                        <div className="home-page2-box1">
                            <div className="home-page2-box1-img">

                            </div>
                            <div className="home-page2-box1-text">
                                <h2>About me</h2>
                                <ins>c</ins>
                                <p>Nisi fugiat ullamco consectetur sint. Nisi labore Lorem labore cupidatat ex occaecat nulla minim. Culpa sit reprehenderit dolor aliquip id ex occaecat laborum laborum laborum fugiat in magna aute.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}