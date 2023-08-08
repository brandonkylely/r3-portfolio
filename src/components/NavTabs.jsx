import React from "react";

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
          className={
            currentPage === "Contact"
              ? "lightScreen bg-gradient-to-t from-red-400 to-blue-500"
              : currentPage === "About"
              ? "lightScreen bg-gradient-to-t from-purple-400 to-blue-500"
              : "lightScreen bg-gradient-to-t from-green-400 to-blue-500"
          }
        >
          <nav className="">
            <ul className="text-center gap-1 text-2xl grid grid-cols-12">
              <li className="itimFont font-bold text-blue-900 nav-item col-span-6 text-3xl text-left py-4 pl-3">
                Brandon Ly: Software Engineer
              </li>
              <li className="itimFont col-start-7 col-span-2 mt-4">
                <a
                  href="#projects"
                  onClick={() => handlePageChange("Projects")}
                  className={
                    currentPage === "Projects"
                      ? "bg-black bg-opacity-50 bg-cover overflow-hidden text-white py-2 border-2 border-black rounded-2xl hover:border-gray-400"
                      : "bg-black bg-opacity-70 bg-cover overflow-hidden text-white py-2 border-2 border-black rounded-2xl hover:border-gray-400"
                  }
                >
                  Projects
                </a>
              </li>
              <li className="itimFont mt-4 col-span-2">
                <a
                  href="#about"
                  onClick={() => handlePageChange("About")}
                  className={
                    currentPage === "About"
                      ? "px-4 bg-black bg-opacity-50 bg-cover overflow-hidden text-white py-2 border-2 border-black rounded-2xl hover:border-gray-400"
                      : "px-4 bg-black bg-opacity-70 bg-cover overflow-hidden text-white py-2 border-2 border-black rounded-2xl hover:border-gray-400"
                  }
                >
                  About
                </a>
              </li>
              <li className="itimFont mt-4 col-span-2">
                <a
                  href="#contact"
                  onClick={() => handlePageChange("Contact")}
                  className={
                    currentPage === "Contact"
                      ? "px-2 bg-black bg-opacity-50 bg-cover overflow-hidden text-white py-2 border-2 border-black rounded-2xl hover:border-gray-400"
                      : "px-2 bg-black bg-opacity-70 bg-cover overflow-hidden text-white py-2 border-2 border-black rounded-2xl hover:border-gray-400"
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* <img src='taskbar.jpg' alt='' className='mt-96 w-10/12 mx-auto mt-545px bottom-0 rounded-t-lg'/> */}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
