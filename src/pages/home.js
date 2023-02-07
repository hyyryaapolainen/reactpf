import React, { useEffect, useRef} from "react";
import {Container, Text, CvItem } from '../components/layout'
import profile from '../images/outdoor (25) edited.png'

function Home() {
    const componentContainer = useRef(null)
    return (
      <div style={{overflow: 'hidden'}}>
        <div ref={componentContainer} className="component-container">
          <div className="center main fade-in">
          <div className="center">
                 <div className="chapter">
                 <div className="paragraph">
                    <h1>Aapo Hyyryläinen</h1>
                  </div>
                    <div className="paragraph">
                    <p>I am a graduated business IT student from JAMK University of Applied Sciences. After completing my studies at JAMK, I decided to 
                      broaden my expertise and started studying Computer Science at LUT University.
                    </p>
                    </div>
                    <div className="paragraph">
                    <p> I am an aspiring web developer with excellent customer service skills, an analytical mind and an unquenchable thirst for knowledge. </p>
                    </div>
                    <div className="paragraph">
                    <p> I pride myself in being capable of taking feedback, and not taking myself too seriously.<br></br> On my free time I dabble in game development, music and video editing.</p>
                    </div>
                    <div className="paragraph" style={{marginBottom: '2em', border: '1px solid'}}>
                    <h2 style={{marginTop: "0.5em"}}>Technologies I know</h2>
                    <br></br>
                    <h4>C# - Unity - HTML - CSS - JS - React - GIT </h4>
                    <br></br>
                    </div>
                    <div className="paragraph" style={{border: '1px solid'}}>
                    <h2 style={{marginTop: "0.5em"}} >Stuff I am interested in</h2>
                    <br></br>
                    <h4>C - Java - C++ - Docker and more! </h4>
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
                job="DataGroup Sata IT - 2021 Autumn" 
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
                <CvItem 
                icon="far fa-address-card"
                job="Miscellaneous part-time jobs - 2014 - 2017" 
                description="I started working early on in my life mostly during summers, ranging from customer service jobs to outdoors maintenance work"
                duties="">
                </CvItem>
            </Text>
            <div className="cv text small-text">
              <h1 id="quote-text"> "Jack of all trades, master of maybe a few"</h1>
            </div>
            <Text type="cv">
              <div className="cv title">
                  <h2>Education</h2>
              </div>
              <CvItem 
                icon="fas fa-desktop"
                job="LUT University - 2022 - Current" 
                description="Currently studying Computer Science with Electrical Engineering on the side"
                duties="">
              </CvItem>
              <CvItem 
                icon="fas fa-chalkboard-teacher"
                job="JAMK University of Applied Sciences 2018 - 2022" 
                description="Finished studied and graduated as Bachelor of Business Administration"
                duties="">
              </CvItem>
              <CvItem 
                icon="fas fa-graduation-cap"
                job="Kouvolan Yhteiskoulun lukio - Upper Secondary 2013 - 2016" 
                description="Finnish upper secondary school and matriculation examination"
                duties="Final exams in Physics, Chemistry, Biology, Advanced Mathematics, English and Finnish ">
              </CvItem>
              <CvItem 
                icon="fas fa-school"
                job="Finnish Elementary School 2004 - 2012" 
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