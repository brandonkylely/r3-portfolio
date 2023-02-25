import React from 'react';

export default function About({}) {
    return (
        <div className='grid grid-cols-2 overlayScreen'>
        <div className='flex justify-center items-end flex-col font-bold text-3xl mt-16 mr-10'>
            <div style={{ backgroundImage: 'url(profile-picture1.jpg)'}} className='mr-40 overflow-hidden bg-cover border-2 border-black rounded-full w-48 h-48 text-right'></div>
            <div className='mr-28 text-right'>
                details
            <br />
            ━━━━━━━━━━━━━━━━━━━━━
            </div>
            <p className='mr-20'>
            <p className='text-xl'>━B.S. in Biochemistry, UCLA <span className='italic text-base'>2016-2020</span></p>
            <p className='text-xl'>━Fullstack/Flex Coding, 
            <br />
            UCI Bootcamp <span className='italic text-base'>2022-2023</span></p>
            <br />
            <a href="brandon-resume.pdf" target="_blank" className='text-2xl'>Click here to see my resume!</a>
            </p>
        </div>
        <div className='font-bold text-3xl mt-12 col-start-2'>
            about...
            <br />
            ━━━━━━━━━━━━━━━━━━━━━━━━━━
            <p className='font-xl w-2/3 text-right ml-12'>
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