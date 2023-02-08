import React, { useState} from 'react';
import projectData from '../projectData';
import {GalleryItem} from '../components/layout.js'


const titles = [
    'Game Development',
    'Web Development'
]

function Projects() {

    const [option, setOption] = useState(0);
    const getItemsByCategory = (category) =>{
        return [...projectData].filter(x => x.category === parseInt(category))
      }
    const handleOptionChange = changeEvent => {
        setOption(changeEvent.target.value)
    }
    const getCategorytitle = (category) => {
        return titles[parseInt(category)]
    }
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
        <div className="opacity-out">
         <ul className="categoryList">    
            <li className="categoryItem">
                <label className="checkbox">
                    <input 
                    type="radio" 
                    name="category" 
                    value={0} 
                    checked={parseInt(option) === 0}
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
                    value={1}
                    checked={parseInt(option) === 1}
                    onChange={handleOptionChange}
                    className="categoryselect"
                    />
                    <span className="checkmark"></span>
                    <span className="input-text"> Web </span>
                </label>
            </li>
          
        </ul>
        </div>
        <div className="category fade-up">
           <h4 className="category-title">{getCategorytitle(option)}</h4>
            <div className="category-items">
            {getItemsByCategory(option).map(project => 
            <GalleryItem key={project.id} pr={project}/>)}
            </div>
        </div>
        </React.Suspense>
    )
}
export default Projects;