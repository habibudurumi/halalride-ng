/** @format */
import { data } from "../data";
import MissionVision from "./utils/MissionVision";
const AboutInfo = () => {
  return (
    <section className='width'>
      <h2 className='font-ralewayMedium font-bold tracking-wider uppercase text-green-800 text-xl md:text-xl mt-8 lg:mt-0 text-center'>
        About the halal ride
      </h2>
      <p className='font-ralewayMedium my-4 md:text-[1rem] tracking-wider leading-8 text-green-700 text-center lg:max-w-[550px] mx-auto'>
        Halal ride is an Uber like, Intra city ride hailing transport service,
        with tricycles (keke-Napep) as the primary mode (1st phase).
      </p>
      <article className='grid grid-cols-1 gap-8 md:grid-cols-3 my-8'>
        <MissionVision data={data} />
      </article>
    </section>
  );
};

export default AboutInfo;
