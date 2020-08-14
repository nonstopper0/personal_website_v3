import React from 'react';
import './Body1.scss'

const Body1 = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} className="home-page1-container">
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
        </section>
    )
})

export default Body1;