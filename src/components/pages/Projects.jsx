import React from 'react';
import projectData from './projects/projects.json'
// opacity-0 bg-black
export default function Projects({}) {
    return (
        <div className='text-xl grid grid-cols-3'>
        {projectData.map(project => {
            return (
                <div className='w-40 h-20 border-2 border-black rounded-2xl bg-no-repeat bg-center bg-origin-padding hover:bg-opacity-80' style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'contain'}}> 
                    {/* <img className='hover:bg-black ' src={project.image} alt={project.name} /> */}
                    {/* <h3 className='bg-opacity-20 bg-black absolute bottom-20 ml-12 border-2 border-black rounded-2xl'>{project.name}</h3> */}
                </div>
            )
        })}
        </div>
    )
}