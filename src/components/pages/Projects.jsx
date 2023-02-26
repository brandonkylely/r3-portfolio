import React from 'react';
import projectData from './projects/projects.json'
// opacity-0 bg-black
export default function Projects({}) {
    return (
        <div className='font-mono mt-20 text-lg font-bold grid grid-cols-3'>
            <header className='absolute text-3xl ml-10 -mt-14'>projects...
            <div className='w-80 -mt-4'>━━━━━━━━━━━━━━━━━━━━━━</div>
            </header>

        {projectData.map(project => {
            return (
                <div className='' key={project.key}>
                <a className=' absolute w-56 h-32 mx-10 border-1 border-black rounded-3xl bg-black bg-opacity-0 text-opacity-0 z-10 hover:bg-opacity-50 hover:text-opacity-80 text-center py-12 text-white' href={project.url} target='_blank'> 
                    {project.name} 
                </a>
                    <div className='z-0 w-56 h-32 mx-10 border-1 border-black rounded-3xl bg-no-repeat bg-center overflow-hidden bg-auto' style={{ backgroundImage: `url(${project.image})`}}> 
                    </div>
                <div className='text-center w-56 mx-10 mb-4'>{project.languages}</div>
                </div>
            )
        })}
        </div>
    )
}