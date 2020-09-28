import React from 'react';
import TextLoop from "react-text-loop";
import {Container, Text} from '../components/layout'

function Home() {
    return (
        <React.Fragment>
        <Container type="main">
          <div style={{height: 750}} className="center main">
            <Text type="about">
            <h3>I'm Aapo and</h3>
            <h1>I make <TextLoop interval={2000} children={["Games", "Pixel Art", "Software", "it work"]} /></h1>
            <button>Contact!</button>
            </Text>
            <div className="profile-picture">
            <img src="https://picsum.photos/400/700"></img>
            </div>
          </div>
        </Container>
        <Container type="cv">
          <div style={{height: 600}}className="center">
            <Text type="cv">
                <div className="cv title">
                    <h2>Work Experience</h2>
                </div>
                <div className="cv item">
                  <div className="cv icon"><i class="fas fa-bullhorn"></i> </div>
                  <div>
                  <h3>JOB</h3>
                  <h4>Text about this job</h4>
                  </div>
                </div>
                <div className="cv item">
                  <div><i class="fas fa-bullhorn"></i> </div>
                  <div>
                  <h3>JOB</h3>
                  <h4>Text about this job</h4>
                  </div>
                </div>
                <div className="cv item">
                  <div className="cv icon"><i class="fas fa-bullhorn"></i> </div>
                  <div>
                  <h3>JOB</h3>
                  <h4>Text about this job</h4>
                  </div>
                </div>
            </Text>
            <div className="cv text small-text">
              <h1> "Jack of all trades, master of like a few"</h1>
            </div>
            <Text type="cv">
              <div className="cv title">
                  <h2>Education</h2>
              </div>
              <div className="cv item">
                  <div className="cv icon"><i class="fas fa-bullhorn"></i> </div>
                  <div>
                  <h3>JOB</h3>
                  <h4>Text about this job</h4>
                  </div>
                </div>
              <div className="cv item">
                <div>
                  <i class="fas fa-bullhorn"></i> 
                </div>
                <div>
                  <h3>JOB</h3>
                  <h4>Text about this job</h4>
                </div>
              </div>
              <div className="cv item">
                <div>
                  <i class="fas fa-bullhorn"></i> 
                </div>
                <div>
                  <h3>JOB</h3>
                  <h4>Text about this job</h4>
                </div>
              </div>
            </Text>
          </div>
        </Container>
    </React.Fragment>
    )
}

export default Home;