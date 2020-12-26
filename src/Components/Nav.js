import React from 'react';
import './Nav.scss'
import {FaHome} from 'react-icons/fa'
import {MdPerson} from 'react-icons/md'
import {GoPencil} from 'react-icons/go'
import NavCan from '../SCSS/images/navcan.svg'

function nav(props) {
    return (
        <nav>
            <button onClick={() => props.scrollC('home')}>
                    <FaHome />
            </button>
            <button onClick={() => props.scrollC('about')}>
                    <MdPerson />
            </button>
            <button onClick={() => props.scrollC('portfolio')}>
                    <GoPencil />
            </button>
            <button onClick={() => props.scrollC('contact')}>
                    <GoPencil />
            </button>
            <div className="nav-background"></div>
        </nav>
    )
}

export default nav;