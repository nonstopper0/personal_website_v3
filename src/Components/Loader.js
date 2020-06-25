import React from 'react'
import './Loader.scss'

function Loader(props) {
    return (
        <div class="loader">
            <div class="loader-svg">
                <svg id="loader-ball1" height="100" width="100"><circle cx="50" cy="50" r="10" fill="#86C232" /></svg>
                <svg id="loader-ball2" height="100" width="100"><circle cx="50" cy="50" r="10" fill="#61892F" /></svg>
                <svg id="loader-ball3" height="100" width="100"><circle cx="50" cy="50" r="10" fill="#FFF" /></svg>
            </div>
      </div>
    )
}

export default Loader;