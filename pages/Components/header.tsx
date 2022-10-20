import React, { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import disableScroll from 'disable-scroll';
import { useDispatch } from 'react-redux';
import ArrowRight from './ArrowRight';
import useNavBarVisible from '../hooks/useNavBarVisible';
import { setActiveTab } from '../store/form/formTab';

const Header: NextPage = () => {
  const { isVisible, setIsVisible } = useNavBarVisible();
  const dispatch = useDispatch();

  const [menuStyle, setMenuStyle] = useState('opacity-0 top-[-400px]');

  const toggleMenuActive = () => {
    setIsVisible(!isVisible);
  };
  const handleToggleMenu = () => {
    !isVisible ? disableScroll.on() : disableScroll.off();
    !isVisible
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
          {isVisible ? (
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
            isVisible && 'h-screen items-center'
          } bg-primary font-semibold md:mt-0 text-white justify-around flex-col pb-32 sm:pb-0 md:flex-row flex md:items-center z-50 md:z-auto md:static absolute w-full left-0 md:w-auto md:pl-0 pl-7 md:opacity-100 `}
        >
          <ul className="md:flex md:flex-row">
            <li className="flex flex-row items-center my-2">
              <Link href="/">
                <a className="mr-5 text-xl duration-500 hover:text-[#ACFE14]">
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
                  className="mr-5 text-xl duration-500 hover:text-[#ACFE14]"
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
                  className="mr-5 text-xl duration-500 hover:text-[#ACFE14]"
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
                  className="mr-5 text-xl duration-500 hover:text-[#ACFE14]"
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
              onClick={() => {
                dispatch(setActiveTab(1));
                window.scrollTo({ top: 300, behavior: 'smooth' });
                handleToggleMenu();
              }}
              type="button"
              className="p-3 bg-white rounded-xl text-primary"
            >
              Book Bus
            </button>
            <div className="w-1/12" />
            <button
              onClick={() => {
                dispatch(setActiveTab(2));
                window.scrollTo({ top: 300, behavior: 'smooth' });
                handleToggleMenu();
              }}
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
