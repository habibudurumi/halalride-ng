/** @format */

import {
  FaCopyright,
  FaFacebook,
  FaLinkedin,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='mt-10 bg-green-800 text-center py-8 text-white'>
      <div className='flex justify-center my-4'>
        <a
          href='https://web.facebook.com/halalride'
          target='_blank'
          rel='noreferrer'>
          <FaFacebook className='social-icon' />
        </a>
        <a
          href='https://twitter.com/halal_ride'
          target='_blank'
          rel='noreferrer'>
          <FaTwitter className='social-icon' />
        </a>
        <a
          href='https://www.linkedin.com/in/halalride/'
          target='_blank'
          rel='noreferrer'>
          <FaLinkedin className='social-icon' />
        </a>
      </div>

      <p className='flex items-center justify-center font-ralewaMedium tracking-wide opacity-50'>
        <FaRegCopyright className='mr-2' /> All Right Reserved |{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
