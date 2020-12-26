import React from 'react';
import './Nav.scss'
import {FaHome} from 'react-icons/fa'
import {MdPerson} from 'react-icons/md'
import {GoPencil} from 'react-icons/go'
import {HiMail} from 'react-icons/hi'

function nav(props) {
    return (
        <nav>
                <div className="nav-left">
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
                                <HiMail />
                        </button>          
                </div>

                <div className="nav-right">
                        <button onClick={() => props.scrollC('home')}>
                                <p>Home</p>
                        </button>
                        <button onClick={() => props.scrollC('about')}>
                                <p>About Me</p>
                        </button>
                        <button onClick={() => props.scrollC('portfolio')}>
                                <p>My Work</p>
                        </button>
                        <button onClick={() => props.scrollC('contact')}>
                                <p>Contact</p>
                        </button>                          
                </div>
        </nav>
    )
}

export default nav;