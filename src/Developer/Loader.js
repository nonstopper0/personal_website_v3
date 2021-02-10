import React from 'react';
import './Loader.scss'

import Load from '../SCSS/images/Load.svg';

function Loader() {
    return (
        <div className="loader-background">
            <img alt="loader" id="loader" src={Load}></img>
        </div>
    )
}

export default Loader;