/** @format */

import React from "react";

const Section = ({ info }) => {
  return (
    <section className='text-white flex justify-center items-center flex-col lg:flex-row'>
      {info.map((item, i) => {
        const { icon, head, text } = item;
        return (
          <div
            key={i}
            className='flex flex-col justify-center items-center max-w-[300px] m-8'>
            <h2 className='text-[9rem] mx-auto hover:scale-105 transition-all duration-300 cursor-pointer'>
              {icon}
            </h2>
            <h3 className='uppercase font-bold tracking-widest my-4'>{head}</h3>
            <p className=' text-center mx-auto text-gray-300'>{text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Section;
