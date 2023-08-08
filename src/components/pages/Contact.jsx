import React, { useState } from 'react';

const formEndpoint = "https://public.herotofu.com/v1/5e6a9170-b4eb-11ed-a036-a589518453bd";

export default function Contact({}) {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    };
  
    if (submitted) {
      return (
        <>
          <div className="text-2xl">Email sent!</div>
          <div className="text-md">I'll get back to you shortly!</div>
        </>
      );
    }
  
  return (
    <div className='overlayScreen font-mono'>

      <form
        action={formEndpoint}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        className='w-1/3 mx-auto py-28'
        >
        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
            />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
            />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Your message"
            name="message"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
            />
        </div>
        <div className="mb-3 pt-0 ">
          <button
            className="font-bold text-white border-2 border-black bg-blue-900 bg-opacity-70 rounded-xl p-2 hover:bg-opacity-60 hover:border-gray-400"
            type="submit"
            >
            send message
          </button>
        </div>
      </form>
      <footer className='text-center font-bold mx-40'>
      <div className='-mt-12 text-2xl'>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
      <ul className='flex flex-row justify-around mt-4 text-2xl'>
      <li><a className='text-white border-2 border-black bg-black bg-opacity-70 rounded-xl p-2 hover:bg-opacity-60 hover:border-gray-400' href='https://www.linkedin.com/in/brandon-ly-7300b1205/' target='_blank'>Linkedin</a></li>
      <li><a className='text-white border-2 border-black bg-black bg-opacity-70 rounded-xl p-2 hover:bg-opacity-60 hover:border-gray-400' href='https://github.com/brandonkylely' target='_blank'>Github</a></li>
      <li><a className='text-white border-2 border-black bg-black bg-opacity-70 rounded-xl p-2 hover:bg-opacity-60 hover:border-gray-400' href='mailto:brandonkly@ucla.edu' target='_blank'>Email</a></li>
      </ul>
      </footer>
    </div>
    );
  };