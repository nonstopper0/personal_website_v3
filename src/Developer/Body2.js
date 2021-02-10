import React from 'react';
import './Body2.scss'
import Logos from '../SCSS/images/technologies.png'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import { GiPencilBrush } from 'react-icons/gi'
import { RiCodeSSlashLine } from 'react-icons/ri'
import { FaRegEye } from 'react-icons/fa'

const Body2 = React.forwardRef((props, ref) => {
    return (
        <React.Fragment>
        <div className="page-triangle"></div>
        <section className="home-page2-container">

            <div className="home-page2-skills-container">

                <div className="home-page2-skills-row">
                    <div className="home-page2-skills-row-item">
                        <div className="home-page2-skills-row-item-circle">
                            <GiPencilBrush />
                        </div>
                        Designer
                    </div>
                    <div className="home-page2-skills-row-item">
                        <div className="home-page2-skills-row-item-circle">
                            <RiCodeSSlashLine />
                        </div>                    
                        Creator
                    </div>
                    <div className="home-page2-skills-row-item">
                        <div className="home-page2-skills-row-item-circle">
                            <FaRegEye />
                        </div>  
                        Visionary
                    </div>
                </div>

            </div>

            <div className="page-triangle2"></div>
            <h1 className="home-page2-extra-text">TRAVEL ADVENTURE</h1>

            <div className="home-page2-box1">
            
                <div className="home-page2-box1-text">
                    <h2>About me</h2>
                    <p>
                    I am a <span>Full-stack developer located in Denver, Colorado,</span> currently working at PFTLeads as a Website Development Lead.
                    I Graduated from <span>General Assembly</span> (A Software Engineering Bootcamp) in early 2020 and have pursued my passion ever since.
                    Every day I focus on <span>improving my skills, building my network, and hurting my posture</span>. 
                    Whenever I am not at my desk you can find me at the race-track or on top of a mountain. 
                    </p>
                    <div className="home-page2-box1-text-icons">
                        <a href="https://github.com/nonstopper0"><AiFillGithub/></a>
                        <a href="https://www.linkedin.com/in/nathaniel-redmon-68b74915b/"><AiFillLinkedin/></a>
                    </div>
                </div>
            </div>
            {/* <div className="home-page2-timeline">
                <section className="home-page2-timeline-left">
                    <div className="timeline-textbox">
                            <div className="timeline-line-left"></div>
                            <p>Started School at General Assembly for Software Engineering</p>
                            <h6>November 2019</h6>
                    </div>
                    <div style={{height: '60px'}}></div>
                    <div className="timeline-textbox">
                            <div className="timeline-line-left"></div>
                            <p>Started postion as Website Manager at PFTLeads </p>
                            <h6>April 2020</h6>
                    </div>
                </section>
                <section className="home-page2-timeline-middle">
                    <div className="timeline-textbox">
                        
                    </div>
                </section>
                <section className="home-page2-timeline-right">
                    <div style={{height: '60px'}}></div>
                    <div className="timeline-textbox">
                            <p>Graduated General Assembly</p>
                            <h6>February 2020</h6>
                            <div className="timeline-line-right"></div>
                    </div>
                </section>
            </div> */}
            <div ref={ref} className="home-page2-box2">
                <div className="home-page2-box2-text">
                    <h3>Technologies I use</h3>
                    <img  id="home-page2-box2-logos" alt="technology logos" src={Logos}/>
                </div>
            </div>
        </section>
        <div className="page-triangle3"></div>
        </React.Fragment>
    )
})

export default Body2;