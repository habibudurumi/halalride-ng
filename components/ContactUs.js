/** @format */

import React from "react";
const ContactUs = () => {
  return (
    <section className='width my-8'>
      <h2 className='lead'>contact us</h2>
      <div className='my-8 flex flex-col justify-center items-center'>
        <div className='div text-center'>
          <p className='body md:text-xl'>
            Number 32,Second Floor Hadiza House <br /> Behind Jifatu Plaza,{" "}
            <br /> Zoo Road, Kano <br /> Kano State, Nigeria
          </p>
        </div>
        <div className='div mt-6'>
          <p className='body text-center md:text-xl'>
            <a href='tel:' className='hover:opacity-60'>
              <span className='block'>Call Us</span>
              080-halal-ride
            </a>
          </p>
        </div>
        <div className='div mt-6 '>
          <p className='body md:text-xl bg-green-800 py-2 hover:bg-opacity-90 text-white bg-opacity-100 px-6'>
            <a href='mailto:halalrideng1@gmail.com'>Email Us</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
