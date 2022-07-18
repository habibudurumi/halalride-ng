/** @format */

import React from "react";
const ContactUs = () => {
  return (
    <section className='width my-8'>
      <h2 className='lead'>contact us</h2>
      <div className='my-8 flex flex-col md:flex-row'>
        <form className='border border-green-800 w-full md:w-[65%] flex flex-col p-6'>
          <input className='input' type='text' placeholder='Name' />
          <input className='input' type='email' placeholder='Email' />
          <textarea className='input h-[150px]' placeholder='Message' />
          <button
            type='submit'
            className='text-white bg-green-800 uppercase text-sm font-ralewayMedium font-bold tracking-widest py-2 px-6 mt-4 hover:bg-green-600 transition-all duration-300'>
            Send
          </button>
        </form>
        <article className='w-full md:w-[400px] md:ml-10 bg-green-800 p-6 mt-6 md:mt-0 flex flex-col items-center md:items-start md:flex-col text-center md:text-left justify-between text-white'>
          <div className='div'>
            <h3 className='head'>Address</h3>
            <p className='body'>
              Number 32, Hadiza House <br /> Behind Jifatu Plaza, <br /> Zoo
              Road, Kano <br /> Kano State, Nigeria
            </p>
          </div>
          <div className='div'>
            <h3 className='head'>phone</h3>
            <p className='body'>
              <a className='hover:opacity-60' href=''>
                +2348036934175
              </a>
              <br />
              <a className='hover:opacity-60' href=''>
                +2348036934175
              </a>
            </p>
          </div>
          <div className='div'>
            <h3 className='head'>email</h3>
            <p className='body'>
              <a href=''>halalrideng1@gmail.com</a>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ContactUs;
