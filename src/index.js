import React, {useState} from "react";
import ReactDOM from 'react-dom'
import './styles/styles.css';
import Projects from './pages/projects'
import Home from './pages/home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Header, Footer, ModeSwitch} from './components/layout'

function App() {
  const [theme, setTheme] = useState('dark')
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  const [language, setLanguage] = useState('english')
  const switchLanguage = () => {
    const newLang= language === 'finnish' ? 'english' : 'finnish';
    setLanguage(newLang);
  }
  
  return (
    <div className="App" data-theme={theme}>
    <div className="modes">
      <div>
      {/*<button className="lighting-mode-button"onClick={switchLanguage}>{language === 'finnish' ? "EN" : "FI"}</button>
      */}<button className="lighting-mode-button"onClick={switchTheme}><i className={theme === 'light' ? "fas fa-moon" : "fas fa-sun"}></i></button>
       </div>
   </div>
    <Router>
      <Header/>
    <Switch>
      <Route path="/reactpf"
      exact component={(props) => <Home {...props} lang = {language} />}></Route>
      <Route path="/Projects" component={Projects}></Route>
    </Switch>
    </Router>
    <Footer/>
    </div>
  )
}
ReactDOM.render(<App/>, document.getElementById('root'))
