import React, {useRef, useState} from "react";
import {Container, Text, CvItem } from '../components/layout'
import profile from '../images/outdoor (25) edited.png'
import translations from '../textData.js'
import itemTranslations from '../itemTextData.js'

function Home(props) {
    const componentContainer = useRef(null)
    const language = props.lang
    const getTranslation = (language, text) =>{
      return translations[language][text] != undefined ? translations[language][text] : " Missing text at " + text
    }
    const getItemTranslation = (language, category, text) =>{
      return itemTranslations[language][category]
    }
    return (
      <div style={{overflow: 'hidden', backgroundColor:"var(--main-bg-color)"}}>
        <div ref={componentContainer} className="component-container">
          <div className="center main">
          <div className="center fade-in">
                 <div className="chapter">
                 <div className="paragraph">
                    <h1>Aapo Hyyryläinen</h1>
                  </div>
                    <div className="paragraph">
                    <p>
                      {getTranslation(language, 'AboutParagraph1')}                    
                    </p>
                    </div>
                    <div className="paragraph">
                    <p>
                    {getTranslation(language, 'AboutParagraph2')}
                    </p>
                    </div>
                    <div className="paragraph">
                    <p> {getTranslation(language, 'AboutParagraph3')}</p>
                    </div>
                    <div className="paragraph">
                     <p>{getTranslation(language, 'AboutParagraph4')}</p>
                    </div>
                    
                    <div className="paragraph" style={{marginBottom: '1em', marginTop: '1em'}}>
                    <h2 style={{marginTop: "0.5em"}}>{getTranslation(language, 'Technologies')}</h2>
                    <br></br>
                    <h4>{getTranslation(language, 'Technologies2')}</h4>
                    </div>
                    
                    <div className="paragraph">
                    <h2 style={{marginTop: "0.5em"}} >{getTranslation(language, 'Stuff')}</h2>
                    <br></br>
                    <h4>{getTranslation(language, 'Stuff2')}</h4>
                    <br></br>
                    
                    </div>
                </div>
            </div>
            <div className="profile-picture fade-in" >
            <img src={profile} alt="profile"></img>
            </div>
          </div>
        <span className="underline mid"></span>
        
        <Container type="cv">
          <div className="center fade-up">   
            <Text type="cv">              
                <div className="cv title">
                    <h2>{getTranslation(language, 'Work')}</h2>
                </div>
                {getItemTranslation(language,'work').map(x => <CvItem key={x['jobs']} jobInfo={x}/>)}
            </Text>
            <div className="cv text small-text">
              <h1 id="quote-text">{getTranslation(language, 'Quote_text')}</h1>
            </div>
            <Text type="cv">
              <div className="cv title">
                  <h2>Education</h2>
              </div>
              {getItemTranslation(language,'education').map(x => <CvItem key={x['description']} jobInfo={x}/>)}
            </Text>
          </div>
        </Container>
        </div>
    </div>
    )
}

export default Home;