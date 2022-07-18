/** @format */

import { stats } from "../data";

const CompanyStats = () => {
  return (
    <section className='width bg-green-800 p-6 flex justify-evenly items-center text-white my-[3rem]'>
      {stats.map((item) => {
        const { number, text } = item;
        return (
          <div key={number} className='text-center'>
            <h2 className='font-bold tracking-widest text-2xl md:text-[4rem] my-2 md:my-8'>
              {number}
            </h2>
            <p className='capitalize md:text-xl mb-4 opacity-60'>{text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default CompanyStats;
