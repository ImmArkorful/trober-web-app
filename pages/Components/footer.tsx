import type { NextPage } from 'next';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImInstagram } from 'react-icons/im';
import { GrLinkedinOption } from 'react-icons/gr';
import Link from 'next/link';
import TroberLogger from '../../utils/logEvent';

const Footer: NextPage = () => {
  return (
    <footer className="bg-primary">
      <div className="flex flex-col items-start justify-between w-full py-5 text-white md:items-center md:py-12 lg:py-24 md:px-8 lg:px-16 md:flex-row ">
        <img
          alt=""
          className="self-start inline h-16 pl-5 mb-6 lg:h-20 md:mb-0 md:pl-0"
          src="https://res.cloudinary.com/troberapp-com/image/upload/v1665265209/Web%20app%20assets/Web/Trober_logo1_3_dhkgng.svg"
        />
        <div className="grid justify-between w-full grid-cols-2 grid-rows-2 px-5 text-gray-500 md:mt-4 md:grid-cols-4 md:grid-rows-none md:w-9/12">
          <div>
            <h1 className="mb-6 font-extrabold text-white md:text-lg lg:text-xl">
              Our Polices
            </h1>
            <ul className="flex flex-col gap-4">
              <li className="cursor-pointer hover:opacity-70">
                Privacy Policy
              </li>
              <li className="cursor-pointer hover:opacity-70">
                Terms & Conditions
              </li>
            </ul>
          </div>
          <div>
            <h1 className="mb-6 font-extrabold text-white md:text-lg lg:text-xl">
              Who we are
            </h1>
            <ul className="flex flex-col gap-4">
              <Link href="/about">
                <li className="cursor-pointer hover:opacity-70">About Us</li>
              </Link>
              <li className="cursor-pointer hover:opacity-70">Media</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-6 font-extrabold text-white md:text-lg lg:text-xl">
              Offerings
            </h1>
            <ul className="flex flex-col gap-4">
              <Link href="/services">
                <li className="cursor-pointer hover:opacity-70">Business</li>
              </Link>
              <Link href="/services/school">
                <li className="cursor-pointer hover:opacity-70">Schools</li>
              </Link>
              <Link href="/services/events">
                <li className="cursor-pointer hover:opacity-70">Events</li>
              </Link>
              <Link href="/services/churches">
                <li className="cursor-pointer hover:opacity-70">Churches</li>
              </Link>
            </ul>
          </div>

          <div className="flex flex-col text-sm font-semibold lg:mx-0 lg:text-lg">
            <h1 className="mb-6 font-extrabold text-white md:text-lg lg:text-xl">
              Contact us
            </h1>
            <a
              onClick={async () => {
                await TroberLogger('MailClicked');
              }}
              href="mailto: info@troberapp.com"
              className="py-2 text-left "
            >
              info@troberapp.com
            </a>
            <a
              onClick={async () => {
                await TroberLogger('PhoneClicked');
              }}
              href="tel: +233553738944"
              className="py-2 text-left "
            >
              +233 553 738 944
            </a>
            <div className="flex flex-row mt-14">
              <a href="https://web.facebook.com/groups/715306866452170">
                <BsFacebook
                  onClick={async () => {
                    await TroberLogger('FacebookClicked');
                  }}
                  color="white"
                  className="mx-2 hover:cursor-pointer"
                  size={26}
                />
              </a>
              <a href="https://twitter.com/troberapp">
                <AiFillTwitterCircle
                  onClick={async () => {
                    await TroberLogger('TwitterClicked');
                  }}
                  color="white"
                  className="mx-2"
                  size={30}
                />
              </a>

              <a
                href="https://www.instagram.com/troberapp/"
                className="px-2 pt-2 mx-2 bg-white rounded-full"
              >
                <ImInstagram
                  onClick={async () => {
                    await TroberLogger('InstagramClicked');
                  }}
                  color="black"
                  size={14}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/troberapp/"
                className="bg-white rounded-full py-1.5 px-2 mx-2"
              >
                <GrLinkedinOption
                  onClick={async () => {
                    await TroberLogger('LinkedInClicked');
                  }}
                  color="black"
                  size={14}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-16 font-medium text-white border-t-8 border-[#ACFE14] md:text-base lg:text-2xl">
        Copyright @ Trober Ltd. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
