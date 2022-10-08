import type { NextPage } from 'next';
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImInstagram } from 'react-icons/im';
import { GrLinkedinOption } from 'react-icons/gr';
import Image from 'next/image';

const Footer: NextPage = () => {
  return (
    <footer className="flex flex-col items-center justify-between w-full px-16 border-t shadow md:flex-row bg-primary">
      <a
        className="flex items-center justify-center gap-2"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </a>
      <div className="flex flex-col text-sm font-semibold text-white md:text-lg">
        <a href="mailto: info@troberapp.com" className="py-2 text-center">
          info@troberapp.com
        </a>
        <a href="tel: +233553738944" className="py-2 text-center">
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
    </footer>
  );
};

export default Footer;
