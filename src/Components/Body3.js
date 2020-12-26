import React from 'react';
import './Body3.scss'
import { GiClick } from 'react-icons/gi'
import NOMIMacbook from '../SCSS/images/nomimacbook.png'
import NOMIMacbook2 from '../SCSS/images/nomimacbook2.png'
import InvidstorMacbook from '../SCSS/images/invidstormacbook.png'
import InvidstorMacbook2 from '../SCSS/images/invidstormacbook2.png'

const Body3 = React.forwardRef((props, ref) => {
    return (
        <section ref={ref} className="home-body3-container">
        <div className="portfolio-container">
            <h3>My Work</h3>
            <button id="nomiButton" className="portfolio-row" onClick={()=> props.open('#nomi')}>
                <div className="portfolio-cover">
                    <img src={NOMIMacbook} />
                    <img src={NOMIMacbook2} />
                    <GiClick className="click-button"/>
                </div>
            </button>
            <button id="invidstorButton" className="portfolio-row" onClick={()=> props.open('#invidstor')}>
                <div className="portfolio-cover">
                    <img src={InvidstorMacbook}/>
                    <img src={InvidstorMacbook2}/>
                    <GiClick className="click-button"/>
                </div>
            </button>
            {/* <button className="portfolio-row" onClick={()=> props.open('#invidstor')}>
                <div className="portfolio-cover"/>
                <h3>W</h3>
            </button> */}
        </div>
        </section>
    )
})

export default Body3;