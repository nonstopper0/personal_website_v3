import React from 'react';
import './Nav.scss'
import {FaHome, FaDownload} from 'react-icons/fa'
import {MdPerson} from 'react-icons/md'
import {GoPencil} from 'react-icons/go'
import NavCan from '../SCSS/images/navcan.svg'

function nav(props) {
    return (
        <nav>
            <div id="navLine"></div>
            <button id="canBtn" onClick={() => props.graffiti()}>
                <div id="canDiv">
                    <p className="hidden">Graffiti</p>
                    <img id="canButton" src={NavCan} alt="can" />
                </div>
            </button>
            <button onClick={() => props.scrollC('home')}>
                <div>
                    <p className="hidden">Home</p>
                    <FaHome />
                </div>
            </button>
            <button onClick={() => props.scrollC('about')}>
                <div>
                    <p className="hidden">About</p>
                    <MdPerson />
                </div>
            </button>
            <button onClick={() => props.scrollC('download')}>
                <div>
                    <p className="hidden">Download</p>
                    <FaDownload />
                </div>
            </button>
            <button onClick={() => props.scrollC('contact')}>
                <div>
                    <p className="hidden">Contact</p>
                    <GoPencil />
                </div>
            </button>
        </nav>
    )
}

export default nav;