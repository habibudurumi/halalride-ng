/** @format */
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaHome, FaEnvelope, FaPortrait } from "react-icons/fa";
import Logo from "../../public/assets/halal-logo-green.png";
import { useState } from "react";
import { useRouter } from "next/router";
import SideBar from "./SideBar";
const links = [
  { id: 1, url: "/", text: "home", icon: <FaHome /> },
  { id: 2, url: "/about", text: "about", icon: <FaPortrait /> },
  { id: 3, url: "/contact", text: "contact", icon: <FaEnvelope /> },
];
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const { pathname } = useRouter();

  return (
    <nav className='lg:sticky top-0 right-0 w-full z-50 font-ralewayBold bg-white bg-opacity-90 bg-blend-luminosity '>
      <div className='mx-auto  max-w-[1240px]'>
        <div className='flex justify-between items-center width lg:mx-10'>
          <Link href='/'>
            <a>
              <Image src={Logo} height={50} width={100} alt='logo-image' />
            </a>
          </Link>
          <div className='lg:hidden'>
            {menu && (
              <SideBar links={links} setMenu={setMenu} pathname={pathname} />
            )}
            <FaBars onClick={() => setMenu(true)} className='fa-icon' />
          </div>

          <ul className='hidden lg:flex items-center'>
            {links.map((item) => {
              const { id, url, text } = item;
              return (
                <li
                  key={id}
                  className={`${
                    pathname === url && "text-green-800 opacity-100"
                  } text-green-800 opacity-50 uppercase font-bold my-2 ml-6  hover:text-red-800`}>
                  <Link href={url}>
                    <a>{text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
