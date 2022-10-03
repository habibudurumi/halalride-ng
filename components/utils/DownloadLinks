/** @format */
import { downloadLinks } from "../../data";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

const Downloads = ({ setShowDownload }) => {
  return (
    <div className='fixed h-full w-full bg-green-800  top-0 left-0 z-50 overflow-hidden text-white flex justify-center items-center'>
      <FaTimes
        onClick={() => setShowDownload(false)}
        className='text-white text-2xl absolute hover:scale-110 ease-in-out duration-300 top-[5rem] right-[9rem]'
      />
      <ul>
        {downloadLinks.map((link, index) => {
          const { name, url } = link;
          return (
            <li
              onClick={() => setShowDownload(false)}
              key={index}
              className='my-4 uppercase border py-2 px-6 font-bold tracking-wider hover:scale-110 transition-all duration-500 ease-in-out '>
              <Link href={url}>
                <a>{name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Downloads;
