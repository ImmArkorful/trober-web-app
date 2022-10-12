import type { NextPage } from 'next';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImInstagram } from 'react-icons/im';
import { GrLinkedinOption } from 'react-icons/gr';

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
              <a className="py-2 text-left ">Privacy Policy</a>
              <a className="py-2 text-left ">FAQ</a>
            </div>
            <div className="flex flex-col text-sm font-semibold text-white md:mx-3 lg:mx-0 md:text-lg">
              <p className="text-gray-500">Offerings</p>
              <a className="py-2 text-left ">Business</a>
              <a className="py-2 text-left ">Drive for us</a>
              <a className="py-2 text-left ">Bus Partners</a>
              <a className="py-2 text-left ">Blog</a>
            </div>
          </div>
          <div className="flex flex-col text-sm font-semibold text-white md:mx-3 lg:mx-0 md:text-lg">
            <p className="text-gray-500">Contact us</p>
            <a href="mailto: info@troberapp.com" className="py-2 text-left ">
              info@troberapp.com
            </a>
            <a href="tel: +233553738944" className="py-2 text-left ">
              +233 553 738 944
            </a>
            <div className="flex justify-center py-2">
              <BsFacebook color="#8890A1" className="mx-2" size={24} />
              <AiFillTwitterCircle color="#8890A1" className="mx-2" size={28} />

              <div className="bg-icongrey rounded-full p-1.5 mx-2">
                <ImInstagram color="black" size={14} />
              </div>
              <div className="bg-icongrey rounded-full p-1.5 mx-2">
                <GrLinkedinOption color="black" size={14} />
              </div>
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
