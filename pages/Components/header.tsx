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
      <nav className="p-5 shadow bg-primary md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between ">
          <img
            alt=""
            className="inline h-10"
            src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"
          />
          <BiMenu
            title="Hamburger menu Icon to trigger mobile view navigation bar"
            role="button"
            className="block mx-2 text-3xl cursor-pointer md:hidden"
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
          className={`${menuStyle} bg-primary font-semibold text-white md:flex md:items-center z-1 md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 transition-all ease-in duration-500`}
        >
          <li className="mx-4 my-6 md:my-0">
            <Link href="/">
              <a className="text-xl duration-500 hover:text-cyan-500">
                About Us
              </a>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link href="/">
              <a href="/" className="text-xl duration-500 hover:text-cyan-500">
                Services
              </a>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link href="/">
              <a href="/" className="text-xl duration-500 hover:text-cyan-500">
                Partners
              </a>
            </Link>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <Link href="/">
              <a href="/" className="text-xl duration-500 hover:text-cyan-500">
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
