import React from 'react';
import './Body3.scss'


const Body3 = React.forwardRef((props, ref) => {
    return (
        <section className="portfolio-container" ref={ref}>
            <button id="nomiButton" className="portfolio-row" onClick={()=> props.open('#nomi')}>
                <h3>NOMI</h3>
            </button>
            <button id="invidstorButton" className="portfolio-row" onClick={()=> props.open('#invidstor')}>
                <h3>Invidstor</h3>
            </button>
            <button className="portfolio-row" onClick={()=> props.open('#invidstor')}>
                <h3>W</h3>
            </button>
        </section>
    )
})

export default Body3;