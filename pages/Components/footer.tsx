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
          className="inline pl-5 h-14 md:pl-0"
          src="https://res.cloudinary.com/troberapp-com/image/upload/v1665265209/Web%20app%20assets/Web/Trober_logo1_3_dhkgng.svg"
        />
        <div className="flex flex-row justify-between w-full px-5 md:w-9/12 lg:justify-around lg:w-6/12">
          <div className="flex flex-col justify-between md:flex-row lg:w-5/12">
            <div className="flex flex-col text-sm font-semibold text-white md:mx-3 lg:mx-0 md:text-lg">
              <p className="text-gray-500">Legal</p>
              <Link href="/privacypolicy">
                <a className="py-2 text-left hover:cursor-pointer">
                  Privacy Policy
                </a>
              </Link>
              <Link href="https://troberapp.medium.com/" passHref>
                <a
                  target="_blank"
                  className="py-2 text-left hover:cursor-pointer"
                >
                  Blog
                </a>
              </Link>
            </div>
            {/* <div className="flex flex-col text-sm font-semibold text-white md:mx-3 lg:mx-0 md:text-lg">
              <p className="text-gray-500">Offerings</p>
              <a className="py-2 text-left ">Business</a>
              <a className="py-2 text-left ">Drive for us</a>
              <a className="py-2 text-left ">Bus Partners</a>
              <a className="py-2 text-left ">Blog</a>
            </div> */}
          </div>
          <div className="flex flex-col text-sm font-semibold text-white md:mx-3 lg:mx-0 md:text-lg">
            <p className="text-gray-500">Contact us</p>
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
            <div className="flex justify-center py-2">
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
      <div className="flex justify-center pb-5 font-medium text-white md:text-base lg:text-2xl">
        @Trober 2022
      </div>
    </footer>
  );
};

export default Footer;
