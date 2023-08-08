import React from 'react';
import projectData from './projects/projects.json'
// opacity-0 bg-black
export default function Projects({}) {
    return (
        <div className='font-mono mt-20 w-600px text-lg font-bold grid md:grid-cols-3 grid-cols-2'>
            <header className='absolute text-3xl md:ml-10 -ml-10 -mt-14'>Projects
            <div className='w-80 -mt-4 invisible md:visible'>━━━━━━━━━━━━━━━━━━━━━━</div>
            </header>

        {projectData.map(project => {
            return (
                <div className='' key={project.key}>

                <div className='z-10 absolute font-bold text-lg md:w-56 w-60 h-32 md:mx-10 md:my-0 my-4 border-1 border-black rounded-3xl bg-black md:bg-opacity-0 md:text-opacity-0 hover:bg-opacity-50 hover:text-opacity-80 bg-opacity-50 text-opacity-80 text-center py-12 text-white'> 
                    {project.name} 
                    <br />
                    <div className='flex justify-around z-20 text-2xl'>
                      {project.url && <a href={project.url} target='_blank'><i class="fa-solid fa-location-arrow"></i></a>} <a href={project.github} target='_blank'><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                    <div className='z-0 md:w-56 w-60 h-32 md:mx-10 md:my-0 my-4 border-1 border-black rounded-3xl bg-no-repeat bg-center lg:overflow-hidden bg-auto' style={{ backgroundImage: `url(${project.image})`}}> 
                    </div>
                <div className='md:static absolute text-center w-56 mx-10 mb-4 invisible md:visible'>{project.languages}</div>
                </div>
            )
        })}
        </div>
    )
}