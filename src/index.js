import React from "react";
import ReactDOM from 'react-dom'
import './styles/styles.css';
import About from './pages/about'
import Projects from './pages/projects'
import Home from './pages/home'
import Sorting from './pages/sorting'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Header, Footer} from './components/layout'

function App() {

  return (
    <div className="App">
    <Router>
    <Header/>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/Projects" component={Projects}></Route>
      <Route path="/Sorting" component={Sorting}></Route>
    </Switch>
    </Router>
    <Footer/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
