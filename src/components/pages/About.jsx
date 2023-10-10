import React from "react";

export default function About({}) {
  return (
    <div className="grid grid-cols-2 overlayScreen itimFont">
      <div className="flex justify-center items-end flex-col font-bold text-3xl mt-16 mr-18">
        <div
          style={{ backgroundImage: "url(profile-picture1.jpg)" }}
          className="mr-40 overflow-hidden bg-cover border-2 border-black rounded-full w-48 h-48"
        ></div>
        <div className="mr-28 text-right">
          Socials
          <br />
          ━━━━
        </div>
        <div className="mr-28 w-96 text-3xl text-right">
          <a
            href="https://github.com/brandonkylely"
            target="_blank"
            className=""
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/brandon-ly-7300b1205/"
            target="_blank"
            className="mx-12"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/brandonkylely"
            target="_blank"
            className=""
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <br />
          <br />
          <a
            href="https://brandonkylely.github.io/resume/"
            target="_blank"
            className="text-3xl text-left"
          >
            Resume <i className="fa-solid fa-location-arrow"></i>
          </a>
        </div>
      </div>
      <div className="font-bold text-3xl mt-12 col-start-2 itimFont">
        About Me
        <br />
        ━━━━
        <p className="text-2xl w-2/3 text-right ml-12">
          Hello, I'm Brandon, and welcome to my portfolio.
          <br />
          <br />
          I'm a creative mind with a passion for problem solving and a love for
          learning.
          <br />
          <br />
          Let's build something together.
        </p>
      </div>
    </div>
  );
}
