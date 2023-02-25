import React from 'react';

export default function About({}) {
    return (
        <div className='grid grid-cols-2'>
        <div className='text-right font-bold text-3xl mt-64 mr-28'>
            my resume
            <br />
            ━━━━━━━━━━━━━
            <p className='font-xl w-2/3 text-left '>

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