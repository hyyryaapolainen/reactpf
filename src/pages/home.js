import React, { useEffect, useRef} from "react";
import {Container, Text, CvItem } from '../components/layout'
import profile from '../images/testing.png'

function Home() {
    const componentContainer = useRef(null)

    useEffect(() => {
    console.log("home")
    return function cleanup()
     {
        console.log("home unmounted!") 
     }
    })
    return (
      <div style={{overflow: 'hidden'}}>
        <div ref={componentContainer} className="component-container">
          <div style={{height: 750, overflow: 'hidden'}} className="center main fade-in">
            <Text type="about">
            <h3>I'm Aapo and</h3>
            <h1>I make IT work</h1>
            <button className="contact-button">Contact!</button>
            </Text>
            <div className="profile-picture">
            <img style={{height: 750, width: 375}} src={profile} alt="profile"></img>
            </div>
          </div>
        <Container type="cv">
          <div className="center">
            <Text type="cv">
                <div className="cv title">
                    <h2>Work Experience</h2>
                </div>
                <CvItem 
                icon="fas fa-flag"
                job="DataGroup Sata IT - 2021" 
                description="Internship as an ICT support and PowerApps Developer"
                duties="">
                </CvItem>
                <CvItem 
                icon="fas fa-bullhorn"
                job="Presenter at Asuntomessut - Housing Fair Finland - Kouvola 2019" 
                description="Housing Fair is an annual event for everyone interested in all things related to housing."
                duties="I worked as a presenter at one of the locations">
                </CvItem> 
                <CvItem 
                icon="fas fa-calculator"
                job="Accounting Assistant - Monelle Oy - 2018, 2020-2021, 2022" 
                description="Duties include handling payments, billing and mail as well as data entry"
                duties="">
                </CvItem>                
                <CvItem 
                icon="fas fa-hammer"
                job="Construction worker at Elementit-E Oy - 2017" 
                description=" I was tasked with assembling flooring and insulation for wooden prefabs"
                duties="">
                </CvItem>
            </Text>
            <div className="cv text small-text">
              <h1> "Jack of all trades, master of maybe a few"</h1>
            </div>
            <Text type="cv">
              <div className="cv title">
                  <h2>Education</h2>
              </div>
              <CvItem 
                icon="fas fa-chalkboard-teacher"
                job="JAMK University of Applied Sciences - 2018 - Current" 
                description="Currently studying Business IT, previously International Business"
                duties="">
              </CvItem>
              <CvItem 
                icon="fas fa-graduation-cap"
                job="Kouvolan Yhteiskoulun lukio - Upper Secondary - 2013-2016" 
                description="Finnish upper secondary school and matriculation examination"
                duties="Final exams in Physics, Chemistry, Biology, Advanced Mathematics, English and Finnish ">
              </CvItem>
              <CvItem 
                icon="fas fa-school"
                job="Finnish Elementary School - 2004-2012" 
                description="General education"
                duties="">
              </CvItem>
            </Text>
          </div>
        </Container>
        </div>
    </div>
    )
}

export default Home;