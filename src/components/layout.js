import React, { useState, useEffect} from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import '../styles/styles.css'
import {Link} from 'react-router-dom'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import projectData from '../projectData'

const headerlinks = [
  {
    color: "#009c07",
    location: '/reactpf',
    name: 'Home',
    id: 'linktohome',
    icon: "fas fa-home"
  },
  {
    color: "#00819e",
    location: '/Projects',
    name: 'Projects',
    id: 'linktoprojects',
    icon: "far fa-check-square"
  } /*,
  {
    color: '#000000',
    location: '/About',
    name: 'About',
    id: 'linktoabout',
    icon: "far fa-address-card"
  },
  {
    color: "#ffaa00",
    location: '/Sorting',
    name: 'Sorting',
    id: 'linktosorting',
    icon: "fas fa-certificate"
  },
  */
]

function Card(props) {
return (
  <Flippy
    flipOnHover={false} 
    flipOnClick={true} 
    flipDirection="horizontal"
  >
    <FrontSide>
    <div className="card">
    {props.front}
    </div>
    </FrontSide>
    <BackSide>
     <div className="card">
      {props.back}
     </div>
    </BackSide>
  </Flippy>
)}

export function Footer() {
    return (
    <footer>
    <div className="footer">
        <ul className="footer-links">
            <li>
                <a style={{color: 'white'}} href="mailto:a.hyyrylainen79@gmail.com"><i className ="fa fa-envelope"></i></a>
            </li>
            <li>
                <a style={{color: 'white'}} href="https://github.com/hyyryaapolainen/"><i className="fab fa-github-square"></i></a>
            </li>
            <li>
                <a style={{color: 'white'}}href="https://www.linkedin.com/in/aapo-hyyryl%C3%A4inen-72baa7158/"><i className="fab fa-linkedin"></i></a>
            </li>
        </ul>
    </div>
    </footer>
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
  const [isOpen, setIsOpen] = useState(false)
  const variants = {
    open: { opacity: 0, scale: 1},
    closed: { opacity: 1},
  }
    return (
        <React.Fragment>
        <div className="gallery-item">
        <h4 className="gallery-title" >{pr.name}</h4>
        <div className="image-container" onClick ={() => setIsOpen(isOpen => !isOpen)}>
        <motion.div
        animate={isOpen ? "open" : "closed"}
        variants = {variants}
        >
        <img className="gallery-image" src= {pr.pic}/>
        </motion.div>
        <motion.div style=
        {{position: "absolute",
        opacity: "0",
        left: "0",
        top: "30%",
        right: "0",
        height: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        width: "70%",
        textAlign: "center"
        }}
        animate={isOpen ? "closed" : "open"}
        variants = {variants}><div className="item-subtitle">{pr.description}</div>
        <div className="item-subtitle" style={{textAlign: "center"}}>{pr.subtitle}</div>
        {isOpen &&
        <div className="item-subtitle" style={{fontSize: "100%"}}>
          <a style={{zIndex: "2"}} href={pr.link}>{pr.link}</a>
        </div>
        }
        </motion.div>
        </div>
        </div>
        </React.Fragment>
    )
}
/*/    <div style={{height: pr.picDim[0], width: pr.picDim[1]}}>
<Card front={<img src={pr.pic} alt={pr.name}></img>} back={<h2>{pr.description}</h2>}></Card>
</div>
*/
function ProjectDisplay (props) {
  const variants = {
    open: { opacity: 1,fontSize: '16px', scale: 1.2},
    closed: { opacity: 0, width: '0px', height: '0px', fontSize: '0px'},
  }
  return (
    <motion.div
    onClick={props.onClick}
    style={{margin: 'auto', opacity: 0, width: '0px', height: '0px', fontSize: '0px'}}
    animate= {props.isOpen ? "open" : "closed"}
    variants = {variants}
    >
    <motion.div animate= {props.isOpen ? "open" : "closed"}
    variants = {variants}><p>{props.description}</p></motion.div>
    </motion.div>
  )
}
function CategoryGallery ( {pr } ) {
  
  return(

    <div>{projectData.map(project => { if(project.category === pr.category) {
      return (<GalleryItem key={project.id} pr={project}></GalleryItem>)
  } else{return}})}</div>
  )
}
export function CvItem (props) {
  return (
    <React.Fragment>
        <div className="cv item">
          <div><i className={props.jobInfo['icon']}></i></div>
        <div>
          <h3>{props.jobInfo['job']}</h3>
          <div className="cv description"><p>{props.jobInfo['description']}</p>
          <p>{props.jobInfo['duties']}</p></div>
          </div>
        </div>
    </React.Fragment>
  )
}

  export default function Default(props) {
    return <div></div>
  }

  export function Header() {
    const [selected, setSelected] = useState();
    useEffect(() => {
      if (window.location.pathname === '/reactpf')
      {
        setSelected(headerlinks[0].color)
      }
      else if (window.location.pathname === '/Projects')
      {
        setSelected(headerlinks[1].color)
      }
      else if (window.location.pathname === '/About')
      {
        setSelected(headerlinks[2].color)
      }
      else if (window.location.pathname === '/Sorting')
      {
        setSelected(headerlinks[3].color)
      }
      return () => {}
    }, [selected])
    return (
        <motion.div className="header-container">
        <AnimateSharedLayout>
        <div className="header">
        <ul className="nav-links">
            {headerlinks.map(link => (
            <Item
                key={link.id}
                link={link}
                isSelected={selected === link.color}
                onClick={() => setSelected(link.color)}
            ></Item>
            ))}
        </ul>
        </div>
        </AnimateSharedLayout>
        </motion.div>
    )
}
function setColor (newColor){
  document.documentElement.style.setProperty('--accent-color', newColor);
}
function Item({ link, isSelected, onClick }) {

    return (
      <Link onClick={onClick} to={link.location}>
      <li className="item-circle" style={{ backgroundColor: link.color }}>
        {isSelected && (
          <motion.div
            layoutId="outline"
            className="outline"
            initial={false}
            animate={{ borderColor: link.color}}
            transition={springHeader}
          >
          </motion.div>
        )}
        <i className={"circle-icon "+link.icon}></i>
        <p style ={isSelected ? {opacity: 1, transform: 'translate(-50%, 160%)'} :{}}className="header-text">{link.name}</p>
      </li>
      </Link>
    );
  }  
  const springHeader = {
    type: "spring",
    stiffness: 200,
    damping: 20}

/*
<Link to='/Projects'>
  <li><p>Projects</p></li>
</Link>
<Link to='/About'>
  <li><p>About</p></li>
</Link>
<Link to='/Sorting'>
  <li><p>Sorting</p></li>
</Link>
*/