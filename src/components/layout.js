import React from 'react'
import '../styles/styles.css';
import {Link} from 'react-router-dom'
import { useSpring, animated as a } from 'react-spring'

export function Footer() {
    return (
    <footer>
    <div className="footer">
        <ul className="footer-links">
            <li>
                <i className ="fa fa-envelope"></i>
                <a href="mailto:a.hyyrylainen79@gmail.com">Email</a>
            </li>
            <li>
                <i className="fab fa-github-square"></i>
                <a href="https://github.com/hyyryaapolainen/">Github</a>
            </li>
            <li>
                <i className="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/aapo-hyyryl%C3%A4inen-72baa7158/">Linkedin</a>
            </li>
        </ul>
    </div>
    </footer>
    )
}
export function Header() {
    return (
    <nav>
        <div className="logobox">
            <h4>LOGO HERE</h4>
        </div>
        <ul className="nav-links">
            <Link to='/'>
                <li><p>Home</p></li>
            </Link>
            <Link to='/Projects'>
                <li><p>Projects</p></li>
            </Link>
            <Link to='/About'>
                <li><p>About</p></li>
            </Link>
        </ul>
    </nav>
    )
}
export function Container(props) {
    return <div className={"container "+ props.type}>
      {props.children}
    </div>;
  }
export function Text(props) {
    return <div className={props.type +" text"}>
    {props.children}
    </div>
  } 
export function GalleryItem( {pr} ) {
    return (
        <div className="gallery item">
        <h4 className="gallery-title">{pr.name}</h4>
        <h2>{pr.description}</h2>
        <img src={pr.pic}></img>
        </div>
    )
}
  

  export default function Default(props) {
    return <div></div>
  }