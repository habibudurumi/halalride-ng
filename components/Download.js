/** @format */

import React from "react";
import Image from "next/image";

const Download = ({ img }) => {
  return (
    <div className='mx-4 md:mx-8'>
      <h2 className='lead my-6'>download our app</h2>
      <div className='flex justify-between md:justify-center items-center z-0'>
        {img.map((image, i) => (
          <span
            className='mx-4 hover:cursor-pointer hover:scale-105 transition-all duration-500'
            key={i}>
            <a href={image.url}>
              <Image src={image.name} width={200} height={60} alt='img' />
            </a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Download;
