import React from "react";
import {Container} from '../components/layout.js'
import { motion } from "framer-motion"
export function About() {

    return (
        <Container type="about">
            <div className="center" style={{display: 'flex' ,flexDirection: 'column', textAlign: 'center', height: '1000px'}}>
                <p> Hello There! I am a 3rd year student at JAMK University of Applied Sciences. After spending 1,5 years studying International Business, 
                    I made a leap of faith and decided to broaden my field of expertise by transferring over to Business IT. I am currently learning game development
                    via courses and web development on my free time. I pride myself in being capable of taking feedback, and not taking myself too seriously.
                </p>
                <p>Technologies I know:  <br/></p>
                <p>Technologies I am interested in: <br/> </p>
                <p>During my free time I also dabble in video editing with After Effects and Premiere, experimenting with Photoshop and Pixel Art when I am in the mood for it</p>
                <p>Currently my goals include making going to the gym a habit, Getting world's first raid completion in Destiny 2 and creating more projects to fill my portfolio with</p>
                <p></p>
            </div>
        </Container>
    )
}

export default About