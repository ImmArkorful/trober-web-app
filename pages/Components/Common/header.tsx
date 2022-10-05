import React, { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';

const Header: NextPage = () => {
  const [menuActive, setMenuActive] = useState(true);
  const [menuStyle, setMenuStyle] = useState('opacity-0 top-[-400px]');

  const toggleMenuActive = () => {
    setMenuActive(!menuActive);
  };
  const handleToggleMenu = () => {
    menuActive
      ? setMenuStyle('top-[80px] opacity-100')
      : setMenuStyle('opacity-0 top-[-400px]');
    toggleMenuActive();
  };
  return (
    <header>
      <nav className="p-5 bg-primary shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center ">
          <img
            data-aos="fade-right"
            alt=""
            className="h-10 inline"
            src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"
          />
          <BiMenu
            data-aos="fade-right"
            title="Hamburger menu Icon to trigger mobile view navigation bar"
            role="button"
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            onClick={() => {
              handleToggleMenu();
            }}
            onKeyDown={() => {
              handleToggleMenu();
            }}
            tabIndex={0}
            color="white"
          />
        </div>

        <ul
          data-aos={menuActive ? 'fade-left' : ''}
          className={`${menuStyle} bg-primary font-semibold text-white md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 transition-all ease-in duration-500`}
        >
          <li className="mx-4 my-6 md:my-0">
            <Link href="/">
              <a className="text-xl hover:text-cyan-500 duration-500">
                About Us
              </a>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link href="/">
              <a href="/" className="text-xl hover:text-cyan-500 duration-500">
                Services
              </a>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link href="/">
              <a href="/" className="text-xl hover:text-cyan-500 duration-500">
                Partners
              </a>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link href="/">
              <a href="/" className="text-xl hover:text-cyan-500 duration-500">
                Media
              </a>
            </Link>
          </li>
        </ul>
        <div> </div>
      </nav>
    </header>
  );
};

export default Header;
