import React from "react";
import {Container} from '../components/layout.js'
import { motion } from "framer-motion"
export function About() {

    return (
        <Container type="about">
            <div className="center" style={{display: 'flex' ,flexDirection: 'column',
             textAlign: 'center', height: '100%'}}>
                 <div className="chapter">
                    <div className="paragraph">
                    <p> Hello There! I am a 3rd year student at JAMK University of Applied Sciences. After spending 1,5 years studying International Business, 
                        I made a leap of faith and decided to broaden my field of expertise by transferring over to Business IT. I am currently learning game development
                        via courses and web development on my free time. I pride myself in being capable of taking feedback, and not taking myself too seriously.
                    </p>
                    </div>
                    <div className="paragraph">
                    <img src=""></img>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default About