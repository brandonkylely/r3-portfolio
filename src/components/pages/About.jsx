import React from "react";

export default function About({}) {
  return (
    <div className="grid grid-cols-2 overlayScreen">
      <div className="flex justify-center items-end flex-col font-bold text-3xl mt-16 mr-10">
        <div
          style={{ backgroundImage: "url(profile-picture1.jpg)" }}
          className="mr-40 overflow-hidden bg-cover border-2 border-black rounded-full w-48 h-48 text-right"
        ></div>
        <div className="mr-28 text-right">
          Socials
          <br />
          ━━━━━━━━━━━━━━━━━━━━━
        </div>
        <div className="mr-20 w-80 text-5xl ">
          <a
            href="https://github.com/brandonkylely"
            target="_blank"
            className=""
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/brandon-ly-7300b1205/"
            target="_blank"
            className="mx-12"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/brandonkylely"
            target="_blank"
            className=""
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
          <br />

          <a
            href="https://brandonkylely.github.io/resume/"
            target="_blank"
            className="text-3xl"
          >
            Resume <i class="fa-solid fa-location-arrow"></i>
          </a>
        </div>
      </div>
      <div className="font-bold text-3xl mt-12 col-start-2">
        About Me
        <br />
        ━━━━━━━━━━━━━━━━━━━━━━━━━━
        <p className="font-xl w-2/3 text-right ml-12">
          Hi, I'm Brandon, and welcome to my portfolio.
          <br />
          <br />
          I'm a Fullstack Software Engineer with a background in Biochemistry.
          <br />
          <br />
          Feel free to contact me with any business inquiries!
        </p>
      </div>
    </div>
  );
}
