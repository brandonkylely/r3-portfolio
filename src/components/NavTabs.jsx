import React from 'react';

export default function NavTabs({ currentPage, handlePageChange, on }) {
    console.log(on)
    return (
        <div>
    {on ? (
      <div>
      <ul className="nav nav-tabs">

        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange('Projects')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
            >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
            Contact
          </a>
        </li>
      </ul>
      </div>
    ) : (<div/>)}
    </div>
    );
  }