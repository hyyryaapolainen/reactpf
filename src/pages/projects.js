import React, { useState } from 'react';
import projectData from '../projectData';
import {GalleryItem} from '../components/layout.js'
import {useSpring, animated} from 'react-spring'


function Projects() {
    const [show1, setHidden1] = useState(true);
    const [show2, setHidden2] = useState(true);
    const [show3, setHidden3] = useState(true);
    const [show4, setHidden4] = useState(true);

    const props = useSpring({opacity:1, from: {opacity: 0}})
    return (
        <React.Fragment>
         <ul className="categoryList">
            <li className="categoryItem">
            <input type="checkbox" defaultChecked="true" onChange={() => setHidden1(!show1)} name="Category 1"/>
            <label for="Category 1"> Category 1</label>
            </li>
            <li className="categoryItem">
            <input type="checkbox" defaultChecked="true" onChange={() => setHidden2(!show2)} name="Category 2"/>
            <label for="Category 2"> Category 2</label>
            </li>
            <li className="categoryItem">
            <input type="checkbox" defaultChecked="true" onChange={() => setHidden3(!show3)} name=" Category 3"/>
            <label for="Category 3"> Category 3</label>
            </li>
            <li className="categoryItem">
            <input type="checkbox" defaultChecked="true" onChange={() => setHidden4(!show4)} name="Category 4"/>
            <label for="Category 4"> Category 4</label>
            </li>
        </ul>
        <div className="gallery-container">
        {show1 ? <div className="category">
            <h4 className="category-title">CATEGORY1</h4>
            <div className="category-items">
            {projectData.map(project => { if(project.category === 1 && show1 === true) 
            return (<GalleryItem key={project.id} pr={project}></GalleryItem>)})}</div></div>
         : ``}
        {show2 ? <div className="category">
            <h4 className="category-title">CATEGORY2</h4>
            <div className="category-items">
            {projectData.map(project => { if(project.category === 2 && show2 === true) 
            return (<GalleryItem key={project.id} pr={project}></GalleryItem>)})}</div></div>
         : ``}
         {show3 ? <div className="category">
            <h4 className="category-title">CATEGORY3</h4>
            <div className="category-items">
             {projectData.map(project => { if(project.category === 3 && show3 === true) 
            return (<GalleryItem key={project.id} pr={project}></GalleryItem>)})}</div></div>
         : ``}
         {show4 ? <div className="category">
            <h4 className="category-title">CATEGORY4</h4>
            <div className="category-items">
             {projectData.map(project => { if(project.category === 4 && show4 === true) 
            return (<GalleryItem key={project.id} pr={project}></GalleryItem>)})}</div></div>
        : ``}
        </div>
        </React.Fragment>
    )
}
export default Projects;