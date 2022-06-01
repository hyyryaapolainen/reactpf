import React, { useEffect, useRef} from "react";
import {Container, Text, CvItem } from '../components/layout'
import profile from '../images/outdoor (25) edited.JPG'

function Home() {
    const componentContainer = useRef(null)
    return (
      <div style={{overflow: 'hidden'}}>
        <div ref={componentContainer} className="component-container">
          <div style={{height: 750, overflow: 'hidden'}} className="center main fade-in">
          <div className="center" style={{
             textAlign: 'center', height: '100%', width: '50%'}}>
                 <div className="chapter">
                    <div className="paragraph">
                    <h2>About me</h2>
                    <br></br>
                    <p>I am a 4th year student at JAMK University of Applied Sciences. After studying International Business at JAMK, 
                        I made a leap of faith and decided to broaden my field of expertise by transferring over to Business IT.
                    </p>
                    </div>
                    <div className="paragraph">
                    <p> I am a soon to be Business IT graduate with excellent customer service skills, an analytical mind and an unquenchable thirst for knowledge. </p>
                    </div>
                    <div className="paragraph">
                    <p> I pride myself in being capable of taking feedback, and not taking myself too seriously.<br></br> On my free time I dabble in photography, video editing and music.</p>
                    </div>
                    <div className="paragraph" style={{marginBottom: '2em', border: '1px solid'}}>
                    <h2 style={{marginTop: "0.5em"}}>Technologies I know</h2>
                    <br></br>
                    <h4>C# - Unity - HTML - CSS - JS - React </h4>
                    <br></br>
                    </div>
                    <div className="paragraph" style={{border: '1px solid'}}>
                    <h2 style={{marginTop: "0.5em"}} >Stuff I am interested in</h2>
                    <br></br>
                    <h4>C++ - Python - Rust - Docker - AND MORE! </h4>
                    <br></br>
                    </div>
                </div>
            </div>
            <div className="profile-picture">
            <img src={profile} alt="profile"></img>
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