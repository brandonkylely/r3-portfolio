import React from 'react';

export default function NavTabs({ currentPage, handlePageChange, on }) {
    // console.log(on)

    // const renderPage = () => {
    //   if (currentPage === 'Projects') {
    //     return <Projects />;
    //   }
    //   if (currentPage === 'About') {
    //     return <About />;
    //   }
    //   if (currentPage === 'Contact') {
    //     return <Contact />;
    //   }
    // };

    return (
        <div>
    {on ? (
      <div 
      // className='lightScreen bg-gradient-to-t from-green-400 to-blue-500'
      className={currentPage === 'Contact' ? 'lightScreen bg-gradient-to-t from-red-400 to-blue-500' : currentPage === 'About' ? 'lightScreen bg-gradient-to-t from-purple-400 to-blue-500' : 'lightScreen bg-gradient-to-t from-green-400 to-blue-500'}
      >
      <nav className=''>
      <ul className="text-center gap-1 text-2xl grid grid-cols-9 px-2">
      <li className="font-mono font-bold nav-item col-span-6 text-4xl text-left py-2 pl-1">
            Brandon Ly's Portfolio
        </li>
        <li className="font-mono col-start-7 my-4 py-1.5 border-2 border-black rounded-2xl">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'bg-black bg-opacity-50 bg-cover overflow-hidden text-white my-4 py-2 pr-0.5 border-1 border-black rounded-2xl' : 'bg-black bg-opacity-70 bg-cover overflow-hidden text-white my-4 py-2 pr-0.5 border-1 border-black rounded-2xl'}
            >
            Projects
          </a>
        </li>
        <li className="font-mono my-4 py-1.5 border-2 border-black rounded-2xl">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'bg-black bg-opacity-50 bg-cover overflow-hidden text-white my-4 py-2 pl-6 pr-4 border-1 border-black rounded-2xl' : 'bg-black bg-opacity-70 bg-cover overflow-hidden text-white my-4 py-2 pl-6 pr-4 border-1 border-black rounded-2xl'}
            >
            About
          </a>
        </li>
        <li className="font-mono my-4 py-1.5 border-2 border-black rounded-2xl">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'bg-black bg-opacity-50 bg-cover overflow-hidden text-white my-4 py-2 pl-2 pr-1.5 border-1 border-black rounded-2xl' : 'bg-black bg-opacity-70 bg-cover overflow-hidden text-white my-4 py-2 pl-2 pr-1.5 border-1 border-black rounded-2xl'}
            >
            Contact
          </a>
        </li>
      </ul>
      </nav>
      </div>
    ) : (<div/>)}
    </div>


    );
  }