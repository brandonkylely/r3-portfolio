import React from 'react';

export default function About({}) {
    return (
        <div className='grid grid-cols-2'>
        <div className='flex justify-center items-end flex-col font-bold text-3xl mt-16 mr-48'>
            <div style={{ backgroundImage: 'url(profile-picture1.jpg)'}} className='overflow-hidden bg-cover border-2 border-black rounded-full w-48 h-48 text-right'></div>
            my resume
            <br />
            ━━━━━━━━━━━━━
            <p className='mr-36'>
            <a href="brandon-resume.pdf" target="_blank" className='text-2xl'>PDF</a>
            </p>
        </div>
        <div className='font-bold text-3xl mt-12 col-start-2'>
            about...
            <br />
            ━━━━━━━━━━━━━━━━━━━━━━━━━━
            <p className='font-xl w-1/2 text-right'>
                Hi, I'm Brandon, and welcome to my portfolio.
                <br />
                <br />
                I'm a fullstack software developer.
                <br />
                <br />
                My skills include, MERN, SQL, Tailwind, Three, and more!
            </p>
        </div>

        </div>
    )
}