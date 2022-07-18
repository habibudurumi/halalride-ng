/** @format */

import Section from "./utils/Section";
import { info } from "../data";

const Info = () => {
  return (
    <section className='width bg-green-800 py-8 px-4 my-[4rem] lg:my-14'>
      <h1 className='lead text-white'>Features of our app</h1>
      <Section info={info} />
    </section>
  );
};

export default Info;
