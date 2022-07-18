/** @format */

import Link from "next/link";
import { FaTimes } from "react-icons/fa";

const SideBar = ({ links, setMenu, pathname }) => {
  return (
    <nav className='absolute top-0 z-50 right-0 h-screen bg-black bg-opacity-100 text-white w-full'>
      <FaTimes
        onClick={() => setMenu(false)}
        className='text-red-800 absolute fa-icon top-6 right-4'
      />
      <ul className='mt-[7rem] flex flex-col items-center'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li
              onClick={() => setMenu(false)}
              className={` ${
                pathname === url && "text-red-800"
              } my-6 uppercase tracking-wider font-bold hover:text-green-800`}
              key={id}>
              <Link href={url}>
                <a className='flex flex-col items-center'>
                  <span className='mt-2 text-2xl'>{icon}</span>
                  {text}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideBar;
