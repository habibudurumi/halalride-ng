/** @format */

import Image from "next/image";
import Map from "../public/assets/map.png";

const Location = () => {
  return (
    <section className='width'>
      <h2 className='lead'>Location</h2>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className='bg-green-800 w-full lg:max-w-[400px] my-4 lg:mr-10 flex justify-center items-center font-ralewaMedium leading-10 text-white tracking-wider '>
          <p className='p-4 lg:p-0 text-center lg:text-left'>
            Number 32, Hadiza Hourse Behind <br /> Jifatu Plaza, Zoo Road,
            <br />
            Kano Kano <br />
            State, Nigeria
          </p>
        </div>
        <div className='my-4 border-4  border-green-800'>
          <span className=''>
            <Image src={Map} alt='map' />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Location;
