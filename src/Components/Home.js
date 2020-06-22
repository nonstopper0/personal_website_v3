import React, { useState, useEffect } from 'react';
import './Home.scss'

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onWindowScroll)
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
                        <h1>Nathaniel Redmon</h1>
                        <p>Full-stack developer</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}