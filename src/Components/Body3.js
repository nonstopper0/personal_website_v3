import React from 'react';
import './Body3.scss'


const Body3 = React.forwardRef((props, ref) => {
    return (
        <section className="portfolio-container" ref={ref}>
            <div className="portfolio-row">
                <h3>NOMI</h3>
            </div>
            <div className="portfolio-row">
                <h3>Invidstor</h3>
            </div>
            <div className="portfolio-row">

            </div>
        </section>
    )
})

export default Body3;