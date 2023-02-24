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
      <div className='lightScreen'>
      <nav>
      <ul className="nav nav-tabs text-4xl grid-cols-3">

        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
            About
          </a>
        </li>
        <li className="nav-item">
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