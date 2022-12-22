import React, { useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import disableScroll from 'disable-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ArrowRight from './ArrowRight';
import useNavBarVisible from '../../hooks/useNavBarVisible';
import { setActiveTab } from '../../store/form/formTab';
import { RootState } from '../../store/store';

const buttonActive = 'bg-white text-primary';
const inactiveButton = 'text-white border border-white bg-primary';

const Header: NextPage = () => {
  const router = useRouter();
  const { isVisible, setIsVisible } = useNavBarVisible();
  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.form.activeTab);

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

  const routes = [
    {
      route: '/about',
      name: 'About Us',
    },
    {
      route: '/services',
      name: 'Services',
    },
    {
      route: '/partners',
      name: 'Partners',
    },
    {
      route: '/media',
      name: 'Media',
    },
  ];

  return (
    <header>
      <nav className="p-5 shadow bg-primary md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img
              alt=""
              className="inline h-8 md:h-14 hover:cursor-pointer"
              src="https://res.cloudinary.com/troberapp-com/image/upload/v1665265209/Web%20app%20assets/Web/Trober_logo1_3_dhkgng.svg"
            />
          </Link>
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
            {routes.map((route) => {
              return (
                <li
                  className="flex flex-row items-center my-2"
                  key={route.name}
                >
                  <Link href={route.route}>
                    <a
                      className={`${
                        router.pathname === route.route && 'text-[#ACFE14]'
                      } mr-5 text-xl duration-500 hover:text-[#ACFE14]`}
                    >
                      {route.name}
                    </a>
                  </Link>
                  <div className="block md:hidden">
                    <ArrowRight />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-row justify-center w-full gap-3 md:hidden">
            <button
              onClick={() => {
                dispatch(setActiveTab(0));
                window.scrollTo({ top: 300, behavior: 'smooth' });
                handleToggleMenu();
              }}
              type="button"
              className={`p-3 rounded-xl ${
                activeTab === 0 ? buttonActive : inactiveButton
              }`}
            >
              Daily Ride
            </button>
            <button
              onClick={() => {
                dispatch(setActiveTab(1));
                window.scrollTo({ top: 300, behavior: 'smooth' });
                handleToggleMenu();
              }}
              type="button"
              className={`p-3 rounded-xl ${
                activeTab === 1 ? buttonActive : inactiveButton
              }`}
            >
              Book Bus
            </button>
            <button
              onClick={() => {
                dispatch(setActiveTab(2));
                window.scrollTo({ top: 300, behavior: 'smooth' });
                handleToggleMenu();
              }}
              type="button"
              className={`p-3 rounded-xl ${
                activeTab === 2 ? buttonActive : inactiveButton
              }`}
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
