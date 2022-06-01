import React from "react";
import ReactDOM from 'react-dom'
import './styles/styles.css';
import Projects from './pages/projects'
import Home from './pages/home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Header, Footer} from './components/layout'

function App() {

  return (
    <div className="App">
    <Router>
    <Header/>
    <Switch>
      <Route path="/reactpf" exact component={Home}></Route>
      <Route path="/Projects" component={Projects}></Route>
    </Switch>
    </Router>
    <Footer/>
    </div>
  )
}
ReactDOM.render(<App/>, document.getElementById('root'))
