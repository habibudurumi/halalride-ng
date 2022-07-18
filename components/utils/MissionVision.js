/** @format */

const MissionVision = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        const { id, head, body } = item;
        return (
          <div
            key={id}
            className=' bg-green-800 p-4 text-white md:max-w-[500px]'>
            <h3 className='uppercase font-ralewaMedium tracking-widest text-center my-2 font-bold'>
              {head}
            </h3>
            <p className='opacity-50 tracking-wide text-center text-sm md:text-base font-ralewayRegular p-2'>
              {body}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default MissionVision;
