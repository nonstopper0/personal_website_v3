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
        window.addEventListener('scroll', this.onWindowScroll)

        // h1 typing css addons
        let typeText = document.querySelector('#type')
        setTimeout(()=> {
            typeText.style.transform = 'scale(1.1)'
        }, 1000)
        setTimeout(() => {
            typeText.style.borderRight = 'none'
        }, 2000)

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
                        <h1 id="type">Nathaniel Redmon</h1>
                        <p>Full-stack developer</p>
                        <ins>c</ins>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}