import React, { useState } from 'react';
import projectData from '../projectData';
import {GalleryItem} from '../components/layout.js'
//import { motion } from "framer-motion"


function Projects() {

    const [option, setOption] = useState('category1');
    
    const handleOptionChange = changeEvent => {
        setOption(changeEvent.target.value)
    }
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
        <div>
         <ul className="categoryList">    
            <li className="categoryItem">
                <label className="checkbox">
                    <input 
                    type="radio" 
                    name="category" 
                    value="category1"
                    checked={option === "category1"}
                    onChange={handleOptionChange}
                    className="categoryselect"
                    />
                    <span className="checkmark"></span>
                    <span className="input-text"> Games </span>
                </label>
            </li>
            <li className="categoryItem">
                <label className="checkbox">
                    <input 
                    type="radio" 
                    name="category" 
                    value="category2"
                    checked={option === "category2"}
                    onChange={handleOptionChange}
                    className="categoryselect"
                    />
                    <span className="checkmark"></span>
                    <span className="input-text"> Web </span>
                </label>
            </li>
          
        </ul>
        </div>
        
        {option === 'category1' ? <div className="category">
           <h4 className="category-title">Games</h4>
            <div className="category-items">
            {projectData.map(project => {if(project.category === 1){
            return (<GalleryItem key={project.id} pr={project}></GalleryItem>)
            } else{return }
            })}</div></div>
         : ``}
        
        {option === 'category2' ? <div className="category">
        <h4 className="category-title">Web Development</h4>
            <div className="category-items">
            {projectData.map(project => { if(project.category === 2){
            return (<GalleryItem key={project.id} pr={project}></GalleryItem>)
            } else{return }
        })}</div></div>
         : ``}
         {option === 'category3' ? <div className="category">
             <h4 className="category-title">Pixel Art</h4>
            <div className="category-items">
             {projectData.map(project => { if(project.category === 3) {
            return (<GalleryItem key={project.id} pr={project}></GalleryItem>)
        } else{return}})}</div></div>
         : ``}
        </React.Suspense>
    )
}
export default Projects;