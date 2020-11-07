import React from 'react';
import './Body1.scss'
import { RiMouseLine } from 'react-icons/ri'

const Body1 = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} className="home-page1-container">
            <RiMouseLine className="mouse"/>
            <h1 id="big">SOFTWARE TECH DESIGN</h1>
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
        </section>
    )
})

export default Body1;