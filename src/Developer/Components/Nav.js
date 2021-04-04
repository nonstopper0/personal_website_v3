import React from 'react'
import { useEffect } from 'react';
import './Nav.scss'
import {FaHome} from 'react-icons/fa'
import {MdPerson} from 'react-icons/md'
import {GoPencil} from 'react-icons/go'
import {HiMail} from 'react-icons/hi'

export default function Nav(props) {
    useEffect(() => {
            let nav = document.querySelector('nav')
            let navRight = document.querySelector('.nav-right')
            nav.addEventListener("mouseenter", (e) => mouseEnter(e, nav, navRight))
            nav.addEventListener("mouseleave", (e) => mouseLeave(e, nav, navRight))
            return () => {
                nav.removeEventListener("mouseleave", (e) => mouseLeave(e, nav, navRight))
                nav.removeEventListener("mouseenter", (e) => mouseEnter(e, nav, navRight))
            }
    }, [])

    const mouseEnter = (e, nav, navRight) => {
        if (e.clientX === 0) {
                return
        }
        navRight.style.left = "70px";
        for (let i = 0; i < navRight.children.length; i++) {
                navRight.children[i].style.animation = "nav-fade-in .5s ease-out forwards"
        }
    }

    const mouseLeave = (e, nav, navRight) => {
        // if the mouse leave the screen to the left. i do not want the nav to dissapear
        if (e.clientX < 0) {
          return
        }
        for (let i = 0; i < navRight.children.length; i++) {
          navRight.children[i].style.opacity = "0";
          navRight.children[i].style.animation = "nav-fade-out .5s ease-out"
        }
        navRight.style.left = ""
    }

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