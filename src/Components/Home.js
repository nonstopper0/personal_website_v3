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
        let windowSize = window.innerHeight-50
        //
        // if (copyright.getBoundingClientRect().bottom <= windowSize) {
        //     console.log('hitting')
        //     copyright.style.opacity = 1
        // }
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onWindowScroll)
    }
    render() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}