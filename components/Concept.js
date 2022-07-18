/** @format */

import Image from "next/image";
import Logo from "../public/assets/halal-logo-white.png";

const Concept = () => {
  return (
    <section className='width flex flex-col lg:flex-row justify-between items-center my-[3rem]'>
      <div className='flex justify-center items-center'>
        <div className='bg-green-800 rounded-full p-10 flex justify-center items-center h-[300px] w-[300px]'>
          <Image src={Logo} width={450} height={250} alt='logo' />
        </div>
      </div>
      <div className='text-center md:text-left my-6  lg:max-w-[700px] flex flex-col justify-center  lg:ml-10'>
        <h2 className='font-ralewayMedium font-bold tracking-wider uppercase text-green-800 text-xl md:text-xl mt-8 lg:mt-0 text-center lg:text-left '>
          Halal Ride Concept
        </h2>
        <p className='font-ralewayMedium my-4 md:text-[1rem] tracking-wider leading-10 text-green-700 text-center lg:text-left '>
          The Uber of tricycle (keke) services. A fast, efficient and on demand
          tricycle request at your palm. It is safe and secure customer centric
          transport using the ease of technology through App deployment,
          geolocation and payment system. <br />
          Automated matching and dispatch of riders for reduced wait time by
          passengers. Optimized services through driver or passenger incentives.
        </p>
      </div>
    </section>
  );
};

export default Concept;
