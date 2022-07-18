/** @format */

import Link from "next/link";

const CarouselInfo = () => {
  return (
    <>
      <div className='text-sm md:text-lg text-center flex flex-col items-center'>
        <h1 className='text-white my-6 md:my-12 font-birds text-[2rem] md:text-[4rem] tracking-widest'>
          Your way,
          <span className='block ml-[7rem] mt-4 md:mt-8'>Our way... </span>
        </h1>
        <p className='text-gray-300 w-[270px] tracking-wide text-sm md:text-base lg:text-lg  md:w-[441px] mb-2 opacity-90'>
          An Uber like, Intra city ride hailing transport service, with
          tricycles (keke-Napep) as the primary mode
        </p>
        <button className=' text-green-800 bg-gray-100 uppercase text-sm font-ralewayMedium font-bold tracking-widest py-2 px-6 mt-4 hover:bg-white hover:scale-105 transition-all duration-300'>
          <Link href='#'>
            <a>Get Started</a>
          </Link>
        </button>
      </div>
    </>
  );
};

export default CarouselInfo;
