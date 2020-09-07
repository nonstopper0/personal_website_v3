import React from 'react'
import "./Portfolio.scss"

const Portfolio = (props) => {
    return (
        <React.Fragment>
            <div className="modal" id="nomi">
                <button onClick={() => props.close('#nomi')}>X</button>
                <h3>HELLO</h3>
                <h3>HELLO</h3>
                <h3>HELLO</h3>
                <h3>HELLO</h3>
                <h3>HELLO</h3>
                <h3>HELLO</h3>

            </div>
            <div className="modal" id="invidstor">
                <button onClick={() => props.close('#invidstor')}>X</button>
            </div>
            <div className="modal" id="invidstor">
                <button onClick={() => props.close('#invidstor')}>X</button>
            </div>
        </React.Fragment>
    )
}

export default Portfolio;