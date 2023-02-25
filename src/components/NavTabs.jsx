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
      <div className='lightScreen bg-gradient-to-t from-green-400 to-blue-500'>
      <nav className=''>
      <ul className="row-reverse text-center gap-1 text-3xl grid grid-cols-9 px-2">
      <li className="nav-item col-span-5 text-5xl text-left py-2 pl-1">
            Brandon Ly's Portfolio
        </li>
        <li className="nav-item col-start-7 my-4 py-1.5 pr-2 border-2 border-black rounded-2xl">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >
            Projects
          </a>
        </li>
        <li className="nav-item my-4 py-1.5 pr-1 border-2 border-black rounded-2xl">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
            About
          </a>
        </li>
        <li className="nav-item my-4 py-1.5 pr-2 border-2 border-black rounded-2xl">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
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