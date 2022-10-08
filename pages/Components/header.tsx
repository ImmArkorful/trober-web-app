import React, { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import disableScroll from 'disable-scroll';
import ArrowRight from './ArrowRight';

const Header: NextPage = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [menuStyle, setMenuStyle] = useState('opacity-0 top-[-400px]');

  const toggleMenuActive = () => {
    setMenuActive(!menuActive);
  };
  const handleToggleMenu = () => {
    !menuActive ? disableScroll.on() : disableScroll.off();
    !menuActive
      ? setMenuStyle(
          'transition-all ease-in duration-500 top-[70px] opacity-100'
        )
      : setMenuStyle('opacity-0 top-[-400px]');
    toggleMenuActive();
  };
  return (
    <header>
      <nav className="p-5 shadow bg-primary md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <img
            alt=""
            className="inline h-8 md:h-14"
            src="https://res.cloudinary.com/troberapp-com/image/upload/v1665265209/Web%20app%20assets/Web/Trober_logo1_3_dhkgng.svg"
          />
          {menuActive ? (
            <AiOutlineCloseCircle
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
          ) : (
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
          )}
        </div>
        <div
          className={`${menuStyle} ${
            menuActive && 'h-screen items-center'
          } bg-primary font-semibold md:mt-0 text-white justify-around flex-col pb-32 md:flex-row flex md:items-center z-50 md:z-auto md:static absolute w-full left-0 md:w-auto md:pl-0 pl-7 md:opacity-100 `}
        >
          <ul className="md:flex md:flex-row">
            <li className="flex flex-row items-center my-2">
              <Link href="/">
                <a className="mr-5 text-xl duration-500 hover:text-cyan-500">
                  About Us
                </a>
              </Link>
              <div className="block md:hidden">
                <ArrowRight />
              </div>
            </li>
            <li className="flex flex-row items-center my-2">
              <Link href="/">
                <a
                  href="/"
                  className="mr-5 text-xl duration-500 hover:text-cyan-500"
                >
                  Services
                </a>
              </Link>
              <div className="block md:hidden">
                <ArrowRight />
              </div>
            </li>
            <li className="flex flex-row items-center my-2">
              <Link href="/">
                <a
                  href="/"
                  className="mr-5 text-xl duration-500 hover:text-cyan-500"
                >
                  Partners
                </a>
              </Link>
              <div className="block md:hidden">
                <ArrowRight />
              </div>
            </li>
            <li className="flex flex-row items-center my-2">
              <Link href="/">
                <a
                  href="/"
                  className="mr-5 text-xl duration-500 hover:text-cyan-500"
                >
                  Media
                </a>
              </Link>
              <div className="block md:hidden">
                <ArrowRight />
              </div>
            </li>
          </ul>
          <div className="flex flex-row justify-center w-full md:hidden">
            <button
              type="button"
              className="p-3 bg-white rounded-xl text-primary"
            >
              Book Bus
            </button>
            <div className="w-1/12" />
            <button
              type="button"
              className="p-3 text-white border border-white bg-primary rounded-xl"
            >
              For Business
            </button>
          </div>
        </div>
        <div> </div>
      </nav>
    </header>
  );
};

export default Header;
